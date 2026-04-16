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

## iOS IPA sideload build (Capacitor)

This project can also be packaged as an IPA for iPhone/iPad sideloading while keeping the web app deployment unchanged.

### One-time setup

1. Install dependencies:
	- `npm install`
2. Generate iOS project from the current web app:
	- `npm run cap:add:ios`

### Update and rebuild IPA after content changes

1. Run one command:
	- `npm run ipa:update`
2. What this does automatically:
	- Increments app version (`package.json`) and iOS build number
	- Syncs latest web files into the iOS app bundle
	- Opens Xcode
3. In Xcode, build archive and export IPA:
	- Product -> Archive
	- Organizer -> Distribute App -> Ad Hoc -> Export IPA
4. Sign and install with Signulous.

### Notes

- The native wrapper uses bundled files from `dist/`.
- `npm run cap:sync:ios` always rebuilds `dist/` first, so your latest app.js/data/assets changes are included.
- IPA builds use `icons/icon-512.png` as the iOS app icon (auto-resized to 1024x1024 during build).
- `npm run ipa:update` increments version/build each run so side-loaded installs are clearly newer.
- Service worker registration is automatically skipped in native wrapper mode to avoid stale cache behavior inside the iOS WebView.

### Download IPA from GitHub

This repo includes a GitHub Actions workflow at `.github/workflows/build-ipa.yml` that builds an **unsigned IPA**.
It runs automatically on pushes to `main`, and can also be run manually.

1. In GitHub, open **Actions** -> **Build iOS IPA** -> **Run workflow**.
2. When it completes, download the artifact named **Directives-unsigned-ipa**.
3. Upload that IPA to Signulous for signing/install.

If you publish a GitHub Release, the same workflow also attaches `Directives-unsigned.ipa` directly to the Release assets.

The web app deployment remains separate and continues working normally through the existing Pages workflow.

## Disclaimer

This project is provided as a convenience reference only and is considered beta software. It is not an official Ministry of Health, base hospital, employer, or paramedic service product, and nothing here should be treated as a substitute for the current Ontario ALS or BLS Patient Care Standards, the Companion Document, your service’s policies, medical direction, or other authoritative sources. Clinical standards, protocols, and drug information change over time, and errors or omissions may be present in this app or repository.

You are solely responsible for confirming any information before you rely on it in practice. The author and contributors offer no warranty, express or implied, regarding accuracy, completeness, or fitness for any particular purpose, and they assume no liability for any loss, injury, or other outcome arising from use of or reliance on this software or its content. Use is entirely at your own risk.
