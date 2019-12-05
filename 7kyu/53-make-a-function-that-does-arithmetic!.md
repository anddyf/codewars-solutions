### Problem:
<p>Given two numbers and an arithmetic operator (the name of it, as a string), return the result of the two numbers having that operator used on them. </p>
<p><code>a</code> and <code>b</code> will both be positive integers, and <code>a</code> will always be the first number in the operation, and <code>b</code> always the second.</p>
<p>The four operators are &quot;add&quot;, &quot;subtract&quot;, &quot;divide&quot;, &quot;multiply&quot;. </p>
<p>A few examples: </p>
<pre><code class="language-javascript">arithmetic(<span class="hljs-number">5</span>, <span class="hljs-number">2</span>, <span class="hljs-string">&quot;add&quot;</span>)      =&gt; returns <span class="hljs-number">7</span>
arithmetic(<span class="hljs-number">5</span>, <span class="hljs-number">2</span>, <span class="hljs-string">&quot;subtract&quot;</span>) =&gt; returns <span class="hljs-number">3</span>
arithmetic(<span class="hljs-number">5</span>, <span class="hljs-number">2</span>, <span class="hljs-string">&quot;multiply&quot;</span>) =&gt; returns <span class="hljs-number">10</span>
arithmetic(<span class="hljs-number">5</span>, <span class="hljs-number">2</span>, <span class="hljs-string">&quot;divide&quot;</span>)   =&gt; returns <span class="hljs-number">2.5</span></code></pre>
<pre style="display: none;"><code class="language-haskell"><span class="hljs-comment">-- In Haskell:</span>

<span class="hljs-comment">-- 1. The operation is defined as</span>
<span class="hljs-class"><span class="hljs-keyword">data</span> <span class="hljs-type">Operation</span> = <span class="hljs-type">Add</span> | <span class="hljs-type">Divide</span> | <span class="hljs-type">Multiply</span> | <span class="hljs-type">Subtract</span> <span class="hljs-keyword">deriving</span> (<span class="hljs-type">Eq</span>, <span class="hljs-type">Show</span>, <span class="hljs-type">Enum</span>, <span class="hljs-type">Bounded</span>)</span>

<span class="hljs-comment">-- 2. The arithmetic function as </span>
<span class="hljs-title">arithmetic</span> :: <span class="hljs-type">Double</span> -&gt; <span class="hljs-type">Double</span> -&gt; <span class="hljs-type">Operation</span> -&gt; <span class="hljs-type">Double</span>
<span class="hljs-title">arithmetic</span> :: <span class="hljs-type">Fractional</span> a =&gt; a -&gt; a -&gt; <span class="hljs-type">Operation</span> -&gt; a</code></pre>
<pre style="display: none;"><code class="language-csharp">Kata.Arithmetic(<span class="hljs-number">5</span>, <span class="hljs-number">2</span>, <span class="hljs-string">&quot;add&quot;</span>)      =&gt; <span class="hljs-number">7</span>
Kata.Arithmetic(<span class="hljs-number">5</span>, <span class="hljs-number">2</span>, <span class="hljs-string">&quot;subtract&quot;</span>) =&gt; <span class="hljs-number">3</span>
Kata.Arithmetic(<span class="hljs-number">5</span>, <span class="hljs-number">2</span>, <span class="hljs-string">&quot;multiply&quot;</span>) =&gt; <span class="hljs-number">10</span>
Kata.Arithmetic(<span class="hljs-number">5</span>, <span class="hljs-number">2</span>, <span class="hljs-string">&quot;divide&quot;</span>)   =&gt; <span class="hljs-number">2.5</span></code></pre>
<pre><code class="language-javascript">ArithmeticFunction.arithmetic(<span class="hljs-number">5</span>, <span class="hljs-number">2</span>, <span class="hljs-string">&quot;add&quot;</span>)      =&gt; returns <span class="hljs-number">7</span>
ArithmeticFunction.arithmetic(<span class="hljs-number">5</span>, <span class="hljs-number">2</span>, <span class="hljs-string">&quot;subtract&quot;</span>) =&gt; returns <span class="hljs-number">3</span>
ArithmeticFunction.arithmetic(<span class="hljs-number">5</span>, <span class="hljs-number">2</span>, <span class="hljs-string">&quot;multiply&quot;</span>) =&gt; returns <span class="hljs-number">10</span>
ArithmeticFunction.arithmetic(<span class="hljs-number">5</span>, <span class="hljs-number">2</span>, <span class="hljs-string">&quot;divide&quot;</span>)   =&gt; returns <span class="hljs-number">2</span></code></pre>
<pre style="display: none;"><code class="language-go">Arithmetic(<span class="hljs-number">5</span>, <span class="hljs-number">2</span>, <span class="hljs-string">&quot;add&quot;</span>)      =&gt; returns <span class="hljs-number">7</span>
Arithmetic(<span class="hljs-number">5</span>, <span class="hljs-number">2</span>, <span class="hljs-string">&quot;subtract&quot;</span>) =&gt; returns <span class="hljs-number">3</span>
Arithmetic(<span class="hljs-number">5</span>, <span class="hljs-number">2</span>, <span class="hljs-string">&quot;multiply&quot;</span>) =&gt; returns <span class="hljs-number">10</span>
Arithmetic(<span class="hljs-number">5</span>, <span class="hljs-number">2</span>, <span class="hljs-string">&quot;divide&quot;</span>)   =&gt; returns <span class="hljs-number">2</span></code></pre>
<p>Try to do it without using if statements!</p>

### Solution