### Problem:
<p>If n is the numerator and d the denominator of a fraction, that fraction is defined a (reduced) proper fraction if and only if GCD(n,d)==1.</p>
<p>For example <code>5/16</code> is a proper fraction, while <code>6/16</code> is not, as both 6 and 16 are divisible by 2, thus the fraction can be reduced to <code>3/8</code>.</p>
<p>Now, if you consider a given number d, how many proper fractions can be built using d as a denominator?</p>
<p>For example, let&apos;s assume that d is 15: you can build a total of 8 different proper fractions between 0 and 1 with it: 1/15, 2/15, 4/15, 7/15, 8/15, 11/15, 13/15 and 14/15.</p>
<p>You are to build a function that computes how many proper fractions you can build with a given denominator:</p>
<pre><code class="language-python">proper_fractions(<span class="hljs-number">1</span>)==<span class="hljs-number">0</span>
proper_fractions(<span class="hljs-number">2</span>)==<span class="hljs-number">1</span>
proper_fractions(<span class="hljs-number">5</span>)==<span class="hljs-number">4</span>
proper_fractions(<span class="hljs-number">15</span>)==<span class="hljs-number">8</span>
proper_fractions(<span class="hljs-number">25</span>)==<span class="hljs-number">20</span></code></pre>
<pre style="display: none;"><code class="language-ruby">proper_fractions(<span class="hljs-number">1</span>)==<span class="hljs-number">0</span>
proper_fractions(<span class="hljs-number">2</span>)==<span class="hljs-number">1</span>
proper_fractions(<span class="hljs-number">5</span>)==<span class="hljs-number">4</span>
proper_fractions(<span class="hljs-number">15</span>)==<span class="hljs-number">8</span>
proper_fractions(<span class="hljs-number">25</span>)==<span class="hljs-number">20</span></code></pre>
<pre style="display: none;"><code class="language-javascript">properFractions(<span class="hljs-number">1</span>)==<span class="hljs-number">0</span>
properFractions(<span class="hljs-number">2</span>)==<span class="hljs-number">1</span>
properFractions(<span class="hljs-number">5</span>)==<span class="hljs-number">4</span>
properFractions(<span class="hljs-number">15</span>)==<span class="hljs-number">8</span>
properFractions(<span class="hljs-number">25</span>)==<span class="hljs-number">20</span></code></pre>
<pre style="display: none;"><code class="language-racket">(<span class="hljs-name">proper-fractions</span> <span class="hljs-number">1</span>)  <span class="hljs-comment">; 0</span>
(<span class="hljs-name">proper-fractions</span> <span class="hljs-number">2</span>   <span class="hljs-comment">; 1</span>
(<span class="hljs-name">proper-fractions</span> <span class="hljs-number">5</span>)  <span class="hljs-comment">; 4</span>
(<span class="hljs-name">proper-fractions</span> <span class="hljs-number">15</span>) <span class="hljs-comment">; 8</span>
(<span class="hljs-name">proper-fractions</span> <span class="hljs-number">25</span>) <span class="hljs-comment">; 20</span></code></pre>
<p>Be ready to handle big numbers.</p>
<p>Edit: to be extra precise, the term should be &quot;reduced&quot; fractions, thanks to <a href="http://www.codewars.com/users/girianshiido" target="_blank">girianshiido</a> for pointing this out and sorry for the use of an improper word :)</p>

### Solution