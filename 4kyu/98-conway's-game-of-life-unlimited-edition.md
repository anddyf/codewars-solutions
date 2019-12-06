### Problem:
<p>Given a 2D array and a number of generations, compute n timesteps of <a href="http://en.wikipedia.org/wiki/Conway%27s_Game_of_Life" target="_blank">Conway&apos;s Game of Life</a>.</p>
<p>The rules of the game are:</p>
<ol>
<li>Any live cell with fewer than two live neighbours dies, as if caused by underpopulation.</li>
<li>Any live cell with more than three live neighbours dies, as if by overcrowding.</li>
<li>Any live cell with two or three live neighbours lives on to the next generation.</li>
<li>Any dead cell with exactly three live neighbours becomes a live cell.</li>
</ol>
<p>Each cell&apos;s neighborhood is the 8 cells immediately around it (i.e. <a href="https://en.wikipedia.org/wiki/Moore_neighborhood" target="_blank">Moore Neighborhood</a>). The universe is infinite in both the x and y dimensions and all cells are initially dead - except for those specified in the arguments. The return value should be a 2d array cropped around all of the living cells. (If there are no living cells, then return <code>[[]]</code>.)</p>
<p>For illustration purposes, 0 and 1 will be represented as <code>&#x2591;&#x2591;</code> and <code>&#x2593;&#x2593;</code> blocks respectively (PHP, <strong>C</strong>: plain black and white squares). You can take advantage of the <code>htmlize</code> function to get a text representation of the universe, e.g.:</p>
<pre><code class="language-javascript"><span class="hljs-built_in">console</span>.log(htmlize(cells));</code></pre>
<pre style="display: none;"><code class="language-coffeescript"><span class="hljs-built_in">console</span>.log htmlize(cells)</code></pre>
<pre style="display: none;"><code class="language-python"><span class="hljs-keyword">print</span> htmlize(cells)</code></pre>
<pre><code class="language-haskell"><span class="hljs-title">trace</span> (htmlize cells)</code></pre>
<pre style="display: none;"><code class="language-java">System.out.println(LifeDebug.htmlize(cells));</code></pre>
<pre style="display: none;"><code class="language-swift"><span class="hljs-built_in">print</span>(htmlize(cells))</code></pre>
<pre style="display: none;"><code class="language-php"><span class="hljs-keyword">echo</span> htmlize($cells) . <span class="hljs-string">&quot;\r\n&quot;</span>;</code></pre>
<pre style="display: none;"><code class="language-c"><span class="hljs-keyword">char</span> *universe = htmlize(cells, rows, columns);
<span class="hljs-built_in">printf</span>(universe);
<span class="hljs-built_in">free</span>(universe);</code></pre>

### Solution