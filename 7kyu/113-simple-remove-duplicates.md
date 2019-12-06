### Problem:
<p>In this Kata, you will remove the left-most duplicates from a list of integers and return the result.</p>
<pre style="display: none;"><code class="language-haskell"><span class="hljs-title">solve</span> [<span class="hljs-number">3</span>, <span class="hljs-number">4</span>, <span class="hljs-number">4</span>, <span class="hljs-number">3</span>, <span class="hljs-number">6</span>, <span class="hljs-number">3</span>]<span class="hljs-comment">-- =&gt; [4, 6, 3]</span>
<span class="hljs-comment">-- Remove the 3&apos;s at indices 0 and 3</span>
<span class="hljs-comment">-- followed by removing a 4 at index 1</span></code></pre>
<pre style="display: none;"><code class="language-purescript"><span class="hljs-comment">-- Remove the 3&apos;s at indices 0 and 3</span>
<span class="hljs-comment">-- followed by removing a 4 at index 1</span>
<span class="hljs-title">solve</span> (<span class="hljs-number">3</span> : <span class="hljs-number">4</span> : <span class="hljs-number">4</span> : <span class="hljs-number">3</span> : <span class="hljs-number">6</span> : <span class="hljs-number">3</span> : <span class="hljs-type">Nil</span>) <span class="hljs-comment">-- =&gt; 4 : 6 : 3 : Nil</span></code></pre>
<pre style="display: none;"><code class="language-javascript"><span class="hljs-comment">// Remove the 3&apos;s at indices 0 and 3</span>
<span class="hljs-comment">// followed by removing a 4 at index 1</span>
solve([<span class="hljs-number">3</span>, <span class="hljs-number">4</span>, <span class="hljs-number">4</span>, <span class="hljs-number">3</span>, <span class="hljs-number">6</span>, <span class="hljs-number">3</span>]); <span class="hljs-comment">// =&gt; [4, 6, 3]</span></code></pre>
<pre style="display: none;"><code class="language-dart"><span class="hljs-comment">// Remove the 3&apos;s at indices 0 and 3</span>
<span class="hljs-comment">// followed by removing a 4 at index 1</span>
solve([<span class="hljs-number">3</span>, <span class="hljs-number">4</span>, <span class="hljs-number">4</span>, <span class="hljs-number">3</span>, <span class="hljs-number">6</span>, <span class="hljs-number">3</span>]); <span class="hljs-comment">// =&gt; [4, 6, 3]</span></code></pre>
<pre style="display: none;"><code class="language-php"><span class="hljs-comment">// Remove the 3&apos;s at indices 0 and 3</span>
<span class="hljs-comment">// followed by removing a 4 at index 1</span>
solve([<span class="hljs-number">3</span>, <span class="hljs-number">4</span>, <span class="hljs-number">4</span>, <span class="hljs-number">3</span>, <span class="hljs-number">6</span>, <span class="hljs-number">3</span>]); <span class="hljs-comment">// =&gt; [4, 6, 3]</span></code></pre>
<pre style="display: none;"><code class="language-python"><span class="hljs-comment"># Remove the 3&apos;s at indices 0 and 3</span>
<span class="hljs-comment"># followed by removing a 4 at index 1</span>
solve([<span class="hljs-number">3</span>, <span class="hljs-number">4</span>, <span class="hljs-number">4</span>, <span class="hljs-number">3</span>, <span class="hljs-number">6</span>, <span class="hljs-number">3</span>]) <span class="hljs-comment"># =&gt; [4, 6, 3]</span></code></pre>
<pre style="display: none;"><code class="language-coffeescript"><span class="hljs-comment"># Remove the 3&apos;s at indices 0 and 3</span>
<span class="hljs-comment"># followed by removing a 4 at index 1</span>
solve([<span class="hljs-number">3</span>, <span class="hljs-number">4</span>, <span class="hljs-number">4</span>, <span class="hljs-number">3</span>, <span class="hljs-number">6</span>, <span class="hljs-number">3</span>]) <span class="hljs-comment"># =&gt; [4, 6, 3]</span></code></pre>
<pre><code class="language-ruby"><span class="hljs-comment"># Remove the 3&apos;s at indices 0 and 3</span>
<span class="hljs-comment"># followed by removing a 4 at index 1</span>
solve ([<span class="hljs-number">3</span>, <span class="hljs-number">4</span>, <span class="hljs-number">4</span>, <span class="hljs-number">3</span>, <span class="hljs-number">6</span>, <span class="hljs-number">3</span>]) <span class="hljs-comment"># =&gt; [4, 6, 3]</span></code></pre>
<p>More examples can be found in the test cases. </p>
<p>Good luck!</p>

### Solution