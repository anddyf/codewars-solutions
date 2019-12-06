### Problem:
<p>You are given a binary tree:</p>
<pre><code class="language-ruby"><span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">TreeNode</span></span>
  <span class="hljs-keyword">attr_accessor</span> <span class="hljs-symbol">:left</span>
  <span class="hljs-keyword">attr_accessor</span> <span class="hljs-symbol">:right</span>
  <span class="hljs-keyword">attr_reader</span> <span class="hljs-symbol">:value</span>
<span class="hljs-keyword">end</span></code></pre>
<pre style="display: none;"><code class="language-haskell"><span class="hljs-class"><span class="hljs-keyword">data</span> <span class="hljs-type">TreeNode</span> a = <span class="hljs-type">TreeNode</span> {
  <span class="hljs-title">left</span>  :: <span class="hljs-type">Maybe</span> (<span class="hljs-type">TreeNode</span> <span class="hljs-title">a</span>),
  <span class="hljs-title">right</span> :: <span class="hljs-type">Maybe</span> (<span class="hljs-type">TreeNode</span> <span class="hljs-title">a</span>),
  <span class="hljs-title">value</span> :: <span class="hljs-title">a</span>
  } <span class="hljs-keyword">deriving</span> <span class="hljs-type">Show</span></span></code></pre>
<pre style="display: none;"><code class="language-python"><span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">Node</span>:</span>
    <span class="hljs-function"><span class="hljs-keyword">def</span> <span class="hljs-title">__init__</span><span class="hljs-params">(self, L, R, n)</span>:</span>
        self.left = L
        self.right = R
        self.value = n</code></pre>
<pre style="display: none;"><code class="language-groovy"><span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">Node</span> {</span>
    Integer value
    Node left
    Node right

    Node(left, right, value) {
        <span class="hljs-keyword">this</span>.value = value
        <span class="hljs-keyword">this</span>.left = left
        <span class="hljs-keyword">this</span>.right = right
    }
}</code></pre>
<pre style="display: none;"><code class="language-csharp"><span class="hljs-keyword">public</span> <span class="hljs-keyword">class</span> <span class="hljs-title">Node</span>
{
    <span class="hljs-keyword">public</span> Node Left;
    <span class="hljs-keyword">public</span> Node Right;
    <span class="hljs-keyword">public</span> <span class="hljs-keyword">int</span> Value;

    <span class="hljs-function"><span class="hljs-keyword">public</span> <span class="hljs-title">Node</span>(<span class="hljs-params">Node l, Node r, <span class="hljs-keyword">int</span> v</span>)</span>
    {
        Left = l;
        Right = r;
        Value = v;
    }
}</code></pre>
<pre style="display: none;"><code class="language-java"><span class="hljs-keyword">public</span> <span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">Node</span> </span>{
  <span class="hljs-keyword">public</span> Node left;
  <span class="hljs-keyword">public</span> Node right;
  <span class="hljs-keyword">public</span> <span class="hljs-keyword">int</span> value;

  <span class="hljs-function"><span class="hljs-keyword">public</span> <span class="hljs-title">Node</span><span class="hljs-params">(Node l, Node r, <span class="hljs-keyword">int</span> v)</span> </span>{
    left = l;
    right = r;
    value = v;
  }
}</code></pre>
<p>Your task is to return the list with elements from tree sorted by levels, which means the root element goes first, then root children (from left to right) are second and third, and so on.</p>
<p>Return empty array if root is <code>nil</code>.</p>
<p>Example 1 - following tree:</p>
<pre><code>                 2
            8        9
          1  3     4   5</code></pre><p>Should return following list:</p>
<pre><code>[2,8,9,1,3,4,5]</code></pre><p>Example 2 - following tree:</p>
<pre><code>                 1
            8        4
              3        5
                         7</code></pre><p>Should return following list:</p>
<pre><code>[1,8,4,3,5,7]</code></pre>
### Solution