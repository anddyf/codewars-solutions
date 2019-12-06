### Problem:
<p>Let&apos;s take an integer number, <code>start</code> and let&apos;s do the iterative process described below:</p>
<ul>
<li><p>we take its digits and raise each of them to a certain power, <code>n</code>, and add all those values up. (result = <code>r1</code>)</p>
</li>
<li><p>we repeat the same process with the value <code>r1</code> and so on, <code>k</code> times.</p>
</li>
</ul>
<p>Let&apos;s do it with <code>start = 420, n = 3, k = 5</code></p>
<pre><code>420 ---&gt; 72 (= 4&#xB3; + 2&#xB3; + 0&#xB3;) ---&gt; 351 (= 7&#xB3; + 2&#xB3;) ---&gt; 153 ---&gt; 153 ----&gt; 153</code></pre><p>We can observe that it took <code>3</code> steps to reach a cyclical pattern <code>[153]</code>(<code>h = 3</code>). The length of this cyclical pattern is <code>1</code>, <code>patt_len</code>. The last term of our k operations is 153, <code>last_term</code></p>
<p>Now, <code>start = 420, n = 4, k = 30</code></p>
<pre><code>420 ---&gt; 272 ---&gt; 2433 ---&gt; 434 ---&gt; 593 ---&gt; 7267 ---&gt;
6114 ---&gt; 1554 ---&gt; 1507 ---&gt; 3027 ---&gt; 2498 ---&gt; 10929 ---&gt;
13139 ---&gt; 6725 ---&gt; 4338 ---&gt; 4514 ---&gt; 1138 ---&gt; 4179 ---&gt; 9219 ---&gt; 
13139 ---&gt; 6725 ---&gt; 4338 ---&gt; 4514 ---&gt; 1138 ---&gt; 4179 ---&gt; 9219 ---&gt; 
13139 ---&gt; 6725 ---&gt; 4338 ---&gt; 4514 ---&gt; 1138 ---&gt; 4179 ---&gt; 9219......</code></pre><p>In this example we can observe that the cyclical pattern (<code>cyc_patt_arr</code>) is <code>[13139, 6725, 4338, 4514, 1138, 4179, 9219]</code> with a length of <code>7</code>, (<code>patt_len = 7</code>), and it took <code>12</code> steps (<code>h = 12</code>) to reach the cyclical pattern. The last term after doing <code>30</code> operations is <code>1138</code></p>
<p>Make the function <code>sum_pow_dig_seq()</code>, that receives the arguments in the order shown below with the corresponding output:</p>
<pre><code class="language-python">sum_pow_dig_seq(start, n, k) ---&gt; [h, cyc_patt_arr, patt_len, last_term]</code></pre>
<pre style="display: none;"><code class="language-haskell"><span class="hljs-title">sumPowDigSeq</span> start  n  k <span class="hljs-comment">---&gt; (h, cyc_patt_arr, patt_len, last_term)</span></code></pre>
<p>For our given examples, </p>
<pre><code class="language-python">sum_pow_dig_seq(<span class="hljs-number">420</span>, <span class="hljs-number">3</span>, <span class="hljs-number">5</span>) == [<span class="hljs-number">3</span>, [<span class="hljs-number">153</span>], <span class="hljs-number">1</span>, <span class="hljs-number">153</span>]

sum_pow_dig_seq(<span class="hljs-number">420</span>, <span class="hljs-number">4</span>, <span class="hljs-number">30</span>) == [<span class="hljs-number">12</span>, [<span class="hljs-number">13139</span>, <span class="hljs-number">6725</span>, <span class="hljs-number">4338</span>, <span class="hljs-number">4514</span>, <span class="hljs-number">1138</span>, <span class="hljs-number">4179</span>, <span class="hljs-number">9219</span>], <span class="hljs-number">7</span>, <span class="hljs-number">1138</span>]</code></pre>
<pre style="display: none;"><code class="language-haskell"><span class="hljs-title">sumPowDigSeq</span> <span class="hljs-number">420</span>  <span class="hljs-number">3</span>  <span class="hljs-number">5</span>  == (<span class="hljs-number">3</span>, [<span class="hljs-number">153</span>], <span class="hljs-number">1</span>, <span class="hljs-number">153</span>)

<span class="hljs-title">sumPowDigSeq</span> <span class="hljs-number">420</span>  <span class="hljs-number">4</span>  <span class="hljs-number">30</span> == (<span class="hljs-number">12</span>, [<span class="hljs-number">13139</span>, <span class="hljs-number">6725</span>, <span class="hljs-number">4338</span>, <span class="hljs-number">4514</span>, <span class="hljs-number">1138</span>, <span class="hljs-number">4179</span>, <span class="hljs-number">9219</span>], <span class="hljs-number">7</span>, <span class="hljs-number">1138</span>)</code></pre>
<p>Constraints for tests:</p>
<pre><code>500 &#x2264; start &#x2264; 8000
2 &#x2264; n &#x2264; 9
100 * n &#x2264; k &#x2264; 200 * n</code></pre><p>Do your best!</p>

### Solution