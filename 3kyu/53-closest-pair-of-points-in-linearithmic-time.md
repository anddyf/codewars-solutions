### Problem:
<p>Given a number of points on a plane, your task is to find two points with the smallest distance between them in linearithmic
<a href="http://en.wikipedia.org/wiki/Time_complexity#Linearithmic_time" target="_blank">O(n log n)</a> time.</p>
<h3 id="example">Example</h3>
<pre><code>  1  2  3  4  5  6  7  8  9
1  
2    . A
3                . D
4                   . F       
5             . C
6              
7                . E
8    . B
9                   . G
</code></pre><p>For the plane above, the input will be: </p>
<pre><code class="language-javascript">[
  [<span class="hljs-number">2</span>,<span class="hljs-number">2</span>], <span class="hljs-comment">// A</span>
  [<span class="hljs-number">2</span>,<span class="hljs-number">8</span>], <span class="hljs-comment">// B</span>
  [<span class="hljs-number">5</span>,<span class="hljs-number">5</span>], <span class="hljs-comment">// C</span>
  [<span class="hljs-number">6</span>,<span class="hljs-number">3</span>], <span class="hljs-comment">// D</span>
  [<span class="hljs-number">6</span>,<span class="hljs-number">7</span>], <span class="hljs-comment">// E</span>
  [<span class="hljs-number">7</span>,<span class="hljs-number">4</span>], <span class="hljs-comment">// F</span>
  [<span class="hljs-number">7</span>,<span class="hljs-number">9</span>]  <span class="hljs-comment">// G</span>
]
=&gt; closest pair is: [[<span class="hljs-number">6</span>,<span class="hljs-number">3</span>],[<span class="hljs-number">7</span>,<span class="hljs-number">4</span>]] or [[<span class="hljs-number">7</span>,<span class="hljs-number">4</span>],[<span class="hljs-number">6</span>,<span class="hljs-number">3</span>]]
(both answers are valid)</code></pre>
<pre style="display: none;"><code class="language-java">[
  [<span class="hljs-number">2</span>,<span class="hljs-number">2</span>], <span class="hljs-comment">// A</span>
  [<span class="hljs-number">2</span>,<span class="hljs-number">8</span>], <span class="hljs-comment">// B</span>
  [<span class="hljs-number">5</span>,<span class="hljs-number">5</span>], <span class="hljs-comment">// C</span>
  [<span class="hljs-number">6</span>,<span class="hljs-number">3</span>], <span class="hljs-comment">// D</span>
  [<span class="hljs-number">6</span>,<span class="hljs-number">7</span>], <span class="hljs-comment">// E</span>
  [<span class="hljs-number">7</span>,<span class="hljs-number">4</span>], <span class="hljs-comment">// F</span>
  [<span class="hljs-number">7</span>,<span class="hljs-number">9</span>]  <span class="hljs-comment">// G</span>
]
=&gt; closest pair is: [[<span class="hljs-number">6</span>,<span class="hljs-number">3</span>],[<span class="hljs-number">7</span>,<span class="hljs-number">4</span>]] or [[<span class="hljs-number">7</span>,<span class="hljs-number">4</span>],[<span class="hljs-number">6</span>,<span class="hljs-number">3</span>]]
(both answers are valid)</code></pre>
<pre style="display: none;"><code class="language-python">(
  (2,2), # A
  (2,8), # B
  (5,5), # C
  (6,3), # D
  (6,7), # E
  (7,4), # F
  (7,9)  # G
)
=&gt; closest pair is: ((6,3),(7,4)) or ((7,4),(6,3))
(both answers are valid. You can return a list of tuples too)</code></pre>
<p>The two points that are closest to each other are D and F.<br>Expected answer should be an array with both points in any order.</p>
<h3 id="goal">Goal</h3>
<p>The goal is to come up with a function that can find two closest points for any arbitrary array of points, in a linearithmic time. </p>
<hr>
<p><em><strong>Note:</strong> for compatibility reasons, your function will be called with one additional parameter, a distance calculation function. However you can completely ignore it, and you do not have to account for it - it&apos;s there only to keep compatibility with old solutions.</em></p>
<hr>
<p>More information on <a href="http://en.wikipedia.org/wiki/Closest_pair_of_points_problem" target="_blank">wikipedia</a>.</p>

### Solution