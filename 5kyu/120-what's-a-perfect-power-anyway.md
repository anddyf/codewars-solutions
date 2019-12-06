### Problem:
<p>A <a href="https://en.wikipedia.org/wiki/Perfect_power" target="_blank">perfect power</a> is a classification of positive integers:</p>
<blockquote>
<p>In mathematics, a <strong>perfect power</strong> is a positive integer that can be expressed as an integer power of another positive integer. More formally, n is a perfect power if there exist natural numbers m &gt; 1, and k &gt; 1 such that m<sup>k</sup> = n.</p>
</blockquote>
<p>Your task is to check wheter a given integer is a perfect power. If it is a perfect power, return a pair <code>m</code> and <code>k</code> with m<sup>k</sup> = n as a proof. Otherwise return <code>Nothing</code>, <code>Nil</code>, <code>null</code>, <code>NULL</code>, <code>None</code> or your language&apos;s equivalent.</p>
<p><strong>Note:</strong> For a perfect power, there might be several pairs. For example <code>81 = 3^4 = 9^2</code>, so <code>(3,4)</code> and <code>(9,2)</code> are valid solutions. However, the tests take care of this, so if a number is a perfect power, return any pair that proves it.</p>
<h3 id="examples">Examples</h3>
<pre style="display: none;"><code class="language-javascript">Test.describe(<span class="hljs-string">&quot;perfect powers&quot;</span>, <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>)</span>{
  Test.it(<span class="hljs-string">&quot;should work for some examples&quot;</span>,<span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>)</span>{
    Test.assertSimilar(isPP(<span class="hljs-number">4</span>), [<span class="hljs-number">2</span>,<span class="hljs-number">2</span>], <span class="hljs-string">&quot;4 = 2^2&quot;</span>);
    Test.assertSimilar(isPP(<span class="hljs-number">9</span>), [<span class="hljs-number">3</span>,<span class="hljs-number">2</span>], <span class="hljs-string">&quot;9 = 3^2&quot;</span>);
    Test.assertEquals( isPP(<span class="hljs-number">5</span>), <span class="hljs-literal">null</span>, <span class="hljs-string">&quot;5 isn&apos;t a perfect number&quot;</span>);
  });
});</code></pre>
<pre style="display: none;"><code class="language-coffeescript">Test.describe <span class="hljs-string">&quot;perfect powers&quot;</span>, <span class="hljs-function">-&gt;</span>
  Test.it <span class="hljs-string">&quot;should work for some examples&quot;</span>, <span class="hljs-function">-&gt;</span>
    Test.assertSimilar isPP(<span class="hljs-number">4</span>), [ <span class="hljs-number">2</span>, <span class="hljs-number">2</span> ], <span class="hljs-string">&quot;4 = 2^2&quot;</span>
    Test.assertSimilar isPP(<span class="hljs-number">9</span>), [ <span class="hljs-number">3</span>, <span class="hljs-number">2</span> ], <span class="hljs-string">&quot;9 = 3^2&quot;</span>
    Test.assertEquals isPP(<span class="hljs-number">5</span>), <span class="hljs-literal">null</span>, <span class="hljs-string">&quot;5 isn&apos;t a perfect number&quot;</span></code></pre>
<pre><code class="language-haskell"><span class="hljs-title">isPP</span> <span class="hljs-number">4</span> `shouldBe` <span class="hljs-type">Just</span> (<span class="hljs-number">2</span>,<span class="hljs-number">2</span>)
<span class="hljs-title">isPP</span> <span class="hljs-number">9</span> `shouldBe` <span class="hljs-type">Just</span> (<span class="hljs-number">3</span>,<span class="hljs-number">2</span>)
<span class="hljs-title">isPP</span> <span class="hljs-number">5</span> `shouldBe` <span class="hljs-type">Nothing</span></code></pre>
<pre style="display: none;"><code class="language-python">isPP(4) =&gt; [2,2]
isPP(9) =&gt; [3,2]
isPP(5) =&gt; None</code></pre>
<pre style="display: none;"><code class="language-ruby">isPP(<span class="hljs-number">4</span>) =&gt; [<span class="hljs-number">2</span>,<span class="hljs-number">2</span>]
isPP(<span class="hljs-number">9</span>) =&gt; [<span class="hljs-number">3</span>,<span class="hljs-number">2</span>]
isPP(<span class="hljs-number">5</span>) =&gt; <span class="hljs-literal">nil</span></code></pre>
<pre style="display: none;"><code class="language-java">isPerfectPower(<span class="hljs-number">4</span>) =&gt; <span class="hljs-keyword">new</span> <span class="hljs-keyword">int</span>[]{<span class="hljs-number">2</span>,<span class="hljs-number">2</span>}
isPerfectPower(<span class="hljs-number">5</span>) =&gt; <span class="hljs-function"><span class="hljs-keyword">null</span>
<span class="hljs-title">isPerfectPower</span><span class="hljs-params">(<span class="hljs-number">8</span>)</span> </span>=&gt; <span class="hljs-keyword">new</span> <span class="hljs-keyword">int</span>[]{<span class="hljs-number">2</span>,<span class="hljs-number">3</span>}
isPerfectPower(<span class="hljs-number">9</span>) =&gt; <span class="hljs-keyword">new</span> <span class="hljs-keyword">int</span>[]{<span class="hljs-number">3</span>,<span class="hljs-number">2</span>}</code></pre>
<pre style="display: none;"><code class="language-r">isPP(<span class="hljs-number">4</span>) =&gt; <span class="hljs-number">2</span> <span class="hljs-number">2</span>
isPP(<span class="hljs-number">9</span>) =&gt; <span class="hljs-number">3</span> <span class="hljs-number">2</span>
isPP(<span class="hljs-number">5</span>) =&gt; <span class="hljs-literal">NULL</span></code></pre>
<pre style="display: none;"><code class="language-csharp">IsPerfectPower(<span class="hljs-number">4</span>) =&gt; (<span class="hljs-number">2</span>,<span class="hljs-number">2</span>)
IsPerfectPower(<span class="hljs-number">5</span>) =&gt; <span class="hljs-function"><span class="hljs-literal">null</span>
<span class="hljs-title">IsPerfectPower</span>(<span class="hljs-params"><span class="hljs-number">8</span></span>)</span> =&gt; (<span class="hljs-number">2</span>,<span class="hljs-number">3</span>)
IsPerfectPower(<span class="hljs-number">9</span>) =&gt; (<span class="hljs-number">3</span>,<span class="hljs-number">2</span>)</code></pre>

### Solution