### Problem:
<p>The drawing shows 6 squares the sides of which have a length of 1, 1, 2, 3, 5, 8.
It&apos;s easy to see that the sum of the perimeters of these squares is :
<code>4 * (1 + 1 + 2 + 3 + 5 + 8) = 4 * 20 = 80</code>                                        </p>
<p>Could you give the sum of the perimeters of all the squares in a rectangle when there are n + 1 squares disposed in the same manner as in the drawing: </p>
<p><img src="http://i.imgur.com/EYcuB1wm.jpg" alt="alternative text"></p>
<p>#Hint: 
See Fibonacci sequence</p>
<p>#Ref:
<a href="http://oeis.org/A000045" target="_blank">http://oeis.org/A000045</a></p>
<p>The function perimeter has for parameter n where n + 1 is the number of squares (they are numbered from 0 to n) and returns the total perimeter of all the squares.</p>
<pre><code>perimeter(5)  should return 80
perimeter(7)  should return 216</code></pre>
### Solution