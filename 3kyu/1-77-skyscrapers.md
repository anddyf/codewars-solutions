### Problem:
<p>In a grid of 7 by 7 squares you want to place a skyscraper in each square with only some clues:</p>
<ul>
<li>The height of the skyscrapers is between 1 and 7</li>
<li>No two skyscrapers in a row or column may have the same number of floors</li>
<li>A clue is the number of skyscrapers that you can see in a row or column from the outside</li>
<li>Higher skyscrapers block the view of lower skyscrapers located behind them</li>
</ul>
<p>Can you write a program that can solve this puzzle in time?</p>
<p>This kata is based on <a href="https://www.codewars.com/kata/4-by-4-skyscrapers/" target="_blank">4 By 4 Skyscrapers</a> and <a href="https://www.codewars.com/kata/6-by-6-skyscrapers/" target="_blank">6 By 6 Skyscrapers</a> by <a href="https://www.codewars.com/users/FrankK" target="_blank">FrankK</a>. By now, examples should be superfluous; you should really solve Frank&apos;s kata first, and then probably optimise some more. A naive solution that solved a 4&#xD7;4 puzzle within 12 seconds might need time somewhere beyond the Heat Death of the Universe for this size. It&apos;s quite bad.</p>
<h1 id="task">Task</h1>
<p>Create</p>
<pre style="display: none;"><code class="language-go"><span class="hljs-function"><span class="hljs-keyword">func</span> <span class="hljs-title">SolvePuzzle</span><span class="hljs-params">(clues []<span class="hljs-keyword">int</span>)</span> [][]<span class="hljs-title">int</span></span> {}</code></pre>
<pre><code class="language-javascript"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">solvePuzzle</span>(<span class="hljs-params">clues</span>)</span></code></pre>
<pre style="display: none;"><code class="language-coffeescript"><span class="hljs-function"><span class="hljs-title">solvePuzzle</span> = <span class="hljs-params">(clues)</span> -&gt;</span></code></pre>
<pre style="display: none;"><code class="language-python"><span class="hljs-function"><span class="hljs-keyword">def</span> <span class="hljs-title">solve_puzzle</span><span class="hljs-params">(clues)</span></span></code></pre>
<pre style="display: none;"><code class="language-c"><span class="hljs-function"><span class="hljs-keyword">int</span> **<span class="hljs-title">SolvePuzzle</span><span class="hljs-params">(<span class="hljs-keyword">int</span> *clues)</span></span>;</code></pre>
<pre style="display: none;"><code class="language-cpp"><span class="hljs-built_in">std</span>::<span class="hljs-built_in">vector</span>&lt;<span class="hljs-built_in">std</span>::<span class="hljs-built_in">vector</span>&lt;<span class="hljs-keyword">int</span>&gt;&gt; SolvePuzzle(<span class="hljs-keyword">const</span> <span class="hljs-built_in">std</span>::<span class="hljs-built_in">vector</span>&lt;<span class="hljs-keyword">int</span>&gt; &amp;clues);</code></pre>
<pre style="display: none;"><code class="language-csharp"><span class="hljs-keyword">public</span> <span class="hljs-keyword">static</span> <span class="hljs-keyword">int</span>[][] SolvePuzzle(<span class="hljs-keyword">int</span>[] clues)</code></pre>
<pre style="display: none;"><code class="language-ruby"><span class="hljs-function"><span class="hljs-keyword">def</span> <span class="hljs-title">solve_puzzle</span><span class="hljs-params">(clues)</span></span></code></pre>
<pre style="display: none;"><code class="language-java">Skyscrapers.solvePuzzle(<span class="hljs-keyword">int</span>[] clues)</code></pre>
<pre style="display: none;"><code class="language-clojure">(<span class="hljs-name"><span class="hljs-builtin-name">defn</span></span> solve-puzzle [clues] )</code></pre>
<pre style="display: none;"><code class="language-fsharp">solvePuzzle (clues :int[]) : int[][]</code></pre>
<pre style="display: none;"><code class="language-erlang"><span class="hljs-function"><span class="hljs-title">solvePuzzle</span><span class="hljs-params">(Clues)</span></span></code></pre>
<pre style="display: none;"><code class="language-kotlin">Skyscrapers.solvePuzzle(IntArray clues): Array&lt;IntArray&gt;</code></pre>
<p>Clues are passed in as an <code>Array(28)</code> of <code>integers</code>.<br>The return value is an <code>Array(7)</code> of <code>Array(7)</code> of <code>integers</code>.</p>
<p>All puzzles have one possible solution.<br>All this is the same as with the earlier kata.</p>
<p>Caveat: The tests for this kata have been tailored to run in ~10 seconds with the JavaScript reference solution. You&apos;ll need to do <em>better</em> than that! Please note the <code>optimization</code> tag.</p>
<p><a href="http://www.conceptispuzzles.com/" target="_blank">Conceptis Puzzles</a> have <a href="http://www.conceptispuzzles.com/index.aspx?uri=puzzle/skyscrapers" target="_blank">heaps of these puzzles</a>, from 5&#xD7;5 (they don&apos;t even bother with 4&#xD7;4) up to 7&#xD7;7 and unsolvable within CodeWars time constraints. Old puzzles from there were used for the tests. They also have lots of other logic, numbers and mathematical puzzles, and their puzzle user interface is generally nice, very nice.<br>(It is, however, Flash, and their mobile offerings are far fewer. Desktop PC recommended.)</p>

### Solution