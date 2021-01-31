import * as supertest from 'supertest';

export class RequestHelper {
  static request: supertest.SuperAgentTest;
  static response: supertest.Response;

  public static async getRequest(
    app: string,
    authorizationKey: string,
    endPoint: string,
    body: JSON
  ): Promise<void> {
    this.request = supertest.agent(app);
    this.response = await this.request
      .get(endPoint)
      .set('Authorization', authorizationKey)
      .send(body);
  }

  public static async postRequest(
    app: string,
    authorizationKey: string,
    endPoint: string,
    body: JSON
  ): Promise<void> {
    this.request = supertest.agent(app);
    this.response = await this.request
      .post(endPoint)
      .set('Authorization', authorizationKey)
      .send(body);
  }

  public static async deleteRequest(
    app: string,
    authorizationKey: string,
    endPoint: string,
    body: JSON
  ): Promise<void> {
    this.request = supertest.agent(app);
    this.response = await this.request
      .delete(endPoint)
      .set('Authorization', authorizationKey)
      .send(body);
  }

  public static async putRequest(
    app: string,
    authorizationKey: string,
    endPoint: string,
    body: JSON
  ): Promise<void> {
    this.request = supertest.agent(app);
    this.response = await this.request
      .put(endPoint)
      .set('Authorization', authorizationKey)
      .send(body);
  }

  public static getToken(): string {
    return this.response.body.token;
  }
}
