### Problem:
<p>ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits. </p>
<p>If the function is passed a valid PIN string, return true, else return false.</p>
<p>eg: </p>
<pre><code class="language-javascript">validatePIN(<span class="hljs-string">&quot;1234&quot;</span>) === <span class="hljs-literal">true</span>
validatePIN(<span class="hljs-string">&quot;12345&quot;</span>) === <span class="hljs-literal">false</span>
validatePIN(<span class="hljs-string">&quot;a234&quot;</span>) === <span class="hljs-literal">false</span></code></pre>
<pre style="display: none;"><code class="language-coffeescript">validatePIN(<span class="hljs-string">&quot;1234&quot;</span>) == <span class="hljs-literal">true</span>
validatePIN(<span class="hljs-string">&quot;12345&quot;</span>) == <span class="hljs-literal">false</span>
validatePIN(<span class="hljs-string">&quot;a234&quot;</span>) == <span class="hljs-literal">false</span></code></pre>
<pre style="display: none;"><code class="language-typescript">validatePIN(<span class="hljs-string">&quot;1234&quot;</span>) === <span class="hljs-literal">true</span>
validatePIN(<span class="hljs-string">&quot;12345&quot;</span>) === <span class="hljs-literal">false</span>
validatePIN(<span class="hljs-string">&quot;a234&quot;</span>) === <span class="hljs-literal">false</span></code></pre>
<pre style="display: none;"><code class="language-python">validate_pin(<span class="hljs-string">&quot;1234&quot;</span>) == <span class="hljs-literal">True</span>
validate_pin(<span class="hljs-string">&quot;12345&quot;</span>) == <span class="hljs-literal">False</span>
validate_pin(<span class="hljs-string">&quot;a234&quot;</span>) == <span class="hljs-literal">False</span></code></pre>
<pre style="display: none;"><code class="language-csharp">ValidatePin(<span class="hljs-string">&quot;1234&quot;</span>) =&gt; <span class="hljs-function"><span class="hljs-literal">true</span>
<span class="hljs-title">ValidatePin</span>(<span class="hljs-params"><span class="hljs-string">&quot;12345&quot;</span></span>)</span> =&gt; <span class="hljs-function"><span class="hljs-literal">false</span>
<span class="hljs-title">ValidatePin</span>(<span class="hljs-params"><span class="hljs-string">&quot;a234&quot;</span></span>)</span> =&gt; <span class="hljs-literal">false</span></code></pre>
<pre style="display: none;"><code class="language-java">Solution.validatePin(<span class="hljs-string">&quot;1234&quot;</span>) === <span class="hljs-keyword">true</span>
Solution.validatePin(<span class="hljs-string">&quot;12345&quot;</span>) === <span class="hljs-keyword">false</span>
Solution.validatePin(<span class="hljs-string">&quot;a234&quot;</span>) === <span class="hljs-keyword">false</span></code></pre>

### Solution