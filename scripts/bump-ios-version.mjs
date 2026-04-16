import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const root = path.resolve(__dirname, '..');
const packageJsonPath = path.join(root, 'package.json');
const pbxprojPath = path.join(root, 'ios', 'App', 'App.xcodeproj', 'project.pbxproj');

function bumpPatchVersion(version) {
  const match = version.match(/^(\d+)\.(\d+)\.(\d+)$/);
  if (!match) {
    throw new Error(`Unsupported package.json version format: ${version}`);
  }
  const major = Number(match[1]);
  const minor = Number(match[2]);
  const patch = Number(match[3]) + 1;
  return `${major}.${minor}.${patch}`;
}

const pkgRaw = await readFile(packageJsonPath, 'utf8');
const pkg = JSON.parse(pkgRaw);
const previousVersion = pkg.version;
const nextVersion = bumpPatchVersion(previousVersion);
pkg.version = nextVersion;
await writeFile(packageJsonPath, `${JSON.stringify(pkg, null, 2)}\n`, 'utf8');

const pbxRaw = await readFile(pbxprojPath, 'utf8');

const buildMatches = [...pbxRaw.matchAll(/CURRENT_PROJECT_VERSION = (\d+);/g)];
if (!buildMatches.length) {
  throw new Error('No CURRENT_PROJECT_VERSION entries found in Xcode project');
}
const highestBuild = Math.max(...buildMatches.map(m => Number(m[1])));
const nextBuild = String(highestBuild + 1);

let updated = pbxRaw.replace(/CURRENT_PROJECT_VERSION = \d+;/g, `CURRENT_PROJECT_VERSION = ${nextBuild};`);
updated = updated.replace(/MARKETING_VERSION = [^;]+;/g, `MARKETING_VERSION = ${nextVersion};`);

await writeFile(pbxprojPath, updated, 'utf8');

console.log(`Version bumped: ${previousVersion} -> ${nextVersion}`);
console.log(`iOS build bumped: ${highestBuild} -> ${nextBuild}`);
