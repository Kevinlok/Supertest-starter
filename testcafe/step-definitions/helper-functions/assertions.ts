/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { t } from 'testcafe';

export class Assertions {
  public static async assertResponse(
    responseStatus: number,
    response: any
  ): Promise<void> {
    // TODO: 4
    // Use testcafe to check if the response.status is equal to the responseStatus
  }

  public static async assertBody(
    property: string,
    propertyContent: string | boolean,
    response: any
  ): Promise<void> {
    const object = {};
    object[property] = propertyContent;
    await t.expect(response.body).contains(object);
  }

  public static async assertBodyData(
    property: string,
    propertyContent: string | boolean,
    response: any
  ): Promise<void> {
    const object = {};
    object[property] = propertyContent;
    await t.expect(response.body.data).contains(object);
  }

  public static async assertError(
    property: string,
    propertyContent: string | boolean,
    response: any
  ): Promise<void> {
    const object = {};
    object[property] = propertyContent;
    // TODO 8:
    // Use testcafe to check if the response.body.error object contains the object variable.
  }
}
