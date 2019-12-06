### Problem:
<p>Given two strings s1 and s2, we want to visualize how different the two strings are.
We will only take into account the <em>lowercase</em> letters (a to z).
First let us count the frequency of each <em>lowercase</em> letters in s1 and s2.</p>
<p><code>s1 = &quot;A aaaa bb c&quot;</code></p>
<p><code>s2 = &quot;&amp; aaa bbb c d&quot;</code></p>
<p><code>s1 has 4 &apos;a&apos;, 2 &apos;b&apos;, 1 &apos;c&apos;</code></p>
<p><code>s2 has 3 &apos;a&apos;, 3 &apos;b&apos;, 1 &apos;c&apos;, 1 &apos;d&apos;</code></p>
<p>So the maximum for &apos;a&apos; in s1 and s2 is 4 from s1; the maximum for &apos;b&apos; is 3 from s2.
In the following we will not consider letters when the maximum of their occurrences
is less than or equal to 1.</p>
<p>We can resume the differences between s1 and s2 in the following string:
<code>&quot;1:aaaa/2:bbb&quot;</code>
where <code>1</code> in <code>1:aaaa</code> stands for string s1 and <code>aaaa</code> because the maximum for <code>a</code> is 4.
In the same manner <code>2:bbb</code> stands for string s2 and <code>bbb</code> because the maximum for <code>b</code> is 3.</p>
<p>The task is to produce a string in which each <em>lowercase</em> letters of s1 or s2 appears as many times as
its maximum if this maximum is <em>strictly greater than 1</em>; these letters will be prefixed by the 
number of the string where they appear with their maximum value and <code>:</code>. 
If the maximum is in s1 as well as in s2 the prefix is <code>=:</code>.</p>
<p>In the result, substrings (a substring is for example 2:nnnnn or 1:hhh; it contains the prefix) will be in decreasing order of their length and when they have the same length sorted in ascending lexicographic order (letters and digits - more precisely sorted by codepoint); the different groups will be separated by &apos;/&apos;. See examples and &quot;Example Tests&quot;.</p>
<p>Hopefully other examples can make this clearer.</p>
<pre><code>s1 = &quot;my&amp;friend&amp;Paul has heavy hats! &amp;&quot;
s2 = &quot;my friend John has many many friends &amp;&quot;
mix(s1, s2) --&gt; &quot;2:nnnnn/1:aaaa/1:hhh/2:mmm/2:yyy/2:dd/2:ff/2:ii/2:rr/=:ee/=:ss&quot;

s1 = &quot;mmmmm m nnnnn y&amp;friend&amp;Paul has heavy hats! &amp;&quot;
s2 = &quot;my frie n d Joh n has ma n y ma n y frie n ds n&amp;&quot;
mix(s1, s2) --&gt; &quot;1:mmmmmm/=:nnnnnn/1:aaaa/1:hhh/2:yyy/2:dd/2:ff/2:ii/2:rr/=:ee/=:ss&quot;

s1=&quot;Are the kids at home? aaaaa fffff&quot;
s2=&quot;Yes they are here! aaaaa fffff&quot;
mix(s1, s2) --&gt; &quot;=:aaaaaa/2:eeeee/=:fffff/1:tt/2:rr/=:hh&quot;</code></pre><h1 id="note-for-swift-r-powershell">Note for Swift, R, PowerShell</h1>
<p>The prefix <code>=:</code> is replaced by <code>E:</code></p>
<pre><code>s1 = &quot;mmmmm m nnnnn y&amp;friend&amp;Paul has heavy hats! &amp;&quot;
s2 = &quot;my frie n d Joh n has ma n y ma n y frie n ds n&amp;&quot;
mix(s1, s2) --&gt; &quot;1:mmmmmm/E:nnnnnn/1:aaaa/1:hhh/2:yyy/2:dd/2:ff/2:ii/2:rr/E:ee/E:ss&quot;</code></pre>
### Solution