### Problem:
<p>We have three numbers: <code>123489, 5, and 67</code>.
With these numbers we form the list from their digits in this order <code>[1, 5, 6, 2, 7, 3, 4, 8, 9]</code>.  It shouldn&apos;t take you long to figure out what to do to achieve this ordering.</p>
<p>Furthermore, we want to put a limit to the number of terms of the above list.</p>
<p>Instead of having 9 numbers, we only want 7, so we discard the two last numbers.</p>
<p>So, our list will be reduced to <code>[1, 5, 6, 2, 7, 3, 4]</code> (base list) </p>
<p>We form all the possible arrays, from the list above, and we calculate, for each array, the addition of their respective digits.</p>
<p>See the table below: we will put only some of them</p>
<pre><code>array for the list      sum (terms of arrays)
[1]                      1 # arrays with only one term (7 different arrays)
[5]                      5
[6]                      6
[2]                      2
[7]                      7
[3]                      3
[4]                      4

[1, 5]                   6 # arrays with two terms (42 different arrays)
[1, 6]                   7
[1, 2]                   3
[1, 7]                   8
[1, 3]                   4
[1, 4]                   5

.....                   ...
[1, 5, 6]               12 # arrays with three terms(210 different arrays)
[1, 5, 2]                8 
[1, 5, 7]               13 
[1, 5, 3]                9 
........                ...
[1, 5, 6, 2]            14 # arrays with four terms(840 different arrays)
[1, 5, 6, 7]            19 
[1, 5, 6, 3]            15 
[1, 5, 6, 4]            16 
............            ..
[1, 5, 6, 2, 7]         21 # arrays with five terms(2520 different arrays)
[1, 5, 6, 2, 3]         17 
[1, 5, 6, 2, 4]         18 
[1, 5, 6, 7, 2]         21 
...............         ..
[1, 5, 6, 2, 7, 3]      24 # arrays with six terms(5040 different arrays)
[1, 5, 6, 2, 7, 4]      25 
[1, 5, 6, 2, 3, 7]      24 
[1, 5, 6, 2, 3, 4]      21 
..................      .. 
[1, 5, 6, 2, 7, 3, 4]   28 # arrays with seven terms(5040 different arrays)
[1, 5, 6, 2, 7, 4, 3]   28   # arrays of max length = limit
[1, 5, 6, 2, 3, 7, 4]   28 
[1, 5, 6, 2, 3, 4, 7]   28 
:::::::::::::::::::::::::::
GreatT0talAdditions 328804 (GTA).(The total addition of the sum values corresponding to each permutation). A total 0f 13706 arrays, all of them different.</code></pre><p>So we say that for the three numbers, <code>123489, 5, and 67</code> with a limit = <code>7</code>, the GTA value is <code>328804</code>.</p>
<p>Let&apos;s see now a case where we have digits occurring more than once. If we have a digit duplicated or more, just continue for the corresponding digit in turn of the next number. The result will be a list with no duplicated digits.</p>
<p>For the numbers: <code>12348, 47, 3639</code> with <code>limit = 8</code>  we will have the list <code>[1, 4, 3, 2, 7, 6, 9, 8]</code> (base list)</p>
<p>We should not have duplications in the permutations because there are no duplicated
digits in our base list.</p>
<p>For this case we have:</p>
<pre><code>number of different array      number of terms the array has
              8                                  1 
             56                                  2 
            336                                  3
           1680                                  4
           6720                                  5
          20160                                  6
          40320                                  7
          40320                                  8
GTA = 3836040 with a limit of eight terms</code></pre><p>The challenge: create the function <code>gta()</code>, that receives a number that limits the amount of terms for the base list, <code>limit</code>, and an uncertain number of integers that can have and will have different amount of digits that may have digits occuring more than once.</p>
<p>Just to understand the structure of the function will be like: <code>gta(limit, n1, n2, ...nk)</code></p>
<p>Let&apos;s see our functions with the examples shown above.</p>
<pre><code class="language-python"><span class="hljs-comment"># case1</span>
gta(<span class="hljs-number">7</span>, <span class="hljs-number">123489</span>, <span class="hljs-number">5</span>, <span class="hljs-number">67</span>) == <span class="hljs-number">328804</span> <span class="hljs-comment"># base_list = [1, 5, 6, 2, 7, 3, 4]</span>

<span class="hljs-comment"># case2</span>
gta(<span class="hljs-number">8</span>, <span class="hljs-number">12348</span>, <span class="hljs-number">47</span>, <span class="hljs-number">3639</span>) == <span class="hljs-number">3836040</span> <span class="hljs-comment"># base_list = [1, 4, 3, 2, 7, 6, 9, 8]</span></code></pre>
<p>You may assume that <code>limit</code> will be always lower or equal than the total available digits of all the numbers. The total available digits are all the digits of all the numbers. (E.g.the numbers <code>12348, 47, 3639</code>have 8 available digits.)
You will always be receiving positive integers in an amount between 2 and 6.</p>
<p>For the tests <code>limit &lt;= 9</code> (obviously).</p>
<p>Enjoy it!!</p>
<p>(Hint: the module itertools for python may be very useful, but there are many ways to solve it.)</p>
<p>(The arrays [1, 5, 6] and [1, 6, 5] have the same elements but are different arrays. The order matters)</p>

### Solution