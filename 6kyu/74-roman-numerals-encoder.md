### Problem:
<p>Create a function taking a positive integer as its parameter and returning a string containing the Roman Numeral representation of that integer.</p>
<p>Modern Roman numerals are written by expressing each digit separately starting with the left most digit and skipping any digit with a value of zero. In Roman numerals 1990 is rendered: 1000=M, 900=CM, 90=XC; resulting in MCMXC. 2008 is written as 2000=MM, 8=VIII; or MMVIII. 1666 uses each Roman symbol in descending order: MDCLXVI.</p>
<p>Example:</p>
<pre><code class="language-javascript">solution(<span class="hljs-number">1000</span>); <span class="hljs-comment">// should return &apos;M&apos;</span></code></pre>
<pre style="display: none;"><code class="language-coffeescript">solution(<span class="hljs-number">1000</span>) <span class="hljs-comment"># should return &apos;M&apos;</span></code></pre>
<pre style="display: none;"><code class="language-ruby">solution(<span class="hljs-number">1000</span>) <span class="hljs-comment"># should return &apos;M&apos;</span></code></pre>
<pre style="display: none;"><code class="language-python">solution(<span class="hljs-number">1000</span>) <span class="hljs-comment"># should return &apos;M&apos;</span></code></pre>
<pre style="display: none;"><code class="language-haskell"><span class="hljs-title">solution</span> <span class="hljs-number">1000</span> <span class="hljs-comment">-- should return &quot;M&quot;</span></code></pre>
<pre style="display: none;"><code class="language-java">conversion.solution(<span class="hljs-number">1000</span>); <span class="hljs-comment">//should return &quot;M&quot;</span></code></pre>
<pre style="display: none;"><code class="language-typescript">solution(<span class="hljs-number">1000</span>); <span class="hljs-comment">// should return &apos;M&apos;</span></code></pre>
<pre style="display: none;"><code class="language-cpp">solution(<span class="hljs-number">1000</span>); <span class="hljs-comment">// should return &quot;M&quot;</span></code></pre>
<pre style="display: none;"><code class="language-php">solution(<span class="hljs-number">1000</span>); <span class="hljs-comment">// should return &quot;M&quot;</span></code></pre>
<pre style="display: none;"><code class="language-csharp">RomanConvert.Solution(<span class="hljs-number">1000</span>) -- should <span class="hljs-keyword">return</span> <span class="hljs-string">&quot;M&quot;</span></code></pre>
<pre style="display: none;"><code class="language-swift">solution(<span class="hljs-number">1000</span>) <span class="hljs-comment">// should return &quot;M&quot;</span></code></pre>
<pre style="display: none;"><code class="language-elixir">solution(<span class="hljs-number">1000</span>) <span class="hljs-comment"># should return &quot;M&quot;</span></code></pre>
<pre style="display: none;"><code class="language-r">solution(<span class="hljs-number">1000</span>) <span class="hljs-comment"># should return &quot;M&quot;</span></code></pre>
<pre style="display: none;"><code class="language-c">solution(<span class="hljs-number">1000</span>); <span class="hljs-comment">// =&gt; &quot;M&quot;</span></code></pre>
<pre style="display: none;"><code class="language-nim">solution(<span class="hljs-number">1000</span>) <span class="hljs-comment"># should return &quot;M&quot;</span></code></pre>
<pre style="display: none;"><code class="language-lua">romanEncoder(<span class="hljs-number">1000</span>) <span class="hljs-comment">-- should return &apos;M&apos;</span></code></pre>
<pre style="display: none;"><code class="language-scala"><span class="hljs-type">Roman</span>.encode(<span class="hljs-number">1000</span>) <span class="hljs-comment">// should return &quot;M&quot;</span></code></pre>
<p>Help:</p>
<pre><code>Symbol    Value
I          1
V          5
X          10
L          50
C          100
D          500
M          1,000</code></pre><p>Remember that there can&apos;t be more than 3 identical symbols in a row.</p>
<p>More about roman numerals - <a href="http://en.wikipedia.org/wiki/Roman_numerals" target="_blank">http://en.wikipedia.org/wiki/Roman_numerals</a></p>

### Solution