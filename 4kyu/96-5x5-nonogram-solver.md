### Problem:
<p>Once you complete this kata, there is a <a href="http://www.codewars.com/kata/15x15-nonogram-solver" target="_blank">15x15 Version</a> that you can try.
And once you complete that, you can do the <a href="https://www.codewars.com/kata/5a5519858803853691000069" target="_blank">Multisize Version</a> which goes up to 50x50.</p>
<h1 id="description">Description</h1>
<p>For this kata, you will be making a Nonogram solver. :)</p>
<p>If you don&apos;t know what Nonograms are, you can <a href="https://www.puzzle-nonograms.com/faq.php" target="_blank">look at some instructions</a> and also <a href="https://www.puzzle-nonograms.com/" target="_blank">try out some Nonograms here.</a></p>
<p>For this kata, you will only have to solve 5x5 Nonograms. :)</p>
<h1 id="instructions">Instructions</h1>
<p>You need to complete the Nonogram class and the solve method:</p>
<pre><code class="language-python"><span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">Nonogram</span>:</span>

    <span class="hljs-function"><span class="hljs-keyword">def</span> <span class="hljs-title">__init__</span><span class="hljs-params">(self, clues)</span>:</span>
        <span class="hljs-keyword">pass</span>

    <span class="hljs-function"><span class="hljs-keyword">def</span> <span class="hljs-title">solve</span><span class="hljs-params">(self)</span>:</span>
        <span class="hljs-keyword">pass</span></code></pre>
<pre style="display: none;"><code class="language-java"><span class="hljs-keyword">public</span> <span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">Nonogram</span> </span>{

  <span class="hljs-keyword">public</span> <span class="hljs-keyword">static</span> <span class="hljs-keyword">int</span>[][] solve(<span class="hljs-keyword">int</span>[][][] clues) {
    <span class="hljs-comment">//Your code here</span>

    <span class="hljs-keyword">return</span> <span class="hljs-keyword">null</span>;
  }

}</code></pre>
<p>You will be given the clues and you should return the solved puzzle. All the puzzles will be solveable so you will not need to worry about that.</p>
<p>The clues will be a tuple of the horizontal clues, then the vertical clues, which will contain the individual clues. For example, for the Nonogram:</p>
<pre><code>    |   |   | 1 |   |   |
    | 1 |   | 1 |   |   |
    | 1 | 4 | 1 | 3 | 1 |
-------------------------
  1 |   |   |   |   |   |
-------------------------
  2 |   |   |   |   |   |
-------------------------
  3 |   |   |   |   |   |
-------------------------
2 1 |   |   |   |   |   |
-------------------------
  4 |   |   |   |   |   |
-------------------------</code></pre><p>The clues are on the top and the left of the puzzle, so in this case:</p>
<p>The horizontal clues are: <code>((1, 1), (4,), (1, 1, 1), (3,), (1,))</code>, and the vertical clues are: <code>((1,), (2,), (3,), (2, 1), (4,))</code>. The horizontal clues are given from left to right. If there is more than one clue for the same column, the upper clue is given first. The vertical clues are given from top to bottom. If there is more than one clue for the same row, the leftmost clue is given first.</p>
<p>Therefore, the clue given to the <code>__init__</code> method would be <code>(((1, 1), (4,), (1, 1, 1), (3,), (1,)), ((1,), (2,), (3,), (2, 1), (4,)))</code>. You are given the horizontal clues first then the vertical clues second.</p>
<p>You should return a tuple of the rows as your answer. In this case, the solved Nonogram looks like:</p>
<pre><code>    |   |   | 1 |   |   |
    | 1 |   | 1 |   |   |
    | 1 | 4 | 1 | 3 | 1 |
-------------------------
  1 |   |   | # |   |   |
-------------------------
  2 | # | # |   |   |   |
-------------------------
  3 |   | # | # | # |   |
-------------------------
2 1 | # | # |   | # |   |
-------------------------
  4 |   | # | # | # | # |
-------------------------</code></pre><p>In the tuple, you should use 0 for a unfilled square and 1 for a filled square. Therefore, in this case, you should return:</p>
<pre><code>((0, 0, 1, 0, 0),
 (1, 1, 0, 0, 0),
 (0, 1, 1, 1, 0),
 (1, 1, 0, 1, 0),
 (0, 1, 1, 1, 1))</code></pre><p>Good Luck!!</p>
<p>If there is anything that is unclear or confusing, just let me know :)</p>

### Solution