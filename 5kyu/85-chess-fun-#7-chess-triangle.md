### Problem:
<h1 id="task">Task</h1>
<p> Consider a <code>bishop</code>, a <code>knight</code> and a <code>rook</code> on an <code>n &#xD7; m</code> chessboard. They are said to form a <code>triangle</code> if each piece attacks exactly one other piece and is attacked by exactly one piece. </p>
<p> Calculate the number of ways to choose positions of the pieces to form a triangle.</p>
<p> Note that the bishop attacks pieces sharing the common diagonal with it; the rook attacks in horizontal and vertical directions; and, finally, the knight attacks squares which are two squares horizontally and one square vertically, or two squares vertically and one square horizontally away from its position.</p>
<p> <img src="https://codefightsuserpics.s3.amazonaws.com/tasks/chessTriangle/img/moves.png?_tm=1473934712872" alt></p>
<h1 id="example">Example</h1>
<p> For <code>n = 2 and m = 3</code>, the output should be <code>8</code>.</p>
<p> <img src="https://codefightsuserpics.s3.amazonaws.com/tasks/chessTriangle/img/combinations.png?_tm=1473934713038" alt></p>
<h1 id="inputoutput">Input/Output</h1>
<ul>
<li><p><code>[input]</code> integer <code>n</code></p>
<p>  Constraints: <code>1 &#x2264; n &#x2264; 40.</code></p>
</li>
</ul>
<ul>
<li><p><code>[input]</code> integer <code>m</code></p>
<p> Constraints: <code>1 &#x2264; m &#x2264; 40, 3 &#x2264; n x m</code>.</p>
</li>
</ul>
<ul>
<li><code>[output]</code> an integer</li>
</ul>

### Solution