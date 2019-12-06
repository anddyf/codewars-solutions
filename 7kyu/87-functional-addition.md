### Problem:
<p>Create a function <code>add(n)</code>/<code>Add(n)</code> which returns a function that always adds n to any number</p>
<p>Note for Java: the return type and methods have not been provided to make it a bit more challenging.</p>
<pre><code class="language-js"><span class="hljs-keyword">var</span> addOne = add(<span class="hljs-number">1</span>);
addOne(<span class="hljs-number">3</span>); <span class="hljs-comment">// 4</span>

<span class="hljs-keyword">var</span> addThree = add(<span class="hljs-number">3</span>);
addThree(<span class="hljs-number">3</span>); <span class="hljs-comment">// 6</span></code></pre>
<pre style="display: none;"><code class="language-python">add_one = add(<span class="hljs-number">1</span>)
add_one(<span class="hljs-number">3</span>)  <span class="hljs-comment"># 4</span>

add_three = add(<span class="hljs-number">3</span>)
add_three(<span class="hljs-number">3</span>) <span class="hljs-comment"># 6</span></code></pre>
<pre style="display: none;"><code class="language-haskell"><span class="hljs-title">addOne</span> = add <span class="hljs-number">1</span>
<span class="hljs-title">addOne</span> <span class="hljs-number">3</span> `shouldBe` <span class="hljs-number">4</span></code></pre>
<pre style="display: none;"><code class="language-fsharp">addOne = add <span class="hljs-number">1</span>
addOne <span class="hljs-number">3</span> # <span class="hljs-number">4</span></code></pre>
<pre style="display: none;"><code class="language-swift">addOne = add(<span class="hljs-number">1</span>)
addOne(<span class="hljs-number">3</span>) <span class="hljs-comment">// 4</span></code></pre>
<pre style="display: none;"><code class="language-csharp">Func&lt;<span class="hljs-keyword">double</span>, <span class="hljs-keyword">double</span>&gt; AddOne = Kata.Add(<span class="hljs-number">1</span>);
AddOne(<span class="hljs-number">3</span>) =&gt; <span class="hljs-number">4</span></code></pre>
<pre style="display: none;"><code class="language-java">...returnType addOne = Kata.add(<span class="hljs-number">1</span>);
addOne.method(<span class="hljs-number">3</span>) =&gt; <span class="hljs-number">4</span></code></pre>
<pre style="display: none;"><code class="language-go"><span class="hljs-keyword">var</span> addOne = Add(<span class="hljs-number">1</span>)
addOne(<span class="hljs-number">3</span>) <span class="hljs-comment">// 4</span></code></pre>

### Solution