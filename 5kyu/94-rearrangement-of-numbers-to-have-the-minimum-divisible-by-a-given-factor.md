### Problem:
<p>A function receives a certain numbers of integers <code>n1, n2, n3 ..., np</code>(all positive and different from 0) and a factor <code>k, k &gt; 0</code></p>
<p>The function rearranges the numbers <code>n1, n2, ..., np</code> in such order that generates the minimum number concatenating the digits and this number should be divisible by <code>k</code>.</p>
<p>The order that the function receives their arguments is:</p>
<pre><code class="language-python">rearranger(k, n1, n2, n3,....,np)</code></pre>
<h2 id="examples">Examples</h2>
<pre><code class="language-python">rearranger(<span class="hljs-number">4</span>, <span class="hljs-number">32</span>, <span class="hljs-number">3</span>, <span class="hljs-number">34</span>, <span class="hljs-number">7</span>, <span class="hljs-number">12</span>)  == <span class="hljs-string">&quot;Rearrangement: 12, 3, 34, 7, 32 generates: 12334732 divisible by 4&quot;</span>

rearranger(<span class="hljs-number">10</span>, <span class="hljs-number">32</span>, <span class="hljs-number">3</span>, <span class="hljs-number">34</span>, <span class="hljs-number">7</span>, <span class="hljs-number">12</span>) == <span class="hljs-string">&quot;There is no possible rearrangement&quot;</span></code></pre>
<p>If there are more than one possible arrengement for the same minimum number, your code should be able to handle those cases:</p>
<pre><code class="language-python">rearranger(<span class="hljs-number">6</span>, <span class="hljs-number">19</span>, <span class="hljs-number">32</span>, <span class="hljs-number">2</span>, <span class="hljs-number">124</span>, <span class="hljs-number">20</span>, <span class="hljs-number">22</span>) == <span class="hljs-string">&quot;Rearrangements: 124, 19, 20, 2, 22, 32 and 124, 19, 20, 22, 2, 32 generates: 124192022232 divisible by 6&quot;</span></code></pre>
<p>The arrangements should be in sorted order, as you see: <code>124, 19, 20, 2, 22, 32</code> comes first than <code>124, 19, 20, 22, 2, 32</code>.</p>
<p>Have an enjoyable time!</p>
<p>(Thanks to <code>ChristianE.Cooper</code> for his contribution to this kata)</p>

### Solution