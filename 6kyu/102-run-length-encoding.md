### Problem:
<blockquote>
<p><a href="https://en.wikipedia.org/w/index.php?title=Run-length_encoding" target="_blank">Run-length encoding</a> (RLE) is a very simple form of data compression in which runs of data (that is, sequences in which the same data value occurs in many consecutive data elements) are stored as a single data value and count, rather than as the original run. <cite>Wikipedia</cite></p>
</blockquote>
<h2 id="task">Task</h2>
<p>Your task is to write such a run-length encoding. For a given string, return a list (or array) of pairs (or arrays) 
[
 (i<sub>1</sub>, s<sub>1</sub>),
 (i<sub>2</sub>, s<sub>2</sub>),
 &#x2026;,
 (i<sub>n</sub>, s<sub>n</sub>)
], such that one can reconstruct the original string by replicating the character s<sub>x</sub> i<sub>x</sub> times and concatening all those strings. Your run-length encoding should be minimal, ie. for all i the values s<sub>i</sub> and s<sub>i+1</sub> should differ.</p>
<h2 id="examples">Examples</h2>
<p>As the article states, RLE is a <em>very</em> simple form of data compression. It&apos;s only suitable for runs of data, as one can see in the following example:</p>
<pre><code class="language-haskell"><span class="hljs-title">runLengthEncoding</span> <span class="hljs-string">&quot;hello world!&quot;</span> 
        `shouldBe` [(<span class="hljs-number">1</span>,&apos;h&apos;), (<span class="hljs-number">1</span>,&apos;e&apos;), (<span class="hljs-number">2</span>,&apos;l&apos;), (<span class="hljs-number">1</span>,&apos;o&apos;), (<span class="hljs-number">1</span>,&apos; &apos;), (<span class="hljs-number">1</span>,&apos;w&apos;),(<span class="hljs-number">1</span>,&apos;o&apos;), (<span class="hljs-number">1</span>,&apos;r&apos;), (<span class="hljs-number">1</span>,&apos;l&apos;), (<span class="hljs-number">1</span>,&apos;d&apos;), (<span class="hljs-number">1</span>,&apos;!&apos;)]</code></pre>
<pre style="display: none;"><code class="language-coffeescript">runLengthEncoding <span class="hljs-string">&quot;hello world!&quot;</span>
 <span class="hljs-comment"># =&gt;      [[1,&apos;h&apos;], [1,&apos;e&apos;], [2,&apos;l&apos;], [1,&apos;o&apos;], [1,&apos; &apos;], [1,&apos;w&apos;], [1,&apos;o&apos;], [1,&apos;r&apos;], [1,&apos;l&apos;], [1,&apos;d&apos;], [1,&apos;!&apos;]]</span></code></pre>
<pre style="display: none;"><code class="language-javascript">runLengthEncoding(<span class="hljs-string">&quot;hello world!&quot;</span>)
 <span class="hljs-comment">//=&gt;      [[1,&apos;h&apos;], [1,&apos;e&apos;], [2,&apos;l&apos;], [1,&apos;o&apos;], [1,&apos; &apos;], [1,&apos;w&apos;], [1,&apos;o&apos;], [1,&apos;r&apos;], [1,&apos;l&apos;], [1,&apos;d&apos;], [1,&apos;!&apos;]]</span></code></pre>
<pre style="display: none;"><code class="language-python">run_length_encoding(&quot;hello world!&quot;)
 //=&gt;      [[1,&apos;h&apos;], [1,&apos;e&apos;], [2,&apos;l&apos;], [1,&apos;o&apos;], [1,&apos; &apos;], [1,&apos;w&apos;], [1,&apos;o&apos;], [1,&apos;r&apos;], [1,&apos;l&apos;], [1,&apos;d&apos;], [1,&apos;!&apos;]]</code></pre>
<pre style="display: none;"><code class="language-ruby">rle(<span class="hljs-string">&quot;hello world!&quot;</span>)
 <span class="hljs-comment"># =&gt; [[1,&apos;h&apos;], [1,&apos;e&apos;], [2,&apos;l&apos;], [1,&apos;o&apos;], [1,&apos; &apos;], [1,&apos;w&apos;], [1,&apos;o&apos;], [1,&apos;r&apos;], [1,&apos;l&apos;], [1,&apos;d&apos;], [1,&apos;!&apos;]]</span></code></pre>
<p>It&apos;s very effective if the same data value occurs in many consecutive data elements:</p>
<pre><code class="language-haskell"><span class="hljs-title">runLengthEncoding</span> <span class="hljs-string">&quot;aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbb&quot;</span> 
        `shouldBe` [(<span class="hljs-number">34</span>,&apos;a&apos;), (<span class="hljs-number">3</span>,&apos;b&apos;)]</code></pre>
<pre style="display: none;"><code class="language-coffeescript">runLengthEncoding <span class="hljs-string">&quot;aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbb&quot;</span> 
 <span class="hljs-comment">#  =&gt; [[34,&apos;a&apos;], [3,&apos;b&apos;]]</span></code></pre>
<pre style="display: none;"><code class="language-javascript">runLengthEncoding(<span class="hljs-string">&quot;aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbb&quot;</span>)
 <span class="hljs-comment">// =&gt; [[34,&apos;a&apos;], [3,&apos;b&apos;]]</span></code></pre>
<pre style="display: none;"><code class="language-python">run_length_encoding(<span class="hljs-string">&quot;aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbb&quot;</span>)
<span class="hljs-comment"># =&gt; [[34,&apos;a&apos;], [3,&apos;b&apos;]]</span></code></pre>
<pre style="display: none;"><code class="language-ruby">rle(<span class="hljs-string">&quot;aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbb&quot;</span>)
<span class="hljs-comment"># =&gt; [[34,&apos;a&apos;], [3,&apos;b&apos;]]</span></code></pre>

### Solution