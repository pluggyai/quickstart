/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  app(input) {
    return {
      name: "pluggy-aws-sst",
      removal: input?.stage === "production" ? "retain" : "remove",
      home: "aws",
      providers: {
        aws: {
          region: "sa-east-1",
        },
      },
    };
  },
  async run() {
    const itemsTable = new sst.aws.Dynamo("ItemsTable", {
      fields: {
        id: "string",
      },
      primaryIndex: { hashKey: "id" },
    });

    const sharedEnvironment = {
      PLUGGY_CLIENT_ID: process.env.PLUGGY_CLIENT_ID ?? "",
      PLUGGY_CLIENT_SECRET: process.env.PLUGGY_CLIENT_SECRET ?? "",
      TABLE_NAME: itemsTable.name,
    };

    const api = new sst.aws.ApiGatewayV2("Api");

    api.route("POST /connect-token", {
      handler: "src/connect-token.handler",
      environment: sharedEnvironment,
    });

    api.route("POST /notification", {
      handler: "src/notification.handler",
      link: [itemsTable],
      environment: sharedEnvironment,
    });

    return {
      api: api.url,
    };
  },
});
