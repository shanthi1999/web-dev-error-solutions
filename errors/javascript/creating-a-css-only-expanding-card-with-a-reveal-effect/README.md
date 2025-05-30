# 🐞 Creating a CSS-only Expanding Card with a Reveal Effect


This document details a CSS-only technique to create an expanding card with a reveal effect.  The effect showcases a hidden content area that smoothly expands when the card is hovered over. This is achieved using CSS transitions, transforms, and the `:hover` pseudo-class, avoiding the need for JavaScript.  This example utilizes plain CSS3; no frameworks like Tailwind are necessary.


**Description of the Styling:**

The styling creates a card with a visible front and a hidden back. On hover, the card rotates along the Y-axis, revealing the hidden back content.  The transition ensures a smooth animation. The specific dimensions and colors are easily customizable.


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
  perspective: 1000px; /* Enables 3D transforms */
  transform-style: preserve-3d; /* Preserves 3D space for children */
}

.card-front, .card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden; /* Hides the back when not visible */
  transition: transform 0.5s ease-in-out; /* Smooth transition */
}

.card-front {
  background-color: #4CAF50;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
}

.card-back {
  background-color: #f44336;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  transform: rotateY(180deg); /* Initially rotated to the back */
}

.card:hover .card-front {
  transform: rotateY(-180deg); /* Rotate on hover to reveal the back */
}

.card:hover .card-back {
  transform: rotateY(0deg); /* Rotate on hover to be visible */
}
</style>
</head>
<body>

<div class="card">
  <div class="card-front">Front</div>
  <div class="card-back">Back</div>
</div>

</body>
</html>
```

**Explanation:**

* **`perspective` and `transform-style`:** These properties are crucial for enabling the 3D rotation. `perspective` sets the distance from the viewer to the card, creating the depth effect, while `transform-style: preserve-3d` ensures that child elements maintain their 3D positions.
* **`backface-visibility: hidden`:** This hides the back of the card initially.  Without it, both sides would be visible.
* **`transition`:** This property smoothly animates the `transform` property over 0.5 seconds, creating a fluid rotation.
* **`:hover` pseudo-class:** This targets the card when the mouse hovers over it, triggering the transformation.
* **`transform: rotateY()`:** This rotates the elements along the Y-axis.  Negative values rotate in one direction, positive in the other.



**External References:**

* [MDN Web Docs - CSS Transforms](https://developer.mozilla.org/en-US/docs/Web/CSS/transform)
* [MDN Web Docs - CSS Transitions](https://developer.mozilla.org/en-US/docs/Web/CSS/transition)
* [CSS-Tricks - Understanding CSS Transforms](https://css-tricks.com/almanac/properties/t/transform/)


Copyrights (c) OpenRockets Open-source Network. Free to use, copy, share, edit or publish.

