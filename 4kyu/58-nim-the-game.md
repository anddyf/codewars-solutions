### Problem:
<p>This kata explores writing an AI for a two player, turn based game called <em>NIM</em>.</p>
<h2 id="the-board">The Board</h2>
<p>The board starts out with several piles of straw.  Each pile has a random number of straws.</p>
<pre><code>Pile 0: ||||

Pile 1: ||

Pile 2: |||||

Pile 3: |

Pile 4: ||||||

...or more concisely: [4,2,5,1,6]</code></pre><h2 id="the-rules">The Rules</h2>
<ul>
<li>The players take turns picking a pile, and removing any number of straws from the pile they pick</li>
<li>A player must pick at least one straw</li>
<li>If a player picks the last straw, she wins!</li>
</ul>
<h2 id="the-task">The Task</h2>
<p>In this kata, you have to write an AI to play the straw picking game.</p>
<p>You have to encode an AI in a function <code>choose_move</code> (or <code>chooseMove</code>, or <code>choose-move</code>) that takes a board, represented as a list of positive integers, and returns</p>
<pre><code class="language-python">(pile_index, number_of_straws)</code></pre>
<pre style="display: none;"><code class="language-haskell">(pileIndex, numberOfStraws)</code></pre>
<pre style="display: none;"><code class="language-javascript">[pile_index, number_of_straws]</code></pre>
<pre style="display: none;"><code class="language-clojure">[pile-index, number-of-straws]</code></pre>
<p>Which refers to an index of a pile on the board, and some none-zero number of straws to draw from that pile.</p>
<p>The test suite is written so that your AI is expected to play 50 games and win every game it plays.</p>

### Solution