### Problem:
<p>Deoxyribonucleic acid, DNA is the primary information storage molecule in biological systems. It is composed of four nucleic acid bases Guanine (&apos;G&apos;), Cytosine (&apos;C&apos;), Adenine (&apos;A&apos;), and Thymine (&apos;T&apos;). </p>
<p>Ribonucleic acid, RNA, is the primary messenger molecule in cells. RNA differs slightly from DNA its chemical structure and contains no Thymine. In RNA Thymine is replaced by another nucleic acid Uracil (&apos;U&apos;).</p>
<p>Create a funciton which translates a given DNA string into RNA.</p>
<p>For example:</p>
<pre><code class="language-python">DNAtoRNA(<span class="hljs-string">&quot;GCAT&quot;</span>) returns (<span class="hljs-string">&quot;GCAU&quot;</span>)</code></pre>
<pre style="display: none;"><code class="language-ruby">DNAtoRNA(<span class="hljs-string">&quot;GCAT&quot;</span>) returns (<span class="hljs-string">&quot;GCAU&quot;</span>)</code></pre>
<pre style="display: none;"><code class="language-javascript">DNAtoRNA(<span class="hljs-string">&quot;GCAT&quot;</span>) returns (<span class="hljs-string">&quot;GCAU&quot;</span>)</code></pre>
<pre style="display: none;"><code class="language-typescript">DNAtoRNA(<span class="hljs-string">&quot;GCAT&quot;</span>) returns (<span class="hljs-string">&quot;GCAU&quot;</span>)</code></pre>
<pre style="display: none;"><code class="language-coffeescript">DNAtoRNA <span class="hljs-string">&quot;GCAT&quot;</span> returns <span class="hljs-string">&quot;GCAU&quot;</span></code></pre>
<pre style="display: none;"><code class="language-elixir">dna_to_rna(<span class="hljs-string">&quot;GCAT&quot;</span>) <span class="hljs-comment">#=&gt; &quot;GCAU&quot;</span></code></pre>
<pre style="display: none;"><code class="language-crystal">dna_to_rna(<span class="hljs-string">&quot;GCAT&quot;</span>) <span class="hljs-comment">#=&gt; &quot;GCAU&quot;</span></code></pre>
<pre style="display: none;"><code class="language-haskell"><span class="hljs-title">dnaToRna</span> <span class="hljs-string">&quot;GCAT&quot;</span> returns <span class="hljs-string">&quot;GCAU&quot;</span></code></pre>
<pre style="display: none;"><code class="language-purescript"><span class="hljs-title">dnaToRna</span> <span class="hljs-string">&quot;GCAT&quot;</span> <span class="hljs-comment">-- =&gt; &quot;GCAU&quot;</span></code></pre>
<pre style="display: none;"><code class="language-java"><span class="hljs-keyword">new</span> Bio().dnaToRna(<span class="hljs-string">&quot;GCAT&quot;</span>) <span class="hljs-comment">// returns &quot;GCAU&quot;</span></code></pre>
<pre style="display: none;"><code class="language-rust">dna_to_rna(<span class="hljs-string">&quot;GCAT&quot;</span>) <span class="hljs-comment">//=&gt; &quot;GCAU&quot;</span></code></pre>
<pre style="display: none;"><code class="language-nasm">dna_to_rna(<span class="hljs-string">&quot;GCAT&quot;</span>)<span class="hljs-comment">; // returns &quot;GCAU&quot;</span></code></pre>
<pre style="display: none;"><code class="language-go">DNAtoRNA(<span class="hljs-string">&quot;GCAT&quot;</span>) <span class="hljs-comment">// returns &quot;GCAU&quot;</span></code></pre>
<pre style="display: none;"><code class="language-c">dna_to_rna(<span class="hljs-string">&quot;GCAT&quot;</span>); <span class="hljs-comment">/* returns &quot;GCAU&quot; */</span></code></pre>
<pre style="display: none;"><code class="language-dart">dnaToRna(<span class="hljs-string">&quot;GCAT&quot;</span>) <span class="hljs-comment">// =&gt; &quot;GCAU&quot;</span></code></pre>
<pre style="display: none;"><code class="language-julia">dnatorna(<span class="hljs-string">&quot;GCAT&quot;</span>) <span class="hljs-comment"># =&gt; &quot;GCAU&quot;</span></code></pre>
<pre style="display: none;"><code class="language-php">dnaToRna(<span class="hljs-string">&quot;GCAT&quot;</span>) <span class="hljs-comment">// =&gt; &quot;GCAU&quot;</span></code></pre>
<pre style="display: none;"><code class="language-racket">(<span class="hljs-name">dna-&gt;rna</span> <span class="hljs-string">&quot;GCAT&quot;</span>) <span class="hljs-comment">; &quot;GCAU&quot;</span></code></pre>
<p>The input string can be of arbitrary length - in particular, it may be empty.  All input is guaranteed to be valid, i.e. each input string will only ever consist of <code>&apos;G&apos;</code>, <code>&apos;C&apos;</code>, <code>&apos;A&apos;</code> and/or <code>&apos;T&apos;</code>.</p>

### Solution