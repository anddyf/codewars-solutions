### Problem:
<p>This the second part part of the kata:</p>
<p><a href="https://www.codewars.com/kata/the-sum-and-the-rest-of-certain-pairs-of-numbers-have-to-be-perfect-squares" target="_blank">https://www.codewars.com/kata/the-sum-and-the-rest-of-certain-pairs-of-numbers-have-to-be-perfect-squares</a></p>
<p>In this part we will have to create a faster algorithm because the tests will be more challenging.</p>
<p>The function <code>n_closestPairs_tonum()</code>, (Javascript: <code>nClosestPairsToNum()</code>), will accept two arguments, <code>upper_limit</code> and <code>k</code>.</p>
<p>The function should return the <code>k</code> largest pair of numbers [m, n] and the closest to <code>upper_limit</code>. Expressing it in code:</p>
<pre><code class="language-python">n_closestPairs_tonum(upper_limit, k) == [[m1, n1], [m2, n2], ...., [mk, nk]]</code></pre>
<pre style="display: none;"><code class="language-js">nClosestPairsToNum(upperLimit, k) ---&gt; [[m1, n1], [m2, n2], ...., [mk, nk]]</code></pre>
<p>Such that:</p>
<pre><code>upper_limit &gt;= m1 &gt;= m2 &gt;= ....&gt;= mk &gt; 0</code></pre><p>Examples:</p>
<pre><code class="language-python">upper_limit = <span class="hljs-number">1000</span>; k = <span class="hljs-number">4</span>
n_closestPairs_tonum(upper_limit, k) == [[<span class="hljs-number">997</span>, <span class="hljs-number">372</span>], [<span class="hljs-number">986</span>, <span class="hljs-number">950</span>], [<span class="hljs-number">986</span>, <span class="hljs-number">310</span>], [<span class="hljs-number">985</span>, <span class="hljs-number">864</span>]]

upper_limit = <span class="hljs-number">10000</span>; k = <span class="hljs-number">8</span>
n_closestPairs_tonum(upper_limit, k) == [[<span class="hljs-number">9997</span>, <span class="hljs-number">8772</span>], [<span class="hljs-number">9997</span>, <span class="hljs-number">2772</span>], [<span class="hljs-number">9992</span>, <span class="hljs-number">6392</span>], [<span class="hljs-number">9986</span>, <span class="hljs-number">5890</span>], [<span class="hljs-number">9985</span>, <span class="hljs-number">7176</span>], [<span class="hljs-number">9985</span>, <span class="hljs-number">4656</span>], [<span class="hljs-number">9981</span>, <span class="hljs-number">9900</span>], [<span class="hljs-number">9973</span>, <span class="hljs-number">9348</span>]]</code></pre>
<p>Features of the tests:</p>
<pre><code>1000 &#x2264; upper_limit &#x2264; 200000
2 &#x2264; k &#x2264; 20</code></pre><p>Enjoy it!</p>

### Solution