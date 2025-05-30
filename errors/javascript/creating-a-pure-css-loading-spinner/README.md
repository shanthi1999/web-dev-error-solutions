# 🐞 Creating a Pure CSS Loading Spinner


This document details how to create a visually appealing loading spinner using only CSS. No JavaScript required! This example utilizes CSS animations and keyframes to achieve a smooth, rotating effect.  We will create a simple circular spinner with a gradient.

## Description of the Styling

This CSS-only loading spinner creates a circular shape that rotates continuously. The animation is smooth and uses a linear gradient for visual appeal.  The spinner's size and colors are easily customizable through CSS variables.

## Full Code

```html
<!DOCTYPE html>
<html>
<head>
<title>CSS Loading Spinner</title>
<style>
  :root {
    --spinner-size: 80px;
    --spinner-color1: #4CAF50; /* Green */
    --spinner-color2: #FF9800; /* Orange */
  }

  .loader {
    width: var(--spinner-size);
    height: var(--spinner-size);
    border-radius: 50%;
    border: 6px solid #f3f3f3; /* Light grey border */
    border-top: 6px solid var(--spinner-color1);
    border-right: 6px solid var(--spinner-color2);
    border-bottom: 6px solid var(--spinner-color1);
    border-left: 6px solid var(--spinner-color2);
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
</style>
</head>
<body>

<div class="loader"></div>

</body>
</html>
```

## Explanation

* **`:root`:** This defines CSS variables that can be easily changed to alter the spinner's size and colors.
* **`.loader`:** This class styles the spinner itself.  `border-radius: 50%` makes it circular. The `border` properties create the rotating effect using different colors.  The `animation` property applies the `spin` keyframes.
* **`@keyframes spin`:** This defines the animation, smoothly rotating the spinner 360 degrees over one second, repeating infinitely (`infinite`).

## External References

While this is a relatively simple technique, here are some resources that might be helpful for understanding the underlying concepts:

* [CSS Animations MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations/Using_CSS_animations):  A comprehensive guide to CSS animations from Mozilla Developer Network.
* [CSS Variables (Custom Properties) MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties):  Learn more about using CSS variables for better code maintainability.


## Copyright (c) OpenRockets Open-source Network. Free to use, copy, share, edit or publish.

