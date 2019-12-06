### Problem:
<p>The goal of this exercise is to convert a string to a new string where each character in the new string is <code>&quot;(&quot;</code> if that character appears only once in the original string, or <code>&quot;)&quot;</code> if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.</p>
<h2 id="examples">Examples</h2>
<pre><code>&quot;din&quot;      =&gt;  &quot;(((&quot;
&quot;recede&quot;   =&gt;  &quot;()()()&quot;
&quot;Success&quot;  =&gt;  &quot;)())())&quot;
&quot;(( @&quot;     =&gt;  &quot;))((&quot; </code></pre><p><strong>Notes</strong></p>
<p>Assertion messages may be unclear about what they display in some languages. If you read <code>&quot;...It Should encode XXX&quot;</code>, the <code>&quot;XXX&quot;</code> is the expected result, not the input!</p>

### Solution