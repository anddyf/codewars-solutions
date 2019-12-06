### Problem:
<p><font size="2"><i>This kata is inspired by <a href="https://www.codewars.com/kata/break-the-pieces" target="_blank">davazp&apos;s one</a> </i></font></p>
<br>
<hr>
# Context
<br>
So, here we go again:

<p>You are given an ASCII diagram, containing minus signs <code>&quot;-&quot;</code>, plus signs <code>&quot;+&quot;</code>, vertical bars <code>&quot;|&quot;</code> and whitespaces <code>&quot; &quot;</code>.  Your task is to write a function which will break the diagram in the minimal pieces it is made of.</p>
<p>For example, if the input of your function is the diagram on the left below, the expected answer will be the list of strings representing the three individual shapes on the right (note how the biggest shape lost a <code>&quot;+&quot;</code> sign in the extraction) :</p>
<pre><code>Input:                          Expected:
+------------+                  +------------+
|            |                  |            |    +------+    +-----+
|            |                  |            |    |      |    |     |
|            |                  |            |    |      |    |     |
+------+-----+                  +------------+    +------+    +-----+
|      |     |
|      |     |
+------+-----+</code></pre><p>If you encounter imbricated pieces, both outer and inner shapes have to be returned. For example:</p>
<pre><code>Input:                          Expected:
+------------+                  +------------+
|            |                  |            |
|    +--+    |                  |    +--+    |
|    |  |    |                  |    |  |    |
|    |  |    |                  |    |  |    |    +--+
|    +--+    |                  |    +--+    |    |  |
|            |                  |            |    |  |
+------------+                  +------------+    +--+</code></pre><br>
<hr>
# So... What&apos;s new?!
<br>
What is new in this &quot;evilized&quot; version is that you&apos;ll have to manage the extraction of shapes without inner whitespaces.

<p>For example, the input below should lead to the following list of strings:</p>
<pre><code>Input:                          Expected:
+------------+                  +------------+
|            |                  |            |    +------+    +----+    ++
|            |                  |            |    |      |    |    |    ||
|            |                  |            |    |      |    |    |    ||
+------++----+                  +------------+    +------+    +----+    ++
|      ||    |
|      ||    |
+------++----+</code></pre><br>
From there, you&apos;ll have two approaches...:

<ul>
<li>The &quot;easy&quot; (better) one...</li>
<li>... or the hard one: if you stumble frequently going through the fixed tests, might be you didn&apos;t made the right move and you&apos;re on this path. It&apos;s doable that way either, but it is way harder than the other one (1 or 2 kyu ranks higher! But if you like challenges, you can try that really evilized way... ;) )</li>
</ul>
<br>
<hr>
# TASK
<br>
  You have to find all the individual pieces contained in the original diagram. Note that you are only searching for the smallest possible ones.

<p>  You may find below some important indications about what you will have to deal with:</p>
<ul>
<li><p>The pieces should not have any spaces on their right (ie. no trailing spaces).</p>
</li>
<li><p>However, they could have leading spaces if the figure is not a rectangle, as shown below:</p>
<pre><code>    +---+
    |   |
+---+   |
|       |
+-------+</code></pre></li>
<li><p>It is not allowed to use more leading spaces than necessary. It is to say, the first character of at least one of the lines has to be different from a space.</p>
</li>
<li><p>Only explicitly closed pieces have to be considered (meaning, in the diagram above, there is one and only one piece).</p>
</li>
<li><p>The borders of each shape have to contain only the meaningful plus signs <code>&quot;+&quot;</code> (those in corners or at the intersections of several straight lines).</p>
</li>
<li><p>Keep an eye on the performances. You won&apos;t have to make your code unreadable to pass the tests, but be clever with what you choose to implement.</p>
</li>
<li><p>After all of that, you still will have to pass the random tests...</p>
</li>
</ul>
<br>
_Note:_
* In the display, to make it easier to see where whitespaces are or not, the spaces characters will be replaced with dots:

<pre><code> ```
    +---+              ....+---+                  +---+                  +---+
    |   |              ....|...|                  |   |                  |...|..      &lt;- there are spaces here, on the right
+---+   |      =&gt;      +---+...|                  |   +---+      =&gt;      |...+---+
|       |              |.......|                  |       |              |.......|
+-------+              +-------+                  +-------+              +-------+
```</code></pre><br>

<hr>
# Input
* The diagrams are given as ordinary multiline strings of various lengths.


<h1 id="output">Output</h1>
<ul>
<li>A list of multilines strings (<em>see the example tests</em>).</li>
<li>The order of the individual shapes in the list does not matter.</li>
</ul>
<br>
<hr>
# Final notes...
* If you&apos;re following the &quot;hard path&quot;, this kata might make you crazy...
* Tests design: about 80 fixed tests (each of them doubled) and the random ones with shapes up to around 80x80 characters (100 for python and ruby, 250 for Java). If your solution times out, do not hesitate to do a second try before to do any modification to your code.


### Solution