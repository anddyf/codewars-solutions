### Problem:
<p>Given a square matrix, rotate the original matrix 90 degrees clockwise... in place! This means that you are not allowed to build a rotated matrix and return it. Modify the original matrix using a temporary variable to swap elements and return it. You are allowed to use a couple scalar variables if needed.</p>
<p>Solutions similar to the following are correct, but not allowed for this kata:</p>
<pre><code class="language-python"><span class="hljs-function"><span class="hljs-keyword">def</span> <span class="hljs-title">rotate_not_in_place</span><span class="hljs-params">(matrix)</span>:</span>
  <span class="hljs-keyword">return</span> [[row[i] <span class="hljs-keyword">for</span> row <span class="hljs-keyword">in</span> reversed(matrix)] <span class="hljs-keyword">for</span> i <span class="hljs-keyword">in</span> range(len(matrix))]</code></pre>
<p>Esentially any method that involves generating a new matrix isn&apos;t allowed.</p>
<p>To sum up, given a square matrix of any size as an input:</p>
<pre><code class="language-python">[[<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>],
 [<span class="hljs-number">4</span>, <span class="hljs-number">5</span>, <span class="hljs-number">6</span>],
 [<span class="hljs-number">7</span>, <span class="hljs-number">8</span>, <span class="hljs-number">9</span>]]</code></pre>
<p>Modify the original matrix rotating it in place 90 degrees clockwise and return it:</p>
<pre><code class="language-python">[[<span class="hljs-number">7</span>, <span class="hljs-number">4</span>, <span class="hljs-number">1</span>],
 [<span class="hljs-number">8</span>, <span class="hljs-number">5</span>, <span class="hljs-number">2</span>],
 [<span class="hljs-number">9</span>, <span class="hljs-number">6</span>, <span class="hljs-number">3</span>]]</code></pre>
<p>This problem is very googleable so I suggest trying it out without looking for help.</p>

### Solution