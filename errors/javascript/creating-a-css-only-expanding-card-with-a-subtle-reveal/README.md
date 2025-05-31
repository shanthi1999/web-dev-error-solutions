# 🐞 Creating a CSS-only Expanding Card with a Subtle Reveal


This document details the creation of an expanding card effect using only CSS.  No JavaScript is required. The effect involves a card that smoothly expands vertically when hovered over, revealing additional content. We'll utilize CSS transitions and transforms for a polished animation.

## Description of the Styling

The card starts with a collapsed height, showing only a header. On hover, the card expands to its full height, revealing the body content.  The expansion is smooth thanks to CSS transitions. We'll also add a subtle shadow effect to enhance the visual appeal. This technique is suitable for showcasing product information, articles, or any content needing a visually engaging reveal.

## Full Code

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
  overflow: hidden; /* Hide content that overflows during transition */
  transition: height 0.3s ease-in-out; /* Smooth transition for height change */
  height: 100px; /* Initial collapsed height */
}

.card:hover {
  height: 300px; /* Expanded height on hover */
}

.card-header {
  background-color: #4CAF50;
  color: white;
  padding: 15px;
  text-align: center;
}

.card-body {
  padding: 15px;
}
</style>
</head>
<body>

<div class="card">
  <div class="card-header">
    <h3>Expanding Card</h3>
  </div>
  <div class="card-body">
    <p>This is the body of the expanding card.  More content can be added here.  This demonstrates a simple yet effective way to create interactive elements using only CSS.</p>
  </div>
</div>

</body>
</html>
```

## Explanation

* **`.card`:** This class styles the main card container.  `overflow: hidden;` is crucial to prevent content from peeking out during the height transition.  `transition: height 0.3s ease-in-out;` defines the smooth transition for the height property, lasting 0.3 seconds with an ease-in-out timing function. The initial height is set to 100px.
* **`.card:hover`:** This styles the card when the mouse hovers over it.  The `height` is changed to 300px, triggering the transition defined in `.card`.
* **`.card-header` and `.card-body`:** These classes style the header and body sections of the card, providing basic layout and visual separation.


## External References

* [MDN Web Docs - CSS Transitions](https://developer.mozilla.org/en-US/docs/Web/CSS/transition) - Learn more about CSS transitions and their properties.
* [CSS-Tricks - Understanding CSS Transitions](https://css-tricks.com/almanac/properties/t/transition/) - Another excellent resource for understanding CSS transitions.


Copyrights (c) OpenRockets Open-source Network. Free to use, copy, share, edit or publish.

