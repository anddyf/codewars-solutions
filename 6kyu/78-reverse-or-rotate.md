### Problem:
<p>The input is a string <code>str</code> of digits. Cut the string into chunks (a chunk here is a substring of the initial string) of size <code>sz</code> (ignore the last chunk if its size is less than <code>sz</code>).</p>
<p>If a chunk represents an integer such as the <strong>sum of the cubes of its digits is divisible by 2</strong>, reverse that chunk; 
otherwise rotate it to the left by one position.
Put together these modified chunks and return the result as a string.</p>
<p>If </p>
<ul>
<li><code>sz</code> is <code>&lt;= 0</code> or if <code>str</code> is <code>empty</code> return &quot;&quot;</li>
<li><code>sz</code> is greater <code>(&gt;)</code> than the length of <code>str</code> it is impossible to take a chunk of size <code>sz</code> hence return &quot;&quot;.</li>
</ul>
<pre><code>Examples:
revrot(&quot;123456987654&quot;, 6) --&gt; &quot;234561876549&quot;
revrot(&quot;123456987653&quot;, 6) --&gt; &quot;234561356789&quot;
revrot(&quot;66443875&quot;, 4) --&gt; &quot;44668753&quot;
revrot(&quot;66443875&quot;, 8) --&gt; &quot;64438756&quot;
revrot(&quot;664438769&quot;, 8) --&gt; &quot;67834466&quot;
revrot(&quot;123456779&quot;, 8) --&gt; &quot;23456771&quot;
revrot(&quot;&quot;, 8) --&gt; &quot;&quot;
revrot(&quot;123456779&quot;, 0) --&gt; &quot;&quot; 
revrot(&quot;563000655734469485&quot;, 4) --&gt; &quot;0365065073456944&quot;</code></pre>
### Solution