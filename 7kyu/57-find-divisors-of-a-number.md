### Problem:
<p>Find the number of divisors of a positive integer <code>n</code>.</p>
<p>Random tests go up to <code>n = 500000</code>.</p>
<h2 id="examples">Examples</h2>
<pre><code class="language-haskell"><span class="hljs-title">divisors</span> <span class="hljs-number">4</span>  = <span class="hljs-number">3</span> <span class="hljs-comment">-- 1, 2, 4</span>
<span class="hljs-title">divisors</span> <span class="hljs-number">5</span>  = <span class="hljs-number">2</span> <span class="hljs-comment">-- 1, 5</span>
<span class="hljs-title">divisors</span> <span class="hljs-number">12</span> = <span class="hljs-number">6</span> <span class="hljs-comment">-- 1, 2, 3, 4, 6, 12</span>
<span class="hljs-title">divisors</span> <span class="hljs-number">30</span> = <span class="hljs-number">8</span> <span class="hljs-comment">-- 1, 2, 3, 5, 6, 10, 15, 30</span></code></pre>
<pre style="display: none;"><code class="language-python">divisors(<span class="hljs-number">4</span>)  = <span class="hljs-number">3</span>  <span class="hljs-comment"># 1, 2, 4</span>
divisors(<span class="hljs-number">5</span>)  = <span class="hljs-number">2</span>  <span class="hljs-comment"># 1, 5</span>
divisors(<span class="hljs-number">12</span>) = <span class="hljs-number">6</span>  <span class="hljs-comment"># 1, 2, 3, 4, 6, 12</span>
divisors(<span class="hljs-number">30</span>) = <span class="hljs-number">8</span>  <span class="hljs-comment"># 1, 2, 3, 5, 6, 10, 15, 30</span></code></pre>
<pre style="display: none;"><code class="language-ruby">divisors(<span class="hljs-number">4</span>) -&gt; <span class="hljs-number">3</span> -- <span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">4</span>
divisors(<span class="hljs-number">5</span>) -&gt; <span class="hljs-number">2</span> -- <span class="hljs-number">1</span>, <span class="hljs-number">5</span>
divisors(<span class="hljs-number">12</span>) -&gt; <span class="hljs-number">6</span> -- <span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>, <span class="hljs-number">4</span>, <span class="hljs-number">6</span>, <span class="hljs-number">12</span>
divisors(<span class="hljs-number">30</span>) -&gt; <span class="hljs-number">8</span> -- <span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>, <span class="hljs-number">5</span>, <span class="hljs-number">6</span>, <span class="hljs-number">10</span>, <span class="hljs-number">15</span>, <span class="hljs-number">30</span></code></pre>
<pre style="display: none;"><code class="language-csharp">Kata.Divisors(<span class="hljs-number">4</span>) -&gt; <span class="hljs-number">3</span> -- <span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">4</span>
Kata.Divisors(<span class="hljs-number">5</span>) -&gt; <span class="hljs-number">2</span> -- <span class="hljs-number">1</span>, <span class="hljs-number">5</span>
Kata.Divisors(<span class="hljs-number">12</span>) -&gt; <span class="hljs-number">6</span> -- <span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>, <span class="hljs-number">4</span>, <span class="hljs-number">6</span>, <span class="hljs-number">12</span>
Kata.Divisors(<span class="hljs-number">30</span>) -&gt; <span class="hljs-number">8</span> -- <span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>, <span class="hljs-number">5</span>, <span class="hljs-number">6</span>, <span class="hljs-number">10</span>, <span class="hljs-number">15</span>, <span class="hljs-number">30</span></code></pre>

### Solution