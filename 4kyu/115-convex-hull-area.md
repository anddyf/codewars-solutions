### Problem:
<p>Let&apos;s say you have a bunch of points, and you want to round them all up and calculate the area of the smallest polygon containing all of the points (nevermind why, you just want a challenge). What you&apos;re looking for is the area of the <em>convex hull</em> of these points. Here is an example, delimited in blue :</p>
<p><a href="https://en.wikipedia.org/wiki/Convex_hull" target="_blank"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/ConvexHull.svg/220px-ConvexHull.svg.png" style="background-color:white"></a></p>
<h2 id="your-task">Your task</h2>
<p>Implement a function that will compute the area covered by the convex hull that can be formed from an array of points, the area being rounded to two decimal places. The points are given as <code>(x,y)</code>, like in an orthonormal coordinates system.</p>
<pre><code class="language-python">points = [(<span class="hljs-number">0</span>, <span class="hljs-number">0</span>), (<span class="hljs-number">0</span>, <span class="hljs-number">3</span>), (<span class="hljs-number">4</span>, <span class="hljs-number">0</span>)]
convex_hull_area(points) == <span class="hljs-number">6.00</span></code></pre>
<pre style="display: none;"><code class="language-java"><span class="hljs-keyword">double</span>[][] points = {{<span class="hljs-number">0</span>, <span class="hljs-number">0</span>}, {<span class="hljs-number">0</span>, <span class="hljs-number">3</span>}, {<span class="hljs-number">4</span>, <span class="hljs-number">0</span>}};
assertEquals(<span class="hljs-number">6</span>, ConvexHull.getArea(points), <span class="hljs-number">1e-14</span>);</code></pre>
<p><em>Note</em> : In Python, the scipy module has a <a href="https://docs.scipy.org/doc/scipy/reference/generated/scipy.spatial.ConvexHull.html" target="_blank">ready made solution</a> for this. Of course, if you use it here, you are lame.</p>
<p><em>P. S.</em> : If you enjoy this kata, you may also like <a href="https://www.codewars.com/kata/compute-a-convex-hull" target="_blank">this one</a>, which asks you to compute a convex hull, without finding its area.</p>

### Solution