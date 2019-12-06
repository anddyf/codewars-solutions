### Problem:
<p>An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.</p>
<pre><code class="language-haskell"><span class="hljs-title">isIsogram</span> <span class="hljs-string">&quot;Dermatoglyphics&quot;</span> == true
<span class="hljs-title">isIsogram</span> <span class="hljs-string">&quot;aba&quot;</span> == false
<span class="hljs-title">isIsogram</span> <span class="hljs-string">&quot;moOse&quot;</span> == false <span class="hljs-comment">-- ignore letter case</span></code></pre>
<pre style="display: none;"><code class="language-javascript">isIsogram(<span class="hljs-string">&quot;Dermatoglyphics&quot;</span>) == <span class="hljs-literal">true</span>
isIsogram(<span class="hljs-string">&quot;aba&quot;</span>) == <span class="hljs-literal">false</span>
isIsogram(<span class="hljs-string">&quot;moOse&quot;</span>) == <span class="hljs-literal">false</span> <span class="hljs-comment">// -- ignore letter case</span></code></pre>
<pre style="display: none;"><code class="language-python">is_isogram(<span class="hljs-string">&quot;Dermatoglyphics&quot;</span> ) == true
is_isogram(<span class="hljs-string">&quot;aba&quot;</span> ) == false
is_isogram(<span class="hljs-string">&quot;moOse&quot;</span> ) == false <span class="hljs-comment"># -- ignore letter case</span></code></pre>
<pre style="display: none;"><code class="language-ruby">is_isogram(<span class="hljs-string">&quot;Dermatoglyphics&quot;</span> ) == <span class="hljs-literal">true</span>
is_isogram(<span class="hljs-string">&quot;aba&quot;</span> ) == <span class="hljs-literal">false</span>
is_isogram(<span class="hljs-string">&quot;moOse&quot;</span> ) == <span class="hljs-literal">false</span> <span class="hljs-comment"># -- ignore letter case</span></code></pre>
<pre style="display: none;"><code class="language-C">is_isogram(<span class="hljs-string">&quot;Dermatoglyphics&quot;</span> ) == <span class="hljs-literal">true</span>;
is_isogram(<span class="hljs-string">&quot;aba&quot;</span> ) == <span class="hljs-literal">false</span>;
is_isogram(<span class="hljs-string">&quot;moOse&quot;</span> ) == <span class="hljs-literal">false</span>; <span class="hljs-comment">// -- ignore letter case</span></code></pre>

### Solution