### Problem:
<p>Compare two strings by comparing the sum of their values (ASCII character code).</p>
<ul>
<li>For comparing treat all letters as UpperCase</li>
<li><code>null/NULL/Nil/None</code> should be treated as empty strings</li>
<li>If the string contains other characters than letters, treat the whole string as it would be empty</li>
</ul>
<p>Your method should return <code>true</code>, if the strings are equal and <code>false</code> if they are not equal.</p>
<h2 id="examples">Examples:</h2>
<pre><code class="language-js"><span class="hljs-string">&quot;AD&quot;</span>, <span class="hljs-string">&quot;BC&quot;</span>  -&gt; equal
<span class="hljs-string">&quot;AD&quot;</span>, <span class="hljs-string">&quot;DD&quot;</span>  -&gt; not equal
<span class="hljs-string">&quot;gf&quot;</span>, <span class="hljs-string">&quot;FG&quot;</span>  -&gt; equal
<span class="hljs-string">&quot;zz1&quot;</span>, <span class="hljs-string">&quot;&quot;</span>   -&gt; equal (both are considered empty)
<span class="hljs-string">&quot;ZzZz&quot;</span>, <span class="hljs-string">&quot;ffPFF&quot;</span> -&gt; equal
<span class="hljs-string">&quot;kl&quot;</span>, <span class="hljs-string">&quot;lz&quot;</span>  -&gt; not equal
<span class="hljs-literal">null</span>, <span class="hljs-string">&quot;&quot;</span>    -&gt; equal</code></pre>

### Solution