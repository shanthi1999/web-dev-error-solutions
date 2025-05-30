# 🐞 Creating a Pure CSS Loading Spinner


This document details how to create a visually appealing loading spinner using only CSS.  We'll utilize CSS animations and transformations to achieve a smooth, rotating effect without relying on JavaScript or image assets.  This technique is lightweight and performant.

**Description of the Styling:**

The loading spinner will be a four-part circle, with each part rotating independently to create a dynamic loading animation.  The color will be a vibrant blue, but this can be easily customized.  The design is clean and modern, suitable for various web applications.

**Full Code:**

```css
.loader {
  width: 80px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.loader div {
  position: absolute;
  width: 16px;
  height: 16px;
  background-color: #007bff; /* Blue color */
  border-radius: 50%;
  animation: rotate 1s linear infinite;
}

.loader div:nth-child(1) {
  animation-delay: 0s;
}

.loader div:nth-child(2) {
  animation-delay: 0.25s;
}

.loader div:nth-child(3) {
  animation-delay: 0.5s;
}

.loader div:nth-child(4) {
  animation-delay: 0.75s;
}

@keyframes rotate {
  0% {
    transform: rotate(0deg) translate(32px) rotate(0deg);
  }
  100% {
    transform: rotate(360deg) translate(32px) rotate(-360deg);
  }
}

/* Positioning the divs around a central point */
.loader div:nth-child(1) {
  top: 0;
  left: 32px;
}
.loader div:nth-child(2) {
  top: 32px;
  left: 0;
}
.loader div:nth-child(3) {
  top: 32px;
  left: 64px;
}
.loader div:nth-child(4) {
  top: 64px;
  left: 32px;
}
```

**Explanation:**

* **`.loader`:** This class sets the size and uses flexbox to center the child elements.
* **`.loader div`:** Styles each individual part of the spinner, setting its size, background color, and shape (circle).
* **`:nth-child`:** Selects each div individually and applies a different animation delay, creating the staggered rotation effect.
* **`@keyframes rotate`:** Defines the animation, rotating each element 360 degrees continuously.  The `translate` function positions each dot on the circle's circumference. The double `rotate` creates the correct animation effect.
* **Positioning:** The individual positioning of the divs is essential for the circular formation.

**External References:**

* [MDN Web Docs on CSS Animations](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations/Using_CSS_animations)
* [CSS-Tricks on Keyframes](https://css-tricks.com/snippets/css/keyframe-animation-syntax/)
* [Understanding `transform: translate`](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/translate)


To use this code, simply include it in your CSS file and then add a `<div class="loader"></div>` to your HTML where you want the spinner to appear.


Copyrights (c) OpenRockets Open-source Network. Free to use, copy, share, edit or publish.

