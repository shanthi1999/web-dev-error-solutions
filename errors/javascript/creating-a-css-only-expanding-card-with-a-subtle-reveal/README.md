# 🐞 Creating a CSS-only Expanding Card with a Subtle Reveal


This document details the creation of an expanding card using only CSS. The effect involves a subtle reveal of card content upon hover, achieved through transitions and transforms.  No JavaScript is required.  This example uses plain CSS, but the concepts are easily adaptable to frameworks like Tailwind CSS.


**Description of the Styling:**

The card initially displays a minimal title and a small preview image.  On hover, the card expands vertically, revealing more content (description and button) smoothly. The expansion is accompanied by a subtle scaling effect for added visual appeal.


**Full Code:**

```html
<!DOCTYPE html>
<html>
<head>
<title>Expanding Card</title>
<style>
.card {
  width: 300px;
  border-radius: 8px;
  background-color: #f0f0f0;
  overflow: hidden; /* Hide content that overflows */
  transition: transform 0.3s ease-in-out, height 0.3s ease-in-out; /* Smooth transitions */
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.card img {
  width: 100%;
  height: 150px;
  object-fit: cover;
}

.card-content {
  padding: 15px;
  height: 0; /* Initially collapsed */
  overflow: hidden; /* Hide overflowing content during transition */
  transition: height 0.3s ease-in-out; /* Smooth height transition */
}

.card:hover {
  transform: scale(1.02); /* Subtle scaling effect */
  cursor: pointer;
}

.card:hover .card-content {
  height: auto; /* Expand on hover */
}

.card-title {
  font-weight: bold;
  margin-bottom: 5px;
}

.card-button {
  display: block;
  margin-top: 10px;
  background-color: #4CAF50;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
</style>
</head>
<body>

<div class="card">
  <img src="https://via.placeholder.com/300x150" alt="Card Image">
  <div class="card-content">
    <h3 class="card-title">Card Title</h3>
    <p>This is a sample card description.  It expands on hover to reveal more information.</p>
    <button class="card-button">Learn More</button>
  </div>
</div>

</body>
</html>
```


**Explanation:**

* **`transition` property:** This is crucial for the smooth animation. It specifies that the `transform` (scaling) and `height` properties should transition over 0.3 seconds using an ease-in-out timing function.
* **`overflow: hidden;`:** This prevents the content from overflowing the card before it expands.
* **`height: 0;`:** Initially, the card content has zero height, making it collapsed.
* **`height: auto;`:** On hover, the height becomes automatic, allowing the content to expand to its natural height.
* **`transform: scale(1.02);`:**  Adds a subtle scaling effect on hover, enhancing the visual feedback.

**External References:**

* [CSS Transitions](https://developer.mozilla.org/en-US/docs/Web/CSS/transition) -  MDN documentation on CSS transitions.
* [CSS Transforms](https://developer.mozilla.org/en-US/docs/Web/CSS/transform) - MDN documentation on CSS transforms.


Copyrights (c) OpenRockets Open-source Network. Free to use, copy, share, edit or publish.

