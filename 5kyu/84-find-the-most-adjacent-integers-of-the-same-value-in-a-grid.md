### Problem:
<p>Find the most adjacent integers of the same value in a grid (2D array).  Integers are only considered adjacent to their neighbors vertically and horizontally, not diagonally.</p>
<p>If there are different integers with the same amount of adjacent neighbors, choose the smallest integer for the answer.</p>
<p>Input:</p>
<p>N x N 2D array of integers</p>
<p>Output:</p>
<p>Tuple with the first item being the integer with the most adjacent neighbors of the same value and the second item being the amount of that integer and its neighbors of the same value.</p>
<p>Example:</p>
<pre><code class="language-python"><span class="hljs-comment"># Input:</span>
grid = [
    [<span class="hljs-number">1</span>,<span class="hljs-number">2</span>,<span class="hljs-number">1</span>],
    [<span class="hljs-number">1</span>,<span class="hljs-number">1</span>,<span class="hljs-number">0</span>],
    [<span class="hljs-number">0</span>,<span class="hljs-number">0</span>,<span class="hljs-number">0</span>],
]
<span class="hljs-comment"># Output:</span>
(<span class="hljs-number">0</span>, <span class="hljs-number">4</span>)</code></pre>

### Solution