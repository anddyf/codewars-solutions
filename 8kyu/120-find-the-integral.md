### Problem:
<p>Create a function that finds the <a href="https://en.wikipedia.org/wiki/Integral" target="_blank">integral</a> of the expression passed.</p>
<p>In order to find the integral all you need to do is add one to the <code>exponent</code> (the second argument), and divide the <code>coefficient</code> (the first argument) by that new number.</p>
<p>For example for <code>3x^2</code>, the integral would be <code>1x^3</code>: we added 1 to the exponent, and divided the coefficient by that new number).</p>
<p>Notes:</p>
<ul>
<li>The output should be a string.</li>
<li>The coefficient and exponent is always a positive integer.</li>
</ul>
<h2 id="examples">Examples</h2>
<pre><code> 3, 2  --&gt;  &quot;1x^3&quot;
12, 5  --&gt;  &quot;2x^6&quot;
20, 1  --&gt;  &quot;10x^2&quot;
40, 3  --&gt;  &quot;10x^4&quot;
90, 2  --&gt;  &quot;30x^3&quot;</code></pre>
### Solution