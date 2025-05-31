# 🐞 Creating a CSS-only Expanding Card with a Subtle Reveal Animation


This document details the creation of an expanding card using only CSS.  The animation smoothly reveals the card content upon hover, providing a subtle and engaging user experience.  This example uses pure CSS3, avoiding the need for JavaScript libraries or frameworks.


**Description of the Styling:**

This design features a card that initially displays only a minimal title and image. On hover, the card expands vertically, revealing hidden content (in this example, some descriptive text).  The animation utilizes CSS transitions for a smooth effect. The styling incorporates a subtle shadow for depth and visual appeal.


**Full Code:**

```html
<!DOCTYPE html>
<html>
<head>
<title>Expanding Card</title>
<style>
.card {
  width: 300px;
  height: 150px;
  background-color: #f2f2f2;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  overflow: hidden; /* Hide content that extends beyond the initial height */
  transition: height 0.3s ease-in-out; /* Smooth transition for height change */
}

.card:hover {
  height: 300px; /* Expand on hover */
}

.card-image {
  width: 100%;
  height: 100px;
  background-size: cover;
  background-position: center;
}

.card-content {
  padding: 10px;
  opacity: 0; /* Initially hidden */
  transition: opacity 0.3s ease-in-out; /* Smooth transition for opacity change */
}

.card:hover .card-content {
  opacity: 1; /* Reveal on hover */
}

.card-title {
  font-weight: bold;
  margin-bottom: 5px;
}
</style>
</head>
<body>

<div class="card">
  <div class="card-image" style="background-image: url('https://via.placeholder.com/300x100');"></div>
  <div class="card-content">
    <h3 class="card-title">My Expanding Card</h3>
    <p>This is some descriptive text about the card.  You can add as much content as you like here.  The card will expand to accommodate it.</p>
  </div>
</div>

</body>
</html>
```


**Explanation:**

*   **`.card`:**  This class styles the overall card container.  The `overflow: hidden;` is crucial for initially hiding the content that extends beyond the initial height.  The `transition` property defines the animation for the height change.
*   **`.card:hover`:** This selector applies styles when the card is hovered over, expanding the height.
*   **`.card-image`:** Styles the background image within the card.  You'll need to replace the placeholder image URL with your own.
*   **`.card-content`:**  Styles the content area.  The initial `opacity: 0;` hides it, and the `transition` provides a smooth fade-in effect.
*   **`.card:hover .card-content`:**  This selector targets the content area *only* when the card is hovered over, revealing it.


**External References:**

*   [CSS Transitions](https://developer.mozilla.org/en-US/docs/Web/CSS/transition) - MDN documentation on CSS transitions.
*   [CSS Selectors](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity) - MDN documentation on CSS selectors (understanding `:hover`).


Copyrights (c) OpenRockets Open-source Network. Free to use, copy, share, edit or publish.

