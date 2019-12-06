### Problem:
<p>In this kata, you will write a function that returns the positions and the values of the &quot;peaks&quot; (or local maxima) of a numeric array.</p>
<p>For example, the array <code>arr = [0, 1, 2, 5, 1, 0]</code> has a peak at position <code>3</code> with a value of <code>5</code> (since <code>arr[3]</code> equals <code>5</code>).</p>
<p>The output will be returned as an object with two properties: pos and peaks. Both of these properties should be arrays. If there is no peak in the given array, then the output should be <code>{pos: [], peaks: []}</code>.</p>
<p>Example: <code>pickPeaks([3, 2, 3, 6, 4, 1, 2, 3, 2, 1, 2, 3])</code> should return <code>{pos: [3, 7], peaks: [6, 3]}</code> (or equivalent in other languages)</p>
<p>All input arrays will be valid integer arrays (although it could still be empty), so you won&apos;t need to validate the input.</p>
<p>The first and last elements of the array will not be considered as peaks (in the context of a mathematical function, we don&apos;t know what is after and before and therefore, we don&apos;t know if it is a peak or not).</p>
<p>Also, beware of plateaus !!! <code>[1, 2, 2, 2, 1]</code> has a peak while <code>[1, 2, 2, 2, 3]</code> does not. In case of a plateau-peak, please only return the position and value of the beginning of the plateau. For example: 
<code>pickPeaks([1, 2, 2, 2, 1])</code> returns <code>{pos: [1], peaks: [2]}</code> (or equivalent in other languages)</p>
<p>Have fun!</p>

### Solution