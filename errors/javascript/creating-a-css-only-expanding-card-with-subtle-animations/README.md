# 🐞 Creating a CSS-only Expanding Card with Subtle Animations


This document details a CSS-only solution for creating an expanding card with subtle animation effects, providing a visually appealing user experience without relying on JavaScript. We'll achieve this using pure CSS3 transitions and transforms.

**Description of the Styling:**

This technique creates a card that expands vertically when hovered over, revealing additional content. The expansion is smooth due to CSS transitions, and a subtle shadow effect enhances the visual appeal.  The styling emphasizes clean lines and a modern aesthetic.

**Full Code:**

```html
<!DOCTYPE html>
<html>
<head>
<title>Expanding Card</title>
<style>
.card {
  background-color: #f2f2f2;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  overflow: hidden; /* Hide content that overflows during transition */
  transition: max-height 0.3s ease-in-out; /* Smooth transition for max-height */
  max-height: 100px; /* Initial height */
}

.card:hover {
  max-height: 300px; /* Expanded height on hover */
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2); /* Increased shadow on hover */
}

.card-content {
  padding: 15px;
}

.card-title {
  font-weight: bold;
  margin-bottom: 10px;
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
    <h2 class="card-title">Expanding Card</h2>
    <p class="card-text">This is a CSS-only expanding card.  Hover over the card to see it expand and reveal more content.  This uses only CSS transitions and transforms for a smooth animation.</p>
  </div>
</div>

</body>
</html>
```

**Explanation:**

* **`max-height`:**  This property controls the maximum height of the card.  The initial value is set to a smaller height, and on hover, it increases, revealing the hidden content.
* **`transition`:** This property smoothly animates the change in `max-height` over 0.3 seconds using an ease-in-out timing function.
* **`box-shadow`:** The `box-shadow` property creates a subtle shadow, enhancing the card's three-dimensional appearance. The shadow is increased on hover for added emphasis.
* **`overflow: hidden`:** This prevents the content from overflowing the card before the transition is complete.
* **`.card-content`, `.card-title`, `.card-text`:** These classes are used for structural styling and semantic clarity.


**External References:**

* [CSS Transitions](https://developer.mozilla.org/en-US/docs/Web/CSS/transition) - MDN documentation on CSS transitions.
* [CSS Transforms](https://developer.mozilla.org/en-US/docs/Web/CSS/transform) - MDN documentation on CSS transforms (although not directly used here, they are relevant for more advanced card animations).
* [Box Shadow](https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow) - MDN documentation on the box-shadow property


Copyrights (c) OpenRockets Open-source Network. Free to use, copy, share, edit or publish.

