import { APIGatewayProxyHandler } from 'aws-lambda';
import { DepUtils } from '@tlln/utils';
const utils = new DepUtils();
let response;

const greetings = utils.sayHello();

const lambdaHandler: APIGatewayProxyHandler = async (event, context) => {
  try {
    response = {
      statusCode: 200,
      body: JSON.stringify({
        message: greetings,
      }),
    };
  } catch (err) {
    console.log(err);
    return err;
  }

  return response;
};

export { lambdaHandler };
