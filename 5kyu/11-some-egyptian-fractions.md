### Problem:
<p>Given a rational number n</p>
<p><code>n &gt;= 0, with denominator strictly positive</code>  </p>
<ul>
<li>as a string (example: &quot;2/3&quot; in Ruby, Python, Clojure, JS, CS, Go) or as two strings (example: &quot;2&quot; &quot;3&quot; in Haskell, Java, CSharp, C++, Swift) </li>
<li>or as a rational or decimal number (example: 3/4, 0.67 in R) </li>
</ul>
<p>decompose 
this number as a sum of rationals with numerators equal to one and without repetitions
(2/3 = 1/2 + 1/6 is correct but not 2/3 = 1/3 + 1/3, 1/3 is repeated).</p>
<p>The algorithm must be &quot;greedy&quot;, so at each stage the new rational obtained in the decomposition must have a denominator as small as possible. 
In this manner the sum of a few fractions in the decomposition gives a rather good approximation of the rational to decompose.</p>
<p>2/3 = 1/3 + 1/3 doesn&apos;t fit because of the repetition but also because the first 1/3 has a denominator bigger than the one in 1/2 
in the decomposition 2/3 = 1/2 + 1/6.</p>
<h3 id="example">Example:</h3>
<p>(You can see other examples in &quot;Sample Tests:&quot;)</p>
<pre><code>decompose(&quot;21/23&quot;) or &quot;21&quot; &quot;23&quot; or 21/23 should return 

[&quot;1/2&quot;, &quot;1/3&quot;, &quot;1/13&quot;, &quot;1/359&quot;, &quot;1/644046&quot;] in Ruby, Python, Clojure, JS, CS, Haskell, Go

&quot;[1/2, 1/3, 1/13, 1/359, 1/644046]&quot; in Java, CSharp, C++

&quot;1/2,1/3,1/13,1/359,1/644046&quot; in C, Swift, R</code></pre><h3 id="notes">Notes</h3>
<p>1) The decomposition of 21/23 as</p>
<pre><code>21/23 = 1/2 + 1/3 + 1/13 + 1/598 + 1/897</code></pre><p>is exact but don&apos;t fulfill our requirement because 598 is bigger than 359.
Same for </p>
<pre><code>21/23 = 1/2 + 1/3 + 1/23 + 1/46 + 1/69 (23 is bigger than 13)
or 
21/23 = 1/2 + 1/3 + 1/15 + 1/110 + 1/253 (15 is bigger than 13).</code></pre><p>2) The rational given to decompose could be greater than one or equal to one, in which case the first &quot;fraction&quot; will be an integer 
(with an implicit denominator of 1). </p>
<p>3) If the numerator parses to zero the function &quot;decompose&quot; returns [] (or &quot;&quot;.</p>
<p>4) The number could also be a decimal which can be expressed as a rational. </p>
<p>examples:</p>
<p><code>0.6</code> in Ruby, Python, Clojure,JS, CS, Julia, Go</p>
<p><code>&quot;66&quot; &quot;100&quot;</code> in Haskell, Java, CSharp, C++, C, Swift, Scala, Kotlin</p>
<p><code>0.67</code> in R.</p>
<p><strong>Ref:</strong>
<a href="http://en.wikipedia.org/wiki/Egyptian_fraction" target="_blank">http://en.wikipedia.org/wiki/Egyptian_fraction</a></p>

### Solution