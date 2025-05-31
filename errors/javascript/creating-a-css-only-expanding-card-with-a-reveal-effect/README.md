# 🐞 Creating a CSS-only Expanding Card with a Reveal Effect


This document details the creation of an expanding card effect using only CSS.  No JavaScript is required. This effect reveals additional content within the card upon hovering or clicking.  We'll be leveraging CSS transitions and transforms to achieve a smooth and visually appealing animation.

**Description of the Styling:**

The card starts in a compact state, displaying a title and a small preview image. On hover or focus, the card expands to reveal more content, smoothly transitioning its height and opacity.  The expansion utilizes a simple height transition, while the reveal effect is created by initially hiding the additional content and then using opacity to control its visibility during the transition.

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
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  overflow: hidden; /* Hide content overflowing during transition */
  transition: height 0.3s ease-in-out; /* Smooth height transition */
  width: 300px;
}

.card:hover, .card:focus {
  height: auto; /* Expand to full content height on hover */
}

.card-header {
  background-color: #4CAF50;
  color: white;
  padding: 15px;
  text-align: center;
}

.card-content {
  padding: 15px;
  opacity: 0; /* Initially hidden */
  transition: opacity 0.3s ease-in-out; /* Smooth opacity transition */
}

.card:hover .card-content, .card:focus .card-content {
  opacity: 1; /* Reveal content on hover */
}

.card-image {
  width: 100%;
  height: auto;
  display: block; /* Prevent extra space below the image */
}
</style>
</head>
<body>

<div class="card">
  <div class="card-header">
    <h3>My Expanding Card</h3>
  </div>
  <img src="https://via.placeholder.com/300x150" alt="Card Image" class="card-image">
  <div class="card-content">
    <p>This is some extra content that is revealed when you hover over the card.  You can add as much text or other elements as you like here.</p>
    <p>This is more content to demonstrate the expansion.</p>
  </div>
</div>

</body>
</html>
```

**Explanation:**

* **`transition` property:** This is crucial for the animation.  It defines a smooth transition for both height and opacity over 0.3 seconds using an ease-in-out timing function.
* **`height: auto;`:**  This allows the card to dynamically adjust its height based on the content within. The initial height is implicitly determined by the header and image.
* **`opacity: 0;`:** This initially hides the `card-content` div, creating the reveal effect.
* **`:hover` and `:focus` pseudo-classes:** These selectors trigger the animation when the user hovers over or focuses on the card (important for accessibility).
* **`overflow: hidden;`:**  This prevents content from spilling outside the card during the transition.


**External References:**

* [CSS Transitions](https://developer.mozilla.org/en-US/docs/Web/CSS/transition)
* [CSS Transforms](https://developer.mozilla.org/en-US/docs/Web/CSS/transform)
* [CSS Pseudo-classes](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes)


Copyrights (c) OpenRockets Open-source Network. Free to use, copy, share, edit or publish.

