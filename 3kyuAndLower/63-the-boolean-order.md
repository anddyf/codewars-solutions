### Problem:
<p>In this Kata, you will be given boolean values and boolean operators. Your task will be to return the number of arrangements that evaluate to <code>True</code>. </p>
<p><code>t,f</code> will stand for <code>true, false</code> and the operators will be <code>Boolean AND (&amp;), OR (|), and XOR (^)</code>. </p>
<p>For example, <code>solve(&quot;tft&quot;,&quot;^&amp;&quot;) = 2</code>, as follows: </p>
<ul>
<li><code>&quot;((t ^ f) &amp; t)&quot; = True</code> </li>
<li><code>&quot;(t ^ (f &amp; t))&quot; = True</code>     </li>
</ul>
<p>Notice that the order of the boolean values and operators does not change. What changes is the position of braces. </p>
<p>More examples in the test cases.</p>
<p>Good luck!</p>

### Solution