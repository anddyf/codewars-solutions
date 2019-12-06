### Problem:
<p>A country has coins with denominations</p>
<pre><code class="language-python">coins_list = d1 &lt; d2 &lt; &#xB7; &#xB7; &#xB7; &lt; dn.</code></pre>
<p>You want to make change for n cents, using the smallest number of coins.</p>
<pre><code class="language-python"><span class="hljs-comment"># Example 1: U.S. coins</span>
d1 = <span class="hljs-number">1</span> d2 = <span class="hljs-number">5</span> d3 = <span class="hljs-number">10</span> d4 = <span class="hljs-number">25</span>

<span class="hljs-comment">## Optimal change for 37 cents &#x2013; 1 quarter, 1 dime, 2 pennies.</span>

<span class="hljs-comment"># Example 2: Alien Planet Z coins</span>
Z_coin_a = <span class="hljs-number">1</span> Z_coin_b = <span class="hljs-number">3</span> Z_coin_c = <span class="hljs-number">4</span>

<span class="hljs-comment">## Optimal change for 6 cents - 2 Z_coin_b&apos;s</span></code></pre>
<p>Write a function that will take a list of coin denominations and a desired amount and provide the least amount of coins needed.</p>

### Solution