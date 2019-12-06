### Problem:
<p>#Rotate a square matrix like a vortex</p>
<p>Your task is to rotate a square matrix of numbers like a vortex. </p>
<pre><code>In most vortices, the fluid flow velocity is greatest next to its axis and decreases in inverse proportion to the distance from the axis.</code></pre><p>So the rotation speed increases with every ring nearer to the middle.</p>
<p>For this kata this means, that the outer &quot;ring&quot; of the matrix rotates one step. The next ring rotates two steps. The next ring rotates three steps. And so on...</p>
<p>The rotation is always &quot;to the left&quot;, so against clockwise!<br></p>
<p>An example:</p>
<pre><code>The given matrix:
5 3 6 1
5 8 7 4
1 2 4 3
3 1 2 2

First step:
The outer ring is rotated once to the left.
5 3 6 1  -&gt;  1 4 3 2
5 8 7 4  -&gt;  6 8 7 2
1 2 4 3  -&gt;  3 2 4 1
3 1 2 2  -&gt;  5 5 1 3

Second step:
The second ring is rotated twice to the left.
8 7 -&gt; 7 4 -&gt; 4 2
2 4 -&gt; 8 2 -&gt; 7 8 

In the whole square the second step looks like this:
1 4 3 2  -&gt;  1 4 3 2
6 8 7 2  -&gt;  6 4 2 2
3 2 4 1  -&gt;  3 7 8 1
5 5 1 3  -&gt;  5 5 1 3

No more rings. So the result is clear.
</code></pre><p>#Task
Create the method for rotating like a vortex.
The method has one input parameter:<br>
The sqaure matrix as an array of arrays <br></p>
<p>Your method have to return the rotated matrix. You must not change the input array! Create a new array for the output.</p>
<p>The square matrix will always be at least 1x1 and at most 20x20 and of course the array will never be null.
<br><br><br>
Have fun coding it and please don&apos;t forget to vote and rank this kata! :-) </p>
<p>I have also created other katas. Take a look if you enjoyed this kata!</p>

### Solution