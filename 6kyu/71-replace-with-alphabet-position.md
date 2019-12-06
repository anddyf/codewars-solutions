### Problem:
<p>Welcome.</p>
<p>In this kata you are required to, given a string, replace every letter with its position in the alphabet.</p>
<p>If anything in the text isn&apos;t a letter, ignore it and don&apos;t return it.</p>
<p><code>&quot;a&quot; = 1</code>, <code>&quot;b&quot; = 2</code>, etc.</p>
<h2 id="example">Example</h2>
<pre style="display: none;"><code class="language-javascript">alphabetPosition(<span class="hljs-string">&quot;The sunset sets at twelve o&apos; clock.&quot;</span>)</code></pre>
<pre><code class="language-python">alphabet_position(<span class="hljs-string">&quot;The sunset sets at twelve o&apos; clock.&quot;</span>)</code></pre>
<pre style="display: none;"><code class="language-ruby">alphabet_position(<span class="hljs-string">&quot;The sunset sets at twelve o&apos; clock.&quot;</span>)</code></pre>
<pre style="display: none;"><code class="language-csharp">Kata.AlphabetPosition(<span class="hljs-string">&quot;The sunset sets at twelve o&apos; clock.&quot;</span>)</code></pre>
<pre style="display: none;"><code class="language-php">alphabet_position(<span class="hljs-string">&apos;The sunset sets at twelve o\&apos; clock.&apos;</span>);</code></pre>
<pre style="display: none;"><code class="language-c">alphabet_position(<span class="hljs-string">&quot;The sunset sets at twelve o&apos; clock.&quot;</span>);</code></pre>
<pre style="display: none;"><code class="language-nasm"><span class="hljs-symbol">text:</span>  <span class="hljs-built_in">db</span>  <span class="hljs-string">&quot;The sunset sets at twelve o&apos; clock.&quot;</span>,0h0
<span class="hljs-symbol">
main:</span>
    <span class="hljs-keyword">mov</span> <span class="hljs-built_in">rdi</span>, text
    <span class="hljs-keyword">call</span> alphabet_position</code></pre>
<pre style="display: none;"><code class="language-rust">alphabet_position(<span class="hljs-string">&quot;The sunset sets at twelve o&apos; clock.&quot;</span>)</code></pre>
<pre style="display: none;"><code class="language-scala">alphabetPosition(<span class="hljs-string">&quot;The sunset sets at twelve o&apos; clock.&quot;</span>)</code></pre>
<pre style="display: none;"><code class="language-groovy">Kata.alphabetPosition(<span class="hljs-string">&quot;The sunset sets at twelve o&apos; clock.&quot;</span>)</code></pre>
<p>Should return <code>&quot;20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11&quot;</code> (as a string)</p>

### Solution