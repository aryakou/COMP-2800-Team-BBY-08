import * as uuid from "uuid";
import handler from "./libs/handler-lib";
import dynamoDb from "./libs/dynamodb-lib";

export const main = handler(async (event, context) => {
  const data = JSON.parse(event.body);
  const params = {
    // We are reading the name of our DynamoDB table from our .env variable.
    TableName: process.env.tableName,
    // The item we have listed on line 18 will contain what
    // we are creating.
    // - 'noteId': a unique uuid
    // - 'content': parsed from request body
    // - 'attachment': parsed from request body
    // - 'createdAt': current Unix timestamp
    Item: {
      // user identities are vertified by the
      // Cognito Identity Pool, we use the identity id as the user id of the autheticated user.
      userId: event.requestContext.identity.cognitoIdentityId,
      // This is a universally unique identifier. We made a composite primary key when we created our
      // DynamoDB table. A composite key in AWS is the 'Partition key and the sort key (composite). This
      // give us benefits for when we want to read data. The DB can be provided the userId which lets it know
      // which users notes to provide. But because we want just one note we will also use noteId. So now we can
      // get a specific note from our DB table.
      noteId: uuid.v1(),
      // This is the contents of our request (this case text) body
      content: data.content,
      // This will allow for image and possibly video uploads.
      attachment: data.attachment,
      // We can give users the time their note was made.
      createdAt: Date.now()
    }
  };

  await dynamoDb.put(params);
  // Enables Cross-Origin Resource Sharing (CORS). We can give a web app running in a certain region
  // access to resources from a different origin. If we had an app try to make an AJAX call to an API on another domain
  // it wouldn't be allowed because of something call the same-origin policy. This is very normal and for security purposes.
  return params.Item;
});