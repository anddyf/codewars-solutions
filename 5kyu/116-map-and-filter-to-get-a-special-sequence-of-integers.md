### Problem:
<p>We have an integer<code>n</code>, with a certain number of digits<code>k</code>, d<sub>1</sub>d<sub>2</sub>.....d<sub>k</sub>.</p>
<p>We have a function, <code>f()</code> that produces a certain number <code>n&apos;</code>from <code>n</code>, such that,<code>f(n) ---&gt; n&apos;</code></p>
<p><font size="4" face="Arial" color="orange"><b><i>f(n) = &#xB1;d<sub>1</sub><sup>|d<sub>1</sub> - d<sub>2</sub>|</sup> &#xB1;  d<sub>2</sub><sup>|d<sub>2</sub> - d<sub>3</sub>|</sup> &#xB1; ....  &#xB1; d<sub>k-1</sub><sup>|d<sub>k-1</sub> - d<sub>k</sub>|</sup>  + d<sub>k</sub></i></b></font></p>

<p>If the difference is such that, <strong>d<sub>k-1</sub> - d<sub>k</sub> &gt; 0</strong>, the operator will be <code>-</code> and on the other hand if the difference is such that: <strong>d<sub>k-1</sub> - d<sub>k</sub> &#x2264; 0</strong>, the operator will be <code>+</code>.</p>
<p>Let&apos;s see an example with the number <code>186599</code>.</p>
<p>f(186599) = 1<sup>|1 - 8|</sup> - 8<sup>|8 - 6|</sup> - 6<sup>|6 - 5|</sup> + 5<sup>|5 - 9|</sup> + 9<sup>|9 - 9|</sup> + 9 = 1<sup>7</sup> - 8<sup>2</sup> - 6<sup>1</sup> + 5<sup>4</sup> + 9<sup>0</sup> + 9 = 1 - 64 - 6 + 625 + 1 + 9 = 566</p>
<p>The number <code>100</code> is the first integer in having the value of the above function equals to <code>0</code>, in other way <code>f(100) = 0</code>.</p>
<p><strong>f(100) = -1<sup>|1-0|</sup> + 0<sup>|0-0|</sup> + 0 = -1<sup>1</sup> + 0<sup>0</sup> + 0 = -1 + 1 + 0 = 0</strong></p>
<p>(Yes, we consider here that 0<sup>0</sup> is equals to 1, following the output that give most programming languages)</p>
<p>The first terms of this special sequence of numbers are:</p>
<pre><code>100, 101, 110, 121, 132, 143, 154, 165,...</code></pre><p>The function <code>prev_next()</code> (in javascript: <code>prevNext()</code>)will receive a certain integer <code>n</code> and will output the highest possible number of this sequence under <code>n</code> and the smallest possible number of this sequence higher than <code>n</code>.</p>
<p>For example </p>
<pre><code class="language-python">prev_next(<span class="hljs-number">150</span>) == [<span class="hljs-number">143</span>, <span class="hljs-number">154</span>]</code></pre>
<p>If a number is part of this sequence will output three values, istself and the next previous and next one:</p>
<pre><code class="language-python">prev_next(<span class="hljs-number">154</span>) == [<span class="hljs-number">143</span>, <span class="hljs-number">154</span>, <span class="hljs-number">165</span>]</code></pre>
<p>If there are no numbers below the given number, the function will output the next number of the sequence.</p>
<pre><code class="language-python">prev_next(<span class="hljs-number">99</span>) == [<span class="hljs-number">100</span>]
prev_next(<span class="hljs-number">100</span>) == [<span class="hljs-number">100</span>, <span class="hljs-number">101</span>]</code></pre>
<p>Features of the random tests:</p>
<pre><code>Numbers of tests = 100
n, such that, 100 &#x2264; n &lt; 1000000</code></pre><p>Enjoy it!</p>

### Solution