### Problem:
<h2 id="bezier-curves">Bezier curves</h2>
<p>When a shape is described using vector graphics, its outline is often described as a sequence of linear, quadratic, and cubic Bezier curves. You can read about <a href="https://en.wikipedia.org/wiki/B%C3%A9zier_curve" target="_blank">B&#xE9;zier curves</a> on Wikipedia. </p>
<p>You don&apos;t need to know much about Bezier curves to solve this kata. Just know that the equations of the linear, quadratic, and cubic curves are given by (respectively):</p>
<ol>
<li><code>P(t) = (1 - t) * P0 + t * P1</code></li>
<li><code>P(t) = (1 - t)**2 * P0 + 2 * (1 - t) * t * P1 + t**2 * P2</code></li>
<li><code>P(t) = (1 - t)**3 * P0 + 3 * (1 - t)**2 * t * P1 + 3 * (1 - t) * t**2 * P2 + t**3 * P3</code></li>
</ol>
<p>The points <code>P0</code>, <code>P1</code>, <code>P2</code>, <code>P3</code> are called the control points of the curve, and <code>t</code> is a variable, which, when taking values from <code>0</code> to <code>1</code>, will cause <code>P(t)</code> to trace the curve.</p>
<p>This should suffice to implement the <code>point_at(t)</code> method of the classes you are to implement.</p>
<p>To implement the <code>sub_segment(t)</code> method, see, in particular, the section on Constructing B&#xE9;zier Curves of the above referenced Wikipedia article.</p>
<p>This section shows animations of how the B&#xE9;zier curves grow. The animations are showing longer and longer subsegments, hence showing how subsegments are constructed. If you look closely at the quad curve animation, you can see how the control points move from starting all at P0 and ending up at P0, P1 and P2 respectively. Now look closely at the animation of the cubic curve. See how the control points of the growing subsection start at P0 and end up at P0, P1, P2, and P3. No need to read anything, just look. At the end of the referenced subsection there is a link to de Casteljau&apos;s algorithm, which you might find helpful, but I wouldn&apos;t go there. Just look carefully at the animations.</p>
<p>In this kata, you are asked to implement a class for each of the linear, quadratic, and cubic B&#xE9;zier curves. These classes must extend the following abstract base class and implement the abstract methods:</p>
<pre><code class="language-Python"><span class="hljs-keyword">from</span> abc <span class="hljs-keyword">import</span> ABCMeta, abstractmethod


<span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">Segment</span><span class="hljs-params">(metaclass=ABCMeta)</span>:</span>

<span class="hljs-meta">    @property</span>
<span class="hljs-meta">    @abstractmethod</span>
    <span class="hljs-function"><span class="hljs-keyword">def</span> <span class="hljs-title">control_points</span><span class="hljs-params">(self)</span>:</span>
        <span class="hljs-keyword">pass</span>

<span class="hljs-meta">    @abstractmethod</span>
    <span class="hljs-function"><span class="hljs-keyword">def</span> <span class="hljs-title">point_at</span><span class="hljs-params">(self, t)</span>:</span>
        <span class="hljs-keyword">pass</span>

<span class="hljs-meta">    @abstractmethod</span>
    <span class="hljs-function"><span class="hljs-keyword">def</span> <span class="hljs-title">sub_segment</span><span class="hljs-params">(self, t)</span>:</span>
        <span class="hljs-keyword">pass</span></code></pre>
<p><code>control_points</code> is a property that returns the coordinates of the points that define the curve. Since the linear curve has two control points (the start and end of the segment), <code>control_points</code> will hold 4 floats, which are the x- and y-coordinates of the first point followed by the x- and y-coordinates of the second point.  For the quadratic and cubic curves there are 6 and 8 control points respectively.</p>
<p>The method <code>point_at(t)</code> should return the point obtained when inserting <code>t</code> in the equation for the curve. This method will be tested for values of <code>t</code> in the interval <code>[0, 1]</code> only (although it&apos;s possible to extrapolate the curve). </p>
<p>The method <code>sub_segment(t_0)</code> should return the curve that starts at the first point and ends at the point returned by <code>point_at(t_0)</code> and follows the curve of the object that this method is invoked on otherwise. For example, if <code>quad</code> is a quadratic curve, then <code>quad.sub_segment(t_0)</code> is a quadratic curve that starts at <code>quad</code>&apos;s first point and ends at <code>quad.point_at(t_0)</code> and follows <code>quad</code>&apos;s curve. More precisely, </p>
<pre><code>quad.point_at(t_0 * t) == quad.sub_segment(t_0).point_at(t)</code></pre><p>for all values of <code>t</code> in the interval <code>[0, 1]</code>.</p>

### Solution