### Problem:
<p>Write a function that accepts two square matrices (<code>N x N</code> two dimensional arrays), and return the sum of the two. Both matrices being passed into the function will be of size <code>N x N</code> (square), containing only integers.</p>
<p>How to sum two matrices:</p>
<p>Take each cell <code>[n][m]</code> from the first matrix, and add it with the same <code>[n][m]</code> cell from the second matrix. This will be cell <code>[n][m]</code> of the solution matrix.</p>
<p>Visualization: </p>
<pre><code class="language-js">|<span class="hljs-number">1</span> <span class="hljs-number">2</span> <span class="hljs-number">3</span>|     |<span class="hljs-number">2</span> <span class="hljs-number">2</span> <span class="hljs-number">1</span>|     |<span class="hljs-number">1</span>+<span class="hljs-number">2</span> <span class="hljs-number">2</span>+<span class="hljs-number">2</span> <span class="hljs-number">3</span>+<span class="hljs-number">1</span>|     |<span class="hljs-number">3</span> <span class="hljs-number">4</span> <span class="hljs-number">4</span>|
|<span class="hljs-number">3</span> <span class="hljs-number">2</span> <span class="hljs-number">1</span>|  +  |<span class="hljs-number">3</span> <span class="hljs-number">2</span> <span class="hljs-number">3</span>|  =  |<span class="hljs-number">3</span>+<span class="hljs-number">3</span> <span class="hljs-number">2</span>+<span class="hljs-number">2</span> <span class="hljs-number">1</span>+<span class="hljs-number">3</span>|  =  |<span class="hljs-number">6</span> <span class="hljs-number">4</span> <span class="hljs-number">4</span>|
|<span class="hljs-number">1</span> <span class="hljs-number">1</span> <span class="hljs-number">1</span>|     |<span class="hljs-number">1</span> <span class="hljs-number">1</span> <span class="hljs-number">3</span>|     |<span class="hljs-number">1</span>+<span class="hljs-number">1</span> <span class="hljs-number">1</span>+<span class="hljs-number">1</span> <span class="hljs-number">1</span>+<span class="hljs-number">3</span>|     |<span class="hljs-number">2</span> <span class="hljs-number">2</span> <span class="hljs-number">4</span>|</code></pre>
<h2 id="example">Example</h2>
<pre><code class="language-js">matrixAddition(
  [ [<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>],
    [<span class="hljs-number">3</span>, <span class="hljs-number">2</span>, <span class="hljs-number">1</span>],
    [<span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>] ],
<span class="hljs-comment">//      +</span>
  [ [<span class="hljs-number">2</span>, <span class="hljs-number">2</span>, <span class="hljs-number">1</span>],
    [<span class="hljs-number">3</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>],
    [<span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">3</span>] ] )

<span class="hljs-comment">// returns:</span>
  [ [<span class="hljs-number">3</span>, <span class="hljs-number">4</span>, <span class="hljs-number">4</span>],
    [<span class="hljs-number">6</span>, <span class="hljs-number">4</span>, <span class="hljs-number">4</span>],
    [<span class="hljs-number">2</span>, <span class="hljs-number">2</span>, <span class="hljs-number">4</span>] ]</code></pre>

### Solution