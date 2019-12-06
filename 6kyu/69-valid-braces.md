### Problem:
<p>Write a function that takes a string of braces, and determines if the order of the braces is valid. It should return <code>true</code> if the string is valid, and <code>false</code> if it&apos;s invalid.</p>
<p>This Kata is similar to the <a href="https://www.codewars.com/kata/valid-parentheses" target="_blank">Valid Parentheses</a> Kata, but introduces new characters: brackets <code>[]</code>, and curly braces <code>{}</code>. Thanks to <code>@arnedag</code> for the idea!</p>
<p>All input strings will be nonempty, and will only consist of parentheses, brackets and curly braces: <code>()[]{}</code>. </p>
<h3 id="what-is-considered-valid">What is considered Valid?</h3>
<p>A string of braces is considered valid if all braces are matched with the correct brace.</p>
<h2 id="examples">Examples</h2>
<pre><code class="language-py">&quot;(){}[]&quot;   =&gt;  True
&quot;([{}])&quot;   =&gt;  True
&quot;(}&quot;       =&gt;  False
&quot;[(])&quot;     =&gt;  False
&quot;[({})](]&quot; =&gt;  False</code></pre>

### Solution