### Problem:
<p>We need a function, closest_points() that may give an accurate result to find the closest pair or pairs of points that are contained in square areas of size l. The function will receive a list of variable number of points in a list (each point represented with cartesian coordinates) and should display the results in the following way <code>[(1), (2), (3)]</code></p>
<p>(1) - Number of points received</p>
<p>(2) - Pair or pairs of closest points in a sorted list of tuples (each tuple having the cartesian coordinates (x, y) of the encountered closest points)</p>
<p>(3) - the distance of this pair or these pairs of found closest points, that is the minimal distance between every possible pair of the given of points. This value will be expressed as a float with at most, 4 decimal digits (rounded result).</p>
<p>Let&apos;s see some cases.</p>
<pre><code class="language-python">l (size of square containing the points) = 10
list_points = [(5, 10), (3, 6), (1, 4), (6, 2), (4, 3), (0, 4), (10, 3), (9, 1)]
closest_points(list_points) ---------&gt; [8, [[(0, 4), (1, 4)]], 1.0] # 8 given points, [(0, 4), (1, 4)] is the pair of points with minimal distance (1.0)

l = 20
list_points = [(8, 14), (16, 5), (5, 5), (15, 18), (17, 10), (0, 14), (4, 15), (19, 17), (13, 16), (10, 18), (14, 13), (12, 14), (11, 15), (7, 15)]
closest_points(list_points) -------&gt; [14, [[(7, 15), (8, 14)], [(11, 15), (12, 14)]], 1.4142]
/// Now list_points has 14 points, we can find two pairs of points [(7, 15), (8, 14)] and [(11, 15), (12, 14)] that have the minimal possible distance, 1.4142</code></pre>
<p>Your code should be able to process lists of points up to 1000 length in the allowed runtime for tests.</p>
<p>Happy coding!!</p>

### Solution