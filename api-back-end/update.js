import handler from "./libs/handler-lib";
import dynamoDb from "./libs/dynamodb-lib";

export const main = handler(async (event, context) => {
  const data = JSON.parse(event.body);
  const params = {
    // We are reading the name of our DynamoDB table from our .env variable.

    TableName: process.env.tableName,
    // Key refers to our DB's partition and sort key (composite key) of the item
    // that is to be updated.
    Key: {
      // Identity Pool ID of the data owner.
      userId: event.requestContext.identity.cognitoIdentityId,
      // Path parameter of the note under the data owner's ID.
      noteId: event.pathParameters.id
    },
    // UpdateExpression is the "getter" it is allowing update functions.
    // ExpressionAttributeValues is the "setter" and always expression defining functions.
    UpdateExpression: "SET content = :content, attachment = :attachment",
    ExpressionAttributeValues: {
      ":attachment": data.attachment || null,
      ":content": data.content || null
    },
    // ReturnValues is referring to if and how the attributes are to be returned,
    // ALL_NEW is a string returning all attributes of the item post update
    ReturnValues: "ALL_NEW"
  };

  await dynamoDb.update(params);

  return {
    status: true
  };
});

// The yml file is updated and the update.main handler and events are added. The path including the noteId is added
// along with method defined as PUT.