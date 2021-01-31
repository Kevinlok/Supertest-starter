/* eslint-disable @typescript-eslint/no-explicit-any */
import * as supertest from 'supertest';

/** The base requests set up with supertest are available in this class */
export class RequestHelper {
  private stRequest: supertest.SuperAgentTest;
  private stResponse: supertest.Response;

  /** Method to get the response from the request. */
  public getResponse(): supertest.Response {
    return this.stResponse;
  }

  /** Method to get a toke from the response body. */
  public getToken(): string {
    return this.stResponse.body.data.token;
  }

  /**
   * The function makes a request to an API using the given method.
   * @param request.type The type of request to make: post, delete, put or get.
   * @param request.base The base url of the API the request is sent to.
   * @param request.authKey The authorization key for the request.
   * @param request.endPoint The endpoint of the request.
   * @param request.body The body for the request in json format.
   */
  public async request(request: {
    type: 'post' | 'del' | 'delete' | 'put' | 'get';
    base: string;
    endPoint: string;
    body: JSON;
    authKey?: string;
  }): Promise<void> {
    this.stRequest = supertest.agent(request.base);
    request.authKey === undefined ? (request.authKey = '') : null;

    //Needed because add movies endpoint has another key value
    let auth: string;
    request.authKey.length >= 20
      ? (auth = 'Authorization')
      : (auth = 'x-api-key');
    const preRequest: any = this.stRequest.set(auth, request.authKey);

    switch (request.type) {
      case 'post':
        this.stResponse = await preRequest
          .post(request.endPoint)
          .send(request.body);
        break;
      case 'delete':
        this.stResponse = await preRequest
          .delete(request.endPoint)
          .send(request.body);
        break;
      case 'put':
        this.stResponse = await preRequest
          .put(request.endPoint)
          .send(request.body);
        break;
      case 'get':
        this.stResponse = await preRequest
          .get(request.endPoint)
          .send(request.body);
        break;
    }
  }
}

export const Request = new RequestHelper();
