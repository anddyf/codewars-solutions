### Problem:
<p><em>Don&apos;t be afraid, the description is rather long but - hopefully - it is in order that the process be well understood</em>.</p>
<hr>
<p>You are given a string <code>s</code> made up of substring <code>s(1), s(2), ..., s(n)</code> separated by whitespaces.
Example:
<code>&quot;after be arrived two My so&quot;</code></p>
<p>#Task
Return a string <code>t</code> having the following property:</p>
<p><code>length t(O) &lt;= length t(1) &gt;= length t(2) &lt;= length t(3) &gt;= length t(4) .... (P)</code></p>
<p>where the <code>t(i)</code> are the substring of <code>s</code>;
you must respect the following rule:</p>
<p>at each step from left to right, you can only move either already consecutive strings 
or strings that became consecutive after a previous move. The number of moves should be minimum.</p>
<p>#Let us go with our example:</p>
<p>The length of &quot;after&quot; is greater than the length of &quot;be&quot;. Let us move them -&gt;<code>&quot;be after arrived two My so&quot;</code> </p>
<p>The length of &quot;after&quot; is smaller than the length of &quot;arrived&quot;. Let us move them -&gt; <code>&quot;be arrived after two My so&quot;</code></p>
<p>The length of &quot;after&quot; is greater than the length of &quot;two&quot; -&gt;<code>&quot;be arrived two after My so&quot;</code></p>
<p>The length of &quot;after&quot; is greater than the length of &quot;My&quot;. Good!
Finally the length of &quot;My&quot; and &quot;so&quot; are the same, nothing to do.
At the end of the process, the substrings s(i) verify:</p>
<p><code>length s(0) &lt;= length s(1) &gt;= length s(2) &lt;= length s(3) &gt;= length (s4) &lt;= length (s5)</code></p>
<p>Hence given a string s of substrings <code>s(i)</code> the function <code>arrange</code> <strong>with the previous process</strong>
should return a <em>unique</em> string <code>t</code> having the property (P).</p>
<p>It is kind of roller coaster or up and down.
When you have property (P), to make the result more &quot;up and down&quot; visible t(0), t(2), ... 
will be lower cases and the others upper cases.</p>
<pre><code>arrange(&quot;after be arrived two My so&quot;) should return &quot;be ARRIVED two AFTER my SO&quot;</code></pre><h1 id="notes">Notes:</h1>
<ul>
<li>The string <code>&quot;My after be arrived so two&quot;</code> has the property (P) but can&apos;t be obtained by
the <strong>described process</strong> so it won&apos;t be accepted as a result. The property (P) 
doesn&apos;t give unicity by itself.</li>
<li>Process: go from left to right, move only consecutive strings when needed.</li>
<li>For the first fixed tests the needed number of moves to get property (P) 
is given as a comment so that you can know if your process follows the rule.</li>
</ul>

### Solution