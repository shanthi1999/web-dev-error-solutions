# 🐞 Creating a CSS-only Expanding Card with a Smooth Reveal


This document details the creation of an expanding card using only CSS.  This effect creates a visually appealing and interactive element without relying on JavaScript.  We'll leverage CSS transitions and transforms to achieve a smooth and engaging animation.

**Description of the Styling:**

The card starts in a compact state, displaying only a title and a small preview image. Upon hovering, the card expands smoothly, revealing additional content (in this example, some text) below.  The expansion is accompanied by a subtle scaling effect for added visual appeal.  We use only CSS for the entire animation, making it lightweight and performant.


**Full Code:**

```html
<!DOCTYPE html>
<html>
<head>
<title>Expanding Card</title>
<style>
.card {
  width: 300px;
  height: 150px;
  border: 1px solid #ccc;
  overflow: hidden;
  transition: height 0.3s ease-in-out, transform 0.3s ease-in-out; /* Smooth transition for height and transform */
}

.card:hover {
  height: 300px; /* Increased height on hover */
  transform: scale(1.05); /* Subtle scaling effect */
}

.card-content {
  display: flex;
  flex-direction: column;
  padding: 10px;
}

.card-image {
  width: 100%;
  height: 100px;
  object-fit: cover;
}

.card-title {
  font-weight: bold;
  margin-bottom: 5px;
}

.card-text {
  display: none; /* Initially hidden */
}

.card:hover .card-text {
  display: block; /* Shown on hover */
}
</style>
</head>
<body>

<div class="card">
  <div class="card-content">
    <img src="https://via.placeholder.com/300x100" alt="Placeholder Image" class="card-image">
    <h3 class="card-title">Card Title</h3>
    <p class="card-text">This is some additional text that will be revealed when the card is hovered over.  Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
  </div>
</div>

</body>
</html>
```

**Explanation:**

* **`transition` Property:** This property is key to the animation. It defines the properties (`height`, `transform`) that will smoothly transition over `0.3s` using an `ease-in-out` timing function.  This provides a natural and pleasing animation.
* **`transform: scale(1.05)`:** This subtly scales the card up on hover, enhancing the visual feedback.
* **`overflow: hidden;`:** This prevents the content from overflowing the initial card boundaries before the expansion.
* **`display: none;` and `display: block;`:** These control the visibility of the extra text, showing it only when the card is hovered over.
* **`flex-direction: column;`:** This arranges the image and title vertically within the card.


**External References:**

* [MDN Web Docs - CSS Transitions](https://developer.mozilla.org/en-US/docs/Web/CSS/transition)
* [MDN Web Docs - CSS Transforms](https://developer.mozilla.org/en-US/docs/Web/CSS/transform)


Copyrights (c) OpenRockets Open-source Network. Free to use, copy, share, edit or publish.

