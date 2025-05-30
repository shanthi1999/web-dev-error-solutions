# 🐞 Handling CORS Errors in a Next.js API Route


**Description of the Error:**

Cross-Origin Resource Sharing (CORS) errors occur when a web application (typically running on a different domain than the API it's trying to access) makes a request to an API that doesn't have the necessary CORS headers configured.  This typically manifests as a `CORS policy` error in your browser's developer console.  In Next.js, this is common when you have a frontend (e.g., a Next.js application) making requests to an API route within the same Next.js application. Even though both reside in the same project, the browser still treats them as different origins during development.

**Code (Step-by-Step Fix):**

Let's assume you have a Next.js API route (`pages/api/hello.js`) and a frontend component that fetches data from it.

**1. The Problematic API Route (`pages/api/hello.js`):**

```javascript
// pages/api/hello.js
export default function handler(req, res) {
  res.status(200).json({ text: 'Hello from API route!' });
}
```

This route, as it stands, lacks the necessary CORS headers.

**2. Adding CORS Headers to the API Route:**

```javascript
// pages/api/hello.js
export default function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*'); // Allow requests from any origin during development
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS'); // Allow GET, POST, and preflight OPTIONS requests
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization'); // Allow specific headers
  res.status(200).json({ text: 'Hello from API route!' });
}
```

We've added three crucial headers:

* `Access-Control-Allow-Origin`: This header specifies which origins are allowed to access the API.  `*` allows all origins, but **for production, you should replace this with the specific origin of your frontend application** to enhance security.
* `Access-Control-Allow-Methods`: This specifies the HTTP methods allowed (GET, POST, etc.).
* `Access-Control-Allow-Headers`: This specifies which headers are allowed in requests.


**3. The Frontend Component (example using `fetch`):**

```javascript
// pages/index.js
import { useEffect, useState } from 'react';

export default function Home() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('/api/hello');
      const json = await res.json();
      setData(json);
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

This component fetches data from `/api/hello` and displays it.

**Explanation:**

By adding the CORS headers to the API route, we explicitly tell the browser which domains are permitted to make requests to our API.  The `Access-Control-Allow-Origin: '*'` is a wildcard allowing requests from any domain which is convenient for development. In a production environment, you must replace `'*'` with your frontend's domain for security reasons.  The other headers handle preflight requests (OPTIONS requests) and specify allowed methods and headers, preventing further CORS issues.

**External References:**

* [Next.js API Routes](https://nextjs.org/docs/api-routes/introduction)
* [MDN Web Docs: CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)


**Copyright (c) OpenRockets Open-source Network. Free to use, copy, share, edit or publish.**

