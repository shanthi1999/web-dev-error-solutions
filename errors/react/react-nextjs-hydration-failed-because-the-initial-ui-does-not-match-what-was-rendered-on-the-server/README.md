# 🐞 React NextJS - Hydration failed because the initial UI does not match what was rendered on the server

# 🐛 Debugging: 

This is a common error in **Next.js** apps when using **react server-side rendering (SSR)**. It means the content rendered on the **server** doesn't match the content rendered on the **client** during hydration.

---

## ❓ Why This Happens

React performs a diff between the server-rendered HTML and the client-rendered HTML. If they don’t match, React throws a hydration warning or error. This usually happens when:
- You use **non-deterministic** values (like  or ) during render.
- You rely on **window**, **document**, or **localStorage** in the component that is rendered on the server.
- You fetch client-specific data (like user location, session, etc.) during SSR.
- You change **component structure or content** based on , but render something different on first load.

---

## 💥 Reproduction Example



- This component renders the **current date** and time.
- Since  is called during SSR and again on the client, they’ll likely mismatch by milliseconds.

---

## 🛠️ Solution 1: Use  to Delay Client-Only Content

Move non-deterministic code to  so it runs only on the client:



---

## 🛠️ Solution 2: Check for 

If you're accessing browser-only APIs (like , , etc.):



Or better yet, use  to safely use client-only APIs:

Width: 

---

## ✅ General Best Practices to Avoid Hydration Mismatches

- Never use , , or other non-deterministic values in the initial render.
- Use  or dynamic imports () to render **client-only** code.
- Avoid rendering based on , , or  directly in the main render body.
- Wrap SSR-unsafe code with .

---

## 🧪 Advanced Debugging Tip

Use the following to **compare server vs client** rendering:



---

## 🔚 Conclusion

Hydration errors are often due to differences in SSR vs client rendering. Always ensure:
- Content rendered is **deterministic**.
- **Browser-only APIs** are used within  or conditionally on the client.
- You avoid **changing component output** between SSR and client hydration.

By following these guidelines, you’ll build more stable and error-free Next.js apps.

[Follow us on GitHub](https://www.github.com/openrockets)
