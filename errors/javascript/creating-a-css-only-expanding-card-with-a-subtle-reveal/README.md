# 🐞 Creating a CSS-Only Expanding Card with a Subtle Reveal


This document details how to create an expanding card effect using only CSS.  This effect provides a visually appealing and user-friendly way to reveal more information on hover or click. We'll leverage CSS transitions and transforms for a smooth animation.


**Description of the Styling:**

This technique uses a single `div` element to represent the card.  The card initially displays a concise summary. On hover, the card expands vertically to reveal hidden content.  A subtle shadow effect enhances the visual appeal.  No JavaScript is required.

**Full Code:**

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
  overflow: hidden; /* Hide content that extends beyond the card */
  transition: max-height 0.3s ease-in-out; /* Smooth transition for expansion */
  max-height: 100px; /* Initial height */
}

.card:hover {
  max-height: 300px; /* Expanded height on hover */
}

.card-content {
  padding: 15px;
}

.card-title {
  font-weight: bold;
  margin-bottom: 5px;
}

.card-text {
  font-size: 14px;
  line-height: 1.5;
}
</style>
</head>
<body>

<div class="card">
  <div class="card-content">
    <h3 class="card-title">Card Title</h3>
    <p class="card-text">This is a short summary of the card content.</p>
    <p class="card-text" style="display: none;">This is the extra content that will be revealed on hover.  This text is initially hidden using the `display: none;` style.
    </p>
  </div>
</div>

</body>
</html>
```


**Explanation:**

* **`max-height`:**  This property initially restricts the card's height. On hover,  `max-height` is increased, revealing the hidden content.
* **`transition`:** This property creates a smooth animation for the `max-height` change, preventing a jarring jump.  `ease-in-out` provides a natural easing effect.
* **`overflow: hidden;`:** This prevents the initially hidden content from overflowing and being visible before the card expands.
* **`display: none;`**: This is used to initially hide the extra content until the card expands.  This could be replaced with a more advanced method of controlling the content, e.g. with JavaScript.


**External References:**

* [CSS Transitions](https://developer.mozilla.org/en-US/docs/Web/CSS/transition)
* [CSS Transforms](https://developer.mozilla.org/en-US/docs/Web/CSS/transform)
* [Understanding Box-Shadow](https://css-tricks.com/almanac/properties/b/box-shadow/)


Copyrights (c) OpenRockets Open-source Network. Free to use, copy, share, edit or publish.

# Expanding Card Hover Animation Not Working

---

## Error Message

```
No specific error message, but the card does not expand or reveal extra content on hover as expected.
```

---

## Context

- **Where does this error occur?**  
  In a plain HTML/CSS setup where a card component is supposed to expand and reveal more content on hover.

- **When does it typically happen?**  
  When the card is not styled properly, or CSS transitions and hover selectors are not applied correctly.

---

## Problem

The issue arises when the `.card-extra` content is not revealed on hover due to missing or incorrect styling for transitions, `max-height`, or `opacity`. This usually happens if either:

- Transitions are not smooth.
- The `max-height` is not set to a high enough value.
- The `opacity` or `overflow` rules are misconfigured.

---

## Solution(s)

### 1. Proper CSS for Expanding Card

**Steps:**
1. Wrap the content in a `.card` container.
2. Use `max-height` and `opacity` with transitions for smooth animation.
3. Add a `.card:hover` rule to expand the card and reveal extra content.

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
      overflow: hidden;
      transition: max-height 0.5s ease-in-out;
      max-height: 100px;
    }

    .card:hover {
      max-height: 300px;
    }

    .card-content {
      padding: 15px;
    }

    .card-title {
      font-weight: bold;
      margin-bottom: 5px;
    }

    .card-text {
      font-size: 14px;
      line-height: 1.5;
    }

    .card-extra {
      opacity: 0;
      max-height: 0;
      overflow: hidden;
      transition: opacity 0.5s ease, max-height 0.5s ease;
    }

    .card:hover .card-extra {
      opacity: 1;
      max-height: 200px;
    }
  </style>
</head>
<body>

<div class="card">
  <div class="card-content">
    <h3 class="card-title">Card Title</h3>
    <p class="card-text">This is a short summary of the card content.</p>
    <p class="card-text card-extra">This is the extra content that will be revealed on hover. This text is initially hidden but now animates smoothly into view.</p>
  </div>
</div>

</body>
</html>
```

---

## Example

<details>
<summary>Show Example</summary>

**index.html**
```html
<!-- See complete solution code above -->
```
</details>

---

## References

- [CSS Transitions – MDN Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/transition)
- [Stack Overflow – CSS expand card on hover](https://stackoverflow.com/questions/3937513/css-expand-div-on-hover)

---

## Version

- **Solution version:** 1.0.0
- **Last updated:** 2025-05-31
- **Contributed by:** [shanthi1999/](https://github.com/shanthi1999/)

---

## Tags

`#css` `#html` `#hover` `#animation` `#transition` `#ui`

---