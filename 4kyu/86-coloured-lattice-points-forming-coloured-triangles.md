### Problem:
<p><font size="2" face="Arial"><i><b><u>Note for Java users:</u></b> Due to type checking in Java, inputs and outputs are formated quite differently in this language. See the footnotes of the description.</i></font></p>
<hr>
<br>
<p><font size="2" face="Arial"><b>You have the following lattice points with their corresponding coordinates and each one with an specific colour.</b></font></p>

<pre><code>Point   [x ,  y]     Colour
----------------------------
  A     [ 3,  4]     Blue
  B     [-7, -1]     Red
  C     [ 7, -6]     Yellow
  D     [ 2,  5]     Yellow
  E     [ 1, -5]     Red
  F     [-1,  4]     Red
  G     [ 1,  7]     Red
  H     [-3,  5]     Red
  I     [-3, -5]     Blue
  J     [ 4,  1]     Blue</code></pre><p><font size="2" face="Arial"><b>We want to count the triangles that have the three vertices with the same colour. The following picture shows the distribution of the points in the plane with the required triangles.</b></font></p>

<p><a href="http://imgur.com/sP0l1i1" target="_blank"><img src="http://i.imgur.com/sP0l1i1.png" title="source: imgur.com"></a></p>
<p><font size="2" face="Arial"><b>The input that we will have for the field of lattice points described above is:</b></font></p>

<pre><code>[[[3, -4], &quot;blue&quot;],  [[-7, -1], &quot;red&quot;], [[7, -6], &quot;yellow&quot;], [[2, 5], &quot;yellow&quot;],
 [[1, -5], &quot;red&quot;],   [[-1, 4], &quot;red&quot;],  [[1, 7], &quot;red&quot;],     [[-3, 5], &quot;red&quot;], 
 [[-3, -5], &quot;blue&quot;], [[4, 1], &quot;blue&quot;] ]</code></pre><p><font size="2" face="Arial"><b>We see the following result from it:</b></font></p>

<pre><code>Colour   Amount of Triangles       Triangles
Yellow         0                    -------
Blue           1                      AIJ
Red            10                   BEF,BEG,BEH,BFG,BFH,BGH,EFG,EFH,EHG,FGH</code></pre><p><font size="2" face="Arial"><b>As we have 5 different points in red and each combination of 3 points that are not aligned.</b></font></p>

<p><font size="2" face="Arial"><b>We need a code that may give us the following information in order:</b></font></p>

<pre><code>1) Total given points
2) Total number of colours
3) Total number of possible triangles
4) and 5) The colour (or colours, sorted alphabetically) with the highest amount of triangles</code></pre><p><font size="2" face="Arial"><b>In Python our function will work like:</b></font></p>

<pre><code>[10, 3, 11, [&quot;red&quot;,10]]) == count_col_triang([[[3, -4], &quot;blue&quot;],  [[-7, -1], &quot;red&quot;], [[7, -6], &quot;yellow&quot;], [[2, 5], &quot;yellow&quot;], 
                                              [[1, -5], &quot;red&quot;],   [[-1, 4], &quot;red&quot;],  [[1, 7], &quot;red&quot;],     [[-3, 5], &quot;red&quot;],
                                              [[-3, -5], &quot;blue&quot;], [[4, 1], &quot;blue&quot;] ])</code></pre><p><font size="2" face="Arial"><b>In the following case we have some points that are aligned and we have less triangles that can be formed:</b></font></p>

<pre><code>[10, 3, 7, [&quot;red&quot;, 6]] == count_col_triang([[[3, -4], &quot;blue&quot;],  [[-7, -1], &quot;red&quot;], [[7, -6], &quot;yellow&quot;], [[2, 5], &quot;yellow&quot;],
                                            [[1, -5], &quot;red&quot;],   [[1, 1], &quot;red&quot;],   [[1, 7], &quot;red&quot;],     [[1, 4], &quot;red&quot;], 
                                            [[-3, -5], &quot;blue&quot;], [[4, 1], &quot;blue&quot;] ])</code></pre><p><font size="2" face="Arial"><b>Just to see the change with the previous case we have this:</b></font></p>
<a href="http://imgur.com/cCgO7ql" target="_blank"><img src="http://i.imgur.com/cCgO7ql.png" title="source: imgur.com"></a>

<p><font size="2" face="Arial"><b>In the special case that the list of points does not generate an even single triangle, the output will be like this case:</b></font></p>

<pre><code>[9, 3, 0, []] == count_col_triang([[[1, -2], &quot;red&quot;], [[7, -6], &quot;yellow&quot;], [[2, 5], &quot;yellow&quot;], [[1, -5], &quot;red&quot;],
                                  [[1, 1], &quot;red&quot;],   [[1, 7], &quot;red&quot;],     [[1, 4], &quot;red&quot;],    [[-3, -5], &quot;blue&quot;], 
                                  [[4, 1], &quot;blue&quot;] ])</code></pre><p><font size="2" face="Arial"><b>It will be this case:</b></font></p>

<p><a href="http://imgur.com/VB7t7Ij" target="_blank"><img src="http://i.imgur.com/VB7t7Ij.png" title="source: imgur.com"></a></p>
<p><font size="2" face="Arial"><b>If in the result we have two or more colours with the same maximum amount of triangles, the last list should be like (e.g)</b></font></p>

<pre><code>[35, 6, 35, [&quot;blue&quot;, &quot;red&quot;, &quot;yellow&quot;, 23]]     # having the names of the colours sorted alphabetically</code></pre><p><font size="2" face="Arial"><b>For the condition of three algined points A, B, C, you should know that the the following determinant should be 0.</b></font></p>

<pre><code> | xA    yA    1|
 | xB    yB    1|    = 0
 | xC    yC    1|
</code></pre><p><font size="2" face="Arial"><b>Assumptions:</b></font></p>

<ul>
<li><p><font size="2" face="Arial"><b>In the list you have unique points, so a point can have only one colour.</b></font></p>
</li>
<li><p><font size="2" face="Arial"><b>All the inputs are valid</b></font></p>

</li>
</ul>
<p><font size="2" face="Arial"><b>Enjoy it!</b></font></p>
<br>
<hr>
<br>
<p><font size="2" face="Arial"><b><i><u><font size="3"><b>For java users:</b></font></u></i><b><br><br>Two immutable objects, ColouredPoint and TriangleResult, have been designed for you in the preloaded part. You will receive inputs as lists of ColouredPoint objects and will return a TriangleResult object. For the last one, you may note the organization of the arguments of the constructor which differs a bit from the description above.</b></b></font></p><b>

<p><font size="2" face="Arial"><b>You may find below the signatures of the available methods of these objects:</b></font></p>

<pre><code>class ColouredPoint {
  public ColouredPoint(final int[] pos, final String color) 
  public int[]  getPosition()
  public String getColour()  
  @Override public boolean equals(Object other) 
  @Override public int hashCode()
  @Override public String toString()     // String representation formated as &quot;[[x, y], red]&quot;
}

class TriangleResult {
  public TriangleResult()
  public TriangleResult(final int nGivenPoints, final int nGivenColours, final int nTriangles, final List&lt;String&gt; colours, final int maxFromColour)
  @Override public boolean equals(Object other) 
  @Override public int hashCode()
  @Override public String toString()     // String representation formated as &quot;[nGivenPoints, nGivenColours, nTriangles, [red, blue], maxFromColour]&quot;
}</code></pre></b>
### Solution