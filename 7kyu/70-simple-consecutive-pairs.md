### Problem:
<p>In this Kata your task will be to return the count of pairs that have consecutive numbers as follows:</p>
<pre><code class="language-Haskell"><span class="hljs-title">pairs</span>([<span class="hljs-number">1</span>,<span class="hljs-number">2</span>,<span class="hljs-number">5</span>,<span class="hljs-number">8</span>,<span class="hljs-number">-4</span>,<span class="hljs-number">-3</span>,<span class="hljs-number">7</span>,<span class="hljs-number">6</span>,<span class="hljs-number">5</span>]) = <span class="hljs-number">3</span>
<span class="hljs-type">The</span> pairs are selected <span class="hljs-keyword">as</span> follows [(<span class="hljs-number">1</span>,<span class="hljs-number">2</span>),(<span class="hljs-number">5</span>,<span class="hljs-number">8</span>),(<span class="hljs-number">-4</span>,<span class="hljs-number">-3</span>),(<span class="hljs-number">7</span>,<span class="hljs-number">6</span>),<span class="hljs-number">5</span>]
<span class="hljs-comment">--the first pair is (1,2) and the numbers in the pair are consecutive; Count = 1</span>
<span class="hljs-comment">--the second pair is (5,8) and are not consecutive</span>
<span class="hljs-comment">--the third pair is (-4,-3), consecutive. Count = 2</span>
<span class="hljs-comment">--the fourth pair is (7,6), also consecutive. Count = 3. </span>
<span class="hljs-comment">--the last digit has no pair, so we ignore.</span></code></pre>
<p>More examples in the test cases. </p>
<p>Good luck!</p>
<p>Please also try <a href="https://www.codewars.com/kata/5b76a34ff71e5de9db0000f2" target="_blank">Simple time difference</a></p>

### Solution