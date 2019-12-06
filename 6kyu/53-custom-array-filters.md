### Problem:
<p>Dave has a lot of data he is required to apply filters to, which are simple enough, but he wants a shorter way of doing so.</p>
<p>He wants the following functions to work as expected:</p>
<pre><code class="language-ruby">even <span class="hljs-comment"># [1,2,3,4,5].even should return [2,4]</span>
odd <span class="hljs-comment"># [1,2,3,4,5].odd should return [1,3,5]</span>
under <span class="hljs-comment"># [1,2,3,4,5].under(4) should return [1,2,3]</span>
over <span class="hljs-comment"># [1,2,3,4,5].over(4) should return [5]</span>
in_range <span class="hljs-comment"># [1,2,3,4,5].in_range(1..3) should return [1,2,3]</span></code></pre>
<pre style="display: none;"><code class="language-javascript">even    <span class="hljs-comment">// [1,2,3,4,5].even() should return [2,4]</span>
odd     <span class="hljs-comment">// [1,2,3,4,5].odd() should return [1,3,5]</span>
under   <span class="hljs-comment">// [1,2,3,4,5].under(4) should return [1,2,3]</span>
over    <span class="hljs-comment">// [1,2,3,4,5].over(4) should return [5]</span>
inRange <span class="hljs-comment">// [1,2,3,4,5].inRange(1,3) should return [1,2,3]</span></code></pre>
<pre style="display: none;"><code class="language-python">even <span class="hljs-comment"># list([1,2,3,4,5]).even() should return [2,4]</span>
odd <span class="hljs-comment"># list([1,2,3,4,5]).odd() should return [1,3,5]</span>
under <span class="hljs-comment"># list([1,2,3,4,5]).under(4) should return [1,2,3]</span>
over <span class="hljs-comment"># list([1,2,3,4,5]).over(4) should return [5]</span>
in_range <span class="hljs-comment"># list([1,2,3,4,5]).in_range(1, 3) should return [1,2,3]</span></code></pre>
<p>They should also work when used together, for example:</p>
<pre><code class="language-ruby">(<span class="hljs-number">1</span>..<span class="hljs-number">100</span>).to_a.even.in_range(<span class="hljs-number">18</span>..<span class="hljs-number">30</span>) <span class="hljs-comment"># should return [18, 20, 22, 24, 26, 28, 30]</span></code></pre>
<pre style="display: none;"><code class="language-javascript">[<span class="hljs-number">1</span>,<span class="hljs-number">2</span>,<span class="hljs-number">18</span>,<span class="hljs-number">19</span>,<span class="hljs-number">20</span>,<span class="hljs-number">21</span>,<span class="hljs-number">22</span>,<span class="hljs-number">30</span>,<span class="hljs-number">40</span>,<span class="hljs-number">50</span>,<span class="hljs-number">100</span>].even().inRange(<span class="hljs-number">18</span>,<span class="hljs-number">30</span>) <span class="hljs-comment">// should return [18, 20, 22, 30]</span></code></pre>
<pre style="display: none;"><code class="language-python">list(list([<span class="hljs-number">1</span>,<span class="hljs-number">2</span>,<span class="hljs-number">3</span>,<span class="hljs-number">4</span>,<span class="hljs-number">5</span>,<span class="hljs-number">6</span>,<span class="hljs-number">7</span>,<span class="hljs-number">8</span>,<span class="hljs-number">9</span>,<span class="hljs-number">10</span>]).even()).under(<span class="hljs-number">5</span>) <span class="hljs-comment"># should return [2,4]</span></code></pre>
<p>And finally the filters should only accept integer values from an array, for example:</p>
<pre><code class="language-ruby">[<span class="hljs-string">&quot;a&quot;</span>, <span class="hljs-number">1</span>, <span class="hljs-string">&quot;b&quot;</span>, <span class="hljs-number">300</span>, <span class="hljs-string">&quot;x&quot;</span>, <span class="hljs-string">&quot;q&quot;</span>, <span class="hljs-number">63</span>, <span class="hljs-number">122</span>, <span class="hljs-number">181</span>, <span class="hljs-string">&quot;z&quot;</span>, <span class="hljs-number">0</span>.<span class="hljs-number">83</span>, <span class="hljs-number">0</span>.<span class="hljs-number">11</span>].even <span class="hljs-comment"># should return [300, 122]</span></code></pre>
<pre style="display: none;"><code class="language-javascript">[<span class="hljs-string">&quot;a&quot;</span>, <span class="hljs-number">1</span>, <span class="hljs-string">&quot;b&quot;</span>, <span class="hljs-number">300</span>, <span class="hljs-string">&quot;x&quot;</span>, <span class="hljs-string">&quot;q&quot;</span>, <span class="hljs-number">63</span>, <span class="hljs-number">122</span>, <span class="hljs-number">181</span>, <span class="hljs-string">&quot;z&quot;</span>, <span class="hljs-number">0.83</span>, <span class="hljs-number">0.11</span>].even() <span class="hljs-comment">// should return [300, 122]</span></code></pre>
<pre style="display: none;"><code class="language-python">list([<span class="hljs-string">&quot;a&quot;</span>, <span class="hljs-number">1</span>, <span class="hljs-string">&quot;b&quot;</span>, <span class="hljs-number">300</span>, <span class="hljs-string">&quot;x&quot;</span>, <span class="hljs-string">&quot;q&quot;</span>, <span class="hljs-number">63</span>, <span class="hljs-number">122</span>, <span class="hljs-number">181</span>, <span class="hljs-string">&quot;z&quot;</span>, <span class="hljs-number">0.83</span>, <span class="hljs-number">0.11</span>]).even() // should <span class="hljs-keyword">return</span> [<span class="hljs-number">300</span>, <span class="hljs-number">122</span>]</code></pre>

### Solution