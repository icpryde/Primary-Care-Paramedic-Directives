#!/usr/bin/env bash
set -euo pipefail

ICON_ONLY="assets/icon-only.png"
ICON_FOREGROUND="assets/icon-foreground.png"
ICON_BACKGROUND="assets/icon-background.png"

if [[ ! -f "$ICON_ONLY" || ! -f "$ICON_FOREGROUND" || ! -f "$ICON_BACKGROUND" ]]; then
  echo "Missing adaptive icon source(s). Expected:" >&2
  echo "- $ICON_ONLY" >&2
  echo "- $ICON_FOREGROUND" >&2
  echo "- $ICON_BACKGROUND" >&2
  exit 1
fi

if [[ ! -d "android/app/src/main" ]]; then
  echo "Android project not found. Run: npm run cap:add:android" >&2
  exit 1
fi

npx @capacitor/assets generate --android --assetPath assets

echo "Applied Android adaptive app icon from assets/icon-*.png"
