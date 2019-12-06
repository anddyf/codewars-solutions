### Problem:
<h1 id="the-problem">The problem</h1>
<p>In this kata, you&apos;re going write a function called <code>pointInPoly</code> to test if a point is inside a polygon. </p>
<p>Points will be represented as <code>[x,y]</code> arrays.</p>
<p>The polygon will be an array of points which are the polygon&apos;s vertices. The last point in the array connects back to the first point.</p>
<p>You can assume:</p>
<ol>
<li><p>The polygon will be a valid <a href="https://en.wikipedia.org/wiki/Simple_polygon" target="_blank">simple polygon</a>. That is, it will have at least three points, none of its edges will cross each other, and exactly two edges will meet at each vertex.</p>
</li>
<li><p>In the tests, the point will never fall exactly on an edge of the polygon.</p>
</li>
</ol>
<h1 id="testing">Testing</h1>
<p>To help you visualize your test cases, the <code>showAndTest(poly,point,inside)</code> function is preloaded. It draws the polygon and point and then calls <code>Test.expect</code> automatically.</p>
<p>So if you call:</p>
<pre><code>showAndTest([[-5, -5], [5, -5], [0, 5]], [0,0], true)</code></pre><p>then you&apos;ll see:</p>
<div style="background:white; width:140px"><svg width="140" ,="" height="140"><polygon points="20.5,20.5 120.5,20.5 70.5,120.5" stroke="blue" fill="white"/><circle cx="70" cy="70" r="2" fill="green"/></svg></div>

<p>The drawing window is 14x14 units wide and centered at the origin.</p>

### Solution