#!/usr/bin/env bash

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
ROOT_DIR="$(cd "$SCRIPT_DIR/.." && pwd)"
OUTPUT_DIR="$ROOT_DIR/.local"
KEYSTORE_PATH="$OUTPUT_DIR/android-upload.keystore"
ALIAS_NAME="pcp-directives-upload"
STORE_PASSWORD="$(openssl rand -hex 16)"
KEY_PASSWORD="$(openssl rand -hex 16)"
SECRETS_FILE="$OUTPUT_DIR/android-github-secrets.txt"

mkdir -p "$OUTPUT_DIR"

if [ -f "$KEYSTORE_PATH" ]; then
  echo "Keystore already exists at $KEYSTORE_PATH"
  echo "Delete it first if you want to generate a new permanent signing key."
  exit 1
fi

keytool -genkeypair -v \
  -keystore "$KEYSTORE_PATH" \
  -storepass "$STORE_PASSWORD" \
  -keypass "$KEY_PASSWORD" \
  -alias "$ALIAS_NAME" \
  -dname "CN=PCP Medical Directives, OU=Mobile, O=PCP Directives, L=Toronto, S=ON, C=CA" \
  -keyalg RSA \
  -keysize 2048 \
  -validity 3650

KEYSTORE_BASE64="$(openssl base64 -A -in "$KEYSTORE_PATH")"

cat > "$SECRETS_FILE" <<EOF
ANDROID_KEYSTORE_BASE64=$KEYSTORE_BASE64
ANDROID_KEYSTORE_PASSWORD=$STORE_PASSWORD
ANDROID_KEY_ALIAS=$ALIAS_NAME
ANDROID_KEY_PASSWORD=$KEY_PASSWORD
EOF

cat <<EOF
Created permanent Android signing material:

Keystore:
$KEYSTORE_PATH

GitHub Actions secret values saved to:
$SECRETS_FILE

Add these exact values as repository secrets:
ANDROID_KEYSTORE_BASE64
ANDROID_KEYSTORE_PASSWORD
ANDROID_KEY_ALIAS
ANDROID_KEY_PASSWORD

Important:
- Keep both files in .local somewhere safe.
- Reuse this same keystore for all future Android updates.
- If you lose this keystore, future APK updates may require users to uninstall the old app first.
EOF