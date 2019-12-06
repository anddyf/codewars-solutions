### Problem:
<p><strong>Principal Diagonal</strong> -- The principal diagonal in a matrix identifies those elements of the matrix running from North-West to South-East.</p>
<p><strong>Secondary Diagonal</strong> -- the secondary diagonal of amatrix identifies those elements of the matrix running from North-East to South-West.</p>
<p>For example:</p>
<pre><code>matrix:             [1, 2, 3]
                    [4, 5, 6]
                    [7, 8, 9]

principal diagonal: [1, 5, 9]
secondary diagonal: [3, 5, 7]
</code></pre><h2 id="task">Task</h2>
<p>Your task is to find which diagonal is &quot;larger&quot;: which diagonal has a bigger sum of their elements.</p>
<ul>
<li>If the principal diagonal is larger, return <code>&quot;Principal Diagonal win!&quot;</code></li>
<li>If the secondary diagonal is larger, return <code>&quot;Secondary Diagonal win!&quot;</code></li>
<li>If they are equal, return <code>&quot;Draw!&quot;</code></li>
</ul>
<p><strong>Note:</strong> You will always receive matrices of the same dimension.</p>

### Solution