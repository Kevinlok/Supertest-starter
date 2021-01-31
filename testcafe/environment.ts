import * as minimist from 'minimist';

// Let op, onderstaand statement niet wijzigen in een 'import' want dan werkt het gek genoeg echt niet meer.
// eslint-disable-next-line @typescript-eslint/no-var-requires
const config = require('./config.json');

const args = minimist(process.argv.slice(2));
const env = args.env ? args.env : 'test';

export interface ServiceParameters {
  url: string;
  version: string;
  endPoint: string;
  authorizationKey: string;
}

export class Environment {
  public static getServiceParameters(service: string): ServiceParameters {
    return config.environments[env].service[service];
  }
}
