### Problem:
<h1 id="story">Story</h1>
<p>Peter lives on a hill, and he always moans about the way to his home. &quot;It&apos;s always just up. I never get a rest&quot;. But you&apos;re pretty sure that at least at one point Peter&apos;s altitude doesn&apos;t rise, but fall. To get him, you use a nefarious plan: you attach an altimeter to his backpack and you read the data from his way back at the next day.</p>
<h1 id="task">Task</h1>
<p>You&apos;re given a list of compareable elements:</p>
<pre><code class="language-haskell"><span class="hljs-type">Ord</span> a =&gt; [a]</code></pre>
<pre style="display: none;"><code class="language-ruby">heights = [Integers <span class="hljs-keyword">or</span> Floats]</code></pre>
<pre style="display: none;"><code class="language-python">heights = [Integers <span class="hljs-keyword">or</span> Floats]</code></pre>
<pre style="display: none;"><code class="language-javascript">heights = [h1, h2, h3, &#x2026;, hn]</code></pre>
<pre style="display: none;"><code class="language-csharp">heights = <span class="hljs-keyword">new</span> <span class="hljs-keyword">int</span>[<span class="hljs-number">0</span> ... <span class="hljs-number">100</span>]</code></pre>
<p>Your job is to check whether for any <code>x</code> all successors are greater or equal to <code>x</code>.</p>
<pre><code class="language-haskell"><span class="hljs-title">isMonotone</span> [<span class="hljs-number">1</span>,<span class="hljs-number">2</span>,<span class="hljs-number">3</span>] == <span class="hljs-type">True</span>
<span class="hljs-title">isMonotone</span> [<span class="hljs-number">1</span>,<span class="hljs-number">1</span>,<span class="hljs-number">2</span>] == <span class="hljs-type">True</span>
<span class="hljs-title">isMonotone</span> [<span class="hljs-number">1</span>]     == <span class="hljs-type">True</span>
<span class="hljs-title">isMonotone</span> [<span class="hljs-number">3</span>,<span class="hljs-number">2</span>,<span class="hljs-number">2</span>] == <span class="hljs-type">False</span></code></pre>
<pre style="display: none;"><code class="language-ruby">is_monotone([<span class="hljs-number">1</span>,<span class="hljs-number">2</span>,<span class="hljs-number">3</span>]) == True
is_monotone([<span class="hljs-number">1</span>,<span class="hljs-number">1</span>,<span class="hljs-number">2</span>]) == True
is_monotone([<span class="hljs-number">1</span>])     == True
is_monotone([<span class="hljs-number">3</span>,<span class="hljs-number">2</span>,<span class="hljs-number">1</span>]) == False
is_monotone([<span class="hljs-number">3</span>,<span class="hljs-number">2</span>,<span class="hljs-number">2</span>]) == False</code></pre>
<pre style="display: none;"><code class="language-python">is_monotone([<span class="hljs-number">1</span>,<span class="hljs-number">2</span>,<span class="hljs-number">3</span>]) == <span class="hljs-literal">True</span>
is_monotone([<span class="hljs-number">1</span>,<span class="hljs-number">1</span>,<span class="hljs-number">2</span>]) == <span class="hljs-literal">True</span>
is_monotone([<span class="hljs-number">1</span>])     == <span class="hljs-literal">True</span>
is_monotone([<span class="hljs-number">3</span>,<span class="hljs-number">2</span>,<span class="hljs-number">1</span>]) == <span class="hljs-literal">False</span>
is_monotone([<span class="hljs-number">3</span>,<span class="hljs-number">2</span>,<span class="hljs-number">2</span>]) == <span class="hljs-literal">False</span></code></pre>
<pre style="display: none;"><code class="language-javascript">isMonotone([<span class="hljs-number">1</span>,<span class="hljs-number">2</span>,<span class="hljs-number">3</span>]) == <span class="hljs-literal">true</span>
isMonotone([<span class="hljs-number">1</span>,<span class="hljs-number">1</span>,<span class="hljs-number">2</span>]) == <span class="hljs-literal">true</span>
isMonotone([<span class="hljs-number">1</span>])     == <span class="hljs-literal">true</span>
isMonotone([<span class="hljs-number">3</span>,<span class="hljs-number">2</span>,<span class="hljs-number">1</span>]) == <span class="hljs-literal">false</span>
isMonotone([<span class="hljs-number">3</span>,<span class="hljs-number">2</span>,<span class="hljs-number">2</span>]) == <span class="hljs-literal">false</span></code></pre>
<pre style="display: none;"><code class="language-csharp">Kata.IsMonotone(<span class="hljs-keyword">new</span> <span class="hljs-keyword">int</span>[] {<span class="hljs-number">1</span>,<span class="hljs-number">2</span>,<span class="hljs-number">3</span>}) =&gt; <span class="hljs-literal">true</span>
Kata.IsMonotone(<span class="hljs-keyword">new</span> <span class="hljs-keyword">int</span>[] {<span class="hljs-number">1</span>,<span class="hljs-number">1</span>,<span class="hljs-number">2</span>}) =&gt; <span class="hljs-literal">true</span>
Kata.IsMonotone(<span class="hljs-keyword">new</span> <span class="hljs-keyword">int</span>[] {<span class="hljs-number">1</span>})     =&gt; <span class="hljs-literal">true</span>
Kata.IsMonotone(<span class="hljs-keyword">new</span> <span class="hljs-keyword">int</span>[] {<span class="hljs-number">3</span>,<span class="hljs-number">2</span>,<span class="hljs-number">1</span>}) =&gt; <span class="hljs-literal">false</span>
Kata.IsMonotone(<span class="hljs-keyword">new</span> <span class="hljs-keyword">int</span>[] {<span class="hljs-number">3</span>,<span class="hljs-number">2</span>,<span class="hljs-number">2</span>}) =&gt; <span class="hljs-literal">false</span></code></pre>
<p>If the list is empty, Peter has probably removed your altimeter, so we cannot prove him wrong and he&apos;s still right:</p>
<pre><code class="language-haskell"><span class="hljs-title">isMonotone</span> []      == <span class="hljs-type">True</span></code></pre>
<pre style="display: none;"><code class="language-ruby">isMonotone([])     == True</code></pre>
<pre style="display: none;"><code class="language-python">is_monotone([])     == <span class="hljs-literal">True</span></code></pre>
<pre style="display: none;"><code class="language-javascript">isMonotone([])     == True</code></pre>
<pre style="display: none;"><code class="language-csharp">Kata.IsMonotone(<span class="hljs-keyword">new</span> <span class="hljs-keyword">int</span>[] {}) =&gt; <span class="hljs-literal">true</span></code></pre>
<p>Such a sequence is also called <em>monotone</em> or <a href="https://en.wikipedia.org/wiki/Monotonic_function" target="_blank"><em>monotonic</em> sequence</a>, hence the name <code>isMonotone</code>.</p>

### Solution