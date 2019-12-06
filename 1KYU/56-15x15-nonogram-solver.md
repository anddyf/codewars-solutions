### Problem:
<h1 id="disclaimer">Disclaimer</h1>
<p>If you&apos;re not yet familiar with the puzzle called Nonogram,
I suggest you to solve <a href="https://www.codewars.com/kata/5x5-nonogram-solver/python" target="_blank">5x5 Nonogram Solver</a> first.</p>
<h1 id="task">Task</h1>
<p>Complete the function <code>solve(clues)</code> that solves 15-by-15 Nonogram puzzles.</p>
<p>Your algorithm has to be clever enough to solve all puzzles in time.</p>
<p>As in <code>5x5 Nonogram Solver</code>, the input format will look like this:</p>
<pre><code class="language-python">input = tuple(column_clues, row_clues)

each of (row_clues, column_clues) = tuple(
  tuple(num_of_ones_in_a_row, ...),
  ...
)</code></pre>
<pre style="display: none;"><code class="language-java"><span class="hljs-keyword">int</span>[][][] input = {column_clues, row_clues};

<span class="hljs-function">each <span class="hljs-title">of</span> <span class="hljs-params">(row_clues, column_clues)</span> being:
  <span class="hljs-keyword">int</span>[][] </span>{ <span class="hljs-keyword">int</span>[] numOfOnesInARow_col1, <span class="hljs-keyword">int</span>[] numOfOnesInARow_col2, ...}
  ...</code></pre>
<h1 id="example">Example</h1>
<p>Here is the example puzzle in the Sample Test.</p>
<p><img src="https://i.imgur.com/UOEciP1.png" alt></p>
<h1 id="notes">Notes</h1>
<p>Some puzzles may have lines with no cells filled.
Most Nonogram games show the clues for such lines as a single zero,
but the clue for such a line is represented as a <strong>zero-length tuple</strong> for the sake of this Kata.</p>

### Solution