# Neon Glowing Border Animation with CSS

Create a stunning, animated neon glowing border around any element using pure CSS! This guide walks you through building a glowing gradient border effect, perfect for cards, buttons, or any UI component you want to make pop.

---

## ✨ Demo

![Neon Glowing Border Demo](https://ibb.co/MkMGrZ3b)

---

## 📁 Files Overview

- **border-glo.html** – The HTML structure using Tailwind CSS for layout.
- **border-glow-animation.css** – The custom CSS for the glowing border animation.

---

## 1. HTML Structure

Here's the main HTML file. It uses Tailwind CSS for quick layout and utility classes, but the glowing effect is handled by your own CSS.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Glowing Gradient Border</title>
    <!-- Link to your custom glowing border CSS -->
    <link rel="stylesheet" href="border-glow-animation.css">
    <!-- Tailwind CSS for layout (optional, via CDN) -->
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
        body {
            font-family: "Inter", sans-serif;
        }
    </style>
</head>
<body class="flex items-center justify-center min-h-screen bg-gray-900 p-4">
    <div class="relative w-80 h-48 bg-gray-800 rounded-xl flex items-center justify-center overflow-hidden">
        <h1 class="text-white text-2xl font-bold z-10">Hello Glow!</h1>
    </div>
</body>
</html>
```

# CSS for Glowing Border Animation
Save this as border-glow-animation.css in the same folder as your HTML file.

```css
.relative::before {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    z-index: 0;
    border-radius: 13px;
    background: linear-gradient(45deg, #ff0000, #ff7300, #fffb00, #48ff00, #00ffd5, #002bff, #7a00ff, #ff00c8, #ff0000);
    background-size: 400% 400%;
    filter: blur(8px);
    animation: gradientAnimation 15s linear infinite;
}

@keyframes gradientAnimation {
    0% {
        background-position: 0% 50%;
    }
    50% {
        background-position: 100% 50%;
    }
    100% {
        background-position: 0% 50%;
    }
}
```
## How it works:

The .relative::before pseudo-element creates a glowing border using a blurred, animated gradient.
The filter: blur(8px); softens the border for a neon glow effect.
The animation moves the gradient for a dynamic, shifting glow.

<br>

## How to Use
Copy both files (border-glo.html and border-glow-animation.css) into the same directory.
Open border-glo.html in your browser.
You should see a centered card with a beautiful, animated neon border!

<br>

## Customization
Colors: Change the colors in the linear-gradient for different glow effects.
Glow Intensity: Adjust the blur() value.
Border Radius: Match the border-radius to your element's corners.
Animation Speed: Change the duration in animation: gradientAnimation 15s linear infinite;.

<br>

## Troubleshooting
Make sure the CSS file path in your HTML <link rel="stylesheet" href="border-glow-animation.css"> is correct.
The parent element must have position: relative and overflow: hidden for the effect to work properly.
If using Tailwind, ensure your custom CSS is loaded after Tailwind so it isn't overridden.

<br>

## Credits
Inspired by modern UI/UX neon effects.
OpenRockets Web Dev Error Solutions Handbook

<br>

## License
MIT License

Enjoy your glowing borders!
<br>
By <a href="https://github.com/OpenRockets/web-dev-error-solutions">OpenRockets</a>
