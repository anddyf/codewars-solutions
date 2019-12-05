### Problem:
<p>You are given an <em>odd-length</em> array of integers, in which all of them are the same, except for one single number.</p>
<p>Complete the method which accepts such an array, and returns that single different number.</p>
<p><strong>The input array will always be valid!</strong> (odd-length &gt;= 3)</p>
<h2 id="examples">Examples</h2>
<pre><code class="language-py">[1, 1, 2] ==&gt; 2
[17, 17, 3, 17, 17, 17, 17] ==&gt; 3</code></pre>
<pre style="display: none;"><code class="language-c">stray(<span class="hljs-number">3</span>, {<span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">2</span>}) == <span class="hljs-number">2</span>
stray(<span class="hljs-number">7</span>, {<span class="hljs-number">17</span>, <span class="hljs-number">17</span>, <span class="hljs-number">3</span>, <span class="hljs-number">17</span>, <span class="hljs-number">17</span>, <span class="hljs-number">17</span>, <span class="hljs-number">17</span>}) == <span class="hljs-number">3</span></code></pre>

### Solution