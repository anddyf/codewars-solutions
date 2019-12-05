### Problem:
<p>Jack really likes his number five: the trick here is that you have to multiply each number by 5 raised to the number of digits of each numbers, so, for example:</p>
<pre><code class="language-javascript">multiply(<span class="hljs-number">3</span>)==<span class="hljs-number">15</span>
multiply(<span class="hljs-number">10</span>)==<span class="hljs-number">250</span>
multiply(<span class="hljs-number">200</span>)==<span class="hljs-number">25000</span>
multiply(<span class="hljs-number">0</span>)==<span class="hljs-number">0</span>
multiply(<span class="hljs-number">-3</span>)==<span class="hljs-number">-15</span></code></pre>
<pre style="display: none;"><code class="language-python">multiply(<span class="hljs-number">3</span>)==<span class="hljs-number">15</span>
multiply(<span class="hljs-number">10</span>)==<span class="hljs-number">250</span>
multiply(<span class="hljs-number">200</span>)==<span class="hljs-number">25000</span>
multiply(<span class="hljs-number">0</span>)==<span class="hljs-number">0</span>
multiply(<span class="hljs-number">-3</span>)==<span class="hljs-number">-15</span></code></pre>
<pre style="display: none;"><code class="language-ruby">multiply(<span class="hljs-number">3</span>)==<span class="hljs-number">15</span>
multiply(<span class="hljs-number">10</span>)==<span class="hljs-number">250</span>
multiply(<span class="hljs-number">200</span>)==<span class="hljs-number">25000</span>
multiply(<span class="hljs-number">0</span>)==<span class="hljs-number">0</span>
multiply(-<span class="hljs-number">3</span>)==-<span class="hljs-number">15</span></code></pre>
<pre style="display: none;"><code class="language-haskell"><span class="hljs-title">multiply</span>   <span class="hljs-number">3</span>  `shouldBe`    <span class="hljs-number">15</span>
<span class="hljs-title">multiply</span>  <span class="hljs-number">10</span>  `shouldBe`   <span class="hljs-number">250</span>
<span class="hljs-title">multiply</span> <span class="hljs-number">200</span>  `shouldBe` <span class="hljs-number">25000</span>
<span class="hljs-title">multiply</span>   <span class="hljs-number">0</span>  `shouldBe`     <span class="hljs-number">0</span>
<span class="hljs-title">multiply</span> (<span class="hljs-number">-3</span>) `shouldBe`  (<span class="hljs-number">-15</span>)</code></pre>

### Solution