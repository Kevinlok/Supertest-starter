/* eslint-disable @typescript-eslint/no-explicit-any */
import { Given, Then } from 'cucumber';
import { Request } from './helper-functions/request';
import { Environment, ServiceParameters } from '../environment';
import { Assertions } from './helper-functions/assertions';

//variables needed for requests to matching service
const serviceParameters: ServiceParameters = Environment.getServiceParameters(
  'user-movie-service'
);

// TODO: 1
// Get the url from service parameters
// Get the authorizationKey from service parameters
let username: string;
let response: any;
let token: string;
let movieTitle: string;

Given(
  'I am doing a healthcheck on the user movie api {string} an key',
  async (_t: TestController, [withOrWithout]) => {
    if (withOrWithout === 'with') {
      // TODO: 2
      // Make a get request to the url with the authorization key
      // endpoint is an empty string
      // Body is an empty JSON object. Hint: JSON.parse('{}')
      
    } else if (withOrWithout === 'without') {
      // TODO: 3
      // Make a get request to the url without the authorization key
      // endpoint is an empty string
      // Body is an empty JSON object. Hint: JSON.parse('{}')
    }
  }
);

Given('I make a post request to register a user', async () => {
  const rnd = Math.floor(Math.random() * 100) + 1;
  username = 'kevin' + rnd.toString() + '@gmail.com';
  await Request.request({
    type: 'post',
    base: url,
    endPoint: 'api/users/register',
    body: JSON.parse(`{"email": "${username}", "password": "wachtwoord" }`)
  });
});

Then(
  'expect that the body contains the user email',
  async (t: TestController) => {
    response = Request.getResponse();
    const object = {};
    object['email'] = `${username}`;
    await t.expect(response.body.data).contains(object);
  }
);

Given('I login with the user', async () => {
  username = Request.getResponse().body.data.email;
  await Request.request({
    type: 'post',
    base: url,
    endPoint: 'api/users/tokens',
    body: JSON.parse(`{"email": "${username}", "password": "wachtwoord" }`)
  });
});

Then('expect that the body contains a token', async () => {
  response = Request.getResponse();
  token = Request.getToken();
  const property = 'token';
  const propertyContent = token;
  return Assertions.assertBodyData(property, propertyContent, response);
});

Given('I add a movie with a random title', async () => {
  const rnd = Math.floor(Math.random() * 100) + 1;
  movieTitle = 'Fast and the furious ' + rnd.toString();
  token = Request.getToken();
  const key = 'Bearer ' + token;

  await Request.request({
    type: 'post',
    base: url,
    endPoint: 'api/movies',
    body: JSON.parse(`{"title": "${movieTitle}", "year": "2021" }`),
    authKey: key
  });
});

Then('expect that the body contains the title', async () => {
  response = Request.getResponse();
  const property = 'title';
  const propertyContent = movieTitle;
  return Assertions.assertBodyData(property, propertyContent, response);
});

Then('expect that the body contains movie year', async () => {
  response = Request.getResponse();
  const property = 'year';
  const propertyContent = '2021';
  return Assertions.assertBodyData(property, propertyContent, response);
});
