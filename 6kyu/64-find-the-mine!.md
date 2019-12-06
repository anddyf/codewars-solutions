### Problem:
<p>You&apos;ve just discovered a square (NxN) field and you notice a warning sign. The sign states that there&apos;s a single bomb in the 2D grid-like field in front of you. </p>
<p>Write a function <code>mineLocation</code>/<code>MineLocation</code> that accepts a 2D array, and returns the location of the mine. The mine is represented as the integer <code>1</code> in the 2D array. Areas in the 2D array that are not the mine will be represented as <code>0</code>s. </p>
<p>The location returned should be an array (<code>Tuple&lt;int, int&gt;</code> in C#) where the first element is the row index, and the second element is the column index of the bomb location (both should be 0 based). All 2D arrays passed into your function will be square (NxN), and there will only be one mine in the array.</p>
<h3 id="examples">Examples:</h3>
<p><code>mineLocation( [ [1, 0, 0], [0, 0, 0], [0, 0, 0] ] )</code> =&gt; returns <code>[0, 0]</code> <br>
<code>mineLocation( [ [0, 0, 0], [0, 1, 0], [0, 0, 0] ] )</code> =&gt; returns <code>[1, 1]</code> <br>
<code>mineLocation( [ [0, 0, 0], [0, 0, 0], [0, 1, 0] ] )</code> =&gt; returns <code>[2, 1]</code></p>

### Solution