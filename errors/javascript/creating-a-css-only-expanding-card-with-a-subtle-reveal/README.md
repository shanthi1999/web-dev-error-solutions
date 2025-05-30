# 🐞 Creating a CSS-only Expanding Card with a Subtle Reveal


This document details how to create an expanding card effect using only CSS.  The effect involves a card that, on hover, expands to reveal additional content smoothly and subtly.  We'll be using CSS transitions and transforms to achieve this.  No JavaScript is required.


## Description of the Styling

The styling creates a card with a header and a body.  The body initially hides its content. On hover, the card expands horizontally, and the body content smoothly slides into view.  The transition is made smooth using CSS transitions.  A subtle box-shadow effect is added to enhance the card's appearance.


## Full Code

```html
<!DOCTYPE html>
<html>
<head>
<title>Expanding Card</title>
<style>
.card {
  width: 300px;
  background-color: #f2f2f2;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  overflow: hidden; /* Hide content that overflows during transition */
  transition: width 0.3s ease-in-out, box-shadow 0.3s ease-in-out; /* Smooth transition */
}

.card:hover {
  width: 450px; /* Expanded width */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Increased shadow on hover */
}

.card-header {
  background-color: #4CAF50;
  color: white;
  padding: 15px;
  text-align: center;
}

.card-body {
  padding: 15px;
  transition: transform 0.3s ease-in-out; /* Smooth transition for content */
  transform: translateX(150px); /* Initially hidden */
}

.card:hover .card-body {
  transform: translateX(0); /* Reveal content on hover */
}
</style>
</head>
<body>

<div class="card">
  <div class="card-header">
    <h3>Expanding Card</h3>
  </div>
  <div class="card-body">
    <p>This is the content of the expanding card.  It's initially hidden and slides in on hover.  You can add as much content as you like here.</p>
  </div>
</div>

</body>
</html>
```


## Explanation

* **`transition` property:**  This is crucial for the smooth animation.  It specifies which properties (width, box-shadow, transform) should be transitioned, the duration (0.3s), and the easing function (`ease-in-out`).

* **`transform: translateX()`:** This property moves the card body horizontally.  The initial `translateX(150px)` hides the content, and `translateX(0)` on hover brings it into view.

* **`overflow: hidden`:** This prevents the content from peeking out before the transition is complete.

* **Box-shadow:** This adds depth and visual appeal to the card.


## External References

* [MDN Web Docs - CSS Transitions](https://developer.mozilla.org/en-US/docs/Web/CSS/transition)
* [MDN Web Docs - CSS Transforms](https://developer.mozilla.org/en-US/docs/Web/CSS/transform)


Copyrights (c) OpenRockets Open-source Network. Free to use, copy, share, edit or publish.

