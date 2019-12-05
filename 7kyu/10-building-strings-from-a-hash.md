### Problem:
<p>Complete the solution so that it takes the object (JavaScript/CoffeeScript) or hash (ruby) passed in and generates a human readable string from its key/value pairs. </p>
<p>The format should be &quot;KEY = VALUE&quot;. Each key/value pair should be separated by a comma except for the last pair.</p>
<p><strong>Example:</strong></p>
<pre><code class="language-javascript">solution({<span class="hljs-attr">a</span>: <span class="hljs-number">1</span>, <span class="hljs-attr">b</span>: <span class="hljs-string">&apos;2&apos;</span>}) <span class="hljs-comment">// should return &quot;a = 1,b = 2&quot;</span></code></pre>
<pre style="display: none;"><code class="language-coffeescript">solution({a: <span class="hljs-number">1</span>, b: <span class="hljs-string">&apos;2&apos;</span>}) <span class="hljs-comment"># should return &quot;a = 1,b = 2&quot;</span></code></pre>
<pre style="display: none;"><code class="language-ruby">solution({<span class="hljs-string">&quot;a&quot;</span> =&gt; <span class="hljs-number">1</span>, <span class="hljs-string">&quot;b&quot;</span> =&gt; <span class="hljs-string">&apos;2&apos;</span>}) <span class="hljs-comment"># should return &quot;a = 1,b = 2&quot;</span></code></pre>
<pre style="display: none;"><code class="language-csharp">Kata.StringifyDict(<span class="hljs-keyword">new</span> Dictionary&lt;<span class="hljs-keyword">char</span>, <span class="hljs-keyword">int</span>&gt; {{<span class="hljs-string">&apos;a&apos;</span>, <span class="hljs-number">1</span>}, {<span class="hljs-string">&apos;b&apos;</span>, <span class="hljs-number">2</span>}}) =&gt; <span class="hljs-string">&quot;a = 1,b = 2&quot;</span>;</code></pre>
<pre style="display: none;"><code class="language-fsharp"><span class="hljs-keyword">let</span> dict = [
    <span class="hljs-symbol">&apos;a</span>&apos;,<span class="hljs-number">1</span>
] |&gt; dict
<span class="hljs-keyword">let</span> dictionary = <span class="hljs-keyword">new</span> Dictionary&lt;char,int&gt;(dict)
solution dictionary == <span class="hljs-string">&quot;a = 1&quot;</span></code></pre>
<pre style="display: none;"><code class="language-python">solution({<span class="hljs-string">&quot;a&quot;</span>: <span class="hljs-number">1</span>, <span class="hljs-string">&quot;b&quot;</span>: <span class="hljs-string">&apos;2&apos;</span>}) <span class="hljs-comment"># should return &quot;a = 1,b = 2&quot;</span></code></pre>

### Solution