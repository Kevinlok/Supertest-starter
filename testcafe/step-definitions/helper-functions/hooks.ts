import { Before } from 'cucumber';
import { Environment, ServiceParameters } from '../../environment';
import { Request } from './request';

//variables needed for requests to matching service
const serviceParameters: ServiceParameters = Environment.getServiceParameters(
  'user-movie-service'
);
const url = serviceParameters.url;
const authorizationKey = serviceParameters.authorizationKey;

let username: string;

Before('@Register', async () => {
  const rnd = Math.floor(Math.random() * 100) + 1;
  username = 'kevin' + rnd.toString() + '@gmail.com';
  await Request.request({
    type: 'post',
    base: url,
    endPoint: 'api/users/register',
    body: JSON.parse(`{"email": "${username}", "password": "wachtwoord" }`),
    authKey: authorizationKey
  });
});

Before('@Login', async () => {
  await Request.request({
    type: 'post',
    base: url,
    endPoint: 'api/users/tokens',
    body: JSON.parse(`{"email": "${username}", "password": "wachtwoord" }`)
  });
});
