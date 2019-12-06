### Problem:
<h1 id="task">Task</h1>
<p> An <code>amazon</code> (also known as a queen+knight compound) is an imaginary chess piece that can move like a <code>queen</code> or a <code>knight</code> (or, equivalently, like a <code>rook</code>, <code>bishop</code>, or <code>knight</code>). The diagram below shows all squares which the amazon attacks from e4 (circles represent knight-like moves while crosses correspond to queen-like moves).</p>
<p> <img src="https://codefightsuserpics.s3.amazonaws.com/tasks/amazonCheckmate/img/amazon.png?_tm=1473934566013" alt></p>
<p> Recently you&apos;ve come across a diagram with only three pieces left on the board: a <code>white amazon</code>, <code>white king</code> and <code>black king</code>. </p>
<p> It&apos;s black&apos;s move. You don&apos;t have time to determine whether the game is over or not, but you&apos;d like to figure it out in your head. </p>
<p> Unfortunately, the diagram is smudged and you can&apos;t see the position of the <code>black king</code>, so it looks like you&apos;ll have to check them all.</p>
<p> Given the positions of white pieces on a standard chessboard, determine the number of possible black king&apos;s positions such that: </p>
<ul>
<li><p>It&apos;s a checkmate (i.e. black&apos;s king is under amazon&apos;s 
attack and it cannot make a valid move);</p>
</li>
<li><p>It&apos;s a check (i.e. black&apos;s king is under amazon&apos;s attack 
but it can reach a safe square in one move);</p>
</li>
<li><p>It&apos;s a stalemate (i.e. black&apos;s king is on a safe square 
but it cannot make a valid move);</p>
</li>
<li><p>Black&apos;s king is on a safe square and it can make a valid move.</p>
</li>
</ul>
<p>Note that two kings cannot be placed on two adjacent squares (including two diagonally adjacent ones).</p>
<h1 id="example">Example</h1>
<p> For <code>king = &quot;d3&quot; and amazon = &quot;e4&quot;</code>, the output should be <code>[5, 21, 0, 29]</code>.</p>
<p> <img src="https://codefightsuserpics.s3.amazonaws.com/tasks/amazonCheckmate/img/example1.png?_tm=1473934566299" alt></p>
<p> <code>Red crosses</code> correspond to the <code>checkmate</code> positions, <code>orange pluses</code> refer to <code>checks</code> and <code>green circles</code> denote <code>safe squares</code>.</p>
<p> For <code>king = &quot;a1&quot; and amazon = &quot;g5&quot;</code>, the output should be <code>[0, 29, 1, 29]</code>.</p>
<p> <img src="https://codefightsuserpics.s3.amazonaws.com/tasks/amazonCheckmate/img/example2.png?_tm=1473934566670" alt></p>
<p> <code>Stalemate</code> position is marked by a <code>blue square</code>.</p>
<h1 id="input">Input</h1>
<ul>
<li>String <code>king</code></li>
</ul>
<p>Position of white&apos;s king in chess notation.</p>
<ul>
<li>String <code>amazon</code></li>
</ul>
<p>Position of white&apos;s amazon in the same notation.</p>
<p>Constraints: <code>amazon &#x2260; king.</code></p>
<h1 id="output">Output</h1>
<p>An array of four integers, each equal to the number of black&apos;s king positions corresponding to a specific situation. The integers should be presented in the same order as the situations were described, <code>i.e. 0 for checkmates, 1 for checks, etc</code>.</p>

### Solution