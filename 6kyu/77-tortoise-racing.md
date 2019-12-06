### Problem:
<p>Two tortoises named <strong><em>A</em></strong> and <strong><em>B</em></strong> must run a race. <strong><em>A</em></strong> starts with an average speed of <code>720 feet per hour</code>.
Young <strong><em>B</em></strong> knows she runs faster than <strong><em>A</em></strong>, and furthermore has not finished her cabbage.</p>
<p>When she starts, at last, she can see that <strong><em>A</em></strong> has a <code>70 feet lead</code> but <strong><em>B</em></strong>&apos;s speed is <code>850 feet per hour</code>.
How long will it take <strong><em>B</em></strong> to catch <strong><em>A</em></strong>?</p>
<p>More generally:
given two speeds <code>v1</code> (<strong><em>A</em></strong>&apos;s speed, integer &gt; 0) and <code>v2</code> (<strong><em>B</em></strong>&apos;s speed, integer &gt; 0) and a lead <code>g</code> (integer &gt; 0)
how long will it take <strong><em>B</em></strong> to catch <strong><em>A</em></strong>? </p>
<p>The result will be an array <code>[hour, min, sec]</code> which is the time needed in hours, minutes and seconds (round down to the nearest second)
or a string in some languages.</p>
<p>If <code>v1 &gt;= v2</code> then return <code>nil</code>, <code>nothing</code>, <code>null</code>, <code>None</code> or <code>{-1, -1, -1}</code> for C++, C, Go, Nim, <code>[]</code> for Kotlin or &quot;-1 -1 -1&quot;.</p>
<h2 id="examples">Examples:</h2>
<p>(form of the result depends on the language)</p>
<pre><code>race(720, 850, 70) =&gt; [0, 32, 18] or &quot;0 32 18&quot;
race(80, 91, 37)   =&gt; [3, 21, 49] or &quot;3 21 49&quot;</code></pre><p>** Note: </p>
<ul>
<li><p>See other examples in &quot;Your test cases&quot;.</p>
</li>
<li><p>In Fortran - as in any other language - the returned string is not permitted to contain any redundant trailing whitespace: you can use dynamically allocated character strings.</p>
</li>
</ul>
<p>** Hints for people who don&apos;t know how to convert to hours, minutes, seconds:</p>
<ul>
<li><p>Tortoises don&apos;t care about fractions of seconds</p>
</li>
<li><p>Think of calculation by hand using only integers (in your code use or simulate integer division)</p>
</li>
<li><p>or Google: &quot;convert decimal time to hours minutes seconds&quot;</p>
</li>
</ul>

### Solution