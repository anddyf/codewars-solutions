### Problem:
<h1 id="background">Background</h1>
<p>The famous Collatz Sequence is generated with the following rules:</p>
<ul>
<li>Start with a positive integer <code>a[0] = n</code>.</li>
<li>If <code>a[i]</code> is even, <code>a[i+1] = a[i] / 2</code>.</li>
<li>Otherwise, <code>a[i+1] = a[i] * 3 + 1</code>.</li>
</ul>
<p>However, for the purpose of this Kata, I give a <strong>slightly modified definition</strong>:</p>
<ul>
<li>If <code>a[i]</code> is even, <code>a[i+1] = a[i] / 2</code>. This step is a step-down, or <code>D</code>.</li>
<li>Otherwise, <code>a[i+1] = (a[i] * 3 + 1) / 2</code>. This step is a step-up, or <code>U</code>.</li>
</ul>
<p>Also, for any starting number, the sequence is generated indefinitely, not ending at 1.</p>
<h1 id="problem-description">Problem Description</h1>
<p>For any given starting number, we can record the types of steps(<code>D</code> or <code>U</code>) from it.
For example, if we start with the number 11, the Collatz steps look like this:</p>
<pre style="display: none;"><code>a[0] = 11
a[1] = (11 * 3 + 1) / 2 = 17 -&gt; U
a[2] = (17 * 3 + 1) / 2 = 26 -&gt; U
a[3] = 26 / 2 = 13           -&gt; D
a[4] = (13 * 3 + 1) / 2 = 20 -&gt; U
a[5] = 20 / 2 = 10           -&gt; D
a[6] = 10 / 2 = 5            -&gt; D
a[7] = (5 * 3 + 1) / 2 = 8   -&gt; U
a[8] = 8 / 2 = 4             -&gt; D
a[9] = 4 / 2 = 2             -&gt; D
a[10] = 2 / 2 = 1            -&gt; D
a[11] = (1 * 3 + 1) / 2 = 2  -&gt; U
a[12] = 2 / 2 = 1            -&gt; D
...</code></pre><pre style="display: none;"><code>11 -&gt; 17 -&gt; 26 -&gt; 13 -&gt; 20 -&gt; 10 -&gt; 5 -&gt; 8 -&gt; 4 -&gt; 2 -&gt; 1 -&gt; 2 -&gt; 1 -&gt; ...
   U     U     D     U     D     D    U    D    D    D    U    D</code></pre><p>Based on the steps shown above, the first four Collatz steps of 11 is <code>UUDU</code>.
Also, 107 is the smallest number over 100 whose Collatz steps start with <code>UUDU</code>, and
1003 is the smallest number over 1000 with the property.</p>
<p>A special example is the number 1, which can generate any number of <code>UD</code>.</p>
<p>Find the smallest integer exceeding or equal to <code>n</code> whose Collatz steps start with the given string <code>steps</code>.</p>
<h1 id="constraints">Constraints</h1>
<p><code>1 &lt;= n &lt;= 10 ** 9</code></p>
<p><code>n</code> is always a valid integer.</p>
<p><code>1 &lt;= length(steps) &lt;= 25</code></p>
<p>The string <code>steps</code> will entirely consist of <code>U</code>s and <code>D</code>s.</p>
<h1 id="examples">Examples</h1>
<pre><code class="language-python">collatz_steps(<span class="hljs-number">1</span>, <span class="hljs-string">&apos;UUDU&apos;</span>) == <span class="hljs-number">11</span>
collatz_steps(<span class="hljs-number">100</span>, <span class="hljs-string">&apos;UUDU&apos;</span>) == <span class="hljs-number">107</span>
collatz_steps(<span class="hljs-number">1000</span>, <span class="hljs-string">&apos;UUDU&apos;</span>) == <span class="hljs-number">1003</span>

collatz_steps(<span class="hljs-number">1</span>, <span class="hljs-string">&apos;UD&apos;</span>) == <span class="hljs-number">1</span>
collatz_steps(<span class="hljs-number">1</span>, <span class="hljs-string">&apos;UDUD&apos;</span>) == <span class="hljs-number">1</span>
collatz_steps(<span class="hljs-number">1</span>, <span class="hljs-string">&apos;UDUDUD&apos;</span>) == <span class="hljs-number">1</span></code></pre>
<pre style="display: none;"><code class="language-javascript">collatzSteps(<span class="hljs-number">1</span>, <span class="hljs-string">&apos;UUDU&apos;</span>) == <span class="hljs-number">11</span>
collatzSteps(<span class="hljs-number">100</span>, <span class="hljs-string">&apos;UUDU&apos;</span>) == <span class="hljs-number">107</span>
collatzSteps(<span class="hljs-number">1000</span>, <span class="hljs-string">&apos;UUDU&apos;</span>) == <span class="hljs-number">1003</span>

collatzSteps(<span class="hljs-number">1</span>, <span class="hljs-string">&apos;UD&apos;</span>) == <span class="hljs-number">1</span>
collatzSteps(<span class="hljs-number">1</span>, <span class="hljs-string">&apos;UDUD&apos;</span>) == <span class="hljs-number">1</span>
collatzSteps(<span class="hljs-number">1</span>, <span class="hljs-string">&apos;UDUDUD&apos;</span>) == <span class="hljs-number">1</span></code></pre>
<h1 id="hint">Hint</h1>
<p>If you are completely lost, start by answering the following question:</p>
<ul>
<li>After applying the given steps (e.g. <code>UUDU</code>) to an initial number <code>x</code>,
what fraction do you get?</li>
</ul>
<p>After that, you might want to study about <a href="https://en.wikipedia.org/wiki/Modular_multiplicative_inverse" target="_blank">modular inverse</a>.</p>
<h1 id="acknowledgement">Acknowledgement</h1>
<p>This problem was inspired by <a href="https://projecteuler.net/problem=277" target="_blank">Project Euler #277: A Modified Collatz sequence</a>.</p>
<p>If you enjoyed this Kata, please also have a look at <a href="https://www.codewars.com/users/Bubbler/authored" target="_blank">my other Katas</a>!</p>

### Solution