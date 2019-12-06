### Problem:
<p>Suppose you have 4 numbers: <code>&apos;0&apos;, &apos;9&apos;, &apos;6&apos;, &apos;4&apos;</code> and 3 strings composed with them:</p>
<pre><code>s1 = &quot;6900690040&quot;
s2 = &quot;4690606946&quot;
s3 = &quot;9990494604&quot;</code></pre><p>Compare <code>s1</code> and <code>s2</code> to see how many positions they have in common:
<code>0</code> at index 3, <code>6</code> at index 4, <code>4</code> at index 8 ie 3 common positions out of ten.</p>
<p>Compare <code>s1</code> and <code>s3</code> to see how many positions they have in common:
<code>9</code> at index 1, <code>0</code> at index 3, <code>9</code> at index 5 ie 3  common positions out of ten.</p>
<p>Compare <code>s2</code> and <code>s3</code>. We find 2 common positions out of ten.</p>
<p>So for the 3 strings we have 8 common positions out of 30 ie 0.2666... or 26.666...%</p>
<p>Given <code>n</code> substrings (n &gt;= 2) in a string <code>s</code> our function <code>pos_average</code> will calculate the average percentage of positions that are the same
between the <code>(n * (n-1)) / 2</code> sets of substrings taken amongst the given <code>n</code> substrings. It can happen that some substrings are duplicate but since their ranks are not the same in <code>s</code> they are considered as different substrings.</p>
<p>The function returns the percentage formatted as a float with 10 decimals but the result is tested at 1e.-9 (see function assertFuzzy in the tests).</p>
<h1 id="example">Example:</h1>
<p>Given string s = &quot;444996, 699990, 666690, 096904, 600644, 640646, 606469, 409694, 666094, 606490&quot;
composing a set of n = 10 substrings (hence 45 combinations), <code>pos_average</code> returns <code>29.2592592593</code>.</p>
<p>In a set the <code>n</code> substrings will have the same length ( &gt; 0 ).</p>
<h1 id="notes">Notes</h1>
<ul>
<li>You can see other examples in the &quot;Sample tests&quot;.</li>
</ul>

### Solution