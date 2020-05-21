import handler from "./libs/handler-lib";
import dynamoDb from "./libs/dynamodb-lib";

export const main = handler(async (event, context) => {
  const params = {
    TableName: process.env.tableName,
    // Key refers to our composite key.
    // userID is the Identity Pool identity id of the authenticated user
    // noteId is the path parameter
    Key: {
      userId: event.requestContext.identity.cognitoIdentityId,
      noteId: event.pathParameters.id
    }
  };
// We use the get(params) to get a note from our DB using the noteId and userId
// that is passed through the request via the key.
  const result = await dynamoDb.get(params);
  if ( ! result.Item) {
    throw new Error("Not found.");
  }

  // Return the retrieved item
  return result.Item;
});

// We would also add a block to our yml file. To define the get note API.
// That adds a GET request handler with endpoint /notes/{id}
