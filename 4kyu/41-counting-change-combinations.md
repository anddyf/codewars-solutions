### Problem:
<p>Write a function that counts how many different ways you can make change for an amount of money, given an array of coin denominations. For example, there are 3 ways to give change for 4 if you have coins with denomination 1 and 2: </p>
<pre><code>1+1+1+1, 1+1+2, 2+2.</code></pre><p>The order of coins does not matter:</p>
<pre><code>1+1+2 == 2+1+1</code></pre><p>Also, assume that you have an infinite amount of coins.</p>
<p>Your function should take an amount to change and an array of unique denominations for the coins:</p>
<pre style="display: none;"><code class="language-javascript">  countChange(<span class="hljs-number">4</span>, [<span class="hljs-number">1</span>,<span class="hljs-number">2</span>]) <span class="hljs-comment">// =&gt; 3</span>
  countChange(<span class="hljs-number">10</span>, [<span class="hljs-number">5</span>,<span class="hljs-number">2</span>,<span class="hljs-number">3</span>]) <span class="hljs-comment">// =&gt; 4</span>
  countChange(<span class="hljs-number">11</span>, [<span class="hljs-number">5</span>,<span class="hljs-number">7</span>]) <span class="hljs-comment">//  =&gt; 0</span></code></pre>
<pre style="display: none;"><code class="language-python">  count_change(<span class="hljs-number">4</span>, [<span class="hljs-number">1</span>,<span class="hljs-number">2</span>]) <span class="hljs-comment"># =&gt; 3</span>
  count_change(<span class="hljs-number">10</span>, [<span class="hljs-number">5</span>,<span class="hljs-number">2</span>,<span class="hljs-number">3</span>]) <span class="hljs-comment"># =&gt; 4</span>
  count_change(<span class="hljs-number">11</span>, [<span class="hljs-number">5</span>,<span class="hljs-number">7</span>]) <span class="hljs-comment"># =&gt; 0</span></code></pre>
<pre style="display: none;"><code class="language-cpp">  count_change(<span class="hljs-number">4</span>, {<span class="hljs-number">1</span>,<span class="hljs-number">2</span>}) <span class="hljs-comment">// =&gt; 3</span>
  count_change(<span class="hljs-number">10</span>, {<span class="hljs-number">5</span>,<span class="hljs-number">2</span>,<span class="hljs-number">3</span>}) <span class="hljs-comment">// =&gt; 4</span>
  count_change(<span class="hljs-number">11</span>, {<span class="hljs-number">5</span>,<span class="hljs-number">7</span>}) <span class="hljs-comment">// =&gt; 0</span></code></pre>
<pre style="display: none;"><code class="language-haskell">  countChange <span class="hljs-number">4</span> [<span class="hljs-number">1</span>,<span class="hljs-number">2</span>] <span class="hljs-comment">-- =&gt; 3</span>
  countChange <span class="hljs-number">10</span> [<span class="hljs-number">5</span>,<span class="hljs-number">2</span>,<span class="hljs-number">3</span>] <span class="hljs-comment">-- =&gt; 4</span>
  countChange <span class="hljs-number">11</span> [<span class="hljs-number">5</span>,<span class="hljs-number">7</span>] <span class="hljs-comment">-- =&gt; 0</span></code></pre>
<pre><code class="language-coffeescript">  countChange(<span class="hljs-number">4</span>, [<span class="hljs-number">1</span>,<span class="hljs-number">2</span>]) <span class="hljs-comment"># =&gt; 3</span>
  countChange(<span class="hljs-number">10</span>, [<span class="hljs-number">5</span>,<span class="hljs-number">2</span>,<span class="hljs-number">3</span>]) <span class="hljs-comment"># =&gt; 4</span>
  countChange(<span class="hljs-number">11</span>, [<span class="hljs-number">5</span>,<span class="hljs-number">7</span>]) <span class="hljs-comment"># =&gt; 0</span></code></pre>
<pre style="display: none;"><code class="language-clojure">  (<span class="hljs-name">count-change</span> <span class="hljs-number">4</span> [<span class="hljs-number">1</span>,<span class="hljs-number">2</span>]) <span class="hljs-comment">; =&gt; 3</span>
  (<span class="hljs-name">count-change</span> <span class="hljs-number">10</span> [<span class="hljs-number">5</span>,<span class="hljs-number">2</span>,<span class="hljs-number">3</span>]) <span class="hljs-comment">; =&gt; 4</span>
  (<span class="hljs-name">count-change</span> <span class="hljs-number">11</span> [<span class="hljs-number">5</span>,<span class="hljs-number">7</span>]) <span class="hljs-comment">; =&gt; 0</span></code></pre>
<pre style="display: none;"><code class="language-csharp">  CountCombinations(<span class="hljs-number">4</span>, <span class="hljs-keyword">new</span>[] {<span class="hljs-number">1</span>,<span class="hljs-number">2</span>}) <span class="hljs-comment">// =&gt; 3</span>
  CountCombinations(<span class="hljs-number">10</span>, <span class="hljs-keyword">new</span>[] {<span class="hljs-number">5</span>,<span class="hljs-number">2</span>,<span class="hljs-number">3</span>}) <span class="hljs-comment">// =&gt; 4</span>
  CountCombinations(<span class="hljs-number">11</span>, <span class="hljs-keyword">new</span>[] {<span class="hljs-number">5</span>,<span class="hljs-number">7</span>}) <span class="hljs-comment">//  =&gt; 0</span></code></pre>

### Solution