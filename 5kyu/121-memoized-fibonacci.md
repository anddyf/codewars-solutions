### Problem:
<h3 id="problem-context">Problem Context</h3>
<p>The <a href="http://en.wikipedia.org/wiki/Fibonacci_number" target="_blank">Fibonacci</a> sequence is traditionally used to explain tree recursion.  </p>
<pre><code class="language-javascript"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">fibonacci</span>(<span class="hljs-params">n</span>) </span>{
    <span class="hljs-keyword">if</span>(n==<span class="hljs-number">0</span> || n == <span class="hljs-number">1</span>)
        <span class="hljs-keyword">return</span> n;
    <span class="hljs-keyword">return</span> fibonacci(n<span class="hljs-number">-1</span>) + fibonacci(n<span class="hljs-number">-2</span>);
}</code></pre>
<pre style="display: none;"><code class="language-ruby"><span class="hljs-function"><span class="hljs-keyword">def</span> <span class="hljs-title">fibonacci</span><span class="hljs-params">(n)</span></span>
  <span class="hljs-keyword">return</span> n <span class="hljs-keyword">if</span> (<span class="hljs-number">0</span>..<span class="hljs-number">1</span>).<span class="hljs-keyword">include</span>? n
  fibonacci(n - <span class="hljs-number">1</span>) + fibonacci(n - <span class="hljs-number">2</span>)
<span class="hljs-keyword">end</span></code></pre>
<pre style="display: none;"><code class="language-python"><span class="hljs-function"><span class="hljs-keyword">def</span> <span class="hljs-title">fibonacci</span><span class="hljs-params">(n)</span>:</span>
    <span class="hljs-keyword">if</span> n <span class="hljs-keyword">in</span> [<span class="hljs-number">0</span>, <span class="hljs-number">1</span>]:
        <span class="hljs-keyword">return</span> n
    <span class="hljs-keyword">return</span> fibonacci(n - <span class="hljs-number">1</span>) + fibonacci(n - <span class="hljs-number">2</span>)</code></pre>
<pre style="display: none;"><code class="language-haskell"><span class="hljs-title">fibonacci</span> <span class="hljs-number">0</span> = <span class="hljs-number">0</span>
<span class="hljs-title">fibonacci</span> <span class="hljs-number">1</span> = <span class="hljs-number">1</span>
<span class="hljs-title">fibonacci</span> n = fibonacci (n<span class="hljs-number">-1</span>) + fibonacci (n<span class="hljs-number">-2</span>)</code></pre>
<pre style="display: none;"><code class="language-scala"><span class="hljs-function"><span class="hljs-keyword">def</span> <span class="hljs-title">fibonacci</span></span>(n: <span class="hljs-type">Int</span>): <span class="hljs-type">Int</span> = n <span class="hljs-keyword">match</span> {
   <span class="hljs-keyword">case</span> <span class="hljs-number">0</span> | <span class="hljs-number">1</span> =&gt; n
   <span class="hljs-keyword">case</span> _ =&gt; fibonacci(n - <span class="hljs-number">1</span>) + fibonacci(n - <span class="hljs-number">2</span>)
}</code></pre>
<p>This algorithm serves welll its educative purpose but it&apos;s <a href="http://mitpress.mit.edu/sicp/full-text/book/book-Z-H-11.html#%_sec_1.2.2" target="_blank">tremendously inefficient</a>, not only because of recursion, but because we invoke the fibonacci function twice, and the right branch of recursion (i.e. <code>fibonacci(n-2)</code>) recalculates all the Fibonacci numbers already calculated by the left branch (i.e. <code>fibonacci(n-1)</code>).</p>
<p>This algorithm is so inefficient that the time to calculate any Fibonacci number over 50 is simply too much. You may go for a cup of coffee or go take a nap while you wait for the answer. But if you try it here in Code Wars you will most likely get a code timeout before any answers.</p>
<p>For this particular Kata we want to <strong>implement the memoization solution</strong>. This will be cool because it will let us <em>keep using the tree recursion</em> algorithm while still keeping it sufficiently optimized to get an answer very rapidly.</p>
<p>The trick of the memoized version is that we will keep a cache data structure (most likely an associative array) where we will store the Fibonacci numbers as we calculate them. When a Fibonacci number is calculated, we first look it up in the cache, if it&apos;s not there, we calculate it and put it in the cache, otherwise we returned the cached number.</p>
<p>Refactor the function into a recursive Fibonacci function that using  a memoized data structure avoids the deficiencies of tree recursion Can you make it so the memoization cache is private to this function? </p>

### Solution