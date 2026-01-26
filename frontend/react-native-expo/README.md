# Pluggy Connect Quickstart - React Native

A minimal React Native example application demonstrating the integration of Pluggy's Connect widget for financial institution connections. Built with Expo for cross-platform mobile development.

## Overview

This repository contains a reference implementation of the Pluggy Connect SDK in a React Native environment. The app demonstrates how to securely fetch connect tokens from a backend API and present the Pluggy Connect widget to users for linking their financial accounts.

## Features

- Native Pluggy Connect widget integration using `react-native-pluggy-connect`
- Expo-based setup for iOS and Android development
- TypeScript support
- Sandbox mode enabled for testing
- Backend token generation pattern (security best practice)

## Tech Stack

- **React Native**: 0.81.5
- **Expo SDK**: ~54.0.31
- **Expo Router**: ~6.0.22
- **pluggy-js**: ^0.19.3
- **react-native-pluggy-connect**: ^1.4.1

## Getting Started

```bash
# Install dependencies
npm install

# Run on iOS (requires macOS)
npm run ios

# Run on Android
npm run android

# Run on web
npm run web
```

## Architecture

The app fetches a Pluggy connect token from a backend API endpoint, then renders the Pluggy Connect widget. When users successfully connect their accounts, the app receives callback events with the connection details.

**Important**: For production use, you must implement your own backend API to generate connect tokens securely. The demo API endpoint included in the code is for demonstration purposes only.

## Resources

- [Pluggy Documentation](https://docs.pluggy.ai/)
- [Pluggy Dashboard](https://dashboard.pluggy.ai)
- [Expo Documentation](https://docs.expo.dev/)

## License

MIT