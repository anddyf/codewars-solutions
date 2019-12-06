### Problem:
<p>In graph theory, a graph is a collection of nodes with connections between them.
Any node can be connected to any other node exactly once, and can be connected to no nodes, to some nodes, or to every other node.
Nodes cannot be connected to themselves
A path through a graph is a sequence of nodes, with every node connected to the node following and preceding it.
A closed path is a path which starts and ends at the same node.</p>
<p>An open path:</p>
<pre><code>1 -&gt; 2 -&gt; 3</code></pre><p>a closed path:</p>
<pre><code>1 -&gt; 2 -&gt; 3 -&gt; 1</code></pre><p>A graph is connected if there is a path from every node to every other node.
A graph is a tree if it is connected and there are no closed paths.</p>
<p>Your job is to write a function &apos;isTree&apos;, which returns true if a graph is a tree, and false if it is not a tree.</p>
<p>Graphs will be given as an array with each item being an array of integers which are the nodes that node is connected to.</p>
<p>For example, this graph:</p>
<pre><code>0--1
|  |
2--3--4</code></pre><p>has array:</p>
<pre><code>[[1,2], [0,3], [0,3], [1,2,4], [3]]</code></pre><p>Note that it is also not a tree, because it contains closed path:</p>
<pre><code>0-&gt;1-&gt;3-&gt;2-&gt;0</code></pre><p>A node with no connections is an empty array
Note that if node 0 is connected to node 1, node 1 is also connected to node 0. This will always be true.
The order in which each connection is listed for each node also does not matter.</p>
<p>Good luck!</p>

### Solution