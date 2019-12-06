### Problem:
<p>Implement the validate_args decorator, which raises an error <strong>(InvalidArgument)</strong> when the decorated function is called with arguments of the wrong type. Validate_args takes in a sequence of argument types as a variable number of arguments. You do not have to check that the number of arguments matches, only their type (number of arguments will not be tested).</p>
<p>Your decorator must be well-behaved, i.e. the returned function must have the same name and docstring as the original, and must be able to handle the same arguments.</p>
<p>Example :</p>
<pre><code class="language-python"><span class="hljs-meta">@validate_args(str)</span>
<span class="hljs-function"><span class="hljs-keyword">def</span> <span class="hljs-title">say_hello</span><span class="hljs-params">(name)</span>:</span>
  <span class="hljs-keyword">return</span> <span class="hljs-string">&quot;Hello, &quot;</span> + name

say_hello(<span class="hljs-number">1</span>) <span class="hljs-comment"># Raises InvalidArgument</span>
say_hello(<span class="hljs-string">&quot;Python&quot;</span>) <span class="hljs-comment"># Returns &quot;Hello, Python&quot;</span></code></pre>
<p>InvalidArgument is preloaded for you. You may use it as if you had defined it in your own code.</p>

### Solution