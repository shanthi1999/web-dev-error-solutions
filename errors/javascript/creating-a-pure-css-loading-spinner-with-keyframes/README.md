# 🐞 Creating a Pure CSS Loading Spinner with Keyframes


This document describes how to create a visually appealing loading spinner using only CSS. We'll leverage CSS3 animations and transforms to achieve a smooth, rotating effect without relying on JavaScript or image assets.

**Description of the Styling:**

This spinner consists of 8 evenly spaced circular elements arranged in a ring.  Each element will rotate independently around its own center, creating a dynamic loading animation.  We’ll use the `@keyframes` rule to define the animation and CSS transforms to control the rotation and position.  The styling will be concise and easily adaptable to different color schemes and sizes.


**Full Code:**

```html
<!DOCTYPE html>
<html>
<head>
<title>CSS Loading Spinner</title>
<style>
.spinner {
  width: 80px;
  height: 80px;
  position: relative;
  margin: 50px auto;
}

.spinner div {
  position: absolute;
  width: 10px;
  height: 10px;
  background-color: #3498db; /* You can change the color here */
  border-radius: 50%;
  animation: rotate 1s linear infinite;
}

.spinner div:nth-child(1) { top: 0; left: 35px; animation-delay: 0.1s; }
.spinner div:nth-child(2) { top: 15px; left: 60px; animation-delay: 0.2s; }
.spinner div:nth-child(3) { top: 40px; left: 60px; animation-delay: 0.3s; }
.spinner div:nth-child(4) { top: 60px; left: 45px; animation-delay: 0.4s; }
.spinner div:nth-child(5) { top: 60px; left: 20px; animation-delay: 0.5s; }
.spinner div:nth-child(6) { top: 40px; left: 0px; animation-delay: 0.6s; }
.spinner div:nth-child(7) { top: 15px; left: 0px; animation-delay: 0.7s; }
.spinner div:nth-child(8) { top: 15px; left: 20px; animation-delay: 0.8s; }

@keyframes rotate {
  100% {
    transform: rotate(360deg);
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

* **`spinner` class:** This sets up the container for our spinner, defining its size and centering it on the page.
* **`spinner div`:** This styles each individual circle.  `position: absolute` allows precise placement within the container.
* **`:nth-child` selectors:** These are used to position each circle evenly around the center. The `animation-delay` property staggers the animation for each circle, creating the rotating effect.
* **`@keyframes rotate`:** This defines the animation, rotating each circle 360 degrees over one second (`1s`).  `linear` ensures constant speed.  `infinite` makes the animation loop continuously.


**External References:**

* [MDN Web Docs on CSS Animations](https://developer.mozilla.org/en-US/docs/Web/CSS/animation)
* [CSS-Tricks on Loading Spinners](https://css-tricks.com/examples/Spinner/) (for more advanced spinner examples)


Copyrights (c) OpenRockets Open-source Network. Free to use, copy, share, edit or publish.

