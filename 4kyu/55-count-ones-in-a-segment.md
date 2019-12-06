### Problem:
<p>Given two numbers: &apos;left&apos; and &apos;right&apos; (1 &lt;= &apos;left&apos; &lt;= &apos;right&apos; &lt;= 200000000000000)
return sum of all &apos;1&apos; occurencies in binary representations of numbers between &apos;left&apos; and &apos;right&apos; (including both)</p>
<pre><code>Example:
countOnes 4 7 should return 8, because:
4(dec) = 100(bin), which adds 1 to the result.
5(dec) = 101(bin), which adds 2 to the result.
6(dec) = 110(bin), which adds 2 to the result.
7(dec) = 111(bin), which adds 3 to the result.
So finally result equals 8.</code></pre><p>WARNING: Segment may contain billion elements, to pass this kata, your solution cannot iterate through all numbers in the segment!</p>

### Solution