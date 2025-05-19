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

// Create a simple HTML file with a placeholder for each video
videoFiles.forEach(videoFile => {
  const basename = path.parse(videoFile).name;
  const placeholderPath = path.join(thumbnailsDir, `${basename}.html`);
  
  const htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Video Placeholder</title>
  <style>
    body, html {
      margin: 0;
      padding: 0;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #1a1a1a;
      color: white;
      font-family: Arial, sans-serif;
    }
    .container {
      text-align: center;
      padding: 20px;
    }
    .play-icon {
      font-size: 48px;
      margin-bottom: 15px;
    }
    .filename {
      font-size: 16px;
      margin-top: 10px;
      opacity: 0.8;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="play-icon">▶</div>
    <h2>Video Preview</h2>
    <div class="filename">${videoFile}</div>
  </div>
</body>
</html>
  `;
  
  fs.writeFileSync(placeholderPath, htmlContent);
  console.log(`Created HTML placeholder for ${videoFile}`);
});

console.log('Placeholder generation complete.');

// Create a simple README explaining the situation
const readmePath = path.join(thumbnailsDir, 'README.txt');
const readmeContent = `
Video Thumbnails

These HTML files are placeholder thumbnails for videos. 

For optimal performance, you should:
1. Install FFmpeg (https://ffmpeg.org/download.html)
2. Run the script 'generate-thumbnails.js' to create proper image thumbnails
3. Replace these HTML placeholders with the generated thumbnails

FFmpeg is required to extract actual frames from the videos as thumbnails.
`;

fs.writeFileSync(readmePath, readmeContent);
console.log('Created README.txt with instructions'); 