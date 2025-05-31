# 🐞 Creating a CSS-Only Expanding Card with a Reveal Effect


This document details how to create an expanding card effect using only CSS.  No JavaScript is required. This effect reveals additional content when the card is hovered over. We'll be using CSS transitions and transforms to achieve this elegant animation.


## Description of the Styling

The styling creates a card with a hidden section. On hover, the card expands to reveal this hidden section smoothly.  The expansion utilizes CSS transitions for a polished visual effect.  We'll use a simple, clean design to focus on the core animation.


## Full Code

```html
<!DOCTYPE html>
<html>
<head>
<title>Expanding Card</title>
<style>
.card {
  width: 300px;
  height: 150px;
  background-color: #f0f0f0;
  border-radius: 5px;
  overflow: hidden; /* Hide the expanding content initially */
  transition: height 0.3s ease-in-out; /* Add a smooth transition */
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
}

.card:hover {
  height: 300px; /* Expand the card on hover */
}

.card-content {
  padding: 15px;
}

.card-content-hidden {
  height: 0; /* Initially hide the hidden content */
  overflow: hidden; /* Hide the content overflow */
  transition: height 0.3s ease-in-out; /* Add a smooth transition */
}

.card:hover .card-content-hidden {
  height: 150px; /* Show the hidden content on hover */
}
</style>
</head>
<body>

<div class="card">
  <div class="card-content">
    <h2>Card Title</h2>
    <p>This is some visible content.</p>
  </div>
  <div class="card-content-hidden">
    <p>This is the hidden content that reveals on hover.</p>
    <p>More hidden details here...</p>
  </div>
</div>

</body>
</html>
```


## Explanation

* **`.card`**: This class styles the main card container.  `overflow: hidden` is crucial to initially hide the extra content. `transition` sets up the smooth height change.
* **`.card:hover`**: This selector targets the card when the mouse hovers over it.  The `height` is increased to reveal the hidden content.
* **`.card-content-hidden`**: This class styles the initially hidden section.  `height: 0` keeps it collapsed.  `overflow: hidden` prevents content overflow while transitioning. The transition matches the main card's transition for smooth animation.
* **`.card:hover .card-content-hidden`**:  This selector targets the hidden content *only* when hovering over the card, smoothly transitioning the height to reveal it.

The combination of `overflow: hidden` and transitioning the `height` property allows for a clean and effective reveal animation.


## External References

While this technique is fundamental CSS, understanding CSS transitions is key:

* [MDN Web Docs - CSS Transitions](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions)


Copyrights (c) OpenRockets Open-source Network. Free to use, copy, share, edit or publish.

