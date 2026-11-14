import UIKit
import Capacitor

class SceneDelegate: UIResponder, UIWindowSceneDelegate {
    var window: UIWindow?

    func scene(_ scene: UIScene, willConnectTo session: UISceneSession, options connectionOptions: UIScene.ConnectionOptions) {
        guard let windowScene = scene as? UIWindowScene else { return }

        window = UIWindow(windowScene: windowScene)
        window?.rootViewController = MainViewController()
        window?.makeKeyAndVisible()

        SceneDelegateProxy.shared.scene(scene, willConnectTo: session, options: connectionOptions)
    }

    func scene(_ scene: UIScene, openURLContexts URLContexts: Set<UIOpenURLContext>) {
        SceneDelegateProxy.shared.scene(scene, openURLContexts: URLContexts)
    }

    func scene(_ scene: UIScene, continue userActivity: NSUserActivity) {
        SceneDelegateProxy.shared.scene(scene, continue: userActivity)
    }
}

// The page draws its own swipe back from the left edge, with the real screen before underneath, as an iPhone app does.
// The web view's own back and forward swipe stays off: it shows pictures it kept of earlier pages, which on the user's
// iPhone came out old or black and went back across sections (2026-11-13).
//
// A fresh open shows the page once, already in place (2026-11-13: on the user's iPhone the first frame was drawn up under
// the clock and jumped down a frame later). Capacitor starts loading the page before its view is on screen, so the page's
// first layout has no room for the clock and the home bar (env(safe-area-inset-*) is 0) and gets it a moment later.
// Until the page has drawn Home with the same room the phone gives the app, a plain cover in the page's own background
// colour sits over it (the same colour as the launch screen, PageGround in the asset catalog); then the cover fades away.
class MainViewController: CAPBridgeViewController {
    private let cover = UIView()
    private var coverSince = CACurrentMediaTime()
    private var drawnSince: CFTimeInterval = 0

    override func capacitorDidLoad() {
        super.capacitorDidLoad()
        webView?.allowsBackForwardNavigationGestures = false
        // what shows before the page paints, and around it, is the page's own background rather than Capacitor's navy
        let ground = UIColor(named: "PageGround") ?? .systemBackground
        webView?.backgroundColor = ground
        webView?.scrollView.backgroundColor = ground
        cover.backgroundColor = ground
        cover.isUserInteractionEnabled = false
        cover.translatesAutoresizingMaskIntoConstraints = false
        view.addSubview(cover)
        NSLayoutConstraint.activate([
            cover.topAnchor.constraint(equalTo: view.topAnchor), cover.bottomAnchor.constraint(equalTo: view.bottomAnchor),
            cover.leadingAnchor.constraint(equalTo: view.leadingAnchor), cover.trailingAnchor.constraint(equalTo: view.trailingAnchor),
        ])
    }

    override func viewDidLoad() {
        super.viewDidLoad()
        NotificationCenter.default.addObserver(self, selector: #selector(matchPageBackground), name: UIResponder.keyboardWillShowNotification, object: nil)
        coverSince = CACurrentMediaTime()
        checkPageSettled()
    }

    // Asks the page, about once a frame, whether it has drawn its first screen and how much room it left at the top and
    // bottom; lifts the cover once that room is what the phone gives this window. If the page never settles (it should
    // not happen), the cover goes anyway: 0.6 s after the page drew, or 10 s after starting.
    private func checkPageSettled() {
        guard cover.superview != nil, let web = webView else { return }
        let js = "(function(){var m=document.getElementById('main');if(!m||!m.firstElementChild)return null;var s=getComputedStyle(document.documentElement);return [parseFloat(s.paddingTop)||0,parseFloat(s.paddingBottom)||0];})()"
        web.evaluateJavaScript(js) { [weak self] value, _ in
            guard let self = self else { return }
            let now = CACurrentMediaTime()
            var settled = false
            if let room = value as? [NSNumber], room.count == 2, let window = self.view.window {
                if self.drawnSince == 0 { self.drawnSince = now }
                let want = window.safeAreaInsets
                settled = abs(room[0].doubleValue - Double(want.top)) < 0.5 && abs(room[1].doubleValue - Double(want.bottom)) < 0.5
                if now - self.drawnSince > 0.6 { settled = true }
            }
            if settled || now - self.coverSince > 10 {
                let drawnAfter = self.drawnSince > 0 ? (self.drawnSince - self.coverSince) * 1000 : -1
                let liftedAfter = self.drawnSince > 0 ? (now - self.drawnSince) * 1000 : -1
                NSLog("Directives cover: page drawn %.0f ms after start, lifted %.0f ms later, page room %@", drawnAfter, liftedAfter, String(describing: value ?? "none"))
                // one more frame so what is on screen under the cover is the settled layout
                DispatchQueue.main.asyncAfter(deadline: .now() + 0.034) { self.liftCover() }
            } else {
                DispatchQueue.main.asyncAfter(deadline: .now() + 0.016) { self.checkPageSettled() }
            }
        }
    }

    private func liftCover() {
        guard cover.superview != nil else { return }
        UIView.animate(withDuration: UIAccessibility.isReduceMotionEnabled ? 0 : 0.18, delay: 0, options: [.curveEaseOut], animations: {
            self.cover.alpha = 0
        }, completion: { _ in self.cover.removeFromSuperview() })
    }

    // With the keyboard up, the keyboard plugin shortens the web view to sit above it. What shows behind the keyboard's
    // floating bar is then the window, so the window takes the colour the page is showing (light or dark, as chosen).
    @objc func matchPageBackground() {
        let js = "(function(){var a=document.getElementById('app'),c=a&&getComputedStyle(a).backgroundColor;if(!c||c==='rgba(0, 0, 0, 0)')c=getComputedStyle(document.body).backgroundColor;return c;})()"
        webView?.evaluateJavaScript(js) { [weak self] value, _ in
            guard let text = value as? String else { return }
            let n = text.components(separatedBy: CharacterSet(charactersIn: "0123456789.").inverted).compactMap { Double($0) }
            guard n.count >= 3 else { return }
            self?.view.window?.backgroundColor = UIColor(red: n[0] / 255, green: n[1] / 255, blue: n[2] / 255, alpha: 1)
        }
    }
}
