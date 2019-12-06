### Problem:
<p>Create a function <code>isDivisible(n,...)</code> that checks if the first agrument n is divisible by all other arguments (return true if no other arguments)</p>
<p>Example:</p>
<pre><code class="language-javascript">isDivisible(<span class="hljs-number">6</span>,<span class="hljs-number">1</span>,<span class="hljs-number">3</span>)--&gt; <span class="hljs-literal">true</span> because <span class="hljs-number">6</span> is divisible by <span class="hljs-number">1</span> and <span class="hljs-number">3</span>
isDivisible(<span class="hljs-number">12</span>,<span class="hljs-number">2</span>)--&gt; <span class="hljs-literal">true</span> because <span class="hljs-number">12</span> is divisible by <span class="hljs-number">2</span>
isDivisible(<span class="hljs-number">100</span>,<span class="hljs-number">5</span>,<span class="hljs-number">4</span>,<span class="hljs-number">10</span>,<span class="hljs-number">25</span>,<span class="hljs-number">20</span>)--&gt; <span class="hljs-literal">true</span>
isDivisible(<span class="hljs-number">12</span>,<span class="hljs-number">7</span>)--&gt; <span class="hljs-literal">false</span> because <span class="hljs-number">12</span> is not divisible by <span class="hljs-number">7</span></code></pre>
<pre style="display: none;"><code class="language-haskell"><span class="hljs-title">isDivisible</span>   <span class="hljs-number">3</span> [<span class="hljs-number">1</span>,<span class="hljs-number">3</span>]          `shouldBe` <span class="hljs-type">True</span>
<span class="hljs-title">isDivisible</span>  <span class="hljs-number">12</span> [<span class="hljs-number">2</span>]            `shouldBe` <span class="hljs-type">True</span>
<span class="hljs-title">isDivisible</span> <span class="hljs-number">100</span> [<span class="hljs-number">5</span>,<span class="hljs-number">4</span>,<span class="hljs-number">10</span>,<span class="hljs-number">25</span>,<span class="hljs-number">20</span>] `shouldBe` <span class="hljs-type">True</span>
<span class="hljs-title">isDivisible</span>  <span class="hljs-number">12</span> [<span class="hljs-number">7</span>]            `shouldBe` <span class="hljs-type">False</span></code></pre>
<pre style="display: none;"><code class="language-c">Assert.AreEqual(<span class="hljs-literal">false</span>, Kata.IsDivisible(<span class="hljs-number">3</span>,<span class="hljs-number">3</span>,<span class="hljs-number">4</span>));
Assert.AreEqual(<span class="hljs-literal">true</span>, Kata.IsDivisible(<span class="hljs-number">12</span>, <span class="hljs-number">3</span>, <span class="hljs-number">4</span>));</code></pre>
<p>This kata is following kata: <a href="http://www.codewars.com/kata/is-n-divisible-by-x-and-y" target="_blank">http://www.codewars.com/kata/is-n-divisible-by-x-and-y</a></p>

### Solution