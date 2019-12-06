### Problem:
<p>Write a functionthat returns the number of occurrences of an element in an array.</p>
<h3 id="examples">Examples</h3>
<pre><code class="language-javascript"><span class="hljs-keyword">var</span> arr = [<span class="hljs-number">0</span>, <span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>];
arr.numberOfOccurrences(<span class="hljs-number">0</span>) === <span class="hljs-number">1</span>;
arr.numberOfOccurrences(<span class="hljs-number">4</span>) === <span class="hljs-number">0</span>;
arr.numberOfOccurrences(<span class="hljs-number">2</span>) === <span class="hljs-number">2</span>;
arr.numberOfOccurrences(<span class="hljs-string">&quot;a&quot;</span>) === <span class="hljs-number">0</span>;</code></pre>
<pre style="display: none;"><code class="language-haskell"><span class="hljs-title">let</span> sample = [<span class="hljs-number">0</span>, <span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>]
<span class="hljs-title">numberOfOccurrences</span> <span class="hljs-number">0</span> sample `shouldBe` <span class="hljs-number">1</span>
<span class="hljs-title">numberOfOccurrences</span> <span class="hljs-number">4</span> sample `shouldBe` <span class="hljs-number">0</span>
<span class="hljs-title">numberOfOccurrences</span> <span class="hljs-number">2</span> sample `shouldBe` <span class="hljs-number">2</span></code></pre>
<pre style="display: none;"><code class="language-python">sample = [<span class="hljs-number">0</span>, <span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>]
number_of_occurrences(<span class="hljs-number">0</span>, sample) == <span class="hljs-number">1</span>
number_of_occurrences(<span class="hljs-number">4</span>, sample) == <span class="hljs-number">0</span>
number_of_occurrences(<span class="hljs-number">2</span>, sample) == <span class="hljs-number">2</span>
number_of_occurrences(<span class="hljs-number">3</span>, sample) == <span class="hljs-number">1</span></code></pre>
<pre style="display: none;"><code class="language-csharp"><span class="hljs-keyword">var</span> sample = { <span class="hljs-number">1</span>, <span class="hljs-number">0</span>, <span class="hljs-number">2</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span> };
NumberOfOccurrences(<span class="hljs-number">0</span>, sample) == <span class="hljs-number">1</span>;
NumberOfOccurrences(<span class="hljs-number">4</span>, sample) == <span class="hljs-number">0</span>;
NumberOfOccurrences(<span class="hljs-number">2</span>, sample) == <span class="hljs-number">2</span>;
NumberOfOccurrences(<span class="hljs-number">3</span>, sample) == <span class="hljs-number">1</span>;</code></pre>

### Solution