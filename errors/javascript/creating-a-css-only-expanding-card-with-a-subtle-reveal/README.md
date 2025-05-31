# 🐞 Creating a CSS-only Expanding Card with a Subtle Reveal


This document details the creation of an expanding card effect using only CSS.  The effect involves a card that smoothly expands vertically when hovered over, revealing hidden content. We'll use CSS transitions and transforms to achieve a clean and engaging user experience.  No JavaScript is required.

**Description of the Styling:**

The styling utilizes a single `<div>` element with nested content.  The primary effect is achieved through CSS transitions on `max-height` and `transform` properties.  On hover, the card smoothly increases in height to reveal the initially hidden content, accompanied by a slight scaling effect for added visual appeal.

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
  overflow: hidden; /* Hide content that extends beyond max-height */
  transition: max-height 0.3s ease-in-out, transform 0.3s ease-in-out; /* Smooth transitions */
  max-height: 100px; /* Initially hides the content */
}

.card:hover {
  max-height: 300px; /* Expands on hover */
  transform: scale(1.02); /* Subtle scaling effect */
}

.card-content {
  padding: 15px;
}

.card-title {
  font-weight: bold;
  margin-bottom: 10px;
}
</style>
</head>
<body>

<div class="card">
  <div class="card-content">
    <h2 class="card-title">Expanding Card Example</h2>
    <p>This is some example content that is initially hidden.  The card expands on hover to reveal this additional information.  You can customize the height and content as needed.</p>
    <p>Add more content here to make the expansion effect more noticeable.</p>
  </div>
</div>

</body>
</html>
```


**Explanation:**

* **`.card`**: This class styles the main card element.  `overflow: hidden;` prevents content from overflowing the initial `max-height`.  The `transition` property defines the smooth animation for `max-height` and `transform`.
* **`.card:hover`**: This targets the card when the mouse hovers over it.  `max-height` is increased to reveal the hidden content.  `transform: scale(1.02);` adds a subtle scaling effect, making the expansion more visually appealing.
* **`.card-content` and `.card-title`**: These classes style the inner content of the card for better readability and structure.


**External References:**

* [CSS Transitions](https://developer.mozilla.org/en-US/docs/Web/CSS/transition) - MDN documentation on CSS transitions.
* [CSS Transforms](https://developer.mozilla.org/en-US/docs/Web/CSS/transform) - MDN documentation on CSS transforms.


Copyrights (c) OpenRockets Open-source Network. Free to use, copy, share, edit or publish.

