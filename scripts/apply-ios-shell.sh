#!/usr/bin/env bash
# The iPhone app's own pieces on top of Capacitor's template (run after `npx cap add ios` / `npx cap sync ios`):
#   SceneDelegate.swift      MainViewController: a cover in the page's colour until the page has drawn in place (a clean
#                            fresh open), the page's own swipe back (WebKit's is off), the strip behind the keyboard
#   LaunchScreen.storyboard  the launch screen is the page's background colour with nothing on it
#   PageGround.colorset      that colour: light #F3F4F6, dark #0B111B (the iPhone look's background)
set -euo pipefail
APP="ios/App/App"
if [[ ! -d "$APP" ]]; then
  echo "iOS project not found. Run: npm run cap:add:ios" >&2
  exit 1
fi
cp native/ios/SceneDelegate.swift "$APP/SceneDelegate.swift"
cp native/ios/LaunchScreen.storyboard "$APP/Base.lproj/LaunchScreen.storyboard"
mkdir -p "$APP/Assets.xcassets/PageGround.colorset"
cp native/ios/PageGround.colorset/Contents.json "$APP/Assets.xcassets/PageGround.colorset/Contents.json"
grep -q "class MainViewController" "$APP/SceneDelegate.swift"
grep -q "MainViewController()" "$APP/SceneDelegate.swift"
echo "Applied the iOS shell (SceneDelegate, launch screen, PageGround)"
