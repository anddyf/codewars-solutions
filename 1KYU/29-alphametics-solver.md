### Problem:
<!--Alphametics Solver-->
<p><span style="color:#8df"><a href="https://en.wikipedia.org/wiki/Verbal_arithmetic" style="color:#9f9;text-decoration:none" target="_blank">Alphametics</a></span> is a type of cryptarithm in which a set of words is written down in the form of a long addition sum or some other mathematical problem. The objective is to replace the letters of the alphabet with decimal digits to make a valid arithmetic sum.<br><br>
For this kata, your objective is to write a function that accepts an alphametic equation in the form of a single-line string and returns a valid arithmetic equation in the form of a single-line string.</p>

<h2 style="color:#f88">Test Examples</h2>

<pre><code>INPUT:    &quot;SEND + MORE = MONEY&quot;
SOLUTION: &quot;9567 + 1085 = 10652&quot;

INPUT:    &quot;ELEVEN + NINE + FIVE + FIVE = THIRTY&quot;
SOLUTION: &quot;797275 + 5057 + 4027 + 4027 = 810386&quot;</code></pre><p>Some puzzles may have multiple valid solutions; your function only needs to return one</p>

<pre><code>BIG + CAT = LION
403 + 679 = 1082
326 + 954 = 1280
304 + 758 = 1062
...etc.
</code></pre><h2 style="color:#f88">Technical Details</h2>
<ul>
    <li>All alphabetic letters in the input will be uppercase</li>
    <li>Each unique letter may only be assigned to one unique digit</li>
    <li>As a corollary to the above, there will be a maximum of <code>10</code> unique letters in any given test</li>
    <li>No leading zeroes</li>
    <li>The equations will only deal with addition with multiple summands on the left side and one term on the right side</li>
    <li>The number of summands will range between <code>2</code> and <code>7</code>, inclusive</li>
    <li>The length of each summand will range from <code>2</code> to <code>8</code> characters, inclusive</li>
    <li>All test cases will be valid and will have one or more possible solutions</li>
    <li>Full Test Suite: <code>15</code> fixed tests, <code>21</code> random tests for Python and Ruby / <code>18</code> random tests for JavaScript / <code>28</code> random tests for Go and C# / <code>136</code> random tests for Java</li>
    <li>Optimize your code -- a naive, brute-force algorithm may time out before the first test completes</li>
    <li>Use Python 3.6+ for the Python translation</li>
</ul>

<p>If you enjoyed this kata, be sure to check out <a href="https://www.codewars.com/users/docgunthrop/authored" style="color:#9f9;text-decoration:none" target="_blank">my other katas</a></p>
### Solution