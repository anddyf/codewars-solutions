### Problem:
<p>Write a function </p>
<pre style="display: none;"><code class="language-csharp">TripleDouble(<span class="hljs-keyword">long</span> num1, <span class="hljs-keyword">long</span> num2)</code></pre>
<pre style="display: none;"><code class="language-java">TripleDouble(<span class="hljs-keyword">long</span> num1, <span class="hljs-keyword">long</span> num2)</code></pre>
<pre><code class="language-javascript">tripledouble(num1,num2)</code></pre>
<pre style="display: none;"><code class="language-python">triple_double(num1, num2)</code></pre>
<pre style="display: none;"><code class="language-ruby">triple_double(num1, num2)</code></pre>
<pre style="display: none;"><code class="language-scala">tripleDouble(num1: <span class="hljs-type">Long</span>, num2: <span class="hljs-type">Long</span>): <span class="hljs-type">Int</span></code></pre>
<p>which takes numbers <code>num1</code> and <code>num2</code> and returns <code>1</code> if there is a straight triple of a number at any place in <code>num1</code> and also a straight double of the <strong>same</strong> number in <code>num2</code>.</p>
<p>If this isn&apos;t the case, return <code>0</code></p>
<h2 id="examples">Examples</h2>
<pre><code class="language-javascript">tripledouble(<span class="hljs-number">451999277</span>, <span class="hljs-number">41177722899</span>) == <span class="hljs-number">1</span> <span class="hljs-comment">// num1 has straight triple 999s and </span>
                                          <span class="hljs-comment">// num2 has straight double 99s</span>

tripledouble(<span class="hljs-number">1222345</span>, <span class="hljs-number">12345</span>) == <span class="hljs-number">0</span> <span class="hljs-comment">// num1 has straight triple 2s but num2 has only a single 2</span>

tripledouble(<span class="hljs-number">12345</span>, <span class="hljs-number">12345</span>) == <span class="hljs-number">0</span>

tripledouble(<span class="hljs-number">666789</span>, <span class="hljs-number">12345667</span>) == <span class="hljs-number">1</span></code></pre>
<pre style="display: none;"><code class="language-csharp">TripleDouble(<span class="hljs-number">451999277</span>, <span class="hljs-number">41177722899</span>) == <span class="hljs-number">1</span> <span class="hljs-comment">// num1 has straight triple 999s and </span>
                                          <span class="hljs-comment">// num2 has straight double 99s</span>

TripleDouble(<span class="hljs-number">1222345</span>, <span class="hljs-number">12345</span>) == <span class="hljs-number">0</span> <span class="hljs-comment">// num1 has straight triple 2s but num2 has only a single 2</span>

TripleDouble(<span class="hljs-number">12345</span>, <span class="hljs-number">12345</span>) == <span class="hljs-number">0</span>

TripleDouble(<span class="hljs-number">666789</span>, <span class="hljs-number">12345667</span>) == <span class="hljs-number">1</span></code></pre>
<pre style="display: none;"><code class="language-java">TripleDouble(<span class="hljs-number">451999277</span>, <span class="hljs-number">41177722899</span>) == <span class="hljs-number">1</span> <span class="hljs-comment">// num1 has straight triple 999s and </span>
                                          <span class="hljs-comment">// num2 has straight double 99s</span>

TripleDouble(<span class="hljs-number">1222345</span>, <span class="hljs-number">12345</span>) == <span class="hljs-number">0</span> <span class="hljs-comment">// num1 has straight triple 2s but num2 has only a single 2</span>

TripleDouble(<span class="hljs-number">12345</span>, <span class="hljs-number">12345</span>) == <span class="hljs-number">0</span>

TripleDouble(<span class="hljs-number">666789</span>, <span class="hljs-number">12345667</span>) == <span class="hljs-number">1</span></code></pre>
<pre style="display: none;"><code class="language-python">triple_double(<span class="hljs-number">451999277</span>, <span class="hljs-number">41177722899</span>) == <span class="hljs-number">1</span>
<span class="hljs-comment"># num1 has straight triple 999s and num2 has straight double 99s</span>

triple_double(<span class="hljs-number">1222345</span>, <span class="hljs-number">12345</span>) == <span class="hljs-number">0</span>
<span class="hljs-comment"># num1 has straight triple 2s but num2 has only a single 2</span>

triple_double(<span class="hljs-number">12345</span>, <span class="hljs-number">12345</span>) == <span class="hljs-number">0</span>

triple_double(<span class="hljs-number">666789</span>, <span class="hljs-number">12345667</span>) == <span class="hljs-number">1</span></code></pre>
<pre style="display: none;"><code class="language-ruby">triple_double(<span class="hljs-number">451999277</span>, <span class="hljs-number">41177722899</span>) == <span class="hljs-number">1</span>
<span class="hljs-comment"># num1 has straight triple 999s and  num2 has straight double 99s</span>

triple_double(<span class="hljs-number">1222345</span>, <span class="hljs-number">12345</span>) == <span class="hljs-number">0</span>
<span class="hljs-comment"># num1 has straight triple 2s but num2 has only a single 2</span>

triple_double(<span class="hljs-number">12345</span>, <span class="hljs-number">12345</span>) == <span class="hljs-number">0</span>

triple_double(<span class="hljs-number">666789</span>, <span class="hljs-number">12345667</span>) == <span class="hljs-number">1</span></code></pre>
<pre style="display: none;"><code class="language-scala"><span class="hljs-comment">// num1 has straight triple 999s and num2 has straight double 99s</span>
tripleDouble(<span class="hljs-number">451999277</span>, <span class="hljs-number">41177722899</span>) == <span class="hljs-number">1</span>

<span class="hljs-comment">// num1 has straight triple 2s but num2 has only a single 2:</span>
tripleDouble(<span class="hljs-number">1222345</span>, <span class="hljs-number">12345</span>) == <span class="hljs-number">0</span>

tripleDouble(<span class="hljs-number">12345</span>, <span class="hljs-number">12345</span>) == <span class="hljs-number">0</span>

tripleDouble(<span class="hljs-number">666789</span>, <span class="hljs-number">12345667</span>) == <span class="hljs-number">1</span></code></pre>

### Solution