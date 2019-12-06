### Problem:
<p>For a given list <code>[x1, x2, x3, ..., xn]</code> compute the last (decimal) digit of 
<code>x1 ^ (x2 ^ (x3 ^ (... ^ xn)))</code>. </p>
<p>E. g.,</p>
<pre style="display: none;"><code class="language-c">last_digit({<span class="hljs-number">3</span>, <span class="hljs-number">4</span>, <span class="hljs-number">2</span>}, <span class="hljs-number">3</span>) == <span class="hljs-number">1</span></code></pre>
<pre style="display: none;"><code class="language-java"><span class="hljs-keyword">int</span>[] array = <span class="hljs-keyword">new</span> <span class="hljs-keyword">int</span>[] {<span class="hljs-number">3</span>,<span class="hljs-number">4</span>,<span class="hljs-number">2</span>};
lastDigit(array) == <span class="hljs-number">1</span></code></pre>
<pre style="display: none;"><code class="language-cpp">last_digit({<span class="hljs-number">3</span>, <span class="hljs-number">4</span>, <span class="hljs-number">2</span>}) == <span class="hljs-number">1</span></code></pre>
<pre style="display: none;"><code class="language-csharp"><span class="hljs-keyword">int</span>[] array = <span class="hljs-keyword">new</span> <span class="hljs-keyword">int</span>[] {<span class="hljs-number">3</span>,<span class="hljs-number">4</span>,<span class="hljs-number">2</span>};
LastDigit(array) == <span class="hljs-number">1</span></code></pre>
<pre style="display: none;"><code class="language-golang">LastDigit([]<span class="hljs-keyword">int</span>{<span class="hljs-number">3</span>, <span class="hljs-number">4</span>, <span class="hljs-number">2</span>}) == <span class="hljs-number">1</span></code></pre>
<pre><code class="language-haskell"><span class="hljs-title">lastDigit</span> [<span class="hljs-number">3</span>, <span class="hljs-number">4</span>, <span class="hljs-number">2</span>] == <span class="hljs-number">1</span></code></pre>
<pre style="display: none;"><code class="language-javascript">lastDigit([<span class="hljs-number">3</span>, <span class="hljs-number">4</span>, <span class="hljs-number">2</span>]) === <span class="hljs-number">1</span></code></pre>
<pre style="display: none;"><code class="language-python">last_digit([<span class="hljs-number">3</span>, <span class="hljs-number">4</span>, <span class="hljs-number">2</span>]) == <span class="hljs-number">1</span></code></pre>
<p>because <code>3 ^ (4 ^ 2) = 3 ^ 16 = 43046721</code>.</p>
<p><em>Beware:</em> powers grow incredibly fast. For example, <code>9 ^ (9 ^ 9)</code> has more than 369 millions of digits. <code>lastDigit</code> has to deal with such numbers efficiently.</p>
<p><em>Corner cases:</em> we assume that <code>0 ^ 0 = 1</code> and that <code>lastDigit</code> of an empty list equals to 1.</p>
<p>This kata generalizes <a href="http://www.codewars.com/kata/last-digit-of-a-large-number/haskell" target="_blank">Last digit of a large number</a>; you may find useful to solve it beforehand.</p>

### Solution