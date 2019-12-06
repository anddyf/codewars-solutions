### Problem:
<p>A chess board is normally played with 16 pawns and 16 other pieces, for this kata a variant will be played with only the pawns.  All other pieces will not be on the board.<br>For information on how pawns move, refer <a href="http://www.chesscorner.com/tutorial/basic/pawn/pawn.htm" target="_blank">here</a></p>
<p>Write a function that can turn a list of pawn moves into a visual representation of the resulting board.<br>A chess move will be represented by a string,</p>
<pre><code>&quot;c3&quot;</code></pre><p>This move represents a pawn moving to <code>c3</code>.  If it was white to move, the move would represent a pawn from <code>c2</code> moving to <code>c3</code>.  If it was black to move, a pawn would move from <code>c4</code> to <code>c3</code>, because black moves in the other direction.<br>The first move in the list and every other move will be for white&apos;s pieces.</p>
<p>The letter represents the column, while the number represents the row of the square where the piece is moving  </p>
<p>Captures are represented differently from normal moves:</p>
<pre><code>&quot;bxc3&quot;</code></pre><p>represents a pawn on the column represented by &apos;b&apos; (the second column) capturing a pawn on <code>c3</code>.</p>
<p>For the sake of this kata a chess board will be represented by a list like this one:  </p>
<pre><code>[[&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;],
 [&quot;p&quot;,&quot;p&quot;,&quot;p&quot;,&quot;p&quot;,&quot;p&quot;,&quot;p&quot;,&quot;p&quot;,&quot;p&quot;],
 [&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;],
 [&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;],
 [&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;],
 [&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;],
 [&quot;P&quot;,&quot;P&quot;,&quot;P&quot;,&quot;P&quot;,&quot;P&quot;,&quot;P&quot;,&quot;P&quot;,&quot;P&quot;],
 [&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;]]</code></pre><p>Here is an example of the board with the squares labeled:</p>
<pre><code>[[&quot;a8&quot;,&quot;b8&quot;,&quot;c8&quot;,&quot;d8&quot;,&quot;e8&quot;,&quot;f8&quot;,&quot;g8&quot;,&quot;h8&quot;],
 [&quot;a7&quot;,&quot;b7&quot;,&quot;c7&quot;,&quot;d7&quot;,&quot;e7&quot;,&quot;f7&quot;,&quot;g7&quot;,&quot;h7&quot;],
 [&quot;a6&quot;,&quot;b6&quot;,&quot;c6&quot;,&quot;d6&quot;,&quot;e6&quot;,&quot;f6&quot;,&quot;g6&quot;,&quot;h6&quot;],
 [&quot;a5&quot;,&quot;b5&quot;,&quot;c5&quot;,&quot;d5&quot;,&quot;e5&quot;,&quot;f5&quot;,&quot;g5&quot;,&quot;h5&quot;],
 [&quot;a4&quot;,&quot;b4&quot;,&quot;c4&quot;,&quot;d4&quot;,&quot;e4&quot;,&quot;f4&quot;,&quot;g4&quot;,&quot;h4&quot;],
 [&quot;a3&quot;,&quot;b3&quot;,&quot;c3&quot;,&quot;d3&quot;,&quot;e3&quot;,&quot;f3&quot;,&quot;g3&quot;,&quot;h3&quot;],
 [&quot;a2&quot;,&quot;b2&quot;,&quot;c2&quot;,&quot;d2&quot;,&quot;e2&quot;,&quot;f2&quot;,&quot;g2&quot;,&quot;h2&quot;],
 [&quot;a1&quot;,&quot;b1&quot;,&quot;c1&quot;,&quot;d1&quot;,&quot;e1&quot;,&quot;f1&quot;,&quot;g1&quot;,&quot;h1&quot;]]</code></pre><p>White pawns are represented by capital <code>&apos;P&apos;</code> while black pawns are lowercase <code>&apos;p&apos;</code>.  </p>
<p>A few examples</p>
<pre><code>If the list/array of moves is: [&quot;c3&quot;]
&gt;&gt;&gt;
[[&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;],
 [&quot;p&quot;,&quot;p&quot;,&quot;p&quot;,&quot;p&quot;,&quot;p&quot;,&quot;p&quot;,&quot;p&quot;,&quot;p&quot;],
 [&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;],
 [&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;],
 [&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;],
 [&quot;.&quot;,&quot;.&quot;,&quot;P&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;],
 [&quot;P&quot;,&quot;P&quot;,&quot;.&quot;,&quot;P&quot;,&quot;P&quot;,&quot;P&quot;,&quot;P&quot;,&quot;P&quot;],
 [&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;]]</code></pre><p>add a few more moves,</p>
<pre><code>If the list/array of moves is: [&quot;d4&quot;, &quot;d5&quot;, &quot;f3&quot;, &quot;c6&quot;, &quot;f4&quot;]
&gt;&gt;&gt;
[[&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;],
 [&quot;p&quot;,&quot;p&quot;,&quot;.&quot;,&quot;.&quot;,&quot;p&quot;,&quot;p&quot;,&quot;p&quot;,&quot;p&quot;],
 [&quot;.&quot;,&quot;.&quot;,&quot;p&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;],
 [&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;p&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;],
 [&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;P&quot;,&quot;.&quot;,&quot;P&quot;,&quot;.&quot;,&quot;.&quot;],
 [&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;],
 [&quot;P&quot;,&quot;P&quot;,&quot;P&quot;,&quot;.&quot;,&quot;P&quot;,&quot;.&quot;,&quot;P&quot;,&quot;P&quot;],
 [&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;]]</code></pre><p>now to add a capture...</p>
<pre><code>If the list/array of moves is: [&quot;d4&quot;, &quot;d5&quot;, &quot;f3&quot;, &quot;c6&quot;, &quot;f4&quot;, &quot;c5&quot;, &quot;dxc5&quot;]
&gt;&gt;&gt;
[[&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;],
 [&quot;p&quot;,&quot;p&quot;,&quot;.&quot;,&quot;.&quot;,&quot;p&quot;,&quot;p&quot;,&quot;p&quot;,&quot;p&quot;],
 [&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;],
 [&quot;.&quot;,&quot;.&quot;,&quot;P&quot;,&quot;p&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;],
 [&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;P&quot;,&quot;.&quot;,&quot;.&quot;],
 [&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;],
 [&quot;P&quot;,&quot;P&quot;,&quot;P&quot;,&quot;.&quot;,&quot;P&quot;,&quot;.&quot;,&quot;P&quot;,&quot;P&quot;],
 [&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;]]</code></pre><p>If an invalid move (a move is added that no pawn could perform, a capture where there is no piece, a move to a square where there is already a piece, etc.) is found in the list of moves, return &apos;(move) is invalid&apos;.</p>
<pre><code class="language-python">If the list/array of moves <span class="hljs-keyword">is</span>: [<span class="hljs-string">&quot;e6&quot;</span>]
&gt;&gt;&gt;
<span class="hljs-string">&quot;e6 is invalid&quot;</span></code></pre>
<pre style="display: none;"><code class="language-java">If the list/array of moves is: [<span class="hljs-string">&quot;e6&quot;</span>]
&gt;&gt;&gt;
[[<span class="hljs-string">&quot;e6 is invalid&quot;</span>]]</code></pre>
<pre><code class="language-python">If the list/array of moves <span class="hljs-keyword">is</span>: [<span class="hljs-string">&quot;e4&quot;</span>, <span class="hljs-string">&quot;d5&quot;</span>, <span class="hljs-string">&quot;exf5&quot;</span>]
&gt;&gt;&gt;
<span class="hljs-string">&quot;exf5 is invalid&quot;</span></code></pre>
<pre style="display: none;"><code class="language-java">If the list/array of moves is: [<span class="hljs-string">&quot;e4&quot;</span>, <span class="hljs-string">&quot;d5&quot;</span>, <span class="hljs-string">&quot;exf5&quot;</span>]
&gt;&gt;&gt;
[[<span class="hljs-string">&quot;exf5 is invalid&quot;</span>]]</code></pre>
<p>The list passed to <code>pawn_move_tracker / PawnMoveTracker.movePawns</code> will always be a list of strings in the form (regex pattern): <code>[a-g][1-8]</code> or <code>[a-g]x[a-g][1-8]</code>.  </p>
<h1>Notes:</h1>

<ul>
<li>In the case of a capture, the first lowercase letter will always be adjacent to the second in the alphabet, a move like <code>axc5</code> will never be passed.</li>
<li>A pawn can move two spaces on its first move</li>
<li>There are no cases with the &apos;en-passant&apos; rule.</li>
</ul>

### Solution