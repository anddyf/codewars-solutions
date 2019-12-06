### Problem:
<p>With one die of 6 sides we will have six different possible results:<code>1, 2, 3, 4, 5, 6</code> .</p>
<p>With 2 dice of six sides, we will have 36 different possible results:</p>
<pre><code>(1,1),(1,2),(2,1),(1,3),(3,1),(1,4),(4,1),(1,5),
(5,1), (1,6),(6,1),(2,2),(2,3),(3,2),(2,4),(4,2),
(2,5),(5,2)(2,6),(6,2),(3,3),(3,4),(4,3),(3,5),(5,3),
(3,6),(6,3),(4,4),(4,5),(5,4),(4,6),(6,4),(5,5),
(5,6),(6,5),(6,6)</code></pre><p>So, with 2 dice of 6 sides we get 36 different events.</p>
<pre><code>([6,6] ---&gt; 36)</code></pre><p>But with 2 different dice we can get for this case, the same number of events.
One die of <code>4 sides</code>  and another of <code>9 sides</code>  will produce the exact amount of events.</p>
<pre><code>([4,9] ---&gt; 36)</code></pre><p>We say that the dice set <code>[4,9]</code> is equivalent to <code>[6,6]</code> because both produce the same number of events.</p>
<p>Also we may have an amount of three dice producing the same amount of events. It will be for:</p>
<pre><code>[4,3,3] ---&gt; 36</code></pre><p>(One die of 4 sides and two dice of 3 sides each)</p>
<p>Perhaps you may think that the following set is equivalent: <code>[6,3,2]</code> but unfortunately dice have a <strong>minimum of three sides</strong> (well, really a 
tetrahedron with one empty side)</p>
<p>The task for this kata is to get the amount of equivalent dice sets, having <strong>2 dice at least</strong>,for a given set.</p>
<p>For example, for the previous case: [6,6] we will have 3 equivalent sets that are: <code>[4, 3, 3], [12, 3], [9, 4]</code> .</p>
<p>You may assume that dice are available from 3 and above for any value up to an icosahedral die (20 sides).</p>
<pre><code>[5,6,4] ---&gt; 5 (they are [10, 4, 3], [8, 5, 3], [20, 6], [15, 8], [12, 10])</code></pre><p>For the cases we cannot get any equivalent set the result will be <code>0</code>.
For example for the set <code>[3,3]</code> we will not have equivalent dice.</p>
<p>Range of inputs for Random Tests:</p>
<pre><code>3 &lt;= sides &lt;= 15
2 &lt;= dices &lt;= 7</code></pre><p>See examples in the corresponding box.</p>
<p>Enjoy it!!</p>

### Solution