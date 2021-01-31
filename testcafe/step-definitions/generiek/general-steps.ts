import { Then } from 'cucumber';
import { Request } from '../helper-functions/request';

// TODO 5: 
// Import the Assertions class from assertions.ts


let response: unknown;

Then(
  'I expect a response status {int}',
  async (_t: TestController, [responseStatus]) => {
    // TODO 6:
    // Use the getResponse method from Request to store the response in the variable response. 

    // TODO 7:
    // Use the assertResponse method from assertions.ts to check if response is equal responseStatus.

  }
);

Then(
  'expect that the body contains {string} {string}',
  async (_t: TestController, [property, propertyContent]) => {
    response = Request.getResponse();
    return Assertions.assertBody(property, propertyContent, response);
  }
);

Then(
  'expect that the error contains {string} {string}',
  async (_t: TestController, [property, propertyContent]) => {
    // TODO 9:
    // Use the getResponse method from Request to store the response in the variable response. 

    // TODO 10:
    // Use the assertError method from assertions.ts to check if response body contains the property and propertyContent variables.  
  }
);
