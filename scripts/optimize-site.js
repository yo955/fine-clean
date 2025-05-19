// scripts/optimize-site.js
const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');

// Ensure scripts directory exists
const scriptsDir = path.join(__dirname);
const thumbnailsDir = path.join(__dirname, '../public/thumbnails');
const optimizedVideosDir = path.join(__dirname, '../public/videos-optimized');

// Create necessary directories
[thumbnailsDir, optimizedVideosDir].forEach(dir => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
    console.log(`Created directory: ${dir}`);
  }
});

console.log('=== Starting website optimization process ===');

// Step 1: Optimize videos
console.log('\n🎬 Step 1: Optimizing videos...');
exec('node scripts/optimize-videos.js', (error, stdout, stderr) => {
  if (error) {
    console.error('Error optimizing videos:', error);
    return;
  }
  console.log(stdout);
  
  // Step 2: Generate thumbnails
  console.log('\n🖼️ Step 2: Generating thumbnails...');
  exec('node scripts/generate-thumbnails.js', (error, stdout, stderr) => {
    if (error) {
      console.error('Error generating thumbnails:', error);
      return;
    }
    console.log(stdout);
    
    // Step 3: Replace original videos with optimized versions
    console.log('\n🔄 Step 3: Replacing original videos with optimized versions...');
    const videosDir = path.join(__dirname, '../public/videos');
    const backupDir = path.join(__dirname, '../public/videos-backup');
    
    // Create backup directory
    if (!fs.existsSync(backupDir)) {
      fs.mkdirSync(backupDir);
      console.log('Created backup directory for original videos');
    }
    
    // Backup and replace videos
    try {
      const videoFiles = fs.readdirSync(videosDir).filter(file => 
        ['.mp4', '.webm', '.mov'].includes(path.extname(file).toLowerCase())
      );
      
      videoFiles.forEach(file => {
        const originalPath = path.join(videosDir, file);
        const backupPath = path.join(backupDir, file);
        const optimizedPath = path.join(optimizedVideosDir, file);
        
        // Only proceed if optimized version exists
        if (fs.existsSync(optimizedPath)) {
          // Backup original file
          fs.copyFileSync(originalPath, backupPath);
          
          // Replace with optimized version
          fs.copyFileSync(optimizedPath, originalPath);
          
          console.log(`Replaced ${file} with optimized version`);
        } else {
          console.log(`Skipping ${file} - no optimized version found`);
        }
      });
      
      console.log('All videos have been backed up and replaced with optimized versions');
    } catch (err) {
      console.error('Error replacing videos:', err);
    }
    
    console.log('\n✅ Website optimization complete!');
    console.log('Original videos have been backed up to public/videos-backup/');
    console.log('Thumbnails have been generated in public/thumbnails/');
    console.log('\nNext steps:');
    console.log('1. Run "npm run build" to build your optimized site');
    console.log('2. Deploy the updated site to Vercel');
  });
}); 