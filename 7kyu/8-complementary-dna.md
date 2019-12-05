### Problem:
<p>Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the &quot;instructions&quot; for the development and functioning of living organisms.</p>
<p>If you want to know more <a href="http://en.wikipedia.org/wiki/DNA" target="_blank">http://en.wikipedia.org/wiki/DNA</a></p>
<p>In DNA strings, symbols &quot;A&quot; and &quot;T&quot; are complements of each other, as &quot;C&quot; and &quot;G&quot;. 
You have function with one side of the DNA (string, except for Haskell); you need to get the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).</p>
<p>More similar exercise are found here <a href="http://rosalind.info/problems/list-view/" target="_blank">http://rosalind.info/problems/list-view/</a> (source)</p>
<pre><code class="language-python">DNA_strand (<span class="hljs-string">&quot;ATTGC&quot;</span>) <span class="hljs-comment"># return &quot;TAACG&quot;</span>

DNA_strand (<span class="hljs-string">&quot;GTAT&quot;</span>) <span class="hljs-comment"># return &quot;CATA&quot;</span></code></pre>
<pre style="display: none;"><code class="language-javascript">DNAStrand (<span class="hljs-string">&quot;ATTGC&quot;</span>) <span class="hljs-comment">// return &quot;TAACG&quot;</span>

DNAStrand (<span class="hljs-string">&quot;GTAT&quot;</span>) <span class="hljs-comment">// return &quot;CATA&quot; </span></code></pre>
<pre style="display: none;"><code class="language-typescript">dnaStrand(<span class="hljs-string">&quot;ATTGC&quot;</span>) <span class="hljs-comment">// return &quot;TAACG&quot;</span>

dnaStrand(<span class="hljs-string">&quot;GTAT&quot;</span>) <span class="hljs-comment">// return &quot;CATA&quot; </span></code></pre>
<pre style="display: none;"><code class="language-csharp">MakeComplement(<span class="hljs-string">&quot;ATTGC&quot;</span>) =&gt; <span class="hljs-string">&quot;TAACG&quot;</span>

MakeComplement(<span class="hljs-string">&quot;GTAT&quot;</span>) =&gt; <span class="hljs-string">&quot;CATA&quot;</span></code></pre>
<pre style="display: none;"><code class="language-php">DNA_strand(<span class="hljs-string">&quot;ATTGC&quot;</span>) <span class="hljs-comment">// returns &quot;TAACG&quot;</span>
DNA_strand(<span class="hljs-string">&quot;GTAT&quot;</span>) <span class="hljs-comment">// returns &quot;CATA&quot;</span></code></pre>
<pre style="display: none;"><code class="language-ruby">DNA_strand (<span class="hljs-string">&quot;ATTGC&quot;</span>) <span class="hljs-comment"># return &quot;TAACG&quot;</span>

DNA_strand (<span class="hljs-string">&quot;GTAT&quot;</span>) <span class="hljs-comment"># return &quot;CATA&quot;</span></code></pre>
<pre style="display: none;"><code class="language-crystal">dna_strand(<span class="hljs-string">&quot;ATTGC&quot;</span>) <span class="hljs-comment"># return &quot;TAACG&quot;</span>

dna_strand(<span class="hljs-string">&quot;GTAT&quot;</span>) <span class="hljs-comment"># return &quot;CATA&quot;</span></code></pre>
<pre style="display: none;"><code class="language-java">DnaStrand.makeComplement(<span class="hljs-string">&quot;ATTGC&quot;</span>) <span class="hljs-comment">// return &quot;TAACG&quot;</span>

DnaStrand.makeComplement(<span class="hljs-string">&quot;GTAT&quot;</span>) <span class="hljs-comment">// return &quot;CATA&quot;</span></code></pre>
<pre style="display: none;"><code class="language-kotlin">makeComplement(<span class="hljs-string">&quot;ATTGC&quot;</span>) <span class="hljs-comment">// return &quot;TAACG&quot;</span>

makeComplement(<span class="hljs-string">&quot;GTAT&quot;</span>) <span class="hljs-comment">// return &quot;CATA&quot;</span></code></pre>
<pre style="display: none;"><code class="language-haskell"><span class="hljs-title">dnaStrand</span> []        `shouldBe` []
<span class="hljs-title">dnaStrand</span> [<span class="hljs-type">A</span>,<span class="hljs-type">T</span>,<span class="hljs-type">G</span>,<span class="hljs-type">C</span>] `shouldBe` [<span class="hljs-type">T</span>,<span class="hljs-type">A</span>,<span class="hljs-type">C</span>,<span class="hljs-type">G</span>]
<span class="hljs-title">dnaStrand</span> [<span class="hljs-type">G</span>,<span class="hljs-type">T</span>,<span class="hljs-type">A</span>,<span class="hljs-type">T</span>] `shouldBe` [<span class="hljs-type">C</span>,<span class="hljs-type">A</span>,<span class="hljs-type">T</span>,<span class="hljs-type">A</span>]
<span class="hljs-title">dnaStrand</span> [<span class="hljs-type">A</span>,<span class="hljs-type">A</span>,<span class="hljs-type">A</span>,<span class="hljs-type">A</span>] `shouldBe` [<span class="hljs-type">T</span>,<span class="hljs-type">T</span>,<span class="hljs-type">T</span>,<span class="hljs-type">T</span>]</code></pre>
<pre style="display: none;"><code class="language-clojure">(<span class="hljs-name">is</span> (<span class="hljs-name"><span class="hljs-builtin-name">=</span></span> (<span class="hljs-name">dna-strand</span> <span class="hljs-string">&quot;ATTGC&quot;</span>) <span class="hljs-string">&quot;TAACG&quot;</span>))

(<span class="hljs-name">is</span> (<span class="hljs-name"><span class="hljs-builtin-name">=</span></span> (<span class="hljs-name">dna-strand</span> <span class="hljs-string">&quot;GTAT&quot;</span>) <span class="hljs-string">&quot;CATA&quot;</span>))</code></pre>
<pre style="display: none;"><code class="language-c">dna_strand(<span class="hljs-string">&quot;ATTGC&quot;</span>) <span class="hljs-comment">/* return &quot;TAACG&quot; */</span>
dna_strand(<span class="hljs-string">&quot;GTAT&quot;</span>)  <span class="hljs-comment">/* return &quot;CATA&quot;  */</span></code></pre>
<pre style="display: none;"><code class="language-golang">DNAStrand(<span class="hljs-string">&quot;ATTGC&quot;</span>) <span class="hljs-comment">// returns &quot;TAACG&quot;</span>

DNAStrand(<span class="hljs-string">&quot;GTAT&quot;</span>) <span class="hljs-comment">// returns &quot;CATA&quot;</span></code></pre>
<pre style="display: none;"><code class="language-rust">dna_strand(<span class="hljs-string">&quot;ATTGC&quot;</span>) <span class="hljs-comment">// returns &quot;TAACG&quot;</span>
dna_strand(<span class="hljs-string">&quot;GTAT&quot;</span>)  <span class="hljs-comment">// returns &quot;CATA&quot;</span></code></pre>

### Solution