# 🐞 Creating a CSS-only Expanding Card with Smooth Animation


This document details how to create an expanding card effect using only CSS. No JavaScript is required.  This effect utilizes CSS transitions and transforms to provide a smooth, visually appealing expansion when the card is hovered over.

**Description of the Styling:**

This styling creates a simple card that, upon hovering, expands to reveal more content.  The expansion is animated smoothly using CSS transitions.  The key elements are the use of `transform: scale()` to control the size change and `transition` to smooth the animation over time.

**Full Code:**

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
  overflow: hidden; /* Hide content that overflows */
  transition: transform 0.3s ease-in-out; /* Add smooth transition */
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2); /* Add a subtle shadow */
}

.card:hover {
  transform: scale(1.1); /* Expand on hover */
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.3); /* Increase shadow on hover */
}

.card-content {
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}


.card-content h3{
  margin-top:0;
}

.card-content p{
    font-size: 0.9rem;
}
</style>
</head>
<body>

<div class="card">
  <div class="card-content">
    <h3>Card Title</h3>
    <p>This is some sample text for the card.  It expands smoothly when you hover over it.</p>
  </div>
</div>

</body>
</html>
```

**Explanation:**

* **`.card`:** This class styles the main card element.  `width` and `height` define its dimensions, `background-color` sets the background, `border-radius` rounds the corners, and `overflow: hidden` prevents content from overflowing the card's boundaries. Crucially, `transition: transform 0.3s ease-in-out;` applies a smooth transition to the `transform` property over 0.3 seconds using an ease-in-out timing function.  The `box-shadow` adds a subtle shadow effect.

* **`.card:hover`:** This styles the card when the mouse hovers over it. `transform: scale(1.1);` increases the size of the card by 10% using a scale transformation.  The `box-shadow` is also increased to enhance the hover effect.

* **`.card-content`:** This class styles the content within the card, using flexbox for centering the text.

**External References:**

* [CSS Transitions](https://developer.mozilla.org/en-US/docs/Web/CSS/transition)
* [CSS Transforms](https://developer.mozilla.org/en-US/docs/Web/CSS/transform)
* [CSS Flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout)


Copyrights (c) OpenRockets Open-source Network. Free to use, copy, share, edit or publish.

