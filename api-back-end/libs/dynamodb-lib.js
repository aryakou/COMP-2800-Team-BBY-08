import AWS from "aws-sdk";

const client = new AWS.DynamoDB.DocumentClient();
// This is a promise form of DynamoDB methods. We can manage async code using
// promises. Now the client methods will be able to write to the DB and it is
// easier to read.
export default {
  get   : (params) => client.get(params).promise(),
  put   : (params) => client.put(params).promise(),
  query : (params) => client.query(params).promise(),
  update: (params) => client.update(params).promise(),
  delete: (params) => client.delete(params).promise(),
};