### Problem:
<p><img src="https://i.imgur.com/AUVWFOn.png" alt="Image of sliding puzzle"></p>
<p>A <a href="https://en.wikipedia.org/wiki/Sliding_puzzle" target="_blank">sliding puzzle</a> is a combination puzzle that challenges a player to slide (frequently flat) pieces along certain routes (usually on a board) to establish a certain end-configuration.</p>
<p>Your goal for this kata is to write a function that produces a sequence of tile movements that solves the puzzle.</p>
<h2 id="input">Input</h2>
<p>An <code>n x n</code> array/list comprised of integer values ranging from <code>0</code> to <code>n^2 - 1</code> (inclusive), which represents a square grid of tiles. Note that there will always be one empty tile (represented by <code>0</code>) to allow for movement of adjacent tiles.</p>
<h2 id="output">Output</h2>
<p>An array/list comprised of any (but not necessarily all) of the integers from <code>1</code> to <code>n^2 - 1</code>,  inclusive. This represents the sequence of tile moves for a successful transition from the initial unsolved state to the solved state. If the puzzle is unsolvable, return <code>null</code>(JavaScript, Java, PHP) or <code>None</code>(Python) or the vector <code>{0}</code> (C++).</p>
<h2 id="test-example">Test Example</h2>
<pre><code class="language-javascript"><span class="hljs-keyword">let</span> simpleExample = [
    [ <span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>, <span class="hljs-number">4</span>],
    [ <span class="hljs-number">5</span>, <span class="hljs-number">0</span>, <span class="hljs-number">6</span>, <span class="hljs-number">8</span>],
    [ <span class="hljs-number">9</span>,<span class="hljs-number">10</span>, <span class="hljs-number">7</span>,<span class="hljs-number">11</span>],
    [<span class="hljs-number">13</span>,<span class="hljs-number">14</span>,<span class="hljs-number">15</span>,<span class="hljs-number">12</span>]
];
slidePuzzle(simpleExample); <span class="hljs-comment">// [6,7,11,12]</span>

<span class="hljs-comment">// TRANSITION SEQUENCE:</span>
[ <span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>, <span class="hljs-number">4</span>]    [ <span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>, <span class="hljs-number">4</span>]    [ <span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>, <span class="hljs-number">4</span>]    [ <span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>, <span class="hljs-number">4</span>]    [ <span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>, <span class="hljs-number">4</span>]
[ <span class="hljs-number">5</span>, <span class="hljs-number">0</span>, <span class="hljs-number">6</span>, <span class="hljs-number">8</span>]    [ <span class="hljs-number">5</span>, <span class="hljs-number">6</span>, <span class="hljs-number">0</span>, <span class="hljs-number">8</span>]    [ <span class="hljs-number">5</span>, <span class="hljs-number">6</span>, <span class="hljs-number">7</span>, <span class="hljs-number">8</span>]    [ <span class="hljs-number">5</span>, <span class="hljs-number">6</span>, <span class="hljs-number">7</span>, <span class="hljs-number">8</span>]    [ <span class="hljs-number">5</span>, <span class="hljs-number">6</span>, <span class="hljs-number">7</span>, <span class="hljs-number">8</span>]
[ <span class="hljs-number">9</span>,<span class="hljs-number">10</span>, <span class="hljs-number">7</span>,<span class="hljs-number">11</span>] -&gt; [ <span class="hljs-number">9</span>,<span class="hljs-number">10</span>, <span class="hljs-number">7</span>,<span class="hljs-number">11</span>] -&gt; [ <span class="hljs-number">9</span>,<span class="hljs-number">10</span>, <span class="hljs-number">0</span>,<span class="hljs-number">11</span>] -&gt; [ <span class="hljs-number">9</span>,<span class="hljs-number">10</span>,<span class="hljs-number">11</span>, <span class="hljs-number">0</span>] -&gt; [ <span class="hljs-number">9</span>,<span class="hljs-number">10</span>,<span class="hljs-number">11</span>,<span class="hljs-number">12</span>]
[<span class="hljs-number">13</span>,<span class="hljs-number">14</span>,<span class="hljs-number">15</span>,<span class="hljs-number">12</span>]    [<span class="hljs-number">13</span>,<span class="hljs-number">14</span>,<span class="hljs-number">15</span>,<span class="hljs-number">12</span>]    [<span class="hljs-number">13</span>,<span class="hljs-number">14</span>,<span class="hljs-number">15</span>,<span class="hljs-number">12</span>]    [<span class="hljs-number">13</span>,<span class="hljs-number">14</span>,<span class="hljs-number">15</span>,<span class="hljs-number">12</span>]    [<span class="hljs-number">13</span>,<span class="hljs-number">14</span>,<span class="hljs-number">15</span>, <span class="hljs-number">0</span>]

<span class="hljs-comment">// <span class="hljs-doctag">NOTE:</span> Your solution does not need to follow this exact sequence to pass</span></code></pre>
<pre style="display: none;"><code class="language-python">simple_example = [
    [ 1, 2, 3, 4],
    [ 5, 0, 6, 8],
    [ 9,10, 7,11],
    [13,14,15,12]
]
slide_puzzle(simple_example) #[6,7,11,12]

# TRANSITION SEQUENCE:
[ 1, 2, 3, 4]    [ 1, 2, 3, 4]    [ 1, 2, 3, 4]    [ 1, 2, 3, 4]    [ 1, 2, 3, 4]
[ 5, 0, 6, 8]    [ 5, 6, 0, 8]    [ 5, 6, 7, 8]    [ 5, 6, 7, 8]    [ 5, 6, 7, 8]
[ 9,10, 7,11] -&gt; [ 9,10, 7,11] -&gt; [ 9,10, 0,11] -&gt; [ 9,10,11, 0] -&gt; [ 9,10,11,12]
[13,14,15,12]    [13,14,15,12]    [13,14,15,12]    [13,14,15,12]    [13,14,15, 0]

# NOTE: Your solution does not need to follow this exact sequence to pass</code></pre>
<pre style="display: none;"><code class="language-php">$simpleExample = [
    [ <span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>, <span class="hljs-number">4</span>],
    [ <span class="hljs-number">5</span>, <span class="hljs-number">0</span>, <span class="hljs-number">6</span>, <span class="hljs-number">8</span>],
    [ <span class="hljs-number">9</span>,<span class="hljs-number">10</span>, <span class="hljs-number">7</span>,<span class="hljs-number">11</span>],
    [<span class="hljs-number">13</span>,<span class="hljs-number">14</span>,<span class="hljs-number">15</span>,<span class="hljs-number">12</span>]
];
slidePuzzle($simpleExample); <span class="hljs-comment">// [6,7,11,12]</span>

<span class="hljs-comment">// TRANSITION SEQUENCE:</span>
[ <span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>, <span class="hljs-number">4</span>]    [ <span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>, <span class="hljs-number">4</span>]    [ <span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>, <span class="hljs-number">4</span>]    [ <span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>, <span class="hljs-number">4</span>]    [ <span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>, <span class="hljs-number">4</span>]
[ <span class="hljs-number">5</span>, <span class="hljs-number">0</span>, <span class="hljs-number">6</span>, <span class="hljs-number">8</span>]    [ <span class="hljs-number">5</span>, <span class="hljs-number">6</span>, <span class="hljs-number">0</span>, <span class="hljs-number">8</span>]    [ <span class="hljs-number">5</span>, <span class="hljs-number">6</span>, <span class="hljs-number">7</span>, <span class="hljs-number">8</span>]    [ <span class="hljs-number">5</span>, <span class="hljs-number">6</span>, <span class="hljs-number">7</span>, <span class="hljs-number">8</span>]    [ <span class="hljs-number">5</span>, <span class="hljs-number">6</span>, <span class="hljs-number">7</span>, <span class="hljs-number">8</span>]
[ <span class="hljs-number">9</span>,<span class="hljs-number">10</span>, <span class="hljs-number">7</span>,<span class="hljs-number">11</span>] -&gt; [ <span class="hljs-number">9</span>,<span class="hljs-number">10</span>, <span class="hljs-number">7</span>,<span class="hljs-number">11</span>] -&gt; [ <span class="hljs-number">9</span>,<span class="hljs-number">10</span>, <span class="hljs-number">0</span>,<span class="hljs-number">11</span>] -&gt; [ <span class="hljs-number">9</span>,<span class="hljs-number">10</span>,<span class="hljs-number">11</span>, <span class="hljs-number">0</span>] -&gt; [ <span class="hljs-number">9</span>,<span class="hljs-number">10</span>,<span class="hljs-number">11</span>,<span class="hljs-number">12</span>]
[<span class="hljs-number">13</span>,<span class="hljs-number">14</span>,<span class="hljs-number">15</span>,<span class="hljs-number">12</span>]    [<span class="hljs-number">13</span>,<span class="hljs-number">14</span>,<span class="hljs-number">15</span>,<span class="hljs-number">12</span>]    [<span class="hljs-number">13</span>,<span class="hljs-number">14</span>,<span class="hljs-number">15</span>,<span class="hljs-number">12</span>]    [<span class="hljs-number">13</span>,<span class="hljs-number">14</span>,<span class="hljs-number">15</span>,<span class="hljs-number">12</span>]    [<span class="hljs-number">13</span>,<span class="hljs-number">14</span>,<span class="hljs-number">15</span>, <span class="hljs-number">0</span>]

<span class="hljs-comment">// <span class="hljs-doctag">NOTE:</span> Your solution does not need to follow this exact sequence to pass</span></code></pre>
<h2 id="technical-details">Technical Details</h2>
<ul>
<li>Input will always be valid.</li>
<li>The range of values for <code>n</code> are: <code>10 &gt;= n &gt;= 3</code></li>
</ul>
<p>If you enjoyed this kata, be sure to check out <a href="https://www.codewars.com/users/docgunthrop/authored" target="_blank">my other katas</a>.</p>

### Solution