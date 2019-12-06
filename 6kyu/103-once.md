### Problem:
<p>You&apos;ll implement <code>once</code>, a function that takes another function as an argument, and returns a new version of that function that can only be called once.</p>
<p>Subsequent calls to the resulting function should have no effect (and should return <code>undefined</code>).</p>
<p>For example:</p>
<pre><code>logOnce = once(console.log)
logOnce(&quot;foo&quot;) // -&gt; &quot;foo&quot;
logOnce(&quot;bar&quot;) // -&gt; no effect</code></pre>
### Solution