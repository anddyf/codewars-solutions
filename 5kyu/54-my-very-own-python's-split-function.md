### Problem:
<p>Quite recently it happened to me to join some recruitment interview, where my first task was to write own implementation of built-in split function. It&apos;s quite simple, is it not?</p>
<p>However, there were the following conditions:</p>
<ul>
<li>the function <strong>cannot</strong> use, in any way, the original <code>split</code> or <code>rsplit</code> functions,</li>
<li>the new function <strong>must</strong> be a generator,</li>
<li>it should behave as the built-in <code>split</code>, so it will be tested that way -- think of <code>split()</code> and <code>split(&apos;&apos;)</code></li>
</ul>
<p><em>This Kata will control if the new function is a generator and if it&apos;s not using the built-in split method, so you may try to hack it, but let me know if with success, or if something would go wrong!</em></p>
<p>Enjoy!</p>

### Solution