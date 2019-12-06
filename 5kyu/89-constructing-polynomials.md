### Problem:
<h1 id="task">Task</h1>
<p>Given an array of roots of a polynomial equation, you should reconstruct this equation.</p>
<hr>
<h2 id="output-details">Output details:</h2>
<ul>
<li>If the power equals <code>1</code>, omit it: <code>x = 0</code> instead of <code>x^1 = 0</code></li>
<li>If the power equals <code>0</code>, omit the <code>x</code>: <code>x - 2 = 0</code> instead of <code>x - 2x^0 = 0</code></li>
<li>There should be no 2 signs in a row: <code>x - 1 = 0</code> instead of <code>x + -1 = 0</code></li>
<li>If the coefficient equals <code>0</code>, skip it: <code>x^2 - 1 = 0</code> instead of <code>x^2 + 0x - 1 = 0</code></li>
<li>Repeating roots should not be filtered out: <code>x^2 - 4x + 4 = 0</code> instead of <code>x - 2 = 0</code></li>
<li>The coefficient before <code>q^n</code> is always <code>1</code>: <code>x^n + ... = 0</code> instead of <code>Ax^n + ... = 0</code></li>
</ul>
<hr>
<h2 id="example">Example:</h2>
<pre><code>polynomialize([0])        =&gt;  &quot;x = 0&quot;
polynomialize([1])        =&gt;  &quot;x - 1 = 0&quot;
polynomialize([1, -1])    =&gt;  &quot;x^2 - 1 = 0&quot;
polynomialize([0, 2, 3])  =&gt;  &quot;x^3 - 5x^2 + 6x = 0&quot;</code></pre><hr>
<h2 id="tests">Tests:</h2>
<pre><code class="language-python">      Main suite:                  Edge cases:
 (Reference - <span class="hljs-number">4000</span> ms)         (Reference - <span class="hljs-number">30</span> ms)

N of roots | N of tests      N of roots | N of tests
-----------------------      -----------------------
    <span class="hljs-number">1</span><span class="hljs-number">-10</span>   |   <span class="hljs-number">100</span>              <span class="hljs-number">20</span><span class="hljs-number">-40</span>   |    <span class="hljs-number">125</span>
 <span class="hljs-number">700</span><span class="hljs-number">-750</span>   |    <span class="hljs-number">25</span>               <span class="hljs-number">2</span><span class="hljs-number">-20</span>   |    <span class="hljs-number">125</span></code></pre>
<pre style="display: none;"><code class="language-ruby">      Main <span class="hljs-symbol">suite:</span>                  Edge <span class="hljs-symbol">cases:</span>
 (Reference - <span class="hljs-number">4000</span> ms)         (Reference - <span class="hljs-number">20</span> ms)

N of roots <span class="hljs-params">| N of tests      N of roots |</span> N of tests
-----------------------      -----------------------
    <span class="hljs-number">1</span>-<span class="hljs-number">10</span>   <span class="hljs-params">|   100              20-40   |</span>    <span class="hljs-number">125</span>
 <span class="hljs-number">500</span>-<span class="hljs-number">550</span>   <span class="hljs-params">|    25               2-20   |</span>    <span class="hljs-number">125</span></code></pre>
<pre style="display: none;"><code class="language-javascript">      Main suite:                  Edge cases:
 (Reference - <span class="hljs-number">4000</span> ms)         (Reference - <span class="hljs-number">20</span> ms)

N <span class="hljs-keyword">of</span> roots | N <span class="hljs-keyword">of</span> tests      N <span class="hljs-keyword">of</span> roots | N <span class="hljs-keyword">of</span> tests
-----------------------      -----------------------
    <span class="hljs-number">1</span><span class="hljs-number">-10</span>   |    <span class="hljs-number">100</span>             <span class="hljs-number">20</span><span class="hljs-number">-40</span>   |    <span class="hljs-number">125</span>
 <span class="hljs-number">625</span><span class="hljs-number">-675</span>   |     <span class="hljs-number">25</span>              <span class="hljs-number">2</span><span class="hljs-number">-20</span>   |    <span class="hljs-number">125</span></code></pre>

### Solution