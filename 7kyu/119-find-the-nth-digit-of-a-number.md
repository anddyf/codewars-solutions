### Problem:
<p>Complete the function that takes two numbers as input, <code>num</code> and <code>nth</code> and return the <code>nth</code> digit of <code>num</code> (counting from right to left).</p>
<h2 id="note">Note</h2>
<ul>
<li>If <code>num</code> is negative, ignore its sign and treat it as a positive value</li>
<li>If <code>nth</code> is not positive, return <code>-1</code></li>
<li>Keep in mind that <code>42 = 00042</code>. This means that <code>findDigit(42, 5)</code> would return <code>0</code></li>
</ul>
<h2 id="examples">Examples</h2>
<pre><code class="language-js">findDigit(<span class="hljs-number">5673</span>, <span class="hljs-number">4</span>)     returns <span class="hljs-number">5</span>
findDigit(<span class="hljs-number">129</span>, <span class="hljs-number">2</span>)      returns <span class="hljs-number">2</span>
findDigit(<span class="hljs-number">-2825</span>, <span class="hljs-number">3</span>)    returns <span class="hljs-number">8</span>
findDigit(<span class="hljs-number">-456</span>, <span class="hljs-number">4</span>)     returns <span class="hljs-number">0</span>
findDigit(<span class="hljs-number">0</span>, <span class="hljs-number">20</span>)       returns <span class="hljs-number">0</span>
findDigit(<span class="hljs-number">65</span>, <span class="hljs-number">0</span>)       returns <span class="hljs-number">-1</span>
findDigit(<span class="hljs-number">24</span>, <span class="hljs-number">-8</span>)      returns <span class="hljs-number">-1</span></code></pre>

### Solution