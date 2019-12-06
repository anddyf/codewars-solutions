### Problem:
<p>Implement a function that receives two IPv4 addresses, and returns the number of addresses between them (including the first one, excluding the last one).</p>
<p>All inputs will be valid IPv4 addresses in the form of strings. The last address will always be greater than the first one.</p>
<hr>
<h2 id="examples">Examples</h2>
<pre style="display: none;"><code class="language-python">ips_between(<span class="hljs-string">&quot;10.0.0.0&quot;</span>, <span class="hljs-string">&quot;10.0.0.50&quot;</span>)  ==   <span class="hljs-number">50</span> 
ips_between(<span class="hljs-string">&quot;10.0.0.0&quot;</span>, <span class="hljs-string">&quot;10.0.1.0&quot;</span>)   ==  <span class="hljs-number">256</span> 
ips_between(<span class="hljs-string">&quot;20.0.0.10&quot;</span>, <span class="hljs-string">&quot;20.0.1.0&quot;</span>)  ==  <span class="hljs-number">246</span></code></pre>
<pre><code class="language-javascript">ipsBetween(<span class="hljs-string">&quot;10.0.0.0&quot;</span>, <span class="hljs-string">&quot;10.0.0.50&quot;</span>)  ===   <span class="hljs-number">50</span> 
ipsBetween(<span class="hljs-string">&quot;10.0.0.0&quot;</span>, <span class="hljs-string">&quot;10.0.1.0&quot;</span>)   ===  <span class="hljs-number">256</span> 
ipsBetween(<span class="hljs-string">&quot;20.0.0.10&quot;</span>, <span class="hljs-string">&quot;20.0.1.0&quot;</span>)  ===  <span class="hljs-number">246</span></code></pre>
<pre style="display: none;"><code class="language-sql">   first    |    last     | ips_between
<span class="hljs-comment">------------+-------------+-------------</span>
 &apos;10.0.0.0&apos; | &apos;10.0.0.50&apos; |      50 
 &apos;10.0.0.0&apos; |  &apos;10.0.1.0&apos; |     256 
&apos;20.0.0.10&apos; |  &apos;20.0.1.0&apos; |     246</code></pre>

### Solution