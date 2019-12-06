### Problem:
<h1 id="sum-array">Sum Array</h1>
<p>Write a method <code>sum</code> (<code>sum_array</code> in python, <code>sumarray</code> in julia, <code>SumArray</code> in C#) that takes an array of numbers and returns the sum of the numbers. These may be integers or decimals for Ruby and any instance of Num for Haskell. The numbers can also be negative. If the array does not contain any numbers then you should return 0.</p>
<h2 id="examples">Examples</h2>
<pre><code class="language-ruby">numbers = [<span class="hljs-number">1</span>, <span class="hljs-number">5.2</span>, <span class="hljs-number">4</span>, <span class="hljs-number">0</span>, -<span class="hljs-number">1</span>]
puts sum(numbers)
<span class="hljs-number">9.2</span></code></pre>
<pre style="display: none;"><code class="language-dart">sum([<span class="hljs-number">1</span>, <span class="hljs-number">5.2</span>, <span class="hljs-number">4</span>, <span class="hljs-number">0</span>, <span class="hljs-number">-1</span>]) <span class="hljs-comment">// 9.2</span></code></pre>
<pre style="display: none;"><code class="language-crystal">sum([<span class="hljs-number">1</span>, <span class="hljs-number">5.2</span>, <span class="hljs-number">4</span>, <span class="hljs-number">0</span>, -<span class="hljs-number">1</span>]) <span class="hljs-comment"># 9.2</span></code></pre>
<pre style="display: none;"><code class="language-cpp">sum({<span class="hljs-number">1</span>, <span class="hljs-number">5</span>, <span class="hljs-number">4</span>, <span class="hljs-number">0</span>, <span class="hljs-number">-1</span>}) <span class="hljs-comment">// 9</span></code></pre>
<pre style="display: none;"><code class="language-julia">sumarray([<span class="hljs-number">1</span>, <span class="hljs-number">5.2</span>, <span class="hljs-number">4</span>, <span class="hljs-number">0</span>, -<span class="hljs-number">1</span>]) <span class="hljs-comment"># 9.2</span></code></pre>
<pre style="display: none;"><code class="language-elixir">IO.inspect SumNumbers.sum([<span class="hljs-number">1</span>, <span class="hljs-number">5.2</span>, <span class="hljs-number">4</span>, 0, <span class="hljs-number">-1</span>])
<span class="hljs-number">9.2</span></code></pre>
<pre style="display: none;"><code class="language-php">sum([<span class="hljs-number">1</span>, <span class="hljs-number">5.2</span>, <span class="hljs-number">4</span>, <span class="hljs-number">0</span>, <span class="hljs-number">-1</span>]); <span class="hljs-comment">// =&gt; 9.2</span></code></pre>
<pre style="display: none;"><code class="language-haskell"><span class="hljs-title">print</span> $ sum [<span class="hljs-number">1</span>, <span class="hljs-number">5.2</span>, <span class="hljs-number">4</span>, <span class="hljs-number">0</span>, <span class="hljs-number">-1</span>]
&gt; <span class="hljs-number">9.2</span>

<span class="hljs-title">print</span> $ sum []
&gt; <span class="hljs-number">0</span></code></pre>
<pre style="display: none;"><code class="language-coffeescript">sum [<span class="hljs-number">1</span>, <span class="hljs-number">5.2</span>, <span class="hljs-number">4</span>, <span class="hljs-number">0</span>, <span class="hljs-number">-1</span>]
&gt; <span class="hljs-number">9.2</span>

sum []
&gt; <span class="hljs-number">0</span></code></pre>
<pre style="display: none;"><code class="language-clojure">(println (sum [1 2 3]))
&gt; 6
(println (sum []))
&gt; 0</code></pre>
<pre style="display: none;"><code class="language-python"><span class="hljs-keyword">print</span> sum_array([<span class="hljs-number">1</span> <span class="hljs-number">2</span> <span class="hljs-number">3</span>])
&gt; <span class="hljs-number">6</span>
<span class="hljs-keyword">print</span> sum_array([])
&gt; <span class="hljs-number">0</span></code></pre>
<pre style="display: none;"><code class="language-csharp">Kata.SumArray(<span class="hljs-keyword">new</span> <span class="hljs-keyword">int</span>[] {<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>}) =&gt; <span class="hljs-number">6</span></code></pre>
<pre style="display: none;"><code class="language-r">sum_array(c(<span class="hljs-number">1</span>, <span class="hljs-number">5.2</span>, <span class="hljs-number">4</span>, <span class="hljs-number">0</span>, -<span class="hljs-number">1</span>))
[<span class="hljs-number">1</span>] <span class="hljs-number">9.2</span>
sum_array(c())
[<span class="hljs-number">1</span>] <span class="hljs-number">0</span></code></pre>
<pre style="display: none;"><code class="language-nasm">printf(<span class="hljs-string">&quot;%d&quot;</span>, sum_array((int32_t []){<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>}))<span class="hljs-comment">;</span>
&gt; <span class="hljs-number">6</span>
printf(<span class="hljs-string">&quot;%d&quot;</span>, sum_array((int32_t []){<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, -<span class="hljs-number">3</span>}))<span class="hljs-comment">;</span>
&gt; <span class="hljs-number">0</span></code></pre>
<pre style="display: none;"><code class="language-racket">&gt; (sum &apos;(1 2 3))
6</code></pre>
<pre style="display: none;"><code class="language-factor"><span class="hljs-string">{</span> <span class="hljs-number">1</span> <span class="hljs-number">2</span> <span class="hljs-number">3</span> <span class="hljs-string">}</span> <span class="hljs-string">sum-array</span> <span class="hljs-string">!</span> <span class="hljs-number">6</span></code></pre>
<h2 id="assumptions">Assumptions</h2>
<ul>
<li>You can assume that you are only given numbers.</li>
<li>You cannot assume the size of the array.</li>
<li>You can assume that you do get an array and if the array is empty, return 0.</li>
</ul>

### Solution