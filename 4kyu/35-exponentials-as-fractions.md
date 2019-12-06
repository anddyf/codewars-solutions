### Problem:
<p>The aim is to calculate <code>exponential(x)</code> (written <code>exp(x)</code> in most math libraries) as an irreducible fraction, the numerator of this fraction having a given number of digits.</p>
<p>We call this function <code>expand</code>, it takes two parameters, <code>x</code> of which we want to evaluate the exponential, <code>digits</code> which is the required number of digits for the numerator. </p>
<p>The function <code>expand</code> will return an array of the form <code>[numerator, denominator]</code>; we stop the loop in the Taylor expansion (see references below) when the numerator has a number of digits <code>&gt;=</code> the required number of digits</p>
<h1 id="examples">Examples:</h1>
<pre><code>expand(1, 2) --&gt; 65/24 (we will write this [65, 24] or (65, 24) in Haskell; 
65/24 ~ 2.708...)

expand(2, 5) --&gt; [20947, 2835]

expand(3, 10) --&gt; [7205850259, 358758400]

expand(1.5, 10) --&gt; [36185315027,8074035200]</code></pre><p><strong>Note</strong>
<code>expand(1,5) = [109601, 40320]</code> is the same as <code>expand(1, 6)</code></p>
<p>#Method:
As said above the way here is to use <code>Taylor expansion</code> of the exponential function though it is not always the best approximation by a rational.</p>
<p>#References:
<a href="https://en.wikipedia.org/wiki/Exponential_function#Formal_definition" target="_blank">https://en.wikipedia.org/wiki/Exponential_function#Formal_definition</a></p>
<p><a href="http://www.efunda.com/math/taylor_series/exponential.cfm" target="_blank">http://www.efunda.com/math/taylor_series/exponential.cfm</a></p>

### Solution