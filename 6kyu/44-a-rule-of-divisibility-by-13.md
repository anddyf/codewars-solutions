### Problem:
<p>When you divide the successive powers of <code>10</code> by <code>13</code> you get the following remainders of the integer divisions:  </p>
<p><code>1, 10, 9, 12, 3, 4</code>. </p>
<p>Then the whole pattern repeats.</p>
<p>Hence the following method:
Multiply the right most digit of the number with the left most number 
in the sequence shown above, the second right most digit to the second 
left most digit of the number in the sequence. The cycle goes on and you sum all these products. Repeat this process until the sequence of sums is stationary.</p>
<p>...........................................................................</p>
<p>Example: What is the remainder when <code>1234567</code> is divided by <code>13</code>?</p>
<p><code>7&#xD7;1 + 6&#xD7;10 + 5&#xD7;9 + 4&#xD7;12 + 3&#xD7;3 + 2&#xD7;4 + 1&#xD7;1 = 178</code></p>
<p>We repeat the process with 178:</p>
<p><code>8x1 + 7x10 + 1x9 = 87</code></p>
<p>and again with 87:</p>
<p><code>7x1 + 8x10 = 87</code></p>
<p>...........................................................................</p>
<p>From now on the sequence is stationary and the remainder of <code>1234567</code> by <code>13</code> is 
the same as the remainder of <code>87</code> by <code>13</code>: <code>9</code></p>
<p>Call <code>thirt</code> the function which processes this sequence of operations on an integer <code>n (&gt;=0)</code>. <code>thirt</code> will return the stationary number.</p>
<p><code>thirt(1234567)</code> calculates 178, then 87, then 87 and returns <code>87</code>.</p>
<p><code>thirt(321)</code> calculates 48, 48 and returns <code>48</code></p>

### Solution