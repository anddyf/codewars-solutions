### Problem:
<p>Given the node object:</p>
<pre><code>Node:
  val: &lt;int&gt;,
  left: &lt;Node&gt; or null,
  right: &lt;Node&gt; or null</code></pre><p>write a function <code>compare(a, b)</code> which compares the two trees defined by Nodes a and b and returns <code>true</code> if they are equal in structure and in value and <code>false</code> otherwise.</p>
<p>Examples:</p>
<pre><code>1       1
| \     | \
2  3    2  3
=&gt; true

1       1
| \     | \
3  3    2  3
=&gt; false (values not the same 2 != 3)

1       1
| \     |
2  3    2
        |
        3
=&gt; false (structure not the same)
</code></pre>
### Solution