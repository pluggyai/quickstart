import 'dart:async';
import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:webview_flutter/webview_flutter.dart';
import 'package:http/http.dart' as http;

import './pluggy.dart';

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
  final controller = Completer<WebViewController>();
  late Future<String> _futurePluggyConnectToken;
  bool _pluggyConnectOpened = false;

  @override
  void initState() {
    super.initState();
    _futurePluggyConnectToken = fetchPluggyConnectToken();
  }

  @override
  Widget build(BuildContext context) {
    bool withSandbox = false; // replace this with environment variable

    Widget body = _pluggyConnectOpened
        ? FutureBuilder<String>(
            future: _futurePluggyConnectToken,
            builder: (BuildContext context, AsyncSnapshot<String> snapshot) {
              if (snapshot.hasData) {
                return PluggyConnectStack(
                    controller: controller,
                    token: snapshot.data!,
                    withSandbox: withSandbox);
              } else if (snapshot.hasError) {
                return Text('${snapshot.error}');
              } else {
                return const Center(child: CircularProgressIndicator());
              }
            },
          )
        : const Text('Press the button to instantiate Pluggy Connect Widget');

    FloatingActionButton? floatingActionButton;
    if (!_pluggyConnectOpened) {
      floatingActionButton = FloatingActionButton(
        onPressed: _togglePluggyConnect,
        tooltip: 'Open Pluggy Connect',
        child: const Icon(Icons.add),
      );
    }

    return Scaffold(
        appBar: AppBar(
          title: const Text('Pluggy Connect Flutter Quickstart'),
        ),
        body: body,
        floatingActionButton: floatingActionButton);
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

  void _togglePluggyConnect() {
    setState(() {
      _pluggyConnectOpened = !_pluggyConnectOpened;
    });
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
