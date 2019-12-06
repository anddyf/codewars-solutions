### Problem:
<h2 id="do-you-know-how-to-make-a-spiral-lets-test-it">Do you know how to make a spiral? Let&apos;s test it!</h2>
<hr>
<p><em>Classic definition: A spiral is a curve which emanates from a central point, getting progressively farther away as it revolves around the point.</em></p>
<hr>
<p>Your objective is to complete a function <code>createSpiral(N)</code> that receives an integer <code>N</code> and returns an <code>NxN</code> two-dimensional array with numbers <code>1</code> through <code>NxN</code> represented as a clockwise spiral.</p>
<p>Return an empty array if <code>N &lt; 1</code> or <code>N</code> is not int / number</p>
<p>Examples: </p>
<p><code>N = 3</code>
<code>Output: [[1,2,3],[8,9,4],[7,6,5]]</code></p>
<pre><code>1    2    3    
8    9    4    
7    6    5    </code></pre><p><code>N = 4</code>
<code>Output: [[1,2,3,4],[12,13,14,5],[11,16,15,6],[10,9,8,7]]</code></p>
<pre><code>1   2   3   4
12  13  14  5
11  16  15  6
10  9   8   7</code></pre><p><code>N = 5</code>
<code>Output: [[1,2,3,4,5],[16,17,18,19,6],[15,24,25,20,7],[14,23,22,21,8],[13,12,11,10,9]]</code></p>
<pre><code>1   2   3   4   5    
16  17  18  19  6    
15  24  25  20  7    
14  23  22  21  8    
13  12  11  10  9</code></pre>
### Solution