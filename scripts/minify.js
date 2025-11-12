const fs = require('fs');
const path = require('path');
const CleanCSS = require('clean-css');

function minify() {
  try {
    const distDir = path.join(__dirname, '../dist');
    const inputPath = path.join(distDir, 'rampo.css');
    const outputPath = path.join(distDir, 'rampo.min.css');

    // Check if input file exists
    if (!fs.existsSync(inputPath)) {
      console.error('Error: dist/rampo.css not found. Run build:css first.');
      process.exit(1);
    }

    // Read the CSS file
    const css = fs.readFileSync(inputPath, 'utf8');

    // Minify
    const minified = new CleanCSS({
      level: 2,
      compatibility: 'ie11'
    }).minify(css);

    if (minified.errors.length > 0) {
      console.error('Minification errors:', minified.errors);
      process.exit(1);
    }

    // Write minified CSS
    fs.writeFileSync(outputPath, minified.styles, 'utf8');

    const originalSize = (css.length / 1024).toFixed(2);
    const minifiedSize = (minified.styles.length / 1024).toFixed(2);
    const savings = ((1 - minified.styles.length / css.length) * 100).toFixed(1);

    console.log('✓ Built dist/rampo.min.css');
    console.log(`  Original: ${originalSize}KB`);
    console.log(`  Minified: ${minifiedSize}KB`);
    console.log(`  Savings: ${savings}%`);

  } catch (error) {
    console.error('Minification failed:', error);
    process.exit(1);
  }
}

minify();
