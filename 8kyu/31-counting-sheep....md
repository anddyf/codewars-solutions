### Problem:
<p>Consider an array of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).</p>
<p>For example,</p>
<pre><code class="language-javascript">[<span class="hljs-literal">true</span>,  <span class="hljs-literal">true</span>,  <span class="hljs-literal">true</span>,  <span class="hljs-literal">false</span>,
  <span class="hljs-literal">true</span>,  <span class="hljs-literal">true</span>,  <span class="hljs-literal">true</span>,  <span class="hljs-literal">true</span> ,
  <span class="hljs-literal">true</span>,  <span class="hljs-literal">false</span>, <span class="hljs-literal">true</span>,  <span class="hljs-literal">false</span>,
  <span class="hljs-literal">true</span>,  <span class="hljs-literal">false</span>, <span class="hljs-literal">false</span>, <span class="hljs-literal">true</span> ,
  <span class="hljs-literal">true</span>,  <span class="hljs-literal">true</span>,  <span class="hljs-literal">true</span>,  <span class="hljs-literal">true</span> ,
  <span class="hljs-literal">false</span>, <span class="hljs-literal">false</span>, <span class="hljs-literal">true</span>,  <span class="hljs-literal">true</span>]</code></pre>
<pre style="display: none;"><code class="language-crystal">[<span class="hljs-literal">true</span>,  <span class="hljs-literal">true</span>,  <span class="hljs-literal">true</span>,  <span class="hljs-literal">false</span>,
  <span class="hljs-literal">true</span>,  <span class="hljs-literal">true</span>,  <span class="hljs-literal">true</span>,  <span class="hljs-literal">true</span> ,
  <span class="hljs-literal">true</span>,  <span class="hljs-literal">false</span>, <span class="hljs-literal">true</span>,  <span class="hljs-literal">false</span>,
  <span class="hljs-literal">true</span>,  <span class="hljs-literal">false</span>, <span class="hljs-literal">false</span>, <span class="hljs-literal">true</span> ,
  <span class="hljs-literal">true</span>,  <span class="hljs-literal">true</span>,  <span class="hljs-literal">true</span>,  <span class="hljs-literal">true</span> ,
  <span class="hljs-literal">false</span>, <span class="hljs-literal">false</span>, <span class="hljs-literal">true</span>,  <span class="hljs-literal">true</span>]</code></pre>
<pre style="display: none;"><code class="language-python">[<span class="hljs-literal">True</span>,  <span class="hljs-literal">True</span>,  <span class="hljs-literal">True</span>,  <span class="hljs-literal">False</span>,
  <span class="hljs-literal">True</span>,  <span class="hljs-literal">True</span>,  <span class="hljs-literal">True</span>,  <span class="hljs-literal">True</span> ,
  <span class="hljs-literal">True</span>,  <span class="hljs-literal">False</span>, <span class="hljs-literal">True</span>,  <span class="hljs-literal">False</span>,
  <span class="hljs-literal">True</span>,  <span class="hljs-literal">False</span>, <span class="hljs-literal">False</span>, <span class="hljs-literal">True</span> ,
  <span class="hljs-literal">True</span>,  <span class="hljs-literal">True</span>,  <span class="hljs-literal">True</span>,  <span class="hljs-literal">True</span> ,
  <span class="hljs-literal">False</span>, <span class="hljs-literal">False</span>, <span class="hljs-literal">True</span>,  <span class="hljs-literal">True</span>]</code></pre>
<pre style="display: none;"><code class="language-csharp">[<span class="hljs-meta">true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true</span>]</code></pre>
<pre style="display: none;"><code class="language-c">{ <span class="hljs-literal">true</span>,  <span class="hljs-literal">true</span>,  <span class="hljs-literal">true</span>,  <span class="hljs-literal">false</span>,
  <span class="hljs-literal">true</span>,  <span class="hljs-literal">true</span>,  <span class="hljs-literal">true</span>,  <span class="hljs-literal">true</span>,
  <span class="hljs-literal">true</span>,  <span class="hljs-literal">false</span>, <span class="hljs-literal">true</span>,  <span class="hljs-literal">false</span>,
  <span class="hljs-literal">true</span>,  <span class="hljs-literal">false</span>, <span class="hljs-literal">false</span>, <span class="hljs-literal">true</span>,
  <span class="hljs-literal">true</span>,  <span class="hljs-literal">true</span>,  <span class="hljs-literal">true</span>,  <span class="hljs-literal">true</span>,
  <span class="hljs-literal">false</span>, <span class="hljs-literal">false</span>, <span class="hljs-literal">true</span>,  <span class="hljs-literal">true</span> }</code></pre>
<pre style="display: none;"><code class="language-cpp">[<span class="hljs-literal">true</span>,  <span class="hljs-literal">true</span>,  <span class="hljs-literal">true</span>,  <span class="hljs-literal">false</span>,
  <span class="hljs-literal">true</span>,  <span class="hljs-literal">true</span>,  <span class="hljs-literal">true</span>,  <span class="hljs-literal">true</span> ,
  <span class="hljs-literal">true</span>,  <span class="hljs-literal">false</span>, <span class="hljs-literal">true</span>,  <span class="hljs-literal">false</span>,
  <span class="hljs-literal">true</span>,  <span class="hljs-literal">false</span>, <span class="hljs-literal">false</span>, <span class="hljs-literal">true</span> ,
  <span class="hljs-literal">true</span>,  <span class="hljs-literal">true</span>,  <span class="hljs-literal">true</span>,  <span class="hljs-literal">true</span> ,
  <span class="hljs-literal">false</span>, <span class="hljs-literal">false</span>, <span class="hljs-literal">true</span>,  <span class="hljs-literal">true</span>]</code></pre>
<pre style="display: none;"><code class="language-haskell">[<span class="hljs-type">True</span>,  <span class="hljs-type">True</span>,  <span class="hljs-type">True</span>,  <span class="hljs-type">False</span>,
  <span class="hljs-type">True</span>,  <span class="hljs-type">True</span>,  <span class="hljs-type">True</span>,  <span class="hljs-type">True</span> ,
  <span class="hljs-type">True</span>,  <span class="hljs-type">False</span>, <span class="hljs-type">True</span>,  <span class="hljs-type">False</span>,
  <span class="hljs-type">True</span>,  <span class="hljs-type">False</span>, <span class="hljs-type">False</span>, <span class="hljs-type">True</span> ,
  <span class="hljs-type">True</span>,  <span class="hljs-type">True</span>,  <span class="hljs-type">True</span>,  <span class="hljs-type">True</span> ,
  <span class="hljs-type">False</span>, <span class="hljs-type">False</span>, <span class="hljs-type">True</span>,  <span class="hljs-type">True</span>]</code></pre>
<pre style="display: none;"><code class="language-elixir">[<span class="hljs-keyword">true</span>,  <span class="hljs-keyword">true</span>,  <span class="hljs-keyword">true</span>,  <span class="hljs-keyword">false</span>,
  <span class="hljs-keyword">true</span>,  <span class="hljs-keyword">true</span>,  <span class="hljs-keyword">true</span>,  <span class="hljs-keyword">true</span> ,
  <span class="hljs-keyword">true</span>,  <span class="hljs-keyword">false</span>, <span class="hljs-keyword">true</span>,  <span class="hljs-keyword">false</span>,
  <span class="hljs-keyword">true</span>,  <span class="hljs-keyword">false</span>, <span class="hljs-keyword">false</span>, <span class="hljs-keyword">true</span> ,
  <span class="hljs-keyword">true</span>,  <span class="hljs-keyword">true</span>,  <span class="hljs-keyword">true</span>,  <span class="hljs-keyword">true</span> ,
  <span class="hljs-keyword">false</span>, <span class="hljs-keyword">false</span>, <span class="hljs-keyword">true</span>,  <span class="hljs-keyword">true</span>]</code></pre>
<pre style="display: none;"><code class="language-rust">&amp;[<span class="hljs-literal">true</span>,  <span class="hljs-literal">true</span>,  <span class="hljs-literal">true</span>,  <span class="hljs-literal">false</span>,
  <span class="hljs-literal">true</span>,  <span class="hljs-literal">true</span>,  <span class="hljs-literal">true</span>,  <span class="hljs-literal">true</span> ,
  <span class="hljs-literal">true</span>,  <span class="hljs-literal">false</span>, <span class="hljs-literal">true</span>,  <span class="hljs-literal">false</span>,
  <span class="hljs-literal">true</span>,  <span class="hljs-literal">false</span>, <span class="hljs-literal">false</span>, <span class="hljs-literal">true</span> ,
  <span class="hljs-literal">true</span>,  <span class="hljs-literal">true</span>,  <span class="hljs-literal">true</span>,  <span class="hljs-literal">true</span> ,
  <span class="hljs-literal">false</span>, <span class="hljs-literal">false</span>, <span class="hljs-literal">true</span>,  <span class="hljs-literal">true</span>]</code></pre>
<pre style="display: none;"><code class="language-scala"><span class="hljs-type">Array</span>(
  <span class="hljs-literal">true</span>,  <span class="hljs-literal">true</span>,  <span class="hljs-literal">true</span>,  <span class="hljs-literal">false</span>,
  <span class="hljs-literal">true</span>,  <span class="hljs-literal">true</span>,  <span class="hljs-literal">true</span>,  <span class="hljs-literal">true</span>,
  <span class="hljs-literal">true</span>,  <span class="hljs-literal">false</span>, <span class="hljs-literal">true</span>,  <span class="hljs-literal">false</span>,
  <span class="hljs-literal">true</span>,  <span class="hljs-literal">false</span>, <span class="hljs-literal">false</span>, <span class="hljs-literal">true</span>,
  <span class="hljs-literal">true</span>,  <span class="hljs-literal">true</span>,  <span class="hljs-literal">true</span>,  <span class="hljs-literal">true</span>,
  <span class="hljs-literal">false</span>, <span class="hljs-literal">false</span>, <span class="hljs-literal">true</span>,  <span class="hljs-literal">true</span>
)</code></pre>
<pre style="display: none;"><code class="language-racket"><span class="hljs-comment">;for racket in this kata, </span>
<span class="hljs-comment">;only values that are exactly #t count as sheep. </span>
<span class="hljs-comment">;any other value is not a sheep.</span>
(<span class="hljs-name">count-sheeps</span> &apos;(<span class="hljs-literal">#t</span> <span class="hljs-literal">#t</span> <span class="hljs-literal">#t</span> <span class="hljs-literal">#f</span> <span class="hljs-literal">#t</span> <span class="hljs-literal">#t</span> <span class="hljs-number">1</span>
                <span class="hljs-literal">#t</span> <span class="hljs-literal">#f</span> <span class="hljs-literal">#f</span> <span class="hljs-literal">#f</span> <span class="hljs-literal">#f</span> <span class="hljs-literal">#f</span> <span class="hljs-literal">#f</span>
                <span class="hljs-literal">#t</span> <span class="hljs-literal">#f</span> <span class="hljs-literal">#t</span> <span class="hljs-literal">#t</span> <span class="hljs-literal">#t</span> <span class="hljs-literal">#t</span> <span class="hljs-literal">#t</span>
                <span class="hljs-literal">#t</span> <span class="hljs-literal">#t</span> <span class="hljs-literal">#f</span> <span class="hljs-literal">#t</span> <span class="hljs-literal">#t</span> <span class="hljs-literal">#t</span> <span class="hljs-number">5</span>))</code></pre>
<p>The correct answer would be 17.</p>
<p>Hint: Don&apos;t forget to check for bad values like <code>null</code>/<code>undefined</code></p>

### Solution