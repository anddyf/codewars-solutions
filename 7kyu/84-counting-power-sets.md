### Problem:
<p>In this kata, you must create a function <code>powers</code>/<code>Powers</code> that takes an array, and returns the number of subsets possible to create from that list. In other words, counts the power sets.</p>
<p>For instance</p>
<pre><code class="language-coffeescript">powers([<span class="hljs-number">1</span>,<span class="hljs-number">2</span>,<span class="hljs-number">3</span>]) =&gt; <span class="hljs-number">8</span></code></pre>
<p>...due to...</p>
<pre><code class="language-coffeescript">powers([<span class="hljs-number">1</span>,<span class="hljs-number">2</span>,<span class="hljs-number">3</span>]) =&gt;
[[],
 [<span class="hljs-number">1</span>],
 [<span class="hljs-number">2</span>],
 [<span class="hljs-number">3</span>],
 [<span class="hljs-number">1</span>,<span class="hljs-number">2</span>],
 [<span class="hljs-number">2</span>,<span class="hljs-number">3</span>],
 [<span class="hljs-number">1</span>,<span class="hljs-number">3</span>],
 [<span class="hljs-number">1</span>,<span class="hljs-number">2</span>,<span class="hljs-number">3</span>]]</code></pre>
<p>Your function should be able to count sets up to the size of 500, so watch out; pretty big numbers occur there!</p>
<p>For comparison, my Haskell solution can compute the number of sets for an array of length 90 000 in less than a second, so be quick!</p>
<p>You should treat each array passed as a set of unique values for this kata.</p>
<hr>
<p>###Examples:</p>
<pre><code class="language-coffeescript">powers([])        =&gt; <span class="hljs-number">1</span>
powers([<span class="hljs-number">1</span>])       =&gt; <span class="hljs-number">2</span>
powers([<span class="hljs-number">1</span>,<span class="hljs-number">2</span>])     =&gt; <span class="hljs-number">4</span>
powers([<span class="hljs-number">1</span>,<span class="hljs-number">2</span>,<span class="hljs-number">3</span>,<span class="hljs-number">4</span>]) =&gt; <span class="hljs-number">16</span></code></pre>
<pre style="display: none;"><code class="language-java">Powers.powers(<span class="hljs-keyword">new</span> <span class="hljs-keyword">int</span>[]{});        <span class="hljs-comment">// 1</span>
Powers.powers(<span class="hljs-keyword">new</span> <span class="hljs-keyword">int</span>[]{<span class="hljs-number">1</span>});       <span class="hljs-comment">// 2</span>
Powers.powers(<span class="hljs-keyword">new</span> <span class="hljs-keyword">int</span>[]{<span class="hljs-number">1</span>,<span class="hljs-number">2</span>});     <span class="hljs-comment">// 4</span>
Powers.powers(<span class="hljs-keyword">new</span> <span class="hljs-keyword">int</span>[]{<span class="hljs-number">1</span>,<span class="hljs-number">2</span>,<span class="hljs-number">3</span>,<span class="hljs-number">4</span>}); <span class="hljs-comment">// 16</span></code></pre>
<pre style="display: none;"><code class="language-csharp">Kata.Powers(<span class="hljs-keyword">new</span> <span class="hljs-keyword">int</span>[] {})        =&gt; <span class="hljs-number">1</span>
Kata.Powers(<span class="hljs-keyword">new</span> <span class="hljs-keyword">int</span>[] {<span class="hljs-number">1</span>})       =&gt; <span class="hljs-number">2</span>
Kata.Powers(<span class="hljs-keyword">new</span> <span class="hljs-keyword">int</span>[] {<span class="hljs-number">1</span>,<span class="hljs-number">2</span>})     =&gt; <span class="hljs-number">4</span>
Kata.Powers(<span class="hljs-keyword">new</span> <span class="hljs-keyword">int</span>[] {<span class="hljs-number">1</span>,<span class="hljs-number">2</span>,<span class="hljs-number">3</span>,<span class="hljs-number">4</span>}) =&gt; <span class="hljs-number">16</span></code></pre>
<hr>
<p>Inspired by <a href="http://www.codewars.com/kata/by-the-power-set-of-castle-grayskull" target="_blank">this kata</a> by <a href="http://www.codewars.com/users/xcthulhu" target="_blank">xcuthulu</a> - refer to it if you&apos;re stuck!</p>

### Solution