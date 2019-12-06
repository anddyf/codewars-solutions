### Problem:
<p>A number m of the form 10x + y is divisible by 7 if and only if x &#x2212; 2y is divisible by 7. In other words, subtract twice the last digit 
from the number formed by the remaining digits. Continue to do this until a number known to be divisible or not by 7 is obtained; 
you can stop when this number has <em>at most</em> 2 digits because you are supposed to know if a number of at most 2 digits is divisible by 7 or not.</p>
<p>The original number is divisible by 7 if and only if the last number obtained using this procedure is divisible by 7. </p>
<p>Examples:</p>
<p>1 - <code>m = 371 -&gt; 37 &#x2212; (2&#xD7;1) -&gt; 37 &#x2212; 2 = 35</code> ; thus, since 35 is divisible by 7, 371 is divisible by 7. </p>
<p>The number of steps to get the result is <code>1</code>.</p>
<p>2 - <code>m = 1603 -&gt; 160 - (2 x 3) -&gt; 154 -&gt; 15 - 8 = 7</code> and 7 is divisible by 7. </p>
<p>3 - <code>m = 372 -&gt; 37 &#x2212; (2&#xD7;2) -&gt; 37 &#x2212; 4 = 33</code> ; thus, since 33 is not divisible by 7, 372 is not divisible by 7. </p>
<p>The number of steps to get the result is <code>1</code>.</p>
<p>4 - <code>m = 477557101-&gt;47755708-&gt;4775554-&gt;477547-&gt;47740-&gt;4774-&gt;469-&gt;28</code> and 28 is divisible by 7, so is 477557101. </p>
<p>The number of steps is 7.</p>
<h1 id="task">Task:</h1>
<p>Your task is to return to the function <code>seven(m)</code> (m integer &gt;= 0) an array (or a pair, depending on the language) of numbers, 
the first being the <em>last</em> number <code>m</code> with at most 2 digits obtained by your function (this last <code>m</code> will be divisible or not by 7), the second one being the number of steps to get the result.</p>
<h2 id="forth-note">Forth Note:</h2>
<p>Return on the stack <code>number-of-steps, last-number-m-with-at-most-2-digits</code></p>
<h2 id="examples">Examples:</h2>
<pre><code>seven(371) should return [35, 1]
seven(1603) should return [7, 2]
seven(477557101) should return [28, 7]</code></pre>
### Solution