const fs = require('fs');
const path = require('path');

console.log('=== Preparing website for deployment ===');

// Paths
const publicDir = path.join(__dirname, '../public');
const videosDir = path.join(publicDir, 'videos');
const thumbnailsDir = path.join(publicDir, 'thumbnails');

// Ensure directories exist
if (!fs.existsSync(thumbnailsDir)) {
  fs.mkdirSync(thumbnailsDir, { recursive: true });
  console.log('Created thumbnails directory');
}

// Check video sizes and provide warnings
const videoFiles = fs.readdirSync(videosDir).filter(file => 
  ['.mp4', '.webm', '.mov'].includes(path.extname(file).toLowerCase())
);

console.log(`\nAnalyzing ${videoFiles.length} video files...`);

let totalSize = 0;
let largeVideos = [];

videoFiles.forEach(file => {
  const filePath = path.join(videosDir, file);
  const stats = fs.statSync(filePath);
  const sizeInMB = stats.size / (1024 * 1024);
  totalSize += sizeInMB;
  
  console.log(`${file}: ${sizeInMB.toFixed(2)} MB`);
  
  if (sizeInMB > 5) {
    largeVideos.push({name: file, size: sizeInMB.toFixed(2)});
  }
});

console.log(`\nTotal video size: ${totalSize.toFixed(2)} MB`);

if (largeVideos.length > 0) {
  console.log('\n⚠️ WARNING: The following videos are larger than 5MB and may cause slow loading:');
  largeVideos.forEach(video => {
    console.log(`  - ${video.name} (${video.size} MB)`);
  });
  
  console.log('\nRecommendations:');
  console.log('1. Consider compressing these videos with a tool like Handbrake (https://handbrake.fr/)');
  console.log('2. Use smaller video files for mobile devices');
  console.log('3. Consider hosting larger videos on YouTube or Vimeo and embedding them');
}

// Create a deployment checklist
const checklistPath = path.join(__dirname, '../deployment-checklist.txt');
const checklistContent = `
WEBSITE DEPLOYMENT CHECKLIST
===========================

Performance Optimizations:
-------------------------
[ ] Compress large video files (recommended tool: Handbrake - https://handbrake.fr/)
[ ] Generate proper video thumbnails
[ ] Optimize images with a tool like TinyPNG or ImageOptim
[ ] Consider lazy loading videos only when they're in viewport

Before Deploying to Vercel:
-------------------------
[ ] Run 'yarn build' to build the optimized production version
[ ] Test the build locally with 'yarn start'
[ ] Check if all pages load properly
[ ] Verify all links work correctly

After Deployment:
-------------------------
[ ] Test website performance with Google PageSpeed Insights (https://pagespeed.web.dev/)
[ ] Ensure Google Search Console is properly set up
[ ] Verify site performance on mobile devices
[ ] Check loading times from different locations

Total video size: ${totalSize.toFixed(2)} MB

Large videos (>5MB) that should be optimized:
${largeVideos.map(video => `- ${video.name} (${video.size} MB)`).join('\n')}

Date: ${new Date().toLocaleString()}
`;

fs.writeFileSync(checklistPath, checklistContent);
console.log('\n✅ Created deployment checklist at deployment-checklist.txt');

console.log('\n=== Website preparation complete ===');
console.log('Run "yarn build" to build your optimized site for deployment.'); 