### Problem:
<p>Given an input n, write a function <code>always</code> that returns a <strong>function</strong> which returns n. Ruby should return a <strong>lambda</strong> or a <strong>proc</strong>.</p>
<pre><code class="language-javascript"><span class="hljs-keyword">var</span> three = always(<span class="hljs-number">3</span>);
three(); <span class="hljs-comment">// returns 3</span></code></pre>
<pre style="display: none;"><code class="language-coffeescript">three = always(<span class="hljs-number">3</span>)
three() <span class="hljs-comment"># returns 3</span></code></pre>
<pre style="display: none;"><code class="language-ruby">three = always(<span class="hljs-number">3</span>)
three.call <span class="hljs-comment"># returns 3</span></code></pre>
<pre style="display: none;"><code class="language-python">three = always(<span class="hljs-number">3</span>)
three() /* returns <span class="hljs-number">3</span> */</code></pre>
<pre style="display: none;"><code class="language-haskell"><span class="hljs-title">let</span> three = always <span class="hljs-number">3</span>
<span class="hljs-title">three</span> () <span class="hljs-comment">-- returns 3</span></code></pre>
<pre style="display: none;"><code class="language-clojure">(<span class="hljs-name"><span class="hljs-builtin-name">def</span></span> three (<span class="hljs-name">always</span> <span class="hljs-number">3</span>))
(<span class="hljs-name">three</span>) <span class="hljs-comment">;; returns 3</span></code></pre>
<pre style="display: none;"><code class="language-elixir">three = always(<span class="hljs-number">3</span>)
three.() <span class="hljs-comment">#=&gt; 3</span></code></pre>
<pre style="display: none;"><code class="language-cpp">function&lt;<span class="hljs-keyword">int</span> (<span class="hljs-keyword">void</span>)&gt; three = always(<span class="hljs-number">3</span>);
three(); <span class="hljs-comment">// returns 3</span></code></pre>
<pre style="display: none;"><code class="language-csharp">Func&lt;<span class="hljs-keyword">int</span>&gt; three = Kata.Always(<span class="hljs-number">3</span>);
three(); <span class="hljs-comment">// returns 3</span></code></pre>

### Solution