### Problem:
<p>Find the last element of the given argument(s).</p>
<h2 id="examples">Examples</h2>
<pre style="display: none;"><code class="language-python">last([1, 2, 3, 4]) ==&gt;  4
last(&quot;xyz&quot;)        ==&gt; &quot;z&quot;
last(1, 2, 3, 4)   ==&gt;  4</code></pre>
<pre style="display: none;"><code class="language-ruby">last([<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>, <span class="hljs-number">4</span>]) <span class="hljs-comment"># =&gt;  4</span>
last(<span class="hljs-string">&quot;xyz&quot;</span>)        <span class="hljs-comment"># =&gt; &quot;z&quot;</span>
last(<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>, <span class="hljs-number">4</span>)   <span class="hljs-comment"># =&gt;  4</span></code></pre>
<pre><code class="language-haskell"><span class="hljs-title">last</span> [<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>, <span class="hljs-number">4</span>]     <span class="hljs-comment">-- =&gt;  4</span>
<span class="hljs-title">last</span> [&apos;x&apos;, &apos;y&apos;, &apos;z&apos;]  <span class="hljs-comment">-- =&gt; &apos;z&apos;</span></code></pre>
<pre style="display: none;"><code class="language-clojure">(<span class="hljs-name"><span class="hljs-builtin-name">last</span></span> [<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>, <span class="hljs-number">4</span>]) <span class="hljs-comment">; =&gt; 4</span>
(<span class="hljs-name"><span class="hljs-builtin-name">last</span></span> <span class="hljs-string">&quot;xyz&quot;</span>)        <span class="hljs-comment">; =&gt; \z</span></code></pre>
<pre style="display: none;"><code class="language-javascript">last([<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>, <span class="hljs-number">4</span>] ) <span class="hljs-comment">// =&gt;  4</span>
last(<span class="hljs-string">&quot;xyz&quot;</span>)         <span class="hljs-comment">// =&gt; &quot;z&quot;</span>
last(<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>, <span class="hljs-number">4</span>)    <span class="hljs-comment">// =&gt;  4</span></code></pre>
<pre style="display: none;"><code class="language-java">last(Arrays.asList(<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>, <span class="hljs-number">4</span>)); <span class="hljs-comment">// =&gt;  4</span>
last(<span class="hljs-string">&quot;xyz&quot;</span>);                     <span class="hljs-comment">// =&gt; &quot;z&quot;</span>
last(<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>, <span class="hljs-number">4</span>);                <span class="hljs-comment">// =&gt;  4</span>
last(<span class="hljs-keyword">new</span> <span class="hljs-keyword">int</span>[]{<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>, <span class="hljs-number">4</span>});     <span class="hljs-comment">// =&gt;  4</span></code></pre>
<pre style="display: none;"><code class="language-coffeescript">last [<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>, <span class="hljs-number">4</span>] <span class="hljs-comment"># =&gt;  4</span>
last <span class="hljs-string">&quot;xyz&quot;</span>        <span class="hljs-comment"># =&gt; &quot;z&quot;</span>
last <span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>, <span class="hljs-number">4</span>   <span class="hljs-comment"># =&gt;  4</span></code></pre>
<pre style="display: none;"><code class="language-rust">last(&amp;[<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>, <span class="hljs-number">4</span>])     <span class="hljs-comment">// =&gt;  4</span>
last(&amp;[<span class="hljs-string">&apos;x&apos;</span>, <span class="hljs-string">&apos;y&apos;</span>, <span class="hljs-string">&apos;z&apos;</span>])  <span class="hljs-comment">// =&gt; &apos;z&apos;</span></code></pre>
<p>In <strong>javascript</strong> and <strong>CoffeeScript</strong> a <strong>list</strong> will be an <code>array</code>, a <code>string</code> or the list of <code>arguments</code>.</p>
<p>(courtesy of <a href="http://www.haskell.org/haskellwiki/99_questions/1_to_10" target="_blank">haskell.org</a>)</p>

### Solution