### Problem:
<p>In mathematics, a <a href="https://en.wikipedia.org/wiki/Diophantine_equation" target="_blank">Diophantine equation</a> is a polynomial equation, usually with two or more unknowns, such that only the integer solutions are sought or studied.</p>
<p>In this kata we want to find all integers <code>x, y</code> (<code>x &gt;= 0, y &gt;= 0</code>) solutions of a diophantine equation of the form:</p>
<h4 id="xsup2sup---4--ysup2sup--n">x<sup>2</sup> - 4 * y<sup>2</sup> = n</h4>
<p>(where the unknowns are <code>x</code> and <code>y</code>, and <code>n</code> is a given positive number)
in decreasing order of the positive x<sub>i</sub>. </p>
<p>If there is no solution return <code>[]</code> or <code>&quot;[]&quot; or &quot;&quot;</code>. (See &quot;RUN SAMPLE TESTS&quot; for examples of returns).</p>
<h2 id="examples">Examples:</h2>
<pre><code>solEquaStr(90005) --&gt; &quot;[[45003, 22501], [9003, 4499], [981, 467], [309, 37]]&quot;
solEquaStr(90002) --&gt; &quot;[]&quot;</code></pre><h2 id="hint">Hint:</h2>
<p>x<sup>2</sup> - 4 * y<sup>2</sup> = (x - 2*y) * (x + 2*y)</p>

### Solution