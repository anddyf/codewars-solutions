### Problem:
<p>For a given chemical formula represented by a string, count the number of atoms of each element contained in the molecule and return an object (associative array in PHP, <code>Dictionary&lt;string, int&gt;</code> in C#, Map&lt;String,Integer&gt; in Java).</p>
<p>For example:</p>
<pre><code class="language-javascript"><span class="hljs-keyword">var</span> water = <span class="hljs-string">&apos;H2O&apos;</span>;
parseMolecule(water); <span class="hljs-comment">// return {H: 2, O: 1}</span>

<span class="hljs-keyword">var</span> magnesiumHydroxide = <span class="hljs-string">&apos;Mg(OH)2&apos;</span>;
parseMolecule(magnesiumHydroxide); <span class="hljs-comment">// return {Mg: 1, O: 2, H: 2}</span>

<span class="hljs-keyword">var</span> fremySalt = <span class="hljs-string">&apos;K4[ON(SO3)2]2&apos;</span>;
parseMolecule(fremySalt); <span class="hljs-comment">// return {K: 4, O: 14, N: 2, S: 4}</span></code></pre>
<pre style="display: none;"><code class="language-php">parse_molecule(<span class="hljs-string">&apos;H2O&apos;</span>); <span class="hljs-comment">// =&gt; [&apos;H&apos; =&gt; 2, &apos;O&apos; =&gt; 1]</span>
parse_molecule(<span class="hljs-string">&apos;Mg(OH)2&apos;</span>); <span class="hljs-comment">// =&gt; [&apos;Mg&apos; =&gt; 1, &apos;O&apos; =&gt; 2, &apos;H&apos; =&gt; 2]</span>
parse_molecule(<span class="hljs-string">&apos;K4[ON(SO3)2]2&apos;</span>); <span class="hljs-comment">// =&gt; [&apos;K&apos; =&gt; 4, &apos;O&apos; =&gt; 14, &apos;N&apos; =&gt; 2, &apos;S&apos; =&gt; 4]</span></code></pre>
<pre style="display: none;"><code class="language-csharp">Kata.ParseMolecule(<span class="hljs-string">&quot;H2O&quot;</span>); <span class="hljs-comment">// =&gt; new Dictionary&lt;string, int&gt; {{&quot;H&quot;, 2}, {&quot;O&quot;, 1}}</span>
Kata.ParseMolecule(<span class="hljs-string">&quot;Mg(OH)2&quot;</span>); <span class="hljs-comment">// =&gt; new Dictionary&lt;string, int&gt; {{&quot;Mg&quot;, 1}, {&quot;O&quot;, 2}, {&quot;H&quot;, 2}}</span>
Kata.ParseMolecule(<span class="hljs-string">&quot;K4[ON(SO3)2]2&quot;</span>); <span class="hljs-comment">// =&gt; new Dictionary&lt;string, int&gt; {{&quot;K&quot;, 4}, {&quot;O&quot;, 14}, {&quot;N&quot;, 2}, {&quot;S&quot;, 4}}</span></code></pre>
<pre style="display: none;"><code class="language-python">water = <span class="hljs-string">&apos;H2O&apos;</span>
parse_molecule(water)                 <span class="hljs-comment"># return {H: 2, O: 1}</span>

magnesium_hydroxide = <span class="hljs-string">&apos;Mg(OH)2&apos;</span>
parse_molecule(magnesium_hydroxide)   <span class="hljs-comment"># return {Mg: 1, O: 2, H: 2}</span>

var fremy_salt = <span class="hljs-string">&apos;K4[ON(SO3)2]2&apos;</span>
parse_molecule(fremySalt)             <span class="hljs-comment"># return {K: 4, O: 14, N: 2, S: 4}</span></code></pre>
<pre style="display: none;"><code class="language-haskell">&gt;&gt;&gt; parseMolecule <span class="hljs-string">&quot;H2O&quot;</span> <span class="hljs-comment">-- water</span>
<span class="hljs-type">Right</span> [(<span class="hljs-string">&quot;H&quot;</span>,<span class="hljs-number">2</span>),(<span class="hljs-string">&quot;O&quot;</span>,<span class="hljs-number">1</span>)]

&gt;&gt;&gt; parseMolecule <span class="hljs-string">&quot;Mg(OH)2&quot;</span> <span class="hljs-comment">-- magnesium hydroxide</span>
<span class="hljs-type">Right</span> [(<span class="hljs-string">&quot;Mg&quot;</span>,<span class="hljs-number">1</span>),(<span class="hljs-string">&quot;O&quot;</span>,<span class="hljs-number">2</span>),(<span class="hljs-string">&quot;H&quot;</span>,<span class="hljs-number">2</span>)]

&gt;&gt;&gt; parseMolecule <span class="hljs-string">&quot;K4[ON(SO3)2]2&quot;</span> <span class="hljs-comment">-- Fremy&apos;s salt</span>
<span class="hljs-type">Right</span> [(<span class="hljs-string">&quot;K&quot;</span>,<span class="hljs-number">4</span>),(<span class="hljs-string">&quot;O&quot;</span>,<span class="hljs-number">14</span>),(<span class="hljs-string">&quot;N&quot;</span>,<span class="hljs-number">2</span>),(<span class="hljs-string">&quot;S&quot;</span>,<span class="hljs-number">4</span>)]

&gt;&gt;&gt; parseMolecule <span class="hljs-string">&quot;pie&quot;</span>
<span class="hljs-type">Left</span> <span class="hljs-string">&quot;Not a valid molecule&quot;</span></code></pre>
<pre style="display: none;"><code class="language-rust">parse_molecule(<span class="hljs-string">&quot;H2O&quot;</span>);           <span class="hljs-comment">// water</span>
<span class="hljs-comment">// Ok([(&quot;H&quot;, 2), (&quot;O&quot;, 1)])</span>

parse_molecule(<span class="hljs-string">&quot;Mg(OH)2&quot;</span>);       <span class="hljs-comment">// magnesium hydroxide</span>
<span class="hljs-comment">// Ok([(&quot;Mg&quot;, 1), (&quot;O&quot;, 2), (&quot;H&quot;, 2)]</span>

parse_molecule(<span class="hljs-string">&quot;K4[ON(SO3)2]2&quot;</span>); <span class="hljs-comment">// Fremy&apos;s salt</span>
<span class="hljs-comment">// Ok([(&quot;K&quot;, 4), (&quot;O&quot;, 14),(&quot;N&quot;, 2),(&quot;S&quot;, 4)])</span>

parse_molecule(<span class="hljs-string">&quot;pie&quot;</span>)
<span class="hljs-comment">// Err(ParseError)</span></code></pre>
<pre style="display: none;"><code class="language-java">String water = <span class="hljs-string">&quot;H2O&quot;</span>;
parseMolecule.getAtoms(water); <span class="hljs-comment">// return [H: 2, O: 1]</span>

String magnesiumHydroxide = <span class="hljs-string">&quot;Mg(OH)2&quot;</span>;
parseMolecule.getAtoms(magnesiumHydroxide); <span class="hljs-comment">// return [&quot;Mg&quot;: 1, &quot;O&quot;: 2, &quot;H&quot;: 2]</span>

String fremySalt = <span class="hljs-string">&quot;K4[ON(SO3)2]2&quot;</span>;
parseMolecule.getAtoms(fremySalt); <span class="hljs-comment">// return [&quot;K&quot;: 4, &quot;O&quot;: 14, &quot;N&quot;: 2, &quot;S&quot;: 4]</span>

parseMolecule.getAtoms(<span class="hljs-string">&quot;pie&quot;</span>); <span class="hljs-comment">// throw an IllegalArgumentException</span></code></pre>
<p>As you can see, some formulas have brackets in them. The index outside the brackets tells you that you have to multiply count of each atom inside the bracket on this index. For example, in Fe(NO3)2 you have one iron atom, two nitrogen atoms and six oxygen atoms.</p>
<p>Note that brackets may be <strong>round, square or curly</strong> and can also be <strong>nested</strong>. Index after the braces is <strong>optional</strong>.</p>

### Solution