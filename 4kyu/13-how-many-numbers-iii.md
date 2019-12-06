### Problem:
<p>We want to generate all the numbers of three digits where:</p>
<ul>
<li><p>the sum of their digits is equal to 10.</p>
</li>
<li><p>their digits are in increasing order (the numbers may have two or more equal contiguous digits)</p>
</li>
</ul>
<p>The numbers that fulfill the two above constraints are: <code>118, 127, 136, 145, 226, 235, 244, 334</code></p>
<p>Make a function that receives two arguments:</p>
<ul>
<li><p>the sum of digits value </p>
</li>
<li><p>the desired number of digits for the numbers</p>
</li>
</ul>
<p>The function should output an array with three values: [1,2,3]</p>
<p>1 - the total number of possible numbers</p>
<p>2 - the minimum number</p>
<p>3 - the maximum number</p>
<p>The example given above should be:</p>
<pre><code class="language-python">find_all(<span class="hljs-number">10</span>, <span class="hljs-number">3</span>) == [<span class="hljs-number">8</span>, <span class="hljs-number">118</span>, <span class="hljs-number">334</span>]</code></pre>
<pre style="display: none;"><code class="language-ruby">find_all(<span class="hljs-number">10</span>, <span class="hljs-number">3</span>) == [<span class="hljs-number">8</span>, <span class="hljs-number">118</span>, <span class="hljs-number">334</span>]</code></pre>
<pre style="display: none;"><code class="language-crystal">find_all(<span class="hljs-number">10</span>, <span class="hljs-number">3</span>) == [<span class="hljs-number">8</span>, <span class="hljs-number">118</span>, <span class="hljs-number">334</span>]</code></pre>
<pre style="display: none;"><code class="language-javascript">findAll(<span class="hljs-number">10</span>, <span class="hljs-number">3</span>) =&gt; [<span class="hljs-number">8</span>, <span class="hljs-string">&quot;118&quot;</span>, <span class="hljs-string">&quot;334&quot;</span>]</code></pre>
<pre style="display: none;"><code class="language-haskell"><span class="hljs-title">findAll</span> <span class="hljs-number">10</span> <span class="hljs-number">3</span> -&gt; ( <span class="hljs-number">8</span>, <span class="hljs-type">Just</span> <span class="hljs-number">118</span>, <span class="hljs-type">Just</span> <span class="hljs-number">334</span> )</code></pre>
<pre style="display: none;"><code class="language-java">HowManyNumbers.findAll(<span class="hljs-number">10</span>, <span class="hljs-number">3</span>) == [<span class="hljs-number">8</span>, <span class="hljs-number">118</span>, <span class="hljs-number">334</span>]   <span class="hljs-comment">// as List&lt;Integer&gt;</span></code></pre>
<pre style="display: none;"><code class="language-csharp">HowManyNumbers.FindAll(<span class="hljs-number">10</span>, <span class="hljs-number">3</span>) == [<span class="hljs-number">8</span>, <span class="hljs-number">118</span>, <span class="hljs-number">334</span>]   <span class="hljs-comment">// as List&lt;Integer&gt;</span></code></pre>
<p>If we have only one possible number as a solution, it should output a result like the one below:</p>
<pre><code class="language-python">find_all(<span class="hljs-number">27</span>, <span class="hljs-number">3</span>) == [<span class="hljs-number">1</span>, <span class="hljs-number">999</span>, <span class="hljs-number">999</span>]</code></pre>
<pre style="display: none;"><code class="language-ruby">find_all(<span class="hljs-number">27</span>, <span class="hljs-number">3</span>) == [<span class="hljs-number">1</span>, <span class="hljs-number">999</span>, <span class="hljs-number">999</span>]</code></pre>
<pre style="display: none;"><code class="language-crystal">find_all(<span class="hljs-number">27</span>, <span class="hljs-number">3</span>) == [<span class="hljs-number">1</span>, <span class="hljs-number">999</span>, <span class="hljs-number">999</span>]</code></pre>
<pre style="display: none;"><code class="language-javascript">findAll(<span class="hljs-number">27</span>, <span class="hljs-number">3</span>) =&gt; [<span class="hljs-number">1</span>, <span class="hljs-string">&quot;999&quot;</span>, <span class="hljs-string">&quot;999&quot;</span>]</code></pre>
<pre style="display: none;"><code class="language-haskell"><span class="hljs-title">findAll</span> <span class="hljs-number">27</span> <span class="hljs-number">3</span> -&gt; ( <span class="hljs-number">1</span>, <span class="hljs-type">Just</span> <span class="hljs-number">999</span>, <span class="hljs-type">Just</span> <span class="hljs-number">999</span> )</code></pre>
<pre style="display: none;"><code class="language-java">HowManyNumbers.findAll(<span class="hljs-number">27</span>, <span class="hljs-number">3</span>) == [<span class="hljs-number">1</span>, <span class="hljs-number">999</span>, <span class="hljs-number">999</span>]</code></pre>
<pre style="display: none;"><code class="language-csharp">HowManyNumbers.FindAll(<span class="hljs-number">27</span>, <span class="hljs-number">3</span>) == [<span class="hljs-number">1</span>, <span class="hljs-number">999</span>, <span class="hljs-number">999</span>]</code></pre>
<p>If there are no possible numbers, the function should output the empty array.</p>
<pre><code class="language-python">find_all(<span class="hljs-number">84</span>, <span class="hljs-number">4</span>) == []</code></pre>
<pre style="display: none;"><code class="language-ruby">find_all(<span class="hljs-number">84</span>, <span class="hljs-number">4</span>) == []</code></pre>
<pre style="display: none;"><code class="language-crystal">find_all(<span class="hljs-number">84</span>, <span class="hljs-number">4</span>) == []</code></pre>
<pre style="display: none;"><code class="language-javascript">findAll(<span class="hljs-number">84</span>, <span class="hljs-number">4</span>) =&gt; []</code></pre>
<pre style="display: none;"><code class="language-haskell"><span class="hljs-title">findAll</span> <span class="hljs-number">84</span> <span class="hljs-number">4</span> -&gt; ( <span class="hljs-number">0</span>, <span class="hljs-type">Nothing</span>, <span class="hljs-type">Nothing</span> )</code></pre>
<pre style="display: none;"><code class="language-java">HowManyNumbers.findAll(<span class="hljs-number">84</span>, <span class="hljs-number">4</span>) == []</code></pre>
<pre style="display: none;"><code class="language-csharp">HowManyNumbers.FindAll(<span class="hljs-number">84</span>, <span class="hljs-number">4</span>) == []</code></pre>
<p>The number of solutions climbs up when the number of digits increases.</p>
<pre><code class="language-python">find_all(<span class="hljs-number">35</span>, <span class="hljs-number">6</span>) == [<span class="hljs-number">123</span>, <span class="hljs-number">116999</span>, <span class="hljs-number">566666</span>]</code></pre>
<pre style="display: none;"><code class="language-ruby">find_all(<span class="hljs-number">35</span>, <span class="hljs-number">6</span>) == [<span class="hljs-number">123</span>, <span class="hljs-number">116999</span>, <span class="hljs-number">566666</span>]</code></pre>
<pre style="display: none;"><code class="language-crystal">find_all(<span class="hljs-number">35</span>, <span class="hljs-number">6</span>) == [<span class="hljs-number">123</span>, <span class="hljs-number">116999</span>, <span class="hljs-number">566666</span>]</code></pre>
<pre style="display: none;"><code class="language-javascript">findAll(<span class="hljs-number">35</span>, <span class="hljs-number">6</span>) =&gt; [<span class="hljs-number">123</span>, <span class="hljs-string">&apos;116999&apos;</span>, <span class="hljs-string">&apos;566666&apos;</span>]</code></pre>
<pre style="display: none;"><code class="language-haskell"><span class="hljs-title">findAll</span> <span class="hljs-number">35</span> <span class="hljs-number">6</span> -&gt; ( <span class="hljs-number">123</span>, <span class="hljs-type">Just</span> <span class="hljs-number">116999</span>, <span class="hljs-type">Just</span> <span class="hljs-number">566666</span> )</code></pre>
<pre style="display: none;"><code class="language-java">HowManyNumbers.findAll(<span class="hljs-number">35</span>, <span class="hljs-number">6</span>) == [<span class="hljs-number">123</span>, <span class="hljs-number">116999</span>, <span class="hljs-number">566666</span>]</code></pre>
<pre style="display: none;"><code class="language-csharp">HowManyNumbers.FindAll(<span class="hljs-number">35</span>, <span class="hljs-number">6</span>) == [<span class="hljs-number">123</span>, <span class="hljs-number">116999</span>, <span class="hljs-number">566666</span>]</code></pre>
<p>Features of the random tests:</p>
<ul>
<li>Number of tests: <code>112</code></li>
<li>Sum of digits value between <code>20</code> and <code>65</code></li>
<li>Amount of digits between <code>2</code> and <code>17</code></li>
</ul>

### Solution