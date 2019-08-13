import { APIGatewayProxyHandler } from 'aws-lambda';

let response;

const lambdaHandler: APIGatewayProxyHandler = async (event, context) => {
  try {
    response = {
      statusCode: 200,
      body: JSON.stringify({
        message: 'hello world',
      }),
    };
  } catch (err) {
    console.log(err);
    return err;
  }

  return response;
};

export { lambdaHandler };
