### Problem:
<p>Create a function named <code>divisors</code>/<code>Divisors</code> that takes an integer <code>n &gt; 1</code> and returns an array with all of the integer&apos;s divisors(except for 1 and the number itself), from smallest to largest. If the number is prime return the string &apos;(integer) is prime&apos; (<code>null</code> in C#) (use <code>Either String a</code> in Haskell and <code>Result&lt;Vec&lt;u32&gt;, String&gt;</code> in Rust).</p>
<h4 id="example">Example:</h4>
<pre><code class="language-javascript">divisors(<span class="hljs-number">12</span>); <span class="hljs-comment">// should return [2,3,4,6]</span>
divisors(<span class="hljs-number">25</span>); <span class="hljs-comment">// should return [5]</span>
divisors(<span class="hljs-number">13</span>); <span class="hljs-comment">// should return &quot;13 is prime&quot;</span></code></pre>
<pre style="display: none;"><code class="language-elixir">divisors(<span class="hljs-number">12</span>) <span class="hljs-comment"># should return [2,3,4,6]</span>
divisors(<span class="hljs-number">25</span>) <span class="hljs-comment"># should return [5]</span>
divisors(<span class="hljs-number">13</span>) <span class="hljs-comment"># should return &quot;13 is prime&quot;</span></code></pre>
<pre style="display: none;"><code class="language-coffeescript">divisors(<span class="hljs-number">12</span>); <span class="hljs-comment"># should return [2,3,4,6]</span>
divisors(<span class="hljs-number">25</span>); <span class="hljs-comment"># should return [5]</span>
divisors(<span class="hljs-number">13</span>); <span class="hljs-comment"># should return &quot;13 is prime&quot;</span></code></pre>
<pre style="display: none;"><code class="language-haskell"><span class="hljs-title">divisors</span> <span class="hljs-number">12</span>   <span class="hljs-comment">-- should return Right [2,3,4,6]</span>
<span class="hljs-title">divisors</span> <span class="hljs-number">25</span>   <span class="hljs-comment">-- should return Right [5]</span>
<span class="hljs-title">divisors</span> <span class="hljs-number">13</span>   <span class="hljs-comment">-- should return Left &quot;13 is prime&quot;</span></code></pre>
<pre style="display: none;"><code class="language-python">divisors(<span class="hljs-number">12</span>); <span class="hljs-comment">#should return [2,3,4,6]</span>
divisors(<span class="hljs-number">25</span>); <span class="hljs-comment">#should return [5]</span>
divisors(<span class="hljs-number">13</span>); <span class="hljs-comment">#should return &quot;13 is prime&quot;</span></code></pre>
<pre style="display: none;"><code class="language-ruby">divisors(<span class="hljs-number">12</span>) <span class="hljs-comment"># should return [2,3,4,6]</span>
divisors(<span class="hljs-number">25</span>) <span class="hljs-comment"># should return [5]</span>
divisors(<span class="hljs-number">13</span>) <span class="hljs-comment"># should return &quot;13 is prime&quot;</span></code></pre>
<pre style="display: none;"><code class="language-rust">divisors(<span class="hljs-number">12</span>); <span class="hljs-comment">// should return Ok(vec![2,3,4,6])</span>
divisors(<span class="hljs-number">25</span>); <span class="hljs-comment">// should return Ok(vec![5])</span>
divisors(<span class="hljs-number">13</span>); <span class="hljs-comment">// should return Err(&quot;13 is prime&quot;)</span></code></pre>
<pre style="display: none;"><code class="language-csharp">Kata.Divisors(<span class="hljs-number">12</span>) =&gt; <span class="hljs-keyword">new</span> <span class="hljs-keyword">int</span>[] {<span class="hljs-number">2</span>, <span class="hljs-number">3</span>, <span class="hljs-number">4</span>, <span class="hljs-number">6</span>};
Kata.Divisors(<span class="hljs-number">25</span>) =&gt; <span class="hljs-keyword">new</span> <span class="hljs-keyword">int</span>[] {<span class="hljs-number">5</span>};
Kata.Divisors(<span class="hljs-number">13</span>) =&gt; <span class="hljs-literal">null</span>;</code></pre>
<pre style="display: none;"><code class="language-php">divisors(<span class="hljs-number">12</span>); <span class="hljs-comment">// =&gt; [2, 3, 4, 6]</span>
divisors(<span class="hljs-number">25</span>); <span class="hljs-comment">// =&gt; [5]</span>
divisors(<span class="hljs-number">13</span>); <span class="hljs-comment">// =&gt; &apos;13 is prime&apos;</span></code></pre>

### Solution