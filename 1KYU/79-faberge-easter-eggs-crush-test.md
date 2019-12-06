### Problem:
<p>One man (lets call him Eulampy) has a collection of some almost identical Faberg&#xE8; eggs. One day his friend Tempter said to him:</p>
<blockquote>
<ul>
<li>Do you see that skyscraper? And can you tell me a maximal floor that if you drop your egg from will not crack it?</li>
<li>No, - said Eulampy.</li>
<li>But if you give me N eggs, - says Tempter - I&apos;l tell you an answer.</li>
<li>Deal - said Eulampy. But I have one requirement before we start this: if I will see more than M falls of egg, my heart will be crushed instead of egg. So you have only M trys to throw eggs. Would you tell me an exact floor with this limitation?</li>
</ul>
</blockquote>
<h2 id="task">Task</h2>
<p>Your task is to help Tempter - write a function</p>
<pre><code class="language-haskell"><span class="hljs-title">height</span> :: <span class="hljs-type">Integer</span> -&gt; <span class="hljs-type">Integer</span> -&gt; <span class="hljs-type">Integer</span>
<span class="hljs-title">height</span> n m = <span class="hljs-comment">-- see text</span></code></pre>
<p>that takes 2 arguments - the number of eggs <code>n</code> and the number of trys <code>m</code> - you should calculate maximum scyscrapper height (in floors), in which it is guaranteed to find an exactly maximal floor from which that an egg won&apos;t crack it.</p>
<p>Which means,</p>
<ol start="0">
<li>You can throw an egg from a specific floor every try</li>
<li>Every egg has the same, certain durability - if they&apos;re thrown from a certain floor or below, they won&apos;t crack. Otherwise they crack.</li>
<li>You have <code>n</code> eggs and <code>m</code> tries</li>
<li>What is the maxmimum height, such that you can always determine which floor the target floor is when the target floor can be any floor between <code>1</code> to this maximum height?</li>
</ol>
<h2 id="examples">Examples</h2>
<pre><code>height 0 14 = 0
height 2 0  = 0
height 2 14 = 105
height 7 20 = 137979</code></pre><h2 id="data-range">Data range</h2>
<pre><code>n &lt;= 20000
m &lt;= 20000</code></pre>
### Solution