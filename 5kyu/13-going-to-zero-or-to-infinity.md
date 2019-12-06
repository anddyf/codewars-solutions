### Problem:
<p>Consider the following numbers (where <code>n!</code> is <code>factorial(n)</code>):</p>
<pre><code>u1 = (1 / 1!) * (1!)
u2 = (1 / 2!) * (1! + 2!)
u3 = (1 / 3!) * (1! + 2! + 3!)
un = (1 / n!) * (1! + 2! + 3! + ... + n!)</code></pre><p>Which will win: <code>1 / n!</code> or <code>(1! + 2! + 3! + ... + n!)</code>?</p>
<p>Are these numbers going to <code>0</code> because of <code>1/n!</code> or to infinity due
to the sum of factorials or to another number?</p>
<h2 id="task">Task</h2>
<p>Calculate <code>(1 / n!) * (1! + 2! + 3! + ... + n!)</code> 
for a given <code>n</code>, where <code>n</code> is an integer greater or equal to <code>1</code>.</p>
<p>To avoid discussions about rounding, return the result <strong>truncated</strong> to 6 decimal places, for example:</p>
<pre><code>1.0000989217538616 will be truncated to 1.000098
1.2125000000000001 will be truncated to 1.2125</code></pre><h2 id="remark">Remark</h2>
<p>Keep in mind that factorials grow rather rapidly, and you need to handle large inputs.</p>

### Solution