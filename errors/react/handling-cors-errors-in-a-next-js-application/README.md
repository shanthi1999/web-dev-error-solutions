# 🐞 Handling CORS Errors in a Next.js Application


This document addresses a common problem encountered when developing Next.js applications that interact with external APIs: **CORS (Cross-Origin Resource Sharing) errors**.

**Description of the Error:**

A CORS error occurs when a web page (e.g., your Next.js application running on `http://localhost:3000`) makes a request to a different origin (e.g., an API server running on `https://api.example.com`).  Browsers implement the same-origin policy for security reasons, preventing requests from one origin to another unless the server explicitly allows it.  This results in an error message similar to:

```
Access to XMLHttpRequest at 'https://api.example.com/data' from origin 'http://localhost:3000' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.
```


**Step-by-Step Code Fix:**

The solution involves configuring the API server (not the Next.js frontend) to allow requests from your Next.js application's origin.  Since we don't have access to the API server's code here, we will demonstrate how to handle this assuming the API is built with Node.js and Express.js.

**1. API Server (Node.js with Express.js):**

Let's say your API server's code looks like this (without CORS handling):

```javascript
// api-server.js
const express = require('express');
const app = express();
const port = 3001;

app.get('/data', (req, res) => {
  res.json({ message: 'Hello from API!' });
});

app.listen(port, () => {
  console.log(`API server listening on port ${port}`);
});
```

**2. Adding CORS Middleware:**

We'll use the `cors` middleware package to handle CORS.  First, install it:

```bash
npm install cors
```

Then, modify your API server code:

```javascript
// api-server.js
const express = require('express');
const cors = require('cors'); // Import cors
const app = express();
const port = 3001;

// Add this line to enable CORS
app.use(cors({
    origin: 'http://localhost:3000' // Allow requests from your Next.js app
}));

app.get('/data', (req, res) => {
  res.json({ message: 'Hello from API!' });
});

app.listen(port, () => {
  console.log(`API server listening on port ${port}`);
});
```

This allows requests from `http://localhost:3000`.  For a production environment, you would replace this with your actual domain.  You can also use `origin: '*'` to allow requests from all origins (less secure, generally avoided in production).

**3. Next.js Frontend (Fetching Data):**

Here's an example of fetching data from the API in your Next.js application:

```javascript
// pages/index.js
import { useEffect, useState } from 'react';

export default function Home() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3001/data');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : <p>Loading...</p>}
    </div>
  );
}
```


**Explanation:**

The `cors` middleware in Express.js adds the necessary `Access-Control-Allow-Origin` header to the API's response, telling the browser it's safe to allow the request from the specified origin.  The Next.js code uses `fetch` to make the request to the API.  Error handling is included to manage potential issues during the fetch process.


**External References:**

* [CORS Wikipedia](https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
* [Express.js CORS Middleware](https://www.npmjs.com/package/cors)
* [Next.js Documentation](https://nextjs.org/docs)


Copyrights (c) OpenRockets Open-source Network. Free to use, copy, share, edit or publish.

