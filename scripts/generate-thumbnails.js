const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

const videosDir = path.join(__dirname, '../public/videos');
const thumbnailsDir = path.join(__dirname, '../public/thumbnails');

// Create thumbnails directory if it doesn't exist
if (!fs.existsSync(thumbnailsDir)) {
  fs.mkdirSync(thumbnailsDir);
  console.log('Created thumbnails directory');
}

// Get all video files
const videoFiles = fs.readdirSync(videosDir).filter(file => 
  ['.mp4', '.webm', '.mov'].includes(path.extname(file).toLowerCase())
);

console.log(`Found ${videoFiles.length} video files to process`);

// Generate thumbnails using ffmpeg
videoFiles.forEach(videoFile => {
  const videoPath = path.join(videosDir, videoFile);
  const thumbnailPath = path.join(thumbnailsDir, `${path.parse(videoFile).name}.jpg`);
  
  // Use ffmpeg to extract a frame at 00:00:01
  const command = `ffmpeg -i "${videoPath}" -ss 00:00:01 -frames:v 1 -q:v 2 "${thumbnailPath}"`;
  
  console.log(`Generating thumbnail for ${videoFile}...`);
  
  exec(command, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error generating thumbnail for ${videoFile}:`, error);
      return;
    }
    console.log(`Created thumbnail for ${videoFile}`);
  });
});

console.log('Thumbnail generation process started. Please wait for completion...'); 