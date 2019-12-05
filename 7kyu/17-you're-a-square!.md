### Problem:
<h2 id="a-square-of-squares">A square of squares</h2>
<p>You like building blocks. You especially like building blocks that are squares. And what you even like more, is to arrange them into a square of square building blocks!</p>
<p>However, sometimes, you can&apos;t arrange them into a square. Instead, you end up with an ordinary rectangle! Those blasted things! If you just had a way to know, whether you&apos;re currently working in vain&#x2026; Wait! That&apos;s it! You just have to check if your number of building blocks is a <em>perfect square</em>.</p>
<h2 id="task">Task</h2>
<p>Given an integral number, determine if it&apos;s a <a href="https://en.wikipedia.org/wiki/Square_number" target="_blank">square number</a>:</p>
<blockquote>
<p>In mathematics, a <strong>square number</strong> or <strong>perfect square</strong> is an integer that is the square of an integer; in other words, it is the product of some integer with itself.</p>
</blockquote>
<p>The tests will <em>always</em> use some integral number, so don&apos;t worry about that in dynamic typed languages.</p>
<h3 id="examples">Examples</h3>
<pre style="display: none;"><code>is_square (-1) # =&gt; false
is_square   0 # =&gt; true
is_square   3 # =&gt; false
is_square   4 # =&gt; true
is_square  25 # =&gt; true
is_square  26 # =&gt; false</code></pre><pre><code class="language-scala">isSquare(<span class="hljs-number">-1</span>) returns  <span class="hljs-literal">false</span>
isSquare(<span class="hljs-number">0</span>) returns   <span class="hljs-literal">true</span>
isSquare(<span class="hljs-number">3</span>) returns   <span class="hljs-literal">false</span>
isSquare(<span class="hljs-number">4</span>) returns   <span class="hljs-literal">true</span>
isSquare(<span class="hljs-number">25</span>) returns  <span class="hljs-literal">true</span>  
isSquare(<span class="hljs-number">26</span>) returns  <span class="hljs-literal">false</span></code></pre>
<pre style="display: none;"><code class="language-c">is_square(<span class="hljs-number">-1</span>) <span class="hljs-comment">// returns false</span>
is_square(<span class="hljs-number">0</span>)  <span class="hljs-comment">// returns true</span>
is_square(<span class="hljs-number">3</span>)  <span class="hljs-comment">// returns false</span>
is_square(<span class="hljs-number">4</span>)  <span class="hljs-comment">// returns true</span>
is_square(<span class="hljs-number">25</span>) <span class="hljs-comment">// returns true  </span>
is_square(<span class="hljs-number">26</span>) <span class="hljs-comment">// returns false</span></code></pre>
<pre style="display: none;"><code class="language-julia">issquare(-<span class="hljs-number">1</span>) <span class="hljs-comment"># returns false</span>
issquare(<span class="hljs-number">0</span>)  <span class="hljs-comment"># returns true</span>
issquare(<span class="hljs-number">3</span>)  <span class="hljs-comment"># returns false</span>
issquare(<span class="hljs-number">4</span>)  <span class="hljs-comment"># returns true</span>
issquare(<span class="hljs-number">25</span>) <span class="hljs-comment"># returns true  </span>
issquare(<span class="hljs-number">26</span>) <span class="hljs-comment"># returns false</span></code></pre>
<pre style="display: none;"><code class="language-elixir">Math.square?(<span class="hljs-number">-1</span>) <span class="hljs-comment"># returns false</span>
Math.square?(0)  <span class="hljs-comment"># returns true</span>
Math.square?(<span class="hljs-number">3</span>)  <span class="hljs-comment"># returns false</span>
Math.square?(<span class="hljs-number">4</span>)  <span class="hljs-comment"># returns true</span>
Math.square?(<span class="hljs-number">25</span>) <span class="hljs-comment"># returns true  </span>
Math.square?(<span class="hljs-number">26</span>) <span class="hljs-comment"># returns false</span></code></pre>

### Solution