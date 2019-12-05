### Problem:
<p>In this Kata, you will be given a string that may have mixed uppercase and lowercase letters and your task is to convert that string to either lowercase only or uppercase only based on: </p>
<ul>
<li>make as few changes as possible. </li>
<li>if the string contains equal number of uppercase and lowercase letters, convert the string to lowercase. </li>
</ul>
<p>For example:</p>
<pre><code class="language-Haskell"><span class="hljs-title">solve</span>(<span class="hljs-string">&quot;coDe&quot;</span>) = <span class="hljs-string">&quot;code&quot;</span>. <span class="hljs-type">Lowercase</span> characters &gt; uppercase. <span class="hljs-type">Change</span> only the <span class="hljs-string">&quot;D&quot;</span> to lowercase.
<span class="hljs-title">solve</span>(<span class="hljs-string">&quot;CODe&quot;</span>) = <span class="hljs-string">&quot;CODE&quot;</span>. <span class="hljs-type">Uppercase</span> characters &gt; lowecase. <span class="hljs-type">Change</span> only the <span class="hljs-string">&quot;e&quot;</span> to uppercase.
<span class="hljs-title">solve</span>(<span class="hljs-string">&quot;coDE&quot;</span>) = <span class="hljs-string">&quot;code&quot;</span>. <span class="hljs-type">Upper</span> == lowercase. <span class="hljs-type">Change</span> all to lowercase.</code></pre>
<p>More examples in test cases. Good luck!</p>
<p>Please also try:</p>
<p><a href="https://www.codewars.com/kata/5b76a34ff71e5de9db0000f2" target="_blank">Simple time difference</a></p>
<p><a href="https://www.codewars.com/kata/5ba38ba180824a86850000f7" target="_blank">Simple remove duplicates</a></p>

### Solution