# 🐞 Common React useEffect and Data Fethmching Issues

<h1>🐞 Common React useEffect & Data Fetching Issues</h1>  
<p>This document outlines the most common problems developers face with <code>useEffect</code> in React, especially when it comes to dependencies and data fetching logic.</p>  
  
<h2>Problem 1: Infinite Loops in useEffect</h2>  
<p>React re-runs <code>useEffect</code> every time a value in its dependency array changes. A common mistake is referencing a state variable inside <code>useEffect</code> and then setting it inside the same effect.</p>  
  
<pre><code>const [data, setData] = useState([]);  
  
useEffect(() => {  
  fetch('/api/data')  
    .then(res => res.json())  
    .then(setData);  
}, [data]); // 🚫 WRONG: This causes an infinite loop</code></pre>  
  
<div class=tip>  
  ✅ <strong>Fix:</strong> The fetch should not depend on the data it updates.  
</div>  
  
<pre><code>useEffect(() => {  
  fetch('/api/data')  
    .then(res => res.json())  
    .then(setData);  
}, []); // ✅ Only run once on mount</code></pre>  
  
<h2>Problem 2: Stale Closures</h2>  
<p>When passing callbacks or relying on old props/state inside async effects, you may run into stale values.</p>  
  
<pre><code>useEffect(() => {  
  const interval = setInterval(() => {  
    console.log(count); // might be stale  
  }, 1000);  
  
  return () => clearInterval(interval);  
}, []);</code></pre>  
  
<div class=tip>  
  ✅ <strong>Fix:</strong> Use a ref to store mutable values across renders.  
</div>  
  
<pre><code>const countRef = useRef(count);  
  
useEffect(() => {  
  countRef.current = count;  
}, [count]);  
  
useEffect(() => {  
  const interval = setInterval(() => {  
    console.log(countRef.current); // always current  
  }, 1000);  
  
  return () => clearInterval(interval);  
}, []);</code></pre>  
  
<h2>Problem 3: Memory Leaks on Unmounted Components</h2>  
<p>When fetching data asynchronously, a component might unmount before the fetch completes, causing state updates on unmounted components.</p>  
  
<pre><code>useEffect(() => {  
  fetch('/api/data')  
    .then(res => res.json())  
    .then(setData); // ❌ might cause a warning if unmounted  
}, []);</code></pre>  
  
<div class=tip>  
  ✅ <strong>Fix:</strong> Use an <code>AbortController</code> or a mounted flag.  
</div>  
  
<pre><code>useEffect(() => {  
  const controller = new AbortController();  
  
  fetch('/api/data', { signal: controller.signal })  
    .then(res => res.json())  
    .then(setData)  
    .catch(err => {  
      if (err.name !== 'AbortError') throw err;  
    });  
  
  return () => controller.abort();  
}, []);</code></pre>  
  
<h2>Problem 4: Forgetting Dependency Array</h2>  
<p>Forgetting the dependency array means your effect runs on every render, even if you intended it to run once.</p>  
  
<pre><code>useEffect(() => {  
  console.log('Runs every time!'); // 😩  
});</code></pre>  
  
<div class=tip>  
  ✅ <strong>Fix:</strong> Use <code>[]</code> to run only on mount.  
</div>  
  
<pre><code>useEffect(() => {  
  console.log('Runs only once on mount!');  
}, []);</code></pre>  
  
<h2>Tips & Best Practices</h2>  
<ul>  
  <li>Use <code>eslint-plugin-react-hooks</code> to automatically warn you of missing dependencies.</li>  
  <li>Split complex effects into smaller ones.</li>  
  <li>Use custom hooks to abstract repetitive effect logic.</li>  
  <li>Use <code>AbortController</code> or <code>useRef</code> when needed to avoid stale updates or memory leaks.</li>  
</ul>  
  
<hr />  
