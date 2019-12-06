### Problem:
<p>Complete the solution so that it splits the string into pairs of two characters.  If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore (&apos;_&apos;).</p>
<p>Examples:</p>
<pre><code class="language-javascript">solution(<span class="hljs-string">&apos;abc&apos;</span>) <span class="hljs-comment">// should return [&apos;ab&apos;, &apos;c_&apos;]</span>
solution(<span class="hljs-string">&apos;abcdef&apos;</span>) <span class="hljs-comment">// should return [&apos;ab&apos;, &apos;cd&apos;, &apos;ef&apos;]</span></code></pre>
<pre style="display: none;"><code class="language-php">solution(<span class="hljs-string">&apos;abc&apos;</span>) <span class="hljs-comment">// should return [&apos;ab&apos;, &apos;c_&apos;]</span>
solution(<span class="hljs-string">&apos;abcdef&apos;</span>) <span class="hljs-comment">// should return [&apos;ab&apos;, &apos;cd&apos;, &apos;ef&apos;]</span></code></pre>
<pre style="display: none;"><code class="language-csharp">SplitString.Solution(<span class="hljs-string">&quot;abc&quot;</span>); <span class="hljs-comment">// should return [&quot;ab&quot;, &quot;c_&quot;]</span>
SplitString.Solution(<span class="hljs-string">&quot;abcdef&quot;</span>); <span class="hljs-comment">// should return [&quot;ab&quot;, &quot;cd&quot;, &quot;ef&quot;]</span></code></pre>
<pre style="display: none;"><code class="language-coffeescript">solution(<span class="hljs-string">&apos;abc&apos;</span>) <span class="hljs-comment"># should return [&apos;ab&apos;, &apos;c_&apos;]</span>
solution(<span class="hljs-string">&apos;abcdef&apos;</span>) <span class="hljs-comment"># should return [&apos;ab&apos;, &apos;cd&apos;, &apos;ef&apos;]</span></code></pre>
<pre style="display: none;"><code class="language-ruby">solution(<span class="hljs-string">&apos;abc&apos;</span>) <span class="hljs-comment"># should return [&apos;ab&apos;, &apos;c_&apos;]</span>
solution(<span class="hljs-string">&apos;abcdef&apos;</span>) <span class="hljs-comment"># should return [&apos;ab&apos;, &apos;cd&apos;, &apos;ef&apos;]</span></code></pre>
<pre style="display: none;"><code class="language-elixir">solution(<span class="hljs-string">&quot;abc&quot;</span>) <span class="hljs-comment"># should return [&quot;ab&quot;, &quot;c_&quot;]</span>
solution(<span class="hljs-string">&quot;abcdef&quot;</span>) <span class="hljs-comment"># should return [&quot;ab&quot;, &quot;cd&quot;, &quot;ef&quot;]</span></code></pre>
<pre style="display: none;"><code class="language-julia">solution(<span class="hljs-string">&quot;abc&quot;</span>) <span class="hljs-comment"># should return [&quot;ab&quot;, &quot;c_&quot;]</span>
solution(<span class="hljs-string">&quot;abcdef&quot;</span>) <span class="hljs-comment"># should return [&quot;ab&quot;, &quot;cd&quot;, &quot;ef&quot;]</span></code></pre>
<pre style="display: none;"><code class="language-python">solution(<span class="hljs-string">&apos;abc&apos;</span>) <span class="hljs-comment"># should return [&apos;ab&apos;, &apos;c_&apos;]</span>
solution(<span class="hljs-string">&apos;abcdef&apos;</span>) <span class="hljs-comment"># should return [&apos;ab&apos;, &apos;cd&apos;, &apos;ef&apos;]</span></code></pre>
<pre style="display: none;"><code class="language-haskell"><span class="hljs-title">solution</span> <span class="hljs-string">&quot;abc&quot;</span> `shouldBe` [<span class="hljs-string">&quot;ab&quot;</span>, <span class="hljs-string">&quot;c_&quot;</span>]
<span class="hljs-title">solution</span> <span class="hljs-string">&quot;abcdef&quot;</span> `shouldBe` [<span class="hljs-string">&quot;ab&quot;</span>, <span class="hljs-string">&quot;cd&quot;</span>, <span class="hljs-string">&quot;ef&quot;</span>]</code></pre>
<pre style="display: none;"><code class="language-go">Solution(<span class="hljs-string">&quot;abc&quot;</span>) <span class="hljs-comment">//should return [&quot;ab&quot;, &quot;c_&quot;]</span>
Solution(<span class="hljs-string">&quot;abcdef&quot;</span>) <span class="hljs-comment">//should return [&quot;ab&quot;, &quot;cd&quot;, &quot;ef&quot;]</span></code></pre>
<pre style="display: none;"><code class="language-scala">solution(<span class="hljs-symbol">&apos;ab</span>c&apos;)    <span class="hljs-comment">// should return List(&quot;ab&quot;, &quot;c_&quot;)</span>
solution(<span class="hljs-symbol">&apos;abcde</span>f&apos;) <span class="hljs-comment">// should return List(&quot;ab&quot;, &quot;cd&quot;, &quot;ef&quot;)</span></code></pre>
<pre style="display: none;"><code class="language-clojure">(<span class="hljs-name">solution</span> <span class="hljs-string">&quot;abc&quot;</span>) <span class="hljs-comment">; =&gt; [&quot;ab&quot; &quot;c_&quot;]</span>
(<span class="hljs-name">solution</span> <span class="hljs-string">&quot;abcd&quot;</span>) <span class="hljs-comment">; =&gt; [&quot;ab&quot; &quot;cd&quot;]</span></code></pre>

### Solution