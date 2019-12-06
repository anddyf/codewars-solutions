### Problem:
<h1 id="a-wolf-in-sheeps-clothing">A wolf in sheep&apos;s clothing</h1>
<p>Wolves have been reintroduced to Great Britain. You are a sheep farmer, and are now plagued by wolves which pretend to be sheep. Fortunately, you are good at spotting them. </p>
<p>Warn the sheep in front of the wolf that it is about to be eaten. Remember that you are standing <strong>at the front of the queue</strong> which is at the end of the array:</p>
<pre><code>[sheep, sheep, sheep, sheep, sheep, wolf, sheep, sheep]      (YOU ARE HERE AT THE FRONT OF THE QUEUE)
   7      6      5      4      3            2      1</code></pre><p>If the wolf is the closest animal to you, return <code>&quot;Pls go away and stop eating my sheep&quot;</code>. Otherwise, return <code>&quot;Oi! Sheep number N! You are about to be eaten by a wolf!&quot;</code> where <code>N</code> is the sheep&apos;s position in the queue.</p>
<p><strong>Note:</strong> there will always be exactly one wolf in the array.</p>
<h2 id="examples">Examples</h2>
<pre><code class="language-javascript">warnTheSheep([<span class="hljs-string">&quot;sheep&quot;</span>, <span class="hljs-string">&quot;sheep&quot;</span>, <span class="hljs-string">&quot;sheep&quot;</span>, <span class="hljs-string">&quot;wolf&quot;</span>, <span class="hljs-string">&quot;sheep&quot;</span>]) === <span class="hljs-string">&quot;Oi! Sheep number 1! You are about to be eaten by a wolf!&quot;</span>

warnTheSheep([<span class="hljs-string">&quot;sheep&quot;</span>, <span class="hljs-string">&quot;sheep&quot;</span>, <span class="hljs-string">&quot;wolf&quot;</span>]) === <span class="hljs-string">&quot;Pls go away and stop eating my sheep&quot;</span></code></pre>
<pre style="display: none;"><code class="language-python">warn_the_sheep([<span class="hljs-string">&quot;sheep&quot;</span>, <span class="hljs-string">&quot;sheep&quot;</span>, <span class="hljs-string">&quot;sheep&quot;</span>, <span class="hljs-string">&quot;wolf&quot;</span>, <span class="hljs-string">&quot;sheep&quot;</span>]) == <span class="hljs-string">&apos;Oi! Sheep number 1! You are about to be eaten by a wolf!&apos;</span>

warn_the_sheep([<span class="hljs-string">&apos;sheep&apos;</span>, <span class="hljs-string">&apos;sheep&apos;</span>, <span class="hljs-string">&apos;wolf&apos;</span>]) == <span class="hljs-string">&apos;Pls go away and stop eating my sheep&apos;</span></code></pre>

### Solution