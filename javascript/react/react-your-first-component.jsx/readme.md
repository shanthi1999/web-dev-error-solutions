# React: Your First Component

  [![OpenRockets](https://img.shields.io/badge/OpenRockets-Verified%20Contributor-white?labelColor=black&style=for-the-badge&logo=Rocket&logoColor=white&link=https://www.github.com/openrockets)](https://www.github.com/openrockets)


  <br>

This tutorial will guide you through creating your very first React component. No prior React experience is required!

## What is a React Component?

A React component is a reusable piece of UI (User Interface). Components let you split the UI into independent, reusable pieces.

## Step 1: Create a New JSX File

Create a file named `MyFirstComponent.jsx` in your project folder.

## Step 2: Write Your First Component

Paste the following code into `MyFirstComponent.jsx`:

````jsx
// MyFirstComponent.jsx

import React from 'react';

// This is your first React component!
function MyFirstComponent() {
  return (
    <div>
      <h1>Hello, React!</h1>
      <p>This is my first React component.</p>
    </div>
  );
}

export default MyFirstComponent;
````

## Step 3: Use Your Component

To display your component, import and use it in your main file (usually ```App.jsx``` or ````App.js````):
```jsx
// App.jsx

import React from 'react';
import MyFirstComponent from './MyFirstComponent';

function App() {
  return (
    <div>
      <MyFirstComponent />
    </div>
  );
}

export default App;
```
## Step 4: Run Your App
If you are using Create React App:

Open your terminal.
Run npm start or yarn start.
You should see "Hello, React!" on your browser.

### Congratulations!
You've created and used your first React component!
---

Here is the corresponding JSX file:

````jsx
import React from 'react';

// This is your first React component!
function MyFirstComponent() {
  return (
    <div>
      <h1>Hello, React!</h1>
      <p>This is my first React component.</p>
    </div>
  );
}

export default MyFirstComponent;
````

  [![OpenRockets](https://img.shields.io/badge/OpenRockets-Verified%20Contributor-white?labelColor=black&style=for-the-badge&logo=Rocket&logoColor=white&link=https://www.github.com/openrockets)](https://www.github.com/openrockets)
  <br>
