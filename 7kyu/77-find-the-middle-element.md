### Problem:
<p>As a part of this Kata, you need to create a function that when provided with a triplet, returns the index of the numerical element that lies between the other two elements.</p>
<p>The input to the function will be an array of three distinct numbers (Haskell: a tuple).</p>
<p>For example:</p>
<pre><code>gimme([2, 3, 1]) =&gt; 0</code></pre><p><em>2</em> is the number that fits between <em>1</em> and <em>3</em> and the index of <em>2</em> in the input array is <em>0</em>.</p>
<p>Another example (just to make sure it is clear):</p>
<pre><code>gimme([5, 10, 14]) =&gt; 1</code></pre><p><em>10</em> is the number that fits between <em>5</em> and <em>14</em> and the index of <em>10</em> in the input array is <em>1</em>.</p>

### Solution