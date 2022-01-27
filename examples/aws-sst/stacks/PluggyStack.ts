import * as sst from "@serverless-stack/resources";
import { TableFieldType } from "@serverless-stack/resources";

const { PLUGGY_CLIENT_ID = '', PLUGGY_CLIENT_SECRET = '' } = process.env

export default class PluggyStack extends sst.Stack {
  constructor(scope: sst.App, id: string, props?: sst.StackProps) {
    super(scope, id, props);

    // Storage for Items notifications.
    // You can use what ever storage you want like RDS, Mongo, etc.
    const itemsTable = new sst.Table(this, "ItemsTable", {
      primaryIndex: {
        partitionKey: "id",
      },
      fields: {
        id: TableFieldType.STRING,
        createdAt: TableFieldType.STRING,
        lastUpdatedAt: TableFieldType.NUMBER,
        status: TableFieldType.STRING,
      },
    })

    // Create a HTTP API
    const api = new sst.Api(this, "Api", {
      routes: {
        "POST /connect-token": "src/connect-token.handler",
        "POST /notification": "src/notification.handler",
      },
      defaultFunctionProps: {
        environment: {
          TABLE_NAME: itemsTable.tableName,
          PLUGGY_CLIENT_ID,
          PLUGGY_CLIENT_SECRET,
        } 
      }
    });

    api.attachPermissions([itemsTable]);

    // Show the endpoint in the output
    this.addOutputs({
      "ApiEndpoint": api.url,
    });
  }
}
