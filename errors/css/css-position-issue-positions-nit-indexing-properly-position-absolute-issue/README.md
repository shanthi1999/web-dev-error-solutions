# 🐞 CSS position issue positions nit indexing properly position absolute issue

<h2>🐞 CSS <code>position: absolute</code> Not Working</h2>

<h3>📛 Error Description</h3>
<p>
  I'm trying to absolutely position an element inside a container, but it’s not showing up in the expected location.
  I used <code>position: absolute</code> on the child element, but it seems to ignore the parent and positions itself
  weirdly on the page.
</p>

<hr />

<h3>📄 CSS Snippet</h3>
<pre><code>
.container {
  position: relative;
  width: 300px;
  height: 200px;
  background-color: lightgray;
}

.child {
  position: absolute;
  top: 0;
  right: 0;
  width: 100px;
  height: 50px;
  background-color: red;
}
</code></pre>

<pre><code>
&lt;div class=container&gt;
  &lt;div class=child&gt;I'm supposed to be top-right&lt;/div&gt;
&lt;/div&gt;
</code></pre>

<hr />

<h3>💡 Solution</h3>
<p>
  Make sure the <strong>parent container</strong> has <code>position: relative</code>. If the parent is not explicitly
  positioned (<code>relative</code>, <code>absolute</code>, <code>fixed</code>, or <code>sticky</code>), then the
  absolutely positioned child will default to the <em>nearest positioned ancestor</em>, which could be the body or even
  the window.
</p>

<hr />

<h3>🧪 Code Example</h3>
<p>
  Try inspecting the container in dev tools and ensure it really has <code>position: relative</code>. Also verify that no
  other CSS rules are interfering (like margins or z-index). The corrected minimal working example is above.
</p>

<hr />

<h3>🔖 Tags</h3>
<code>#css</code> <code>#position</code> <code>#absolute</code> <code>#layout</code>
