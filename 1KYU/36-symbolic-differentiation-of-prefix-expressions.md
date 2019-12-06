### Problem:
<p>In this kata your task is to differentiate a mathematical expression given as a string in prefix notation. The result should be the derivative of the expression returned in prefix notation.</p>
<p>To simplify things we will use a simple list format made up of parentesis and spaces. </p>
<ul>
<li><p>The expression format is (func arg1) or (op arg1 arg2) where op means operator, func means function and arg1, arg2 are aguments to the operator or function. For example (+ x 1) or (cos x)</p>
</li>
<li><p>The expressions will always have balanced parentesis and with spaces between list items.</p>
</li>
<li><p>Expression operators, functions and arguments will all be lowercase.</p>
</li>
<li><p>Expressions are single variable expressions using <code>x</code> as the variable.</p>
</li>
<li><p>Expressions can have nested arguments at any depth for example <code>(+ (* 1 x) (* 2 (+ x 1)))</code></p>
</li>
</ul>
<p>Examples of prefix notation in this format:</p>
<pre><code>(+ x 2)        // prefix notation version of x+2

(* (+ x 3) 5)  // same as 5 * (x + 3)

(cos (+ x 1))  // same as cos(x+1)

(^ x 2)        // same as x^2 meaning x raised to power of 2</code></pre><p>The operators and functions you are required to implement are <code>+ - * / ^ cos sin tan exp ln</code> where <code>^</code> means raised to power of. <code>exp</code> is the exponential function (same as <code>e^x</code>) and <code>ln</code> is the natural logarithm (base e). </p>
<p>Example of input values and their derivatives:</p>
<pre><code>(* 1 x) =&gt; 1

(^ x 3) =&gt; (* 3 (^ x 2))

(cos x) =&gt; (* -1 (sin x))</code></pre><p>In addition to returning the derivative your solution must also do <em>some</em> simplifications of the result but only what is specified below. </p>
<ul>
<li><p>The returned expression should not have unecessary 0 or 1 factors. For example it should not return <code>(* 1 (+ x 1))</code> but simply the term <code>(+ x 1)</code> similarly it should not return <code>(* 0 (+ x 1))</code> instead it should return just 0</p>
</li>
<li><p>Results with two constant values such as for example <code>(+ 2 2)</code> should be evaluated and returned as a single value 4</p>
</li>
<li><p>Any argument raised to the zero power should return 1 and if raised to 1 should return the same value or variable. For example (^ x 0) should return 1 and (^ x 1) should return x</p>
</li>
<li><p>No simplifactions are expected for functions like cos, sin, exp, ln... (but their arguments might require a simplification).</p>
</li>
</ul>
<p>Think recursively and build your answer according to the <a href="http://www.rapidtables.com/math/calculus/derivative.htm" target="_blank">rules of derivation</a> and sample test cases.</p>
<p>If you need to diff any test expressions you can use <a href="http://www.wolframalpha.com/" target="_blank">Wolfram Alpha</a> however remember we use prefix format in this kata.</p>
<p>Best of luck !</p>

### Solution