### Problem:
<h1 id="regular-expression-for-binary-numbers-divisible-by-n">Regular Expression for Binary Numbers Divisible by n</h1>
<p>Create a function that will return a regular expression string that is capable of evaluating binary strings (which consist of only <code>1</code>s and <code>0</code>s) and determining whether the given string represents a number divisible by <code>n</code>.</p>
<h2 id="tests">Tests</h2>
<p>Inputs <code>1 &lt;= n &lt;= 18</code> will be tested</p>
<p>Each <code>n</code> will be tested against random invalid tests and random valid tests (which may or may not pass the regex test itself, accordingly).</p>
<h2 id="notes">Notes</h2>
<ul>
<li>Strings that are not binary numbers should be rejected.</li>
<li>Keep your solution under 5000 characters. This means you can&apos;t hard-code the answers.</li>
<li>Only these characters may be included in your returned string: <code>01?:*+^$()[]|</code></li>
</ul>
<h2 id="javascript-notes">Javascript Notes</h2>
<ul>
<li>Do <strong>not</strong> include the regex caps <code>/.../</code>. Your string will be used as such: <code>RegExp(regexDivisibleBy(3))</code> in the tests.</li>
<li>No funny business! There should be no need for prototyping, so don&apos;t even think about it.</li>
</ul>

### Solution