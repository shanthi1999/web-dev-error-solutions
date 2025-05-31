# 🐞 Creating a Smoothly Animated CSS Loading Spinner


This document details the creation of a visually appealing and smoothly animated loading spinner using pure CSS. We'll leverage CSS animations and keyframes to achieve a clean, professional look without relying on JavaScript.

**Description of the Styling:**

The loading spinner consists of four circles arranged in a square formation.  These circles rotate smoothly around a central point, creating a dynamic loading effect.  We'll use CSS variables for easy customization of color, size, and animation speed.


**Full Code:**

```html
<!DOCTYPE html>
<html>
<head>
<title>CSS Loading Spinner</title>
<style>
  .loader {
    width: 80px;
    height: 80px;
    display: inline-block;
    position: relative;
  }

  .loader div {
    position: absolute;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background-color: var(--loader-color, #3498db); /* Default color: blue */
    animation: rotate 1s linear infinite;
  }

  .loader div:nth-child(1) {
    top: 0;
    left: 0;
    animation-delay: 0s;
  }

  .loader div:nth-child(2) {
    top: 0;
    right: 0;
    animation-delay: 0.25s;
  }

  .loader div:nth-child(3) {
    bottom: 0;
    right: 0;
    animation-delay: 0.5s;
  }

  .loader div:nth-child(4) {
    bottom: 0;
    left: 0;
    animation-delay: 0.75s;
  }

  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
</style>
</head>
<body>

<div class="loader">
  <div></div>
  <div></div>
  <div></div>
  <div></div>
</div>

</body>
</html>
```

**Explanation:**

* **`.loader`**: This class sets the overall size and positioning of the spinner.
* **`.loader div`**: This styles each individual circle within the spinner.  `border-radius: 50%` makes them circular. `var(--loader-color)` allows for easy color customization using CSS variables.
* **`:nth-child`**: This selector targets each circle individually, allowing us to apply different animation delays to create the rotating effect.
* **`@keyframes rotate`**: This defines the animation, rotating the circles 360 degrees continuously.
* **`animation-delay`**:  This property is used to stagger the animation of each circle, creating the visual effect of smooth rotation.


**External References:**

* [MDN Web Docs on CSS Animations](https://developer.mozilla.org/en-US/docs/Web/CSS/animation)
* [CSS Tricks on Loading Animations](https://css-tricks.com/snippets/css/loading-animations/)


**Customization:**

You can easily customize the spinner by modifying the following:

* **`--loader-color`:** Change the color of the spinner.
* **`width` and `height` of `.loader`:** Adjust the overall size of the spinner.
* **`width` and `height` of `.loader div`:** Adjust the size of each individual circle.
* **`animation-duration` of `@keyframes rotate`:** Control the speed of the animation.


Copyrights (c) OpenRockets Open-source Network. Free to use, copy, share, edit or publish.

