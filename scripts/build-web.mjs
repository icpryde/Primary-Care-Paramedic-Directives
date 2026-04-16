import { cp, mkdir, rm } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const root = path.resolve(__dirname, '..');
const outDir = path.join(root, 'dist');

const copyFiles = [
  'index.html',
  'styles.css',
  'app.js',
  'sw.js',
  'manifest.json'
];

const copyDirs = [
  'assets',
  'data',
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
