// scripts/optimize-videos.js
const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

const videosDir = path.join(__dirname, '../public/videos');
const optimizedDir = path.join(__dirname, '../public/videos-optimized');

// Create optimized videos directory if it doesn't exist
if (!fs.existsSync(optimizedDir)) {
  fs.mkdirSync(optimizedDir);
  console.log('Created optimized videos directory');
}

// Get all video files
const videoFiles = fs.readdirSync(videosDir).filter(file => 
  ['.mp4', '.webm', '.mov'].includes(path.extname(file).toLowerCase())
);

console.log(`Found ${videoFiles.length} video files to optimize`);

// Optimize videos using ffmpeg
videoFiles.forEach(videoFile => {
  const videoPath = path.join(videosDir, videoFile);
  const optimizedPath = path.join(optimizedDir, videoFile);
  
  // Use ffmpeg to compress video with reasonable quality
  // -crf 28 provides good compression with acceptable quality
  // -preset faster is a good balance between compression time and file size
  const command = `ffmpeg -i "${videoPath}" -c:v libx264 -crf 28 -preset faster -c:a aac -b:a 128k -movflags +faststart "${optimizedPath}"`;
  
  console.log(`Optimizing ${videoFile}...`);
  
  exec(command, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error optimizing ${videoFile}:`, error);
      return;
    }
    
    // Get file sizes to report compression results
    const originalSize = fs.statSync(videoPath).size;
    const optimizedSize = fs.statSync(optimizedPath).size;
    const savingsPercent = ((originalSize - optimizedSize) / originalSize * 100).toFixed(2);
    
    console.log(`Optimized ${videoFile}: ${(originalSize/1024/1024).toFixed(2)}MB → ${(optimizedSize/1024/1024).toFixed(2)}MB (${savingsPercent}% savings)`);
  });
});

console.log('Video optimization process started. This may take some time depending on the size and number of videos...'); 