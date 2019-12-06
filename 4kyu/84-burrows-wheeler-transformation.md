### Problem:
<h2 id="motivation">Motivation</h2>
<p>When compressing sequences of symbols, it is useful to have many equal symbols follow each other, because then they can be encoded with a run length encoding. For example, RLE encoding of <code>&quot;aaaabbbbbbbbbbbcccccc&quot;</code> would give something like <code>4a 11b 6c</code>.</p>
<p>(Look <a href="http://www.codewars.com/kata/run-length-encoding/" target="_blank">here</a> for learning more about the run-length-encoding.)</p>
<p>Of course, RLE is interesting only if the string contains many identical consecutive characters. But what bout human readable text? Here comes the Burrows-Wheeler-Transformation.</p>
<h2 id="transformation">Transformation</h2>
<p>There even exists a transformation, which brings equal symbols closer together, it is called the <strong>Burrows-Wheeler-Transformation</strong>. The forward transformation works as follows: Let&apos;s say we have a sequence with length n, first write every shift of that string into a <em>n x n</em> matrix:</p>
<pre><code>Input: &quot;bananabar&quot;

b a n a n a b a r
r b a n a n a b a
a r b a n a n a b
b a r b a n a n a
a b a r b a n a n
n a b a r b a n a
a n a b a r b a n
n a n a b a r b a
a n a n a b a r b</code></pre><p>Then we sort that matrix by its rows. The output of the transformation then is the <strong>last column</strong> and the <strong>row index</strong> in which the original string is in:</p>
<pre><code>               .-.
a b a r b a n a n
a n a b a r b a n
a n a n a b a r b
a r b a n a n a b
b a n a n a b a r &lt;- 4
b a r b a n a n a
n a b a r b a n a
n a n a b a r b a
r b a n a n a b a
               &apos;-&apos;

Output: (&quot;nnbbraaaa&quot;, 4)</code></pre><p>Of course we want to restore the original input, therefore you get the following hints:</p>
<ol>
<li>The output contains the last matrix column.</li>
<li>The first column can be acquired by sorting the last column.</li>
<li><strong>For every row of the table:</strong> Symbols in the first column follow on symbols in the last column, in the same way they do in the input string.</li>
<li>You don&apos;t need to reconstruct the whole table to get the input back.</li>
</ol>
<h2 id="goal">Goal</h2>
<p>The goal of this Kata is to write both, the <code>encode</code> and <code>decode</code> functions. Together they should work as the identity function on lists. (<em>Note:</em> For the empty input, the row number is ignored.)</p>
<h2 id="further-studies">Further studies</h2>
<p>You may have noticed that symbols are not always consecutive, but just in proximity, after the transformation. If you&apos;re interested in how to deal with that, you should have a look at <a href="http://www.codewars.com/kata/move-to-front-encoding/" target="_blank">this Kata</a>.</p>

### Solution