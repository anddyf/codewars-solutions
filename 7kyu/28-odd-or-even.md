### Problem:
<h1 id="task">Task:</h1>
<p>Given an array of numbers (a list in groovy), determine whether the sum of all of the numbers is odd or even.</p>
<p>Give your answer in string format as &apos;odd&apos; or &apos;even&apos;.</p>
<p>If the input array is empty consider it as: <code>[0]</code> (array with a zero).</p>
<h1 id="example">Example:</h1>
<pre style="display: none;"><code class="language-c">odd_or_even({<span class="hljs-number">0</span>}, <span class="hljs-number">1</span>) returns <span class="hljs-string">&quot;even&quot;</span>
odd_or_even({<span class="hljs-number">2</span>, <span class="hljs-number">5</span>, <span class="hljs-number">34</span>, <span class="hljs-number">6</span>}, <span class="hljs-number">4</span>) returns <span class="hljs-string">&quot;odd&quot;</span>
odd_or_even({<span class="hljs-number">0</span>, <span class="hljs-number">-1</span>, <span class="hljs-number">-5</span>}, <span class="hljs-number">3</span>) returns <span class="hljs-string">&quot;even&quot;</span></code></pre>
<pre><code class="language-javascript">oddOrEven([<span class="hljs-number">0</span>]) returns <span class="hljs-string">&quot;even&quot;</span>
oddOrEven([<span class="hljs-number">2</span>, <span class="hljs-number">5</span>, <span class="hljs-number">34</span>, <span class="hljs-number">6</span>]) returns <span class="hljs-string">&quot;odd&quot;</span>
oddOrEven([<span class="hljs-number">0</span>, <span class="hljs-number">-1</span>, <span class="hljs-number">-5</span>]) returns <span class="hljs-string">&quot;even&quot;</span></code></pre>
<pre style="display: none;"><code class="language-php">odd_or_even([<span class="hljs-number">0</span>]); <span class="hljs-comment">// =&gt; &apos;even&apos;</span>
odd_or_even([<span class="hljs-number">2</span>, <span class="hljs-number">5</span>, <span class="hljs-number">34</span>, <span class="hljs-number">6</span>]); <span class="hljs-comment">// =&gt; &apos;odd&apos;</span>
odd_or_even([<span class="hljs-number">0</span>, <span class="hljs-number">-1</span>, <span class="hljs-number">-5</span>]); <span class="hljs-comment">// =&gt; &apos;even&apos;</span></code></pre>
<pre style="display: none;"><code class="language-ruby">odd_or_even([<span class="hljs-number">0</span>]) <span class="hljs-comment"># =&gt; &apos;even&apos;</span>
odd_or_even([<span class="hljs-number">2</span>, <span class="hljs-number">5</span>, <span class="hljs-number">34</span>, <span class="hljs-number">6</span>]) <span class="hljs-comment"># =&gt; &apos;odd&apos;</span>
odd_or_even([<span class="hljs-number">0</span>, -<span class="hljs-number">1</span>, -<span class="hljs-number">5</span>]) <span class="hljs-comment"># =&gt; &apos;even&apos;</span></code></pre>
<pre style="display: none;"><code class="language-java">oddOrEven([<span class="hljs-number">2</span>, <span class="hljs-number">5</span>, <span class="hljs-number">34</span>, <span class="hljs-number">6</span>]) returns <span class="hljs-string">&quot;odd&quot;</span>.</code></pre>
<pre style="display: none;"><code class="language-groovy">Kata.oddOrEven([<span class="hljs-number">2</span>, <span class="hljs-number">5</span>, <span class="hljs-number">34</span>, <span class="hljs-number">6</span>]) returns <span class="hljs-string">&quot;odd&quot;</span>.</code></pre>
<p>Have fun!</p>

### Solution