# 🐞 Creating a Pure CSS Circular Progress Bar


This document details how to create a circular progress bar using only CSS.  No JavaScript or image assets are required. This technique leverages CSS's `conic-gradient` function for a smooth and efficient solution.


**Description of the Styling:**

This styling creates a circular progress bar that visually represents a percentage.  The bar itself is a circle, filled with a gradient that shows the progress.  The percentage is displayed in the center of the circle.  We utilize custom properties (CSS variables) for easy customization of colors and size.


**Full Code:**

```html
<!DOCTYPE html>
<html>
<head>
<title>CSS Circular Progress Bar</title>
<style>
:root {
  --progress-circle-size: 200px;
  --progress-bar-bg: #e0e0e0;
  --progress-bar-fg: #4CAF50;
  --progress-bar-text-color: #333;
}

.progress-ring {
  width: var(--progress-circle-size);
  height: var(--progress-circle-size);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.progress-ring svg {
  transform: rotate(-90deg);
}

.progress-ring .progress-bar {
  width: var(--progress-circle-size);
  height: var(--progress-circle-size);
}

.progress-ring .progress-bar circle {
  fill: transparent;
  stroke-width: 20;
  stroke: var(--progress-bar-bg);
  stroke-linecap: round;
}


.progress-ring .progress-bar circle:nth-child(2){
  stroke: var(--progress-bar-fg);
  stroke-dasharray: 628px; /*2 * pi * radius  radius=100px stroke-width=20px so 2*pi*(100-10)=628px approximately*/
  stroke-dashoffset: calc(628px * (1 - var(--progress, 0))); /*Calculate based on progress percentage*/
  
}

.progress-ring .progress-text {
  font-size: 1.2em;
  color: var(--progress-bar-text-color);
}
</style>
</head>
<body>

<div class="progress-ring" style="--progress: 0.75;">
  <svg class="progress-bar" viewBox="0 0 200 200">
    <circle cx="100" cy="100" r="90"/>
    <circle cx="100" cy="100" r="90"/>
  </svg>
  <div class="progress-text">75%</div>
</div>


</body>
</html>
```


**Explanation:**

* **CSS Variables:**  The `:root` element defines custom properties for easy customization of colors and size.
* **`conic-gradient` (Implicit):** The `stroke-dasharray` and `stroke-dashoffset` properties are used to simulate a conic gradient.  We calculate the circumference of the circle and use the `--progress` variable to determine how much of the circle should be filled.
* **SVG for the Circle:** An SVG `<circle>` element is used to draw the circular progress bar. This provides better control over the appearance than a simple `border-radius` on a div.
* **Responsiveness:**  The size is controlled by the `--progress-circle-size` variable, allowing for easy scaling.

**External References:**

* [MDN Web Docs - conic-gradient](https://developer.mozilla.org/en-US/docs/Web/CSS/conic-gradient)
* [MDN Web Docs - stroke-dasharray](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stroke-dasharray)
* [MDN Web Docs - stroke-dashoffset](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stroke-dashoffset)


Copyrights (c) OpenRockets Open-source Network. Free to use, copy, share, edit or publish.

