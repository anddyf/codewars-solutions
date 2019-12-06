### Problem:
<p>Write a function that will solve a 9x9 Sudoku puzzle. The function will take one argument consisting of the 2D puzzle array, with the value <code>0</code> representing an unknown square. </p>
<p>The Sudokus tested against your function will be &quot;easy&quot; (i.e. determinable; there will be no need to assume and test possibilities on unknowns) and can be solved with a brute-force approach.</p>
<p>For Sudoku rules, see <a href="http://en.wikipedia.org/wiki/Sudoku" target="_blank">the Wikipedia article</a>.</p>
<pre style="display: none;"><code class="language-python">puzzle = [[<span class="hljs-number">5</span>,<span class="hljs-number">3</span>,<span class="hljs-number">0</span>,<span class="hljs-number">0</span>,<span class="hljs-number">7</span>,<span class="hljs-number">0</span>,<span class="hljs-number">0</span>,<span class="hljs-number">0</span>,<span class="hljs-number">0</span>],
          [<span class="hljs-number">6</span>,<span class="hljs-number">0</span>,<span class="hljs-number">0</span>,<span class="hljs-number">1</span>,<span class="hljs-number">9</span>,<span class="hljs-number">5</span>,<span class="hljs-number">0</span>,<span class="hljs-number">0</span>,<span class="hljs-number">0</span>],
          [<span class="hljs-number">0</span>,<span class="hljs-number">9</span>,<span class="hljs-number">8</span>,<span class="hljs-number">0</span>,<span class="hljs-number">0</span>,<span class="hljs-number">0</span>,<span class="hljs-number">0</span>,<span class="hljs-number">6</span>,<span class="hljs-number">0</span>],
          [<span class="hljs-number">8</span>,<span class="hljs-number">0</span>,<span class="hljs-number">0</span>,<span class="hljs-number">0</span>,<span class="hljs-number">6</span>,<span class="hljs-number">0</span>,<span class="hljs-number">0</span>,<span class="hljs-number">0</span>,<span class="hljs-number">3</span>],
          [<span class="hljs-number">4</span>,<span class="hljs-number">0</span>,<span class="hljs-number">0</span>,<span class="hljs-number">8</span>,<span class="hljs-number">0</span>,<span class="hljs-number">3</span>,<span class="hljs-number">0</span>,<span class="hljs-number">0</span>,<span class="hljs-number">1</span>],
          [<span class="hljs-number">7</span>,<span class="hljs-number">0</span>,<span class="hljs-number">0</span>,<span class="hljs-number">0</span>,<span class="hljs-number">2</span>,<span class="hljs-number">0</span>,<span class="hljs-number">0</span>,<span class="hljs-number">0</span>,<span class="hljs-number">6</span>],
          [<span class="hljs-number">0</span>,<span class="hljs-number">6</span>,<span class="hljs-number">0</span>,<span class="hljs-number">0</span>,<span class="hljs-number">0</span>,<span class="hljs-number">0</span>,<span class="hljs-number">2</span>,<span class="hljs-number">8</span>,<span class="hljs-number">0</span>],
          [<span class="hljs-number">0</span>,<span class="hljs-number">0</span>,<span class="hljs-number">0</span>,<span class="hljs-number">4</span>,<span class="hljs-number">1</span>,<span class="hljs-number">9</span>,<span class="hljs-number">0</span>,<span class="hljs-number">0</span>,<span class="hljs-number">5</span>],
          [<span class="hljs-number">0</span>,<span class="hljs-number">0</span>,<span class="hljs-number">0</span>,<span class="hljs-number">0</span>,<span class="hljs-number">8</span>,<span class="hljs-number">0</span>,<span class="hljs-number">0</span>,<span class="hljs-number">7</span>,<span class="hljs-number">9</span>]]

sudoku(puzzle)
<span class="hljs-comment"># Should return</span>
 [[<span class="hljs-number">5</span>,<span class="hljs-number">3</span>,<span class="hljs-number">4</span>,<span class="hljs-number">6</span>,<span class="hljs-number">7</span>,<span class="hljs-number">8</span>,<span class="hljs-number">9</span>,<span class="hljs-number">1</span>,<span class="hljs-number">2</span>],
  [<span class="hljs-number">6</span>,<span class="hljs-number">7</span>,<span class="hljs-number">2</span>,<span class="hljs-number">1</span>,<span class="hljs-number">9</span>,<span class="hljs-number">5</span>,<span class="hljs-number">3</span>,<span class="hljs-number">4</span>,<span class="hljs-number">8</span>],
  [<span class="hljs-number">1</span>,<span class="hljs-number">9</span>,<span class="hljs-number">8</span>,<span class="hljs-number">3</span>,<span class="hljs-number">4</span>,<span class="hljs-number">2</span>,<span class="hljs-number">5</span>,<span class="hljs-number">6</span>,<span class="hljs-number">7</span>],
  [<span class="hljs-number">8</span>,<span class="hljs-number">5</span>,<span class="hljs-number">9</span>,<span class="hljs-number">7</span>,<span class="hljs-number">6</span>,<span class="hljs-number">1</span>,<span class="hljs-number">4</span>,<span class="hljs-number">2</span>,<span class="hljs-number">3</span>],
  [<span class="hljs-number">4</span>,<span class="hljs-number">2</span>,<span class="hljs-number">6</span>,<span class="hljs-number">8</span>,<span class="hljs-number">5</span>,<span class="hljs-number">3</span>,<span class="hljs-number">7</span>,<span class="hljs-number">9</span>,<span class="hljs-number">1</span>],
  [<span class="hljs-number">7</span>,<span class="hljs-number">1</span>,<span class="hljs-number">3</span>,<span class="hljs-number">9</span>,<span class="hljs-number">2</span>,<span class="hljs-number">4</span>,<span class="hljs-number">8</span>,<span class="hljs-number">5</span>,<span class="hljs-number">6</span>],
  [<span class="hljs-number">9</span>,<span class="hljs-number">6</span>,<span class="hljs-number">1</span>,<span class="hljs-number">5</span>,<span class="hljs-number">3</span>,<span class="hljs-number">7</span>,<span class="hljs-number">2</span>,<span class="hljs-number">8</span>,<span class="hljs-number">4</span>],
  [<span class="hljs-number">2</span>,<span class="hljs-number">8</span>,<span class="hljs-number">7</span>,<span class="hljs-number">4</span>,<span class="hljs-number">1</span>,<span class="hljs-number">9</span>,<span class="hljs-number">6</span>,<span class="hljs-number">3</span>,<span class="hljs-number">5</span>],
  [<span class="hljs-number">3</span>,<span class="hljs-number">4</span>,<span class="hljs-number">5</span>,<span class="hljs-number">2</span>,<span class="hljs-number">8</span>,<span class="hljs-number">6</span>,<span class="hljs-number">1</span>,<span class="hljs-number">7</span>,<span class="hljs-number">9</span>]]</code></pre>
<pre><code class="language-javascript"><span class="hljs-keyword">var</span> puzzle = [
            [<span class="hljs-number">5</span>,<span class="hljs-number">3</span>,<span class="hljs-number">0</span>,<span class="hljs-number">0</span>,<span class="hljs-number">7</span>,<span class="hljs-number">0</span>,<span class="hljs-number">0</span>,<span class="hljs-number">0</span>,<span class="hljs-number">0</span>],
            [<span class="hljs-number">6</span>,<span class="hljs-number">0</span>,<span class="hljs-number">0</span>,<span class="hljs-number">1</span>,<span class="hljs-number">9</span>,<span class="hljs-number">5</span>,<span class="hljs-number">0</span>,<span class="hljs-number">0</span>,<span class="hljs-number">0</span>],
            [<span class="hljs-number">0</span>,<span class="hljs-number">9</span>,<span class="hljs-number">8</span>,<span class="hljs-number">0</span>,<span class="hljs-number">0</span>,<span class="hljs-number">0</span>,<span class="hljs-number">0</span>,<span class="hljs-number">6</span>,<span class="hljs-number">0</span>],
            [<span class="hljs-number">8</span>,<span class="hljs-number">0</span>,<span class="hljs-number">0</span>,<span class="hljs-number">0</span>,<span class="hljs-number">6</span>,<span class="hljs-number">0</span>,<span class="hljs-number">0</span>,<span class="hljs-number">0</span>,<span class="hljs-number">3</span>],
            [<span class="hljs-number">4</span>,<span class="hljs-number">0</span>,<span class="hljs-number">0</span>,<span class="hljs-number">8</span>,<span class="hljs-number">0</span>,<span class="hljs-number">3</span>,<span class="hljs-number">0</span>,<span class="hljs-number">0</span>,<span class="hljs-number">1</span>],
            [<span class="hljs-number">7</span>,<span class="hljs-number">0</span>,<span class="hljs-number">0</span>,<span class="hljs-number">0</span>,<span class="hljs-number">2</span>,<span class="hljs-number">0</span>,<span class="hljs-number">0</span>,<span class="hljs-number">0</span>,<span class="hljs-number">6</span>],
            [<span class="hljs-number">0</span>,<span class="hljs-number">6</span>,<span class="hljs-number">0</span>,<span class="hljs-number">0</span>,<span class="hljs-number">0</span>,<span class="hljs-number">0</span>,<span class="hljs-number">2</span>,<span class="hljs-number">8</span>,<span class="hljs-number">0</span>],
            [<span class="hljs-number">0</span>,<span class="hljs-number">0</span>,<span class="hljs-number">0</span>,<span class="hljs-number">4</span>,<span class="hljs-number">1</span>,<span class="hljs-number">9</span>,<span class="hljs-number">0</span>,<span class="hljs-number">0</span>,<span class="hljs-number">5</span>],
            [<span class="hljs-number">0</span>,<span class="hljs-number">0</span>,<span class="hljs-number">0</span>,<span class="hljs-number">0</span>,<span class="hljs-number">8</span>,<span class="hljs-number">0</span>,<span class="hljs-number">0</span>,<span class="hljs-number">7</span>,<span class="hljs-number">9</span>]];

sudoku(puzzle);
<span class="hljs-comment">/* Should return
[[5,3,4,6,7,8,9,1,2],
[6,7,2,1,9,5,3,4,8],
[1,9,8,3,4,2,5,6,7],
[8,5,9,7,6,1,4,2,3],
[4,2,6,8,5,3,7,9,1],
[7,1,3,9,2,4,8,5,6],
[9,6,1,5,3,7,2,8,4],
[2,8,7,4,1,9,6,3,5],
[3,4,5,2,8,6,1,7,9]] </span></code></pre>
<pre style="display: none;"><code class="language-php">sudoku([
  [<span class="hljs-number">5</span>,<span class="hljs-number">3</span>,<span class="hljs-number">0</span>,<span class="hljs-number">0</span>,<span class="hljs-number">7</span>,<span class="hljs-number">0</span>,<span class="hljs-number">0</span>,<span class="hljs-number">0</span>,<span class="hljs-number">0</span>],
  [<span class="hljs-number">6</span>,<span class="hljs-number">0</span>,<span class="hljs-number">0</span>,<span class="hljs-number">1</span>,<span class="hljs-number">9</span>,<span class="hljs-number">5</span>,<span class="hljs-number">0</span>,<span class="hljs-number">0</span>,<span class="hljs-number">0</span>],
  [<span class="hljs-number">0</span>,<span class="hljs-number">9</span>,<span class="hljs-number">8</span>,<span class="hljs-number">0</span>,<span class="hljs-number">0</span>,<span class="hljs-number">0</span>,<span class="hljs-number">0</span>,<span class="hljs-number">6</span>,<span class="hljs-number">0</span>],
  [<span class="hljs-number">8</span>,<span class="hljs-number">0</span>,<span class="hljs-number">0</span>,<span class="hljs-number">0</span>,<span class="hljs-number">6</span>,<span class="hljs-number">0</span>,<span class="hljs-number">0</span>,<span class="hljs-number">0</span>,<span class="hljs-number">3</span>],
  [<span class="hljs-number">4</span>,<span class="hljs-number">0</span>,<span class="hljs-number">0</span>,<span class="hljs-number">8</span>,<span class="hljs-number">0</span>,<span class="hljs-number">3</span>,<span class="hljs-number">0</span>,<span class="hljs-number">0</span>,<span class="hljs-number">1</span>],
  [<span class="hljs-number">7</span>,<span class="hljs-number">0</span>,<span class="hljs-number">0</span>,<span class="hljs-number">0</span>,<span class="hljs-number">2</span>,<span class="hljs-number">0</span>,<span class="hljs-number">0</span>,<span class="hljs-number">0</span>,<span class="hljs-number">6</span>],
  [<span class="hljs-number">0</span>,<span class="hljs-number">6</span>,<span class="hljs-number">0</span>,<span class="hljs-number">0</span>,<span class="hljs-number">0</span>,<span class="hljs-number">0</span>,<span class="hljs-number">2</span>,<span class="hljs-number">8</span>,<span class="hljs-number">0</span>],
  [<span class="hljs-number">0</span>,<span class="hljs-number">0</span>,<span class="hljs-number">0</span>,<span class="hljs-number">4</span>,<span class="hljs-number">1</span>,<span class="hljs-number">9</span>,<span class="hljs-number">0</span>,<span class="hljs-number">0</span>,<span class="hljs-number">5</span>],
  [<span class="hljs-number">0</span>,<span class="hljs-number">0</span>,<span class="hljs-number">0</span>,<span class="hljs-number">0</span>,<span class="hljs-number">8</span>,<span class="hljs-number">0</span>,<span class="hljs-number">0</span>,<span class="hljs-number">7</span>,<span class="hljs-number">9</span>]
]); <span class="hljs-comment">/* =&gt; [
  [5,3,4,6,7,8,9,1,2],
  [6,7,2,1,9,5,3,4,8],
  [1,9,8,3,4,2,5,6,7],
  [8,5,9,7,6,1,4,2,3],
  [4,2,6,8,5,3,7,9,1],
  [7,1,3,9,2,4,8,5,6],
  [9,6,1,5,3,7,2,8,4],
  [2,8,7,4,1,9,6,3,5],
  [3,4,5,2,8,6,1,7,9]
] */</span></code></pre>
<pre style="display: none;"><code class="language-haskell"><span class="hljs-title">puzzle</span> = [[<span class="hljs-number">5</span>,<span class="hljs-number">3</span>,<span class="hljs-number">0</span>,<span class="hljs-number">0</span>,<span class="hljs-number">7</span>,<span class="hljs-number">0</span>,<span class="hljs-number">0</span>,<span class="hljs-number">0</span>,<span class="hljs-number">0</span>],
          [<span class="hljs-number">6</span>,<span class="hljs-number">0</span>,<span class="hljs-number">0</span>,<span class="hljs-number">1</span>,<span class="hljs-number">9</span>,<span class="hljs-number">5</span>,<span class="hljs-number">0</span>,<span class="hljs-number">0</span>,<span class="hljs-number">0</span>],
          [<span class="hljs-number">0</span>,<span class="hljs-number">9</span>,<span class="hljs-number">8</span>,<span class="hljs-number">0</span>,<span class="hljs-number">0</span>,<span class="hljs-number">0</span>,<span class="hljs-number">0</span>,<span class="hljs-number">6</span>,<span class="hljs-number">0</span>],
          [<span class="hljs-number">8</span>,<span class="hljs-number">0</span>,<span class="hljs-number">0</span>,<span class="hljs-number">0</span>,<span class="hljs-number">6</span>,<span class="hljs-number">0</span>,<span class="hljs-number">0</span>,<span class="hljs-number">0</span>,<span class="hljs-number">3</span>],
          [<span class="hljs-number">4</span>,<span class="hljs-number">0</span>,<span class="hljs-number">0</span>,<span class="hljs-number">8</span>,<span class="hljs-number">0</span>,<span class="hljs-number">3</span>,<span class="hljs-number">0</span>,<span class="hljs-number">0</span>,<span class="hljs-number">1</span>],
          [<span class="hljs-number">7</span>,<span class="hljs-number">0</span>,<span class="hljs-number">0</span>,<span class="hljs-number">0</span>,<span class="hljs-number">2</span>,<span class="hljs-number">0</span>,<span class="hljs-number">0</span>,<span class="hljs-number">0</span>,<span class="hljs-number">6</span>],
          [<span class="hljs-number">0</span>,<span class="hljs-number">6</span>,<span class="hljs-number">0</span>,<span class="hljs-number">0</span>,<span class="hljs-number">0</span>,<span class="hljs-number">0</span>,<span class="hljs-number">2</span>,<span class="hljs-number">8</span>,<span class="hljs-number">0</span>],
          [<span class="hljs-number">0</span>,<span class="hljs-number">0</span>,<span class="hljs-number">0</span>,<span class="hljs-number">4</span>,<span class="hljs-number">1</span>,<span class="hljs-number">9</span>,<span class="hljs-number">0</span>,<span class="hljs-number">0</span>,<span class="hljs-number">5</span>],
          [<span class="hljs-number">0</span>,<span class="hljs-number">0</span>,<span class="hljs-number">0</span>,<span class="hljs-number">0</span>,<span class="hljs-number">8</span>,<span class="hljs-number">0</span>,<span class="hljs-number">0</span>,<span class="hljs-number">7</span>,<span class="hljs-number">9</span>]]

<span class="hljs-title">sudoku</span> puzzle
<span class="hljs-comment">{- Should return
[[5,3,4,6,7,8,9,1,2],
 [6,7,2,1,9,5,3,4,8],
 [1,9,8,3,4,2,5,6,7],
 [8,5,9,7,6,1,4,2,3],
 [4,2,6,8,5,3,7,9,1],
 [7,1,3,9,2,4,8,5,6],
 [9,6,1,5,3,7,2,8,4],
 [2,8,7,4,1,9,6,3,5],
 [3,4,5,2,8,6,1,7,9]]
-}</span></code></pre>

### Solution