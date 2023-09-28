// import { StackContext, Cron } from "sst/constructs";
// //import { Cron } from "sst/constructs";

// // export function API({ stack }: StackContext) {
// //   const api = new Api(stack, "api", {
// //     routes: {
// //       "GET /": "packages/functions/src/lambda.handler",
// //     },
// //   });
// //   stack.addOutputs({
// //     ApiEndpoint: api.url,
// //   });
// // }

// new Cron( { stack } : StackContext, "Cron", {
//   schedule: "rate(1 minute)",
//   job: "packages/functions/src/lambda.handler",
// });

import { Cron, StackContext } from "sst/constructs";

export function ExampleStack({ stack }: StackContext) {
  new Cron(stack, "Cron", {
    schedule: "rate(1 minute)",
    job: "packages/functions/src/lambda.main",
  });
}