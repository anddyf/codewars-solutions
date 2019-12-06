### Problem:
<p>Consider a sequence <code>u</code> where u is defined as follows:</p>
<ol>
<li>The number <code>u(0) = 1</code> is the first one in <code>u</code>.</li>
<li>For each <code>x</code> in <code>u</code>, then <code>y = 2 * x + 1</code> and <code>z = 3 * x + 1</code> must be in <code>u</code> too.</li>
<li>There are no other numbers in <code>u</code>.</li>
</ol>
<p>Ex: 
<code>u = [1, 3, 4, 7, 9, 10, 13, 15, 19, 21, 22, 27, ...]</code></p>
<p>1 gives 3 and 4, then 3 gives 7 and 10, 4 gives 9 and 13, then 7 gives 15 and 22 and so on...</p>
<h2 id="task">Task:</h2>
<p>Given parameter <code>n</code> the function <code>dbl_linear</code> (or dblLinear...) returns the element <code>u(n)</code> of 
the ordered (with &lt;) sequence <code>u</code> (so, there are no duplicates).</p>
<h2 id="example">Example:</h2>
<p><code>dbl_linear(10) should return 22</code></p>
<h2 id="note">Note:</h2>
<p>Focus attention on efficiency</p>

### Solution