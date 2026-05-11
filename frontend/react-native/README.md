# Pluggy Connect - React Native Example

React Native application using [react-native-pluggy-connect](https://www.npmjs.com/package/react-native-pluggy-connect) for mobile financial account connections.

> **Note**: This example uses React Native 0.66 and React 17. For a modern setup, see the [Expo example](../react-native-expo).

## Prerequisites

- Node.js 18+
- React Native development environment ([setup guide](https://reactnative.dev/docs/environment-setup))
- macOS + Xcode (for iOS) or Android Studio (for Android)

## Setup

```bash
npm install
```

For iOS, install CocoaPods:

```bash
cd ios && pod install && cd ..
```

## Run

Start Metro bundler:

```bash
npx react-native start
```

In a new terminal, launch the app:

```bash
# iOS
npx react-native run-ios

# Android
npx react-native run-android
```

## Configuration

Edit `App.tsx` and replace the `MY_CONNECT_TOKEN_API_URL` with your own backend token endpoint. See the [backend examples](../../examples) for options.

## Resources

- [react-native-pluggy-connect on npm](https://www.npmjs.com/package/react-native-pluggy-connect)
- [Pluggy Connect Widget Docs](https://docs.pluggy.ai/#pluggy-connect-widget)
- [React Native Documentation](https://reactnative.dev/)
