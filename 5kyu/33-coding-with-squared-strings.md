### Problem:
<p>A squared string has n lines, each substring being n characters long: For example:</p>
<p><code>s = &quot;abcd\nefgh\nijkl\nmnop&quot;</code> is a squared string of size <code>4</code>.</p>
<p>We will use squared strings to code and decode texts. To make things easier
we suppose that our original text doesn&apos;t include the character &apos;\n&apos;.</p>
<h3 id="coding">Coding</h3>
<p>Input: </p>
<ul>
<li>a text <code>t</code> of length <code>l</code>. </li>
<li>Consider the smallest integer <code>n</code> such that <code>n * n</code> be greater or equal to <code>l</code>.</li>
<li>Complete <code>t</code> with the char of ascii code <code>11</code> (we suppose that this char is not in our original text) until the length of <code>t</code> is <code>n * n</code>. </li>
<li>From now on we can transform the new <code>t</code> in a squared string <code>s</code> of size <code>n</code> by inserting <code>&apos;\n&apos;</code> where needed.</li>
<li>Apply a clockwise rotation of 90 degrees to <code>s</code>: that&apos;s it for the coding part.</li>
</ul>
<h3 id="decoding">Decoding</h3>
<p>Input: </p>
<ul>
<li>a squared string <code>s</code> resulting from the coding</li>
<li>Apply a counter-clockwise rotation of 90 degrees to <code>s</code></li>
<li>Do some cleaning to have the original text <code>t</code></li>
</ul>
<p>You can see clockwise rotation of 90 degrees: 
<a href="http://www.codewars.com/kata/56dbeec613c2f63be4000be6" target="_blank">http://www.codewars.com/kata/56dbeec613c2f63be4000be6</a>
You can see counter-clockwise rotation of 90 degrees: <a href="http://www.codewars.com/kata/56dbf59b0a10feb08c000227" target="_blank">http://www.codewars.com/kata/56dbf59b0a10feb08c000227</a></p>
<h3 id="example">Example:</h3>
<p>t = &quot;I.was.going.fishing.that.morning.at.ten.o&apos;clock&quot;</p>
<p>code(t) -&gt; <code>&quot;c.nhsoI\nltiahi.\noentinw\ncng.nga\nk..mg.s\n\voao.f.\n\v&apos;trtig&quot;</code></p>
<p>decode(code(t)) == <code>&quot;I.was.going.fishing.that.morning.at.ten.o&apos;clock&quot;</code></p>
<p>(Dots indicate spaces since they are quite invisible).</p>
<h1 id="notes">Notes:</h1>
<ul>
<li>Swift : character <code>11</code> is replaced by <code>&quot;\u{F7}&quot;</code> (ie <code>&quot;&#xF7;&quot;</code> - <code>alt 246</code> -)</li>
<li>Ocaml : character <code>11</code> is replaced by &apos;&amp;&apos;</li>
<li>Fortran: Your returned string for both functions are <strong>not</strong> permitted to contain <em>redundant</em> leading/trailing whitespace.  In return, you <em>may</em> safely assume that all input strings passed into your function(s) will <em>not</em> contain <strong>redundant</strong> leading/trailing whitespace, i.e. you do not and should <strong>not</strong> trim the input string before operating on it</li>
<li>Don&apos;t use this coding to keep your secrets:-)</li>
</ul>

### Solution