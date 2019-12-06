### Problem:
<h3 id="please-also-check-out-other-katas-in-domino-tiling-series">Please also check out other katas in <a href="https://www.codewars.com/collections/5d19554d13dba80026a74ff5" target="_blank">Domino Tiling series</a>!</h3>
<hr>
<h1 id="task">Task</h1>
<p>A domino is a rectangular block with <code>2</code> units wide and <code>1</code> unit high. A domino can be placed on a grid in two ways: horizontal or vertical.</p>
<pre><code>## or #
      #</code></pre><p>You have infinitely many dominoes, and you want to fill a board that is <code>N</code> units wide and <code>2</code> units high:</p>
<pre><code>&lt;---   N   ---&gt;
###############
###############</code></pre><p>The task is to find <strong>the number of ways</strong> you can fill the given grid with dominoes.</p>
<h1 id="the-twist">The Twist</h1>
<p>However, you can quickly find that the answer is exactly the Fibonacci series (and yeah, CW has already too many of them), so here is a twist:</p>
<p>Now you have infinite supply of dominoes in <code>K</code> colors, and you have to fill the given grid <strong>without any two adjacent dominoes having the same color</strong>. Two dominoes are adjacent if they share an edge.</p>
<p>A valid filling of a 2 x 10 board with three colors could be as follows (note that two same-colored dominoes can share a point):</p>
<pre><code>1131223312
2231332212</code></pre><p>Since the answer will be very large, please give your answer <strong>modulo 12345787</strong>.</p>
<h1 id="examples">Examples</h1>
<pre><code class="language-python"><span class="hljs-comment"># K == 1: only one color</span>
two_by_n(<span class="hljs-number">1</span>, <span class="hljs-number">1</span>) == <span class="hljs-number">1</span>
two_by_n(<span class="hljs-number">3</span>, <span class="hljs-number">1</span>) == <span class="hljs-number">0</span>

<span class="hljs-comment"># K == 2: two colors</span>
two_by_n(<span class="hljs-number">1</span>, <span class="hljs-number">2</span>) == <span class="hljs-number">2</span>
two_by_n(<span class="hljs-number">4</span>, <span class="hljs-number">2</span>) == <span class="hljs-number">4</span>
two_by_n(<span class="hljs-number">7</span>, <span class="hljs-number">2</span>) == <span class="hljs-number">2</span>

<span class="hljs-comment"># K == 3: three colors</span>
two_by_n(<span class="hljs-number">1</span>, <span class="hljs-number">3</span>) == <span class="hljs-number">3</span>
two_by_n(<span class="hljs-number">2</span>, <span class="hljs-number">3</span>) == <span class="hljs-number">12</span>
two_by_n(<span class="hljs-number">5</span>, <span class="hljs-number">3</span>) == <span class="hljs-number">168</span> <span class="hljs-comment"># yes, the numbers grow quite quickly</span>

<span class="hljs-comment"># You must handle big values</span>
two_by_n(<span class="hljs-number">10</span>, <span class="hljs-number">5</span>) == <span class="hljs-number">7802599</span>
two_by_n(<span class="hljs-number">20</span>, <span class="hljs-number">10</span>) == <span class="hljs-number">4137177</span></code></pre>
<pre style="display: none;"><code class="language-javascript"><span class="hljs-comment">// K == 1: only one color</span>
twoByN(<span class="hljs-number">1</span>, <span class="hljs-number">1</span>) == <span class="hljs-number">1</span>
twoByN(<span class="hljs-number">3</span>, <span class="hljs-number">1</span>) == <span class="hljs-number">0</span>

<span class="hljs-comment">// K == 2: two colors</span>
twoByN(<span class="hljs-number">1</span>, <span class="hljs-number">2</span>) == <span class="hljs-number">2</span>
twoByN(<span class="hljs-number">4</span>, <span class="hljs-number">2</span>) == <span class="hljs-number">4</span>
twoByN(<span class="hljs-number">7</span>, <span class="hljs-number">2</span>) == <span class="hljs-number">2</span>

<span class="hljs-comment">// K == 3: three colors</span>
twoByN(<span class="hljs-number">1</span>, <span class="hljs-number">3</span>) == <span class="hljs-number">3</span>
twoByN(<span class="hljs-number">2</span>, <span class="hljs-number">3</span>) == <span class="hljs-number">12</span>
twoByN(<span class="hljs-number">5</span>, <span class="hljs-number">3</span>) == <span class="hljs-number">168</span> <span class="hljs-comment">// yes, the numbers grow quite quickly</span>

<span class="hljs-comment">// You must handle big values</span>
twoByN(<span class="hljs-number">10</span>, <span class="hljs-number">5</span>) == <span class="hljs-number">7802599</span>
twoByN(<span class="hljs-number">20</span>, <span class="hljs-number">10</span>) == <span class="hljs-number">4137177</span></code></pre>
<pre style="display: none;"><code class="language-scala"><span class="hljs-comment">// K == 1: only one color</span>
twoByN(<span class="hljs-number">1</span>, <span class="hljs-number">1</span>) == <span class="hljs-number">1</span>
twoByN(<span class="hljs-number">3</span>, <span class="hljs-number">1</span>) == <span class="hljs-number">0</span>

<span class="hljs-comment">// K == 2: two colors</span>
twoByN(<span class="hljs-number">1</span>, <span class="hljs-number">2</span>) == <span class="hljs-number">2</span>
twoByN(<span class="hljs-number">4</span>, <span class="hljs-number">2</span>) == <span class="hljs-number">4</span>
twoByN(<span class="hljs-number">7</span>, <span class="hljs-number">2</span>) == <span class="hljs-number">2</span>

<span class="hljs-comment">// K == 3: three colors</span>
twoByN(<span class="hljs-number">1</span>, <span class="hljs-number">3</span>) == <span class="hljs-number">3</span>
twoByN(<span class="hljs-number">2</span>, <span class="hljs-number">3</span>) == <span class="hljs-number">12</span>
twoByN(<span class="hljs-number">5</span>, <span class="hljs-number">3</span>) == <span class="hljs-number">168</span> <span class="hljs-comment">// yes, the numbers grow quite quickly</span>

<span class="hljs-comment">// You must handle big values</span>
twoByN(<span class="hljs-number">10</span>, <span class="hljs-number">5</span>) == <span class="hljs-number">7802599</span>
twoByN(<span class="hljs-number">20</span>, <span class="hljs-number">10</span>) == <span class="hljs-number">4137177</span></code></pre>
<h1 id="constraints">Constraints</h1>
<p><code>1 &lt;= N &lt;= 10000</code></p>
<p><code>1 &lt;= K &lt;= 100</code></p>
<p>All inputs are valid integers.</p>

### Solution