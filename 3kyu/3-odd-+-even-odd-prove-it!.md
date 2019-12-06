### Problem:
<h2 id="looking-for-a-challenge-the-kata-abba-prove-it-is-a-great-next-step-to-this-kata"><em><strong>Looking for a challenge?</strong> The kata <a href="https://www.codewars.com/kata/59db393bc1596bd2b700007f" target="_blank">A+B=B+A? Prove it!</a> is a great next step to this kata.</em></h2>
<h1 id="whats-this-kata-about">What&apos;s this kata about?</h1>
<p>In this kata, you will prove, via types multiple facts about even and odd numbers. These facts include:</p>
<ul>
<li>If <em>n</em> is even, then <em>n+1</em> is odd.</li>
<li>If <em>n</em> is odd, then <em>n+1</em> is even.</li>
<li>If <em>n</em> is even and <em>m</em> is odd, then <em>n+m</em> is odd.</li>
</ul>
<p>...and so on.</p>
<p><strong>This will require knowledge of type families, datakinds, and GADTs.</strong></p>
<h1 id="how-do-we-prove-something-with-types">How do we prove something with types?</h1>
<p>Functions can be read as implications. Think of the type <code>A -&gt; B</code> as reading &apos;if we have an <code>A</code>, then we can get a <code>B</code>&apos;. For this reason, if we think of types as propositions rather than data, then we can build proofs using functions between them, where <code>A -&gt; B</code> is read as &apos;<code>A</code> implies <code>B</code>&apos;.</p>
<p>In this kata, three datatypes are defined:</p>
<pre><code class="language-haskell"><span class="hljs-comment">-- | The natural numbers.</span>
<span class="hljs-class"><span class="hljs-keyword">data</span> <span class="hljs-type">Nat</span> = <span class="hljs-type">Z</span> | <span class="hljs-type">S</span> <span class="hljs-type">Nat</span></span>

<span class="hljs-comment">-- | The axioms of the even numbers.</span>
<span class="hljs-class"><span class="hljs-keyword">data</span> <span class="hljs-type">Even</span> (<span class="hljs-title">n</span> :: <span class="hljs-type">Nat</span>) where</span>
  <span class="hljs-comment">-- | Axiom: zero is even.</span>
  <span class="hljs-type">ZeroEven</span> :: <span class="hljs-type">Even</span> <span class="hljs-type">Z</span>
  <span class="hljs-comment">-- | Axiom: if n is even, then n+2 is even.</span>
  <span class="hljs-type">NextEven</span> :: <span class="hljs-type">Even</span> n -&gt; <span class="hljs-type">Even</span> (<span class="hljs-type">S</span> (<span class="hljs-type">S</span> n))

<span class="hljs-comment">-- | The axioms of the odd numbers.</span>
<span class="hljs-class"><span class="hljs-keyword">data</span> <span class="hljs-type">Odd</span> (<span class="hljs-title">n</span> :: <span class="hljs-type">Nat</span>) where</span>
  <span class="hljs-comment">-- | Axiom: one is odd.</span>
  <span class="hljs-type">OneOdd</span> :: <span class="hljs-type">Odd</span> (<span class="hljs-type">S</span> <span class="hljs-type">Z</span>)
  <span class="hljs-comment">-- | Axiom: if n is odd, then n+2 is odd.</span>
  <span class="hljs-type">NextOdd</span> :: <span class="hljs-type">Odd</span> n -&gt; <span class="hljs-type">Odd</span> (<span class="hljs-type">S</span> (<span class="hljs-type">S</span> n))</code></pre>
<pre style="display: none;"><code class="language-idris"><span class="hljs-title">public</span> <span class="hljs-keyword">export</span>
<span class="hljs-class"><span class="hljs-keyword">data</span> <span class="hljs-type">Even</span> : <span class="hljs-type">Nat</span> -&gt; <span class="hljs-type">Type</span> where</span>
  <span class="hljs-comment">-- | Zero is even.</span>
  <span class="hljs-type">ZeroEven</span> : <span class="hljs-type">Even</span> <span class="hljs-type">Z</span>
  <span class="hljs-comment">-- | If n is even, then n+2 is even.</span>
  <span class="hljs-type">NextEven</span> : <span class="hljs-type">Even</span> n -&gt; <span class="hljs-type">Even</span> (<span class="hljs-type">S</span> (<span class="hljs-type">S</span> n))

<span class="hljs-title">public</span> <span class="hljs-keyword">export</span>
<span class="hljs-class"><span class="hljs-keyword">data</span> <span class="hljs-type">Odd</span> : <span class="hljs-type">Nat</span> -&gt; <span class="hljs-type">Type</span> where</span>
  <span class="hljs-comment">-- | One is odd.</span>
  <span class="hljs-type">OneOdd</span> : <span class="hljs-type">Odd</span> (<span class="hljs-type">S</span> <span class="hljs-type">Z</span>)
  <span class="hljs-comment">-- | If n is odd, then n+2 is odd.</span>
  <span class="hljs-type">NextOdd</span> : <span class="hljs-type">Odd</span> n -&gt; <span class="hljs-type">Odd</span> (<span class="hljs-type">S</span> (<span class="hljs-type">S</span> n))</code></pre>
<p>Now we have the <em>axioms</em> built. Here they are represented as data constructors, but in the corresponding proof we can imagine them as the base assumptions from which we can build our proofs.</p>
<p>Once we have type families for certain operations built, we can build proofs like so:</p>
<pre><code class="language-haskell"><span class="hljs-title">evenPlusOdd</span> :: <span class="hljs-type">Even</span> n -&gt; <span class="hljs-type">Odd</span> m -&gt; <span class="hljs-type">Odd</span> (<span class="hljs-type">Add</span> m n)
<span class="hljs-title">evenPlusOdd</span> = <span class="hljs-comment">-- (proof here)</span></code></pre>
<pre style="display: none;"><code class="language-idris"><span class="hljs-title">evenPlusOdd</span> : <span class="hljs-type">Even</span> n -&gt; <span class="hljs-type">Odd</span> m -&gt; <span class="hljs-type">Odd</span> (m + n)
<span class="hljs-title">evenPlusOdd</span> = ?proof</code></pre>
<p>The initial solution will provide type signatures for all the proofs you will need to complete. Good luck!</p>
<p>(Remember: the principle challenge in this kata is getting it to typecheck. The rest is easy, as long as you don&apos;t use <code>undefined</code>.)</p>

### Solution