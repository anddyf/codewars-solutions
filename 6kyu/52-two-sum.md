### Problem:
<p>Write a function that takes an array of numbers (integers for the tests) and a target number. It should find two different items in the array that, when added together, give the target value. The indices of these items should then be returned in a tuple like so: <code>(index1, index2)</code>.</p>
<p>For the purposes of this kata, some tests may have multiple answers; any valid solutions will be accepted.</p>
<p>The input will always be valid (numbers will be an array of length 2 or greater, and all of the items will be numbers; target will always be the sum of two different items from that array).</p>
<p>Based on: <a href="http://oj.leetcode.com/problems/two-sum/" target="_blank">http://oj.leetcode.com/problems/two-sum/</a></p>
<pre><code class="language-haskell"><span class="hljs-title">twoSum</span> [<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>] <span class="hljs-number">4</span> === (<span class="hljs-number">0</span>, <span class="hljs-number">2</span>)</code></pre>
<pre style="display: none;"><code class="language-elixir">two_sum([<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>], <span class="hljs-number">4</span>) == {0, <span class="hljs-number">2</span>}</code></pre>

### Solution