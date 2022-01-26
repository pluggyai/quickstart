package ai.pluggy.quickstart;

import java.io.IOException;
import java.text.MessageFormat;
import java.util.List;

import ai.pluggy.client.PluggyClient;
import ai.pluggy.client.request.CreateItemRequest;
import ai.pluggy.client.request.ParametersMap;
import ai.pluggy.client.response.Account;
import ai.pluggy.client.response.Connector;
import ai.pluggy.client.response.IdentityResponse;
import ai.pluggy.client.response.ItemResponse;
import ai.pluggy.client.response.Transaction;
import retrofit2.Response;

public class QuickstartApplication {

  public static void main(String[] args) throws IOException, InterruptedException {
    System.out.println("Hello World");

    // Client configurations
    final String clientId = "5d4f614a-0809-4341-a986-1b7bbdaf0668";
    final String clientSecret = "a7aa3281-0b89-42e7-8b22-efdac71d5cbd";
    final String webhookUrl = "https://pluggy-java.requestcatcher.com";

    // Pluggy bank connector
    final int pluggyBankConnectorId = 2;
    final String pluggyBankUser = "user-ok";
    final String pluggyBankPassword = "password-ok";

    PluggyClient pluggyClient = PluggyClient.builder()
        .clientIdAndSecret(clientId, clientSecret)
        .build();

    // Fetch connectors
    List<Connector> connectors = pluggyClient.service()
        .getConnectors()
        .execute()
        .body()
        .getResults();

    System.out.println("We support the following connectors: ");
    connectors.forEach(connector -> {
      System.out.println(MessageFormat.format("(#{0}) - {1}", connector.getId(), connector.getName()));
    });

    // Fetch Pluggy Bank Connector
    Connector connector = pluggyClient.service()
        .getConnector(pluggyBankConnectorId)
        .execute()
        .body();
    System.out.println(MessageFormat.format("We are going to connect with {0}", connector.getName()));

    System.out.println("We will send the sucess case login parameters.");
    System.out
        .println(MessageFormat.format("User \"{0}\" with password \"{1}\"", pluggyBankUser, pluggyBankPassword));

    // Create Item
    ParametersMap parameters = new ParametersMap();
    parameters.put("user", pluggyBankUser);
    parameters.put("password", pluggyBankPassword);
    CreateItemRequest createItemRequest = new CreateItemRequest(pluggyBankConnectorId, parameters, webhookUrl);

    Response<ItemResponse> itemResponse = pluggyClient.service().createItem(createItemRequest).execute();
    if (!itemResponse.isSuccessful()) {
      System.out.println("There was a problem while creating the item.");
      System.out.println(itemResponse.errorBody().string());
      System.exit(1);
    }

    ItemResponse item = itemResponse.body();
    String id = item.getId();

    String status = item.getStatus();
    while (!status.equals("LOGIN_ERROR") && !status.equals("OUTDATED") && !status.equals("UPDATED")) {
      System.out.println(MessageFormat.format("Item {0} is syncing with the institution", id));
      // sleep
      Thread.sleep(2000);
      itemResponse = pluggyClient.service().getItem(id).execute();
      item = itemResponse.body();
      status = item.getStatus();
    }

    System.out.println(MessageFormat.format("Item completed execution with status {0}", status));
    if (status.equals("LOGIN_ERROR") || status.equals("OUTDATED")) {
      System.exit(1);
    }

    // You can skip to this part
    // if you are using Pluggy Connect and just use the item ID directly
    // Retrieve item data
    System.out.println(MessageFormat.format("Retrieving accounts for item {0}", id));
    List<Account> accounts = pluggyClient.service().getAccounts(id).execute().body().getResults();
    accounts.forEach(account -> {
      String accountId = account.getId();
      System.out.println(MessageFormat.format("Account {0} with balance {1} and number {2}", accountId,
          account.getBalance(), account.getNumber()));

      try {
        List<Transaction> transactions = pluggyClient.service().getTransactions(accountId).execute().body()
            .getResults();

        transactions.forEach(transaction -> {
          System.out.println(MessageFormat.format("Transaction {0} made at {1}, description \"{2}\", amount {3}",
              transaction.getId(), transaction.getDate(), transaction.getDescription(), transaction.getAmount()));
        });
      } catch (IOException e) {
        e.printStackTrace();
      }
    });

    System.out.println(MessageFormat.format("Retrieving identity for item {0}", id));

    IdentityResponse identity = pluggyClient.service().getIdentityByItemId(id).execute().body();
    System.out.println(MessageFormat.format("Identity {0} with name {1}", identity.getId(), identity.getFullName()));

    System.out.println(MessageFormat.format("Deleting item {0}", id));
    pluggyClient.service().deleteItem(id).execute();
  }

}
