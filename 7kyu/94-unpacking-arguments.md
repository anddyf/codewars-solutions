### Problem:
<p>You must create a function, <code>spread</code>, that takes a function and a list of arguments to be applied to that function. You must make this function return the result of calling the given function/lambda with the given arguments.</p>
<p>eg:</p>
<pre><code class="language-javascript">spread(someFunction, [<span class="hljs-number">1</span>, <span class="hljs-literal">true</span>, <span class="hljs-string">&quot;Foo&quot;</span>, <span class="hljs-string">&quot;bar&quot;</span>] ) 
<span class="hljs-comment">// is the same as...</span>
someFunction(<span class="hljs-number">1</span>, <span class="hljs-literal">true</span>, <span class="hljs-string">&quot;Foo&quot;</span>, <span class="hljs-string">&quot;bar&quot;</span>)</code></pre>
<pre style="display: none;"><code class="language-clojure">(<span class="hljs-name"><span class="hljs-builtin-name">spread</span></span> someFunction [<span class="hljs-number">1</span> <span class="hljs-literal">true</span> <span class="hljs-string">&quot;Foo&quot;</span> <span class="hljs-string">&quot;bar&quot;</span>] ) 
<span class="hljs-comment">; is the same as...</span>
(<span class="hljs-name">someFunction</span> <span class="hljs-number">1</span> <span class="hljs-literal">true</span> <span class="hljs-string">&quot;Foo&quot;</span> <span class="hljs-string">&quot;bar&quot;</span>)</code></pre>
<pre style="display: none;"><code class="language-coffeescript">spread someFunction, [<span class="hljs-number">1</span>, <span class="hljs-literal">true</span>, <span class="hljs-string">&quot;Foo&quot;</span>, <span class="hljs-string">&quot;bar&quot;</span>] 
<span class="hljs-comment"># is the same as...</span>
someFunction <span class="hljs-number">1</span>, <span class="hljs-literal">true</span>, <span class="hljs-string">&quot;Foo&quot;</span>, <span class="hljs-string">&quot;bar&quot;</span> </code></pre>
<pre style="display: none;"><code class="language-python">spread(someFunction, [<span class="hljs-number">1</span>, true, <span class="hljs-string">&quot;Foo&quot;</span>, <span class="hljs-string">&quot;bar&quot;</span>] ) 
<span class="hljs-comment"># is the same as...</span>
someFunction(<span class="hljs-number">1</span>, true, <span class="hljs-string">&quot;Foo&quot;</span>, <span class="hljs-string">&quot;bar&quot;</span>)</code></pre>
<pre style="display: none;"><code class="language-ruby">spread someFunction, [<span class="hljs-number">1</span>, <span class="hljs-literal">true</span>, <span class="hljs-string">&quot;Foo&quot;</span>, <span class="hljs-string">&quot;bar&quot;</span>] 
<span class="hljs-comment"># is the same as...</span>
someFunction.(<span class="hljs-number">1</span>, <span class="hljs-literal">true</span>, <span class="hljs-string">&quot;Foo&quot;</span>, <span class="hljs-string">&quot;bar&quot;</span>)</code></pre>

### Solution