### Problem:
<p>In your class, you have started lessons about &quot;arithmetic progression&quot;. Because you are also a programmer, you have decided to write a function.</p>
<p>This function, arithmetic_sequence_sum(a, r, n), should return the sum of the first (n) elements of a sequence in which each element is the sum of the given integer (a), and a number of occurences of the given integer (r), based on the element&apos;s position within the sequence.</p>
<p>For example:</p>
<p>arithmetic_sequence_sum(2, 3, 5) should return 40:</p>
<pre><code>1     2        3          4            5
a + (a+r) + (a+r+r) + (a+r+r+r) + (a+r+r+r+r) 
2 + (2+3) + (2+3+3) + (2+3+3+3) + (2+3+3+3+3) = 40</code></pre>
### Solution