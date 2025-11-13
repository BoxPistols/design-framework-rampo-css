# Rampo CSS

<div align="center">

**A Simple, Modern, Utility-First CSS Framework**
**シンプルで使いやすいモダン CSS フレームワーク**

[![npm version](https://img.shields.io/npm/v/rampo-css.svg)](https://www.npmjs.com/package/rampo-css)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

English | [日本語](./README.md)

</div>

---

## 📖 Table of Contents

- [Features](#features)
- [Get Started in 3 Steps](#get-started-in-3-steps)
- [Installation](#installation)
- [Basic Usage](#basic-usage)
- [Components](#components)
- [Advanced Usage](#advanced-usage)
- [Practical Examples](#practical-examples)
- [FAQ](#faq)
- [License](#license)

---

## ✨ Features

- 🎨 **Modern Design** - Customizable theming system using CSS variables
- 📱 **Responsive** - Mobile-first responsive design approach
- ⚡ **Lightweight** - Only ~38KB (minified) for fast loading
- 🔧 **Utility-First** - Rich utility classes inspired by Tailwind CSS
- 🧩 **Built-in Components** - Commonly used UI components included
- 🌙 **Dark Mode Ready** - CSS variable-based theme switching
- 🚀 **CDN Ready** - Use immediately without npm

---

## 🚀 Get Started in 3 Steps

### Step 1: Create an HTML file

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Rampo CSS Demo</title>
  <!-- Step 2: Load Rampo CSS from CDN -->
  <link rel="stylesheet" href="https://unpkg.com/rampo-css/dist/rampo.min.css" />
</head>
<body>
  <!-- Step 3: Style elements using classes -->
  <div class="container mx-auto p-8">
    <h1 class="text-4xl font-bold text-primary mb-4">Hello, Rampo CSS!</h1>
    <p class="text-gray-600 mb-6">Welcome to the modern CSS framework</p>
    <button class="btn btn-primary transform transition hover:scale-105">
      Get Started
    </button>
  </div>
</body>
</html>
```

**That's it!** Open it in your browser to see beautiful UI instantly.

---

## 📦 Installation

### Method 1: CDN (Recommended - Easiest)

```html
<!-- Minified version (recommended) -->
<link rel="stylesheet" href="https://unpkg.com/rampo-css/dist/rampo.min.css" />

<!-- Or uncompressed version -->
<link rel="stylesheet" href="https://unpkg.com/rampo-css/dist/rampo.css" />
```

### Method 2: npm

```bash
# Using npm
npm install rampo-css

# Using yarn
yarn add rampo-css

# Using pnpm
pnpm add rampo-css
```

#### Usage after npm installation

```javascript
// Import in your JavaScript file
import 'rampo-css/dist/rampo.min.css';
```

```css
/* Or import in your CSS file */
@import 'rampo-css/dist/rampo.min.css';
```

---

## 📚 Basic Usage

### Layout

#### Step 1: Create a container

```html
<div class="container">
  <!-- Content -->
</div>
```

#### Step 2: Flexbox layout

```html
<div class="flex justify-between items-center gap-4">
  <div>Left content</div>
  <div>Center content</div>
  <div>Right content</div>
</div>
```

#### Step 3: Grid layout

```html
<!-- 3-column grid -->
<div class="grid grid-cols-3 gap-6">
  <div class="bg-gray-100 p-4 rounded">Item 1</div>
  <div class="bg-gray-100 p-4 rounded">Item 2</div>
  <div class="bg-gray-100 p-4 rounded">Item 3</div>
</div>

<!-- Responsive grid -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  <div>Mobile: 1 column, Tablet: 2 columns, Desktop: 3 columns</div>
  <div>Layout changes automatically</div>
  <div>Fully responsive</div>
</div>
```

### Spacing

```html
<!-- Margin -->
<div class="m-4">Margin on all sides</div>
<div class="mt-4 mb-2">Top and bottom margin</div>
<div class="mx-auto">Center horizontally</div>

<!-- Padding -->
<div class="p-6">Padding on all sides</div>
<div class="px-4 py-2">Horizontal and vertical padding</div>
```

**Spacing values:**
- `0` = 0
- `1` = 0.25rem (4px)
- `2` = 0.5rem (8px)
- `3` = 0.75rem (12px)
- `4` = 1rem (16px)
- `6` = 1.5rem (24px)
- `8` = 2rem (32px)

### Colors

```html
<!-- Background colors -->
<div class="bg-primary">Primary color</div>
<div class="bg-gray-100">Gray background</div>

<!-- Text colors -->
<p class="text-white">White text</p>
<p class="text-primary">Primary color text</p>
<p class="text-gray-600">Gray text</p>
```

**Available colors:**
- `primary` - Main color (blue)
- `secondary` - Secondary color (gray)
- `success` - Success (green)
- `warning` - Warning (orange)
- `error` - Error (red)
- `gray-50` ~ `gray-900` - Grayscale

---

## 🧩 Components

### Buttons

#### Step 1: Basic buttons

```html
<button class="btn btn-primary">Primary Button</button>
<button class="btn btn-secondary">Secondary Button</button>
<button class="btn btn-outline">Outline Button</button>
```

#### Step 2: Size variations

```html
<button class="btn btn-primary btn-sm">Small Button</button>
<button class="btn btn-primary">Normal Size</button>
<button class="btn btn-primary btn-lg">Large Button</button>
```

#### Step 3: Buttons with hover animation

```html
<button class="btn btn-primary transform transition hover:scale-105">
  Hover to Scale
</button>
```

### Forms

#### Complete form example

```html
<form class="max-w-md mx-auto">
  <!-- Text input -->
  <div class="form-group">
    <label class="form-label" for="name">Name</label>
    <input type="text" class="form-input" id="name" placeholder="John Doe">
  </div>

  <!-- Email address -->
  <div class="form-group">
    <label class="form-label" for="email">Email</label>
    <input type="email" class="form-input" id="email" placeholder="example@email.com">
  </div>

  <!-- Select box -->
  <div class="form-group">
    <label class="form-label" for="category">Category</label>
    <select class="form-input form-select" id="category">
      <option>Please select</option>
      <option>Option 1</option>
      <option>Option 2</option>
    </select>
  </div>

  <!-- Text area -->
  <div class="form-group">
    <label class="form-label" for="message">Message</label>
    <textarea class="form-input form-textarea" id="message" rows="4"></textarea>
  </div>

  <!-- Checkbox -->
  <div class="form-group">
    <input type="checkbox" class="form-checkbox" id="agree">
    <label for="agree">I agree to the terms and conditions</label>
  </div>

  <!-- Submit button -->
  <button type="submit" class="btn btn-primary w-full">Submit</button>
</form>
```

### Cards

```html
<div class="card max-w-sm">
  <div class="card-header">
    <h3>Card Title</h3>
  </div>
  <div class="card-body">
    <p>Card content goes here.</p>
  </div>
  <div class="card-footer">
    <button class="btn btn-primary btn-sm">Learn More</button>
  </div>
</div>
```

### Alerts

```html
<div class="alert alert-info">
  <strong>Info:</strong> Here's some important information.
</div>

<div class="alert alert-success">
  <strong>Success!</strong> Operation completed successfully.
</div>

<div class="alert alert-warning">
  <strong>Warning:</strong> Please be careful.
</div>

<div class="alert alert-error">
  <strong>Error:</strong> Something went wrong.
</div>
```

---

## 🎨 Advanced Usage

### Transform (Transformations) - Important!

When using transform utilities, **always add the `.transform` class**.

#### Step 1: Add the `.transform` class

```html
<!-- ✅ Correct -->
<div class="transform scale-105">Scaled up</div>

<!-- ❌ Wrong (won't work) -->
<div class="scale-105">Won't work</div>
```

#### Step 2: Combine multiple transforms

```html
<!-- Scale + Rotate -->
<div class="transform scale-110 rotate-12">
  Scaled and rotated
</div>

<!-- Hover animation -->
<button class="transform transition duration-300 hover:scale-110 hover:rotate-3">
  Hover to transform
</button>
```

#### Available Transforms

```html
<!-- Scale (zoom) -->
<div class="transform scale-50">Scale to 50%</div>
<div class="transform scale-75">Scale to 75%</div>
<div class="transform scale-105">Scale to 105%</div>
<div class="transform scale-110">Scale to 110%</div>

<!-- Rotate -->
<div class="transform rotate-45">Rotate 45 degrees</div>
<div class="transform rotate-90">Rotate 90 degrees</div>
<div class="transform -rotate-45">Rotate -45 degrees (counter-clockwise)</div>
```

### Filter (Filter Effects) - Important!

When using filter utilities, **always add the `.filter` class**.

#### Step 1: Add the `.filter` class

```html
<!-- ✅ Correct -->
<img src="image.jpg" class="filter blur-sm" />

<!-- ❌ Wrong (won't work) -->
<img src="image.jpg" class="blur-sm" />
```

#### Step 2: Combine multiple filters

```html
<!-- Blur + Grayscale -->
<img src="image.jpg" class="filter blur-sm grayscale" />
```

#### Available Filters

```html
<!-- Blur effect -->
<img class="filter blur-sm" />  <!-- 4px -->
<img class="filter blur" />     <!-- 8px -->
<img class="filter blur-md" />  <!-- 12px -->
<img class="filter blur-lg" />  <!-- 16px -->

<!-- Grayscale -->
<img class="filter grayscale" />    <!-- 100% -->
<img class="filter grayscale-0" />  <!-- 0% (restore) -->
```

### Transitions & Animations

#### Step 1: Add transitions

```html
<button class="transition hover:opacity-75">
  Hover to change opacity
</button>
```

#### Step 2: Adjust duration

```html
<div class="transition duration-75">Very fast</div>
<div class="transition duration-150">Fast (default)</div>
<div class="transition duration-300">Normal</div>
<div class="transition duration-500">Slow</div>
```

#### Step 3: Adjust easing

```html
<div class="transition ease-linear">Linear</div>
<div class="transition ease-in">Ease in</div>
<div class="transition ease-out">Ease out</div>
<div class="transition ease-in-out">Ease in-out</div>
```

### Responsive Design

#### Breakpoints

| Prefix | Screen Width | Usage |
|--------|--------------|-------|
| none | 0px~ | Mobile (all devices) |
| `sm:` | 640px~ | Tablet portrait |
| `md:` | 768px~ | Tablet landscape |
| `lg:` | 1024px~ | Laptop |
| `xl:` | 1280px~ | Desktop |

#### Step 1: Responsive text size

```html
<h1 class="text-2xl md:text-4xl lg:text-5xl">
  Mobile: small, Tablet: medium, Desktop: large
</h1>
```

#### Step 2: Responsive spacing

```html
<div class="p-4 md:p-8 lg:p-12">
  Spacing changes based on screen size
</div>
```

#### Step 3: Responsive grid

```html
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  <div>Mobile: 1 column</div>
  <div>Tablet: 2 columns</div>
  <div>Desktop: 3 columns</div>
</div>
```

---

## 💼 Practical Examples

### Example 1: Product Card

```html
<div class="card max-w-sm overflow-hidden">
  <!-- Image -->
  <img src="product.jpg" class="w-full h-48 object-cover" />

  <!-- Card body -->
  <div class="card-body">
    <h3 class="text-xl font-bold mb-2">Product Name</h3>
    <p class="text-gray-600 mb-4">Product description goes here. Write compelling copy to attract customers.</p>

    <!-- Price and purchase button -->
    <div class="flex justify-between items-center">
      <span class="text-2xl font-bold text-primary">$98.00</span>
      <button class="btn btn-primary transform transition hover:scale-105">
        Add to Cart
      </button>
    </div>
  </div>
</div>
```

### Example 2: Hero Section

```html
<section class="bg-primary text-white py-20">
  <div class="container mx-auto text-center">
    <h1 class="text-4xl md:text-6xl font-bold mb-6">
      Accelerate Your Business
    </h1>
    <p class="text-xl mb-8 opacity-90">
      Maximize productivity with cutting-edge tools
    </p>
    <div class="flex gap-4 justify-center">
      <button class="btn bg-white text-primary hover:opacity-90 transition">
        Get Started Free
      </button>
      <button class="btn btn-outline border-white text-white hover:bg-white hover:text-primary transition">
        Learn More
      </button>
    </div>
  </div>
</section>
```

### Example 3: Navigation Bar

```html
<nav class="bg-white shadow-md fixed top-0 w-full z-50">
  <div class="container mx-auto px-4 py-4 flex justify-between items-center">
    <!-- Logo -->
    <a href="/" class="text-2xl font-bold text-primary">Logo</a>

    <!-- Navigation menu -->
    <ul class="flex gap-8">
      <li>
        <a href="#" class="text-gray-700 hover:text-primary transition">
          Home
        </a>
      </li>
      <li>
        <a href="#" class="text-gray-700 hover:text-primary transition">
          Products
        </a>
      </li>
      <li>
        <a href="#" class="text-gray-700 hover:text-primary transition">
          About
        </a>
      </li>
    </ul>

    <!-- CTA button -->
    <button class="btn btn-primary">
      Contact Us
    </button>
  </div>
</nav>
```

### Example 4: Photo Gallery

```html
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  <div class="overflow-hidden rounded-lg">
    <img src="photo1.jpg"
         class="w-full h-64 object-cover transform transition duration-300 hover:scale-110" />
  </div>
  <div class="overflow-hidden rounded-lg">
    <img src="photo2.jpg"
         class="w-full h-64 object-cover transform transition duration-300 hover:scale-110" />
  </div>
  <div class="overflow-hidden rounded-lg">
    <img src="photo3.jpg"
         class="w-full h-64 object-cover transform transition duration-300 hover:scale-110" />
  </div>
</div>
```

---

## ❓ FAQ

### Q1: Transform doesn't work

**A:** Make sure to add the `.transform` base class.

```html
<!-- ❌ Won't work -->
<div class="scale-105">...</div>

<!-- ✅ Correct -->
<div class="transform scale-105">...</div>
```

### Q2: Filter doesn't work

**A:** Make sure to add the `.filter` base class.

```html
<!-- ❌ Won't work -->
<img class="blur grayscale" />

<!-- ✅ Correct -->
<img class="filter blur grayscale" />
```

### Q3: How to change theme colors?

**A:** Override CSS variables.

```html
<style>
  :root {
    --primary: #your-color;
    --primary-rgb: 255, 100, 50; /* Update RGB values too */
  }
</style>
```

### Q4: Can I use it via CDN?

**A:** Yes, it's ready to use immediately.

```html
<!-- unpkg -->
<link rel="stylesheet" href="https://unpkg.com/rampo-css/dist/rampo.min.css" />

<!-- jsDelivr -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/rampo-css/dist/rampo.min.css" />
```

### Q5: How to implement dark mode?

**A:** Implement dark mode using CSS variables.

```html
<style>
  [data-theme="dark"] {
    --bg-primary: #1f2937;
    --text-primary: #f9fafb;
    /* Override other variables */
  }
</style>

<script>
  // Toggle theme
  document.body.setAttribute('data-theme', 'dark');
</script>
```

### Q6: How to add custom utilities?

**A:** Extend using CSS variables.

```css
/* Custom spacing */
.m-custom {
  margin: calc(var(--space-4) * 1.5);
}

/* Custom color */
.text-brand {
  color: var(--primary);
}

/* Custom animation */
.animate-bounce {
  animation: bounce 1s infinite;
}

@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}
```

---

## 🔧 Troubleshooting

### Styles not applying

1. **Verify CSS is loaded**
   ```html
   <!-- Check Network tab in browser DevTools -->
   ```

2. **Check for typos in class names**
   ```html
   <!-- ❌ Wrong -->
   <div class="conteiner">...</div>

   <!-- ✅ Correct -->
   <div class="container">...</div>
   ```

3. **Check Transform/Filter base classes**
   ```html
   <!-- Add .transform or .filter class -->
   ```

### Build errors

```bash
# Step 1: Reinstall dependencies
npm install

# Step 2: Clear cache
rm -rf node_modules package-lock.json
npm install

# Step 3: Run build
npm run build
```

### Responsive not working

1. **Add viewport meta tag**
   ```html
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   ```

2. **Check breakpoint syntax**
   ```html
   <!-- ✅ Correct -->
   <div class="text-sm md:text-lg">...</div>

   <!-- ❌ Wrong -->
   <div class="md-text-lg">...</div>
   ```

---

## 📘 Learn More

- **Demo Page**: Check `demo.html` for all components
- **Developer Documentation**: See `DEVELOPMENT.md`
- **Complete Class List**: Refer to source code `css/utilities.css`

---

## 🌐 Browser Support

- Chrome 88+
- Firefox 86+
- Safari 14+
- Edge 88+

We recommend using the latest browser versions.

---

## 📄 License

MIT License - Free to use, modify, and distribute.

---

## 🤝 Contributing

Pull requests and issue reports are welcome.

If you want to contribute to development, please refer to [DEVELOPMENT.md](./DEVELOPMENT.md).

---

## 📝 Changelog

### v1.0.0

- Initial release
- Basic utility classes
- Component library
- Responsive support
- Transform & Filter utilities (CSS variable-based)
- Transition & Animation utilities
- npm package distribution support

---

<div align="center">

**Made with ❤️ by Rampo CSS Team**

[GitHub](https://github.com/BoxPistols/design-framework-rampo-css) |
[npm](https://www.npmjs.com/package/rampo-css) |
[Demo](./demo.html)

</div>
