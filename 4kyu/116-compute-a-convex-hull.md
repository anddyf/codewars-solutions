### Problem:
<h3 id="the-problem">The Problem</h3>
<p>Consider a flat board with pegs sticking out of one side. If you stretched a rubber band across the outermost pegs what is the set of pegs such that all other pegs are contained within the shape formed by the rubber band?</p>
<p><img src="https://upload.wikimedia.org/wikipedia/commons/b/bc/ConvexHull.png" alt="alt text"></p>
<p>More specifically, for this kata you will be given a list of points represented as <code>[x,y]</code> co-ordinates. Your aim will be to return a sublist containing points that form the perimeter of a polygon that encloses all other points contained within the original list.</p>
<h3 id="notes">Notes:</h3>
<p>The tests may include duplicate and/or co-linear points. Co-linear points are a set of points which fall on the same straight line. Neither should be included in your returned sublist</p>
<p>For simplicity, there will always be at least 3 points</p>
<h3 id="help">Help:</h3>
<p>Check out wikipedia&apos;s page on <a href="https://en.wikipedia.org/wiki/Convex_hull" target="_blank">convex hulls</a></p>
<p>Note for python users: <code>scipy</code> module has been disabled.</p>

### Solution