# 🐞 Creating a CSS-only Circular Progress Bar


This document describes how to create a visually appealing circular progress bar using only CSS.  No JavaScript is required! This technique leverages the `clip-path` property for precise shape manipulation and CSS variables for easy customization.

**Description of the Styling:**

This method creates a circular progress bar by using a circle as the base and then using the `clip-path` property to "clip" a portion of the circle, revealing only the progress percentage.  The progress is controlled by a CSS custom property (variable).  We use a subtle gradient for added visual interest.


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
    background: conic-gradient(
      #007bff 0%,
      #007bff var(--progress, 0%),
      #e0e0e0 var(--progress, 0%),
      #e0e0e0 100%
    );
  }

  .circular-progress::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 80%;
    height: 80%;
    border-radius: 50%;
    background-color: white;
    z-index: 1; /* Ensure it's on top of the gradient */
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .circular-progress span {
    font-size: 1em;
    font-weight: bold;
  }

</style>
</head>
<body>

<h1>My Progress</h1>

<div class="circular-progress" style="--progress: 75%;">
  <span>75%</span>
</div>

<div class="circular-progress" style="--progress: 20%;">
  <span>20%</span>
</div>


</body>
</html>
```

**Explanation:**

* **`conic-gradient`:** This creates a circular gradient.  The first color (`#007bff` - a blue in this case) represents the filled portion of the progress bar, and the second color (`#e0e0e0` - a light gray) represents the empty portion.  `var(--progress)` dynamically controls the boundary between these colors.
* **`::before` pseudo-element:** This creates a white circle in the center of the progress bar to improve readability. It's positioned absolutely and centered using `transform: translate(-50%, -50%);`.
* **`--progress` CSS Variable:** This variable allows you to easily control the progress percentage.  The value should be between 0 and 100.  It's used within the `conic-gradient`.
* **Multiple Progress Bars:** The code demonstrates how to create multiple progress bars with different progress percentages simply by adjusting the `--progress` variable in the `style` attribute of each `<div>`.


**External References:**

* [MDN Web Docs - `conic-gradient`](https://developer.mozilla.org/en-US/docs/Web/CSS/conic-gradient)
* [MDN Web Docs - `clip-path`](https://developer.mozilla.org/en-US/docs/Web/CSS/clip-path)  (While not directly used here, understanding `clip-path` is helpful for related techniques)
* [CSS Variables (Custom Properties)](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties)


Copyrights (c) OpenRockets Open-source Network. Free to use, copy, share, edit or publish.

