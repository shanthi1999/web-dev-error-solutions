# 🐞 Creating a Pure CSS Expanding Card with a Smooth Reveal


This document details how to create an expanding card using only CSS.  The effect involves a card that smoothly expands to reveal more content when clicked, without relying on JavaScript. This is achieved using CSS transitions and transformations.  We'll be using plain CSS3 for this example, but the concept could be adapted to frameworks like Tailwind CSS.

**Description of the Styling:**

This styling creates a card with a small initial height. Upon clicking the card, its height expands to reveal hidden content. The expansion is smoothly animated using a CSS transition.  The card also includes subtle box-shadow effects to enhance its appearance.


**Full Code:**

```html
<!DOCTYPE html>
<html>
<head>
<title>Expanding Card</title>
<style>
.card {
  background-color: #f2f2f2;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  overflow: hidden; /* Hide content that overflows the initial height */
  transition: height 0.5s ease-in-out; /* Smooth transition for height change */
  cursor: pointer; /* Indicate it's clickable */
  width: 300px;
  height: 100px; /* Initial height */
}

.card.expanded {
  height: 300px; /* Expanded height */
}

.card-content {
  padding: 20px;
}

.card-title {
  font-weight: bold;
  margin-bottom: 10px;
}
</style>
</head>
<body>

<div class="card" onclick="this.classList.toggle('expanded')">
  <div class="card-content">
    <h2 class="card-title">Card Title</h2>
    <p>This is the card content that will be revealed when the card is expanded.</p>
    <p>More text to fill the expanded height.</p>
  </div>
</div>

</body>
</html>
```

**Explanation:**

* **`.card`:**  This class defines the base styles for the card, including background color, border radius, box shadow, and a crucial `transition` property.  The `transition` property smoothly animates the `height` property over 0.5 seconds with an ease-in-out timing function.  `overflow: hidden` is important to keep the content hidden until the card expands.
* **`.card.expanded`:** This class is applied when the card is clicked.  The `height` is increased to reveal the hidden content.  The `onclick` event in the HTML toggles this class using `classList.toggle('expanded')`.
* **`.card-content` and `.card-title`:** These classes style the content within the card.

**External References:**

* [CSS Transitions](https://developer.mozilla.org/en-US/docs/Web/CSS/transition) - MDN documentation on CSS transitions.
* [CSS Transformations](https://developer.mozilla.org/en-US/docs/Web/CSS/transform) - MDN documentation on CSS transformations (although not directly used here, it's a related concept).


This example demonstrates a simple yet effective way to create interactive elements using only CSS.  You can customize the styles, animation duration, and content to fit your specific design needs. Remember to adjust the `height` values in `.card` and `.card.expanded` to match your desired initial and expanded heights.


Copyrights (c) OpenRockets Open-source Network. Free to use, copy, share, edit or publish.

