### Problem:
<p>There is an array with some numbers. All numbers are equal except for one. Try to find it!</p>
<pre><code class="language-javascript">findUniq([ <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span> ]) === <span class="hljs-number">2</span>
findUniq([ <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0.55</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span> ]) === <span class="hljs-number">0.55</span></code></pre>
<pre style="display: none;"><code class="language-ruby">find_uniq([ <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span> ]) == <span class="hljs-number">2</span>
find_uniq([ <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>.<span class="hljs-number">55</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span> ]) == <span class="hljs-number">0</span>.<span class="hljs-number">55</span></code></pre>
<pre style="display: none;"><code class="language-python">find_uniq([ <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span> ]) == <span class="hljs-number">2</span>
find_uniq([ <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0.55</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span> ]) == <span class="hljs-number">0.55</span></code></pre>
<pre style="display: none;"><code class="language-java">Kata.findUniq(<span class="hljs-keyword">new</span> <span class="hljs-keyword">double</span>[]{ <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span> }); <span class="hljs-comment">// =&gt; 2</span>
Kata.findUniq(<span class="hljs-keyword">new</span> <span class="hljs-keyword">double</span>[]{ <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0.55</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span> }); <span class="hljs-comment">// =&gt; 0.55</span></code></pre>
<pre style="display: none;"><code class="language-haskell"><span class="hljs-title">getUnique</span> [<span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>] <span class="hljs-comment">-- Result is 2</span>
<span class="hljs-title">getUnique</span> [<span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0.55</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>] <span class="hljs-comment">-- Result is 0.55</span></code></pre>
<p>It&#x2019;s guaranteed that array contains more than 3 numbers.</p>
<p>The tests contain some very huge arrays, so think about performance.</p>
<p>This is the first kata in series:</p>
<ol>
<li>Find the unique number (this kata)</li>
<li><a href="https://www.codewars.com/kata/585d8c8a28bc7403ea0000c3" target="_blank">Find the unique string</a></li>
<li><a href="https://www.codewars.com/kata/5862e0db4f7ab47bed0000e5" target="_blank">Find The Unique</a></li>
</ol>

### Solution