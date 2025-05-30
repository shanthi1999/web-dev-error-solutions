# 🐞 Creating a CSS-Only Expanding Card with a Reveal Animation


This document details how to create an expanding card effect using only CSS.  No JavaScript is required. The effect reveals hidden content within a card upon hover, using CSS transitions and transforms for a smooth animation.  This example leverages pure CSS3 techniques, making it lightweight and efficient.


## Description of the Styling

This styling creates a card with a front and back face.  The front face displays a concise summary, and the back face reveals more detailed information.  On hover, the card rotates 180 degrees, revealing the back face.  The transition is smooth and visually appealing due to the use of CSS transitions.  The effect is achieved using pseudo-elements (`::before` and `::after`) to represent the front and back faces, along with appropriate positioning and transformations.

## Full Code

```html
<!DOCTYPE html>
<html>
<head>
<title>CSS Expanding Card</title>
<style>
.card {
  width: 200px;
  height: 150px;
  perspective: 1000px; /* Necessary for 3D transforms */
  margin: 20px;
  position: relative;
  cursor: pointer; /* Indicate interactivity */
}

.card-inner {
  position: absolute;
  width: 100%;
  height: 100%;
  transition: transform 0.8s; /* Smooth transition */
  transform-style: preserve-3d; /* Preserve 3D space */
}

.card:hover .card-inner {
  transform: rotateY(180deg); /* Rotate on hover */
}

.card-face {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden; /* Hide back face initially */
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2em;
}

.card-front {
  background-color: #4CAF50;
  color: white;
}

.card-back {
  background-color: #f44336;
  color: white;
  transform: rotateY(180deg); /* Position back face behind initially */
}
</style>
</head>
<body>

<div class="card">
  <div class="card-inner">
    <div class="card-face card-front">Front</div>
    <div class="card-face card-back">Back</div>
  </div>
</div>

</body>
</html>
```

## Explanation

* **`perspective`:** This property creates a 3D perspective, making the rotation effect realistic.
* **`transform-style: preserve-3d;`:** This ensures that the child elements are rendered in 3D space.
* **`transition`:** This property smoothly animates the `transform` property over 0.8 seconds.
* **`transform: rotateY(180deg);`:** This rotates the `card-inner` element 180 degrees around the Y-axis.
* **`backface-visibility: hidden;`:** This hides the back face of the card initially.
* **Pseudo-elements (`::before`, `::after`):** Although not used in this particular example, they could be used to create more complex front and back sides of the card.


## External References

While this technique doesn't rely on any specific external libraries, understanding CSS transforms and transitions is crucial.  Here are some helpful resources:

* **MDN Web Docs - CSS Transforms:** [https://developer.mozilla.org/en-US/docs/Web/CSS/transform](https://developer.mozilla.org/en-US/docs/Web/CSS/transform)
* **MDN Web Docs - CSS Transitions:** [https://developer.mozilla.org/en-US/docs/Web/CSS/transition](https://developer.mozilla.org/en-US/docs/Web/CSS/transition)
* **CSS-Tricks (various articles on CSS animations and effects):** [https://css-tricks.com/](https://css-tricks.com/)


Copyrights (c) OpenRockets Open-source Network. Free to use, copy, share, edit or publish.

