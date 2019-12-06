### Problem:
<h2 id="help-the-frog-to-find-a-way-to-freedom">Help the frog to find a way to freedom</h2>
<hr>
<p>You have an array of integers and have a frog at the first position </p>
<p><code>[Frog, int, int, int, ..., int]</code></p>
<p>The integer itself may tell you the length and the direction of the jump </p>
<pre><code> For instance:
  2 = jump two indices to the right
 -3 = jump three indices to the left
  0 = stay at the same position</code></pre><p>Your objective is to find how many jumps are needed to jump out of the array.</p>
<p>Return <code>-1</code> if Frog can&apos;t jump out of the array</p>
<pre><code>Example:
array = [1, 2, 1, 5]; 
jumps = 3  (1 -&gt; 2 -&gt; 5 -&gt; &lt;jump out&gt;)
</code></pre><p><em>All tests for this Kata are randomly generated.</em></p>

### Solution