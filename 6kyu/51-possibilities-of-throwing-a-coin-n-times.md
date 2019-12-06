### Problem:
<p>In this kata you will be given an <strong>integer n</strong>, which is the number of times that is thown a coin. You will have to return an array of string for all the possibilities (heads[H] and tails[T]). Examples:<br><br>
<code>coin(1) should return {&quot;H&quot;, &quot;T&quot;}</code><br>
<code>coin(2) should return {&quot;HH&quot;, &quot;HT&quot;, &quot;TH&quot;, &quot;TT&quot;}</code><br>
<code>coin(3) should return {&quot;HHH&quot;, &quot;HHT&quot;, &quot;HTH&quot;, &quot;HTT&quot;, &quot;THH&quot;, &quot;THT&quot;, &quot;TTH&quot;, &quot;TTT&quot;}</code><br><br>
When finished sort them alphabetically.<br>
<br>
In C and C++ just return a <code>char*</code> with all elements separated by<code>,</code> (without space):<br>
<code>coin(2) should return &quot;HH,HT,TH,TT&quot;</code><br><br>
INPUT:<br>
<code>0 &lt; n &lt; 18</code><br><br>
Careful with performance!! You&apos;ll have to pass 3 basic test (n = 1, n = 2, n = 3), many medium tests (3 &lt; n &lt;= 10) and many large tests (10 &lt; n &lt; 18)</p>

### Solution