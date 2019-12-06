### Problem:
<h2 id="do-you-know-how-to-write-a-recursive-function-lets-test-it">##Do you know how to write a recursive function? Let&apos;s test it!</h2>
<p>*
Definition: Recursive function is a function that calls itself during its execution
*</p>
<pre><code>Classic factorial counting on Javascript
function factorial(n) {
  return n &lt;= 1 ? 1 : n * factorial(n-1) 
}
</code></pre><hr>
<p>Your objective is to complete a recursive function <code>reverse()</code> that receives <code>str</code> as String and returns the same string in reverse order</p>
<p>Rules:</p>
<ul>
<li>reverse function should be executed exactly N times. <code>N = length of the input string</code></li>
<li>helper functions are not allowed</li>
<li>changing the signature of the function is not allowed</li>
</ul>
<p>Examples:</p>
<pre><code>reverse(&quot;hello world&quot;) = &quot;dlrow olleh&quot; (N = 11)
reverse(&quot;abcd&quot;) = &quot;dcba&quot; (N = 4)
reverse(&quot;12345&quot;) = &quot;54321&quot; (N = 5)</code></pre><p><i>All tests for this Kata are randomly generated, besides checking the reverse logic they will count how many times the reverse() function has been executed. <i></i></i></p><i><i>
</i></i>
### Solution