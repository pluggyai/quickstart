import React, { useCallback, useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { PluggyConnect } from "react-native-pluggy-connect";
import type { Item } from "pluggy-js";

/**
 * TODO: replace this URL with your own API, that would return an { accessToken } object
 *  with your Pluggy connect token
 */
const MY_CONNECT_TOKEN_API_URL = "https://pluggy-connect.vercel.app/api/token";

export default function App() {
  const [token, setToken] = useState<string>();
  const [error, setError] = useState<Record<string, unknown>>();

  useEffect(() => {
    async function fetchToken() {
      try {
        const response = await fetch(MY_CONNECT_TOKEN_API_URL, {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            options: {
              clientUserId: "user@example.com",
            },
          }),
        });

        const responseJson = await response.json();

        if (response.ok) {
          const { accessToken } = responseJson;
          setToken(accessToken);
        } else {
          setError(responseJson);
        }
      } catch (error: unknown) {
        setError({ message: (error as Error).message });
      }
    }

    fetchToken();
  }, []);

  const handleOnOpen = useCallback(() => {
    console.log("open");
  }, []);

  const handleOnSuccess = useCallback((itemData: { item: Item }) => {
    console.log("success", itemData);
  }, []);

  const handleOnError = useCallback(
    (error: {
      message: string;
      data?: {
        item: Item;
      };
    }) => {
      console.log("error", error);
    },
    []
  );

  const handleOnClose = useCallback(() => {
    setToken("");
  }, []);

  if (error) {
    // error screen
    return (
      <View style={styles.container}>
        <Text>There was an error</Text>
        <Text>{JSON.stringify(error, null, 2)}</Text>
        <StatusBar style="auto" />
      </View>
    );
  }

  if (!token) {
    // loading screen
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
        <StatusBar style="auto" />
      </View>
    );
  }

  // authenticated! -> render PluggyConnect screen
  return (
    <PluggyConnect
      connectToken={token}
      includeSandbox={true}
      onOpen={handleOnOpen}
      onClose={handleOnClose}
      onSuccess={handleOnSuccess}
      onError={handleOnError}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
