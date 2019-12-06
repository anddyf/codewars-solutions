### Problem:
<p>Determine if the poker hand is flush, meaning if the five cards are of the <strong>same suit</strong>.</p>
<p>Your function will be passed a list/array of 5 strings, each representing a poker card in the format <code>&quot;5H&quot;</code> (5 of hearts), meaning the value of the card followed by the initial of its suit (<code>H</code>earts, <code>S</code>pades, <code>D</code>iamonds or <code>C</code>lubs). No jokers included.</p>
<p>Your function should return <code>true</code> if the hand is a flush, <code>false</code> otherwise.</p>
<p>The possible card values are <code>2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K, A</code></p>
<h2 id="examples">Examples</h2>
<pre><code>[&quot;AS&quot;, &quot;3S&quot;, &quot;9S&quot;, &quot;KS&quot;, &quot;4S&quot;]  ==&gt; true

[&quot;AD&quot;, &quot;4S&quot;, &quot;7H&quot;, &quot;KS&quot;, &quot;10S&quot;] ==&gt; false</code></pre>
### Solution