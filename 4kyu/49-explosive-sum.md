### Problem:
<h1 id="how-many-ways-can-you-make-the-sum-of-a-number">How many ways can you make the sum of a number?</h1>
<p>From wikipedia: <a href="https://en.wikipedia.org/wiki/Partition_(number_theory)#" target="_blank">https://en.wikipedia.org/wiki/Partition_(number_theory)#</a></p>
<blockquote>
<p>In number theory and combinatorics, a partition of a positive integer <em>n</em>, also called an <em>integer partition</em>, is a way of writing n as a sum of positive integers. Two sums that differ only in the order of their summands are considered the same partition. If order matters, the sum becomes a composition. For example, 4 can be partitioned in five distinct ways:</p>
<pre><code>4
3 + 1
2 + 2
2 + 1 + 1
1 + 1 + 1 + 1</code></pre></blockquote>
<h2 id="examples">Examples</h2>
<h3 id="basic">Basic</h3>
<pre><code class="language-javascript">sum(<span class="hljs-number">1</span>) <span class="hljs-comment">// 1</span>
sum(<span class="hljs-number">2</span>) <span class="hljs-comment">// 2  -&gt; 1+1 , 2</span>
sum(<span class="hljs-number">3</span>) <span class="hljs-comment">// 3 -&gt; 1+1+1, 1+2, 3</span>
sum(<span class="hljs-number">4</span>) <span class="hljs-comment">// 5 -&gt; 1+1+1+1, 1+1+2, 1+3, 2+2, 4</span>
sum(<span class="hljs-number">5</span>) <span class="hljs-comment">// 7 -&gt; 1+1+1+1+1, 1+1+1+2, 1+1+3, 1+2+2, 1+4, 5, 2+3</span>

sum(<span class="hljs-number">10</span>) <span class="hljs-comment">// 42</span></code></pre>
<pre style="display: none;"><code class="language-haskell"><span class="hljs-title">explosiveSum</span>  <span class="hljs-number">1</span>   <span class="hljs-comment">-- 1</span>
<span class="hljs-title">explosiveSum</span> <span class="hljs-number">2</span>   <span class="hljs-comment">-- 2 -&gt; 1+1 , 2</span>
<span class="hljs-title">explosiveSum</span> <span class="hljs-number">3</span>   <span class="hljs-comment">-- 3 -&gt; 1+1+1, 1+2, 3</span>
<span class="hljs-title">explosiveSum</span> <span class="hljs-number">4</span>   <span class="hljs-comment">-- 5 -&gt; 1+1+1+1, 1+1+2, 1+3, 2+2, 4</span>
<span class="hljs-title">explosiveSum</span> <span class="hljs-number">5</span>   <span class="hljs-comment">-- 7 -&gt; 1+1+1+1+1, 1+1+1+2, 1+1+3, 1+2+2, 1+4, 5, 2+3</span>

<span class="hljs-title">explosiveSum</span> <span class="hljs-number">10</span>  <span class="hljs-comment">-- 42</span></code></pre>
<pre style="display: none;"><code class="language-ruby">exp_sum(<span class="hljs-number">1</span>) <span class="hljs-comment"># 1</span>
exp_sum(<span class="hljs-number">2</span>) <span class="hljs-comment"># 2  -&gt; 1+1 , 2</span>
exp_sum(<span class="hljs-number">3</span>) <span class="hljs-comment"># 3 -&gt; 1+1+1, 1+2, 3</span>
exp_sum(<span class="hljs-number">4</span>) <span class="hljs-comment"># 5 -&gt; 1+1+1+1, 1+1+2, 1+3, 2+2, 4</span>
exp_sum(<span class="hljs-number">5</span>) <span class="hljs-comment"># 7 -&gt; 1+1+1+1+1, 1+1+1+2, 1+1+3, 1+2+2, 1+4, 5, 2+3</span>

exp_sum(<span class="hljs-number">10</span>) <span class="hljs-comment"># 42</span></code></pre>
<pre style="display: none;"><code class="language-python">exp_sum(<span class="hljs-number">1</span>) <span class="hljs-comment"># 1</span>
exp_sum(<span class="hljs-number">2</span>) <span class="hljs-comment"># 2  -&gt; 1+1 , 2</span>
exp_sum(<span class="hljs-number">3</span>) <span class="hljs-comment"># 3 -&gt; 1+1+1, 1+2, 3</span>
exp_sum(<span class="hljs-number">4</span>) <span class="hljs-comment"># 5 -&gt; 1+1+1+1, 1+1+2, 1+3, 2+2, 4</span>
exp_sum(<span class="hljs-number">5</span>) <span class="hljs-comment"># 7 -&gt; 1+1+1+1+1, 1+1+1+2, 1+1+3, 1+2+2, 1+4, 5, 2+3</span>

exp_sum(<span class="hljs-number">10</span>) <span class="hljs-comment"># 42</span></code></pre>
<pre style="display: none;"><code class="language-cpp">exp_sum(<span class="hljs-number">1</span>) <span class="hljs-comment">// 1</span>
exp_sum(<span class="hljs-number">2</span>) <span class="hljs-comment">// 2  -&gt; 1+1 , 2</span>
exp_sum(<span class="hljs-number">3</span>) <span class="hljs-comment">// 3 -&gt; 1+1+1, 1+2, 3</span>
exp_sum(<span class="hljs-number">4</span>) <span class="hljs-comment">// 5 -&gt; 1+1+1+1, 1+1+2, 1+3, 2+2, 4</span>
exp_sum(<span class="hljs-number">5</span>) <span class="hljs-comment">// 7 -&gt; 1+1+1+1+1, 1+1+1+2, 1+1+3, 1+2+2, 1+4, 5, 2+3</span>

exp_sum(<span class="hljs-number">10</span>) <span class="hljs-comment">// 42</span></code></pre>
<h3 id="explosive">Explosive</h3>
<pre><code class="language-javascript">sum(<span class="hljs-number">50</span>) <span class="hljs-comment">// 204226</span>
sum(<span class="hljs-number">80</span>) <span class="hljs-comment">// 15796476</span>
sum(<span class="hljs-number">100</span>) <span class="hljs-comment">// 190569292</span></code></pre>
<pre style="display: none;"><code class="language-haskell"><span class="hljs-title">explosiveSum</span>  <span class="hljs-number">50</span> <span class="hljs-comment">--    204226</span>
<span class="hljs-title">explosiveSum</span>  <span class="hljs-number">80</span> <span class="hljs-comment">--  15796476</span>
<span class="hljs-title">explosiveSum</span> <span class="hljs-number">100</span> <span class="hljs-comment">-- 190569292</span></code></pre>
<pre style="display: none;"><code class="language-ruby">exp_sum(<span class="hljs-number">50</span>) <span class="hljs-comment"># 204226</span>
exp_sum(<span class="hljs-number">80</span>) <span class="hljs-comment"># 15796476</span>
exp_sum(<span class="hljs-number">100</span>) <span class="hljs-comment"># 190569292</span></code></pre>
<pre style="display: none;"><code class="language-python">exp_sum(<span class="hljs-number">50</span>) <span class="hljs-comment"># 204226</span>
exp_sum(<span class="hljs-number">80</span>) <span class="hljs-comment"># 15796476</span>
exp_sum(<span class="hljs-number">100</span>) <span class="hljs-comment"># 190569292</span></code></pre>
<pre style="display: none;"><code class="language-cpp">exp_sum(<span class="hljs-number">50</span>) <span class="hljs-comment">// 204226</span>
exp_sum(<span class="hljs-number">80</span>) <span class="hljs-comment">// 15796476</span>
exp_sum(<span class="hljs-number">100</span>) <span class="hljs-comment">// 190569292</span></code></pre>
<p>See <a href="http://www.numericana.com/data/partition.htm" target="_blank">here</a> for more examples.</p>

### Solution