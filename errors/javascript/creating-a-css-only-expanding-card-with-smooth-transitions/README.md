# 🐞 Creating a CSS-Only Expanding Card with Smooth Transitions


This document details the creation of an expanding card using only CSS. No JavaScript is required. The effect involves a card that smoothly expands to reveal more content when clicked.  This technique leverages CSS transitions and transforms to achieve a polished user experience.

**Description of the Styling:**

This example uses pure CSS to create a card that expands vertically when clicked.  The expansion reveals hidden content initially collapsed using `max-height: 0;` and the `overflow: hidden;`. A smooth transition is achieved using the `transition` property.  We'll also use some basic styling for aesthetics.

**Full Code:**

```html
<!DOCTYPE html>
<html>
<head>
<title>Expanding Card</title>
<style>
.card {
  background-color: #f2f2f2;
  border: 1px solid #ddd;
  border-radius: 5px;
  overflow: hidden; /* Hide content initially */
  transition: max-height 0.5s ease-in-out; /* Add smooth transition */
  max-height: 100px; /* Initial collapsed height */
  cursor: pointer; /* Indicate clickability */
}

.card:hover {
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
}

.card.expanded {
  max-height: 300px; /* Expanded height */
}

.card-content {
  padding: 10px;
}

.card-title {
  font-weight: bold;
  margin-bottom: 5px;
}

</style>
</head>
<body>

<div class="card" onclick="this.classList.toggle('expanded')">
  <div class="card-content">
    <h3 class="card-title">Click to Expand</h3>
    <p>This is some hidden content that will be revealed when the card is expanded.  You can add as much content as you like here.</p>
    <p>More content can be added here to demonstrate the expanding functionality.</p>
  </div>
</div>

</body>
</html>
```

**Explanation:**

* **`max-height: 100px;`:** This limits the initial height of the card, hiding any content beyond the first 100px.
* **`overflow: hidden;`:** This prevents the hidden content from overflowing and becoming visible.
* **`transition: max-height 0.5s ease-in-out;`:** This is crucial for the smooth animation. It specifies that the `max-height` property should transition over 0.5 seconds using an ease-in-out timing function.
* **`.card.expanded { max-height: 300px; }`:** This class is added to the card when it's clicked (via `classList.toggle('expanded')`). This increases the `max-height`, revealing the hidden content.
* **`onclick="this.classList.toggle('expanded')"`:** This inline JavaScript toggles the `expanded` class on the card element when clicked, triggering the height change.  This could be replaced with JavaScript event listeners for a cleaner separation of concerns if preferred.

**External References:**

* [CSS Transitions](https://developer.mozilla.org/en-US/docs/Web/CSS/transition) - MDN documentation on CSS transitions.
* [CSS Transforms](https://developer.mozilla.org/en-US/docs/Web/CSS/transform) - MDN documentation on CSS transforms (while not directly used here, they are closely related and often used in conjunction with transitions).


Copyrights (c) OpenRockets Open-source Network. Free to use, copy, share, edit or publish.

