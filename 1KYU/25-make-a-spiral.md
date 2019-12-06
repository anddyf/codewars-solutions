### Problem:
<p>Your task, is to create a NxN spiral with a given <code>size</code>.</p>
<p>For example, spiral with size 5 should look like this:</p>
<pre><code>00000
....0
000.0
0...0
00000</code></pre><p>and with the size 10:</p>
<pre><code>0000000000
.........0
00000000.0
0......0.0
0.0000.0.0
0.0..0.0.0
0.0....0.0
0.000000.0
0........0
0000000000</code></pre><p>Return value should contain array of arrays, of <code>0</code> and <code>1</code>, for example for given size <code>5</code> result should be:</p>
<pre><code>[[1,1,1,1,1],[0,0,0,0,1],[1,1,1,0,1],[1,0,0,0,1],[1,1,1,1,1]]</code></pre><p>Because of the edge-cases for tiny spirals, the size will be at least 5.</p>
<p>General rule-of-a-thumb is, that the snake made with &apos;1&apos; cannot touch to itself.</p>

### Solution