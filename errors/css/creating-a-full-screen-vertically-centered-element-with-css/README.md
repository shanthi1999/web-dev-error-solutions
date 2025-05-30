# 🐞 Creating a Full-Screen, Vertically Centered Element with CSS


This document details a common CSS styling trick: creating a vertically centered element that takes up the entire browser viewport height, regardless of the content's size. We'll achieve this using a combination of flexbox and some basic CSS properties. This technique is applicable in both vanilla CSS and CSS frameworks like Tailwind CSS.


## Description of the Styling

The goal is to position a child element (e.g., a div containing a form or image) perfectly in the center of the screen, both horizontally and vertically, while ensuring it stretches to fill the entire screen height.  We avoid using absolute positioning and calculations which can be cumbersome and break on resizing. Instead we leverage the power of flexbox.


## Full Code (Vanilla CSS)

```html
<!DOCTYPE html>
<html>
<head>
<title>Vertically Centered Fullscreen Element</title>
<style>
body, html {
  height: 100%;
  margin: 0; /* Remove default body margins */
  display: flex; /* Enable flexbox on the body */
  justify-content: center; /* Horizontally center the child */
  align-items: center; /* Vertically center the child */
}

.container {
  width: 80%; /* Adjust width as needed */
  background-color: #f0f0f0;
  padding: 20px;
  text-align: center; /* Optional: Center text within the container */
}
</style>
</head>
<body>
  <div class="container">
    <h1>Hello, World!</h1>
    <p>This element is perfectly centered and fills the entire screen height.</p>
  </div>
</body>
</html>
```


## Full Code (Tailwind CSS)

```html
<!DOCTYPE html>
<html>
<head>
  <title>Vertically Centered Fullscreen Element (Tailwind)</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="h-screen flex justify-center items-center">
  <div class="bg-gray-200 p-4 w-1/2">  <!-- Adjust width as needed -->
    <h1 class="text-3xl font-bold">Hello, World! (Tailwind)</h1>
    <p>This element is perfectly centered and fills the entire screen height.</p>
  </div>
</body>
</html>
```


## Explanation

* **`body, html { height: 100%; margin: 0; }`:** This sets both the body and html elements to 100% height, ensuring they fill the entire viewport. Removing margins prevents unexpected spacing.
* **`display: flex;`:** This enables flexbox layout on the `body` element, allowing us to easily control the alignment of its children.
* **`justify-content: center;`:** This centers the child element horizontally within the body.
* **`align-items: center;`:** This centers the child element vertically within the body.
* **`.container` (or Tailwind's div):** This is the inner div that holds our content.  The width is set to a percentage or a Tailwind class (e.g., `w-1/2` for half the screen width).  Styling can be added here as needed.


## External References

* **CSS Flexbox Specification:** [https://www.w3.org/TR/css-flexbox-1/](https://www.w3.org/TR/css-flexbox-1/)
* **Tailwind CSS Documentation:** [https://tailwindcss.com/](https://tailwindcss.com/)


Copyrights (c) OpenRockets Open-source Network. Free to use, copy, share, edit or publish.

