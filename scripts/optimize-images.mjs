import sharp from "sharp";
import { readdir, stat } from "node:fs/promises";
import { join, extname, basename, dirname } from "node:path";
import { existsSync } from "node:fs";

const ASSETS_DIR = "src/assets";

const rules = [
  { match: (p) => p.includes("/products/"), maxDim: 600, quality: 82 },
  { match: (p) => p.includes("/for-whom/"), maxDim: 200, quality: 85 },
  { match: (p) => /ludivina|navbar-logo/.test(p), maxDim: 900, quality: 82 },
  { match: (p) => /hero-clouds|hero-bg|stars-bg|for-whom-bg|angel-frame/.test(p), maxDim: 1920, quality: 75 },
  { match: () => true, maxDim: 1200, quality: 82 },
];

async function* walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const p = join(dir, entry.name);
    if (entry.isDirectory()) yield* walk(p);
    else yield p;
  }
}

let totalIn = 0;
let totalOut = 0;
const skipped = [];

for await (const file of walk(ASSETS_DIR)) {
  const ext = extname(file).toLowerCase();
  if (![".png", ".jpg", ".jpeg"].includes(ext)) continue;

  const rule = rules.find((r) => r.match(file));
  const outPath = join(dirname(file), basename(file, ext) + ".webp");

  if (existsSync(outPath)) {
    skipped.push(outPath);
    continue;
  }

  const inSize = (await stat(file)).size;
  totalIn += inSize;

  const img = sharp(file);
  const meta = await img.metadata();
  const needsResize = Math.max(meta.width || 0, meta.height || 0) > rule.maxDim;

  let pipeline = img;
  if (needsResize) {
    pipeline = pipeline.resize({
      width: meta.width >= meta.height ? rule.maxDim : undefined,
      height: meta.height > meta.width ? rule.maxDim : undefined,
      withoutEnlargement: true,
    });
  }

  await pipeline.webp({ quality: rule.quality, effort: 5 }).toFile(outPath);

  const outSize = (await stat(outPath)).size;
  totalOut += outSize;
  console.log(
    `${file}\n  ${(inSize / 1024).toFixed(0)}KB → ${(outSize / 1024).toFixed(0)}KB  (${((1 - outSize / inSize) * 100).toFixed(0)}% smaller)`
  );
}

console.log(`\nTotal: ${(totalIn / 1024 / 1024).toFixed(2)}MB → ${(totalOut / 1024 / 1024).toFixed(2)}MB`);
if (skipped.length) console.log(`Skipped (already exists): ${skipped.length}`);
