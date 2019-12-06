### Problem:
<h1 id="description">Description</h1>
<p>In this challenge, you will be creating a go board that users can play a game of go on. An understanding of the rules of go should be sufficient enough to complete this kata.</p>
<p>The main goals for this kata:</p>
<ul>
<li>Creating a go board to a specific size.</li>
<li>Placing go stones on the board. (White and Black alternating).</li>
<li>Capturing stones and removing them from the board.</li>
<li>Catching invalid moves (throw an <code>IllegalArgumentException</code> in Java).</li>
<li>Placing Handicap stones.</li>
</ul>
<p>Scoring is not covered in this kata.</p>
<h1 id="details">Details</h1>
<h3 id="creating-a-board">Creating a board</h3>
<p>Outputting the board after it has been created should return an array of arrays filled with dots (representing empty spaces).</p>
<pre><code class="language-javascript"><span class="hljs-keyword">let</span> game = <span class="hljs-keyword">new</span> Go(<span class="hljs-number">9</span>);
game.board;</code></pre>
<pre style="display: none;"><code class="language-coffeescript">game = <span class="hljs-keyword">new</span> Go <span class="hljs-number">9</span>
game.board</code></pre>
<pre style="display: none;"><code class="language-python">game = Go(<span class="hljs-number">9</span>)
game.board</code></pre>
<pre style="display: none;"><code class="language-java">Go game = <span class="hljs-keyword">new</span> Go(<span class="hljs-number">9</span>);
<span class="hljs-keyword">char</span>[][] board = game.getBoard();</code></pre>
<h5 id="output">output</h5>
<pre><code>. . . . . . . . .
. . . . . . . . .
. . . . . . . . .
. . . . . . . . .
. . . . . . . . .
. . . . . . . . .
. . . . . . . . .
. . . . . . . . .
. . . . . . . . .</code></pre><h3 id="placing-stones-on-board">Placing stones on board</h3>
<p>When given valid coordinates (one or several arguments, see example tests) the program should place either a white stone <code>o</code> or a black stone <code>x</code> in the correct position. </p>
<p><em>Note that the letter I is omitted from possible coordinates</em>.</p>
<pre><code class="language-javascript">game.move(<span class="hljs-string">&apos;7A&apos;</span>);
game.move(<span class="hljs-string">&apos;1A&apos;</span>);
game.board;</code></pre>
<pre style="display: none;"><code class="language-coffeescript">game.move <span class="hljs-string">&apos;7A&apos;</span>
game.move <span class="hljs-string">&apos;1A&apos;</span>
game.board</code></pre>
<pre style="display: none;"><code class="language-python">game.move(<span class="hljs-string">&apos;7A&apos;</span>)
game.move(<span class="hljs-string">&apos;1A&apos;</span>)
game.board</code></pre>
<pre style="display: none;"><code class="language-java">game.move(<span class="hljs-string">&quot;7A&quot;</span>);
game.move(<span class="hljs-string">&quot;1A&quot;</span>);
<span class="hljs-keyword">char</span>[][] board = game.getBoard();</code></pre>
<h5 id="output-1">output</h5>
<pre><code>  A B C D E F G H J
9 . . . . . . . . .
8 . . . . . . . . .
7 x . . . . . . . .
6 . . . . . . . . .
5 . . . . . . . . .
4 . . . . . . . . .
3 . . . . . . . . .
2 . . . . . . . . .
1 o . . . . . . . .</code></pre><h3 id="capturing">Capturing</h3>
<h5 id="liberties">liberties</h5>
<p>As a side note, to understand capturing you need to understand the concept of liberties. They are the spaces surounding a stone/stones that are not out of bounds and are not occupied by the opponents stones. Take a look at these examples.</p>
<pre><code>Black has 4 liberties     Group of black has 5 liberties
. . . . . . . . .         . . . . . . . . .
. . . . . . . . .         . . . . . . . . .
. . . . . o . . .         . . . . o . . . .
. . . 1 . . . . .         . . . 1 o . . . .
. . 2 x 4 . . . .         . . 2 x x o . . .
. . . 3 . . . . .         . . . 3 x 5 . . .
. . . . . . . . .         . . . . 4 . . . .
. . . . . . . . .         . . . . . . . . .
. . . . . . . . .         . . . . . . . . .  </code></pre><p>When a group of white or black stones has no more liberties the group should be removed from the board. Take this board for example.</p>
<pre><code>. x o o o o o . .
. x o o o o o x .
. . x o o o x . .
. . . x o o x . .
. . x . x x . . .
. . . . . . . o .
. . x . . . . . .
. . . x . . o . .
. . . . . . . . .</code></pre><p>Calling <code>game.move(&apos;9H&apos;);</code> will remove the white stones from the board.</p>
<pre><code>. x . . . . . x .
. x . . . . . x .
. . x . . . x . .
. . . x . . x . .
. . x . x x . . .
. . . . . . . o .
. . x . . . . . .
. . . x . . o . .
. . . . . . . . .</code></pre><h5 id="self-capturing">Self-capturing</h5>
<p>Placing a white stone on the 1 below would be an illegal move.</p>
<pre><code>. x o o o o o 1 x
. x o o o o o x .
. . x o o o x . .
. . . x o o x . .
. . x . x x . . .
. . . . . . . o .
. . x . . . . . .
. . . x . . o . .
. . . . . . . . .</code></pre><h3 id="invalid-moves">Invalid moves</h3>
<ul>
<li>Simple Ko Rule should be implemented (One may not play in such a way as to recreate the board position following one&apos;s previous move).</li>
<li>Self-capturing (suicide) is illegal.</li>
<li>Cannot play out of bounds.</li>
<li>Cannot place a stone on another stone.</li>
</ul>
<h3 id="ko-rule">KO Rule</h3>
<p>To further explain the KO rule, take a look at these go boards.</p>
<pre><code>. . o . o x . . .   . . o x . x . . .   . . o . o x . . .
. . . o x . . . .   . . . o x . . . .   . . . o x . . . .
. . . . . . . . .   . . . . . . . . .   . . . . . . . . .
. . . . . . . . .   . . . . . . . . .   . . . . . . . . .
. . . . . . . . .   . . . . . . . . .   . . . . . . . . .
. . . . . . . . .   . . . . . . . . .   . . . . . . . . .
. . . . . . . . .   . . . . . . . . .   . . . . . . . . .
. . . . . . . . .   . . . . . . . . .   . . . . . . . . .
. . . . . . . . .   . . . . . . . . .   . . . . . . . . .
Move 1              Move 2              Move 3 (Illegal)</code></pre><p>These moves could loop over and over again. That is why move 3 is illegal according to simple KO rule, because it recreates the same board as the board after the previous move by white (move 1).</p>
<p><em>Note :</em> If any illegal move is attempted, an error should be thrown and the board rolled back to the previous board before the illegal move. That player will have another chance to place their stone.</p>
<h3 id="handicap-stones">Handicap stones</h3>
<p>Handicap stones are used to make a game more fair when two players of different ranks play.</p>
<p>The order of handicap stones (least to greatest).</p>
<pre><code>9x9                13x13
. . . . . . . . .  . . . . . . . . . . . . .
. . . . . . . . .  . . . . . . . . . . . . .
. . 4 . . . 1 . .  . . . . . . . . . . . . .
. . . . . . . . .  . . . 4 . . 8 . . 1 . . .
. . . . 5 . . . .  . . . . . . . . . . . . . 
. . . . . . . . .  . . . . . . . . . . . . .
. . 2 . . . 3 . .  . . . 6 . . 5 . . 7 . . .
. . . . . . . . .  . . . . . . . . . . . . .
. . . . . . . . .  . . . . . . . . . . . . .
                   . . . 2 . . 9 . . 3 . . .
                   . . . . . . . . . . . . .
                   . . . . . . . . . . . . . 
                   . . . . . . . . . . . . .

19x19
. . . . . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . . . . .
. . . 4 . . . . . 8 . . . . . 1 . . .
. . . . . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . . . . .
. . . 6 . . . . . 5 . . . . . 7 . . .
. . . . . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . . . . .
. . . 2 . . . . . 9 . . . . . 3 . . .
. . . . . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . . . . .
</code></pre><p>This next example should place 3 handicap stones on a 19x19 board in the correct order mentioned above.</p>
<pre><code class="language-javascript"><span class="hljs-keyword">let</span> game = <span class="hljs-keyword">new</span> Go(<span class="hljs-number">19</span>);
game.handicapStones(<span class="hljs-number">3</span>);</code></pre>
<pre style="display: none;"><code class="language-coffeescript">game = <span class="hljs-keyword">new</span> Go <span class="hljs-number">19</span>
game.handicapStones <span class="hljs-number">3</span></code></pre>
<pre style="display: none;"><code class="language-python">game = Go(<span class="hljs-number">19</span>)
game.handicap_stones(<span class="hljs-number">3</span>)</code></pre>
<pre style="display: none;"><code class="language-java">Go game = <span class="hljs-keyword">new</span> Go(<span class="hljs-number">19</span>);
game.handicapStones(<span class="hljs-number">3</span>);</code></pre>
<h3 id="invalid-handicap-usage">Invalid handicap usage</h3>
<ul>
<li>Handicap stones can only be placed on 9x9, 13x13 and 19x19 boards. Throw an error otherwise.</li>
<li>A player cannot place down handicap stones after the first move has been made or handicap stones have already been placed. Throw an error if this happens.</li>
<li>Placing too many handicap stones for a given board should throw an error.</li>
</ul>
<h3 id="breakdown-of-a-turn">Breakdown of a turn</h3>
<p>For clarity, let&apos;s go over the general flow of each turn throughout the game.</p>
<ul>
<li>After a player makes a move, all opponent stones without liberties should be captured and removed from the board.</li>
<li>Check to make sure a move is valid before proceeding. A player should not be able to make a move that will result in the loss of their stones due to lack of liberties (Suicide). The board also shouldn&apos;t be identical to the one after the previous move made by the same player (KO Rule).</li>
<li>Rollback and let the player try again if a move is illegal.</li>
</ul>
<h1 id="additional-functionality">Additional functionality</h1>
<h3 id="size">size</h3>
<p>Given this new game.</p>
<pre><code class="language-javascript"><span class="hljs-keyword">let</span> game = <span class="hljs-keyword">new</span> Go(<span class="hljs-number">9</span>,<span class="hljs-number">6</span>);</code></pre>
<pre style="display: none;"><code class="language-coffeescript">game = <span class="hljs-keyword">new</span> Go <span class="hljs-number">9</span>,<span class="hljs-number">6</span></code></pre>
<pre style="display: none;"><code class="language-python">game = Go(<span class="hljs-number">9</span>,<span class="hljs-number">6</span>)</code></pre>
<pre style="display: none;"><code class="language-java">Go game = <span class="hljs-keyword">new</span> Go(<span class="hljs-number">9</span>,<span class="hljs-number">6</span>);</code></pre>
<p>When <code>game.size</code> (<code>game.getSize()</code> in java) is called, it should return a mapping <code>{&quot;height&quot;: 9, &quot;width&quot;: 6}</code>.</p>
<h3 id="rollback">rollback</h3>
<p>User should be able to rollback a set amount of turns on the go board.</p>
<h3 id="get-position">get position</h3>
<p>User should be able to get status of a particular position on the board (x, o, or .).</p>
<pre><code class="language-javascript">game.getPosition(<span class="hljs-string">&quot;1A&quot;</span>) <span class="hljs-comment">// x, o , or .</span></code></pre>
<pre style="display: none;"><code class="language-coffeescript">game.getPosition <span class="hljs-string">&apos;1A&apos;</span> <span class="hljs-comment"># x, o , or .</span></code></pre>
<pre style="display: none;"><code class="language-python">game.get_position(<span class="hljs-string">&quot;1A&quot;</span>) <span class="hljs-comment"># x, o, or .</span></code></pre>
<h3 id="turn">turn</h3>
<p>Get the current turn color.</p>
<pre><code class="language-javascript">game.turn <span class="hljs-comment">// &quot;black&quot;</span>
game.pass()
game.turn <span class="hljs-comment">// &quot;white&quot;</span></code></pre>
<pre style="display: none;"><code class="language-coffeescript">game.turn <span class="hljs-comment"># &apos;black&apos;</span>
game.pass()
game.turn <span class="hljs-comment"># &apos;white&apos;</span></code></pre>
<pre style="display: none;"><code class="language-python">game.turn <span class="hljs-comment"># &quot;black&quot;</span>
game.pass_turn()
game.turn <span class="hljs-comment"># &quot;white&quot;</span></code></pre>
<pre style="display: none;"><code class="language-java">game.getTurn();  <span class="hljs-comment">// &quot;black&quot;</span>
game.passTurn();
game.getTurn();  <span class="hljs-comment">// &quot;white&quot;</span></code></pre>
<h3 id="reset">reset</h3>
<p>Resetting the board should clear all of the stones from it and set the turn to <code>&quot;black&quot;</code>.</p>
<h3 id="pass">pass</h3>
<p>User should be able to pass their turn.</p>
<p><em>Note :</em> Passing should count as a turn, so rollbacks need to account for this.</p>
<h1 id="language-specifics">Language Specifics</h1>
<p><code>Python</code></p>
<ul>
<li>Methods are in snake case (<code>function_name</code>).</li>
<li>Creating a game does not need <code>new</code>.</li>
<li>The <code>pass</code> method is <code>pass_turn</code>.</li>
</ul>
<p><code>JavaScript</code>, <code>Coffeescript</code> &amp; <code>Java</code></p>
<ul>
<li>Methods are in camel case (<code>functionName</code>).</li>
</ul>

### Solution