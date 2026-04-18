#!/usr/bin/env bash
set -euo pipefail

ICON_SRC="assets/logo.png"

if [[ ! -f "$ICON_SRC" ]]; then
  echo "Missing source icon: $ICON_SRC" >&2
  exit 1
fi

if [[ ! -d "android/app/src/main" ]]; then
  echo "Android project not found. Run: npm run cap:add:android" >&2
  exit 1
fi

npx @capacitor/assets generate --android --assetPath assets

echo "Applied Android app icon from $ICON_SRC"
