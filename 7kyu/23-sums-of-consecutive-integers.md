### Problem:
<p>The sum of <code>x</code> consecutive integers is <code>y</code>. What is the consecutive integer at position <code>n</code>? Given <code>x</code>, <code>y</code>, and <code>n</code>, solve for the integer. Assume the starting position is 0.</p>
<p>For example, if the sum of 4 consecutive integers is 14, what is the consecutive integer at position 3?</p>
<p>We find that the consecutive integers are <code>[2, 3, 4, 5]</code>, so the integer at position 3 is <code>5</code>.</p>
<pre><code>// Javascript
position(4, 14, 3) =&gt; 5`

// C#
SumOfConsecutiveIntegers.Position(4, 14, 3) =&gt; 5</code></pre><p>Assume there will always be a sum of <code>x</code> consecutive integers that totals to <code>y</code> and <code>n</code> will never be indexed out of bounds.</p>

### Solution