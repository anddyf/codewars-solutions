### Problem:
<h2 id="description">Description</h2>
<p>Given an array X of positive integers, its elements are to be transformed by running the following operation on them as many times as required:</p>
<p><code>if X[i] &gt; X[j] then X[i] = X[i] - X[j]</code></p>
<p>When no more transformations are possible, return its sum (&quot;smallest possible sum&quot;).</p>
<p>For instance, the successive transformation of the elements of input X = [6, 9, 21] is detailed below:</p>
<pre><code>X_1 = [6, 9, 12] # -&gt; X_1[2] = X[2] - X[1] = 21 - 9
X_2 = [6, 9, 6]  # -&gt; X_2[2] = X_1[2] - X_1[0] = 12 - 6
X_3 = [6, 3, 6]  # -&gt; X_3[1] = X_2[1] - X_2[0] = 9 - 6
X_4 = [6, 3, 3]  # -&gt; X_4[2] = X_3[2] - X_3[1] = 6 - 3
X_5 = [3, 3, 3]  # -&gt; X_5[1] = X_4[0] - X_4[1] = 6 - 3</code></pre><p>The returning output is the sum of the final transformation (here 9).</p>
<h2 id="example">Example</h2>
<pre><code class="language-ruby">solution([<span class="hljs-number">6</span>, <span class="hljs-number">9</span>, <span class="hljs-number">21</span>]) <span class="hljs-comment">#-&gt; 9</span></code></pre>
<pre style="display: none;"><code class="language-clojure">(<span class="hljs-name">solution</span> [<span class="hljs-number">6</span> <span class="hljs-number">9</span> <span class="hljs-number">21</span>]) <span class="hljs-comment">;-&gt; 9</span></code></pre>
<pre style="display: none;"><code class="language-racket">(<span class="hljs-name">solution</span> (<span class="hljs-name"><span class="hljs-builtin-name">list</span></span> <span class="hljs-number">6</span> <span class="hljs-number">9</span> <span class="hljs-number">21</span>)) <span class="hljs-comment">;-&gt; 9</span></code></pre>
<pre style="display: none;"><code class="language-go">Solution([]<span class="hljs-keyword">int</span>{<span class="hljs-number">6</span>,<span class="hljs-number">9</span>,<span class="hljs-number">21</span>}) ;-&gt; <span class="hljs-number">9</span></code></pre>
<h2 id="solution-steps">Solution steps:</h2>
<pre><code class="language-ruby">[<span class="hljs-number">6</span>, <span class="hljs-number">9</span>, <span class="hljs-number">12</span>] <span class="hljs-comment">#-&gt; X[2] = 21 - 9</span>
[<span class="hljs-number">6</span>, <span class="hljs-number">9</span>, <span class="hljs-number">6</span>] <span class="hljs-comment">#-&gt; X[2] = 12 - 6</span>
[<span class="hljs-number">6</span>, <span class="hljs-number">3</span>, <span class="hljs-number">6</span>] <span class="hljs-comment">#-&gt; X[1] = 9 - 6</span>
[<span class="hljs-number">6</span>, <span class="hljs-number">3</span>, <span class="hljs-number">3</span>] <span class="hljs-comment">#-&gt; X[2] = 6 - 3</span>
[<span class="hljs-number">3</span>, <span class="hljs-number">3</span>, <span class="hljs-number">3</span>] <span class="hljs-comment">#-&gt; X[1] = 6 - 3</span></code></pre>
<pre style="display: none;"><code class="language-clojure">[<span class="hljs-number">6</span> <span class="hljs-number">9</span> <span class="hljs-number">12</span>] <span class="hljs-comment">;-&gt; X[2] = 21 - 9</span>
[<span class="hljs-number">6</span> <span class="hljs-number">9</span> <span class="hljs-number">6</span>] <span class="hljs-comment">;-&gt; X[2] = 12 - 6</span>
[<span class="hljs-number">6</span> <span class="hljs-number">3</span> <span class="hljs-number">6</span>] <span class="hljs-comment">;-&gt; X[1] = 9 - 6</span>
[<span class="hljs-number">6</span> <span class="hljs-number">3</span> <span class="hljs-number">3</span>] <span class="hljs-comment">;-&gt; X[2] = 6 - 3</span>
[<span class="hljs-number">3</span> <span class="hljs-number">3</span> <span class="hljs-number">3</span>] <span class="hljs-comment">;-&gt; X[1] = 6 - 3</span></code></pre>
<pre style="display: none;"><code class="language-go">[<span class="hljs-number">6</span> <span class="hljs-number">9</span> <span class="hljs-number">12</span>] <span class="hljs-comment">//-&gt; X[2] = 21 - 9</span>
[<span class="hljs-number">6</span> <span class="hljs-number">9</span> <span class="hljs-number">6</span>] <span class="hljs-comment">//-&gt; X[2] = 12 - 6</span>
[<span class="hljs-number">6</span> <span class="hljs-number">3</span> <span class="hljs-number">6</span>] <span class="hljs-comment">//-&gt; X[1] = 9 - 6</span>
[<span class="hljs-number">6</span> <span class="hljs-number">3</span> <span class="hljs-number">3</span>] <span class="hljs-comment">//-&gt; X[2] = 6 - 3</span>
[<span class="hljs-number">3</span> <span class="hljs-number">3</span> <span class="hljs-number">3</span>] <span class="hljs-comment">//-&gt; X[1] = 6 - 3</span></code></pre>
<h2 id="additional-notes">Additional notes:</h2>
<p>There are performance tests consisted of very big numbers and arrays of size at least 30000. Please write an efficient algorithm to prevent timeout.</p>

### Solution