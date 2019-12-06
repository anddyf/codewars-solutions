### Problem:
<p>In this kata, your task is to create a regular expression capable of evaluating binary strings (strings with only <code>1</code>s and <code>0</code>s) and determining whether the given string represents a number divisible by 3.</p>
<p>Take into account that:</p>
<ul>
<li>An empty string <em>might</em> be evaluated to true (it&apos;s not going to be tested, so you don&apos;t need to worry about it - unless you want)</li>
<li>The input should consist only of binary digits - no spaces, other digits, alphanumeric characters, etc.</li>
<li>There might be leading <code>0</code>s.</li>
</ul>
<h3 id="examples-javascript">Examples (Javascript)</h3>
<ul>
<li><code>multipleof3Regex.test(&apos;000&apos;)</code> should be <code>true</code></li>
<li><code>multipleof3Regex.test(&apos;001&apos;)</code> should be <code>false</code></li>
<li><code>multipleof3Regex.test(&apos;011&apos;)</code> should be <code>true</code></li>
<li><code>multipleof3Regex.test(&apos;110&apos;)</code> should be <code>true</code></li>
<li><code>multipleof3Regex.test(&apos; abc &apos;)</code> should be <code>false</code></li>
</ul>
<p>You can check more in the example test cases</p>
<h3 id="note">Note</h3>
<p>There&apos;s a way to develop an automata (FSM) that evaluates if strings representing numbers in a given base are divisible by a given number. You might want to check an example of an automata for doing this same particular task <a href="http://math.stackexchange.com/questions/140283/why-does-this-fsm-accept-binary-numbers-divisible-by-three" target="_blank">here</a>.</p>
<p>If you want to understand better the inner principles behind it, you might want to study how to get the modulo of an arbitrarily large number taking one digit at a time.</p>

### Solution