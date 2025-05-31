# 🐞 Creating a Smooth, Circular Progress Bar with CSS


This document details the creation of a visually appealing circular progress bar using only CSS.  We'll leverage CSS3's `conic-gradient` function for a clean and efficient solution.  No JavaScript required!

**Description of the Styling:**

This styling creates a circular progress bar that fills from the top clockwise.  The percentage complete is visually represented by the filled arc of the circle.  We use a combination of `conic-gradient`, `border-radius`, and some subtle box-shadow to add depth and visual appeal.  The percentage can be easily adjusted by changing the `--progress` custom property.

**Full Code:**

```html
<!DOCTYPE html>
<html>
<head>
<title>Circular Progress Bar</title>
<style>
  .progress-ring {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    background: conic-gradient(
      #4CAF50 var(--progress, 0%), 
      #ddd 0%
    );
    box-shadow: 0 0 10px rgba(0,0,0,0.1);
  }

  .progress-ring::before {
    content: attr(data-percentage)"%";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 16px;
    color: #333;
  }
</style>
</head>
<body>

  <div class="progress-ring" data-percentage="75"></div>  <!-- Adjust data-percentage attribute -->

</body>
</html>
```

**Explanation:**

* **`width` and `height`:** Set the dimensions of the circle.
* **`border-radius: 50%;`:** Creates the circular shape.
* **`conic-gradient`:** This is the core of the progress bar.  It creates a gradient that is circular.  `#4CAF50` (a green color) represents the filled portion, and `#ddd` (a light gray) represents the unfilled portion.  `var(--progress, 0%)` allows us to dynamically control the filled portion using a custom CSS property.  The `0%` provides a fallback if `--progress` is not set.
* **`box-shadow`:** Adds a subtle shadow to give the progress bar more depth.
* **`::before` pseudo-element:** This creates an element on top of the progress bar to display the percentage.  `attr(data-percentage)` accesses the `data-percentage` attribute of the `div` element.
* **`data-percentage` attribute:**  This attribute in the HTML sets the percentage value displayed. Change this to adjust the progress.


**External References:**

* [MDN Web Docs - conic-gradient](https://developer.mozilla.org/en-US/docs/Web/CSS/conic-gradient)
* [CSS-Tricks - Circular Progress Bars](https://css-tricks.com/creating-a-circular-progress-bar-with-css/) (While this may show other methods, it is a great resource for understanding different approaches)


This method provides a simple and effective way to create a visually appealing circular progress bar without relying on JavaScript.  You can easily customize the colors and size to fit your specific design needs. Remember to adjust the `data-percentage` attribute within the HTML to change the displayed progress.


Copyrights (c) OpenRockets Open-source Network. Free to use, copy, share, edit or publish.

