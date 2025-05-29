## Error Report: Form-submits-on-enter-key-press-unexpectedly-error-fix-full-code\n\n---\n\n<h2>🐞 Form Submits on Enter Key Press Unexpectedly</h2>

<h3>📛 Error Description</h3>
<p>
  When filling a form, pressing the <strong>Enter</strong> key inside a text input field unexpectedly triggers the form submission, even if the user didn’t explicitly click the Submit button.
</p>

<h3>💡 Solution</h3>
<p>
  Prevent the form from submitting when Enter is pressed on certain input fields, especially when the user is not done filling in the entire form.
</p>
<ul>
  <li>Use <code>event.preventDefault()</code> inside a keydown listener.</li>
  <li>Check for <code>event.key === 'Enter'</code>.</li>
</ul>

<h3>🧪 Code Example</h3>

<p><strong>❌ Problematic Code:</strong></p>
<pre><code>&lt;form id=loginForm&gt;
  &lt;input type=text placeholder=Username /&gt;
  &lt;input type=password placeholder=Password /&gt;
  &lt;button type=submit&gt;Login&lt;/button&gt;
&lt;/form&gt;
</code></pre>

<p><strong>✅ Fixed Code:</strong></p>
<pre><code>&lt;form id=loginForm&gt;
  &lt;input type=text id=username placeholder=Username /&gt;
  &lt;input type=password id=password placeholder=Password /&gt;
  &lt;button type=submit&gt;Login&lt;/button&gt;
&lt;/form&gt;

&lt;script&gt;
  const form = document.getElementById('loginForm');
  form.addEventListener('keydown', function(event) {
    if (event.key === 'Enter' &amp;&amp; event.target.tagName === 'INPUT') {
      event.preventDefault(); // Stops Enter key from submitting
    }
  });
&lt;/script&gt;
</code></pre>

<h3>🔖 Tags</h3>
<code>#html</code> <code>#form</code> <code>#submit</code> <code>#preventDefault</code> <code>#frontend</code> <code>#webdev</code>
