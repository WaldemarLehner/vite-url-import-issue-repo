import { glob } from "glob";
import { copyFile } from "node:fs/promises";
import { basename, join } from "node:path";
import { fileURLToPath } from "node:url";

const packagesDir = join(fileURLToPath(import.meta.url), "..", "packages");

const animationsDist = join(packagesDir, "animations", "dist");

const result = await glob(join(animationsDist, "makeScene2D-*.js"));

if (result.length != 1) {
  throw new Error(
    "Unexpected makeScene2D Dist file count. Expected 1, found " + result.length
  );
}

const fileName = basename(result[0]);

const fromPath = join(animationsDist, fileName);
const toPath = join(packagesDir, "vite-frontend", "dist", "assets", fileName);

await copyFile(fromPath, toPath);

console.log(`Copied from ${fromPath} to ${toPath}`);
