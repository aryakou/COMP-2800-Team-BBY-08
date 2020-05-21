import handler from "./libs/handler-lib";
import dynamoDb from "./libs/dynamodb-lib";

export const main = handler(async (event, context) => {
  const params = {
    TableName: process.env.tableName,
    // We use our primary or composite key to find the appropriate note to be deleted.
    // We require both user and note ID so we can not delete the whole list but just the
    // note.
    Key: {
      userId: event.requestContext.identity.cognitoIdentityId,
      noteId: event.pathParameters.id
    }
  };

  await dynamoDb.delete(params);

  return { status: true };
});