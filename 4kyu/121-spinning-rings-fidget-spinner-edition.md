### Problem:
<p>This is the performance version of <a href="https://www.codewars.com/kata/59afff65f1c8274f270020f5" target="_blank">this kata</a>.</p>
<hr>
<p>Imagine two rings with numbers on them. The inner ring spins clockwise and the outer ring spins anti-clockwise. We start with both rings aligned on 0 at the top, and on each move we spin each ring by 1. How many moves will it take before both rings show the same number at the top again?</p>
<p>The inner ring has integers from 0 to innerMax and the outer ring has integers from 0 to outerMax, where innerMax and outerMax are integers &gt;= 1.</p>
<pre><code>e.g. if innerMax is 2 and outerMax is 3 then after
1 move: inner = 2, outer = 1
2 moves: inner = 1, outer = 2
3 moves: inner = 0, outer = 3
4 moves: inner = 2, outer = 0
5 moves: inner = 1, outer = 1
Therefore it takes 5 moves for the two rings to reach the same number
Therefore spinningRings(2, 3) = 5</code></pre><pre><code>e.g. if innerMax is 3 and outerMax is 2 then after
1 move: inner = 3, outer = 1
2 moves: inner = 2, outer = 2
Therefore it takes 2 moves for the two rings to reach the same number
spinningRings(3, 2) = 2</code></pre><hr>
<p>Test input range:</p>
<ul>
<li><code>100</code> tests with <code>1 &lt;= innerMax, outerMax &lt;= 10000</code></li>
<li><code>400</code> tests with <code>1 &lt;= innerMax, outerMax &lt;= 2^48</code></li>
</ul>

### Solution