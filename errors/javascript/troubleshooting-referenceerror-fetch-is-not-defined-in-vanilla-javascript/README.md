# 🐞 Troubleshooting `ReferenceError: fetch is not defined` in Vanilla JavaScript


## Description of the Error

The error `ReferenceError: fetch is not defined` in Vanilla JavaScript arises when you attempt to use the `fetch` API without proper inclusion or in an environment that doesn't support it.  The `fetch` API is a modern way to make network requests (like fetching data from an API), but it's not supported by all browsers (especially older ones).  This error indicates that the browser environment you are running the code in does not have the `fetch` API available.


## Step-by-Step Code Fix

There are two primary ways to resolve this issue:

**Method 1: Polyfilling `fetch`**

If you need to support older browsers that lack native `fetch` support, you can use a polyfill.  A polyfill provides a fallback implementation for older browsers.  The most popular and widely used polyfill is `node-fetch`.  While this is primarily for Node.js, it works well in browser environments (though you'll need to include it appropriately).

1. **Install `node-fetch`:** (You'll need a Node.js environment for this step if you are using a build process, otherwise skip to step 2a)

   ```bash
   npm install node-fetch
   ```

2. **Include the Polyfill:**

   * **a) Directly in `<script>` tags (simplest for small projects, without a bundler):**

     ```html
     <!DOCTYPE html>
     <html>
     <head>
       <title>Fetch Example</title>
       <script src="https://cdn.jsdelivr.net/npm/node-fetch/dist/node-fetch.min.js"></script> </head> <body>
       <script>
         fetch('https://api.example.com/data')
           .then(response => response.json())
           .then(data => console.log(data));
       </script>
     </body>
     </html>
     ```

   * **b) Using a module bundler (Webpack, Parcel, etc.):**  If your project uses a module bundler, import `node-fetch` within your JavaScript file:

     ```javascript
     import fetch from 'node-fetch';

     fetch('https://api.example.com/data')
       .then(response => response.json())
       .then(data => console.log(data));
     ```

**Method 2: Using a Different Method (XMLHttpRequest)**

If you prefer not to use a polyfill, you can use the older `XMLHttpRequest` object, which is widely supported:

```javascript
const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://api.example.com/data');
xhr.onload = function() {
  if (xhr.status >= 200 && xhr.status < 300) {
    console.log('Success:', JSON.parse(xhr.response));
  } else {
    console.error('Error:', xhr.status);
  }
};
xhr.onerror = function() {
  console.error('Request failed');
};
xhr.send();
```


## Explanation

The `fetch` API is a cleaner and more modern alternative to `XMLHttpRequest`. However, its support isn't universal across all browsers. Polyfilling provides a way to make your code work consistently even on older browsers.  Using `XMLHttpRequest` is a fallback that guarantees compatibility with almost any browser but comes at the cost of slightly more verbose and less intuitive code.  Choosing between the methods depends on your project requirements and the level of browser support you need.


## External References

* **MDN Web Docs - fetch API:** [https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
* **node-fetch:** [https://www.npmjs.com/package/node-fetch](https://www.npmjs.com/package/node-fetch)
* **MDN Web Docs - XMLHttpRequest:** [https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest)


Copyrights (c) OpenRockets Open-source Network. Free to use, copy, share, edit or publish.

