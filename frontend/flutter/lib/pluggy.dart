import 'dart:async';
import 'package:flutter/material.dart';
import 'package:webview_flutter/webview_flutter.dart';

class PluggyConnectStack extends StatefulWidget {
  const PluggyConnectStack(
      {required this.controller,
      required this.token,
      required this.withSandbox,
      Key? key})
      : super(key: key);

  final Completer<WebViewController> controller;
  final String token;
  final bool withSandbox;

  @override
  State<PluggyConnectStack> createState() => _PluggyConnectStackState();
}

class _PluggyConnectStackState extends State<PluggyConnectStack> {
  var loadingPercentage = 0;

  @override
  Widget build(BuildContext context) {
    return Stack(
      children: [
        WebView(
          initialUrl:
              'https://connect.pluggy.ai/?connect_token=${widget.token}&with_sandbox=${widget.withSandbox}',
          javascriptMode: JavascriptMode.unrestricted,
          onWebViewCreated: (webViewController) {
            // We watch here until URL changes to execute onCreate / onError handlers
            const oneSec = Duration(seconds: 1);
            Timer.periodic(oneSec, (Timer timer) async {
              String? url = await webViewController.currentUrl();
              if (url != null) {
                print(url);
                Uri uri = Uri.parse(url);
                String? itemId = uri.queryParameters['item_id'];
                String? error = uri.queryParameters['error'];
                if (itemId != null) {
                  // use item_id to handle item creation!
                  // or you can just wait for a webhook call
                  // and return to your app!
                  print(itemId);
                  // timer
                  // .cancel(); // this is needed to avoid re-executing again the handler
                }
                if (error != null) {
                  // handle item creation error
                  print(error);
                  timer
                      .cancel(); // this is needed to avoid re-executing again the handler

                }
              }
            });

            widget.controller.complete(webViewController);
          },
          onPageStarted: (url) {
            setState(() {
              loadingPercentage = 0;
            });
          },
        ),
      ],
    );
  }
}
