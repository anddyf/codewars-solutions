### Problem:
<p>
Write a function that receives two strings and returns n, where n is equal to the number of characters we should shift the first string forward to match the second.
</p> 

<p>For instance, take the strings &quot;fatigue&quot; and &quot;tiguefa&quot;. In this case, the first string has been rotated 5 characters forward to produce the second string, so 5 would be returned.</p>
If the second string isn&apos;t a valid rotation of the first string, the method returns -1. 

<h3 class="mtn">Examples:</h3>
```
&quot;coffee&quot;, &quot;eecoff&quot; =&gt; 2
&quot;eecoff&quot;, &quot;coffee&quot; =&gt; 4
&quot;moose&quot;, &quot;Moose&quot; =&gt; -1
&quot;isn&apos;t&quot;, &quot;&apos;tisn&quot; =&gt; 2
&quot;Esham&quot;, &quot;Esham&quot; =&gt; 0
&quot;dog&quot;, &quot;god&quot; =&gt; -1
```

<p>For Swift, your function should return an Int?. So rather than returning -1 when the second string isn&apos;t a valid rotation of the first, return nil.</p>
<pre><code class="language-swift">shiftedDiff(<span class="hljs-string">&quot;coffee&quot;</span>, <span class="hljs-string">&quot;eecoff&quot;</span>) =&gt; <span class="hljs-number">2</span>
shiftedDiff(<span class="hljs-string">&quot;eecoff&quot;</span>, <span class="hljs-string">&quot;coffee&quot;</span>) =&gt; <span class="hljs-number">4</span>
shiftedDiff(<span class="hljs-string">&quot;moose&quot;</span>, <span class="hljs-string">&quot;Moose&quot;</span>) =&gt; <span class="hljs-literal">nil</span>
shiftedDiff(<span class="hljs-string">&quot;isn&apos;t&quot;</span>, <span class="hljs-string">&quot;&apos;tisn&quot;</span>) =&gt; <span class="hljs-number">2</span>
shiftedDiff(<span class="hljs-string">&quot;Esham&quot;</span>, <span class="hljs-string">&quot;Esham&quot;</span>) =&gt; <span class="hljs-number">0</span>
shiftedDiff(<span class="hljs-string">&quot;dog&quot;</span>, <span class="hljs-string">&quot;god&quot;</span>) =&gt; <span class="hljs-literal">nil</span></code></pre>

### Solution