# Service logos (header)

Bundled Ontario paramedic service patches are listed in [`data/logos.json`](../../data/logos.json). Users pick one in the app header; the choice is stored in `localStorage`.

## Add or replace a logo

1. Add a PNG (or JPG/WebP/SVG) file in this folder.
2. Add `{ "file": "assets/logos/your-file.png", "label": "Display name" }` to `data/logos.json`.
3. Add the same `file` path to the `ASSETS` array in [`sw.js`](../../sw.js) for offline PWA support.
4. Bump `CACHE_NAME` in `sw.js` after changes.
