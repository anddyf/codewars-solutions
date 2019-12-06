### Problem:
<p>We have an array of unique elements. A special kind of permutation is the one that has all of its elements in a different position than the original.</p>
<p>Let&apos;s see how many of these permutations may be generated from an array of four elements. We put the original array with square brackets and the wanted permutations with parentheses. </p>
<pre><code>arr = [1, 2, 3, 4]
      (2, 1, 4, 3)
      (2, 3, 4, 1)
      (2, 4, 1, 3)
      (3, 1, 4, 2)
      (3, 4, 1, 2)
      (3, 4, 2, 1)
      (4, 1, 2, 3)
      (4, 3, 1, 2)
      (4, 3, 2, 1)
      _____________
A total of 9 permutations with all their elements in different positions than arr</code></pre><p>The task for this kata would be to create a code to count all these permutations for an array of certain length.</p>
<p>Features of the random tests:</p>
<pre><code>l = length of the array
10 &#x2264; l &#x2264; 5000</code></pre><p>See the example tests.</p>
<p>Enjoy it!</p>

### Solution