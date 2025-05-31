# 🐞 Creating a CSS-Only Expanding Card with a Subtle Reveal


This document details how to create an expanding card effect using only CSS.  This effect provides a visually appealing and user-friendly way to reveal more information on hover or click. We'll leverage CSS transitions and transforms for a smooth animation.


**Description of the Styling:**

This technique uses a single `div` element to represent the card.  The card initially displays a concise summary. On hover, the card expands vertically to reveal hidden content.  A subtle shadow effect enhances the visual appeal.  No JavaScript is required.

**Full Code:**

```html
<!DOCTYPE html>
<html>
<head>
<title>Expanding Card</title>
<style>
.card {
  background-color: #f0f0f0;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  overflow: hidden; /* Hide content that extends beyond the card */
  transition: max-height 0.3s ease-in-out; /* Smooth transition for expansion */
  max-height: 100px; /* Initial height */
}

.card:hover {
  max-height: 300px; /* Expanded height on hover */
}

.card-content {
  padding: 15px;
}

.card-title {
  font-weight: bold;
  margin-bottom: 5px;
}

.card-text {
  font-size: 14px;
  line-height: 1.5;
}
</style>
</head>
<body>

<div class="card">
  <div class="card-content">
    <h3 class="card-title">Card Title</h3>
    <p class="card-text">This is a short summary of the card content.</p>
    <p class="card-text" style="display: none;">This is the extra content that will be revealed on hover.  This text is initially hidden using the `display: none;` style.
    </p>
  </div>
</div>

</body>
</html>
```


**Explanation:**

* **`max-height`:**  This property initially restricts the card's height. On hover,  `max-height` is increased, revealing the hidden content.
* **`transition`:** This property creates a smooth animation for the `max-height` change, preventing a jarring jump.  `ease-in-out` provides a natural easing effect.
* **`overflow: hidden;`:** This prevents the initially hidden content from overflowing and being visible before the card expands.
* **`display: none;`**: This is used to initially hide the extra content until the card expands.  This could be replaced with a more advanced method of controlling the content, e.g. with JavaScript.


**External References:**

* [CSS Transitions](https://developer.mozilla.org/en-US/docs/Web/CSS/transition)
* [CSS Transforms](https://developer.mozilla.org/en-US/docs/Web/CSS/transform)
* [Understanding Box-Shadow](https://css-tricks.com/almanac/properties/b/box-shadow/)


Copyrights (c) OpenRockets Open-source Network. Free to use, copy, share, edit or publish.

