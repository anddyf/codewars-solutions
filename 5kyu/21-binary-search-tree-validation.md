### Problem:
<p>A <a href="https://en.wikipedia.org/wiki/Binary_search_tree" target="_blank">binary search tree</a> is a binary tree that is ordered. This means that if you were to convert the tree to an array using an in-order traversal, the array would be in sorted order. The benefit gained by this ordering is that when the tree is balanced, searching is a logarithmic time operation, since each node you look at that isn&apos;t the one you&apos;re searching for lets you discard half of the tree.</p>
<p>If you haven&apos;t worked with binary trees before or don&apos;t understand what a traversal is, you can learn more about that here: <a href="https://www.codewars.com/kata/binary-tree-traversal" target="_blank">https://www.codewars.com/kata/binary-tree-traversal</a>.</p>
<p>In this kata, you will write a function that will validate that a given binary tree is a binary search tree. The sort order is not predefined so it should work with either.</p>
<p>These are valid binary search trees:</p>
<pre><code>    5
   / \
  2   7
 / \   \
1   3   9


  7
 / \
9   2</code></pre><p>while these are not:</p>
<pre><code>  1
 / \
2   3


  5
 / \
2   9
 \
  7</code></pre><p>There are several different approaches you can take to solve this kata. If you&apos;re not as comfortable with recursion I&apos;d recommend practicing that.</p>
<p>Note: no test case tree will contain duplicate numbers.</p>

### Solution