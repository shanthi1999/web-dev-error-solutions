# 🐞 Creating a Pure CSS Animated Loading Spinner


This document details the creation of a visually appealing loading spinner using only CSS.  No JavaScript is required! We'll leverage CSS animations and keyframes to achieve a smooth, rotating effect.  This example uses plain CSS3, but the concept could be easily adapted to frameworks like Tailwind CSS.


**Description of the Styling:**

The spinner consists of eight equally spaced circles arranged in a circular pattern.  These circles rotate continuously, creating the illusion of loading or progress. The styling uses `animation` and `keyframes` to define the rotation, and `transform` properties for positioning.  We'll adjust colors and size easily through CSS variables (custom properties) for flexibility.


**Full Code:**

```html
<!DOCTYPE html>
<html>
<head>
<title>CSS Loading Spinner</title>
<style>
  :root {
    --spinner-size: 100px;
    --spinner-color: #007bff; /* Blue, easily changeable */
  }

  .spinner {
    width: var(--spinner-size);
    height: var(--spinner-size);
    position: relative;
    animation: rotate 2s linear infinite;
  }

  .spinner div {
    position: absolute;
    width: 15%;
    height: 15%;
    background-color: var(--spinner-color);
    border-radius: 50%;
    animation: bounce 1s ease-in-out infinite;
  }

  .spinner div:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    box-shadow: 0 0 0 1px var(--spinner-color), 0 0 0 2px var(--spinner-color), 0 0 0 3px var(--spinner-color);
  }

  .spinner div:nth-child(1) {
    left: 50%;
    top: 0;
    transform: translateX(-50%);
    animation-delay: 0s;
  }
  .spinner div:nth-child(2) {
    left: 100%;
    top: 50%;
    transform: translate(-100%, -50%);
    animation-delay: 0.125s;
  }
  .spinner div:nth-child(3) {
    top: 100%;
    right: 50%;
    transform: translate(50%, -100%);
    animation-delay: 0.25s;
  }
  .spinner div:nth-child(4) {
    top: 100%;
    left: 50%;
    transform: translate(-50%, -100%);
    animation-delay: 0.375s;
  }
  .spinner div:nth-child(5) {
    top: 50%;
    left: 0;
    transform: translate(0, -50%);
    animation-delay: 0.5s;
  }
  .spinner div:nth-child(6) {
    top: 50%;
    right: 0;
    transform: translate(100%, -50%);
    animation-delay: 0.625s;
  }
  .spinner div:nth-child(7) {
    left: 50%;
    bottom: 0;
    transform: translateX(-50%);
    animation-delay: 0.75s;
  }
  .spinner div:nth-child(8) {
    bottom: 100%;
    right: 50%;
    transform: translate(50%, 100%);
    animation-delay: 0.875s;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes bounce {
    0%, 100% {
      transform: scale(1);
      opacity: 1;
    }
    50% {
      transform: scale(1.2);
      opacity: 0.5;
    }
  }
</style>
</head>
<body>

<div class="spinner">
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
</div>

</body>
</html>
```

**Explanation:**

* **CSS Variables:**  `--spinner-size` and `--spinner-color` allow easy customization.
* **`spinner` class:** Sets the overall size and applies the `rotate` animation.
* **`spinner div`:** Styles each individual circle.  `box-shadow` adds a subtle glow effect.
* **`nth-child` selectors:**  Position each circle around the center.
* **`animation-delay`:** Stagger the animation slightly for a more dynamic look.
* **`rotate` keyframes:** Define the continuous rotation.
* **`bounce` keyframes:** Creates a subtle pulse effect on each circle.


**External References:**

* [MDN Web Docs on CSS Animations](https://developer.mozilla.org/en-US/docs/Web/CSS/animation)
* [MDN Web Docs on CSS Keyframes](https://developer.mozilla.org/en-US/docs/Web/CSS/@keyframes)
* [CSS-Tricks on Loading Animations](https://css-tricks.com/examples/Spinner/) (For inspiration and alternative approaches)


Copyrights (c) OpenRockets Open-source Network. Free to use, copy, share, edit or publish.

