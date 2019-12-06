### Problem:
<h1 id="word-search">Word Search</h1>
<p>Create a program to solve a word search puzzle.</p>
<p>In word search puzzles you get a square of letters and have to find specific
words in them.</p>
<p>For example:</p>
<pre><code>jefblpepre
camdcimgtc
oivokprjsm
pbwasqroua
rixilelhrs
wolcqlirpc
screeaumgr
alxhpburyi
jalaycalmp
clojurermt</code></pre><p>There are several programming languages hidden in the above square.</p>
<p>Words can be hidden in all kinds of directions: left-to-right, right-to-left, vertical and diagonal.</p>
<p>Create a program that given a puzzle and a list of words returns the location of the first and last letter of each word.</p>
<p>You will be provided with a Point(x, y) class which will be used to display the points of the first and last words of the found words.</p>
<p>You will be required to create a method <code>search</code> of class WordSearch that takes in a parameter <code>word</code> and searches through the provided grid for this word. It must return the Points of thw first and last letter of the word if found else return None.</p>
<p>An e.g.</p>
<pre><code class="language-python">puzzle = (<span class="hljs-string">&apos;jefblpepre\n&apos;</span>
          <span class="hljs-string">&apos;camdcimgtc\n&apos;</span>
          <span class="hljs-string">&apos;oivokprjsm\n&apos;</span>
          <span class="hljs-string">&apos;pbwasqroua\n&apos;</span>
          <span class="hljs-string">&apos;rixilelhrs\n&apos;</span>
          <span class="hljs-string">&apos;wolcqlirpc\n&apos;</span>
          <span class="hljs-string">&apos;screeaumgr\n&apos;</span>
          <span class="hljs-string">&apos;alxhpburyi\n&apos;</span>
          <span class="hljs-string">&apos;jalaycalmp\n&apos;</span>
          <span class="hljs-string">&apos;clojurermt&apos;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>example = WordSearch(puzzle)
<span class="hljs-meta">&gt;&gt;&gt; </span>example.search(<span class="hljs-string">&apos;clojure&apos;</span>)
(Point(<span class="hljs-number">0</span>, <span class="hljs-number">9</span>), Point(<span class="hljs-number">6</span>, <span class="hljs-number">9</span>))</code></pre>
<p>From the above, from the word <code>clojure</code>, <strong>c</strong> can be found at point 0,9
and the last letter <strong>e</strong> can be found at poin 6, 9</p>
<p>Note: indexes start counting from 0.</p>

### Solution