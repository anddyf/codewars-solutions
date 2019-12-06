### Problem:
<p>From wikipedia <a href="https://en.wikipedia.org/wiki/Partition_(number_theory)" target="_blank">https://en.wikipedia.org/wiki/Partition_(number_theory)</a> </p>
<p>In number theory and combinatorics, a partition of a positive integer n, also called an integer partition, 
is a way of writing n as a sum of positive integers. 
Two sums that differ only in the order of their summands are considered the <strong>same</strong> partition.</p>
<p>For example, 4 can be partitioned in five distinct ways:</p>
<p><code>4, 3 + 1, 2 + 2, 2 + 1 + 1, 1 + 1 + 1 + 1</code>.</p>
<p>We can write:</p>
<p><code>enum(4) -&gt; [[4],[3,1],[2,2],[2,1,1],[1,1,1,1]]</code> and</p>
<p><code>enum(5) -&gt; [[5],[4,1],[3,2],[3,1,1],[2,2,1],[2,1,1,1],[1,1,1,1,1]]</code>.</p>
<p>The number of parts in a partition grows very fast.
For n = 50 number of parts is <code>204226</code>, for 80 it is <code>15,796,476</code>
It would be too long to tests answers with arrays of such size. So our task is the following:</p>
<p>1 - n being given (n integer, 1 &lt;= n &lt;= 50) calculate enum(n) ie the partition of n.
We will obtain something like that:<br><code>enum(n) -&gt; [[n],[n-1,1],[n-2,2],...,[1,1,...,1]]</code> (order of array and sub-arrays
doesn&apos;t matter). This part is not tested.</p>
<p>2 - For each sub-array of enum(n) calculate its product. 
If n = 5 we&apos;ll obtain <strong>after removing duplicates and sorting</strong>:</p>
<p><code>prod(5) -&gt; [1,2,3,4,5,6]</code></p>
<p><code>prod(8) -&gt; [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 15, 16, 18]</code></p>
<p>If n = 40 prod(n) has a length of <code>2699</code> hence the tests will not verify such arrays.
Instead our task number 3 is:</p>
<p>3 - return the range, the average and the median of prod(n) in the following form 
(example for n = 5):</p>
<p><code>&quot;Range: 5 Average: 3.50 Median: 3.50&quot;</code></p>
<p>Range is an integer, Average and Median are float numbers rounded to two decimal 
places (&quot;.2f&quot; in some languages).</p>
<p>#Notes:
<code>Range</code> : difference between the highest and lowest values. </p>
<p><code>Mean or Average</code> : To calculate mean, add together all of the numbers 
in a set and then divide the sum by the total count of numbers.</p>
<p><code>Median</code> : The median is the number separating the higher half 
of a data sample from the lower half. 
(<a href="https://en.wikipedia.org/wiki/Median" target="_blank">https://en.wikipedia.org/wiki/Median</a>)</p>
<p>#Hints:
Try to optimize your program to avoid timing out.</p>
<p>Memoization can be helpful but it is not mandatory for being successful.</p>

### Solution