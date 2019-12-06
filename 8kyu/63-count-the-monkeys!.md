### Problem:
<p>You take your son to the forest to see the monkeys. You know that there are a certain number there (n), but your son is too young to just appreciate the full number, he has to start counting them from 1.</p>
<p>As a good parent, you will sit and count with him. Given the number (n), populate an array with all numbers up to and including that number, but excluding zero.</p>
<p>For example:</p>
<pre><code class="language-javascript">monkeyCount(<span class="hljs-number">10</span>) <span class="hljs-comment">// --&gt; [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]</span>
monkeyCount(<span class="hljs-number">1</span>) <span class="hljs-comment">// --&gt; [1]</span></code></pre>
<pre style="display: none;"><code class="language-reason">monkey<span class="hljs-constructor">Count(10)</span> <span class="hljs-comment">/* --&gt; [| 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 |] */</span>
monkey<span class="hljs-constructor">Count(1)</span> <span class="hljs-comment">/* --&gt; [| 1 |] */</span></code></pre>
<pre style="display: none;"><code class="language-go">monkeyCount(<span class="hljs-number">10</span>) <span class="hljs-comment">// --&gt; []int{1, 2, 3, 4, 5, 6, 7, 8, 9, 10}</span>
monkeyCount(<span class="hljs-number">1</span>) <span class="hljs-comment">// --&gt; []int{1}</span></code></pre>
<pre style="display: none;"><code class="language-php">monkeyCount(<span class="hljs-number">10</span>) <span class="hljs-comment">// --&gt; [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]</span>
monkeyCount(<span class="hljs-number">1</span>) <span class="hljs-comment">// --&gt; [1]</span></code></pre>
<pre style="display: none;"><code class="language-python">monkeyCount(<span class="hljs-number">10</span>) <span class="hljs-comment"># --&gt; [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]</span>
monkeyCount(<span class="hljs-number">1</span>) <span class="hljs-comment"># --&gt; [1]</span></code></pre>
<pre style="display: none;"><code class="language-ruby">monkeyCount(<span class="hljs-number">10</span>) <span class="hljs-comment"># --&gt; [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]</span>
monkeyCount(<span class="hljs-number">1</span>) <span class="hljs-comment"># --&gt; [1]</span></code></pre>
<pre style="display: none;"><code class="language-java">monkeyCount(<span class="hljs-number">10</span>) <span class="hljs-comment">// --&gt; new int[]{1, 2, 3, 4, 5, 6, 7, 8, 9, 10}</span>
monkeyCount(<span class="hljs-number">1</span>) <span class="hljs-comment">// --&gt; new int[]{1}</span></code></pre>
<pre style="display: none;"><code class="language-csharp">monkeyCount(<span class="hljs-number">10</span>) <span class="hljs-comment">// --&gt; new int[]{1, 2, 3, 4, 5, 6, 7, 8, 9, 10}</span>
monkeyCount(<span class="hljs-number">1</span>) <span class="hljs-comment">// --&gt; new int[]{1}</span></code></pre>
<pre style="display: none;"><code class="language-swift">monkeyCount(<span class="hljs-number">10</span>) <span class="hljs-comment">// --&gt; [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]</span>
monkeyCount(<span class="hljs-number">1</span>) <span class="hljs-comment">// --&gt; [1]</span></code></pre>

### Solution