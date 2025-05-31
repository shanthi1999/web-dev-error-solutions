## Error Report: The-Javascript-event-delegation-issue\n\n---\n\n## 🐞 JavaScript Event Firing Twice on Single Button Click

---

### 📛 Error Description

When I click the button once, its associated event handler is executed **twice**, leading to duplicated actions like multiple alerts or form submissions.

This usually happens due to:
- Multiple event listeners being attached.
- Repeated renders attaching the same listener again.
- Using both  in HTML and  in JS.
- Not properly cleaning up old listeners.

---

### 💡 Solution

#### ✅ 1. Register the event listener only once
Avoid placing  inside repeating blocks like loops or functions that run multiple times.

#### ✅ 2. Use  (optional)
This tells JavaScript to run the handler only once.

#### ✅ 3. Remove existing listeners before re-attaching

#### ✅ 4. Avoid mixing  in HTML and  in JS.

---

### 🧪 Code Example

#### ❌ Problematic Code

html
<h2>🐞 JavaScript Event Firing Twice on Single Button Click</h2>

<h3>📛 Error Description</h3>
<p>When I click the button once, its associated event handler is executed <strong>twice</strong>, leading to duplicated actions like multiple alerts or form submissions.</p>

<ul>
  <li>Multiple event listeners being attached.</li>
  <li>Repeated renders attaching the same listener again.</li>
  <li>Using both <code>onclick</code> in HTML and <code>addEventListener</code> in JS.</li>
  <li>Not properly cleaning up old listeners.</li>
</ul>

<h3>💡 Solution</h3>
<ol>
  <li><strong>Register the event listener only once.</strong></li>
  <li>Use <code>{ once: true }</code> to automatically remove it after the first trigger.</li>
  <li>Remove existing listeners before re-attaching.</li>
  <li>Avoid mixing inline handlers and JavaScript handlers.</li>
</ol>

<h3>🧪 Code Example</h3>

<p><strong>❌ Problematic Code:</strong></p>
<pre><code>&lt;button id=submitBtn&gt;Submit&lt;/button&gt;
&lt;script&gt;
  const btn = document.getElementById('submitBtn');
  btn.addEventListener('click', () =&gt; {
    console.log('Button clicked');
  });
&lt;/script&gt;
</code></pre>

<p><strong>✅ Fixed Code:</strong></p>
<pre><code>&lt;button id=submitBtn&gt;Submit&lt;/button&gt;
&lt;script&gt;
  const btn = document.getElementById('submitBtn');
  function handleClick() {
    console.log('Button clicked');
  }
  if (!btn.hasAttribute('data-listener-attached')) {
    btn.addEventListener('click', handleClick);
    btn.setAttribute('data-listener-attached', 'true');
  }
&lt;/script&gt;
</code></pre>

<p><strong>Alternative using <code>{ once: true }</code>:</strong></p>
<pre><code>btn.addEventListener('click', handleClick, { once: true });</code></pre>

<h3>🔖 Tags</h3>
<code>#javascript</code> <code>#eventlistener</code> <code>#clickbug</code> <code>#frontend</code> <code>#webdev</code> <code>#ui</code>


---
