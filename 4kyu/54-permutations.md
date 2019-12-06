### Problem:
<p>In this kata you have to create all permutations of an input string and remove duplicates, if present. This means, you have to shuffle all letters from the input in all possible orders.</p>
<p>Examples:</p>
<pre><code class="language-javascript">permutations(<span class="hljs-string">&apos;a&apos;</span>); <span class="hljs-comment">// [&apos;a&apos;]</span>
permutations(<span class="hljs-string">&apos;ab&apos;</span>); <span class="hljs-comment">// [&apos;ab&apos;, &apos;ba&apos;]</span>
permutations(<span class="hljs-string">&apos;aabb&apos;</span>); <span class="hljs-comment">// [&apos;aabb&apos;, &apos;abab&apos;, &apos;abba&apos;, &apos;baab&apos;, &apos;baba&apos;, &apos;bbaa&apos;]</span></code></pre>
<pre style="display: none;"><code class="language-cpp">permutations(<span class="hljs-string">&quot;a&quot;</span>); <span class="hljs-comment">// =&gt; vector&lt;string&gt; {&quot;a&quot;}</span>
permutations(<span class="hljs-string">&quot;ab&quot;</span>); <span class="hljs-comment">// =&gt; vector&lt;string&gt; {&quot;ab&quot;, &quot;ba&quot;}</span>
permutations(<span class="hljs-string">&quot;aabb&quot;</span>); <span class="hljs-comment">// =&gt; vector&lt;string&gt; {&quot;aabb&quot;, &quot;abab&quot;, &quot;abba&quot;, &quot;baab&quot;, &quot;baba&quot;, &quot;bbaa&quot;}</span></code></pre>
<pre style="display: none;"><code class="language-php">permutations(<span class="hljs-string">&apos;a&apos;</span>); <span class="hljs-comment">// =&gt; [&apos;a&apos;]</span>
permutations(<span class="hljs-string">&apos;ab&apos;</span>); <span class="hljs-comment">// =&gt; [&apos;ab&apos;, &apos;ba&apos;]</span>
permutations(<span class="hljs-string">&apos;aabb&apos;</span>); <span class="hljs-comment">// =&gt; [&apos;aabb&apos;, &apos;abab&apos;, &apos;abba&apos;, &apos;baab&apos;, &apos;baba&apos;, &apos;bbaa&apos;]</span></code></pre>
<pre style="display: none;"><code class="language-ruby">permutations(<span class="hljs-string">&apos;a&apos;</span>); <span class="hljs-comment"># [&apos;a&apos;]</span>
permutations(<span class="hljs-string">&apos;ab&apos;</span>); <span class="hljs-comment"># [&apos;ab&apos;, &apos;ba&apos;]</span>
permutations(<span class="hljs-string">&apos;aabb&apos;</span>); <span class="hljs-comment"># [&apos;aabb&apos;, &apos;abab&apos;, &apos;abba&apos;, &apos;baab&apos;, &apos;baba&apos;, &apos;bbaa&apos;]</span></code></pre>
<pre style="display: none;"><code class="language-python">permutations(<span class="hljs-string">&apos;a&apos;</span>); <span class="hljs-comment"># [&apos;a&apos;]</span>
permutations(<span class="hljs-string">&apos;ab&apos;</span>); <span class="hljs-comment"># [&apos;ab&apos;, &apos;ba&apos;]</span>
permutations(<span class="hljs-string">&apos;aabb&apos;</span>); <span class="hljs-comment"># [&apos;aabb&apos;, &apos;abab&apos;, &apos;abba&apos;, &apos;baab&apos;, &apos;baba&apos;, &apos;bbaa&apos;]</span></code></pre>
<pre style="display: none;"><code class="language-haskell"><span class="hljs-title">permutations</span>    <span class="hljs-string">&quot;a&quot;</span> `shouldBe` [<span class="hljs-string">&quot;a&quot;</span>]
<span class="hljs-title">permutations</span>   <span class="hljs-string">&quot;ab&quot;</span> `shouldBe` [<span class="hljs-string">&quot;ab&quot;</span>, <span class="hljs-string">&quot;ba&quot;</span>]
<span class="hljs-title">permutations</span> <span class="hljs-string">&quot;aabb&quot;</span> `shouldBe` [<span class="hljs-string">&quot;aabb&quot;</span>,<span class="hljs-string">&quot;abab&quot;</span>,<span class="hljs-string">&quot;abba&quot;</span>,<span class="hljs-string">&quot;baab&quot;</span>,<span class="hljs-string">&quot;baba&quot;</span>,<span class="hljs-string">&quot;bbaa&quot;</span>]</code></pre>
<pre style="display: none;"><code class="language-java">Permutations.singlePermutations(<span class="hljs-string">&quot;a&quot;</span>) `shouldBe` [<span class="hljs-string">&quot;a&quot;</span>]
Permutations.singlePermutations(<span class="hljs-string">&quot;ab&quot;</span>) `shouldBe` [<span class="hljs-string">&quot;ab&quot;</span>, <span class="hljs-string">&quot;ba&quot;</span>]
Permutations.singlePermutations(<span class="hljs-string">&quot;aabb&quot;</span>) `shouldBe` [<span class="hljs-string">&quot;aabb&quot;</span>,<span class="hljs-string">&quot;abab&quot;</span>,<span class="hljs-string">&quot;abba&quot;</span>,<span class="hljs-string">&quot;baab&quot;</span>,<span class="hljs-string">&quot;baba&quot;</span>,<span class="hljs-string">&quot;bbaa&quot;</span>]</code></pre>
<pre style="display: none;"><code class="language-csharp">Permutations.SinglePermutations(<span class="hljs-string">&quot;a&quot;</span>); <span class="hljs-comment">// =&gt; new List {&quot;a&quot;}</span>
Permutations.SinglePermutations(<span class="hljs-string">&quot;ab&quot;</span>); <span class="hljs-comment">// =&gt; new List {&quot;ab&quot;, &quot;ba&quot;}</span>
Permutations.SinglePermutations(<span class="hljs-string">&quot;aabb&quot;</span>); <span class="hljs-comment">// =&gt; new List {&quot;aabb&quot;, &quot;abab&quot;, &quot;abba&quot;, &quot;baab&quot;, &quot;baba&quot;, &quot;bbaa&quot;}</span></code></pre>
<p>The order of the permutations doesn&apos;t matter.</p>

### Solution