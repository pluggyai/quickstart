import UIKit
import WebKit

struct ConnectTokenResponse: Decodable {
    let accessToken: String
}

class PluggyConnectWebView: UIViewController, WKNavigationDelegate {
    var webView: WKWebView!
    var progressView: UIProgressView!
        
    func getQueryStringParameter(url: String, param: String) -> String? {
        guard let url = URLComponents(string: url) else { return nil }
        return url.queryItems?.first(where: { $0.name == param })?.value
    }
    
    override func loadView() {
        webView = WKWebView()
        webView.navigationDelegate = self
        webView.addObserver(self, forKeyPath: "URL", options: .new, context: nil)
        view = webView
    }
    
    // Observe value
    override func observeValue(forKeyPath keyPath: String?, of object: Any?, change: [NSKeyValueChangeKey : Any]?, context: UnsafeMutableRawPointer?) {
        if let key = change?[NSKeyValueChangeKey.newKey] {
            let url = (key as! URL).absoluteString
            let itemId = getQueryStringParameter(url: url, param: "item_id")
            if itemId != nil {
                print("Connected with itemId", itemId!)
            } else {
                let error = getQueryStringParameter(url: url, param: "error")
                if error != nil {
                    print("There was an error: ", error!)
                }
            }
        }
    }

    
    override func viewDidLoad() {
        super.viewDidLoad()
        // note: you should generate your connectToken in your backend, see https://docs.pluggy.ai/docs/authentication#create-a-connect-token
        let urlToken = URL(string: "https://pluggy-connect.vercel.app/api/token")!
        let withSandbox = true // Use ENV variable to change this.
        let task = URLSession.shared.dataTask(with: urlToken) {(data, response, error) in
            guard let data = data else { return }
            let response = try! JSONDecoder().decode(ConnectTokenResponse.self, from: data)
            print(response.accessToken)
            // build WebView URL with connect_token and extra config (ie. with_sandbox)
            let url = URL(string: "https://connect.pluggy.ai?connect_token=" + response.accessToken + "&with_sandbox=" + String(withSandbox))!
            self.webView.load(URLRequest(url: url))
        }
        task.resume()
    }
    
    override func viewWillAppear(_ animated: Bool) {
        super.viewWillDisappear(animated)
        self.navigationController?.isNavigationBarHidden = true
    }
    
    override func viewWillDisappear(_ animated: Bool) {
        super.viewWillDisappear(animated)
        self.navigationController?.isNavigationBarHidden = false
    }
}
