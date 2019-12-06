### Problem:
<p>You are given a ASCII diagram , comprised of minus signs <code>-</code>, plus signs <code>+</code>, vertical bars <code>|</code> and whitespaces <code></code>.  Your task is to write a function which breaks the diagram in the minimal pieces it is made of.</p>
<p>For example, if the input for your function is this diagram:</p>
<pre><code>+------------+
|            |
|            |
|            |
+------+-----+
|      |     |
|      |     |
+------+-----+</code></pre><p>the returned value should be the list of:</p>
<pre><code>+------------+
|            |
|            |
|            |
+------------+</code></pre><p>(note how it lost a <code>+</code> sign in the extraction)</p>
<p>as well as</p>
<pre><code>+------+
|      |
|      |
+------+</code></pre><p>and</p>
<pre><code>+-----+
|     |
|     |
+-----+</code></pre><p>The diagram is given as an ordinary Javascript multiline string.  The pieces should not have trailing spaces at the end of the lines. However, it could have leading spaces if the figure is not a rectangle. For instance:</p>
<pre><code>    +---+
    |   |
+---+   |
|       |
+-------+</code></pre><p>However, it is not allowed to use more leading spaces than necessary. It is to say, the first character of some of the lines should be different than a space.</p>
<p>Finally, note that only the explicitly closed pieces are considered.  Spaces &quot;outside&quot; of the shape are part of the background . Therefore the diagram above has a single piece.</p>
<p>Have fun!</p>
<p>Note : in C++ you are provided with two utility functions :</p>
<pre><code>std::string join(const std::string &amp;sep, const std::vector&lt;std::string&gt; &amp;to_join); // Returns the concatenation of all the strings in the vector, separated with sep 

std::vector&lt;std::string&gt; split_lines(const std::string &amp;to_split); // Splits a string, using separator &apos;\n&apos;</code></pre><hr>

<p><font size="2"><i>Harder version of the kata available here: <a href="https://www.codewars.com/kata/break-the-pieces-evilized-edition" target="_blank">Break the Pieces (evilized edition)</a></i></font></p>

### Solution