### Problem:
<p><a href="https://en.wikipedia.org/wiki/Langton%27s_ant" target="_blank">Langton&apos;s ant</a> is a two-dimensional Turing machine invented in the late 1980s. The ant starts out on a grid of black and white cells and follows a simple set of rules that has complex emergent behavior.</p>
<h2 id="task">Task</h2>
<p>Complete the function and return the <code>n</code>th iteration of Langton&apos;s ant with the given input.</p>
<h3 id="parameters">Parameters:</h3>
<ul>
<li><code>grid</code> - a two dimensional array of <code>1</code>s and <code>0</code>s (representing white and black cells respectively)</li>
<li><code>column</code> - horizontal position of ant</li>
<li><code>row</code> - ant&apos;s vertical position</li>
<li><code>n</code> - number of iterations</li>
<li><code>dir</code> - ant&apos;s current direction (0 - north, 1 - east, 2 - south, 3 - west), <strong>should default to 0</strong></li>
</ul>
<p><strong>Note:</strong> parameters <code>column</code> and <code>row</code> will always be inside the <code>grid</code>, and number of generations <code>n</code> will never be negative.</p>
<h2 id="output">Output</h2>
<p>The state of the <code>grid</code> after <code>n</code> iterations.</p>
<h2 id="rules">Rules</h2>
<p>The ant can travel in any of the four cardinal directions at each step it takes. The ant moves according to the rules below:</p>
<ul>
<li>At a white square (represented with <code>1</code>), turn 90&#xB0; right, flip the color of the square, and move forward one unit.</li>
<li>At a black square (<code>0</code>), turn 90&#xB0; left, flip the color of the square, and move forward one unit.</li>
</ul>
<p>The grid has no limits and therefore if the ant moves outside the borders, the grid should be expanded with <code>0</code>s, respectively maintaining the rectangle shape.</p>
<h2 id="example">Example</h2>
<pre><code class="language-python">ant([[<span class="hljs-number">1</span>]], <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">1</span>, <span class="hljs-number">0</span>)   <span class="hljs-comment"># should return: [[0, 0]]</span></code></pre>
<pre style="display: none;"><code class="language-julia">ant([<span class="hljs-number">1</span>; <span class="hljs-number">1</span>], <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">0</span>)   <span class="hljs-comment"># should return: [0 0; 1 0]</span></code></pre>
<p>Initially facing north (<code>0</code>), at the first iteration the ant turns right (because it stands on a white square, <code>1</code>), flips the square and moves forward.</p>

### Solution