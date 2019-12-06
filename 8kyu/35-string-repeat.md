### Problem:
<p>Write a function called <code>repeatString</code> which repeats the given String <code>src</code> exactly <code>count</code> times.</p>
<pre><code class="language-c">repeatStr(<span class="hljs-number">6</span>, <span class="hljs-string">&quot;I&quot;</span>) <span class="hljs-comment">// &quot;IIIIII&quot;</span>
repeatStr(<span class="hljs-number">5</span>, <span class="hljs-string">&quot;Hello&quot;</span>) <span class="hljs-comment">// &quot;HelloHelloHelloHelloHello&quot;</span></code></pre>
<pre style="display: none;"><code class="language-reason">repeat<span class="hljs-constructor">Str(6, <span class="hljs-string">&quot;I&quot;</span>)</span> <span class="hljs-comment">/* &quot;IIIIII&quot; */</span>
repeat<span class="hljs-constructor">Str(5, <span class="hljs-string">&quot;Hello&quot;</span>)</span> <span class="hljs-comment">//*&quot;HelloHelloHelloHelloHello&quot; */</span></code></pre>
<pre style="display: none;"><code class="language-lua">repeatStr(<span class="hljs-number">6</span>, <span class="hljs-string">&quot;I&quot;</span>) <span class="hljs-comment">-- &quot;IIIIII&quot;</span>
repeatStr(<span class="hljs-number">5</span>, <span class="hljs-string">&quot;Hello&quot;</span>) <span class="hljs-comment">-- &quot;HelloHelloHelloHelloHello&quot;</span></code></pre>
<pre style="display: none;"><code class="language-elixir">repeat_str(<span class="hljs-number">6</span>, <span class="hljs-string">&quot;I&quot;</span>) <span class="hljs-comment"># &quot;IIIIII&quot;</span>
repeat_str(<span class="hljs-number">5</span>, <span class="hljs-string">&quot;Hello&quot;</span>) <span class="hljs-comment"># &quot;HelloHelloHelloHelloHello&quot;</span></code></pre>
<pre style="display: none;"><code class="language-scala"><span class="hljs-type">StringRepeat</span>.repeatStr(<span class="hljs-number">6</span>, <span class="hljs-string">&quot;I&quot;</span>) # <span class="hljs-string">&quot;IIIIII&quot;</span>
<span class="hljs-type">StringRepeat</span>.repeatStr(<span class="hljs-number">5</span>, <span class="hljs-string">&quot;Hello&quot;</span>) # <span class="hljs-string">&quot;HelloHelloHelloHelloHello&quot;</span></code></pre>
<pre style="display: none;"><code class="language-nim">repeatStr(<span class="hljs-number">6</span>, <span class="hljs-string">&quot;I&quot;</span>) <span class="hljs-comment"># &quot;IIIIII&quot;</span>
repeatStr(<span class="hljs-number">5</span>, <span class="hljs-string">&quot;Hello&quot;</span>) <span class="hljs-comment"># &quot;HelloHelloHelloHelloHello&quot;</span></code></pre>
<pre style="display: none;"><code class="language-julia">repeatstr(<span class="hljs-number">6</span>, <span class="hljs-string">&quot;I&quot;</span>) <span class="hljs-comment"># &quot;IIIIII&quot;</span>
repeatstr(<span class="hljs-number">5</span>, <span class="hljs-string">&quot;Hello&quot;</span>) <span class="hljs-comment"># &quot;HelloHelloHelloHelloHello&quot;</span></code></pre>
<pre style="display: none;"><code class="language-kotlin">repeatstr(<span class="hljs-number">6</span>, <span class="hljs-string">&quot;I&quot;</span>) # <span class="hljs-string">&quot;IIIIII&quot;</span>
repeatstr(<span class="hljs-number">5</span>, <span class="hljs-string">&quot;Hello&quot;</span>) # <span class="hljs-string">&quot;HelloHelloHelloHelloHello&quot;</span></code></pre>
<pre style="display: none;"><code class="language-dart">repeatString(<span class="hljs-number">6</span>, <span class="hljs-string">&quot;I&quot;</span>) <span class="hljs-comment">// &quot;IIIIII&quot;</span>
repeatString(<span class="hljs-number">5</span>, <span class="hljs-string">&quot;Hello&quot;</span>) <span class="hljs-comment">// &quot;HelloHelloHelloHelloHello&quot;</span></code></pre>
<pre style="display: none;"><code class="language-racket">(<span class="hljs-name">repeat-string</span> <span class="hljs-number">6</span> <span class="hljs-string">&quot;I&quot;</span>) <span class="hljs-comment">; &quot;IIIIII&quot;</span>
(<span class="hljs-name">repeat-string</span> <span class="hljs-number">5</span> <span class="hljs-string">&quot;Hello&quot;</span>) <span class="hljs-comment">; &quot;HelloHelloHelloHelloHello&quot;</span></code></pre>

### Solution