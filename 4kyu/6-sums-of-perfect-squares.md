### Problem:
<p>The task is simply stated. Given an integer <code>n</code> (<code>3 &lt; n &lt; 10<sup>9</sup></code>), find the length of the smallest list of <a href="https://en.wikipedia.org/wiki/Square_number" target="_blank"><em>perfect squares</em></a> which add up to <code>n</code>. Come up with the best algorithm you can; you&apos;ll need it!</p>
<p><strong>Examples:</strong></p>
<ul>
<li><code>sum_of_squares(17) = 2</code> <br> 17 = 16 + 1 (4 and 1 are perfect squares).</li>
<li><code>sum_of_squares(15) = 4</code> <br> 15 = 9 + 4 + 1 + 1. There is no way to represent 15 as the sum of three perfect squares.</li>
<li><code>sum_of_squares(16) = 1</code> <br> 16 itself is a perfect square.</li>
</ul>

<p><strong>Time constraints:</strong></p>
<p>5 easy (sample) test cases: <code>n &lt; 20</code></p>
<p>5 harder test cases: <code>1000 &lt; n &lt; 15000</code></p>
<p>5 maximally hard test cases: <code>5 * 1e8 &lt; n &lt; 1e9</code></p>
<p>15 random maximally hard test cases: <code>1e8 &lt; n &lt; 1e9</code></p>

### Solution