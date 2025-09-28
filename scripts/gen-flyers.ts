// scripts/gen-flyers.ts
import { chromium } from "playwright";
import path from "node:path";
import fs from "node:fs";
import flyers from "../src/data/flyers.json";

type FlyerData = { id: string };

async function capture(route: string, size: { width: number; height: number }, out: string) {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: size });
  await page.goto(`http://localhost:3000${route}`, { waitUntil: "networkidle" });
  await page.waitForTimeout(200);
  fs.mkdirSync(path.dirname(out), { recursive: true });
  await page.screenshot({ path: out, type: "png" });
  await browser.close();
}

(async () => {
  const items = flyers as unknown as FlyerData[];
  for (const f of items) {
    await capture(`/flyers/${f.id}`, { width: 1080, height: 1350 }, `public/exports/${f.id}-4x5.png`);
    await capture(`/flyers-story/${f.id}`, { width: 1080, height: 1920 }, `public/exports/${f.id}-9x16.png`);
    console.log("✓ exported:", `public/exports/${f.id}-4x5.png`, `public/exports/${f.id}-9x16.png`);
  }
})().catch((e) => {
  console.error(e);
  process.exit(1);
});