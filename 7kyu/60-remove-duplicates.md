### Problem:
<h1 id="remove-duplicates">Remove Duplicates</h1>
<p>You are to write a function called <code>unique</code> that takes an array of integers and returns the array with duplicates removed. It must return the values in the same order as first seen in the given array. Thus no sorting should be done, if 52 appears before 10 in the given array then it should also be that 52 appears before 10 in the returned array.</p>
<h2 id="assumptions">Assumptions</h2>
<ul>
<li>All values given are integers (they can be positive or negative).</li>
<li>You are given an array but it may be empty.</li>
<li>They array may have duplicates or it may not.</li>
<li>You cannot use the <code>uniq</code> method on Arrays (don&apos;t even try it), or the <code>nub</code> function from <code>Data.List</code>.</li>
</ul>
<h2 id="example">Example</h2>
<pre><code class="language-ruby">puts unique([<span class="hljs-number">1</span>, <span class="hljs-number">5</span>, <span class="hljs-number">2</span>, <span class="hljs-number">0</span>, <span class="hljs-number">2</span>, -<span class="hljs-number">3</span>, <span class="hljs-number">1</span>, <span class="hljs-number">10</span>]).inspect
[<span class="hljs-number">1</span>, <span class="hljs-number">5</span>, <span class="hljs-number">2</span>, <span class="hljs-number">0</span>, -<span class="hljs-number">3</span>, <span class="hljs-number">10</span>]

puts unique([]).inspect
[]

puts unique([<span class="hljs-number">5</span>, <span class="hljs-number">2</span>, <span class="hljs-number">1</span>, <span class="hljs-number">3</span>]).inspect
[<span class="hljs-number">5</span>, <span class="hljs-number">2</span>, <span class="hljs-number">1</span>, <span class="hljs-number">3</span>]</code></pre>
<pre style="display: none;"><code class="language-coffeescript">unique([<span class="hljs-number">1</span>, <span class="hljs-number">5</span>, <span class="hljs-number">2</span>, <span class="hljs-number">0</span>, <span class="hljs-number">2</span>, <span class="hljs-number">-3</span>, <span class="hljs-number">1</span>, <span class="hljs-number">10</span>])
<span class="hljs-comment"># -&gt; [1, 5, 2, 0, -3, 10]</span>

unique([])
<span class="hljs-comment"># -&gt; []</span>

unique([<span class="hljs-number">5</span>, <span class="hljs-number">2</span>, <span class="hljs-number">1</span>, <span class="hljs-number">3</span>])
<span class="hljs-comment"># -&gt; [5, 2, 1, 3]</span></code></pre>
<pre style="display: none;"><code class="language-java">UniqueArray.unique([<span class="hljs-number">1</span>, <span class="hljs-number">5</span>, <span class="hljs-number">2</span>, <span class="hljs-number">0</span>, <span class="hljs-number">2</span>, -<span class="hljs-number">3</span>, <span class="hljs-number">1</span>, <span class="hljs-number">10</span>]) 
<span class="hljs-comment">// -&gt; [1, 5, 2, 0, -3, 10]</span></code></pre>
<pre style="display: none;"><code class="language-haskell">&#x3BB; unique [<span class="hljs-number">1</span>,<span class="hljs-number">5</span>,<span class="hljs-number">2</span>,<span class="hljs-number">0</span>,<span class="hljs-number">2</span>,<span class="hljs-number">-3</span>,<span class="hljs-number">1</span>,<span class="hljs-number">10</span>]
[<span class="hljs-number">1</span>,<span class="hljs-number">5</span>,<span class="hljs-number">2</span>,<span class="hljs-number">0</span>,<span class="hljs-number">-3</span>,<span class="hljs-number">10</span>]</code></pre>
<pre style="display: none;"><code class="language-python"><span class="hljs-keyword">print</span> unique([<span class="hljs-number">1</span>, <span class="hljs-number">5</span>, <span class="hljs-number">2</span>, <span class="hljs-number">0</span>, <span class="hljs-number">2</span>, <span class="hljs-number">-3</span>, <span class="hljs-number">1</span>, <span class="hljs-number">10</span>])
[<span class="hljs-number">1</span>, <span class="hljs-number">5</span>, <span class="hljs-number">2</span>, <span class="hljs-number">0</span>, <span class="hljs-number">-3</span>, <span class="hljs-number">10</span>]

<span class="hljs-keyword">print</span> unique([])
[]

<span class="hljs-keyword">print</span> unique([<span class="hljs-number">5</span>, <span class="hljs-number">2</span>, <span class="hljs-number">1</span>, <span class="hljs-number">3</span>])
[<span class="hljs-number">5</span>, <span class="hljs-number">2</span>, <span class="hljs-number">1</span>, <span class="hljs-number">3</span>]</code></pre>
<h2 id="what-we-are-testing">What We Are Testing</h2>
<p>We are testing basic array usage and knowledge. There are many ways to solve this and advanced users may find faster ways to solve this.</p>

### Solution