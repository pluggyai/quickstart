package ai.pluggy.quickstart;

import java.io.IOException;
import java.text.MessageFormat;

import ai.pluggy.client.PluggyClient;
import ai.pluggy.client.request.CreateItemRequest;
import ai.pluggy.client.request.ParametersMap;
import ai.pluggy.client.response.Connector;
import ai.pluggy.client.response.ConnectorsResponse;
import ai.pluggy.client.response.ItemResponse;

public class QuickstartApplication {

  public static void main(String[] args) throws IOException, InterruptedException {
    System.out.println("Hello World");

    final String clientId = "5d4f614a-0809-4341-a986-1b7bbdaf0668";
    final String clientSecret = "a7aa3281-0b89-42e7-8b22-efdac71d5cbd";
    final String webhookUrl = "https://pluggy-java.requestcatcher.com";
    final int pluggyBankConnectorId = 2;
    final String pluggyBankUsername = "user-ok";
    final String pluggyBankPassword = "password-ok";

    PluggyClient pluggyClient = PluggyClient.builder()
        .clientIdAndSecret(clientId, clientSecret)
        .build();

    ConnectorsResponse connectorsResponse = pluggyClient.service()
        .getConnectors()
        .execute()
        .body();

    System.out.println("We support the following connectors: ");
    connectorsResponse.getResults().forEach(connector -> {
      System.out.println(MessageFormat.format("(#{0}) - {1}", connector.getId(), connector.getName()));
    });

    Connector connector = pluggyClient.service()
        .getConnector(pluggyBankConnectorId)
        .execute()
        .body();
    System.out.println(MessageFormat.format("We are going to connect with {0}", connector.getName()));

    System.out.println("We will send the sucess case login parameters.");
    System.out
        .println(MessageFormat.format("User \"{0}\" with password \"{1}\"", pluggyBankUsername, pluggyBankPassword));

    ParametersMap parameters = new ParametersMap();
    parameters.put("username", pluggyBankUsername);
    parameters.put("password", pluggyBankPassword);
    CreateItemRequest createItemRequest = new CreateItemRequest(pluggyBankConnectorId, parameters, webhookUrl);

    ItemResponse item = pluggyClient.service().createItem(createItemRequest).execute().body();
    String status = item.getStatus();
    while (status != "LOGIN_ERROR" && status != "OUTDATED" && status != "UPDATED") {
      System.out.println(MessageFormat.format("Item {0} is syncing with the institution", status));
      // sleep
      Thread.sleep(2000);
      item = pluggyClient.service().getItem(item.getId()).execute().body();
      status = item.getStatus();
    }

    System.out.println(MessageFormat.format("Item completed execution with status {0}", status));
    if (status == "LOGIN_ERROR" || status == "OUTDATED") {
      System.exit(1);
    }
  }

}
