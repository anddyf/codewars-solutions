### Problem:
<h1 id="toggling-grid">Toggling Grid</h1>
<p>You are given a grid (2d array) of 0/1&apos;s. All 1&apos;s represents a solved puzzle. Your job is to come up with a sequence of toggle moves that will solve a scrambled grid.</p>
<p>Solved:</p>
<pre><code class="language-js">[ [<span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>],
  [<span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>],
  [<span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>] ]</code></pre>
<p>&quot;0&quot; (first row) toggle:</p>
<pre><code class="language-js">[ [<span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>],
  [<span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>],
  [<span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>] ]</code></pre>
<p>then &quot;3&quot; (first column) toggle:</p>
<pre><code class="language-js">[ [<span class="hljs-number">1</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>],
  [<span class="hljs-number">0</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>],
  [<span class="hljs-number">0</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>] ]</code></pre>
<p>The numbers in quotes are codes for the row/column, and will be explained.</p>
<h2 id="your-task-findsolution">Your task: findSolution()</h2>
<p>Your task is to write a function, <code>findSolution()</code> (or <code>find_solution()</code>), which takes as input a 2d array, and returns an array of &quot;steps&quot; that represent a sequence of toggles to solve the puzzle.</p>
<p>For example:</p>
<pre style="display: none;"><code class="language-js"><span class="hljs-keyword">var</span> puzzle = [
  [<span class="hljs-number">1</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>],
  [<span class="hljs-number">0</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>],
  [<span class="hljs-number">0</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>]
];</code></pre>
<pre><code class="language-javascript"><span class="hljs-keyword">var</span> solution = findSolution(puzzle)
<span class="hljs-built_in">console</span>.log(solution);
&gt; [<span class="hljs-number">0</span>, <span class="hljs-number">3</span>]</code></pre>
<pre style="display: none;"><code class="language-python">solution = find_solution(puzzle)
print(solution);
&gt; [<span class="hljs-number">0</span>, <span class="hljs-number">3</span>]</code></pre>
<p>Note that, in the above example, <code>[1, 2, 4, 5]</code> is also a valid solution! Any solution will pass the tests.</p>
<p>The solution is tested like this, for each number in the solution:</p>
<pre><code class="language-py"><span class="hljs-keyword">if</span> n &lt; puzzle.size:
  toggleRow(n)
<span class="hljs-keyword">else</span>:
  toggleCol(n - puzzle.size)</code></pre>
<p>To elaborate, possible n&apos;s for a 3x3 puzzle:</p>
<pre><code class="language-js">row toggles:
  <span class="hljs-number">0</span>, <span class="hljs-number">1</span>, or <span class="hljs-number">2</span>
column toggles:
  <span class="hljs-number">3</span>, <span class="hljs-number">4</span>, or <span class="hljs-number">5</span> -&gt; correspond to columns <span class="hljs-number">0</span>, <span class="hljs-number">1</span>, or <span class="hljs-number">2</span></code></pre>
<ul>
<li>Row numbers = (0    --&gt; size - 1)</li>
<li>Cols numbers = (size --&gt; size * 2 - 1)</li>
</ul>
<h3 id="example-of-2-toggle">Example of &quot;2&quot; toggle:</h3>
<pre><code class="language-js">before:
[
  [<span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>],
  [<span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>],
  [<span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>]
]
<span class="hljs-attr">after</span>: 
[
  [<span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>],
  [<span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>],
  [<span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>]
]</code></pre>
<h3 id="example-of-4-toggle">Example of &quot;4&quot; toggle:</h3>
<pre><code class="language-js">before:
[
  [<span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>],
  [<span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>],
  [<span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>]
]
<span class="hljs-attr">after</span>: 
[
  [<span class="hljs-number">1</span>, <span class="hljs-number">0</span>, <span class="hljs-number">1</span>],
  [<span class="hljs-number">1</span>, <span class="hljs-number">0</span>, <span class="hljs-number">1</span>],
  [<span class="hljs-number">1</span>, <span class="hljs-number">0</span>, <span class="hljs-number">1</span>]
]</code></pre>
<h2 id="more-examples">More examples:</h2>
<pre><code class="language-javascript"><span class="hljs-keyword">var</span> puzzle = [
  [ <span class="hljs-number">0</span>, <span class="hljs-number">1</span>, <span class="hljs-number">0</span> ],
  [ <span class="hljs-number">1</span>, <span class="hljs-number">0</span>, <span class="hljs-number">1</span> ],
  [ <span class="hljs-number">1</span>, <span class="hljs-number">0</span>, <span class="hljs-number">1</span> ]
];
<span class="hljs-keyword">var</span> solution = findSolution(puzzle)
<span class="hljs-built_in">console</span>.log(solution);
&gt; [<span class="hljs-number">0</span>, <span class="hljs-number">4</span>]</code></pre>
<pre style="display: none;"><code class="language-python">puzzle = [
  [ <span class="hljs-number">0</span>, <span class="hljs-number">1</span>, <span class="hljs-number">0</span> ],
  [ <span class="hljs-number">1</span>, <span class="hljs-number">0</span>, <span class="hljs-number">1</span> ],
  [ <span class="hljs-number">1</span>, <span class="hljs-number">0</span>, <span class="hljs-number">1</span> ]
];
solution = find_solution(puzzle)
print(solution);
&gt; [<span class="hljs-number">0</span>, <span class="hljs-number">4</span>]</code></pre>
<p>let&apos;s try some bigger puzzles:</p>
<pre style="display: none;"><code>var puzzle = [
  [ 1, 0, 1, 0, 0 ],
  [ 0, 1, 0, 1, 1 ],
  [ 0, 1, 0, 1, 1 ],
  [ 0, 1, 0, 1, 1 ],
  [ 1, 0, 1, 0, 0 ]
];
var solution = findSolution(puzzle)
console.log(solution);
&gt; [ 0, 5, 4, 7 ]</code></pre><pre style="display: none;"><code class="language-python">puzzle = [
  [ <span class="hljs-number">1</span>, <span class="hljs-number">0</span>, <span class="hljs-number">1</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span> ],
  [ <span class="hljs-number">0</span>, <span class="hljs-number">1</span>, <span class="hljs-number">0</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span> ],
  [ <span class="hljs-number">0</span>, <span class="hljs-number">1</span>, <span class="hljs-number">0</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span> ],
  [ <span class="hljs-number">0</span>, <span class="hljs-number">1</span>, <span class="hljs-number">0</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span> ],
  [ <span class="hljs-number">1</span>, <span class="hljs-number">0</span>, <span class="hljs-number">1</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span> ]
];
solution = find_solution(puzzle)
print(solution);
&gt; [ <span class="hljs-number">0</span>, <span class="hljs-number">5</span>, <span class="hljs-number">4</span>, <span class="hljs-number">7</span> ]</code></pre>
<pre style="display: none;"><code>var puzzle = [
  [ 1, 1, 1, 0, 1, 1, 1 ],
  [ 1, 1, 1, 0, 1, 1, 1 ],
  [ 1, 1, 1, 0, 1, 1, 1 ],
  [ 0, 0, 0, 1, 0, 0, 0 ],
  [ 1, 1, 1, 0, 1, 1, 1 ],
  [ 1, 1, 1, 0, 1, 1, 1 ],
  [ 1, 1, 1, 0, 1, 1, 1 ]
];
var solution = findSolution(puzzle)
console.log(solution);
&gt; [ 3, 10 ]</code></pre><pre style="display: none;"><code class="language-python">puzzle = [
  [ <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">0</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span> ],
  [ <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">0</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span> ],
  [ <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">0</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span> ],
  [ <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">1</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span> ],
  [ <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">0</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span> ],
  [ <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">0</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span> ],
  [ <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">0</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span> ]
];
solution = find_solution(puzzle)
print(solution);
&gt; [ <span class="hljs-number">3</span>, <span class="hljs-number">10</span> ]</code></pre>
<p>There are randomized tests with puzzles of up to 100x100 in size. Have fun!</p>

### Solution