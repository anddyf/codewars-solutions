### Problem:
<p>You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer <code>N</code>. Write a method that takes the array as an argument and returns this &quot;outlier&quot; <code>N</code>.</p>
<h2 id="examples">Examples</h2>
<pre><code class="language-py">[<span class="hljs-number">2</span>, <span class="hljs-number">4</span>, <span class="hljs-number">0</span>, <span class="hljs-number">100</span>, <span class="hljs-number">4</span>, <span class="hljs-number">11</span>, <span class="hljs-number">2602</span>, <span class="hljs-number">36</span>]
Should <span class="hljs-keyword">return</span>: <span class="hljs-number">11</span> (the only odd number)

[<span class="hljs-number">160</span>, <span class="hljs-number">3</span>, <span class="hljs-number">1719</span>, <span class="hljs-number">19</span>, <span class="hljs-number">11</span>, <span class="hljs-number">13</span>, <span class="hljs-number">-21</span>]
Should <span class="hljs-keyword">return</span>: <span class="hljs-number">160</span> (the only even number)</code></pre>

### Solution