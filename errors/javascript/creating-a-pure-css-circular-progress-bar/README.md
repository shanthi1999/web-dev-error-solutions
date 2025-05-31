# 🐞 Creating a Pure CSS Circular Progress Bar


This document details how to create a visually appealing circular progress bar using only CSS.  No JavaScript is required! This technique leverages CSS gradients and transforms to achieve a smooth, animated effect.

**Description of the Styling:**

This circular progress bar uses a combination of techniques to create the visual effect.  A `radial-gradient` creates the circular base, while a `linear-gradient` masked with a circle is used to represent the progress.  CSS animations smoothly transition the progress.  This method is efficient and avoids the performance overhead of JavaScript solutions.

**Full Code:**

```html
<!DOCTYPE html>
<html>
<head>
<title>CSS Circular Progress Bar</title>
<style>
.progress-ring {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background: radial-gradient(circle at center, #e5e5e5, #e5e5e5 90%, transparent 100%);
  position: relative;
}

.progress-ring::before {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: linear-gradient(to right, #4CAF50, #4CAF50) no-repeat;
  background-size: 100% 100%;
  clip-path: circle(50% at center);
  animation: progress 3s linear forwards;
}

@keyframes progress {
  to {
    transform: translate(-50%, -50%) rotate(360deg); /* Adjust 360deg for progress percentage */
    background-size: calc(100% * var(--progress)) 100%; /* Adjust var(--progress) accordingly */
  }
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
}

/* Example usage with progress percentage (0-100%) */
.container .progress-ring {
  --progress: 0.75; /* 75% progress */
}

</style>
</head>
<body>
<div class="container">
  <div class="progress-ring"></div>
</div>
</body>
</html>
```

**Explanation:**

* **`progress-ring`:** This is the main container, setting the size and basic style of the circle.  The `radial-gradient` creates the grey background with a transparent outer ring to give a 3D effect.
* **`progress-ring::before`:** This pseudo-element creates the progress bar itself.  The `linear-gradient` provides the color, `clip-path` makes it circular, and the `background-size` and animation control its length.
* **`@keyframes progress`:** This defines the animation. The `transform: rotate()` rotates the `linear-gradient`, and the `background-size` dynamically changes the progress arc length based on the `--progress` custom property.
* **Custom Property `--progress`:** This allows easy control of the progress percentage.  A value of `0` represents 0% progress, `1` represents 100%, and so on.


**External References:**

* [MDN Web Docs on `radial-gradient`](https://developer.mozilla.org/en-US/docs/Web/CSS/radial-gradient)
* [MDN Web Docs on `linear-gradient`](https://developer.mozilla.org/en-US/docs/Web/CSS/linear-gradient)
* [MDN Web Docs on `clip-path`](https://developer.mozilla.org/en-US/docs/Web/CSS/clip-path)
* [MDN Web Docs on CSS Animations](https://developer.mozilla.org/en-US/docs/Web/CSS/animation)


Copyrights (c) OpenRockets Open-source Network. Free to use, copy, share, edit or publish.

