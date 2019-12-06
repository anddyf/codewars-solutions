### Problem:
<h1 id="disclaimer">Disclaimer</h1>
<p>This Kata is an insane step-up from <a href="https://www.codewars.com/kata/59951f21d65a27e95d00004f" target="_blank">my previous Kata</a>,
so I recommend to solve it first before trying this one.</p>
<h1 id="problem-description">Problem Description</h1>
<p>Let&apos;s imagine a function <code>F(n)</code>, which is defined over the integers
in the range of <code>1 &lt;= n &lt;= max_n</code>, and <code>0 &lt;= F(n) &lt;= max_fn</code> for every <code>n</code>.</p>
<p>There are <code>(1 + max_fn) ** max_n</code> possible definitions of <code>F</code> in total.</p>
<p>Out of those definitions, how many <code>F</code>s satisfy the following equations?
Since your answer will be very large, please give your answer <strong>modulo 12345787</strong>.</p>
<ul>
<li><code>F(n) + F(n + 1) &lt;= max_fn</code> for <code>1 &lt;= n &lt; max_n</code></li>
<li><code>F(max_n) + F(1) &lt;= max_fn</code></li>
</ul>
<h1 id="constraints">Constraints</h1>
<p><code>1 &lt;= max_n &lt;= 10 ** 9</code></p>
<p><code>1 &lt;= max_fn &lt;= 10</code></p>
<p>The inputs will be always valid integers.</p>
<h1 id="examples">Examples</h1>
<pre><code class="language-python"><span class="hljs-comment"># F(1) + F(1) &lt;= 1, F(1) = 0</span>
insane_cls(<span class="hljs-number">1</span>, <span class="hljs-number">1</span>) == <span class="hljs-number">1</span>

<span class="hljs-comment"># F = (0, 0), (0, 1), (1, 0)</span>
insane_cls(<span class="hljs-number">2</span>, <span class="hljs-number">1</span>) == <span class="hljs-number">3</span>

<span class="hljs-comment"># F = (0, 0, 0), (0, 0, 1), (0, 1, 0), (1, 0, 0)</span>
insane_cls(<span class="hljs-number">3</span>, <span class="hljs-number">1</span>) == <span class="hljs-number">4</span>

<span class="hljs-comment"># F = (0, 0, 0, 0), (0, 0, 0, 1), (0, 0, 1, 0), (0, 1, 0, 0),</span>
<span class="hljs-comment"># (0, 1, 0, 1), (1, 0, 0, 0), (1, 0, 1, 0)</span>
insane_cls(<span class="hljs-number">4</span>, <span class="hljs-number">1</span>) == <span class="hljs-number">7</span>

<span class="hljs-comment"># F = (0), (1)</span>
insane_cls(<span class="hljs-number">1</span>, <span class="hljs-number">2</span>) == <span class="hljs-number">2</span>
<span class="hljs-comment"># F = (0, 0), (0, 1), (0, 2), (1, 0), (1, 1), (2, 0)</span>
insane_cls(<span class="hljs-number">2</span>, <span class="hljs-number">2</span>) == <span class="hljs-number">6</span>
<span class="hljs-comment"># F = (0, 0, 0), (0, 0, 1), (0, 0, 2), (0, 1, 0), (0, 1, 1),</span>
<span class="hljs-comment"># (0, 2, 0), (1, 0, 0), (1, 0, 1), (1, 1, 0), (1, 1, 1), (2, 0, 0)</span>
insane_cls(<span class="hljs-number">3</span>, <span class="hljs-number">2</span>) == <span class="hljs-number">11</span>
insane_cls(<span class="hljs-number">4</span>, <span class="hljs-number">2</span>) == <span class="hljs-number">26</span></code></pre>
<h1 id="acknowledgement">Acknowledgement</h1>
<p>This problem was designed as a hybrid of <a href="https://projecteuler.net/problem=209" target="_blank">Project Euler #209: Circular Logic</a> and <a href="https://projecteuler.net/problem=164" target="_blank">Project Euler #164: Numbers for which no three consecutive digits have a sum greater than a given value</a>.</p>
<p>If you enjoyed this Kata, please also have a look at <a href="https://www.codewars.com/users/Bubbler/authored" target="_blank">my other Katas</a>!</p>

### Solution