# jQuery Error Demo

This is a simple demo to show a common jQuery error and how to fix it.

---

## Problem

When you open the webpage, you might see this error in the browser console:

Uncaught ReferenceError: $ is not defined


This happens because your JavaScript tries to use jQuery **before** jQuery has loaded.

---

## Example files

### `index.html`

```html

<!DOCTYPE html>
<html>
<head>
    <title>jQuery Error Demo</title>
</head>
<body>
    <h1>Hello jQuery!</h1>
    <button id="btn">Click me</button>

    <!-- Incorrect order causes error: -->
    <!--
    <script src="script.js"></script>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    -->

    <!-- Correct order to fix error: -->
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="script.js"></script>
</body>
</html>
```

## Script.js
```js
$('#btn').click(function() {
    alert('Button clicked!');
});
```

## How to Fix
Make sure to load the jQuery library before any script that uses it.

Incorrect script order (causes error):

```html
<script src="script.js"></script>
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>

```
 # Correct script order (fixes error):

```html 
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script src="script.js"></script>

```
# How to run
Save the above index.html and script.js files in the same folder.

Open <h2>index.html</h2> in your web browser.
Click the "Click me" button.

You should see an alert message saying "Button clicked!".

## Summary
Always ensure jQuery is loaded before any code that uses it to avoid the $ is not defined error.

## Resources:
<a href="https://www.nekshavs.tech">Blog</a>

Copyrights (c) OpenRockets OpenSource. All rights reserved.
Copyrights (c) NekshaDeSilva. All rights reserved. 2025
---

## More Tips

- If you are using multiple JavaScript libraries that use `$`, consider using `jQuery.noConflict()` to avoid conflicts.
- Always check your browser console for errors if your scripts are not working as expected.
- Use a Content Delivery Network (CDN) for faster and more reliable loading of jQuery.

For more troubleshooting tips, visit the [jQuery documentation](https://api.jquery.com/).
