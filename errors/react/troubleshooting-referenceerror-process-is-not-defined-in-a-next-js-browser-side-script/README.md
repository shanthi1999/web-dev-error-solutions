# 🐞 Troubleshooting `ReferenceError: process is not defined` in a Next.js Browser-Side Script


**Description of the Error:**

The error `ReferenceError: process is not defined` commonly occurs in Next.js applications when you try to use Node.js-specific modules or functionalities within a client-side (browser) JavaScript file.  The `process` global object is a Node.js built-in object, not available in the browser environment.  This error typically arises when you inadvertently import a module that relies on `process` or directly use `process` itself in your browser-side code.

**Full Code of Fixing Step-by-Step:**

Let's assume you have a file named `utils/auth.js` with the following faulty code:

```javascript
// utils/auth.js (Incorrect - uses process)
import jwt from 'jsonwebtoken';

export const verifyToken = (token) => {
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET); // Error here!
    return decoded;
  } catch (error) {
    return null;
  }
};
```

This code attempts to use `process.env.JWT_SECRET`, which is only accessible on the server-side.  Trying to use this in a client-side component will throw the `ReferenceError`.

Here's the corrected approach:


**1. Separate Server-Side and Client-Side Logic:**

Instead of attempting to perform JWT verification in the browser, move the authentication logic to your API routes (server-side).

**2. Create an API Route:**

Create a file in your `pages/api` directory (e.g., `pages/api/verifyToken.js`):

```javascript
// pages/api/verifyToken.js
import jwt from 'jsonwebtoken';

export default function handler(req, res) {
  const { token } = req.body;

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    res.status(200).json({ user: decoded });
  } catch (error) {
    res.status(401).json({ error: 'Invalid token' });
  }
}
```

This route uses `process.env.JWT_SECRET` correctly since it runs on the server.


**3.  Client-Side Fetch:**

Now, your client-side component can fetch the verification result from this API route:

```javascript
// components/ProtectedComponent.js
import { useState, useEffect } from 'react';

const ProtectedComponent = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem('token'); // Get token from storage

      if (token) {
        const response = await fetch('/api/verifyToken', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ token }),
        });

        if (response.ok) {
          const data = await response.json();
          setUser(data.user);
        } else {
          // Handle invalid token
          console.error('Invalid token');
        }
      }
      setLoading(false);
    };

    fetchUser();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (!user) return <p>Please log in.</p>;

  return (
    <div>
      <h1>Welcome, {user.name}!</h1>
    </div>
  );
};

export default ProtectedComponent;
```

This approach keeps the sensitive JWT verification on the server, avoiding the `process is not defined` error.  Remember to set your `JWT_SECRET` in your `.env.local` file for Next.js.


**External References:**

* [Next.js API Routes Documentation](https://nextjs.org/docs/api-routes/introduction)
* [jsonwebtoken documentation](https://www.npmjs.com/package/jsonwebtoken)
* [Next.js Environment Variables](https://nextjs.org/docs/basic-features/environment-variables)


**Explanation:**

The core issue is the separation of concerns between server-side and client-side code.  Node.js's `process` object is not available in the browser.  By moving the JWT verification to an API route, which runs on the server, we solve the problem. The client-side code simply communicates with the server to handle authentication.


Copyrights (c) OpenRockets Open-source Network. Free to use, copy, share, edit or publish.

