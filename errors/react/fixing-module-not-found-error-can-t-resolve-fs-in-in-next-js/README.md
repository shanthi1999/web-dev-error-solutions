# 🐞 Fixing "Module not found: Error: Can't resolve 'fs' in ..." in Next.js


This document describes a common error encountered when working with Next.js applications, specifically when trying to utilize Node.js modules that rely on the file system, like `fs` (filesystem), within the browser context.  Next.js's serverless functions operate in a different environment than the client-side browser, leading to this conflict.

**Description of the Error:**

The error "Module not found: Error: Can't resolve 'fs' in ..." arises when your Next.js application tries to import and use modules like `fs`, `path`, or other Node.js built-in modules that are designed for server-side environments, within a client-side component or page.  The browser environment lacks these modules, causing the error.

**Code (Illustrative Example):**

Let's say you have a function that attempts to read a file using `fs.readFileSync` within a Next.js page:

```javascript
// pages/my-page.js
import fs from 'fs';

const MyPage = () => {
  const fileContent = fs.readFileSync('./my-file.txt', 'utf-8'); // Error here!
  return <p>File content: {fileContent}</p>;
};

export default MyPage;
```

This code will throw the "Module not found" error because `fs` is not available in the browser environment.


**Fixing the Issue Step-by-Step:**

The solution involves separating server-side logic from client-side rendering. We'll use Next.js's API routes for this:


1. **Create an API Route:**  Create a file inside the `pages/api` directory (e.g., `pages/api/file-content.js`). This will handle the file reading on the server.

```javascript
// pages/api/file-content.js
import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  try {
    const filePath = path.join(process.cwd(), 'public', 'my-file.txt'); // Adjust path as needed
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    res.status(200).json({ content: fileContent });
  } catch (error) {
    console.error("Error reading file:", error);
    res.status(500).json({ error: 'Failed to read file' });
  }
}
```

2. **Fetch Data in the Page Component:** Modify your page component to fetch the file content from the API route using `fetch` or a library like `axios`.

```javascript
// pages/my-page.js
import { useState, useEffect } from 'react';

const MyPage = () => {
  const [fileContent, setFileContent] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('/api/file-content');
      const data = await res.json();
      setFileContent(data.content);
    };
    fetchData();
  }, []);

  return (
    <div>
      {fileContent ? <p>File content: {fileContent}</p> : <p>Loading...</p>}
    </div>
  );
};

export default MyPage;
```

3. **Place `my-file.txt` in the `public` directory.** This ensures the file is accessible to the server. Create a file named `my-file.txt` in the `public` directory of your Next.js project and add some content to it.


**Explanation:**

The key is to move the file reading operation (which relies on `fs`) to the server-side API route. The client-side component then makes a request to this API route to retrieve the processed data.  This cleanly separates the server-side and client-side code, resolving the "Module not found" error.  The `process.cwd()` method correctly gets the working directory of your project.


**External References:**

* [Next.js API Routes Documentation](https://nextjs.org/docs/api-routes/introduction)
* [Node.js `fs` module documentation](https://nodejs.org/api/fs.html)
* [Working with Files in Next.js](https://nextjs.org/docs/app/building-your-application/data-fetching/file-system) (Nextjs 13+)


Copyrights (c) OpenRockets Open-source Network. Free to use, copy, share, edit or publish.

