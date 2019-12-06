### Problem:
<p>A <a href="https://en.wikipedia.org/wiki/Narcissistic_number" target="_blank">Narcissistic Number</a> is a number which is the sum of its own digits, each raised to the power of the number of digits in a given base. In this Kata, we will restrict ourselves to decimal (base 10).</p>
<p>For example, take 153 (3 digits):</p>
<pre><code>    1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153</code></pre><p>and 1634 (4 digits):</p>
<pre><code>    1^4 + 6^4 + 3^4 + 4^4 = 1 + 1296 + 81 + 256 = 1634</code></pre><p>The Challenge:</p>
<p>Your code must return <strong>true or false</strong> depending upon whether the given number is a Narcissistic number in base 10.</p>
<p>Error checking for text strings or other invalid inputs is not required, only valid integers will be passed into the function. </p>

### Solution