// Copies the web app into dist/, which Capacitor puts inside the iPhone and Android apps.
// v2.0: one page (index.html) with its pictures, skill videos, PDFs and PDF.js beside it, so the phone apps
// carry everything and need no signal. The first app (v1/) stays on the website only.
import { cp, mkdir, rm } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const root = path.resolve(__dirname, '..');
const outDir = path.join(root, 'dist');

const copyFiles = [
  'index.html',
  'sw.js',
  'manifest.json'
];

const copyDirs = [
  'img',
  'vid',
  'files',
  'pdfjs',
  'icons'
];

await rm(outDir, { recursive: true, force: true });
await mkdir(outDir, { recursive: true });

for (const file of copyFiles) {
  await cp(path.join(root, file), path.join(outDir, file));
}

for (const dir of copyDirs) {
  await cp(path.join(root, dir), path.join(outDir, dir), { recursive: true });
}

console.log('Built web bundle at dist/');
