### Problem:
<style type="text/css">
    table {
        width: 236px;
    }

    table, tr, td {
        border: 0px;
    }
</style>
<p>In a grid of 4 by 4 squares you want to place a skyscraper in each square with only some clues:</p>
<ul>
    <li>The height of the skyscrapers is between 1 and 4</li>
    <li>No two skyscrapers in a row or column may have the same number of floors</li>
    <li>A clue is the number of skyscrapers that you can see in a row or column from the outside</li>
    <li>Higher skyscrapers block the view of lower skyscrapers located behind them</li>
</ul>
<br>
Can you write a program that can solve this puzzle?
<br>
<br>
<b style="font-size:16px">Example:</b>
<br>
<br>
To understand how the puzzle works, this is an example of a row with 2 clues. Seen from the left side there are 4 buildings visible while seen from the right side only 1:
<br>
<br>
<table>
    <tbody><tr>
        <td style="text-align:center; height:16px;">&#xA0;4</td>
        <td style="text-align:center; border: solid 1px;height:16px;border-color:gray;">&#xA0;&#xA0;&#xA0;&#xA0;</td>
        <td style="text-align:center; border: solid 1px;height:16px;border-color:gray;">&#xA0;&#xA0;&#xA0;&#xA0;</td>
        <td style="text-align:center; border: solid 1px;height:16px;border-color:gray;">&#xA0;&#xA0;&#xA0;&#xA0;</td>
        <td style="text-align:center; border: solid 1px;height:16px;border-color:gray;">&#xA0;&#xA0;&#xA0;&#xA0;</td>
        <td style="text-align:center; height:16px;">&#xA0;1</td>
    </tr>
</tbody></table>
<br>
There is only one way in which the skyscrapers can be placed. From left-to-right all four buildings must be visible and no building may hide behind another building:
<br>
<br>
<table>
    <tbody><tr>
        <td style="text-align:center; height:16px;">&#xA0;4</td>
        <td style="text-align:center; border: solid 1px;height:16px;border-color:gray;">&#xA0;1</td>
        <td style="text-align:center; border: solid 1px;height:16px;border-color:gray;">&#xA0;2</td>
        <td style="text-align:center; border: solid 1px;height:16px;border-color:gray;">&#xA0;3</td>
        <td style="text-align:center; border: solid 1px;height:16px;border-color:gray;">&#xA0;4</td>
        <td style="text-align:center; height:16px;">&#xA0;1</td>
    </tr>
</tbody></table>
<br>
Example of a 4 by 4 puzzle with the solution:
<br>
<br>
<table>
    <tbody><tr>
        <td style="text-align:center; border: 0px;height:16px;">&#xA0;&#xA0;</td>
        <td style="text-align:center; border-bottom: solid 1px;height:16px;border-color:gray;">&#xA0;&#xA0;&#xA0;&#xA0;</td>
        <td style="text-align:center; border-bottom: solid 1px;height:16px;border-color:gray;">&#xA0;&#xA0;&#xA0;&#xA0;</td>
        <td style="text-align:center; border-bottom: solid 1px;height:16px;border-color:gray;">&#xA0;1</td>
        <td style="text-align:center; border-bottom: solid 1px;height:16px;border-color:gray;">&#xA0;2</td>
        <td style="text-align:center; border: 0px;height:16px;">&#xA0;&#xA0;</td>
    </tr>
    <tr>
        <td style="text-align:center; border: 0px;height:16px;">&#xA0;&#xA0;</td>
        <td style="text-align:center; border: solid 1px;height:16px;border-color:gray;">&#xA0;&#xA0;</td>
        <td style="text-align:center; border: solid 1px;height:16px;border-color:gray;">&#xA0;&#xA0;</td>
        <td style="text-align:center; border: solid 1px;height:16px;border-color:gray;">&#xA0;&#xA0;</td>
        <td style="text-align:center; border: solid 1px;height:16px;border-color:gray;">&#xA0;&#xA0;</td>
        <td style="text-align:center; border: 0px;height:16px;">&#xA0;&#xA0;</td>
    </tr>
    <tr>
        <td style="text-align:center; border: 0px;height:16px;">&#xA0;&#xA0;</td>
        <td style="text-align:center; border: solid 1px;height:16px;border-color:gray;">&#xA0;&#xA0;</td>
        <td style="text-align:center; border: solid 1px;height:16px;border-color:gray;">&#xA0;&#xA0;</td>
        <td style="text-align:center; border: solid 1px;height:16px;border-color:gray;">&#xA0;&#xA0;</td>
        <td style="text-align:center; border: solid 1px;height:16px;border-color:gray;">&#xA0;&#xA0;</td>
        <td style="text-align:center; border: 0px;height:16px;">&#xA0;2</td>
    </tr>
    <tr>
        <td style="text-align:center; border: 0px;height:16px;">&#xA0;1</td>
        <td style="text-align:center; border: solid 1px;height:16px;border-color:gray;">&#xA0;&#xA0;</td>
        <td style="text-align:center; border: solid 1px;height:16px;border-color:gray;">&#xA0;&#xA0;</td>
        <td style="text-align:center; border: solid 1px;height:16px;border-color:gray;">&#xA0;&#xA0;</td>
        <td style="text-align:center; border: solid 1px;height:16px;border-color:gray;">&#xA0;&#xA0;</td>
        <td style="text-align:center; border: 0px;height:16px;">&#xA0;&#xA0;</td>
    </tr>
    <tr>
        <td style="text-align:center; border: 0px;height:16px;">&#xA0;&#xA0;</td>
        <td style="text-align:center; border: solid 1px;height:16px;border-color:gray;">&#xA0;&#xA0;</td>
        <td style="text-align:center; border: solid 1px;height:16px;border-color:gray;">&#xA0;&#xA0;</td>
        <td style="text-align:center; border: solid 1px;height:16px;border-color:gray;">&#xA0;&#xA0;</td>
        <td style="text-align:center; border: solid 1px;height:16px;border-color:gray;">&#xA0;&#xA0;</td>
        <td style="text-align:center; border: 0px;height:16px;">&#xA0;&#xA0;</td>
    </tr>
    <tr>
        <td style="text-align:center; border: 0px;height:16px;">&#xA0;&#xA0;</td>
        <td style="height:16px;">&#xA0;&#xA0;</td>
        <td style="height:16px;">&#xA0;&#xA0;</td>
        <td style="text-align:center; height:16px;">&#xA0;3</td>
        <td style="height:16px;">&#xA0;&#xA0;</td>
        <td style="text-align:center; border: 0px;height:16px;">&#xA0;&#xA0;</td>
    </tr>
</tbody></table>
<br>
<table>
    <tbody><tr>
        <td style="text-align:center; border: 0px;height:16px;">&#xA0;&#xA0;</td>
        <td style="text-align:center; border-bottom: solid 1px;height:16px;border-color:gray;">&#xA0;&#xA0;</td>
        <td style="text-align:center; border-bottom: solid 1px;height:16px;border-color:gray;">&#xA0;&#xA0;</td>
        <td style="text-align:center; border-bottom: solid 1px;height:16px;border-color:gray;">&#xA0;1</td>
        <td style="text-align:center; border-bottom: solid 1px;height:16px;border-color:gray;">&#xA0;2</td>
        <td style="text-align:center; border: 0px;height:16px;">&#xA0;&#xA0;</td>
    </tr>
    <tr>
        <td style="text-align:center; border: 0px;height:16px;">&#xA0;&#xA0;</td>
        <td style="text-align:center; border: solid 1px;height:16px;border-color:gray;">&#xA0;2</td>
        <td style="text-align:center; border: solid 1px;height:16px;border-color:gray;">&#xA0;1</td>
        <td style="text-align:center; border: solid 1px;height:16px;border-color:gray;">&#xA0;4</td>
        <td style="text-align:center; border: solid 1px;height:16px;border-color:gray;">&#xA0;3</td>
        <td style="text-align:center; border: 0px;height:16px;">&#xA0;&#xA0;</td>
    </tr>
    <tr>
        <td style="text-align:center; border: 0px;height:16px;">&#xA0;&#xA0;</td>
        <td style="text-align:center; border: solid 1px;height:16px;border-color:gray;">&#xA0;3</td>
        <td style="text-align:center; border: solid 1px;height:16px;border-color:gray;">&#xA0;4</td>
        <td style="text-align:center; border: solid 1px;height:16px;border-color:gray;">&#xA0;1</td>
        <td style="text-align:center; border: solid 1px;height:16px;border-color:gray;">&#xA0;2</td>
        <td style="text-align:center; border: 0px;height:16px;">&#xA0;2</td>
    </tr>
    <tr>
        <td style="text-align:center; border: 0px;height:16px;">&#xA0;1</td>
        <td style="text-align:center; border: solid 1px;height:16px;border-color:gray;">&#xA0;4</td>
        <td style="text-align:center; border: solid 1px;height:16px;border-color:gray;">&#xA0;2</td>
        <td style="text-align:center; border: solid 1px;height:16px;border-color:gray;">&#xA0;3</td>
        <td style="text-align:center; border: solid 1px;height:16px;border-color:gray;">&#xA0;1</td>
        <td style="text-align:center; border: 0px;height:16px;">&#xA0;&#xA0;</td>
    </tr>
    <tr>
        <td style="text-align:center; border: 0px;height:16px;">&#xA0;&#xA0;</td>
        <td style="text-align:center; border: solid 1px;height:16px;border-color:gray;">&#xA0;1</td>
        <td style="text-align:center; border: solid 1px;height:16px;border-color:gray;">&#xA0;3</td>
        <td style="text-align:center; border: solid 1px;height:16px;border-color:gray;">&#xA0;2</td>
        <td style="text-align:center; border: solid 1px;height:16px;border-color:gray;">&#xA0;4</td>
        <td style="text-align:center; border: 0px;height:16px;">&#xA0;&#xA0;</td>
    </tr>
    <tr>
        <td style="text-align:center; border: 0px;height:16px;">&#xA0;&#xA0;</td>
        <td style="height:16px;">&#xA0;&#xA0;</td>
        <td style="height:16px;">&#xA0;&#xA0;</td>
        <td style="text-align:center; height:16px;">&#xA0;3</td>
        <td style="height:16px;">&#xA0;&#xA0;</td>
        <td style="text-align:center; border: 0px;height:16px;">&#xA0;&#xA0;</td>
    </tr>
</tbody></table>
<br>
<b style="font-size:16px">Task:</b>
<br>
<br>

<ul>
    <li>Finish:</li>
</ul>

<pre style="display: none;"><code class="language-javascript"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">solvePuzzle</span>(<span class="hljs-params">clues</span>)</span></code></pre>
<pre><code class="language-csharp"><span class="hljs-keyword">public</span> <span class="hljs-keyword">static</span> <span class="hljs-keyword">int</span>[][] SolvePuzzle(<span class="hljs-keyword">int</span>[] clues)</code></pre>
<pre style="display: none;"><code class="language-c"><span class="hljs-function"><span class="hljs-keyword">int</span>** <span class="hljs-title">SolvePuzzle</span> <span class="hljs-params">(<span class="hljs-keyword">int</span> *clues)</span></span>;</code></pre>
<pre style="display: none;"><code class="language-cpp"><span class="hljs-function"><span class="hljs-keyword">int</span>** <span class="hljs-title">SolvePuzzle</span> <span class="hljs-params">(<span class="hljs-keyword">int</span> *clues)</span></span>;</code></pre>
<pre style="display: none;"><code class="language-java"><span class="hljs-keyword">public</span> <span class="hljs-keyword">static</span> <span class="hljs-keyword">int</span>[][] solvePuzzle (<span class="hljs-keyword">int</span>[] clues)</code></pre>
<pre style="display: none;"><code class="language-java"><span class="hljs-function">def <span class="hljs-title">solve_puzzle</span> <span class="hljs-params">(clues)</span></span></code></pre>
<pre style="display: none;"><code class="language-haskell"><span class="hljs-title">solve</span> :: [<span class="hljs-type">Int</span>] -&gt; [[<span class="hljs-type">Int</span>]]</code></pre>
<pre style="display: none;"><code class="language-ruby"><span class="hljs-function"><span class="hljs-keyword">def</span> <span class="hljs-title">solve_puzzle</span><span class="hljs-params">(clues)</span></span></code></pre>
<pre style="display: none;"><code class="language-go"><span class="hljs-function"><span class="hljs-keyword">func</span> <span class="hljs-title">SolvePuzzle</span><span class="hljs-params">(clues []<span class="hljs-keyword">int</span>)</span> [][]<span class="hljs-title">int</span></span></code></pre>
<pre style="display: none;"><code class="language-clojure">defn solve-puzzle [clues]</code></pre>
<pre style="display: none;"><code class="language-fsharp">solvePuzzle (clues : int[]) : int[][]</code></pre>
<ul>
    <li>
        Pass the clues in an array of 16 items. This array contains the clues around the clock, index:
        <br>
        <table>
            <tbody><tr>
                <td style="text-align:center; border: 0px;height:16px;">&#xA0;&#xA0;</td>
                <td style="text-align:center; border-bottom: solid 1px;height:16px;border-color:gray;">&#xA0;0</td>
                <td style="text-align:center; border-bottom: solid 1px;height:16px;border-color:gray;">&#xA0;1</td>
                <td style="text-align:center; border-bottom: solid 1px;height:16px;border-color:gray;">&#xA0;&#xA0;&#xA0;2</td>
                <td style="text-align:center; border-bottom: solid 1px;height:16px;border-color:gray;">&#xA0;&#xA0;&#xA0;3</td>
                <td style="text-align:center; border: 0px;height:16px;">&#xA0;&#xA0;</td>
            </tr>
            <tr>
                <td style="text-align:center; border: 0px;height:16px;">&#xA0;15</td>
                <td style="text-align:center; border: solid 1px;height:16px;border-color:gray;">&#xA0;&#xA0;</td>
                <td style="text-align:center; border: solid 1px;height:16px;border-color:gray;">&#xA0;&#xA0;</td>
                <td style="text-align:center; border: solid 1px;height:16px;border-color:gray;">&#xA0;&#xA0;</td>
                <td style="text-align:center; border: solid 1px;height:16px;border-color:gray;">&#xA0;&#xA0;</td>
                <td style="text-align:center; border: 0px;height:16px;">&#xA0;4</td>
            </tr>
            <tr>
                <td style="text-align:center; border: 0px;height:16px;">&#xA0;14</td>
                <td style="text-align:center; border: solid 1px;height:16px;border-color:gray;">&#xA0;&#xA0;</td>
                <td style="text-align:center; border: solid 1px;height:16px;border-color:gray;">&#xA0;&#xA0;</td>
                <td style="text-align:center; border: solid 1px;height:16px;border-color:gray;">&#xA0;&#xA0;</td>
                <td style="text-align:center; border: solid 1px;height:16px;border-color:gray;">&#xA0;&#xA0;</td>
                <td style="text-align:center; border: 0px;height:16px;">&#xA0;5</td>
            </tr>
            <tr>
                <td style="text-align:center; border: 0px;height:16px;">&#xA0;13</td>
                <td style="text-align:center; border: solid 1px;height:16px;border-color:gray;">&#xA0;&#xA0;</td>
                <td style="text-align:center; border: solid 1px;height:16px;border-color:gray;">&#xA0;&#xA0;</td>
                <td style="text-align:center; border: solid 1px;height:16px;border-color:gray;">&#xA0;&#xA0;</td>
                <td style="text-align:center; border: solid 1px;height:16px;border-color:gray;">&#xA0;&#xA0;</td>
                <td style="text-align:center; border: 0px;height:16px;">&#xA0;6</td>
            </tr>
            <tr>
                <td style="text-align:center; border: 0px;height:16px;">&#xA0;12</td>
                <td style="text-align:center; border: solid 1px;height:16px;border-color:gray;">&#xA0;&#xA0;</td>
                <td style="text-align:center; border: solid 1px;height:16px;border-color:gray;">&#xA0;&#xA0;</td>
                <td style="text-align:center; border: solid 1px;height:16px;border-color:gray;">&#xA0;&#xA0;</td>
                <td style="text-align:center; border: solid 1px;height:16px;border-color:gray;">&#xA0;&#xA0;</td>
                <td style="text-align:center; border: 0px;height:16px;">&#xA0;7</td>
            </tr>
            <tr>
                <td style="text-align:center; border: 0px;height:16px;">&#xA0;&#xA0;</td>
                <td style="text-align:center; height:16px;">11</td>
                <td style="text-align:center; height:16px;">10</td>
                <td style="text-align:center; height:16px;">&#xA0;9</td>
                <td style="text-align:center; height:16px;">&#xA0;8</td>
                <td style="text-align:center; border: 0px;height:16px;">&#xA0;&#xA0;</td>
            </tr>
        </tbody></table>
    </li>
    <li>If no clue is available, add value `0`</li>
    <li>Each puzzle has only one possible solution</li>
    <li>`SolvePuzzle()` returns matrix `int[][]`. The first indexer is for the row, the second indexer for the column. (Python: returns 4-tuple of 4-tuples, Ruby: 4-Array of 4-Arrays)
</li>
</ul>

<p><b style="font-size:16px"><i>If you finished this kata you can use your solution as a base for the more challenging  kata: <a href="https://www.codewars.com/kata/6-by-6-skyscrapers" target="_blank">6 By 6 Skyscrapers</a></i></b></p>

### Solution