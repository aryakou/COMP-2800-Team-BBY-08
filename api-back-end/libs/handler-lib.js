// We are creating a handler function that we will use as a wrapper
// around our Lambda functions.

// We take our lambda function as the arguement. Then using the promise.resolve()
// to return either async or sync promise.
export default function handler(lambda) {
  return function (event, context) {
    return Promise.resolve()
      // Here we are running the lambda.
      .then(() => lambda(event, context))
      // Upon success it will return the responseBody value.
      .then((responseBody) => [200, responseBody])
      // Otherwise we will return an error.
      .catch((e) => {
        // console.log(e);
        return [500, {
          error: e.message
        }];
      })
      // Return HTTP response
      .then(([statusCode, body]) => ({
        statusCode,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Credentials": true,
        },
        body: JSON.stringify(body),
      }));
  };
}