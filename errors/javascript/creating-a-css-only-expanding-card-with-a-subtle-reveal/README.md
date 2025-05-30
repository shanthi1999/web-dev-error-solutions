# 🐞 Creating a CSS-only Expanding Card with a Subtle Reveal


This document details how to create an expanding card effect using only CSS.  The card expands on hover, revealing hidden content with a smooth transition.  This effect is achieved using CSS transitions, transforms, and the `:hover` pseudo-class. No JavaScript is required.


**Description of the Styling:**

This technique utilizes a single div element to represent the card.  The hidden content is initially positioned off-screen. On hover, the card scales up slightly, revealing the hidden content through a translation and opacity transition.  The effect is subtle and elegant, providing a clean user experience.


**Full Code:**

```html
<!DOCTYPE html>
<html>
<head>
<title>Expanding Card</title>
<style>
.card {
  width: 300px;
  background-color: #f0f0f0;
  border-radius: 8px;
  overflow: hidden; /* Hide overflowing content initially */
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out; /* Smooth transitions */
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1); /* Add a subtle shadow */
}

.card:hover {
  transform: scale(1.05); /* Scale up on hover */
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2); /* Enhanced shadow on hover */
}

.card-content {
  padding: 20px;
}

.card-title {
  font-size: 1.2em;
  font-weight: bold;
  margin-bottom: 10px;
}

.card-hidden {
  opacity: 0;
  transform: translateY(20px); /* Initially positioned off-screen */
  transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out; /* Smooth transitions */
}

.card:hover .card-hidden {
  opacity: 1;
  transform: translateY(0); /* Reveal on hover */
}
</style>
</head>
<body>

<div class="card">
  <div class="card-content">
    <h2 class="card-title">Expanding Card</h2>
    <p>This is some sample text for the card. You can add more content as needed.</p>
    <div class="card-hidden">
      <p>This content is initially hidden and will be revealed on hover.</p>
      <p>This is additional hidden content.</p>
    </div>
  </div>
</div>

</body>
</html>
```

**Explanation:**

* **`.card`:**  This class styles the main card container.  `overflow: hidden;` ensures the hidden content doesn't initially show.  The `transition` property defines smooth animations for `transform` and `box-shadow`.
* **`.card:hover`:** This styles the card when the mouse hovers over it. `transform: scale(1.05);` subtly increases the card's size. The `box-shadow` is enhanced to provide visual feedback.
* **`.card-content`:** Styles the visible content within the card.
* **`.card-hidden`:** This class styles the hidden content.  `opacity: 0;` and `transform: translateY(20px);` initially hide it. The `transition` property ensures smooth transitions for `opacity` and `transform`.
* **`.card:hover .card-hidden`:** This styles the hidden content when the mouse hovers over the card, revealing it.


**External References:**

* [CSS Transitions](https://developer.mozilla.org/en-US/docs/Web/CSS/transition)
* [CSS Transforms](https://developer.mozilla.org/en-US/docs/Web/CSS/transform)
* [CSS Pseudo-classes](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes)


Copyrights (c) OpenRockets Open-source Network. Free to use, copy, share, edit or publish.

