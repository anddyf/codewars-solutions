### Problem:
<p>Consider the following expansion:</p>
<pre><code class="language-Haskell"><span class="hljs-title">solve</span>(<span class="hljs-string">&quot;3(ab)&quot;</span>) = <span class="hljs-string">&quot;ababab&quot;</span> <span class="hljs-comment">-- &quot;ab&quot; repeats 3 times</span>
<span class="hljs-title">solve</span>(<span class="hljs-string">&quot;2(a3(b))&quot;</span> = <span class="hljs-string">&quot;abbbabbb&quot;</span> <span class="hljs-comment">-- &quot;a3(b)&quot; == &quot;abbb&quot; repeats twice.</span></code></pre>
<p>Given a string, return the expansion of that string. </p>
<p>Input will consist of only lowercase letters and numbers (1 to 9) in valid parenthesis. There will be no letters or numbers after the last closing parenthesis.</p>
<p>More examples in test cases. </p>
<p>Good luck!</p>
<p>Please also try <a href="https://www.codewars.com/kata/5b76a34ff71e5de9db0000f2" target="_blank">Simple time difference</a></p>

### Solution