### Problem:
<p>GET TO THE CHOPPA! DO IT NOW!</p>
<p>For this kata you must create a function that will find the shortest possible path between two nodes in a 2D grid of nodes.</p>
<p>Details:</p>
<ul>
<li>Your function will take three arguments: a grid of nodes, a start node, and an end node. Your function will return a list of nodes that represent, in order, the path that one must follow to get from the start node to the end node. The path must begin with the start node and end with the end node. No single node should be repeated in the path (ie. no backtracking).</li>
</ul>
<p>In Python :</p>
<pre><code class="language-python"><span class="hljs-function"><span class="hljs-keyword">def</span> <span class="hljs-title">find_shortest_path</span><span class="hljs-params">(grid, start_node, end_node)</span>:</span>
    <span class="hljs-keyword">pass</span></code></pre>
<p>or in Haskell :</p>
<pre><code class="language-haskell"><span class="hljs-title">shortestPath</span> :: <span class="hljs-type">Grid</span> -&gt; <span class="hljs-type">Pos</span> -&gt; <span class="hljs-type">Pos</span> -&gt; <span class="hljs-type">Path</span></code></pre>
<ul>
<li>The grid is a list of lists of nodes. Each node object has a position that indicates where in the grid the node is (it&apos;s indices).</li>
</ul>
<p>In python :</p>
<pre><code class="language-python">node.position.x  <span class="hljs-comment"># 2</span>
node.position.y  <span class="hljs-comment"># 5</span>
node.position  <span class="hljs-comment"># (2,5)</span>
node <span class="hljs-keyword">is</span> grid[<span class="hljs-number">2</span>][<span class="hljs-number">5</span>]  <span class="hljs-comment"># True</span></code></pre>
<p>or in Haskell :</p>
<pre><code class="language-haskell"><span class="hljs-comment">-- The following types are defined in Haskell :</span>
<span class="hljs-class"><span class="hljs-keyword">type</span> <span class="hljs-type">Pos</span> = (<span class="hljs-type">Int</span>,<span class="hljs-type">Int</span>)</span>
<span class="hljs-class"><span class="hljs-keyword">data</span> <span class="hljs-type">Node</span> = <span class="hljs-type">Passable</span> | <span class="hljs-type">NotPassable</span></span>
<span class="hljs-comment">-- A grid is a list of list of nodes, which are Passable / NotPassable</span>
<span class="hljs-class"><span class="hljs-keyword">type</span> <span class="hljs-type">Grid</span> = [[<span class="hljs-type">Node</span>]]</span>
<span class="hljs-class"><span class="hljs-keyword">type</span> <span class="hljs-type">Path</span> = [<span class="hljs-type">Pos</span>]</span></code></pre>
<ul>
<li>Each node may or may not be &apos;passable&apos;. All nodes in a path must be passable. A node that is not passable is effectively a wall that the shortest path must go around.</li>
</ul>
<p>In Python :</p>
<pre><code class="language-python">a_node.passable  <span class="hljs-comment"># True</span></code></pre>
<p>or in Haskell :</p>
<pre><code class="language-haskell">(grid !! y !! x) == <span class="hljs-type">Passable</span> <span class="hljs-comment">-- True</span></code></pre>
<ul>
<li>Diagonal traversals between nodes are NOT allowed in this kata. Your path must move in one of 4 directions at any given step along the path: left, right, up, or down.</li>
<li>Grids will always be rectangular (NxM), but they may or may not be square (NxN).</li>
<li>Your function must return a shortest path for grid widths and heights ranging between 0 and 200. This includes 0x0 and 200x200 grids.</li>
<li>0x0 grids should return an empty path list</li>
<li>When more than one shortest path exists (different paths, all viable, with the same number of steps) then any one of these paths will be considered a correct answer.</li>
<li>Your function must be efficient enough (in terms of time complexity) to pass all the included tests within the allowed timeframe (6 seconds).</li>
<li>In python, for your convenience, a print_grid function exists that you can use to print a grid. You can also use print_grid to visualize a given path on the given grid. The print_grid function has the following signature:</li>
</ul>
<pre><code class="language-python">def print_grid(grid, start_node=None, end_node=None, path=None)
# output without a path
&quot;&quot;&quot;
S0110
01000
01010
00010
0001E
&quot;&quot;&quot;

# output with a path
&quot;&quot;&quot;
S0110
#1###
#1#1#
###1#
0001E
&quot;&quot;&quot;</code></pre>
<p>Good luck!</p>

### Solution