const fs = require("fs");
const path = require("path");

const root = process.cwd();
const publicSitemap = path.join(root, "public", "sitemap.xml");
const outDir = path.join(root, "out");
const outSitemap = path.join(outDir, "sitemap.xml");
const staleIndexedSitemap = path.join(outDir, "sitemap-0.xml");

if (!fs.existsSync(publicSitemap)) {
  throw new Error(`Missing generated sitemap: ${publicSitemap}`);
}

fs.mkdirSync(outDir, { recursive: true });
fs.copyFileSync(publicSitemap, outSitemap);

if (fs.existsSync(staleIndexedSitemap)) {
  fs.unlinkSync(staleIndexedSitemap);
}

console.log(`Synced sitemap to ${outSitemap}`);
