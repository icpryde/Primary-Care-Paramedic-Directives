#!/usr/bin/env bash
set -euo pipefail

ICON_SRC="icons/icon-512.png"
ICON_DST="ios/App/App/Assets.xcassets/AppIcon.appiconset/AppIcon-512@2x.png"

if [[ ! -f "$ICON_SRC" ]]; then
  echo "Missing source icon: $ICON_SRC" >&2
  exit 1
fi

if [[ ! -d "ios/App/App.xcodeproj" ]]; then
  echo "iOS project not found. Run: npm run cap:add:ios" >&2
  exit 1
fi

mkdir -p "$(dirname "$ICON_DST")"
TMP_ICON="$(mktemp /tmp/directives-icon-XXXXXX.png)"
cp "$ICON_SRC" "$TMP_ICON"

# iOS app icon slot is 1024x1024. Resize from the repository icon.
sips -z 1024 1024 "$TMP_ICON" --out "$ICON_DST" >/dev/null
rm -f "$TMP_ICON"

echo "Applied iOS app icon from $ICON_SRC"
