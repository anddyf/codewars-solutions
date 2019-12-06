### Problem:
<p>Create a function that differentiates a polynomial for a given value of <code>x</code>.</p>
<p>Your function will receive 2 arguments: a polynomial as a string, and a point to evaluate the equation as an integer.</p>
<h2 id="assumptions">Assumptions:</h2>
<ul>
<li>There will be a coefficient near each <code>x</code>, unless the coefficient equals <code>1</code> or <code>-1</code>.</li>
<li>There will be an exponent near each <code>x</code>, unless the exponent equals <code>0</code> or <code>1</code>.</li>
<li>All exponents will be greater or equal to zero</li>
</ul>
<h2 id="examples">Examples:</h2>
<pre style="display: none;"><code class="language-python">differenatiate(&quot;12x+2&quot;, 3)      ==&gt;   returns 12
differenatiate(&quot;x^2+3x+2&quot;, 3)   ==&gt;   returns 9</code></pre>
<pre style="display: none;"><code class="language-ruby">differenatiate(<span class="hljs-string">&quot;12x+2&quot;</span>, <span class="hljs-number">3</span>)      ==&gt;   returns <span class="hljs-number">12</span>
differenatiate(<span class="hljs-string">&quot;x^2+3x+2&quot;</span>, <span class="hljs-number">3</span>)   ==&gt;   returns <span class="hljs-number">9</span></code></pre>
<pre><code class="language-javascript">differenatiate(<span class="hljs-string">&quot;12x+2&quot;</span>, <span class="hljs-number">3</span>)      ==&gt;   returns <span class="hljs-number">12</span>
differenatiate(<span class="hljs-string">&quot;x^2+3x+2&quot;</span>, <span class="hljs-number">3</span>)   ==&gt;   returns <span class="hljs-number">9</span></code></pre>
<pre style="display: none;"><code class="language-java">Equation.differenatiate(<span class="hljs-string">&quot;12x+2&quot;</span>, <span class="hljs-number">3</span>)      ==&gt;   <span class="hljs-number">12</span>
Equation.differenatiate(<span class="hljs-string">&quot;x^2+3x+2&quot;</span>, <span class="hljs-number">3</span>)   ==&gt;   <span class="hljs-number">9</span></code></pre>

### Solution