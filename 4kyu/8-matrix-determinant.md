### Problem:
<p>Write a function that accepts a square matrix (<code>N x N</code> 2D array) and returns the determinant of the matrix.</p>
<p>How to take the determinant of a matrix -- it is simplest to start with the smallest cases:</p>
<p>A 1x1 matrix <code>|a|</code> has determinant <code>a</code>.</p>
<p>A 2x2 matrix <code>[ [a, b], [c, d] ]</code> or</p>
<pre><code class="language-js">|a  b|
|c  d|</code></pre>
<p>has determinant: <code>a*d - b*c</code>.</p>
<p>The determinant of an <code>n x n</code> sized matrix is calculated by reducing the problem to the calculation of the determinants of <code>n</code> matrices of<code>n-1 x n-1</code> size.</p>
<p>For the 3x3 case, <code>[ [a, b, c], [d, e, f], [g, h, i] ]</code> or</p>
<pre><code class="language-js">|a b c|  
|d e f|  
|g h i|  </code></pre>
<p>the determinant is: <code>a * det(a_minor) - b * det(b_minor) + c * det(c_minor)</code> where <code>det(a_minor)</code> refers to taking the determinant of the 2x2 matrix created by crossing out the row and column in which the element a occurs:</p>
<pre><code class="language-js">|- - -|
|- e f|
|- h i|  </code></pre>
<p>Note the alternation of signs. </p>
<p>The determinant of larger matrices are calculated analogously, e.g. if M is a 4x4 matrix with first row <code>[a, b, c, d]</code>, then:</p>
<p><code>det(M) = a * det(a_minor) - b * det(b_minor) + c * det(c_minor) - d * det(d_minor)</code></p>

### Solution