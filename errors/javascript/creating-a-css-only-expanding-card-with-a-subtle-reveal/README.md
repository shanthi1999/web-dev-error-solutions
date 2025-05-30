# 🐞 Creating a CSS-only Expanding Card with a Subtle Reveal


This document details how to create an expanding card effect using only CSS.  No JavaScript is required. This effect involves a card that expands vertically when hovered over, revealing hidden content with a smooth transition.  We'll be using pure CSS3 for this effect.

## Description of the Styling

The card starts with a compact size displaying only a title and a small preview. On hover, it smoothly expands to reveal additional content such as a longer description and maybe an image.  The expansion animation is achieved using CSS transitions and transforms.  We’ll also style the card to give it a clean and modern look.


## Full Code

```html
<!DOCTYPE html>
<html>
<head>
<title>Expanding Card</title>
<style>
.card {
  background-color: #f2f2f2;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  overflow: hidden; /* Hide content that overflows during transition */
  transition: max-height 0.3s ease-in-out; /* Smooth transition for height change */
  max-height: 100px; /* Initial height */
}

.card:hover {
  max-height: 400px; /* Height when hovered */
}

.card-content {
  padding: 20px;
}

.card-title {
  font-size: 1.2em;
  font-weight: bold;
  margin-bottom: 10px;
}

.card-preview {
  margin-bottom: 10px;
  color: gray;
  font-style: italic;
}

.card-details {
    display: none; /* Initially hide the details */
}

.card:hover .card-details {
    display: block; /* Show details on hover */
}
</style>
</head>
<body>

<div class="card">
  <div class="card-content">
    <h2 class="card-title">Card Title</h2>
    <p class="card-preview">This is a short preview of the card content.</p>
    <div class="card-details">
        <p>This is the full content of the card, revealed on hover.  You can add more text, images, or other elements here.</p>
        <img src="placeholder.jpg" alt="Placeholder Image" width="200">
    </div>
  </div>
</div>

</body>
</html>
```

Remember to replace `"placeholder.jpg"` with the actual path to your image.


## Explanation

* **`max-height` and transition:** The `max-height` property controls the initial and expanded heights of the card. The `transition` property ensures a smooth animation when the `max-height` changes on hover.
* **`overflow: hidden;`:** This prevents content from spilling outside the card during the expansion.
* **`:hover` pseudo-class:** This selector targets the card when the mouse cursor is hovering over it.
* **`card-details`:** This class initially hides the detailed content using `display: none;`.  The `:hover` state on the card makes it `display: block;` revealing the content.


## External References

While this example is self-contained, you can learn more about CSS transitions and animations from these resources:

* **MDN Web Docs - CSS Transitions:** [https://developer.mozilla.org/en-US/docs/Web/CSS/transition](https://developer.mozilla.org/en-US/docs/Web/CSS/transition)
* **MDN Web Docs - CSS Animations:** [https://developer.mozilla.org/en-US/docs/Web/CSS/animation](https://developer.mozilla.org/en-US/docs/Web/CSS/animation)


Copyrights (c) OpenRockets Open-source Network. Free to use, copy, share, edit or publish.

