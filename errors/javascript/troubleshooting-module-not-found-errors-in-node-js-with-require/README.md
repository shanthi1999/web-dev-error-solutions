# 🐞 Troubleshooting "Module Not Found" Errors in Node.js with `require()`


## Description of the Error

The dreaded "Module Not Found" error in Node.js is a common issue that arises when your code attempts to use a module that Node.js cannot locate. This typically happens when the module isn't installed, the path to the module is incorrect, or there's a problem with your project's structure.  The error message usually looks something like this:

```
Error: Cannot find module 'my-module'
Require stack:
- /path/to/your/file.js
```

This error means that your `require('my-module')` statement cannot find the `my-module` file or package.

## Step-by-Step Code Fix

Let's assume we're trying to use a hypothetical module called `my-module`, which we'll simulate for demonstration purposes.

**Scenario 1: Module Not Installed**

This is the most frequent cause.  If `my-module` is an npm package, you need to install it first:

1. **Open your terminal** and navigate to your project's root directory.
2. **Install the package:**  Use `npm install my-module` (or `yarn add my-module`).

**Scenario 2: Incorrect Path or File Name**

If `my-module` is a local file (not an npm package), ensure the path in your `require()` statement is correct.  Let's say `my-module.js` is in a `utils` directory within your project.

**Incorrect:**

```javascript
const myModule = require('my-module'); // Incorrect path
```

**Correct:**

```javascript
const myModule = require('./utils/my-module'); // Correct relative path
```

**Scenario 3: Incorrect `package.json` (for local modules)**

If you have a local module, it needs to be declared in the `package.json` file within your project, so Node.js knows how to resolve it.

Let's say `my-module.js` is in the root folder and exports a function.

1. **Create `my-module.js`:**

```javascript
// my-module.js
exports.myFunction = () => {
  console.log("My module works!");
};
```

2. **Update your `package.json`:**  Add a `main` property pointing to your module's entry point.  If `my-module.js` is your main entry point, it can look like this:

```json
{
  "name": "my-project",
  "version": "1.0.0",
  "main": "my-module.js", // This line is crucial
  "dependencies": {},
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  }
}
```

3. **Require the module:**

```javascript
const myModule = require('./my-module');
myModule.myFunction();
```


## Explanation

Node.js uses a module resolution algorithm to find the required modules.  It searches in several places, including:

* **node_modules:** This directory, present in most Node.js projects, contains all installed npm packages.
* **Relative paths:** Paths starting with `./` or `../` search relative to the current file.
* **Built-in modules:** Node.js has some built-in modules (like `fs`, `http`, `path`).

If none of these locations contain the module, the "Module Not Found" error occurs.

## External References

* [Node.js Module System Documentation](https://nodejs.org/api/modules.html)
* [npm documentation](https://docs.npmjs.com/)
* [Yarn documentation](https://yarnpkg.com/getting-started/install)


## Copyright (c) OpenRockets Open-source Network. Free to use, copy, share, edit or publish.

