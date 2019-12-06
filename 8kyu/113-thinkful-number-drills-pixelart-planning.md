### Problem:
<p>You&apos;re laying out a rad pixel art mural to paint on your living room wall in homage to <a href="http://68.media.tumblr.com/0f55f7f3789a354cfcda7c2a64f501d1/tumblr_o7eq3biK9s1qhccbco1_500.png" target="_blank">Paul Robertson</a>, your favorite pixel artist.</p>
<p>You want your work to be perfect down to the millimeter. You haven&apos;t decided on the dimensions of your piece, how large you want your pixels to be, or which wall you want to use. You just know that you want to fit an exact number of pixels.</p>
<p>To help decide those things you&apos;ve decided to write a function, <code>is_divisible()</code> that will tell you whether a wall of a certain length can exactly fit an integer number of pixels of a certain length.</p>
<p>Your function should take two arguments: the size of the wall in millimeters and the size of a pixel in millimeters. It should return <code>True</code> if you can fit an exact number of pixels on the wall, otherwise it should return <code>False</code>. For example <code>is_divisible(4050, 27)</code> should return <code>True</code>, but <code>is_divisible(4066, 27)</code> should return <code>False</code>.</p>
<p>Note: you don&apos;t need to use an <code>if</code> statement here. Remember that in Python an expression using the <code>==</code> comparison operator will evaluate to either <code>True</code> or <code>False</code>:</p>
<pre><code class="language-python"><span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-function"><span class="hljs-keyword">def</span> <span class="hljs-title">equals_three</span><span class="hljs-params">(num)</span>:</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>    <span class="hljs-keyword">return</span> num == <span class="hljs-number">3</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>equals_three(<span class="hljs-number">5</span>)
<span class="hljs-literal">False</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>equals_three(<span class="hljs-number">3</span>)
<span class="hljs-literal">True</span></code></pre>
<!-- C# Documentation -->
<!-- End C# Documentation -->
### Solution