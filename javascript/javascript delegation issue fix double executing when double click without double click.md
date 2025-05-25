

  <h1>Fixing Double Execution of Click Event Due to Event Delegation</h1>

  <p>When a button or element executes its handler twice on a single click, it's often due to incorrect use of event delegation or multiple bindings of the same event handler.</p>
  <p>This guide explains the issue and provides a clear fix.</p>

  <hr>

  <h2>Problem</h2>

  <p>You have a button like this:</p>
  <pre><code>&lt;button id="my-button"&gt;Click Me&lt;/button&gt;</code></pre>

  <p>And a script like this:</p>
  <pre><code>document.addEventListener('click', function (e) {
  if (e.target.id === 'my-button') {
    myFunction();
  }
});

function myFunction() {
  console.log('Button clicked');
}</code></pre>

  <p>But when you click the button once, <code>myFunction()</code> runs <strong>twice</strong>.</p>

  <hr>

  <h2>Cause</h2>

  <p>Double execution typically happens due to:</p>
  <ul>
    <li><strong>Event bubbling combined with direct binding.</strong></li>
    <li><strong>Attaching multiple listeners unintentionally.</strong></li>
    <li><strong>Using event delegation incorrectly.</strong></li>
  </ul>

  <p>In the example above, if <code>myFunction()</code> is also directly bound somewhere else (e.g., <code>document.getElementById('my-button').addEventListener(...)</code>), the event handler is called multiple times.</p>

  <hr>

  <h2>Solution</h2>

  <h3>1. Ensure You Bind Events Only Once</h3>
  <p>Avoid binding both directly and via delegation.</p>

  <h3>2. Use <code>stopPropagation()</code> or <code>stopImmediatePropagation()</code> <strong>only if necessary</strong></h3>
  <p>If another listener is higher in the DOM and duplicates the logic, consider stopping propagation.</p>

  <pre><code>document.getElementById('my-button').addEventListener('click', function (e) {
  e.stopPropagation();
  myFunction();
});</code></pre>

  <p>But this is a workaround. The best solution is <strong>to organize bindings cleanly.</strong></p>

  <hr>

  <h2>Correct Event Delegation Example</h2>

  <p>Here’s a correct use of delegation that ensures a function runs only once:</p>

  <pre><code>&lt;div id="container"&gt;
  &lt;button class="btn"&gt;Click Me&lt;/button&gt;
&lt;/div&gt;</code></pre>

  <pre><code>document.getElementById('container').addEventListener('click', function (e) {
  if (e.target && e.target.matches('button.btn')) {
    myFunction();
  }
});</code></pre>

  <ul>
    <li>This avoids direct binding.</li>
    <li>Ensures only one event listener.</li>
    <li>Works with dynamically added buttons.</li>
  </ul>

  <hr>

  <h2>Bonus: Prevent Multiple Clicks</h2>

  <p>If you're worried about accidental <strong>double clicks</strong>, you can disable the button temporarily:</p>

  <pre><code>function myFunction(e) {
  const button = e.target;
  button.disabled = true;
  console.log('Button clicked');

  setTimeout(() =&gt; {
    button.disabled = false;
  }, 1000);
}

document.getElementById('container').addEventListener('click', function (e) {
  if (e.target && e.target.matches('button.btn')) {
    myFunction(e);
  }
});</code></pre>

  <hr>

  <h2>Summary</h2>

  <ul>
    <li>Don't bind multiple listeners to the same element.</li>
    <li>Use <strong>delegation OR direct binding</strong>, not both.</li>
    <li>Match the exact selector when delegating.</li>
    <li>Debug with <code>console.log()</code> to ensure no double bindings.</li>
    <li>Clean up listeners when needed using <code>removeEventListener</code>.</li>
  </ul>

  <hr>

  <p><strong>Happy debugging!</strong></p>
