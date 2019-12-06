### Problem:
<h1 id="checkerboard">Checkerboard</h1>
<p>Write a method <code>checkerboard</code>/<code>Checkerboard</code> which takes an integer <code>size</code> and returns a checkerboard of dimensions <code>size x size</code>. There are two colored squares on the checkerboard. Red squares are represented by the string <code>[r]</code> and black squares are represented by the string <code>[b]</code>. You MUST use the newline character <code>\n</code> to insert a newline at the end of each row.</p>
<ul>
<li>The top left corner should be a red square.</li>
<li>Each row should have alternating squares in the row.</li>
<li>The starting square on each row should also alternate.</li>
</ul>
<h2 id="assumptions">Assumptions</h2>
<ul>
<li>You can assume you are given an integer size.</li>
<li>You cannot assume positive values. <ul>
<li>Thus you should return an empty string for negative sizes and a size of 0. (An empty string does not have a newline ending).</li>
</ul>
</li>
<li>You should assume the newline character used is <code>\n</code>.</li>
<li>You MUST leave a newline character at the end of the full checkerboard thus allowing the board to be on its own if you were to run in a terminal.</li>
</ul>
<h2 id="examples">Examples</h2>
<pre><code class="language-ruby">puts checkerboard(<span class="hljs-number">5</span>);
[r][b][r][b][r]
[b][r][b][r][b]
[r][b][r][b][r]
[b][r][b][r][b]
[r][b][r][b][r]</code></pre>
<pre style="display: none;"><code class="language-javascript">checkerboard(8);
&quot;[r][b][r][b][r][b][r][b]
[b][r][b][r][b][r][b][r]
[r][b][r][b][r][b][r][b]
[b][r][b][r][b][r][b][r]
[r][b][r][b][r][b][r][b]
[b][r][b][r][b][r][b][r]
[r][b][r][b][r][b][r][b]
[b][r][b][r][b][r][b][r]&quot;</code></pre>
<pre style="display: none;"><code class="language-haskell"><span class="hljs-title">putStr</span> $ checkerboard <span class="hljs-number">8</span>
[r][b][r][b][r][b][r][b]
[b][r][b][r][b][r][b][r]
[r][b][r][b][r][b][r][b]
[b][r][b][r][b][r][b][r]
[r][b][r][b][r][b][r][b]
[b][r][b][r][b][r][b][r]
[r][b][r][b][r][b][r][b]
[b][r][b][r][b][r][b][r]</code></pre>
<pre style="display: none;"><code class="language-csharp">Kata.Checkerboard(<span class="hljs-number">8</span>) =&gt;
<span class="hljs-string">&quot;[r][b][r][b][r][b][r][b]\n&quot;</span> +
<span class="hljs-string">&quot;[b][r][b][r][b][r][b][r]\n&quot;</span> +
<span class="hljs-string">&quot;[r][b][r][b][r][b][r][b]\n&quot;</span> +
<span class="hljs-string">&quot;[b][r][b][r][b][r][b][r]\n&quot;</span> +
<span class="hljs-string">&quot;[r][b][r][b][r][b][r][b]\n&quot;</span> +
<span class="hljs-string">&quot;[b][r][b][r][b][r][b][r]\n&quot;</span> +
<span class="hljs-string">&quot;[r][b][r][b][r][b][r][b]\n&quot;</span> +
<span class="hljs-string">&quot;[b][r][b][r][b][r][b][r]\n&quot;</span>;</code></pre>
<h2 id="what-were-testing">What We&apos;re Testing</h2>
<p>We&apos;re testing loops and conditionals and aiming at beginners. There are many ways of achieving the solution so the correct solution will present a fairly basic version that should be more advanced than typical loop examples and has some extra challenge to the problem with the alternating on columns and rows.</p>

### Solution