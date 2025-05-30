# 🐞 Troubleshooting "Module not found: Error: Can't resolve 'fs' in..." in Next.js


This document addresses a common error encountered when developing Next.js applications that utilize server-side functionality requiring Node.js's built-in `fs` module (file system).  The error typically manifests as:  `"Module not found: Error: Can't resolve 'fs' in ..."`.  This is because Next.js's client-side bundles are designed for the browser environment, which lacks direct access to the file system for security reasons.


**Description of the Error:**

The `fs` module is a core Node.js module that provides file system functionalities like reading, writing, and deleting files. Attempting to directly `import fs` or `require('fs')` within a client-side component (e.g., a `.js`, `.jsx`, `.tsx` file in the `pages` or `components` directory) in a Next.js application will result in this error.


**Step-by-Step Code Fix:**

The solution lies in moving the code that utilizes the `fs` module to a server-side function. This can be achieved using several approaches:

**1. Using `getStaticProps` or `getServerSideProps` (for data fetching at build or request time):**

This method is best for fetching data that doesn't change frequently.

```javascript
// pages/my-page.js

import { getStaticProps } from 'next';

export async function getStaticProps() {
  const fs = require('fs'); // fs is available on the server-side

  const data = fs.readFileSync('./data.json', 'utf-8');
  const parsedData = JSON.parse(data);

  return {
    props: {
      data: parsedData,
    },
  };
}

export default function MyPage({ data }) {
  return (
    <div>
      <h1>My Page</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
```

**2. Creating an API route:**

This is suitable for more dynamic operations or when you need to handle requests.

```javascript
// pages/api/data.js

import { NextApiRequest, NextApiResponse } from 'next';
const fs = require('fs');

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      const data = fs.readFileSync('./data.json', 'utf-8');
      res.status(200).json(JSON.parse(data));
    } catch (error) {
      console.error('Error reading file:', error);
      res.status(500).json({ error: 'Failed to read data' });
    }
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
```

Then fetch the data from the client side:

```javascript
// pages/my-page.js

import { useEffect, useState } from 'react';

export default function MyPage() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/api/data');
      const jsonData = await response.json();
      setData(jsonData);
    };
    fetchData();
  }, []);


  return (
    <div>
      <h1>My Page</h1>
      {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : <p>Loading...</p>}
    </div>
  );
}
```


**Explanation:**

The core issue is the difference between the client-side (browser) and server-side (Node.js) environments in Next.js.  The `fs` module is part of the Node.js runtime, unavailable in the browser. By using `getStaticProps`, `getServerSideProps`, or API routes, the code using `fs` executes on the server before the page is rendered or data is sent to the client, preventing the module not found error.


**External References:**

* [Next.js API Routes Documentation](https://nextjs.org/docs/api-routes/introduction)
* [Next.js `getStaticProps` Documentation](https://nextjs.org/docs/basic-features/data-fetching/get-static-props)
* [Next.js `getServerSideProps` Documentation](https://nextjs.org/docs/basic-features/data-fetching/get-server-side-props)
* [Node.js `fs` module Documentation](https://nodejs.org/api/fs.html)



Copyrights (c) OpenRockets Open-source Network. Free to use, copy, share, edit or publish.

