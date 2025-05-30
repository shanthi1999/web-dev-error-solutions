# 🐞 Creating a CSS-Only Expanding Card with a Smooth Transition


This document details how to create an expanding card effect using only CSS.  No JavaScript is required! This effect utilizes CSS transitions and transforms to achieve a smooth, visually appealing animation.  This is a great example of leveraging CSS3's power for interactive elements without relying on JavaScript.


## Description of the Styling

The card starts in a compact state, displaying only a title and a small image.  On hover, the card expands vertically, revealing more content (a description in this example), while simultaneously smoothly scaling the image. The expansion is controlled by CSS transitions and the height change triggers the animation.


## Full Code

```html
<!DOCTYPE html>
<html>
<head>
<title>Expanding Card</title>
<style>
.card {
  background-color: #f2f2f2;
  border-radius: 5px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
  overflow: hidden; /* Hide content outside the card during transition */
  transition: height 0.3s ease-in-out; /* Smooth height transition */
  width: 300px;
}

.card:hover {
  height: 300px; /* Expanded height */
}

.card-image {
  width: 100%;
  height: 150px;
  object-fit: cover;
  transition: transform 0.3s ease-in-out; /* Smooth image scaling transition */
}

.card:hover .card-image {
  transform: scale(1.1); /* Scale image slightly on hover */
}

.card-content {
  padding: 10px;
  height: 0; /* Initially collapsed */
  overflow: hidden; /* Hide content initially */
  transition: height 0.3s ease-in-out; /* Smooth height transition */
}

.card:hover .card-content {
  height: 150px; /* Expanded content height */
}

.card-title {
  font-weight: bold;
  margin-bottom: 5px;
}
</style>
</head>
<body>

<div class="card">
  <img src="https://via.placeholder.com/300x150" alt="Card Image" class="card-image">
  <div class="card-content">
    <h3 class="card-title">Expanding Card</h3>
    <p>This is an example of an expanding card created with pure CSS.  No JavaScript required!</p>
  </div>
</div>

</body>
</html>
```

## Explanation

* **`transition: height 0.3s ease-in-out;`**: This line is crucial. It applies a smooth transition to the `height` property over 0.3 seconds, using an `ease-in-out` timing function for a natural feel.  This is applied to both the card and the content.
* **`height: 0; overflow: hidden;`**: Initially, the `.card-content` has a height of 0, hiding its content. `overflow: hidden` prevents content from spilling outside during the transition.
* **`.card:hover { height: 300px; }`**: On hover, the card's height increases to 300px, triggering the transition. Similarly,  `.card:hover .card-content { height: 150px; }` expands the content area.
* **`transform: scale(1.1);`**: This scales the image slightly on hover, adding a subtle visual enhancement.
* **`object-fit: cover;`**: This ensures the image covers the entire container while maintaining its aspect ratio.

The combination of these CSS rules produces a visually appealing and interactive card without the need for JavaScript.


## External References

* [MDN Web Docs on CSS Transitions](https://developer.mozilla.org/en-US/docs/Web/CSS/transition)
* [MDN Web Docs on CSS Transforms](https://developer.mozilla.org/en-US/docs/Web/CSS/transform)


Copyrights (c) OpenRockets Open-source Network. Free to use, copy, share, edit or publish.

