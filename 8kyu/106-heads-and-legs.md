### Problem:
<p>#Description</p>
<p>Everybody has probably heard of the animal heads and legs problem from the earlier years at school. It goes:</p>
<p><code>&#x201C;A farm contains chickens and cows. There are x heads and y legs. How many chickens and cows are there?&#x201D;</code></p>
<p>Where x &lt;= 1000 and y &lt;=1000</p>
<p>#Task</p>
<p>Assuming there are no other types of animals, work out how many of each animal are there. </p>
<p><code>Return a tuple in Python - (chickens, cows) and an array list - [chickens, cows]/{chickens, cows} in all other languages</code></p>
<p>If either the heads &amp; legs is negative, the result of your calculation is negative or the calculation is a float return &quot;No solutions&quot; (no valid cases).</p>
<p>In the form:</p>
<pre><code class="language-python">(Heads, Legs) = (72, 200)

VALID - (72, 200) =&gt;             (44 , 28) 
                             (Chickens, Cows)

INVALID - (72, 201) =&gt; &quot;No solutions&quot;</code></pre>
<pre style="display: none;"><code class="language-javascript">[Heads, Legs] = [<span class="hljs-number">72</span>, <span class="hljs-number">200</span>]

VALID - [<span class="hljs-number">72</span>, <span class="hljs-number">200</span>] =&gt;             [<span class="hljs-number">44</span> , <span class="hljs-number">28</span>]   
                             [Chickens, Cows]

INVALID - [<span class="hljs-number">72</span>, <span class="hljs-number">201</span>] =&gt; <span class="hljs-string">&quot;No solutions&quot;</span></code></pre>
<pre style="display: none;"><code class="language-ruby">[Heads, Legs] = [<span class="hljs-number">72</span>, <span class="hljs-number">200</span>]

VALID - [<span class="hljs-number">72</span>, <span class="hljs-number">200</span>] =&gt;             [<span class="hljs-number">44</span> , <span class="hljs-number">28</span>]   
                             [Chickens, Cows]

INVALID - [<span class="hljs-number">72</span>, <span class="hljs-number">201</span>] =&gt; <span class="hljs-string">&quot;No solutions&quot;</span></code></pre>
<p>However, <code>if 0 heads and 0 legs are given always return [0, 0]</code> since zero heads must give zero animals.</p>
<p>There are many different ways to solve this, but they all give the same answer.</p>
<p>You will only be given integers types - however negative values (edge cases) will be given. </p>
<p>Happy coding!</p>

### Solution