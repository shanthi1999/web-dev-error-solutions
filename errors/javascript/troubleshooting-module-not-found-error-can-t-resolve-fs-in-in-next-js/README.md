# 🐞 Troubleshooting "Module not found: Error: Can't resolve 'fs' in ..." in Next.js


This document addresses a common error encountered when developing Next.js applications:  "Module not found: Error: Can't resolve 'fs' in ...".  This usually happens when attempting to use Node.js modules that directly interact with the file system (like `fs`, `path`, etc.) within the client-side (browser) portion of your application.  Next.js uses server-side rendering (SSR) and the browser environment doesn't have access to the same Node.js modules available on the server.


## Description of the Error

The error "Module not found: Error: Can't resolve 'fs' in ..." arises when your Next.js application tries to import and use the `fs` module (or similar file system modules like `path`) in a component that's rendered in the browser.  The `fs` module is part of Node.js and is not available in the browser's JavaScript environment.

## Fixing the Error: Step-by-Step Code

The solution involves separating file system operations to the server-side. Here's how you can refactor your code:

**1.  Problem Code (Illustrative Example):**

```javascript
// pages/mypage.js
import fs from 'fs';

const MyPage = () => {
  const data = fs.readFileSync('./data.json'); // This will cause the error
  return (
    <div>
      {/* ... render data ... */}
    </div>
  );
};

export default MyPage;
```

**2.  Refactored Code using API Routes:**

Next.js provides API routes, which are serverless functions executed on the server. We'll move the file system operation to an API route.

```javascript
// pages/api/data.js (API Route)
import fs from 'fs';
import path from 'path';

export default async function handler(req, res) {
  const filePath = path.join(process.cwd(), 'data.json'); //Correct path
  try {
    const data = fs.readFileSync(filePath, 'utf8');
    res.status(200).json(JSON.parse(data));
  } catch (error) {
    console.error('Error reading file:', error);
    res.status(500).json({ error: 'Failed to read data' });
  }
}
```

**3.  Fetching Data in the Component:**

Now, the client-side component fetches the data from the API route.

```javascript
// pages/mypage.js
import useSWR from 'swr'; // You'll need to install 'swr' : npm install swr

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const MyPage = () => {
  const { data, error } = useSWR('/api/data', fetcher);

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  return (
    <div>
      {/* ... render data ... */}
      {JSON.stringify(data)}
    </div>
  );
};

export default MyPage;
```

## Explanation

The original code tried to use `fs.readFileSync` directly in a client-side component. This is invalid because the browser environment doesn't have access to the Node.js `fs` module. By creating an API route (`pages/api/data.js`), the file system operation is performed on the server, where `fs` is available.  The client-side component then fetches the processed data from this API route using `useSWR` or `fetch`, ensuring the correct execution environment for file system access.  `useSWR` simplifies data fetching and caching.

## External References

* **Next.js API Routes:** [https://nextjs.org/docs/api-routes/introduction](https://nextjs.org/docs/api-routes/introduction)
* **`fs` module documentation:** [https://nodejs.org/api/fs.html](https://nodejs.org/api/fs.html)
* **`swr` library:** [https://swr.vercel.app/](https://swr.vercel.app/)


Copyrights (c) OpenRockets Open-source Network. Free to use, copy, share, edit or publish.

