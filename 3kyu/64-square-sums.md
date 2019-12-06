### Problem:
<p>This is harder version of <a href="/kata/square-sums-simple" target="_blank">Square sums (simple)</a>.</p>
<h1 id="square-sums">Square sums</h1>
<p>Write function <code>square_sums</code> that, given integer number <code>N</code> (in range <code>2..1000</code>), returns array of integers <code>1..N</code> arranged in a way, so sum of each 2 consecutive numbers is a square.</p>
<p>Solution is valid if and only if following two criterias are met:</p>
<ol>
<li>Each number in range <code>1..N</code> is used once and only once.</li>
<li>Sum of each 2 consecutive numbers is a perfect square.</li>
</ol>
<h3 id="example">Example</h3>
<p>For N=15 solution could look like this:</p>
<p><code>[ 9, 7, 2, 14, 11, 5, 4, 12, 13, 3, 6, 10, 15, 1, 8 ]</code></p>
<h3 id="verification">Verification</h3>
<ol>
<li>All numbers are used once and only once. When sorted in ascending order array looks like this:</li>
</ol>
<p><code>[ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15 ]</code></p>
<ol start="2">
<li>Sum of each 2 consecutive numbers is a perfect square:</li>
</ol>
<pre><code>   16    16     16     16     16     16     16
   /+\   /+\    /+\    /+\    /+\    /+\    /+\
[ 9, 7, 2, 14, 11, 5, 4, 12, 13, 3, 6, 10, 15, 1, 8 ]
      \+/    \+/    \+/    \+/    \+/    \+/    \+/
       9     25      9     25      9     25      9

9 = 3*3
16 = 4*4
25 = 5*5</code></pre><p>If there is no solution, return <code>False</code> (empty vector in C++). For example if <code>N=5</code>, then numbers <code>1,2,3,4,5</code> cannot be put into square sums row: <code>1+3=4</code>, <code>4+5=9</code>, but
<code>2</code> has no pairs and cannot link <code>[1,3]</code> and <code>[4,5]</code></p>
<p>Hint: if execution of the function takes more than 100 ms, you might want to try something else: there are &gt;200 tests, and you have only 12 seconds.</p>
<p><strong>Note 1</strong>: brute force solutions can only go up to <code>N=50</code>.</p>
<p>Code size is restricted to 20K max, and external modules are disabled: inlining all results precalculated is not an option.</p>
<h1 id="have-fun">Have fun!</h1>
<p>Simple version of this Kata is <a href="/kata/square-sums-simple" target="_blank">here</a>.</p>

### Solution