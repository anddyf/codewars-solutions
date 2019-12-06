### Problem:
<p>Create a simple calculator that given a string of operators (), +, -, *, / and numbers separated by spaces returns the value of that expression</p>
<p>Example:</p>
<pre style="display: none;"><code class="language-python">Calculator().evaluate(<span class="hljs-string">&quot;2 / 2 + 3 * 4 - 6&quot;</span>) <span class="hljs-comment"># =&gt; 7</span></code></pre>
<pre><code class="language-ruby">Calculator.new.evaluate(<span class="hljs-string">&quot;2 / 2 + 3 * 4 - 6&quot;</span>) <span class="hljs-comment"># =&gt; 7</span></code></pre>
<pre style="display: none;"><code class="language-java">Calculator.evaluate(<span class="hljs-string">&quot;2 / 2 + 3 * 4 - 6&quot;</span>) <span class="hljs-comment">// =&gt; 7</span></code></pre>
<pre style="display: none;"><code class="language-haskell"><span class="hljs-type">Calculator</span>.evaluate <span class="hljs-string">&quot;2 / 2 + 3 * 4 - 6&quot;</span> // =&gt; <span class="hljs-number">7.0</span></code></pre>
<p>Remember about the order of operations! Multiplications and divisions have a higher priority and should be performed left-to-right. Additions and subtractions have a lower priority and should also be performed left-to-right.</p>

### Solution