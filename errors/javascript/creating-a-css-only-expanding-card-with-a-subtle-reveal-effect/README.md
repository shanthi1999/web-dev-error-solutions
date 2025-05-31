# 🐞 Creating a CSS-only Expanding Card with a Subtle Reveal Effect


This document details how to create an expanding card effect using only CSS.  This technique utilizes transitions and transforms to achieve a visually appealing animation without the need for JavaScript.  The card expands smoothly when hovered over, revealing additional content.

**Description of the Styling:**

This styling creates a card with a hidden section. On hover, the card expands to reveal the hidden content. The expansion uses a smooth transition for a refined user experience. The hidden content subtly slides in from the bottom using transform properties.


**Full Code:**

```html
<!DOCTYPE html>
<html>
<head>
<title>Expanding Card</title>
<style>
.card {
  width: 300px;
  height: 200px;
  background-color: #f2f2f2;
  border-radius: 5px;
  overflow: hidden; /* Hide overflowing content of the expanding part*/
  transition: height 0.3s ease-in-out; /* Smooth transition for height change */
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.card:hover {
  height: 400px; /* Increased height on hover to reveal hidden content */
}

.card-content {
  padding: 20px;
}

.hidden-content {
  height: 0; /* Initially hidden */
  overflow: hidden; /* Hide the content before transition */
  transition: height 0.3s ease-in-out, transform 0.3s ease-in-out; /* Smooth transition for height and transform */
  transform: translateY(20px); /*Initially translate upwards*/
}

.card:hover .hidden-content {
  height: 100px; /* Height of the revealed content*/
  transform: translateY(0); /* Reset transform on hover */
}
</style>
</head>
<body>

<div class="card">
  <div class="card-content">
    <h3>Card Title</h3>
    <p>This is the visible content of the card.</p>
  </div>
  <div class="hidden-content">
    <p>This is the hidden content that appears on hover.  It smoothly slides in from the bottom.</p>
  </div>
</div>

</body>
</html>
```

**Explanation:**

* **`.card`:** This class styles the main card element.  `overflow: hidden` is crucial to prevent the hidden content from peeking out before the hover effect. The `transition` property ensures a smooth animation for the height change.

* **`.card:hover`:** This selector targets the card when the mouse hovers over it, increasing the height to accommodate the hidden content.

* **`.card-content`:** This class styles the initially visible content.

* **`.hidden-content`:** This class styles the hidden content.  `height: 0` and `overflow: hidden` initially hide the content.  `transform: translateY(20px)` moves the content slightly upwards before it appears.  The `transition` property applies to both the `height` and `transform` properties, creating the smooth slide-in effect.

* **`.card:hover .hidden-content`:** This selector targets the hidden content when hovering over the card.  The `height` is set to a value that reveals the content, and the `transform` is reset to its original position.


**External References:**

* [CSS Transitions](https://developer.mozilla.org/en-US/docs/Web/CSS/transition)
* [CSS Transforms](https://developer.mozilla.org/en-US/docs/Web/CSS/transform)
* [Understanding CSS Selectors](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors)


Copyrights (c) OpenRockets Open-source Network. Free to use, copy, share, edit or publish.

