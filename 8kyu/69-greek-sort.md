### Problem:
<p>Write a comparator for a list of phonetic words for the letters of the <a href="https://en.wikipedia.org/wiki/Greek_alphabet" target="_blank">greek alphabet</a>.</p>
<p>A comparator is:</p>
<blockquote>
<p><em>a custom comparison function of two arguments (iterable elements) which should return a negative, zero or positive number depending on whether the first argument is considered smaller than, equal to, or larger than the second argument</em></p>
</blockquote>
<p><em>(source: <a href="https://docs.python.org/2/library/functions.html#sorted" target="_blank">https://docs.python.org/2/library/functions.html#sorted</a>)</em></p>
<p>The greek alphabet is preloded for you as <code>greek_alphabet</code>:</p>
<pre><code class="language-python">greek_alphabet = (
    <span class="hljs-string">&apos;alpha&apos;</span>, <span class="hljs-string">&apos;beta&apos;</span>, <span class="hljs-string">&apos;gamma&apos;</span>, <span class="hljs-string">&apos;delta&apos;</span>, <span class="hljs-string">&apos;epsilon&apos;</span>, <span class="hljs-string">&apos;zeta&apos;</span>, 
    <span class="hljs-string">&apos;eta&apos;</span>, <span class="hljs-string">&apos;theta&apos;</span>, <span class="hljs-string">&apos;iota&apos;</span>, <span class="hljs-string">&apos;kappa&apos;</span>, <span class="hljs-string">&apos;lambda&apos;</span>, <span class="hljs-string">&apos;mu&apos;</span>, 
    <span class="hljs-string">&apos;nu&apos;</span>, <span class="hljs-string">&apos;xi&apos;</span>, <span class="hljs-string">&apos;omicron&apos;</span>, <span class="hljs-string">&apos;pi&apos;</span>, <span class="hljs-string">&apos;rho&apos;</span>, <span class="hljs-string">&apos;sigma&apos;</span>,
    <span class="hljs-string">&apos;tau&apos;</span>, <span class="hljs-string">&apos;upsilon&apos;</span>, <span class="hljs-string">&apos;phi&apos;</span>, <span class="hljs-string">&apos;chi&apos;</span>, <span class="hljs-string">&apos;psi&apos;</span>, <span class="hljs-string">&apos;omega&apos;</span>)</code></pre>
<h2 id="examples">Examples</h2>
<pre><code class="language-python">greek_comparator(<span class="hljs-string">&apos;alpha&apos;</span>, <span class="hljs-string">&apos;beta&apos;</span>)   &lt;  <span class="hljs-number">0</span>
greek_comparator(<span class="hljs-string">&apos;psi&apos;</span>, <span class="hljs-string">&apos;psi&apos;</span>)      == <span class="hljs-number">0</span>
greek_comparator(<span class="hljs-string">&apos;upsilon&apos;</span>, <span class="hljs-string">&apos;rho&apos;</span>)  &gt;  <span class="hljs-number">0</span></code></pre>

### Solution