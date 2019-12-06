### Problem:
<p>Take 2 strings <code>s1</code> and <code>s2</code> including only letters from <code>a</code>to <code>z</code>.
Return a new <strong>sorted</strong> string, the longest possible, containing distinct letters,</p>
<ul>
<li>each taken only once - coming from s1 or s2.</li>
</ul>
<h1 id="examples">Examples:</h1>
<pre><code>a = &quot;xyaabbbccccdefww&quot;
b = &quot;xxxxyyyyabklmopq&quot;
longest(a, b) -&gt; &quot;abcdefklmopqwxy&quot;

a = &quot;abcdefghijklmnopqrstuvwxyz&quot;
longest(a, a) -&gt; &quot;abcdefghijklmnopqrstuvwxyz&quot;</code></pre>
### Solution