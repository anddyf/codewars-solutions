### Problem:
<p>In this finite version of <a href="http://en.wikipedia.org/wiki/Conway&apos;s_Game_of_Life" target="_blank">Conway&apos;s Game of Life</a>  (here is an excerpt of the rules) ... </p>
<p>
<i>
The universe of the Game of Life is an infinite two-dimensional orthogonal grid of square cells, each of which is in one of two possible states, alive or dead. 
Every cell interacts with its eight neighbours, which are the cells that are horizontally, vertically, or diagonally adjacent. At each step in time, the following transitions occur:
</i></p><ul><i>
<li>Any live cell with fewer than two live neighbours dies, as if caused by under-population.</li>
<li>Any live cell with two or three live neighbours lives on to the next generation.</li>
<li>Any live cell with more than three live neighbours dies, as if by overcrowding.</li>
<li>Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.</li>
</i></ul><i>
The initial pattern constitutes the seed of the system. The first generation is created by applying the above rules simultaneously to every cell in the seed&#x2014;births and deaths occur simultaneously, and the discrete moment at which this happens is sometimes called a tick (in other words, each generation is a pure function of the preceding one)
</i>
<p></p>
...implement your own method which will take the initial state as an NxM array of 0&apos;s (dead cell) and 1&apos;s (living cell) and return an equally sized array representing the next generation. Cells outside the array must be considered dead.
Cells that would born out of the array boundaries should be ignored (universe never grows beyond the initial NxM grid).<br> N.B.: for illustration purposes, 0 and 1 will be represented as &#x2591; and &#x2593; blocks (PHP: basic black and white squares) respectively. You can take advantage of the &apos;htmlize&apos; function to get a text representation of the universe:<br>eg:

<pre><code class="language-js"><span class="hljs-built_in">console</span>.log(htmlize(cells));</code></pre>
<pre style="display: none;"><code class="language-python"><span class="hljs-keyword">print</span> htmlize(cells)</code></pre>
<pre style="display: none;"><code class="language-ruby">puts htmlize(cells)</code></pre>
<pre style="display: none;"><code class="language-php"><span class="hljs-keyword">echo</span> htmlize($cells) . <span class="hljs-string">&quot;\r\n&quot;</span>;</code></pre>

### Solution