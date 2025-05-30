# 🐞 Creating a CSS-only Expanding Card with Smooth Transitions


This document details the creation of an expanding card effect using only CSS.  This effect involves a card that smoothly expands to reveal more content when hovered over, and then smoothly collapses back to its original size when the hover is removed.  We'll utilize CSS transitions and transforms for a clean and elegant result.  This technique is widely compatible across browsers and doesn't require any JavaScript.


**Description of the Styling:**

The card starts in a collapsed state, showing only a title and a small preview. On hover, the card expands vertically, revealing additional content that was initially hidden.  The transition is smooth thanks to CSS transitions, making the expansion and collapse visually appealing.  We'll use a simple color scheme for clarity, but you can easily customize it.

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
  overflow: hidden; /* Hide content that overflows */
  transition: max-height 0.5s ease-in-out; /* Smooth transition for height change */
  max-height: 100px; /* Initial height */
}

.card:hover {
  max-height: 300px; /* Height when hovered */
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
    <h3 class="card-title">Expanding Card Example</h3>
    <p class="card-text">This is some sample text to demonstrate the expanding card effect. You can add as much content as you need, and it will smoothly expand and collapse on hover.</p>
    <p class="card-text">More content here...</p>
    <p class="card-text">Even more content!</p>
  </div>
</div>

</body>
</html>
```

**Explanation:**

* **`.card`:** This class styles the main card element. `overflow: hidden;` prevents content from overflowing the card's boundaries during the transition. `transition: max-height 0.5s ease-in-out;` defines the transition, specifying that the `max-height` property will change over 0.5 seconds using an "ease-in-out" timing function for smooth animation.  `max-height: 100px;` sets the initial height of the card.

* **`.card:hover`:** This selector targets the card when the mouse hovers over it. `max-height: 300px;` sets the expanded height of the card.

* **`.card-content`, `.card-title`, `.card-text`:** These classes style the inner content of the card for better readability and organization.


**External References:**

* [MDN Web Docs on CSS Transitions](https://developer.mozilla.org/en-US/docs/Web/CSS/transition) -  Learn more about CSS transitions and their properties.
* [CSS-Tricks on Smooth Animations](https://css-tricks.com/almanac/properties/t/transition/) -  More resources and examples of CSS transitions.


Copyrights (c) OpenRockets Open-source Network. Free to use, copy, share, edit or publish.

