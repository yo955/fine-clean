const fs = require('fs');
const path = require('path');

const videosDir = path.join(__dirname, '../public/videos');
const thumbnailsDir = path.join(__dirname, '../public/thumbnails');

// Create thumbnails directory if it doesn't exist
if (!fs.existsSync(thumbnailsDir)) {
  fs.mkdirSync(thumbnailsDir, { recursive: true });
  console.log('Created thumbnails directory');
}

// Get all video files
const videoFiles = fs.readdirSync(videosDir).filter(file => 
  ['.mp4', '.webm', '.mov'].includes(path.extname(file).toLowerCase())
);

console.log(`Found ${videoFiles.length} video files to process`);

// Create a 1x1 transparent pixel PNG in base64
const transparentPixelBase64 = 'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z/C/HgAGgwJ/lK3Q6wAAAABJRU5ErkJggg==';

// Create a binary buffer from the base64 string
const pixelBuffer = Buffer.from(transparentPixelBase64, 'base64');

// Generate a simple PNG thumbnail for each video
videoFiles.forEach(videoFile => {
  const basename = path.parse(videoFile).name;
  const thumbnailPath = path.join(thumbnailsDir, `${basename}.jpg`);
  
  // Write the PNG pixel to the file
  fs.writeFileSync(thumbnailPath, pixelBuffer);
  console.log(`Created placeholder thumbnail for ${videoFile}`);
});

console.log('Placeholder thumbnails created successfully. Note: These are just placeholder files. For optimal thumbnails, install FFmpeg and run the generate-thumbnails.js script.'); 