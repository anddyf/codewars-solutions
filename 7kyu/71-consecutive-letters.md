### Problem:
<p>In this Kata, we will check if a string contains consecutive letters as they appear in the English alphabet and if each letter occurs only once. </p>
<pre><code class="language-Haskell"><span class="hljs-type">For</span> example: 
<span class="hljs-title">solve</span>(<span class="hljs-string">&quot;abc&quot;</span>) = <span class="hljs-type">True</span>, because it contains a,b,c
<span class="hljs-title">solve</span>(<span class="hljs-string">&quot;abd&quot;</span>) = <span class="hljs-type">False</span>, because a, b, d are not consecutive.
<span class="hljs-title">solve</span>(<span class="hljs-string">&quot;dabc&quot;</span>) = <span class="hljs-type">True</span>, because it contains a, b, c, d
<span class="hljs-title">solve</span>(<span class="hljs-string">&quot;abbc&quot;</span>) = <span class="hljs-type">False</span>, because b does not occur once.
<span class="hljs-title">solve</span>(<span class="hljs-string">&quot;v&quot;</span>) = <span class="hljs-type">True</span></code></pre>
<p>All inputs will be lowercase letters. </p>
<p>More examples in test cases. Good luck!</p>

### Solution