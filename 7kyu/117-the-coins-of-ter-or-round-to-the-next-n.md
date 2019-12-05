### Problem:
<div style="border:1px solid; padding:1ex;">Inspired by [Round to the next 5](/kata/55d1d6d5955ec6365400006d).
<strong>Warning!</strong> This kata contains spoilers on the mentioned one. Solve that one first!</div>

<h1 id="the-coins-of-ter">The Coins of Ter</h1>
<p>Ter is a small country, located between Brelnam and the Orange juice ocean. It uses many different coins and bills for payment. However, one day, the leaders of Ter decide that there are too many small coins. Therefore, they ban the small coins. But no one knows <em>which</em> coins they&apos;ll ban, so they ask you to provide a tool that can recalculate a price. After all, if one does not have a 1 Terrek bill and can only give a 2 Terrek bill, one needs to adjust the oddly priced items.</p>
<h1 id="task">Task</h1>
<p>Write a function <code>adjust</code>, that takes a two integers: the lowest currency unit that&apos;s still allowed, and the price/debt that needs to get adjusted. All prices are going up, and debts are remitted. The lowest currency will always be positive.</p>
<p>In other words:<code>adjust</code> takes two integers, <code>b</code> and <code>n</code>, and returns the smallest number <code>k</code>, such that <code>n &lt;= k</code> and <code>k % b == 0</code>.</p>
<h1 id="examples">Examples</h1>
<pre><code class="language-haskell"><span class="hljs-title">adjust</span> <span class="hljs-number">3</span> <span class="hljs-number">0</span>    `shouldBe` <span class="hljs-number">0</span>
<span class="hljs-title">adjust</span> <span class="hljs-number">3</span> <span class="hljs-number">1</span>    `shouldBe` <span class="hljs-number">3</span>
<span class="hljs-title">adjust</span> <span class="hljs-number">3</span> (<span class="hljs-number">-2</span>) `shouldBe` <span class="hljs-number">0</span>
<span class="hljs-title">adjust</span> <span class="hljs-number">3</span> (<span class="hljs-number">-4</span>) `shouldBe` (<span class="hljs-number">-3</span>)
<span class="hljs-title">adjust</span> <span class="hljs-number">3</span> <span class="hljs-number">3</span>    `shouldBe` <span class="hljs-number">3</span>
<span class="hljs-title">adjust</span> <span class="hljs-number">6</span> <span class="hljs-number">3</span>    `shouldBe` <span class="hljs-number">6</span>
<span class="hljs-title">adjust</span> <span class="hljs-number">7</span> <span class="hljs-number">3</span>    `shouldBe` <span class="hljs-number">9</span></code></pre>
<pre style="display: none;"><code class="language-javascript">adjust( <span class="hljs-number">3</span>, <span class="hljs-number">0</span> ) ===  <span class="hljs-number">0</span>
adjust( <span class="hljs-number">3</span>, <span class="hljs-number">1</span> ) ===  <span class="hljs-number">3</span>
adjust( <span class="hljs-number">3</span>, <span class="hljs-number">-2</span>) ===  <span class="hljs-number">0</span>
adjust( <span class="hljs-number">3</span>, <span class="hljs-number">-4</span>) === <span class="hljs-number">-3</span>
adjust( <span class="hljs-number">3</span>, <span class="hljs-number">3</span> ) ===  <span class="hljs-number">3</span>
adjust( <span class="hljs-number">3</span>, <span class="hljs-number">6</span> ) ===  <span class="hljs-number">6</span>
adjust( <span class="hljs-number">3</span>, <span class="hljs-number">7</span> ) ===  <span class="hljs-number">9</span></code></pre>
<pre style="display: none;"><code class="language-coffeescript">adjust( <span class="hljs-number">3</span>, <span class="hljs-number">0</span> ) ===  <span class="hljs-number">0</span>
adjust( <span class="hljs-number">3</span>, <span class="hljs-number">1</span> ) ===  <span class="hljs-number">3</span>
adjust( <span class="hljs-number">3</span>, <span class="hljs-number">-2</span>) ===  <span class="hljs-number">0</span>
adjust( <span class="hljs-number">3</span>, <span class="hljs-number">-4</span>) === <span class="hljs-number">-3</span>
adjust( <span class="hljs-number">3</span>, <span class="hljs-number">3</span> ) ===  <span class="hljs-number">3</span>
adjust( <span class="hljs-number">3</span>, <span class="hljs-number">6</span> ) ===  <span class="hljs-number">6</span>
adjust( <span class="hljs-number">3</span>, <span class="hljs-number">7</span> ) ===  <span class="hljs-number">9</span></code></pre>
<pre style="display: none;"><code class="language-python">adjust( <span class="hljs-number">3</span>, <span class="hljs-number">0</span> ) ==  <span class="hljs-number">0</span>
adjust( <span class="hljs-number">3</span>, <span class="hljs-number">1</span> ) ==  <span class="hljs-number">3</span>
adjust( <span class="hljs-number">3</span>, <span class="hljs-number">-2</span>) ==  <span class="hljs-number">0</span>
adjust( <span class="hljs-number">3</span>, <span class="hljs-number">-4</span>) == <span class="hljs-number">-3</span>
adjust( <span class="hljs-number">3</span>, <span class="hljs-number">3</span> ) ==  <span class="hljs-number">3</span>
adjust( <span class="hljs-number">3</span>, <span class="hljs-number">6</span> ) ==  <span class="hljs-number">6</span>
adjust( <span class="hljs-number">3</span>, <span class="hljs-number">7</span> ) ==  <span class="hljs-number">9</span></code></pre>
<pre style="display: none;"><code class="language-ruby">adjust( <span class="hljs-number">3</span>, <span class="hljs-number">0</span> ) ==  <span class="hljs-number">0</span>
adjust( <span class="hljs-number">3</span>, <span class="hljs-number">1</span> ) ==  <span class="hljs-number">3</span>
adjust( <span class="hljs-number">3</span>, -<span class="hljs-number">2</span>) ==  <span class="hljs-number">0</span>
adjust( <span class="hljs-number">3</span>, -<span class="hljs-number">4</span>) == -<span class="hljs-number">3</span>
adjust( <span class="hljs-number">3</span>, <span class="hljs-number">3</span> ) ==  <span class="hljs-number">3</span>
adjust( <span class="hljs-number">3</span>, <span class="hljs-number">6</span> ) ==  <span class="hljs-number">6</span>
adjust( <span class="hljs-number">3</span>, <span class="hljs-number">7</span> ) ==  <span class="hljs-number">9</span></code></pre>
<div style="border:1px solid; padding:1ex;">
<strong>Translator notice:</strong> Make sure that you provide about the same random tests, so that a user can get feedback during &quot;Run tests&quot;, and not only during &quot;Submit&quot;.</div>
### Solution