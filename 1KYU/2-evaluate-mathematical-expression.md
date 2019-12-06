### Problem:
<h1 id="instructions">Instructions</h1>
<p>Given a mathematical expression as a string you must return the result as a number.</p>
<h2 id="numbers">Numbers</h2>
<p>Number may be both whole numbers and/or decimal numbers. The same goes for the returned result.</p>
<h2 id="operators">Operators</h2>
<p>You need to support the following mathematical operators:</p>
<ul>
<li>Multiplication <code>*</code></li>
<li>Division <code>/</code> (as true division)</li>
<li>Addition <code>+</code></li>
<li>Subtraction <code>-</code></li>
</ul>
<p>Operators are always evaluated from left-to-right, and <code>*</code> and <code>/</code> must be evaluated before <code>+</code> and <code>-</code>.</p>
<h2 id="parentheses">Parentheses</h2>
<p>You need to support multiple levels of nested parentheses, ex. <code>(2 / (2 + 3.33) * 4) - -6</code></p>
<h2 id="whitespace">Whitespace</h2>
<p>There may or may not be whitespace between numbers and operators.</p>
<p>An addition to this rule is that the minus sign (<code>-</code>) used for negating numbers and parentheses will <em>never</em> be separated by whitespace. I.e., all of the following are <strong>valid</strong> expressions.</p>
<pre><code>1-1    // 0
1 -1   // 0
1- 1   // 0
1 - 1  // 0
1- -1  // 2
1 - -1 // 2

6 + -(4)   // 2
6 + -( -4) // 10</code></pre><p>And the following are <strong>invalid</strong> expressions</p>
<pre><code>1 - - 1    // Invalid
1- - 1     // Invalid
6 + - (4)  // Invalid
6 + -(- 4) // Invalid</code></pre><h2 id="validation">Validation</h2>
<p>You do not need to worry about validation - you will only receive <strong>valid</strong> mathematical expressions following the above rules.</p>
<p>NOTE: Both <code>eval</code> and <code>Function</code> are disabled. Same goes for <code>String.match</code>.</p>

### Solution