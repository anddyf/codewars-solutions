### Problem:
<p>Create a Vector object that supports addition, subtraction, dot products, and norms. So, for example:</p>
<pre style="display: none;"><code class="language-coffeescript">a = <span class="hljs-keyword">new</span> Vector([<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>])
b = <span class="hljs-keyword">new</span> Vector([<span class="hljs-number">3</span>, <span class="hljs-number">4</span>, <span class="hljs-number">5</span>])
c = <span class="hljs-keyword">new</span> Vector([<span class="hljs-number">5</span>, <span class="hljs-number">6</span>, <span class="hljs-number">7</span>, <span class="hljs-number">8</span>])

a.add(b)      <span class="hljs-comment"># should return a new Vector([4, 6, 8])</span>
a.subtract(b) <span class="hljs-comment"># should return a new Vector([-2, -2, -2])</span>
a.dot(b)      <span class="hljs-comment"># should return 1*3 + 2*4 + 3*5 = 26</span>
a.norm()      <span class="hljs-comment"># should return sqrt(1^2 + 2^2 + 3^2) = sqrt(14)</span>
a.add(c)      <span class="hljs-comment"># throws an error</span></code></pre>
<pre><code class="language-javascript"><span class="hljs-keyword">var</span> a = <span class="hljs-keyword">new</span> Vector([<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>]);
<span class="hljs-keyword">var</span> b = <span class="hljs-keyword">new</span> Vector([<span class="hljs-number">3</span>, <span class="hljs-number">4</span>, <span class="hljs-number">5</span>]);
<span class="hljs-keyword">var</span> c = <span class="hljs-keyword">new</span> Vector([<span class="hljs-number">5</span>, <span class="hljs-number">6</span>, <span class="hljs-number">7</span>, <span class="hljs-number">8</span>]);

a.add(b);      <span class="hljs-comment">// should return a new Vector([4, 6, 8])</span>
a.subtract(b); <span class="hljs-comment">// should return a new Vector([-2, -2, -2])</span>
a.dot(b);      <span class="hljs-comment">// should return 1*3 + 2*4 + 3*5 = 26</span>
a.norm();      <span class="hljs-comment">// should return sqrt(1^2 + 2^2 + 3^2) = sqrt(14)</span>
a.add(c);      <span class="hljs-comment">// throws an error</span></code></pre>
<pre style="display: none;"><code class="language-python">a = Vector([<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>])
b = Vector([<span class="hljs-number">3</span>, <span class="hljs-number">4</span>, <span class="hljs-number">5</span>])
c = Vector([<span class="hljs-number">5</span>, <span class="hljs-number">6</span>, <span class="hljs-number">7</span>, <span class="hljs-number">8</span>])

a.add(b)      <span class="hljs-comment"># should return a new Vector([4, 6, 8])</span>
a.subtract(b) <span class="hljs-comment"># should return a new Vector([-2, -2, -2])</span>
a.dot(b)      <span class="hljs-comment"># should return 1*3 + 2*4 + 3*5 = 26</span>
a.norm()      <span class="hljs-comment"># should return sqrt(1^2 + 2^2 + 3^2) = sqrt(14)</span>
a.add(c)      <span class="hljs-comment"># raises an exception</span></code></pre>
<p>If you try to add, subtract, or dot two vectors with different lengths, <strong><em>you must throw an error</em></strong>!</p>
<p>Also provide:</p>
<ul>
<li>a <code>toString</code> method, so that using the vectors from above, <code>a.toString() === &apos;(1,2,3)&apos;</code> (in Python, this is a <code>__str__</code> method, so that <code>str(a) == &apos;(1,2,3)&apos;</code>)</li>
<li>an <code>equals</code> method, to check that two vectors that have the same components are equal</li>
</ul>
<p><strong>Note:</strong> the test cases will utilize the user-provided <code>equals</code> method.</p>

### Solution