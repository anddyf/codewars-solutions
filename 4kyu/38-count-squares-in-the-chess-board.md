### Problem:
<h1 id="task">Task</h1>
<p>You are given a <code>chessBoard</code>, a 2d integer array that contains only <code>0</code> or <code>1</code>. <code>0</code> represents a chess piece and <code>1</code> represents a empty grid. It&apos;s always square shape.</p>
<p>Your task is to count the number of squares made of empty grids.</p>
<p>The smallest size of the square is <code>2 x 2</code>. The biggest size of the square is <code>n x n</code>, where <code>n</code> is the size of chess board. </p>
<p>A square can overlap the part of other squares. For example:</p>
<p>If</p>
<pre><code>chessBoard=[
  [1,1,1],
  [1,1,1],
  [1,1,1]
]</code></pre><p>...there are four 2 x 2 squares in the chess board:</p>
<pre><code>[1,1, ]  [ ,1,1]  [ , , ]  [ , , ]
[1,1, ]  [ ,1,1]  [1,1, ]  [ ,1,1]
[ , , ]  [ , , ]  [1,1, ]  [ ,1,1]</code></pre><p>And one 3 x 3 square:</p>
<pre><code>[1,1,1]
[1,1,1]
[1,1,1]</code></pre><p>Your output should be an object/dict. Each item in it should be: <code>size:number</code>, where size is the square&apos;s size, and number is the number of squares. </p>
<p>For example, if there are four <code>2 x 2</code> squares and one <code>3 x 3</code> square in the chess board, the output should be: <code>{2:4,3:1}</code> (or any equivalent hash structure in your language). The order of items is not important, <code>{3:1,2:4}</code> is also a valid output.</p>
<p>If there is no square in the chess board, just return <code>{}</code>.</p>
<h1 id="note">Note</h1>
<ul>
<li><code>2 &lt;= chessBoard.length &lt;= 400</code></li>
</ul>
<ul>
<li><p><code>5</code> fixed testcases</p>
</li>
<li><p><code>100</code> random testcases, testing for correctness of solution</p>
</li>
<li><p><code>100</code> random testcases, testing for performance of code</p>
</li>
<li><p>All inputs are valid.</p>
</li>
<li><p>Pay attention to code performance.</p>
</li>
<li><p>If my reference solution gives the wrong result in the random tests, please let me know(post an issue). </p>
</li>
</ul>
<h1 id="example">Example</h1>
<p>For </p>
<pre><code>chessBoard = [
  [1,1],
  [1,1]
]</code></pre><p>the output should be <code>{2:1}</code>.</p>
<p>For </p>
<pre><code>chessBoard = [
  [0,1],
  [1,1]
]</code></pre><p>the output should be <code>{}</code>.</p>
<p>For </p>
<pre><code>chessBoard = [
  [1,1,1],
  [1,1,1],
  [1,1,1]
]</code></pre><p>the output should be <code>{2:4,3:1}</code>.</p>
<p>For </p>
<pre><code>chessBoard = [
  [1,1,1],
  [1,0,1],
  [1,1,1]
]</code></pre><p>the output should be <code>{}</code>.</p>

### Solution