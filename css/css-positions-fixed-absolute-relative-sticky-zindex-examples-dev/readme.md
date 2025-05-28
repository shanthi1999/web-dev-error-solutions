# Creative CSS Positioning: Cloud Scene Demo

Explore the power of CSS positioning with this visually engaging demonstration! This project showcases all major CSS position properties—**static**, **relative**, **absolute**, **fixed**, and **sticky**—by building a playful cloud scene using only HTML and CSS. Each cloud and element is crafted from layered `<div>`s, creatively arranged to highlight how different position types interact.

---

## ✨ Demo

<img src="https://i.ibb.co/LXrxHvkp/image.png" alt="CSS Cloud Position Demo" border="0">

---

## 📁 Files Overview

- **cloud-positions.html** – The main HTML structure for the cloud scene.
- **cloud-positions-demo.css** – The CSS file demonstrating all position types and creative layering.

---

## 1. HTML Structure

The HTML file contains a sun, a sticky rainbow bar, and a cloud built from several `<div>`s, each using a different CSS position property.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>CSS Positioning Cloud Demo</title>
  <link rel="stylesheet" href="cloud-positions-demo.css">
</head>
<body>
  <div class="rainbow-bar"></div>
  <div class="sun"></div>
  <div class="cloud">
    <div class="cloud-body"></div>
    <div class="cloud-puff1"></div>
    <div class="cloud-puff2"></div>
    <div class="cloud-highlight"></div>
    <div class="cloud-shadow"></div>
    <div class="raindrop"></div>
    <div class="raindrop"></div>
    <div class="raindrop"></div>
  </div>
</body>
</html>
```

---

## 2. CSS for Creative Positioning

Save this as `cloud-positions-demo.css` in the same folder as your HTML file.

```css
body {
  background: linear-gradient(to top, #aeefff 0%, #e0f7fa 100%);
  min-height: 200vh;
  margin: 0;
  font-family: sans-serif;
}

.cloud {
  position: relative;
  width: 300px;
  height: 120px;
  margin: 100px auto 0 auto;
  z-index: 1;
}

.cloud-body {
  width: 180px;
  height: 80px;
  background: #fff;
  border-radius: 50% 50% 60% 60%;
  box-shadow: 0 8px 30px #b3e5fc;
  position: static;
  z-index: 2;
  margin-left: 60px;
  margin-top: 20px;
}

.cloud-puff1 {
  position: absolute;
  left: 0;
  top: 40px;
  width: 100px;
  height: 60px;
  background: #fff;
  border-radius: 60% 60% 70% 70%;
  box-shadow: 0 4px 20px #b3e5fc;
  z-index: 3;
}

.cloud-puff2 {
  position: absolute;
  right: 10px;
  top: 10px;
  width: 80px;
  height: 60px;
  background: #fff;
  border-radius: 70% 70% 60% 60%;
  box-shadow: 0 4px 20px #b3e5fc;
  z-index: 4;
}

.cloud-highlight {
  position: relative;
  left: 120px;
  top: -60px;
  width: 40px;
  height: 30px;
  background: #e0f7fa;
  border-radius: 50%;
  opacity: 0.7;
  z-index: 5;
}

.cloud-shadow {
  position: absolute;
  left: 70px;
  top: 90px;
  width: 120px;
  height: 30px;
  background: #b3e5fc;
  border-radius: 50%;
  opacity: 0.5;
  z-index: 1;
  filter: blur(2px);
}

.sun {
  position: fixed;
  top: 40px;
  right: 60px;
  width: 80px;
  height: 80px;
  background: radial-gradient(circle, #fffde7 60%, #ffe082 100%);
  border-radius: 50%;
  box-shadow: 0 0 60px 20px #ffe082;
  z-index: 10;
  border: 4px solid #fffde7;
}

.rainbow-bar {
  position: sticky;
  top: 0;
  width: 100vw;
  height: 18px;
  background: linear-gradient(90deg, red, orange, yellow, green, blue, indigo, violet);
  z-index: 100;
  box-shadow: 0 2px 8px #b3e5fc;
}

.raindrop {
  position: absolute;
  width: 10px;
  height: 24px;
  background: #81d4fa;
  border-radius: 60% 60% 80% 80%/80% 80% 100% 100%;
  opacity: 0.7;
  animation: fall 2s infinite linear;
}

.raindrop:nth-child(6) { left: 60px; top: 110px; animation-delay: 0s; }
.raindrop:nth-child(7) { left: 120px; top: 120px; animation-delay: 0.5s; }
.raindrop:nth-child(8) { left: 180px; top: 115px; animation-delay: 1s; }

@keyframes fall {
  0% { transform: translateY(0); opacity: 0.7; }
  80% { opacity: 0.7; }
  100% { transform: translateY(40px); opacity: 0; }
}
```

---

## How it Works

- **Static**: The main cloud body uses default static positioning.
- **Relative**: The cloud container and highlight use relative positioning for local offsets.
- **Absolute**: Cloud puffs, shadow, and raindrops are absolutely positioned within the cloud.
- **Fixed**: The sun stays in the top-right corner as you scroll.
- **Sticky**: The rainbow bar sticks to the top of the viewport when scrolling.

All elements are layered with `z-index` and creatively shaped with `border-radius` and gradients.

---

## How to Use

1. Copy both files (`cloud-positions.html` and `cloud-positions-demo.css`) into the same directory.
2. Open `cloud-positions.html` in your browser.
3. Enjoy the interactive demonstration of CSS positioning!

---

## Customization

- **Add More Clouds**: Duplicate the `.cloud` block for more clouds.
- **Change Colors**: Adjust gradients and backgrounds for a new look.
- **Experiment**: Try moving or resizing elements to see how positions interact.

---

## Troubleshooting

- Ensure the CSS file path in your HTML `<link rel="stylesheet" href="cloud-positions-demo.css">` is correct.
- For best results, view in a modern browser.

---

## Credits

Inspired by creative CSS art and educational demos.  
OpenRockets Web Dev Error Solutions Handbook

---

## License

MIT License

Enjoy exploring CSS positions!
<br>
By <a href="https://github.com/OpenRockets/web-dev-error-solutions">OpenRockets</a>