# 🐞 Creating a CSS-only Circular Progress Bar


This document details how to create a circular progress bar using only CSS.  This technique avoids the need for JavaScript, keeping the code lightweight and improving performance. We'll leverage CSS's `clip-path` property and some clever calculations to achieve the desired effect.

**Description of the Styling:**

This method uses a circle as the base, then applies a `clip-path` to reveal only a portion of the circle, simulating progress.  The size of the revealed portion is controlled by a single CSS variable, allowing for easy modification of the progress percentage.  We utilize rotations and transforms to create the visual effect of a filling circle.

**Full Code:**

```html
<!DOCTYPE html>
<html>
<head>
<title>CSS Circular Progress Bar</title>
<style>
.circular-progress {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background-color: #f0f0f0; /* Light gray background */
  position: relative;
}

.circular-progress::before {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: #4CAF50; /* Green progress color */
  clip-path: circle(50% at 50% 50%); /*Initial clip path*/
  /*This is the key part*/
  --progress: 75; /*Set the percentage of progress*/
  transform: rotate(calc(var(--progress) * 3.6deg));  /* 360deg / 100% = 3.6deg per 1% */
}
</style>
</head>
<body>

<div class="circular-progress"></div>

</body>
</html>
```

**Explanation:**

* **`.circular-progress`:** This class styles the main container, setting its dimensions, border-radius for the circle shape, and background color.  `position: relative` is crucial for absolute positioning of the pseudo-element.

* **`.circular-progress::before`:** This pseudo-element creates the progress bar itself.  `translate(-50%, -50%)` centers it within the container.  The `clip-path: circle(50% at 50% 50%)` initially creates a full circle.  The magic happens with `--progress` and the `transform: rotate()` calculation.

* **`--progress`:** This CSS variable sets the progress percentage (0-100).  Change this value to adjust the progress visually.

* **`transform: rotate(calc(var(--progress) * 3.6deg))`:** This line is the core of the animation. It rotates the progress bar based on the `--progress` variable.  Since a full circle is 360 degrees, we divide 360 by 100 to get 3.6 degrees per percentage point.

**External References:**

* [MDN Web Docs on `clip-path`](https://developer.mozilla.org/en-US/docs/Web/CSS/clip-path)
* [CSS Tricks on Circular Progress Bars](https://css-tricks.com/creating-a-circular-progress-bar-with-just-css/) (While this might offer different techniques, it's a good resource for learning more about circular progress bars in general)


Copyrights (c) OpenRockets Open-source Network. Free to use, copy, share, edit or publish.

