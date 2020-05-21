import handler from "./libs/handler-lib";
import dynamoDb from "./libs/dynamodb-lib";

export const main = handler(async (event, context) => {
  const params = {
    // We access the table. 
    TableName: process.env.tableName,

    // As we can see here we only pass userId because we don't need a specific note.
    // Here we are looking for all of the user's notes therefore we can leave noteId out.

    // Defines the condition for the query which would return the items with matching userId composition.
    KeyConditionExpression: "userId = :userId",
    // Defines the value in the condition. userId is of the Identity Pool identity id of the auth. user.
    ExpressionAttributeValues: {
      ":userId": event.requestContext.identity.cognitoIdentityId
    }
  };

  const result = await dynamoDb.query(params);

  // A response body is returned matching the list of DB items indicated by the auth. user(s).
  return result.Items;
});

// We would define the yml file to also have a defined variable for the GET request which is being used here.

// A yml file is included to define the method as GET, path as notes, and set CORS and authorizer (IAM).