### Problem:
<ul>
<li>A friend of mine takes a sequence of numbers from 1 to n (where n &gt; 0).</li>
<li>Within that sequence, he chooses two numbers, a and b.</li>
<li>He says that the product of a and b should be equal to the sum of all numbers in the sequence, excluding a and b.</li>
<li>Given a number n, could you tell me the numbers he excluded from the sequence?</li>
</ul>
<p>The function takes the parameter: <code>n</code> 
(n is always strictly greater than 0) and returns an array or a string (depending on the language) of the form: </p>
<pre><code>[(a, b), ...] or [[a, b], ...] or {{a, b}, ...} or or [{a, b}, ...]</code></pre><p>with <strong>all</strong> <code>(a, b)</code> which are the possible removed numbers in the sequence <code>1 to n</code>.</p>
<p><code>[(a, b), ...] or [[a, b], ...] or {{a, b}, ...} or ...</code>will be sorted in increasing order of the &quot;a&quot;.</p>
<p>It happens that there are several possible (a, b).
The function returns an empty array (or an empty string) if no possible numbers are found which will prove that my friend has not told the truth! (Go: in this case return <code>nil</code>).</p>
<p>(See examples of returns for each language in &quot;RUN SAMPLE TESTS&quot;)</p>
<h1 id="examples">Examples:</h1>
<pre><code>removNb(26) should return [(15, 21), (21, 15)]</code></pre><p>or</p>
<pre><code>removNb(26) should return { {15, 21}, {21, 15} }</code></pre><p>or</p>
<pre><code>removeNb(26) should return [[15, 21], [21, 15]]</code></pre><p>or</p>
<pre><code>removNb(26) should return [ {15, 21}, {21, 15} ]</code></pre><p>or</p>
<pre><code>removNb(26) should return &quot;15 21, 21 15&quot;</code></pre><p>or</p>
<pre><code>in C:
removNb(26) should return  **an array of pairs {{15, 21}{21, 15}}**
tested by way of strings.</code></pre>
### Solution