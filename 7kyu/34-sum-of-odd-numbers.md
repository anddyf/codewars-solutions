### Problem:
<p>Given the triangle of consecutive odd numbers:</p>
<pre><code>             1
          3     5
       7     9    11
   13    15    17    19
21    23    25    27    29
...</code></pre><p>Calculate the row sums of this triangle from the row index (starting at index 1) e.g.:</p>
<pre><code class="language-javascript">rowSumOddNumbers(<span class="hljs-number">1</span>); <span class="hljs-comment">// 1</span>
rowSumOddNumbers(<span class="hljs-number">2</span>); <span class="hljs-comment">// 3 + 5 = 8</span></code></pre>
<pre style="display: none;"><code class="language-dart">rowSumOddNumbers(<span class="hljs-number">1</span>); <span class="hljs-comment">// 1</span>
rowSumOddNumbers(<span class="hljs-number">2</span>); <span class="hljs-comment">// 3 + 5 = 8</span></code></pre>
<pre style="display: none;"><code class="language-lua">rowSumOddNumbers(<span class="hljs-number">1</span>); <span class="hljs-comment">-- 1</span>
rowSumOddNumbers(<span class="hljs-number">2</span>); <span class="hljs-comment">-- 3 + 5 = 8</span></code></pre>
<pre style="display: none;"><code class="language-php">rowSumOddNumbers(<span class="hljs-number">1</span>); <span class="hljs-comment">// 1</span>
rowSumOddNumbers(<span class="hljs-number">2</span>); <span class="hljs-comment">// 3 + 5 = 8</span></code></pre>
<pre style="display: none;"><code class="language-reason">row<span class="hljs-constructor">SumOddNumbers(1)</span>; <span class="hljs-comment">/* 1 */</span>
row<span class="hljs-constructor">SumOddNumbers(2)</span>; <span class="hljs-comment">/* 3 + 5 = 8 */</span></code></pre>
<pre style="display: none;"><code class="language-coffeescript">rowSumOddNumbers(<span class="hljs-number">1</span>) <span class="hljs-comment"># 1</span>
rowSumOddNumbers(<span class="hljs-number">2</span>) <span class="hljs-comment"># 3 + 5 = 8</span></code></pre>
<pre style="display: none;"><code class="language-typescript">rowSumOddNumbers(<span class="hljs-number">1</span>); <span class="hljs-comment">// 1</span>
rowSumOddNumbers(<span class="hljs-number">2</span>); <span class="hljs-comment">// 3 + 5 = 8</span></code></pre>
<pre style="display: none;"><code class="language-ruby">row_sum_odd_numbers(<span class="hljs-number">1</span>); <span class="hljs-comment"># 1</span>
row_sum_odd_numbers(<span class="hljs-number">2</span>); <span class="hljs-comment"># 3 + 5 = 8</span></code></pre>
<pre style="display: none;"><code class="language-rust">row_sum_odd_numbers(<span class="hljs-number">1</span>); # <span class="hljs-number">1</span>
row_sum_odd_numbers(<span class="hljs-number">2</span>); # <span class="hljs-number">3</span> + <span class="hljs-number">5</span> = <span class="hljs-number">8</span></code></pre>
<pre style="display: none;"><code class="language-python">row_sum_odd_numbers(<span class="hljs-number">1</span>); <span class="hljs-comment"># 1</span>
row_sum_odd_numbers(<span class="hljs-number">2</span>); <span class="hljs-comment"># 3 + 5 = 8</span></code></pre>
<pre style="display: none;"><code class="language-java">rowSumOddNumbers(<span class="hljs-number">1</span>); <span class="hljs-comment">// 1</span>
rowSumOddNumbers(<span class="hljs-number">2</span>); <span class="hljs-comment">// 3 + 5 = 8</span></code></pre>
<pre style="display: none;"><code class="language-csharp">rowSumOddNumbers(<span class="hljs-number">1</span>); <span class="hljs-comment">// 1</span>
rowSumOddNumbers(<span class="hljs-number">2</span>); <span class="hljs-comment">// 3 + 5 = 8</span></code></pre>
<pre style="display: none;"><code class="language-fsharp">rowSumOddNumbers <span class="hljs-number">1</span> <span class="hljs-comment">// 1</span>
rowSumOddNumbers <span class="hljs-number">2</span> <span class="hljs-comment">// 3 + 5 = 8</span></code></pre>
<pre style="display: none;"><code class="language-haskell"><span class="hljs-title">rowSumOddNumbers</span> <span class="hljs-number">1</span> <span class="hljs-comment">-- 1</span>
<span class="hljs-title">rowSumOddNumbers</span> <span class="hljs-number">2</span> <span class="hljs-comment">-- 3 + 5 = 8</span></code></pre>
<pre style="display: none;"><code class="language-r">row_sum_odd_numbers(<span class="hljs-number">1</span>) <span class="hljs-comment"># 1</span>
[<span class="hljs-number">1</span>] <span class="hljs-number">1</span>
row_sum_odd_numbers(<span class="hljs-number">2</span>) <span class="hljs-comment"># 3 + 5</span>
[<span class="hljs-number">1</span>] <span class="hljs-number">8</span></code></pre>
<pre style="display: none;"><code class="language-nasm"><span class="hljs-keyword">mov</span> <span class="hljs-built_in">rdi</span> <span class="hljs-number">1</span>
<span class="hljs-keyword">call</span> row_sum_odd_numbers    <span class="hljs-comment">; rax &lt;- 1</span>

<span class="hljs-keyword">mov</span> <span class="hljs-built_in">rdi</span> <span class="hljs-number">2</span>
<span class="hljs-keyword">call</span> row_sum_odd_numbers   <span class="hljs-comment">; rax &lt;- 3 + 5</span></code></pre>
<pre style="display: none;"><code class="language-clojure">(row-sum-odd-numbers 1) # 1
(row-sum-odd-numbers 2) # 3 + 5 = 8</code></pre>
<pre style="display: none;"><code class="language-julia">rowsumoddnumbers(<span class="hljs-number">1</span>) <span class="hljs-comment"># 1</span>
rowsumoddnumbers(<span class="hljs-number">2</span>) <span class="hljs-comment"># 3 + 5 = 8</span></code></pre>
<pre style="display: none;"><code class="language-scala">rowSumOddNumbers(<span class="hljs-number">1</span>) <span class="hljs-comment">// 1</span>
rowSumOddNumbers(<span class="hljs-number">2</span>) <span class="hljs-comment">// 3 + 5 = 8</span></code></pre>
<pre style="display: none;"><code class="language-swift">rowSumOddNumbers(<span class="hljs-number">1</span>) <span class="hljs-comment">// 1</span>
rowSumOddNumbers(<span class="hljs-number">2</span>) <span class="hljs-comment">// 3 + 5 = 8</span></code></pre>
<pre style="display: none;"><code class="language-elixir">SumOfOdd.row_sum_odd_numbers(1) // 1
SumOfOdd.row_sum_odd_numbers(2) // 3 + 5 = 8</code></pre>

### Solution