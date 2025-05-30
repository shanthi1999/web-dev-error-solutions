# 🐞 Troubleshooting `ReferenceError: process is not defined` in Next.js


## Description of the Error

The error `ReferenceError: process is not defined` commonly occurs in Next.js applications when you try to access the global `process` object in the browser environment.  The `process` object is a Node.js global, available on the server-side, but not directly accessible in the client-side (browser) JavaScript code.  This often happens when using libraries or code snippets that rely on `process.env` for accessing environment variables.

## Step-by-Step Code Fix

Let's assume you're trying to access an environment variable like `NEXT_PUBLIC_API_KEY`  which you've defined in your `.env.local` file (or similar).  The naive approach (that will cause the error) would be:

```javascript
// pages/api/hello.js (Incorrect - will throw error on client-side)
const apiKey = process.env.NEXT_PUBLIC_API_KEY;
console.log(apiKey); 
```

Here's how to fix it:

**1. Conditional Access:**

The best solution is to check if the `process` object exists before attempting to access it.  This allows the code to run both server-side and client-side without errors.

```javascript
// pages/api/hello.js (Correct)
let apiKey;
if (typeof window === 'undefined') {
  apiKey = process.env.NEXT_PUBLIC_API_KEY;
} else {
  apiKey = process.env.NEXT_PUBLIC_API_KEY; //This may still be undefined, see below
}

if (apiKey) {
  console.log(apiKey);
} else {
  console.error("API key not found. Check your .env file");
}
```

**2. Using `next/config`:**

For client-side access to environment variables, use the `next/config` module:

```javascript
// pages/index.js (Client-side access)
import { useRouter } from 'next/router'

const MyComponent = () => {
  const router = useRouter()
  const apiKey = process.env.NEXT_PUBLIC_API_KEY;  // Still undefined

  //Solution using next/config
  const { publicRuntimeConfig } = require('next/config').default();
  const apiKeyFromConfig = publicRuntimeConfig.apiKey;


  return (
      <div>
          <h1>API Key (Insecure - do not use this way for sensitive data): {apiKey}</h1>
          <h1>API Key from next/config: {apiKeyFromConfig}</h1>
      </div>
  );
};

export default MyComponent;
```

Remember to add the apiKey to `next.config.js`

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  publicRuntimeConfig: {
    apiKey: process.env.NEXT_PUBLIC_API_KEY,
  },
}

module.exports = nextConfig
```

**3. Handling undefined values:**

Always check if `apiKey` or  `apiKeyFromConfig` is defined to prevent further errors.  Using optional chaining (`?.`) or the nullish coalescing operator (`??`) can make this cleaner:

```javascript
console.log(apiKeyFromConfig ?? "API key not set"); 
```

## Explanation

The `process` object is part of Node.js's runtime environment.  Browsers don't have a direct equivalent.  By checking for `typeof window === 'undefined'`, we detect if the code is running on the server (Node.js) or the client (browser).  The `next/config` provides a safe and consistent mechanism to expose environment variables to the client side. Never expose sensitive data in this way, instead use server-side calls to APIs, using fetched data on the client-side.

## External References

* [Next.js Environment Variables](https://nextjs.org/docs/basic-features/environment-variables)
* [Next.js API Routes](https://nextjs.org/docs/api-routes/introduction)
* [Node.js `process` object](https://nodejs.org/api/process.html)


Copyrights (c) OpenRockets Open-source Network. Free to use, copy, share, edit or publish.

