### Problem:
<p>Jon and Joe have received equal marks in the school examination. But, they won&apos;t reconcile in peace when equated with each other. To prove his might, Jon challenges Joe to write a program to find all possible number combos that sum to a given number. While unsure whether he would be able to accomplish this feat or not, Joe accpets the challenge. Being Joe&apos;s friend, your task is to help him out.</p>
<h1 id="task">Task</h1>
<p>Create a function <code>combos</code>, that accepts a single positive integer <code>num</code> (30 &gt; <code>num</code> &gt; 0) and returns an array of arrays of positive integers that sum to <code>num</code>.</p>
<h1 id="notes">Notes</h1>
<ol>
<li>Sub-arrays may or may not have their elements sorted.</li>
<li>The order of sub-arrays inside the main array does not matter.</li>
<li>For an optimal solution, the following operation should complete within 6000ms.</li>
</ol>
<h1 id="sample">Sample</h1>
<pre><code class="language-javascript">    combos(<span class="hljs-number">3</span>) =&gt; [ [ <span class="hljs-number">3</span> ], [ <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span> ], [ <span class="hljs-number">1</span>, <span class="hljs-number">2</span> ] ]
    combos(<span class="hljs-number">10</span>) =&gt; [ [ <span class="hljs-number">10</span> ],
      [ <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span> ],
        [ <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">2</span> ],
        [ <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">3</span> ],
        [ <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">4</span> ],
        [ <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">5</span> ],
        [ <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">6</span> ],
        [ <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">7</span> ],
        [ <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">8</span> ],
        [ <span class="hljs-number">1</span>, <span class="hljs-number">9</span> ],
        [ <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">2</span> ],
        [ <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span> ],
        [ <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">4</span> ],
        [ <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">2</span>, <span class="hljs-number">2</span> ],
        [ <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">3</span>, <span class="hljs-number">3</span> ],
        [ <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">5</span> ],
        [ <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span> ],
        [ <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">3</span>, <span class="hljs-number">4</span> ],
        [ <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">6</span> ],
        [ <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">2</span>, <span class="hljs-number">4</span> ],
        [ <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">2</span>, <span class="hljs-number">2</span>, <span class="hljs-number">2</span> ],
        [ <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>, <span class="hljs-number">3</span> ],
        [ <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">3</span>, <span class="hljs-number">5</span> ],
        [ <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">4</span>, <span class="hljs-number">4</span> ],
        [ <span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">7</span> ],
        [ <span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">2</span>, <span class="hljs-number">5</span> ],
        [ <span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">2</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span> ],
        [ <span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>, <span class="hljs-number">4</span> ],
        [ <span class="hljs-number">1</span>, <span class="hljs-number">3</span>, <span class="hljs-number">6</span> ],
        [ <span class="hljs-number">1</span>, <span class="hljs-number">3</span>, <span class="hljs-number">3</span>, <span class="hljs-number">3</span> ],
        [ <span class="hljs-number">1</span>, <span class="hljs-number">4</span>, <span class="hljs-number">5</span> ],
        [ <span class="hljs-number">2</span>, <span class="hljs-number">8</span> ],
        [ <span class="hljs-number">2</span>, <span class="hljs-number">2</span>, <span class="hljs-number">6</span> ],
        [ <span class="hljs-number">2</span>, <span class="hljs-number">2</span>, <span class="hljs-number">2</span>, <span class="hljs-number">4</span> ],
        [ <span class="hljs-number">2</span>, <span class="hljs-number">2</span>, <span class="hljs-number">2</span>, <span class="hljs-number">2</span>, <span class="hljs-number">2</span> ],
        [ <span class="hljs-number">2</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>, <span class="hljs-number">3</span> ],
        [ <span class="hljs-number">2</span>, <span class="hljs-number">3</span>, <span class="hljs-number">5</span> ],
        [ <span class="hljs-number">2</span>, <span class="hljs-number">4</span>, <span class="hljs-number">4</span> ],
        [ <span class="hljs-number">3</span>, <span class="hljs-number">7</span> ],
        [ <span class="hljs-number">3</span>, <span class="hljs-number">3</span>, <span class="hljs-number">4</span> ],
        [ <span class="hljs-number">4</span>, <span class="hljs-number">6</span> ],
        [ <span class="hljs-number">5</span>, <span class="hljs-number">5</span> ] ]</code></pre>

### Solution