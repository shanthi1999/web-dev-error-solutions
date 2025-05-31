# 🐞 Creating a CSS-Only Expanding Card with a Subtle Reveal


This document details the creation of an expanding card effect using only CSS.  No JavaScript is required. The effect involves a card that expands smoothly when hovered over, revealing additional content with a subtle animation.  This utilizes CSS transitions and transforms to achieve a clean and elegant visual.


## Description of the Styling

The styling creates a card with a minimal design.  On hover, the card expands horizontally, revealing hidden content.  A subtle shadow effect enhances the visual appeal during the expansion.


## Full Code

```html
<!DOCTYPE html>
<html>
<head>
<title>Expanding Card</title>
<style>
.card {
  width: 200px;
  height: 150px;
  background-color: #f0f0f0;
  border-radius: 5px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
  overflow: hidden; /* Hide the expanding content initially */
  transition: width 0.3s ease-in-out, box-shadow 0.3s ease-in-out; /* Smooth transition */
}

.card:hover {
  width: 400px;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2); /* Increased shadow on hover */
}

.card-content {
  padding: 10px;
}

.hidden-content {
  display: none; /* Initially hide the extra content */
}

.card:hover .hidden-content {
  display: block; /* Show extra content on hover */
}
</style>
</head>
<body>

<div class="card">
  <div class="card-content">
    <h3>Card Title</h3>
    <p>This is the main content of the card.</p>
    <div class="hidden-content">
      <p>This is the extra content revealed on hover.</p>
      <p>More details here...</p>
    </div>
  </div>
</div>

</body>
</html>
```


## Explanation

* **`.card`**: This class styles the main card element.  `overflow: hidden;` is crucial for hiding the extra content initially.  The `transition` property ensures smooth animation for width and box-shadow changes.
* **`.card:hover`**: This selector applies styles when the card is hovered over.  The width increases, and the box-shadow becomes more prominent.
* **`.card-content`**: This class styles the content within the card.
* **`.hidden-content`**: This class initially hides the extra content using `display: none;`.  The `card:hover .hidden-content` selector displays this content when the card is hovered.


## External References

While this example doesn't directly use a framework like Tailwind CSS, the principles of CSS transitions and hover effects are fundamental across all CSS frameworks.  Understanding these concepts is key to building interactive elements in CSS.  Here are some helpful resources:

* **MDN Web Docs - CSS Transitions:** [https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions)
* **MDN Web Docs - CSS Transforms:** [https://developer.mozilla.org/en-US/docs/Web/CSS/transform](https://developer.mozilla.org/en-US/docs/Web/CSS/transform)


Copyrights (c) OpenRockets Open-source Network. Free to use, copy, share, edit or publish.

