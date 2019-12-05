### Problem:
<h3 id="story">Story</h3>
<p>Ben has a very simple idea to make some profit: he buys something and sells it again. Of course, this wouldn&apos;t give him any profit at all if he was simply to buy and sell it at the same price. Instead, he&apos;s going to buy it for the lowest possible price and sell it at the highest.</p>
<h3 id="task">Task</h3>
<p>Write a function that returns both the minimum and maximum number of the given list/array. </p>
<h3 id="examples">Examples</h3>
<pre style="display: none;"><code class="language-haskell"><span class="hljs-title">minMax</span> [<span class="hljs-number">1</span>,<span class="hljs-number">2</span>,<span class="hljs-number">3</span>,<span class="hljs-number">4</span>,<span class="hljs-number">5</span>] `shouldBe` (<span class="hljs-number">1</span>, <span class="hljs-number">5</span>)
<span class="hljs-title">minMax</span> [<span class="hljs-number">2334454</span>,<span class="hljs-number">5</span>] `shouldBe` (<span class="hljs-number">5</span>, <span class="hljs-number">2334454</span>)
<span class="hljs-title">minMax</span> [<span class="hljs-number">1</span>]         `shouldBe` (<span class="hljs-number">1</span>, <span class="hljs-number">1</span>)</code></pre>
<pre><code class="language-javascript">minMax([<span class="hljs-number">1</span>,<span class="hljs-number">2</span>,<span class="hljs-number">3</span>,<span class="hljs-number">4</span>,<span class="hljs-number">5</span>])   == [<span class="hljs-number">1</span>,<span class="hljs-number">5</span>]
minMax([<span class="hljs-number">2334454</span>,<span class="hljs-number">5</span>])   == [<span class="hljs-number">5</span>, <span class="hljs-number">2334454</span>]
minMax([<span class="hljs-number">1</span>])           == [<span class="hljs-number">1</span>, <span class="hljs-number">1</span>]</code></pre>
<pre style="display: none;"><code class="language-coffeescript">minMax [<span class="hljs-number">1.</span><span class="hljs-number">.5</span>]      == [<span class="hljs-number">1</span>, <span class="hljs-number">5</span>]
minMax [<span class="hljs-number">2334454</span>,<span class="hljs-number">5</span>] == [<span class="hljs-number">5</span>, <span class="hljs-number">2334454</span>]
minMax [<span class="hljs-number">1</span>]         == [<span class="hljs-number">1</span>, <span class="hljs-number">1</span>]</code></pre>
<pre style="display: none;"><code class="language-python">min_max([<span class="hljs-number">1</span>,<span class="hljs-number">2</span>,<span class="hljs-number">3</span>,<span class="hljs-number">4</span>,<span class="hljs-number">5</span>])   == [<span class="hljs-number">1</span>,<span class="hljs-number">5</span>]
min_max([<span class="hljs-number">2334454</span>,<span class="hljs-number">5</span>])   == [<span class="hljs-number">5</span>, <span class="hljs-number">2334454</span>]
min_max([<span class="hljs-number">1</span>])           == [<span class="hljs-number">1</span>, <span class="hljs-number">1</span>]</code></pre>
<pre style="display: none;"><code class="language-ruby">min_max([<span class="hljs-number">1</span>,<span class="hljs-number">2</span>,<span class="hljs-number">3</span>,<span class="hljs-number">4</span>,<span class="hljs-number">5</span>])   == [<span class="hljs-number">1</span>,<span class="hljs-number">5</span>]
min_max([<span class="hljs-number">2334454</span>,<span class="hljs-number">5</span>])   == [<span class="hljs-number">5</span>, <span class="hljs-number">2334454</span>]
min_max([<span class="hljs-number">1</span>])           == [<span class="hljs-number">1</span>, <span class="hljs-number">1</span>]</code></pre>
<pre style="display: none;"><code class="language-java">MinMax.minMax(<span class="hljs-keyword">new</span> <span class="hljs-keyword">int</span>[]{<span class="hljs-number">1</span>,<span class="hljs-number">2</span>,<span class="hljs-number">3</span>,<span class="hljs-number">4</span>,<span class="hljs-number">5</span>}) == {<span class="hljs-number">1</span>,<span class="hljs-number">5</span>}
MinMax.minMax(<span class="hljs-keyword">new</span> <span class="hljs-keyword">int</span>[]{<span class="hljs-number">2334454</span>,<span class="hljs-number">5</span>}) == {<span class="hljs-number">5</span>, <span class="hljs-number">2334454</span>}
MinMax.minMax(<span class="hljs-keyword">new</span> <span class="hljs-keyword">int</span>[]{<span class="hljs-number">1</span>}) == {<span class="hljs-number">1</span>, <span class="hljs-number">1</span>}</code></pre>
<pre style="display: none;"><code class="language-csharp">MinMax.minMax(<span class="hljs-keyword">new</span> <span class="hljs-keyword">int</span>[]{<span class="hljs-number">1</span>,<span class="hljs-number">2</span>,<span class="hljs-number">3</span>,<span class="hljs-number">4</span>,<span class="hljs-number">5</span>}) == {<span class="hljs-number">1</span>,<span class="hljs-number">5</span>}
MinMax.minMax(<span class="hljs-keyword">new</span> <span class="hljs-keyword">int</span>[]{<span class="hljs-number">2334454</span>,<span class="hljs-number">5</span>}) == {<span class="hljs-number">5</span>, <span class="hljs-number">2334454</span>}
MinMax.minMax(<span class="hljs-keyword">new</span> <span class="hljs-keyword">int</span>[]{<span class="hljs-number">1</span>}) == {<span class="hljs-number">1</span>, <span class="hljs-number">1</span>}</code></pre>
<h3 id="remarks">Remarks</h3>
<p>All arrays or lists will always have at least one element, so you don&apos;t need to check the length. Also, your function will always get an array or a list, you don&apos;t have to check for <code>null</code>, <code>undefined</code> or similar.</p>

### Solution