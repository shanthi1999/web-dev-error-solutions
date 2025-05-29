# 🐞 Can't perform a React state update on an unmounted component

# 🐛 Warning: Can't perform a React state update on an unmounted component

This is a common warning in **React** apps when you try to update the state of a component after it has already unmounted.

---

## ❓ Why This Happens

React warns you when your component has unmounted, but you're still trying to run  or update a value via . This often happens when:

- An asynchronous operation (like , , or ) finishes after the component unmounts.
- You don't clean up effects correctly in .

---

## 💥 Reproduction Example



If the component is unmounted before the fetch finishes, you'll get:



---

## ✅ Solution 1: Abort Fetch / Add Cleanup

Use a flag or abort controller to cancel updates:



---

## ✅ Solution 2: Use 



---

## ✅ Best Practices

- Always **clean up** side effects in .
- Use flags or  to prevent updates after unmounting.
- Avoid setting state after unmount using timers, async calls, or subscriptions.

---

## 🔚 Conclusion

> Avoiding this warning prevents memory leaks and makes your app behave more predictably.

📘 [React Docs – Effects with Cleanup](https://reactjs.org/docs/hooks-effect.html#example-using-hooks)


