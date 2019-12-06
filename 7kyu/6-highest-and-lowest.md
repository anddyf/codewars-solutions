### Problem:
<p>In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.</p>
<p><strong>Example:</strong></p>
<pre style="display: none;"><code class="language-php">highAndLow(<span class="hljs-string">&quot;1 2 3 4 5&quot;</span>);  <span class="hljs-comment">// return &quot;5 1&quot;</span>
highAndLow(<span class="hljs-string">&quot;1 2 -3 4 5&quot;</span>); <span class="hljs-comment">// return &quot;5 -3&quot;</span>
highAndLow(<span class="hljs-string">&quot;1 9 3 4 -5&quot;</span>); <span class="hljs-comment">// return &quot;9 -5&quot;</span></code></pre>
<pre><code class="language-csharp">Kata.HighAndLow(<span class="hljs-string">&quot;1 2 3 4 5&quot;</span>);  <span class="hljs-comment">// return &quot;5 1&quot;</span>
Kata.HighAndLow(<span class="hljs-string">&quot;1 2 -3 4 5&quot;</span>); <span class="hljs-comment">// return &quot;5 -3&quot;</span>
Kata.HighAndLow(<span class="hljs-string">&quot;1 9 3 4 -5&quot;</span>); <span class="hljs-comment">// return &quot;9 -5&quot;</span></code></pre>
<pre style="display: none;"><code class="language-fsharp">highAndLow <span class="hljs-string">&quot;1 2 3 4 5&quot;</span>  <span class="hljs-comment">// return &quot;5 1&quot;</span>
highAndLow <span class="hljs-string">&quot;1 2 -3 4 5&quot;</span> <span class="hljs-comment">// return &quot;5 -3&quot;</span>
highAndLow <span class="hljs-string">&quot;1 9 3 4 -5&quot;</span> <span class="hljs-comment">// return &quot;9 -5&quot;</span></code></pre>
<pre style="display: none;"><code class="language-javascript">highAndLow(<span class="hljs-string">&quot;1 2 3 4 5&quot;</span>);  <span class="hljs-comment">// return &quot;5 1&quot;</span>
highAndLow(<span class="hljs-string">&quot;1 2 -3 4 5&quot;</span>); <span class="hljs-comment">// return &quot;5 -3&quot;</span>
highAndLow(<span class="hljs-string">&quot;1 9 3 4 -5&quot;</span>); <span class="hljs-comment">// return &quot;9 -5&quot;</span></code></pre>
<pre style="display: none;"><code class="language-cpp">highAndLow(<span class="hljs-string">&quot;1 2 3 4 5&quot;</span>);  <span class="hljs-comment">// return &quot;5 1&quot;</span>
highAndLow(<span class="hljs-string">&quot;1 2 -3 4 5&quot;</span>); <span class="hljs-comment">// return &quot;5 -3&quot;</span>
highAndLow(<span class="hljs-string">&quot;1 9 3 4 -5&quot;</span>); <span class="hljs-comment">// return &quot;9 -5&quot;</span></code></pre>
<pre style="display: none;"><code class="language-typescript">highAndLow(<span class="hljs-string">&quot;1 2 3 4 5&quot;</span>);  <span class="hljs-comment">// return &quot;5 1&quot;</span>
highAndLow(<span class="hljs-string">&quot;1 2 -3 4 5&quot;</span>); <span class="hljs-comment">// return &quot;5 -3&quot;</span>
highAndLow(<span class="hljs-string">&quot;1 9 3 4 -5&quot;</span>); <span class="hljs-comment">// return &quot;9 -5&quot;</span></code></pre>
<pre style="display: none;"><code class="language-coffeescript">highAndLow(<span class="hljs-string">&quot;1 2 3 4 5&quot;</span>)  <span class="hljs-comment"># return &quot;5 1&quot;</span>
highAndLow(<span class="hljs-string">&quot;1 2 -3 4 5&quot;</span>) <span class="hljs-comment"># return &quot;5 -3&quot;</span>
highAndLow(<span class="hljs-string">&quot;1 9 3 4 -5&quot;</span>) <span class="hljs-comment"># return &quot;9 -5&quot;</span></code></pre>
<pre style="display: none;"><code class="language-python">high_and_low(<span class="hljs-string">&quot;1 2 3 4 5&quot;</span>)  <span class="hljs-comment"># return &quot;5 1&quot;</span>
high_and_low(<span class="hljs-string">&quot;1 2 -3 4 5&quot;</span>) <span class="hljs-comment"># return &quot;5 -3&quot;</span>
high_and_low(<span class="hljs-string">&quot;1 9 3 4 -5&quot;</span>) <span class="hljs-comment"># return &quot;9 -5&quot;</span></code></pre>
<pre style="display: none;"><code class="language-ruby">high_and_low(<span class="hljs-string">&quot;1 2 3 4 5&quot;</span>)  <span class="hljs-comment"># return &quot;5 1&quot;</span>
high_and_low(<span class="hljs-string">&quot;1 2 -3 4 5&quot;</span>) <span class="hljs-comment"># return &quot;5 -3&quot;</span>
high_and_low(<span class="hljs-string">&quot;1 9 3 4 -5&quot;</span>) <span class="hljs-comment"># return &quot;9 -5&quot;</span></code></pre>
<pre style="display: none;"><code class="language-crystal">high_and_low(<span class="hljs-string">&quot;1 2 3 4 5&quot;</span>)  <span class="hljs-comment"># return &quot;5 1&quot;</span>
high_and_low(<span class="hljs-string">&quot;1 2 -3 4 5&quot;</span>) <span class="hljs-comment"># return &quot;5 -3&quot;</span>
high_and_low(<span class="hljs-string">&quot;1 9 3 4 -5&quot;</span>) <span class="hljs-comment"># return &quot;9 -5&quot;</span></code></pre>
<pre style="display: none;"><code class="language-java">highAndLow(<span class="hljs-string">&quot;1 2 3 4 5&quot;</span>)  <span class="hljs-comment">// return &quot;5 1&quot;</span>
highAndLow(<span class="hljs-string">&quot;1 2 -3 4 5&quot;</span>) <span class="hljs-comment">// return &quot;5 -3&quot;</span>
highAndLow(<span class="hljs-string">&quot;1 9 3 4 -5&quot;</span>) <span class="hljs-comment">// return &quot;9 -5&quot;</span></code></pre>
<pre style="display: none;"><code class="language-haskell"><span class="hljs-title">highAndLow</span> <span class="hljs-string">&quot;1 2 3 4 5&quot;</span>)  # return <span class="hljs-string">&quot;5 1&quot;</span>
<span class="hljs-title">highAndLow</span> <span class="hljs-string">&quot;1 2 -3 4 5&quot;</span>) # return <span class="hljs-string">&quot;5 -3&quot;</span>
<span class="hljs-title">highAndLow</span> <span class="hljs-string">&quot;1 9 3 4 -5&quot;</span>) # return <span class="hljs-string">&quot;9 -5&quot;</span></code></pre>
<pre style="display: none;"><code class="language-golang">HighAndLow(<span class="hljs-string">&quot;1 2 3 4 5&quot;</span>)  <span class="hljs-comment">// return &quot;5 1&quot;</span>
HighAndLow(<span class="hljs-string">&quot;1 2 -3 4 5&quot;</span>) <span class="hljs-comment">// return &quot;5 -3&quot;</span>
HighAndLow(<span class="hljs-string">&quot;1 9 3 4 -5&quot;</span>) <span class="hljs-comment">// return &quot;9 -5&quot;</span></code></pre>
<pre style="display: none;"><code class="language-kotlin">highAndLow(<span class="hljs-string">&quot;1 2 3 4 5&quot;</span>)  <span class="hljs-comment">// return &quot;5 1&quot;</span>
highAndLow(<span class="hljs-string">&quot;1 2 -3 4 5&quot;</span>) <span class="hljs-comment">// return &quot;5 -3&quot;</span>
highAndLow(<span class="hljs-string">&quot;1 9 3 4 -5&quot;</span>) <span class="hljs-comment">// return &quot;9 -5&quot;</span></code></pre>
<p><strong>Notes:</strong></p>
<ul>
<li>All numbers are valid <code>Int32</code>, no <em>need</em> to validate them.</li>
<li>There will always be at least one number in the input string.</li>
<li>Output string must be two numbers separated by a single space, and highest number is first.</li>
</ul>

### Solution