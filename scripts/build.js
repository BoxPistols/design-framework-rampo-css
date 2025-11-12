const fs = require('fs');
const path = require('path');
const postcss = require('postcss');
const postcssImport = require('postcss-import');
const autoprefixer = require('autoprefixer');

async function build() {
  try {
    // Create dist directory if it doesn't exist
    const distDir = path.join(__dirname, '../dist');
    if (!fs.existsSync(distDir)) {
      fs.mkdirSync(distDir, { recursive: true });
    }

    // Read the main CSS file
    const cssPath = path.join(__dirname, '../css/framework.css');
    const css = fs.readFileSync(cssPath, 'utf8');

    // Process with PostCSS
    const result = await postcss([
      postcssImport(),
      autoprefixer()
    ]).process(css, {
      from: cssPath,
      to: path.join(distDir, 'rampo.css')
    });

    // Write the processed CSS
    fs.writeFileSync(
      path.join(distDir, 'rampo.css'),
      result.css,
      'utf8'
    );

    console.log('✓ Built dist/rampo.css');

    // Also copy individual module files
    const cssFiles = [
      'reset.css',
      'typography.css',
      'grid.css',
      'utilities.css',
      'darkmode.css',
      'components.css',
      'responsive.css'
    ];

    cssFiles.forEach(file => {
      const srcPath = path.join(__dirname, '../css', file);
      const destPath = path.join(distDir, file);
      if (fs.existsSync(srcPath)) {
        fs.copyFileSync(srcPath, destPath);
        console.log(`✓ Copied dist/${file}`);
      }
    });

  } catch (error) {
    console.error('Build failed:', error);
    process.exit(1);
  }
}

build();
