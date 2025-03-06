const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function convertSvgToPng(inputPath, outputPath, size) {
  try {
    const svgBuffer = fs.readFileSync(inputPath);
    await sharp(svgBuffer)
      .resize(size, size)
      .png()
      .toFile(outputPath);
    console.log(`Successfully converted ${inputPath} to ${outputPath}`);
  } catch (error) {
    console.error(`Error converting ${inputPath}:`, error);
  }
}

async function main() {
  // Create the public directory if it doesn't exist
  const publicDir = path.join(__dirname, '..', 'public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir);
  }

  // Convert 192x192 icon
  await convertSvgToPng(
    path.join(publicDir, 'android-chrome-192x192.svg'),
    path.join(publicDir, 'android-chrome-192x192.png'),
    192
  );

  // Convert 512x512 icon
  await convertSvgToPng(
    path.join(publicDir, 'android-chrome-512x512.svg'),
    path.join(publicDir, 'android-chrome-512x512.png'),
    512
  );
}

main().catch(console.error); 