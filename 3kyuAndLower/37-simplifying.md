### Problem:
<p>You are given a list/array of example equalities such as:</p>
<pre><code>[ &quot;a + a = b&quot;, &quot;b - d = c &quot;, &quot;a + b = d&quot; ]</code></pre><p>Use this information to solve a given <code>formula</code> in terms of the remaining symbol such as:</p>
<pre><code>formula = &quot;c + a + b&quot;</code></pre><p>in this example:</p>
<pre><code>&quot;c + a + b&quot; = &quot;2a&quot;</code></pre><p>So the output is <code>&quot;2a&quot;</code></p>
<p>Notes:</p>
<ul>
<li>Variables names are case sensitive</li>
<li>There might be whitespaces between the different characters. Or not...</li>
<li>There should be support for parenthesis and their coefficient. Example: <code>a + 3 (6b - c)</code>.</li>
<li>You might encounter several imbricated levels of parenthesis but you&apos;ll never get a variable as coefficient for parenthesis, only constant terms.</li>
<li>All equations will be linear</li>
</ul>
<p>See the sample tests for clarification of what exactly the input/ouput formatting should be.</p>
<p>Without giving away too many hints, the idea is to substitute the examples into the formula and reduce the resulting equation to one unique term. Look carefully at the example tests: you&apos;ll have to identify the pattern used to replace variables in the formula/other equations. Only one solution is possible for each test, using this pattern, so if you keep asking yourself &quot;but what if I do that instead of...&quot;, that is you missed the thing.</p>

### Solution