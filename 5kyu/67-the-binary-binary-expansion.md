### Problem:
<p>Normally, we decompose a number into binary digits by assigning it with powers of 2, with a coefficient of <code>0</code> or <code>1</code> for each term:</p>
<p><code>25 = 1*16 + 1*8 + 0*4 + 0*2 + 1*1</code></p>
<p>The choice of <code>0</code> and <code>1</code> is... not very binary. We shall perform the <em>true</em> binary expansion by expanding with powers of 2, but with a coefficient of <code>1</code> or <code>-1</code> instead:</p>
<p><code>25 = 1*16 + 1*8 + 1*4 - 1*2 - 1*1</code></p>
<p>Now <em>this</em> looks binary.</p>
<hr>
<p>Given any positive number <code>n</code>, expand it using the true binary expansion, and return the result as an array, from the most significant digit to the least significant digit.</p>
<p><code>true_binary(25) == [1,1,1,-1,-1]</code></p>
<p>It should be trivial (the proofs are left as an exercise to the reader) to see that:</p>
<ul>
<li>Every odd number has infinitely many true binary expansions</li>
<li>Every even number has no true binary expansions</li>
</ul>
<p>Hence, <code>n</code> will always be an odd number, and you should return the <em>least</em> true binary expansion for any <code>n</code>.</p>
<p>Also, note that <code>n</code> can be very, very large, so your code should be very efficient.</p>

### Solution