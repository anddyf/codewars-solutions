### Problem:
<p>If you haven&apos;t already done so, you should do the <a href="https://www.codewars.com/kata/5x5-nonogram-solver/" target="_blank">5x5</a> and <a href="https://www.codewars.com/kata/15x15-nonogram-solver/" target="_blank">15x15</a> Nonogram solvers first.</p>
<p>In this kata, you have to solve nonograms from any size up to one with an average side length of 50. The nonograms are not all square. However, they all will be valid and should only have one solution.</p>
<p>I highly recommend not to try and use a brute force solution as some of the grids are very big. Also, you may not be able to solve all the grids by deduction alone so may have to guess one or two squares. :P</p>
<p>You will be given three arguments: The clues, the width, and the height:</p>
<pre><code class="language-python"><span class="hljs-comment"># clues is given in the same format as the previous two nonogram katas:</span>
clues = (tuple((column_clues,) <span class="hljs-keyword">for</span> column_clues <span class="hljs-keyword">in</span> column),
         tuple((row_clues,) <span class="hljs-keyword">for</span> row_clues <span class="hljs-keyword">in</span> row))

<span class="hljs-comment"># width is the width of the puzzle (distance from left to right)</span>
width = width_of_puzzle

<span class="hljs-comment"># height is the height of the puzzle (distance from top to bottom)</span>
height = height_of_puzzle</code></pre>
<pre style="display: none;"><code class="language-javascript"><span class="hljs-comment">// The clues are made up of the horizontal and vertical clues</span>
<span class="hljs-keyword">let</span> horizontalClues = <span class="hljs-built_in">Array</span>.from(<span class="hljs-string">`all the clues given from left to right with the uppermost clue given first`</span>),
    verticalClues = <span class="hljs-built_in">Array</span>.from(<span class="hljs-string">`all the clues given from top to bottom with the leftmost clue given first`</span>);


<span class="hljs-comment">// clues is given in the same format as the previous two nonogram katas:</span>
<span class="hljs-keyword">var</span> clues = [horizontalClues, verticalClues],

    <span class="hljs-comment">// width is the width of the puzzle (distance from left to right)</span>
    width = <span class="hljs-string">`width of puzzle`</span>,

    <span class="hljs-comment">// height is the height of the puzzle (distance from top to bottom)</span>
    height = <span class="hljs-string">`height of puzzle`</span>;</code></pre>
<p>and you will have to finish the function:</p>
<pre><code class="language-python"><span class="hljs-function"><span class="hljs-keyword">def</span> <span class="hljs-title">solve</span><span class="hljs-params">(clues, width, height)</span>:</span>
    <span class="hljs-keyword">pass</span></code></pre>
<pre style="display: none;"><code class="language-javascript"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">solve</span>(<span class="hljs-params">clues, width, height</span>) </span>{
}</code></pre>
<p>You should return either a tuple of tuples for Python or an array of array for JS of the solved grid.</p>
<p>For example, the second example test case looks like:</p>
<p><img src="http://static.nonograms.org/files/nonograms/large/voprositelniy_znak_12_1_1p.png" alt="Img"></p>
<p>Therefore, you would be given the arguments:</p>
<pre><code class="language-python">clues = (((<span class="hljs-number">3</span>,), (<span class="hljs-number">4</span>,), (<span class="hljs-number">2</span>, <span class="hljs-number">2</span>, <span class="hljs-number">2</span>), (<span class="hljs-number">2</span>, <span class="hljs-number">4</span>, <span class="hljs-number">2</span>), (<span class="hljs-number">6</span>,), (<span class="hljs-number">3</span>,)),
         ((<span class="hljs-number">4</span>,), (<span class="hljs-number">6</span>,), (<span class="hljs-number">2</span>, <span class="hljs-number">2</span>), (<span class="hljs-number">2</span>, <span class="hljs-number">2</span>), (<span class="hljs-number">2</span>,), (<span class="hljs-number">2</span>,), (<span class="hljs-number">2</span>,), (<span class="hljs-number">2</span>,), (), (<span class="hljs-number">2</span>,), (<span class="hljs-number">2</span>,)))
width = <span class="hljs-number">6</span>
height = <span class="hljs-number">11</span></code></pre>
<pre style="display: none;"><code class="language-javascript">clues = [[[<span class="hljs-number">3</span>], [<span class="hljs-number">4</span>], [<span class="hljs-number">2</span>, <span class="hljs-number">2</span>, <span class="hljs-number">2</span>], [<span class="hljs-number">2</span>, <span class="hljs-number">4</span>, <span class="hljs-number">2</span>], [<span class="hljs-number">6</span>], [<span class="hljs-number">3</span>],
         [[<span class="hljs-number">4</span>], [<span class="hljs-number">6</span>], [<span class="hljs-number">2</span>, <span class="hljs-number">2</span>], [<span class="hljs-number">2</span>, <span class="hljs-number">2</span>], [<span class="hljs-number">2</span>], [<span class="hljs-number">2</span>], [<span class="hljs-number">2</span>], [<span class="hljs-number">2</span>], [], [<span class="hljs-number">2</span>], [<span class="hljs-number">2</span>]]
width = <span class="hljs-number">6</span>
height = <span class="hljs-number">11</span></code></pre>
<p>Zero will be given as an empty tuple in python, or empty array in JS.</p>
<h1 id="test-sizes">Test sizes:</h1>
<p>You will be given 60 random tests in total. There will be:</p>
<ol>
<li>35 small tests: 3 &lt; the average of the side lengths &lt;= 25</li>
<li>15 medium tests: 25 &lt; the average of the side lengths &lt;= 35</li>
<li>10 big tests: 40 &lt;= the average of the side lengths &lt;= 50</li>
</ol>
<p>Good luck :)</p>

### Solution