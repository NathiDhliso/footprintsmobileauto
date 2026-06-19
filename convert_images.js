import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const publicDir = path.resolve('public');
const assetsDir = path.resolve('src/assets');

async function convertToWebp(filePath) {
  if (!fs.existsSync(filePath)) return;
  const parsed = path.parse(filePath);
  const outPath = path.join(parsed.dir, `${parsed.name}.webp`);
  
  await sharp(filePath)
    .webp({ quality: 80 })
    .toFile(outPath);
    
  console.log(`Converted: ${parsed.base} -> ${parsed.name}.webp`);
}

async function main() {
  await convertToWebp(path.join(publicDir, 'herofp.png'));
}

main().catch(console.error);
