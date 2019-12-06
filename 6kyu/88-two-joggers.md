### Problem:
<h1 id="two-joggers">Two Joggers</h1>
<h2 id="description">Description</h2>
<p>Bob and Charles are meeting for their weekly jogging tour. They both start at the same spot called &quot;Start&quot; and they each run a different lap, which may (or may not) vary in length. Since they know each other for a long time already, they both run at the exact same speed.</p>
<h2 id="illustration">Illustration</h2>
<p>Example where Charles (dashed line) runs a shorter lap than Bob:</p>
<p><img src="http://www.haan.lu/files/7713/8338/6140/jogging.png" alt="Example laps" title="Example laps"></p>
<h2 id="task">Task</h2>
<p>Your job is to complete the function <strong>nbrOfLaps(x, y)</strong> that, given the length of the laps for Bob and Charles, finds the number of laps that each jogger has to complete before they meet each other again, at the same time, at the start.</p>
<p>The function takes two arguments:</p>
<ol>
<li>The length of Bob&apos;s lap (larger than 0)</li>
<li>The length of Charles&apos; lap (larger than 0)  </li>
</ol>
<p><br>The function should return an array (<code>Tuple&lt;int, int&gt;</code> in C#) containing exactly two numbers:</p>
<ol>
<li>The first number is the number of laps that Bob has to run</li>
<li>The second number is the number of laps that Charles has to run</li>
</ol>
<p><br><b>Examples:</b></p>
<pre><code class="language-javascript">nbrOfLaps(<span class="hljs-number">5</span>, <span class="hljs-number">3</span>); <span class="hljs-comment">// returns [3, 5]</span>
nbrOfLaps(<span class="hljs-number">4</span>, <span class="hljs-number">6</span>); <span class="hljs-comment">// returns [3, 2]</span></code></pre>
<pre style="display: none;"><code class="language-python">nbr_of_laps(<span class="hljs-number">5</span>, <span class="hljs-number">3</span>) <span class="hljs-comment"># returns (3, 5)</span>
nbr_of_laps(<span class="hljs-number">4</span>, <span class="hljs-number">6</span>); <span class="hljs-comment"># returns (3, 2)</span></code></pre>
<pre style="display: none;"><code class="language-ruby">nbr_of_laps(<span class="hljs-number">5</span>, <span class="hljs-number">3</span>) <span class="hljs-comment"># returns [3, 5]</span>
nbr_of_laps(<span class="hljs-number">4</span>, <span class="hljs-number">6</span>); <span class="hljs-comment"># returns [3, 2]</span></code></pre>
<pre style="display: none;"><code class="language-haskell"><span class="hljs-title">nbrOfLaps</span> <span class="hljs-number">5</span> <span class="hljs-number">3</span> <span class="hljs-comment">-- should be (3, 5)</span>
<span class="hljs-title">nbrOfLaps</span> <span class="hljs-number">4</span> <span class="hljs-number">6</span> <span class="hljs-comment">-- should be (3, 2)</span></code></pre>
<pre style="display: none;"><code class="language-csharp">Kata.NbrOfLaps(<span class="hljs-number">5</span>, <span class="hljs-number">3</span>) =&gt; <span class="hljs-keyword">new</span> Tuple&lt;<span class="hljs-keyword">int</span>, <span class="hljs-keyword">int</span>&gt;(<span class="hljs-number">3</span>, <span class="hljs-number">5</span>);
Kata.NbrOfLaps(<span class="hljs-number">4</span>, <span class="hljs-number">6</span>) =&gt; <span class="hljs-keyword">new</span> Tuple&lt;<span class="hljs-keyword">int</span>, <span class="hljs-keyword">int</span>&gt;(<span class="hljs-number">3</span>, <span class="hljs-number">2</span>);</code></pre>

### Solution