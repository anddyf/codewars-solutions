### Problem:
<p><strong>Definition:</strong> According to Wikipedia, a <a href="https://en.wikipedia.org/wiki/Binary_tree#Types_of_binary_trees" target="_blank">complete binary tree</a> is a binary tree <em>&quot;where every level, except possibly the last, is completely filled, and all nodes in the last level are as far left as possible.&quot;</em></p>
<p>The Wikipedia page referenced above also mentions that <em>&quot;Binary trees can also be stored in breadth-first order as an implicit data structure in arrays, and if the tree is a complete binary tree, this method wastes no space.&quot;</em></p>
<p>Your task is to write a method (or function) that takes an array (or list, depending on language) of integers and, assuming that the array is ordered according to an <em>in-order</em> traversal of a complete binary tree, returns an array that contains the values of the tree in breadth-first order.</p>
<p><strong>Example 1:</strong>
Let the input array be <code>[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]</code>. This array contains the values of the following complete binary tree. </p>
<pre><code>          _ 7_
        /      \
       4        9
     /   \     / \
   2      6   8   10
  / \     /
 1   3   5</code></pre><p>In this example, the input array happens to be sorted, but that is <em>not</em> a requirement.</p>
<p><strong>Output 1:</strong> The output of the function shall be an array containing the values of the nodes of the binary tree read top-to-bottom, left-to-right. In this example, the returned array should be:</p>
<p><code>[7, 4, 9, 2, 6, 8, 10, 1, 3, 5]</code></p>
<p><strong>Example 2:</strong>
Let the input array be <code>[1, 2, 2, 6, 7, 5]</code>. This array contains the values of the following complete binary tree. </p>
<pre><code>        6
      /   \
    2       5
   / \     /
  1   2   7
</code></pre><p>Note that an in-order traversal of this tree produces the input array.</p>
<p><strong>Output 2:</strong> The output of the function shall be an array containing the values of the nodes of the binary tree read top-to-bottom, left-to-right. In this example, the returned array should be:</p>
<p><code>[6, 2, 5, 1, 2, 7]</code></p>

### Solution