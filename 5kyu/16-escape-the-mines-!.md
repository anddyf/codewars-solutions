### Problem:
<p>A poor miner is trapped in a mine and you have to help him to get out !</p>
<p>Only, the mine is all dark so you have to tell him where to go.</p>
<p>In this kata, you will have to implement a method <code>solve(map, miner, exit)</code> that has to return the path the miner must take to reach the exit as an array of moves, such as : <code>[&apos;up&apos;, &apos;down&apos;, &apos;right&apos;, &apos;left&apos;]</code>. There are 4 possible moves, <code>up</code>, <code>down</code>, <code>left</code> and <code>right</code>, no diagonal.</p>
<p><code>map</code> is a 2-dimensional array of boolean values, representing squares. <code>false</code> for walls, <code>true</code> for open squares (where the miner can walk). It will never be larger than 5 x 5. It is laid out as an array of columns. All columns will always be the same size, though not necessarily the same size as rows (in other words, maps can be rectangular). The map will never contain any loop, so there will always be only one possible path. The map may contain dead-ends though.</p>
<p><code>miner</code> is the position of the miner at the start, as an object made of two zero-based integer properties, x and y. For example <code>{x:0, y:0}</code> would be the top-left corner.</p>
<p><code>exit</code> is the position of the exit, in the same format as <code>miner</code>.</p>
<p>Note that the miner can&apos;t go outside the map, as it is a tunnel.</p>
<p>Let&apos;s take a pretty basic example :</p>
<pre><code class="language-javascript"><span class="hljs-keyword">var</span> map = [[<span class="hljs-literal">true</span>, <span class="hljs-literal">false</span>],
    [<span class="hljs-literal">true</span>, <span class="hljs-literal">true</span>]];

solve(map, {<span class="hljs-attr">x</span>:<span class="hljs-number">0</span>,<span class="hljs-attr">y</span>:<span class="hljs-number">0</span>}, {<span class="hljs-attr">x</span>:<span class="hljs-number">1</span>,<span class="hljs-attr">y</span>:<span class="hljs-number">1</span>});
<span class="hljs-comment">// Should return [&apos;right&apos;, &apos;down&apos;]</span></code></pre>
<pre style="display: none;"><code class="language-python">map = [[<span class="hljs-literal">True</span>, <span class="hljs-literal">False</span>],
    [<span class="hljs-literal">True</span>, <span class="hljs-literal">True</span>]];

solve(map, {<span class="hljs-string">&apos;x&apos;</span>:<span class="hljs-number">0</span>,<span class="hljs-string">&apos;y&apos;</span>:<span class="hljs-number">0</span>}, {<span class="hljs-string">&apos;x&apos;</span>:<span class="hljs-number">1</span>,<span class="hljs-string">&apos;y&apos;</span>:<span class="hljs-number">1</span>})
// Should <span class="hljs-keyword">return</span> [<span class="hljs-string">&apos;right&apos;</span>, <span class="hljs-string">&apos;down&apos;</span>]</code></pre>
<pre style="display: none;"><code class="language-ruby">map = [[<span class="hljs-literal">true</span>, <span class="hljs-literal">false</span>],
    [<span class="hljs-literal">true</span>, <span class="hljs-literal">true</span>]];

solve(map, {<span class="hljs-string">&apos;x&apos;</span>=&gt;<span class="hljs-number">0</span>,<span class="hljs-string">&apos;y&apos;</span>=&gt;<span class="hljs-number">0</span>}, {<span class="hljs-string">&apos;x&apos;</span>=&gt;<span class="hljs-number">1</span>,<span class="hljs-string">&apos;y&apos;</span>=&gt;<span class="hljs-number">1</span>})
<span class="hljs-comment"># Should return [&apos;right&apos;, &apos;down&apos;]</span></code></pre>
<pre style="display: none;"><code class="language-haskell"><span class="hljs-title">let</span> map = [[<span class="hljs-type">True</span>, <span class="hljs-type">False</span>],
           [<span class="hljs-type">True</span>, <span class="hljs-type">True</span>]]

<span class="hljs-title">solve</span> map (<span class="hljs-number">0</span>,<span class="hljs-number">0</span>) (<span class="hljs-number">1</span>,<span class="hljs-number">1</span>)
<span class="hljs-comment">-- Should return [R, D]</span></code></pre>

### Solution