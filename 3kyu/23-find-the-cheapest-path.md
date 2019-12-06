### Problem:
<p><em>You should be familiar with the &quot;Find the shortest path&quot; problem. But what if moving to a neighboring coordinate counted not as</em> <code>1</code> <em>step but as</em> <code>N</code> *steps? * </p>
<hr>
<p><strong>INSTRUCTIONS</strong>  </p>
<p>Your task is to find the path through the <em>field</em> which has the lowest <em>cost</em> to go through.  </p>
<p>As input you will receive:<br>1) a <code>toll_map</code> matrix (as variable <code>t</code>) which holds data about how <em>expensive</em> it is to go through the given field coordinates<br>2) a <code>start</code> coordinate (tuple) which holds information about your starting position<br>3) a <code>finish</code> coordinate (tuple) which holds information about the position you have to get to  </p>
<p>As output you should return:<br>1) the directions list</p>
<hr>
<p><strong>EXAMPLE</strong>  </p>
<pre><code>INPUT:

toll_map  |  start  |  finish
          |         |
[         |         |
 [1,9,1], |  (0,0)  |  (0,2)
 [2,9,1], |         |
 [2,1,1], |         |
]         |         |



OUTPUT:

[&quot;down&quot;, &quot;down&quot;, &quot;right&quot;, &quot;right&quot;, &quot;up&quot;, &quot;up&quot;]</code></pre><hr>
<p><strong>CLARIFICATIONS</strong>  </p>
<p>1) the <code>start</code> and <code>finish</code> tuples have the <code>(x, y)</code> format which means <code>start = (x_1, y_1)</code> and <code>finish = (x_2, y_2)</code>, <code>start_pos = field[x_1][y_1]</code> and <code>finish_pos = field[x_2][y_2]</code><br>2) the total <em>cost</em> is increased after <strong>leaving</strong> the matrix coordinate, not <strong>entering</strong> it<br>3) the <em>field</em> will be rectangular, not necessarily a square<br>4) the <em>field</em> will always be of correct shape<br>5) the actual tests will check <code>total_cost</code> based on your returned directions list, not the directions themselves, so you shouldn&apos;t worry about having multiple possible solutions</p>

### Solution