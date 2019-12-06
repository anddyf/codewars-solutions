### Problem:
<h3 id="welcome-to-the-challenge-edition-of-upside-down-numbers">Welcome to the Challenge Edition of <em>Upside-Down Numbers</em></h3>
<p>In the <a href="https://www.codewars.com/kata/59f7597716049833200001eb" target="_blank">original kata by @KenKamau</a> you were limited to integers below <code>2^17</code>. Here, you will be given strings of digits of up to <code>42</code> characters in length (upper bound is <code>10^42 - 1</code>).</p>
<p>Your task is essentially the same, but an additional challenge is creating a fast, efficient solution.</p>
<h3 id="input">Input:</h3>
<p>Your function will receive two strings, each comprised of digits representing a positive integer. These two values will represent the upper and lower bounds of a range.</p>
<h3 id="output">Output:</h3>
<p>Your function must return the number of valid upside down numbers within the range of the two input arguments, including both upper and lower bounds.</p>
<h3 id="what-is-an-upside-down-number">What is an Upside-Down Number?</h3>
<p>An upside down number is an integer that appears the same when rotated 180 degrees, as illustrated below.</p>
<p><img src="https://i.imgur.com/Biixbsd.png" alt="1961 - OK, 88 - OK, 101 - OK, 25 - No"></p>
<p><strong>Example:</strong></p>
<pre><code class="language-javascript"><span class="hljs-keyword">const</span> x = <span class="hljs-string">&apos;0&apos;</span>,
      y = <span class="hljs-string">&apos;25&apos;</span>;
upsideDown(x,y); <span class="hljs-comment">//4</span>
<span class="hljs-comment">//the valid numbers in the range are 0, 1, 8, and 11</span></code></pre>
<pre style="display: none;"><code class="language-python">x = <span class="hljs-string">&apos;0&apos;</span>
y = <span class="hljs-string">&apos;25&apos;</span>
upsidedown(x,y) <span class="hljs-comment">#4</span>
<span class="hljs-comment"># the valid numbers in the range are 0, 1, 8, and 11</span></code></pre>
<pre style="display: none;"><code class="language-go"><span class="hljs-keyword">var</span> x,y <span class="hljs-keyword">string</span> = <span class="hljs-string">&quot;0&quot;</span>,<span class="hljs-string">&quot;25&quot;</span>
upsideDown(x,y); <span class="hljs-comment">//4</span>
<span class="hljs-comment">//the valid numbers in the range are 0, 1, 8, and 11</span></code></pre>
<pre style="display: none;"><code class="language-csharp"><span class="hljs-keyword">string</span> x = <span class="hljs-string">&quot;0&quot;</span>, y = <span class="hljs-string">&quot;25&quot;</span>;
UpsideDownNumbers.UpsideDown(x, y); <span class="hljs-comment">//4</span>
<span class="hljs-comment">//the valid numbers in the range are 0, 1, 8, and 11</span></code></pre>
<h3 id="additional-notes">Additional Notes:</h3>
<ul>
<li>All inputs will be valid.</li>
<li>The first argument will always be less than the second argument (ie. the range will always be valid).</li>
</ul>
<p>If you enjoyed this kata, be sure to check out <a href="https://www.codewars.com/users/docgunthrop/authored" target="_blank">my other katas</a>.</p>

### Solution