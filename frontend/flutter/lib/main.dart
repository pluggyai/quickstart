import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:webview_flutter/webview_flutter.dart';
import 'package:http/http.dart' as http;

void main() {
  runApp(
    const MaterialApp(
      home: PluggyFlutterQuickstart(),
    ),
  );
}

class PluggyFlutterQuickstart extends StatefulWidget {
  const PluggyFlutterQuickstart({Key? key}) : super(key: key);

  @override
  State<PluggyFlutterQuickstart> createState() =>
      _PluggyFlutterQuickstartState();
}

class _PluggyFlutterQuickstartState extends State<PluggyFlutterQuickstart> {
  bool _pluggyConnectOpened = false;

  void _togglePluggyConnect() {
    setState(() {
      _pluggyConnectOpened = !_pluggyConnectOpened;
    });
  }

  @override
  Widget build(BuildContext context) {
    Widget body = _pluggyConnectOpened
        ? const PluggyConnect()
        : const Text('Press the button to instantiate Pluggy Connect Widget');

    return Scaffold(
      appBar: AppBar(
        title: const Text('Pluggy Connect Flutter Quickstart'),
      ),
      body: body,
      floatingActionButton: FloatingActionButton(
        onPressed: _togglePluggyConnect,
        tooltip: 'Open Pluggy Connect',
        child: const Icon(Icons.add),
      ), // This trailing comma makes auto-formatting nicer for build methods.
    );
  }
}

class PluggyConnect extends StatefulWidget {
  const PluggyConnect({Key? key}) : super(key: key);

  @override
  State<PluggyConnect> createState() => _PluggyConnectState();
}

class _PluggyConnectState extends State<PluggyConnect> {
  late Future<String> _futurePluggyConnectToken;

  @override
  void initState() {
    super.initState();
    _futurePluggyConnectToken = fetchPluggyConnectToken();
  }

  @override
  Widget build(BuildContext context) {
    // Change this with environment variable
    const bool withSandbox = false;

    return FutureBuilder<String>(
      future: _futurePluggyConnectToken,
      builder: (BuildContext context, AsyncSnapshot<String> snapshot) {
        if (snapshot.hasData) {
          return WebView(
            initialUrl:
                'https://connect.pluggy.ai?connect_token=${snapshot.data}&with_sandbox=$withSandbox',
            javascriptMode: JavascriptMode.unrestricted,
          );
        } else if (snapshot.hasError) {
          return Text('${snapshot.error}');
        } else {
          return const Center(child: CircularProgressIndicator());
        }
      },
    );
  }

  Future<String> fetchPluggyConnectToken() async {
    // Change this URL with your own connect token URL
    // for more info check: https://docs.pluggy.ai/docs/create-a-connect-token
    final response = await http
        .get(Uri.parse('https://pluggy-connect.vercel.app/api/token'));

    if (response.statusCode == 200) {
      PluggyConnectTokenResponse tokenResponse =
          PluggyConnectTokenResponse.fromJson(jsonDecode(response.body));
      return tokenResponse.accessToken;
    } else {
      throw Exception('Failed to get Pluggy Connect token');
    }
  }
}

class PluggyConnectTokenResponse {
  final String accessToken;

  PluggyConnectTokenResponse({required this.accessToken});

  factory PluggyConnectTokenResponse.fromJson(Map<String, dynamic> json) {
    return PluggyConnectTokenResponse(
      accessToken: json['accessToken'] as String,
    );
  }
}
