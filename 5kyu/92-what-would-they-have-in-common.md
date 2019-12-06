### Problem:
<p>We are interested in obtaining two scores from a given integer:</p>
<p><strong>First score</strong>: The sum of all the integers obtained from the power set of the digits of the given integer that have the same order </p>
<p>E.g:</p>
<pre><code>integer = 1234 ---&gt; (1 + 2 + 3 + 4) + (12 + 13 + 14 + 23 + 24 + 34) + 
(123 + 124 + 134 + 234) + 1234 = 10 + 120 + 615 + 1234 = 1979</code></pre><p><strong>Second score</strong>: The sum of all the integers obtained from the all the contiguous substrings of the given integer as a string.</p>
<p>E.g.</p>
<pre><code>integer = 1234 ---&gt; (1 + 2 + 3 + 4) + (12 + 23 + 34) + (123 + 234) + 1234 = 10 + 69 + 357 + 1234 = 1670</code></pre><p>The first integer, higher than <code>100</code>, that has both scores with <code>3</code> common divisors is <code>204</code>. Its first score is <code>258</code> and the second one <code>234</code>. The common divisors for both scores are <code>2, 3, 6</code>.</p>
<p>In fact the integers <code>294</code> and <code>468</code> are the ones in the range <code>[100, 500]</code>, that have both scores with <code>7</code> common divisors, the maximum amount of common factors in that range.</p>
<p>Your task in this kata is to create a function that may find the integer or integers that have the maximum amount of common divisors for the scores described above.</p>
<p>The example given above will be:</p>
<pre><code class="language-python">find_int_inrange(<span class="hljs-number">100</span>, <span class="hljs-number">500</span>) == [<span class="hljs-number">7</span>, <span class="hljs-number">294</span>, <span class="hljs-number">468</span>]</code></pre>
<p>As you can see, the function should receive the limits of a range [a, b], and outputs an array with the maximum amount of factors, <code>max_am_div</code> and the found numbers sorted</p>
<pre><code>find_int_inrange(a, b) ----&gt; [max_am_div, k1, k2, ...., kn] # k1 &lt; k2 &lt; ...&lt; kn</code></pre><p>The function may output only one number.</p>
<pre><code class="language-python">find_int_inrange(<span class="hljs-number">100</span>, <span class="hljs-number">300</span>) == [<span class="hljs-number">7</span>, <span class="hljs-number">294</span>]</code></pre>
<p>Enjoy it!</p>
<p>Features of the random tests:</p>
<pre><code>100 &lt; a &lt; b &lt; 55000 </code></pre>
### Solution