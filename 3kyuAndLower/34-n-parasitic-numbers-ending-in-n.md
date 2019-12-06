### Problem:
<p>This challenge is to compute a special set of <a href="https://en.wikipedia.org/wiki/Parasitic_number" target="_blank">parasitic numbers</a> for various number bases.</p>
<blockquote>
<p>An n-parasitic number (in base 10) is a positive natural number which can be multiplied by n by moving the rightmost digit of its decimal representation to the front. Here n is itself a single-digit positive natural number. In other words, the decimal representation undergoes a right circular shift by one place. For example, 4 &#x2022; 128205 = 512820, so 128205 is 4-parasitic</p>
</blockquote>
<h2 id="special-parasitic-numbers">Special Parasitic Numbers</h2>
<p>For some N there may be multiple N-parasitic numbers. This Kata is concerned with finding a special set of n-parasitic numbers where the trailing digit is also the &apos;N&apos; in the N-parasitic number. In base-10, the above Wikipedia excerpt shows that 128205 is 4-parasitic since 4 &#x2022; 128205 = 512820; however, the special number this Kata is looking for is the smallest 4-parasitic number that also ends in 4, which is 102564: 4 &#x2022; 102564 = 410256.</p>
<blockquote>
<h3>A Clarifying Anti-Example</h3>
The &quot;ending in N&quot; portion of the requirements seems easily missed. While 5 &#x2022; 142857 = 714285, this 142857 number is parasitic but it is <u>not</u> the number sought by this kata because it ends with a 7 in the ones&apos; place rather than &apos;n&apos; (which is 5 in this case).

<pre><code>         v--- kata requires this digit to be 5 for n = 5
5 &#x2022; 142857 = 714285
             ^--- kata requires this digit to be 5 for n = 5</code></pre><p>While the product happens to end with a 5 in the one&apos;s place, that ends-with-N requirement is on the multiplicand <u>not</u> on the product. The answer sought is much bigger than 142857 for n = 5.</p>
</blockquote>

<h2 id="challenge">Challenge</h2>
<p>Provide a method accepting two arguments: the special trailing digit and a number base. Your method should return the string representation of the smallest integer having the special parasitic number property as described above in the requested number-base (octal, decimal and hex.) Each number base will test for all trailing digits other than 0 and 1, giving a total of 28 test cases.</p>
<h2 id="why-the-smallest">Why the smallest?</h2>
<p>Consider how the special 4-parastic HEX number ending in 4 is 104. </p>
<p><code>104 Hex &#x2022; 4 = 410 Hex.</code></p>
<p>Repeating <code>104</code> twice and multiplying by 4 gives us <code>104104 Hex &#x2022; 4 = 410410 Hex</code>. This property holds regardless of how many times the set of digits is repeated (e.g., <code>104104 Hex &#x2022; 4 = 410410 Hex, 104104104 Hex &#x2022; 4 = 410410410 Hex, 104104104104 Hex &#x2022; 4 = 410410410410 Hex, ...</code>), leading to an infinite set of these special numbers in each case. Your task is to find only the smallest number that satisfies the special parasitic property. [This fact is a hint on one possible way to solve this problem.]</p>
<h2 id="hints">Hints:</h2>
<ul>
<li>Unless you can be clever about it, brute force techniques probably won&apos;t work.</li>
<li>An answer exists satisfying the criteria for each of the trailing-digits tested.</li>
<li>Leading zero-digits are not allowed.</li>
<li>Test failures will reveal the inputs rather than the expected value.</li>
</ul>
<p>###After you have solved it:
Can you find two other algorithmically different approaches to solve this puzzle? The refrence solutions in javascript, c# and python solve the puzzle in fundamentally different ways.</p>

### Solution