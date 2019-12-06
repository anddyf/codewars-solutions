### Problem:
<p>Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:</p>
<pre><code class="language-ruby">domain_name(<span class="hljs-string">&quot;http://github.com/carbonfive/raygun&quot;</span>) == <span class="hljs-string">&quot;github&quot;</span> 
domain_name(<span class="hljs-string">&quot;http://www.zombie-bites.com&quot;</span>) == <span class="hljs-string">&quot;zombie-bites&quot;</span>
domain_name(<span class="hljs-string">&quot;https://www.cnet.com&quot;</span>) == <span class="hljs-string">&quot;cnet&quot;</span></code></pre>
<pre style="display: none;"><code class="language-python">domain_name(<span class="hljs-string">&quot;http://github.com/carbonfive/raygun&quot;</span>) == <span class="hljs-string">&quot;github&quot;</span> 
domain_name(<span class="hljs-string">&quot;http://www.zombie-bites.com&quot;</span>) == <span class="hljs-string">&quot;zombie-bites&quot;</span>
domain_name(<span class="hljs-string">&quot;https://www.cnet.com&quot;</span>) == <span class="hljs-string">&quot;cnet&quot;</span></code></pre>
<pre style="display: none;"><code class="language-javascript">domainName(<span class="hljs-string">&quot;http://github.com/carbonfive/raygun&quot;</span>) == <span class="hljs-string">&quot;github&quot;</span> 
domainName(<span class="hljs-string">&quot;http://www.zombie-bites.com&quot;</span>) == <span class="hljs-string">&quot;zombie-bites&quot;</span>
domainName(<span class="hljs-string">&quot;https://www.cnet.com&quot;</span>) == <span class="hljs-string">&quot;cnet&quot;</span></code></pre>

### Solution