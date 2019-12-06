### Problem:
<p>We want to create a function that will add numbers together when called in succession.</p>
<pre><code class="language-javascript">add(<span class="hljs-number">1</span>)(<span class="hljs-number">2</span>);
<span class="hljs-comment">// returns 3</span></code></pre>
<pre style="display: none;"><code class="language-ruby">add(<span class="hljs-number">1</span>).(<span class="hljs-number">2</span>);
<span class="hljs-regexp">//</span> returns <span class="hljs-number">3</span></code></pre>
<p>We also want to be able to continue to add numbers to our chain.</p>
<pre><code class="language-javascript">add(<span class="hljs-number">1</span>)(<span class="hljs-number">2</span>)(<span class="hljs-number">3</span>); <span class="hljs-comment">// 6</span>
add(<span class="hljs-number">1</span>)(<span class="hljs-number">2</span>)(<span class="hljs-number">3</span>)(<span class="hljs-number">4</span>); <span class="hljs-comment">// 10</span>
add(<span class="hljs-number">1</span>)(<span class="hljs-number">2</span>)(<span class="hljs-number">3</span>)(<span class="hljs-number">4</span>)(<span class="hljs-number">5</span>); <span class="hljs-comment">// 15</span></code></pre>
<pre style="display: none;"><code class="language-ruby">add(<span class="hljs-number">1</span>).(<span class="hljs-number">2</span>).(<span class="hljs-number">3</span>); <span class="hljs-regexp">//</span> <span class="hljs-number">6</span>
add(<span class="hljs-number">1</span>).(<span class="hljs-number">2</span>).(<span class="hljs-number">3</span>).(<span class="hljs-number">4</span>); <span class="hljs-regexp">//</span> <span class="hljs-number">10</span>
add(<span class="hljs-number">1</span>).(<span class="hljs-number">2</span>).(<span class="hljs-number">3</span>).(<span class="hljs-number">4</span>).(<span class="hljs-number">5</span>); <span class="hljs-regexp">//</span> <span class="hljs-number">15</span></code></pre>
<p>and so on.</p>
<p>A single call should return the number passed in.</p>
<pre><code class="language-javascript">add(<span class="hljs-number">1</span>); <span class="hljs-comment">// 1</span></code></pre>
<pre style="display: none;"><code class="language-ruby">add(<span class="hljs-number">1</span>); <span class="hljs-regexp">//</span> <span class="hljs-number">1</span></code></pre>
<p>We should be able to store the returned values and reuse them.</p>
<pre><code class="language-javascript"><span class="hljs-keyword">var</span> addTwo = add(<span class="hljs-number">2</span>);
addTwo; <span class="hljs-comment">// 2</span>
addTwo + <span class="hljs-number">5</span>; <span class="hljs-comment">// 7</span>
addTwo(<span class="hljs-number">3</span>); <span class="hljs-comment">// 5</span>
addTwo(<span class="hljs-number">3</span>)(<span class="hljs-number">5</span>); <span class="hljs-comment">// 10</span></code></pre>
<pre style="display: none;"><code class="language-ruby">var addTwo = add(<span class="hljs-number">2</span>);
addTwo; <span class="hljs-regexp">//</span> <span class="hljs-number">2</span>
addTwo + <span class="hljs-number">5</span>; <span class="hljs-regexp">//</span> <span class="hljs-number">7</span>
addTwo(<span class="hljs-number">3</span>); <span class="hljs-regexp">//</span> <span class="hljs-number">5</span>
addTwo(<span class="hljs-number">3</span>).(<span class="hljs-number">5</span>); <span class="hljs-regexp">//</span> <span class="hljs-number">10</span></code></pre>
<p>We can assume any number being passed in will be valid whole number. </p>

### Solution