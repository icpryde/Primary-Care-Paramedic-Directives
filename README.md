# Ontario Paramedic Clinical Guide (PCP Directives)

**Live app:** [https://icpryde.github.io/Primary-Care-Paramedic-Directives/](https://icpryde.github.io/Primary-Care-Paramedic-Directives/)

Progressive web app for Ontario paramedics: PCP directives, BLS standards, companion document, medical references, interactive calculators, medication lookup, destination guidelines, and more — optimized for phones and usable offline after the first load.

## Screenshots

<table>
<tr>
<td align="center" valign="top">
<img src="screenshots/home.png" width="180" alt="Home screen with navigation and search" /><br />
<sub><b>Home</b> — navigation &amp; search</sub>
</td>
<td align="center" valign="top">
<img src="screenshots/burn-calculator.png" width="180" alt="Burn percentage Rule of Nines calculator" /><br />
<sub><b>Burn %</b> — Rule of Nines</sub>
</td>
<td align="center" valign="top">
<img src="screenshots/pediatric-values.png" width="180" alt="Pediatric values calculator" /><br />
<sub><b>Pediatric values</b> — weight &amp; vitals</sub>
</td>
<td align="center" valign="top">
<img src="screenshots/croup-directive.png" width="180" alt="Croup directive dosing tables" /><br />
<sub><b>Croup directive</b> — ALS PCS tables</sub>
</td>
<td align="center" valign="top">
<img src="screenshots/croup-calculator.png" width="180" alt="Croup drug calculator" /><br />
<sub><b>Croup calculator</b> — epi &amp; dexamethasone</sub>
</td>
</tr>
</table>

## Install (add to home screen)

For a full-screen shortcut that behaves like a native app:

### iPhone & iPad (Safari)

1. Open the app URL in Safari.
2. Tap **Share** → **Add to Home Screen** → **Add**.
3. Launch from the home screen icon. Remove an old icon first if it opens the wrong page.

### Android (Chrome)

1. Open the site in Chrome.
2. Tap **⋮** → **Install app** or **Add to Home screen**, then confirm.

**Samsung Internet:** Menu → **Add page to** → **Home screen**.

## Get the latest version

After updates are published, fully close the app and open it again so your device loads the newest files.

- **iPhone / iPad:** Swipe up from the bottom (or double-click Home), find the app in the app switcher, swipe it up to close, then reopen from the home screen.
- **Android:** Open Recents, swipe the app away, then reopen from the home screen or app list.

## Install iOS or Android app

Pre-built `.ipa` (iOS) and `.apk` (Android) files are available on the [Releases page](https://github.com/icpryde/Primary-Care-Paramedic-Directives/releases). These are automatically built and updated with every push to `main`.

- **iOS:** Download the `.ipa` file and sideload via AltStore, TrollStore, Signulous, or Xcode.
- **Android:** Download the signed `.apk` file and install directly on your device.

### App icon source

Both iOS and Android app icons are generated from one shared source image:

- `assets/logo.png`

Android also uses adaptive icon source layers for cleaner launcher masking across circle/squircle/rounded-square launchers:

- `assets/icon-only.png`
- `assets/icon-foreground.png`
- `assets/icon-background.png`

To re-apply icons after syncing native projects:

```bash
npm run ios:icon
npm run android:icon
```

### Android install troubleshooting

If Android says the package is invalid, it is usually caused by an unsigned or corrupted APK.

1. Re-download the APK from Releases and make sure the file name matches `PCP-Directives-vX.Y.Z.apk`.
2. Ensure the APK came from the latest workflow run (older assets may have been replaced).
3. On-device: allow installs from unknown apps for the browser/file manager used to open the APK.
4. Optional local verification (SDK tools):

```bash
apksigner verify --verbose --print-certs PCP-Directives-vX.Y.Z.apk
zipalign -c -v 4 PCP-Directives-vX.Y.Z.apk
```

### Permanent Android signing

The workflow can now fall back to a generated test key so release APKs keep working, but the long-term fix is to keep one permanent Android signing key for every future update.

Generate that key locally with:

```bash
./scripts/generate-android-keystore.sh
```

That script creates ignored local files under `.local/`:

1. `.local/android-upload.keystore` — your permanent Android signing key
2. `.local/android-github-secrets.txt` — the exact GitHub Actions secret values to store

After running it, add the values from `.local/android-github-secrets.txt` to repository secrets:

1. `ANDROID_KEYSTORE_BASE64`
2. `ANDROID_KEYSTORE_PASSWORD`
3. `ANDROID_KEY_ALIAS`
4. `ANDROID_KEY_PASSWORD`

Once those secrets are set correctly, the workflow will use the permanent key instead of the temporary CI-generated test key. That keeps future APK updates installable over the previous version.

## Disclaimer

This project is provided as a convenience reference only and is considered beta software. It is not an official Ministry of Health, base hospital, employer, or paramedic service product, and nothing here should be treated as a substitute for the current Ontario ALS or BLS Patient Care Standards, the Companion Document, your service’s policies, medical direction, or other authoritative sources. Clinical standards, protocols, and drug information change over time, and errors or omissions may be present in this app or repository.

You are solely responsible for confirming any information before you rely on it in practice. The author and contributors offer no warranty, express or implied, regarding accuracy, completeness, or fitness for any particular purpose, and they assume no liability for any loss, injury, or other outcome arising from use of or reliance on this software or its content. Use is entirely at your own risk.
