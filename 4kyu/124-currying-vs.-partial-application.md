### Problem:
<p><a href="http://www.2ality.com/2011/09/currying-vs-part-eval.html" target="_blank">Currying and partial application</a> are two ways of transforming a function into another function with a generally smaller arity. While they are often confused with each other, they work differently. The goal is to learn to differentiate them.</p>
<h2 id="currying">Currying</h2>
<blockquote>
<p>Is the technique of transforming a function that takes multiple arguments in such a way that it can be called as a chain of functions each with a single argument.</p>
</blockquote>
<p>Currying takes a function:</p>
<pre><code>f: X &#xD7; Y &#x2192; R</code></pre><p>and turns it into a function:</p>
<pre><code>f&apos;: X &#x2192; (Y &#x2192; R)</code></pre><p>Instead of calling <code>f</code> with two arguments, we invoke <code>f&apos;</code> with the first argument. The result is a function that we then call with the second argument to produce the result. Thus, if the uncurried <code>f</code> is invoked as:</p>
<pre><code>f(3, 5)</code></pre><p>then the curried <code>f&apos;</code> is invoked as:</p>
<p><code>f&apos;(3)(5)</code></p>
<h3 id="example">Example</h3>
<p>Given this function:</p>
<pre><code class="language-javascript"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">add</span>(<span class="hljs-params">x, y, z</span>) </span>{
  <span class="hljs-keyword">return</span> x + y + z;
}</code></pre>
<pre style="display: none;"><code class="language-python"><span class="hljs-function"><span class="hljs-keyword">def</span> <span class="hljs-title">add</span><span class="hljs-params">(x, y, z)</span>:</span>
  <span class="hljs-keyword">return</span> x + y + z</code></pre>
<pre style="display: none;"><code class="language-php"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">add</span><span class="hljs-params">($x, $y, $z)</span> </span>{
  <span class="hljs-keyword">return</span> $x + $y + $z;
}</code></pre>
<p>We can call in a normal way:</p>
<pre><code class="language-javascript">add(<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>); <span class="hljs-comment">//6</span></code></pre>
<pre style="display: none;"><code class="language-python">add(<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>) <span class="hljs-comment"># =&gt; 6</span></code></pre>
<pre style="display: none;"><code class="language-php">add(<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>); <span class="hljs-comment">//6</span></code></pre>
<p>But we can create a curried version of <code>add(a, b, c)</code>function:</p>
<pre><code class="language-javascript"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">curriedAdd</span>(<span class="hljs-params">a</span>) </span>{
  <span class="hljs-keyword">return</span> <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params">b</span>) </span>{
    <span class="hljs-keyword">return</span> <span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params">c</span>) </span>{
      <span class="hljs-keyword">return</span> add(a, b, c);
    };
  };
}

curriedAdd(<span class="hljs-number">1</span>)(<span class="hljs-number">2</span>)(<span class="hljs-number">3</span>); <span class="hljs-comment">//6</span></code></pre>
<pre style="display: none;"><code class="language-python">curriedAdd = <span class="hljs-keyword">lambda</span> a: (<span class="hljs-keyword">lambda</span> b: (<span class="hljs-keyword">lambda</span> c: add(a,b,c)))
curriedAdd(<span class="hljs-number">1</span>)(<span class="hljs-number">2</span>)(<span class="hljs-number">3</span>) <span class="hljs-comment"># =&gt; 6</span></code></pre>
<pre style="display: none;"><code class="language-php"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">curriedAdd</span><span class="hljs-params">($a)</span> </span>{
  <span class="hljs-keyword">return</span> <span class="hljs-function"><span class="hljs-keyword">function</span><span class="hljs-params">($b)</span> <span class="hljs-title">use</span> <span class="hljs-params">($a)</span> </span>{
    <span class="hljs-keyword">return</span> <span class="hljs-function"><span class="hljs-keyword">function</span><span class="hljs-params">($c)</span> <span class="hljs-title">use</span> <span class="hljs-params">($a, $b)</span> </span>{
      <span class="hljs-keyword">return</span> add($a, $b, $c);
    };
  };
}

curriedAdd(<span class="hljs-number">1</span>)(<span class="hljs-number">2</span>)(<span class="hljs-number">3</span>); <span class="hljs-comment">//6</span></code></pre>
<h2 id="partial-application">Partial application</h2>
<blockquote>
<p>Is the process of fixing a number of arguments to a function, producing another function of smaller arity.</p>
</blockquote>
<p>Partial application takes a function:</p>
<pre><code>f: X &#xD7; Y &#x2192; R</code></pre><p>and a fixed value <code>x</code> for the first argument to produce a new function</p>
<pre><code>f&apos;: Y &#x2192; R</code></pre><p><code>f&apos;</code> does the same as <code>f</code>, but only has to fill in the second parameter which is why its arity is one less than the arity of <code>f</code>. One says that the first argument is bound to <code>x</code>.</p>
<h3 id="example-1">Example</h3>
<pre><code class="language-javascript"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">partialAdd</span>(<span class="hljs-params">a</span>) </span>{
  <span class="hljs-keyword">return</span> <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params">b, c</span>) </span>{
    <span class="hljs-keyword">return</span> add(a, b, c);
  };
}

partialAdd(<span class="hljs-number">1</span>)(<span class="hljs-number">2</span>, <span class="hljs-number">3</span>); <span class="hljs-comment">//6</span></code></pre>
<pre style="display: none;"><code class="language-python">partialAdd = <span class="hljs-keyword">lambda</span> a: (<span class="hljs-keyword">lambda</span> *args: add(a,*args))
partialAdd(<span class="hljs-number">1</span>)(<span class="hljs-number">2</span>, <span class="hljs-number">3</span>) <span class="hljs-comment"># =&gt; 6</span></code></pre>
<pre style="display: none;"><code class="language-php"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">partialAdd</span><span class="hljs-params">($a)</span> </span>{
  <span class="hljs-keyword">return</span> <span class="hljs-function"><span class="hljs-keyword">function</span><span class="hljs-params">($b, $c)</span> <span class="hljs-title">use</span> <span class="hljs-params">($a)</span> </span>{
    <span class="hljs-keyword">return</span> add($a, $b, $c);
  };
}

partialAdd(<span class="hljs-number">1</span>)(<span class="hljs-number">2</span>, <span class="hljs-number">3</span>); <span class="hljs-comment">//6</span></code></pre>
<hr>
<p>Your work is to implement a generic <code>curryPartial()</code> function allows either currying or partial application.</p>
<p>For example:</p>
<pre><code class="language-javascript"><span class="hljs-keyword">var</span> curriedAdd = curryPartial(add);
curriedAdd(<span class="hljs-number">1</span>)(<span class="hljs-number">2</span>)(<span class="hljs-number">3</span>); <span class="hljs-comment">//6</span>

<span class="hljs-keyword">var</span> partialAdd = curryPartial(add, <span class="hljs-number">1</span>);
partialAdd(<span class="hljs-number">2</span>, <span class="hljs-number">3</span>); <span class="hljs-comment">//6</span></code></pre>
<pre style="display: none;"><code class="language-python">curriedAdd = curryPartial(add)
curriedAdd(<span class="hljs-number">1</span>)(<span class="hljs-number">2</span>)(<span class="hljs-number">3</span>) <span class="hljs-comment"># =&gt; 6</span>

partialAdd = curryPartial(add, <span class="hljs-number">1</span>)
partialAdd(<span class="hljs-number">2</span>, <span class="hljs-number">3</span>) <span class="hljs-comment"># =&gt; 6</span></code></pre>
<pre style="display: none;"><code class="language-php">$add = <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-params">($a, $b, $c)</span> </span>{
  <span class="hljs-keyword">return</span> $a + $b + $c;
};
$curriedAdd = curryPartial($add);
$curriedAdd(<span class="hljs-number">1</span>)(<span class="hljs-number">2</span>)(<span class="hljs-number">3</span>); <span class="hljs-comment">//6</span>

<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">add</span><span class="hljs-params">($a, $b, $c)</span> </span>{
  <span class="hljs-keyword">return</span> $a + $b + $c;
}
$partialAdd = curryPartial(<span class="hljs-string">&apos;add&apos;</span>, <span class="hljs-number">1</span>);
$partialAdd(<span class="hljs-number">2</span>, <span class="hljs-number">3</span>); <span class="hljs-comment">//6</span></code></pre>
<p>We want the function be very flexible.</p>
<p>All these examples should produce the same result:</p>
<pre><code class="language-javascript">curryPartial(add)(<span class="hljs-number">1</span>)(<span class="hljs-number">2</span>)(<span class="hljs-number">3</span>); <span class="hljs-comment">//6</span>
curryPartial(add, <span class="hljs-number">1</span>)(<span class="hljs-number">2</span>)(<span class="hljs-number">3</span>); <span class="hljs-comment">//6</span>
curryPartial(add, <span class="hljs-number">1</span>)(<span class="hljs-number">2</span>, <span class="hljs-number">3</span>); <span class="hljs-comment">//6</span>
curryPartial(add, <span class="hljs-number">1</span>, <span class="hljs-number">2</span>)(<span class="hljs-number">3</span>); <span class="hljs-comment">//6</span>
curryPartial(add, <span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>); <span class="hljs-comment">//6</span>
curryPartial(add)(<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>); <span class="hljs-comment">//6</span>
curryPartial(add)(<span class="hljs-number">1</span>, <span class="hljs-number">2</span>)(<span class="hljs-number">3</span>); <span class="hljs-comment">//6</span>
curryPartial(add)()(<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>); <span class="hljs-comment">//6</span>
curryPartial(add)()(<span class="hljs-number">1</span>)()()(<span class="hljs-number">2</span>)(<span class="hljs-number">3</span>); <span class="hljs-comment">//6</span>

curryPartial(add)()(<span class="hljs-number">1</span>)()()(<span class="hljs-number">2</span>)(<span class="hljs-number">3</span>, <span class="hljs-number">4</span>, <span class="hljs-number">5</span>, <span class="hljs-number">6</span>); <span class="hljs-comment">//6</span>
curryPartial(add, <span class="hljs-number">1</span>)(<span class="hljs-number">2</span>, <span class="hljs-number">3</span>, <span class="hljs-number">4</span>, <span class="hljs-number">5</span>); <span class="hljs-comment">//6</span></code></pre>
<pre style="display: none;"><code class="language-python">curryPartial(add)(<span class="hljs-number">1</span>)(<span class="hljs-number">2</span>)(<span class="hljs-number">3</span>) <span class="hljs-comment"># =&gt;6 </span>
curryPartial(add, <span class="hljs-number">1</span>)(<span class="hljs-number">2</span>)(<span class="hljs-number">3</span>) <span class="hljs-comment"># =&gt;6 </span>
curryPartial(add, <span class="hljs-number">1</span>)(<span class="hljs-number">2</span>, <span class="hljs-number">3</span>) <span class="hljs-comment"># =&gt;6 </span>
curryPartial(add, <span class="hljs-number">1</span>, <span class="hljs-number">2</span>)(<span class="hljs-number">3</span>) <span class="hljs-comment"># =&gt;6 </span>
curryPartial(add, <span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>) <span class="hljs-comment"># =&gt;6 </span>
curryPartial(add)(<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>) <span class="hljs-comment"># =&gt;6 </span>
curryPartial(add)(<span class="hljs-number">1</span>, <span class="hljs-number">2</span>)(<span class="hljs-number">3</span>) <span class="hljs-comment"># =&gt;6 </span>
curryPartial(add)()(<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>) <span class="hljs-comment"># =&gt;6 </span>
curryPartial(add)()(<span class="hljs-number">1</span>)()()(<span class="hljs-number">2</span>)(<span class="hljs-number">3</span>) <span class="hljs-comment"># =&gt;6 </span>

curryPartial(add)()(<span class="hljs-number">1</span>)()()(<span class="hljs-number">2</span>)(<span class="hljs-number">3</span>, <span class="hljs-number">4</span>, <span class="hljs-number">5</span>, <span class="hljs-number">6</span>) <span class="hljs-comment"># =&gt;6 </span>
curryPartial(add, <span class="hljs-number">1</span>)(<span class="hljs-number">2</span>, <span class="hljs-number">3</span>, <span class="hljs-number">4</span>, <span class="hljs-number">5</span>) <span class="hljs-comment"># =&gt;6 </span></code></pre>
<pre style="display: none;"><code class="language-php">curryPartial($add)(<span class="hljs-number">1</span>)(<span class="hljs-number">2</span>)(<span class="hljs-number">3</span>); <span class="hljs-comment"># =&gt;6 </span>
curryPartial($add, <span class="hljs-number">1</span>)(<span class="hljs-number">2</span>)(<span class="hljs-number">3</span>); <span class="hljs-comment"># =&gt;6 </span>
curryPartial($add, <span class="hljs-number">1</span>)(<span class="hljs-number">2</span>, <span class="hljs-number">3</span>); <span class="hljs-comment"># =&gt;6 </span>
curryPartial($add, <span class="hljs-number">1</span>, <span class="hljs-number">2</span>)(<span class="hljs-number">3</span>); <span class="hljs-comment"># =&gt;6 </span>
curryPartial($add, <span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>); <span class="hljs-comment"># =&gt;6 </span>
curryPartial($add)(<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>); <span class="hljs-comment"># =&gt;6 </span>
curryPartial($add)(<span class="hljs-number">1</span>, <span class="hljs-number">2</span>)(<span class="hljs-number">3</span>); <span class="hljs-comment"># =&gt;6 </span>
curryPartial($add)()(<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>); <span class="hljs-comment"># =&gt;6 </span>
curryPartial($add)()(<span class="hljs-number">1</span>)()()(<span class="hljs-number">2</span>)(<span class="hljs-number">3</span>); <span class="hljs-comment"># =&gt;6 </span>

curryPartial($add)()(<span class="hljs-number">1</span>)()()(<span class="hljs-number">2</span>)(<span class="hljs-number">3</span>, <span class="hljs-number">4</span>, <span class="hljs-number">5</span>, <span class="hljs-number">6</span>); <span class="hljs-comment"># =&gt;6 </span>
curryPartial($add, <span class="hljs-number">1</span>)(<span class="hljs-number">2</span>, <span class="hljs-number">3</span>, <span class="hljs-number">4</span>, <span class="hljs-number">5</span>); <span class="hljs-comment"># =&gt;6 </span></code></pre>
<p>And also all of these:</p>
<pre><code class="language-javascript">curryPartial(curryPartial(curryPartial(add, <span class="hljs-number">1</span>), <span class="hljs-number">2</span>), <span class="hljs-number">3</span>); <span class="hljs-comment">//6</span>
curryPartial(curryPartial(add, <span class="hljs-number">1</span>, <span class="hljs-number">2</span>), <span class="hljs-number">3</span>); <span class="hljs-comment">//6</span>
curryPartial(curryPartial(add, <span class="hljs-number">1</span>), <span class="hljs-number">2</span>, <span class="hljs-number">3</span>); <span class="hljs-comment">//6</span>
curryPartial(curryPartial(add, <span class="hljs-number">1</span>), <span class="hljs-number">2</span>)(<span class="hljs-number">3</span>); <span class="hljs-comment">//6</span>
curryPartial(curryPartial(add, <span class="hljs-number">1</span>)(<span class="hljs-number">2</span>), <span class="hljs-number">3</span>); <span class="hljs-comment">//6</span>
curryPartial(curryPartial(curryPartial(add, <span class="hljs-number">1</span>)), <span class="hljs-number">2</span>, <span class="hljs-number">3</span>); <span class="hljs-comment">//6</span></code></pre>
<pre style="display: none;"><code class="language-python">curryPartial(curryPartial(curryPartial(add, <span class="hljs-number">1</span>), <span class="hljs-number">2</span>), <span class="hljs-number">3</span>) <span class="hljs-comment"># =&gt;6</span>
curryPartial(curryPartial(add, <span class="hljs-number">1</span>, <span class="hljs-number">2</span>), <span class="hljs-number">3</span>) <span class="hljs-comment"># =&gt;6</span>
curryPartial(curryPartial(add, <span class="hljs-number">1</span>), <span class="hljs-number">2</span>, <span class="hljs-number">3</span>) <span class="hljs-comment"># =&gt;6</span>
curryPartial(curryPartial(add, <span class="hljs-number">1</span>), <span class="hljs-number">2</span>)(<span class="hljs-number">3</span>) <span class="hljs-comment"># =&gt;6</span>
curryPartial(curryPartial(add, <span class="hljs-number">1</span>)(<span class="hljs-number">2</span>), <span class="hljs-number">3</span>) <span class="hljs-comment"># =&gt;6</span>
curryPartial(curryPartial(curryPartial(add, <span class="hljs-number">1</span>)), <span class="hljs-number">2</span>, <span class="hljs-number">3</span>) <span class="hljs-comment"># =&gt;6</span></code></pre>
<pre style="display: none;"><code class="language-php">curryPartial(curryPartial(curryPartial($add, <span class="hljs-number">1</span>), <span class="hljs-number">2</span>), <span class="hljs-number">3</span>); <span class="hljs-comment"># =&gt;6</span>
curryPartial(curryPartial($add, <span class="hljs-number">1</span>, <span class="hljs-number">2</span>), <span class="hljs-number">3</span>); <span class="hljs-comment"># =&gt;6</span>
curryPartial(curryPartial($add, <span class="hljs-number">1</span>), <span class="hljs-number">2</span>, <span class="hljs-number">3</span>); <span class="hljs-comment"># =&gt;6</span>
curryPartial(curryPartial($add, <span class="hljs-number">1</span>), <span class="hljs-number">2</span>)(<span class="hljs-number">3</span>); <span class="hljs-comment"># =&gt;6</span>
curryPartial(curryPartial($add, <span class="hljs-number">1</span>)(<span class="hljs-number">2</span>), <span class="hljs-number">3</span>); <span class="hljs-comment"># =&gt;6</span>
curryPartial(curryPartial(curryPartial($add, <span class="hljs-number">1</span>)), <span class="hljs-number">2</span>, <span class="hljs-number">3</span>); <span class="hljs-comment"># =&gt;6</span></code></pre>

### Solution