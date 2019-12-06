### Problem:
<p>For a new 3D game that will be released, a team of programmers needs an easy function. (Then it will be processed as a method in a Class, forget this concept for Ruby)</p>
<p>We have an sphere with center <b>O</b>, having in the space the coordinates <code>[&#x3B1;, &#x3B2;, &#x3B3;]</code> and radius <code>r</code>  and a list of points, <code>points_list</code>, each one with coordinates <code>[x, y, z]</code>. Select the biggest triangle (or triangles) that has (have) all its (their) 3 vertice(s) as interior points of the sphere (not even in the sphere contour). You should consider that a point P is interior if its distance to center O, d, is such that:</p>
<code>
d &lt; r
</code>
<span style="margin: 0 5px 0 10px">and </span>
<code>
(d - r) / r| &gt; 10<sup>-10</sup>
</code>

<p>Let&apos;s see the situation with the following points in the image posted below:</p>
<pre><code class="language-python">A = [<span class="hljs-number">1</span>,<span class="hljs-number">2</span>,<span class="hljs-number">-4</span>]; B = [<span class="hljs-number">-3</span>, <span class="hljs-number">2</span>, <span class="hljs-number">4</span>]; C = [<span class="hljs-number">7</span>, <span class="hljs-number">8</span>, <span class="hljs-number">-4</span>]; D = [<span class="hljs-number">2</span>, <span class="hljs-number">3</span>, <span class="hljs-number">5</span>]; E = [<span class="hljs-number">-2</span>, <span class="hljs-number">-1</span>, <span class="hljs-number">1</span>]</code></pre>
<p>The sphere has the following features:</p>
<pre><code>O = [1, 2, -2] (Center of the sphere)
radius = 8</code></pre><p><a href="http://imgur.com/dtZGfIN" target="_blank"><img src="http://i.imgur.com/dtZGfIN.gif" title="source: imgur.com"></a></p>
<p>As C is the only exterior point of the sphere, the possible triangles that have their vertices interior to the sphere are: </p>
<pre><code>ABD, ABE, ADE, BDE</code></pre><p>Let&apos;s see which is the biggest one:</p>
<pre><code class="language-python">Triangle    Triangle <span class="hljs-keyword">with</span> its points         Area
ABD        [[<span class="hljs-number">1</span>,<span class="hljs-number">2</span>,<span class="hljs-number">-4</span>],[<span class="hljs-number">-3</span>,<span class="hljs-number">2</span>,<span class="hljs-number">4</span>],[<span class="hljs-number">2</span>,<span class="hljs-number">3</span>,<span class="hljs-number">5</span>]]    <span class="hljs-number">22.44994432064</span>
ABE        [[<span class="hljs-number">1</span>,<span class="hljs-number">2</span>,<span class="hljs-number">-4</span>],[<span class="hljs-number">-3</span>,<span class="hljs-number">2</span>,<span class="hljs-number">4</span>],[<span class="hljs-number">-2</span>,<span class="hljs-number">-1</span>,<span class="hljs-number">1</span>]]  <span class="hljs-number">13.56465996625</span>
ADE        [[<span class="hljs-number">1</span>,<span class="hljs-number">2</span>,<span class="hljs-number">-4</span>],[<span class="hljs-number">2</span>,<span class="hljs-number">3</span>,<span class="hljs-number">5</span>],[<span class="hljs-number">-2</span>,<span class="hljs-number">-1</span>,<span class="hljs-number">1</span>]]   <span class="hljs-number">22.62741699796</span> &lt;---- biggest triangle
BDE        [[<span class="hljs-number">-3</span>,<span class="hljs-number">2</span>,<span class="hljs-number">4</span>],[<span class="hljs-number">2</span>,<span class="hljs-number">3</span>,<span class="hljs-number">5</span>],[<span class="hljs-number">-2</span>,<span class="hljs-number">-1</span>,<span class="hljs-number">1</span>]]   <span class="hljs-number">11.31370849898</span></code></pre>
<p>Our function <code>biggest_triang_int()</code> (javascript: <code>biggestTriangInt()</code>should output for this case:</p>
<pre><code class="language-python">points_list = [[<span class="hljs-number">1</span>,<span class="hljs-number">2</span>,<span class="hljs-number">-4</span>], [<span class="hljs-number">-3</span>, <span class="hljs-number">2</span>, <span class="hljs-number">4</span>], [<span class="hljs-number">7</span>, <span class="hljs-number">8</span>, <span class="hljs-number">-4</span>], [<span class="hljs-number">2</span>, <span class="hljs-number">3</span>, <span class="hljs-number">5</span>], [<span class="hljs-number">-2</span>, <span class="hljs-number">-1</span>, <span class="hljs-number">1</span>]]
sphere_center = [<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">-2</span>]
radius = <span class="hljs-number">8</span>
biggest_triang_int(points_list, sphere_center, radius) == [<span class="hljs-number">4</span>, <span class="hljs-number">22.62741699796</span>,  [[<span class="hljs-number">1</span>,<span class="hljs-number">2</span>,<span class="hljs-number">-4</span>],[<span class="hljs-number">2</span>,<span class="hljs-number">3</span>,<span class="hljs-number">5</span>],[<span class="hljs-number">-2</span>,<span class="hljs-number">-1</span>,<span class="hljs-number">1</span>]]]</code></pre>
<p>That means that with the given points list we may generate 4 triangles with all their vertices as interior points of the sphere, the biggest triangle has an area of 22.62741699796 (the units does not matter and the values for the area should not be rounded) and finally, there is only one triangle with this maximum value.
Every triangle should be output having the same order of its vertices than in the given list of points. B = [-3,2,4], comes before than D =[2,3,5] and the last one E = [-2,-1,1]
If in the result we have only one triangle, the function should output a list of three points.</p>
<p>Let&apos;see the next case:</p>
<pre><code class="language-python">points_list = [[<span class="hljs-number">1</span>,<span class="hljs-number">2</span>,<span class="hljs-number">-4</span>], [<span class="hljs-number">-3</span>, <span class="hljs-number">2</span>, <span class="hljs-number">4</span>], [<span class="hljs-number">7</span>, <span class="hljs-number">8</span>, <span class="hljs-number">-4</span>], [<span class="hljs-number">2</span>, <span class="hljs-number">3</span>, <span class="hljs-number">5</span>], [<span class="hljs-number">-2</span>, <span class="hljs-number">-1</span>, <span class="hljs-number">1</span>],
              [<span class="hljs-number">3</span>, <span class="hljs-number">2</span>, <span class="hljs-number">6</span>], [<span class="hljs-number">1</span>, <span class="hljs-number">4</span>, <span class="hljs-number">0</span>], [<span class="hljs-number">-4</span>, <span class="hljs-number">-5</span>, <span class="hljs-number">-6</span>], [<span class="hljs-number">4</span>, <span class="hljs-number">5</span>, <span class="hljs-number">6</span>], [<span class="hljs-number">-2</span>, <span class="hljs-number">-3</span>, <span class="hljs-number">-5</span>],
              [<span class="hljs-number">-1</span>, <span class="hljs-number">-2</span>, <span class="hljs-number">4</span>], [<span class="hljs-number">-3</span>, <span class="hljs-number">-2</span>, <span class="hljs-number">-6</span>], [<span class="hljs-number">-1</span>, <span class="hljs-number">-4</span>, <span class="hljs-number">0</span>], [<span class="hljs-number">2</span>, <span class="hljs-number">1</span>, <span class="hljs-number">-1</span>]]
sphere_center = [<span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>]
radius = <span class="hljs-number">8</span>
biggest_triang_int(points_list, sphere_center, radius) == [<span class="hljs-number">165</span>, <span class="hljs-number">33.645207682521445</span>, [[[<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">-4</span>], [<span class="hljs-number">3</span>, <span class="hljs-number">2</span>, <span class="hljs-number">6</span>], [<span class="hljs-number">-1</span>, <span class="hljs-number">-4</span>, <span class="hljs-number">0</span>]], [[<span class="hljs-number">1</span>, <span class="hljs-number">4</span>, <span class="hljs-number">0</span>], [<span class="hljs-number">-1</span>, <span class="hljs-number">-2</span>, <span class="hljs-number">4</span>], [<span class="hljs-number">-3</span>, <span class="hljs-number">-2</span>, <span class="hljs-number">-6</span>]]]]</code></pre>
<p>Now there are a total of 165 triangles with their vertices in the sphere, the biggest triangle has an area of 33.645207682521445 but we have two triangles with this area value. The vertices of each triangle respect the order of the points list as we expressed before but the additional detail is that the triangles are sorted by the values of the coordinates of their points. Let&apos;s compare the coordinates of the first point</p>
<pre><code>First point   x  y  z
Triangle1     1  2 -4  &lt;--- this triangle is first in the result
Triangle2     1  4  0
              |  |
              |  y1 &lt; y2 (2, 4)
              |
              x1 = x2     (1 = 1)</code></pre><p>In the case that all the given points are exterior to the sphere the function should output the empty list.</p>
<p>The points in the list are all valid and each one occurs once.</p>
<p>Remember that if three points are collinear do not form a triangle. For practical purposes you may consider that if the area of a triangle is lower than 10<sup>-8</sup>, the points are aligned.</p>
<p>Enjoy it!</p>

### Solution