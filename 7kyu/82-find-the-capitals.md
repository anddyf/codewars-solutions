### Problem:
<h1 id="instructions">Instructions</h1>
<p>Write a function that takes a single string (<code>word</code>) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.</p>
<h1 id="example">Example</h1>
<pre><code class="language-javascript">Test.assertSimilar( capitals(<span class="hljs-string">&apos;CodEWaRs&apos;</span>), [<span class="hljs-number">0</span>,<span class="hljs-number">3</span>,<span class="hljs-number">4</span>,<span class="hljs-number">6</span>] );</code></pre>
<pre style="display: none;"><code class="language-ruby">Test.assert_equals( capitals(<span class="hljs-string">&apos;CodEWaRs&apos;</span>), [<span class="hljs-number">0</span>,<span class="hljs-number">3</span>,<span class="hljs-number">4</span>,<span class="hljs-number">6</span>] );</code></pre>
<pre style="display: none;"><code class="language-haskell"><span class="hljs-title">capitals</span> <span class="hljs-string">&quot;&quot;</span>         `shouldBe` []
<span class="hljs-title">capitals</span> <span class="hljs-string">&quot;CodEWaRs&quot;</span> `shouldBe` [<span class="hljs-number">0</span>,<span class="hljs-number">3</span>,<span class="hljs-number">4</span>,<span class="hljs-number">6</span>]
<span class="hljs-title">capitals</span> <span class="hljs-string">&quot;aAbB&quot;</span>     `shouldBe` [<span class="hljs-number">1</span>,<span class="hljs-number">3</span>]
<span class="hljs-title">capitals</span> <span class="hljs-string">&quot;4ysdf4&quot;</span>   `shouldBe` []
<span class="hljs-title">capitals</span> <span class="hljs-string">&quot;ABCDEF&quot;</span>   `shouldBe` [<span class="hljs-number">0.</span><span class="hljs-number">.5</span>]</code></pre>
<pre style="display: none;"><code class="language-csharp">Assert.AreEqual(Kata.Capitals(<span class="hljs-string">&quot;CodEWaRs&quot;</span>), <span class="hljs-keyword">new</span> <span class="hljs-keyword">int</span>[]{<span class="hljs-number">0</span>,<span class="hljs-number">3</span>,<span class="hljs-number">4</span>,<span class="hljs-number">6</span>});</code></pre>

### Solution