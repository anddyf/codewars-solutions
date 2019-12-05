### Problem:
<h1 id="convert-a-linked-list-to-a-string">Convert a linked list to a string</h1>
<h2 id="related-kata">Related Kata</h2>
<p>Although this Kata is not part of an official Series, you may also want to try out <a href="https://www.codewars.com/kata/582c5382f000e535100001a7" target="_blank">Parse a linked list from a string</a> if you enjoyed this Kata.</p>
<h2 id="preloaded">Preloaded</h2>
<p>Preloaded for you is a class, struct or derived data type <code>Node</code> (depending on the language) used to construct linked lists in this Kata:</p>
<pre style="display: none;"><code class="language-c"><span class="hljs-keyword">typedef</span> <span class="hljs-class"><span class="hljs-keyword">struct</span> <span class="hljs-title">node</span> {</span>
  <span class="hljs-keyword">int</span> data;
  <span class="hljs-class"><span class="hljs-keyword">struct</span> <span class="hljs-title">node</span> *<span class="hljs-title">next</span>;</span>
} Node;</code></pre>
<pre><code class="language-php"><span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">Node</span> </span>{
  <span class="hljs-keyword">public</span> $data, $next;
  <span class="hljs-keyword">public</span> <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">__construct</span><span class="hljs-params">($data, $next = NULL)</span> </span>{
    <span class="hljs-keyword">$this</span>-&gt;data = $data;
    <span class="hljs-keyword">$this</span>-&gt;next = $next;
  }
}</code></pre>
<pre style="display: none;"><code class="language-javascript"><span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">Node</span> </span>{
  <span class="hljs-keyword">constructor</span>(data, next = null) {
    <span class="hljs-keyword">this</span>.data = data;
    <span class="hljs-keyword">this</span>.next = next;
  }
}</code></pre>
<pre style="display: none;"><code class="language-csharp"><span class="hljs-keyword">public</span> <span class="hljs-keyword">class</span> <span class="hljs-title">Node</span> {
  <span class="hljs-keyword">public</span> <span class="hljs-keyword">int</span> Data { <span class="hljs-keyword">get</span>; <span class="hljs-keyword">private</span> <span class="hljs-keyword">set</span>; }
  <span class="hljs-keyword">public</span> Node Next { <span class="hljs-keyword">get</span>; <span class="hljs-keyword">private</span> <span class="hljs-keyword">set</span>; }

  <span class="hljs-function"><span class="hljs-keyword">public</span> <span class="hljs-title">Node</span>(<span class="hljs-params"><span class="hljs-keyword">int</span> data, Node next = <span class="hljs-literal">null</span></span>)</span> {
    Data = data;
    Next = next;
  }
}</code></pre>
<pre style="display: none;"><code class="language-python"><span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">Node</span><span class="hljs-params">()</span>:</span>
    <span class="hljs-function"><span class="hljs-keyword">def</span> <span class="hljs-title">__init__</span><span class="hljs-params">(self, data, next = None)</span>:</span>
        self.data = data
        self.next = next</code></pre>
<pre style="display: none;"><code class="language-java"><span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">Node</span> </span>{
    <span class="hljs-keyword">private</span> <span class="hljs-keyword">int</span> data;
    <span class="hljs-keyword">private</span> Node next;

    <span class="hljs-function"><span class="hljs-keyword">public</span> <span class="hljs-title">Node</span><span class="hljs-params">(<span class="hljs-keyword">int</span> data, Node next)</span> </span>{
        <span class="hljs-keyword">this</span>.data = data;
        <span class="hljs-keyword">this</span>.next = next;
    }

    <span class="hljs-function"><span class="hljs-keyword">public</span> <span class="hljs-title">Node</span><span class="hljs-params">(<span class="hljs-keyword">int</span> data)</span> </span>{
        <span class="hljs-keyword">this</span>.data = data;
        <span class="hljs-keyword">this</span>.next = <span class="hljs-keyword">null</span>;
    }

    <span class="hljs-function"><span class="hljs-keyword">public</span> <span class="hljs-keyword">int</span> <span class="hljs-title">getData</span><span class="hljs-params">()</span> </span>{
        <span class="hljs-keyword">return</span> data;
    }

    <span class="hljs-function"><span class="hljs-keyword">public</span> Node <span class="hljs-title">getNext</span><span class="hljs-params">()</span> </span>{
        <span class="hljs-keyword">return</span> next;
    }
}</code></pre>
<pre style="display: none;"><code class="language-ruby"><span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">Node</span></span>
  <span class="hljs-keyword">attr_reader</span> <span class="hljs-symbol">:data</span>, <span class="hljs-symbol">:next_node</span>

  <span class="hljs-function"><span class="hljs-keyword">def</span> <span class="hljs-title">initialize</span><span class="hljs-params">(data, next_node=<span class="hljs-literal">nil</span>)</span></span>
    @data = data
    @next_node = next_node
  <span class="hljs-keyword">end</span>
<span class="hljs-keyword">end</span></code></pre>
<pre style="display: none;"><code class="language-cpp"><span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">Node</span>
{</span>
  <span class="hljs-keyword">public</span>:
    <span class="hljs-keyword">int</span> data;
    Node* next;

  Node(<span class="hljs-keyword">int</span> data, Node* next = <span class="hljs-literal">nullptr</span>)
  {
    <span class="hljs-keyword">this</span>-&gt;data = data;
    <span class="hljs-keyword">this</span>-&gt;next = next;
  }
};</code></pre>
<pre style="display: none;"><code class="language-haskell"><span class="hljs-comment">-- You can use regular lists, which are already singly-linked</span>
<span class="hljs-class"><span class="hljs-keyword">data</span> [a] = [] | a : [a]</span></code></pre>
<pre style="display: none;"><code class="language-objc"><span class="hljs-keyword">typedef</span> <span class="hljs-keyword">struct</span> node {
  <span class="hljs-keyword">int</span> data;
  <span class="hljs-keyword">struct</span> node *next;
} Node;</code></pre>
<pre style="display: none;"><code class="language-fortran"><span class="hljs-keyword">type</span> Node
  <span class="hljs-keyword">integer</span> :: <span class="hljs-keyword">data</span>
  <span class="hljs-keyword">type</span>(Node), <span class="hljs-keyword">pointer</span> :: next
<span class="hljs-keyword">end</span> <span class="hljs-keyword">type</span> Node</code></pre>
<p>If you are attempting this Kata in NASM then note that the code example shown directly above may not be relevant; please refer to the Sample Tests (written in C) for the exact definition of the <code>Node</code> structure.</p>
<h2 id="prerequisites">Prerequisites</h2>
<p>This Kata assumes that you are already familiar with the idea of a linked list.  If you do not know what that is, you may want to read up on <a href="https://en.wikipedia.org/wiki/Linked_list" target="_blank">this article on Wikipedia</a>.  Specifically, the linked lists this Kata is referring to are <strong>singly linked lists</strong>, where the value of a specific node is stored in its <code>data</code>/<code>$data</code>/<code>Data</code> property, the reference to the next node is stored in its <code>next</code>/<code>$next</code>/<code>Next</code>/<code>next_node</code> property and the terminator for a list is <code>null</code>/<code>NULL</code>/<code>None</code>/<code>nil</code>/<code>nullptr</code>/<code>null()</code>.</p>
<h2 id="task">Task</h2>
<p><em>If you are attempting this Kata in NASM, the code examples shown below may not be relevant at all - please refer to the Sample Tests (written in C) for the exact requirements.</em></p>
<p>Create a function <code>stringify</code> which accepts an argument <code>list</code>/<code>$list</code> and returns a string representation of the list.  The string representation of the list starts with the value of the current <code>Node</code>, specified by its <code>data</code>/<code>$data</code>/<code>Data</code> property, followed by a whitespace character, an arrow and another whitespace character (<code>&quot; -&gt; &quot;</code>), followed by the rest of the list.  The end of the string representation of a list must always end with <code>null</code>/<code>NULL</code>/<code>None</code>/<code>nil</code>/<code>nullptr</code>/<code>null()</code> (all caps or all lowercase depending on the language you are undertaking this Kata in).  For example, given the following list:</p>
<pre><code class="language-php"><span class="hljs-keyword">new</span> Node(<span class="hljs-number">1</span>, <span class="hljs-keyword">new</span> Node(<span class="hljs-number">2</span>, <span class="hljs-keyword">new</span> Node(<span class="hljs-number">3</span>)))</code></pre>
<pre style="display: none;"><code class="language-javascript"><span class="hljs-keyword">new</span> Node(<span class="hljs-number">1</span>, <span class="hljs-keyword">new</span> Node(<span class="hljs-number">2</span>, <span class="hljs-keyword">new</span> Node(<span class="hljs-number">3</span>)))</code></pre>
<pre style="display: none;"><code class="language-csharp"><span class="hljs-keyword">new</span> Node(<span class="hljs-number">1</span>, <span class="hljs-keyword">new</span> Node(<span class="hljs-number">2</span>, <span class="hljs-keyword">new</span> Node(<span class="hljs-number">3</span>)))</code></pre>
<pre style="display: none;"><code class="language-python">Node(<span class="hljs-number">1</span>, Node(<span class="hljs-number">2</span>, Node(<span class="hljs-number">3</span>)))</code></pre>
<pre style="display: none;"><code class="language-java"><span class="hljs-keyword">new</span> Node(<span class="hljs-number">1</span>, <span class="hljs-keyword">new</span> Node(<span class="hljs-number">2</span>, <span class="hljs-keyword">new</span> Node(<span class="hljs-number">3</span>)))</code></pre>
<pre style="display: none;"><code class="language-ruby">Node.new(<span class="hljs-number">1</span>, Node.new(<span class="hljs-number">2</span>, Node.new(<span class="hljs-number">3</span>)))</code></pre>
<pre style="display: none;"><code class="language-cpp"><span class="hljs-keyword">new</span> Node(<span class="hljs-number">1</span>, <span class="hljs-keyword">new</span> Node(<span class="hljs-number">2</span>, <span class="hljs-keyword">new</span> Node(<span class="hljs-number">3</span>)))</code></pre>
<pre style="display: none;"><code class="language-haskell">[<span class="hljs-number">1</span>,<span class="hljs-number">2</span>,<span class="hljs-number">3</span>]</code></pre>
<pre style="display: none;"><code class="language-objc">&amp;((Node){
  .data = <span class="hljs-number">1</span>,
  .next = &amp;((Node){
    .data = <span class="hljs-number">2</span>,
    .next = &amp;((Node){
      .data = <span class="hljs-number">3</span>,
      .next = <span class="hljs-literal">NULL</span>
    })
  })
})</code></pre>
<pre style="display: none;"><code class="language-c">&amp;((Node){
  .data = <span class="hljs-number">1</span>,
  .next = &amp;((Node){
    .data = <span class="hljs-number">2</span>,
    .next = &amp;((Node){
      .data = <span class="hljs-number">3</span>,
      .next = <span class="hljs-literal">NULL</span>
    })
  })
})</code></pre>
<pre style="display: none;"><code class="language-fortran"><span class="hljs-keyword">type</span>(Node), <span class="hljs-keyword">pointer</span> :: oneTwoThree
<span class="hljs-comment">! Where:</span>
<span class="hljs-comment">! oneTwoThree%data == 1</span>
<span class="hljs-comment">! oneTwoThree%next%data == 2</span>
<span class="hljs-comment">! oneTwoThree%next%next%data == 3</span>
<span class="hljs-comment">! oneTwoThree%next%next%next =&gt; null()</span></code></pre>
<p>... its string representation would be:</p>
<pre><code class="language-php"><span class="hljs-string">&quot;1 -&gt; 2 -&gt; 3 -&gt; NULL&quot;</span></code></pre>
<pre style="display: none;"><code class="language-c"><span class="hljs-string">&quot;1 -&gt; 2 -&gt; 3 -&gt; NULL&quot;</span></code></pre>
<pre style="display: none;"><code class="language-javascript"><span class="hljs-string">&quot;1 -&gt; 2 -&gt; 3 -&gt; null&quot;</span></code></pre>
<pre style="display: none;"><code class="language-csharp"><span class="hljs-string">&quot;1 -&gt; 2 -&gt; 3 -&gt; null&quot;</span></code></pre>
<pre style="display: none;"><code class="language-python"><span class="hljs-string">&quot;1 -&gt; 2 -&gt; 3 -&gt; None&quot;</span></code></pre>
<pre style="display: none;"><code class="language-java"><span class="hljs-string">&quot;1 -&gt; 2 -&gt; 3 -&gt; null&quot;</span></code></pre>
<pre style="display: none;"><code class="language-ruby"><span class="hljs-string">&quot;1 -&gt; 2 -&gt; 3 -&gt; nil&quot;</span></code></pre>
<pre style="display: none;"><code class="language-cpp"><span class="hljs-string">&quot;1 -&gt; 2 -&gt; 3 -&gt; nullptr&quot;</span></code></pre>
<pre style="display: none;"><code class="language-haskell"><span class="hljs-string">&quot;1 -&gt; 2 -&gt; 3 -&gt; null&quot;</span></code></pre>
<pre style="display: none;"><code class="language-objc"><span class="hljs-string">@&quot;1 -&gt; 2 -&gt; 3 -&gt; NULL&quot;</span></code></pre>
<pre style="display: none;"><code class="language-fortran"><span class="hljs-string">&quot;1 -&gt; 2 -&gt; 3 -&gt; null()&quot;</span></code></pre>
<p>And given the following linked list:</p>
<pre><code class="language-php"><span class="hljs-keyword">new</span> Node(<span class="hljs-number">0</span>, <span class="hljs-keyword">new</span> Node(<span class="hljs-number">1</span>, <span class="hljs-keyword">new</span> Node(<span class="hljs-number">4</span>, <span class="hljs-keyword">new</span> Node(<span class="hljs-number">9</span>, <span class="hljs-keyword">new</span> Node(<span class="hljs-number">16</span>)))))</code></pre>
<pre style="display: none;"><code class="language-javascript"><span class="hljs-keyword">new</span> Node(<span class="hljs-number">0</span>, <span class="hljs-keyword">new</span> Node(<span class="hljs-number">1</span>, <span class="hljs-keyword">new</span> Node(<span class="hljs-number">4</span>, <span class="hljs-keyword">new</span> Node(<span class="hljs-number">9</span>, <span class="hljs-keyword">new</span> Node(<span class="hljs-number">16</span>)))))</code></pre>
<pre style="display: none;"><code class="language-csharp"><span class="hljs-keyword">new</span> Node(<span class="hljs-number">0</span>, <span class="hljs-keyword">new</span> Node(<span class="hljs-number">1</span>, <span class="hljs-keyword">new</span> Node(<span class="hljs-number">4</span>, <span class="hljs-keyword">new</span> Node(<span class="hljs-number">9</span>, <span class="hljs-keyword">new</span> Node(<span class="hljs-number">16</span>)))))</code></pre>
<pre style="display: none;"><code class="language-python">Node(<span class="hljs-number">0</span>, Node(<span class="hljs-number">1</span>, Node(<span class="hljs-number">4</span>, Node(<span class="hljs-number">9</span>, Node(<span class="hljs-number">16</span>)))))</code></pre>
<pre style="display: none;"><code class="language-java"><span class="hljs-keyword">new</span> Node(<span class="hljs-number">0</span>, <span class="hljs-keyword">new</span> Node(<span class="hljs-number">1</span>, <span class="hljs-keyword">new</span> Node(<span class="hljs-number">4</span>, <span class="hljs-keyword">new</span> Node(<span class="hljs-number">9</span>, <span class="hljs-keyword">new</span> Node(<span class="hljs-number">16</span>)))))</code></pre>
<pre style="display: none;"><code class="language-ruby">Node.new(<span class="hljs-number">0</span>, Node.new(<span class="hljs-number">1</span>, Node.new(<span class="hljs-number">4</span>, Node.new(<span class="hljs-number">9</span>, Node.new(<span class="hljs-number">16</span>)))))</code></pre>
<pre style="display: none;"><code class="language-cpp"><span class="hljs-keyword">new</span> Node(<span class="hljs-number">0</span>, <span class="hljs-keyword">new</span> Node(<span class="hljs-number">1</span>, <span class="hljs-keyword">new</span> Node(<span class="hljs-number">4</span>, <span class="hljs-keyword">new</span> Node(<span class="hljs-number">9</span>, <span class="hljs-keyword">new</span> Node(<span class="hljs-number">16</span>)))))</code></pre>
<pre style="display: none;"><code class="language-haskell">[<span class="hljs-number">0</span>,<span class="hljs-number">1</span>,<span class="hljs-number">4</span>,<span class="hljs-number">9</span>,<span class="hljs-number">16</span>]</code></pre>
<pre style="display: none;"><code class="language-objc">&amp;((Node){
  .data = <span class="hljs-number">0</span>,
  .next = &amp;((Node){
    .data = <span class="hljs-number">1</span>,
    .next = &amp;((Node){
      .data = <span class="hljs-number">4</span>,
      .next = &amp;((Node){
        .data = <span class="hljs-number">9</span>,
        .next = &amp;((Node){
          .data = <span class="hljs-number">16</span>,
          .next = <span class="hljs-literal">NULL</span>
        })
      })
    })
  })
})</code></pre>
<pre style="display: none;"><code class="language-c">&amp;((Node){
  .data = <span class="hljs-number">0</span>,
  .next = &amp;((Node){
    .data = <span class="hljs-number">1</span>,
    .next = &amp;((Node){
      .data = <span class="hljs-number">4</span>,
      .next = &amp;((Node){
        .data = <span class="hljs-number">9</span>,
        .next = &amp;((Node){
          .data = <span class="hljs-number">16</span>,
          .next = <span class="hljs-literal">NULL</span>
        })
      })
    })
  })
})</code></pre>
<pre style="display: none;"><code class="language-fortran"><span class="hljs-keyword">type</span>(Node), <span class="hljs-keyword">pointer</span> :: list
<span class="hljs-comment">! Where:</span>
<span class="hljs-comment">! list%data == 0</span>
<span class="hljs-comment">! list%next%data == 1</span>
<span class="hljs-comment">! list%next%next%data == 4</span>
<span class="hljs-comment">! list%next%next%next%data == 9</span>
<span class="hljs-comment">! list%next%next%next%next%data == 16</span>
<span class="hljs-comment">! list%next%next%next%next%next =&gt; null()</span></code></pre>
<p>... its string representation would be:</p>
<pre><code class="language-php"><span class="hljs-string">&quot;0 -&gt; 1 -&gt; 4 -&gt; 9 -&gt; 16 -&gt; NULL&quot;</span></code></pre>
<pre style="display: none;"><code class="language-c"><span class="hljs-string">&quot;0 -&gt; 1 -&gt; 4 -&gt; 9 -&gt; 16 -&gt; NULL&quot;</span></code></pre>
<pre style="display: none;"><code class="language-javascript"><span class="hljs-string">&quot;0 -&gt; 1 -&gt; 4 -&gt; 9 -&gt; 16 -&gt; null&quot;</span></code></pre>
<pre style="display: none;"><code class="language-csharp"><span class="hljs-string">&quot;0 -&gt; 1 -&gt; 4 -&gt; 9 -&gt; 16 -&gt; null&quot;</span></code></pre>
<pre style="display: none;"><code class="language-python"><span class="hljs-string">&quot;0 -&gt; 1 -&gt; 4 -&gt; 9 -&gt; 16 -&gt; None&quot;</span></code></pre>
<pre style="display: none;"><code class="language-java"><span class="hljs-string">&quot;0 -&gt; 1 -&gt; 4 -&gt; 9 -&gt; 16 -&gt; null&quot;</span></code></pre>
<pre style="display: none;"><code class="language-ruby"><span class="hljs-string">&quot;0 -&gt; 1 -&gt; 4 -&gt; 9 -&gt; 16 -&gt; nil&quot;</span></code></pre>
<pre style="display: none;"><code class="language-cpp"><span class="hljs-string">&quot;0 -&gt; 1 -&gt; 4 -&gt; 9 -&gt; 16 -&gt; nullptr&quot;</span></code></pre>
<pre style="display: none;"><code class="language-haskell"><span class="hljs-string">&quot;0 -&gt; 1 -&gt; 4 -&gt; 9 -&gt; 16 -&gt; null&quot;</span></code></pre>
<pre style="display: none;"><code class="language-objc"><span class="hljs-string">@&quot;0 -&gt; 1 -&gt; 4 -&gt; 9 -&gt; 16 -&gt; NULL&quot;</span></code></pre>
<pre style="display: none;"><code class="language-fortran"><span class="hljs-string">&quot;0 -&gt; 1 -&gt; 4 -&gt; 9 -&gt; 16 -&gt; null()&quot;</span></code></pre>
<p>Note that <code>null</code>/<code>NULL</code>/<code>None</code>/<code>nil</code>/<code>nullptr</code>/<code>null()</code> itself is also considered a valid linked list.  In that case, its string representation would simply be <code>&quot;null&quot;</code>/<code>&quot;NULL&quot;</code>/<code>&quot;None&quot;</code>/<code>&quot;nil&quot;</code>/<code>&quot;nullptr&quot;</code>/<code>@&quot;NULL&quot;</code>/<code>&quot;null()&quot;</code> (again, depending on the language).</p>
<p>For the simplicity of this Kata, you may assume that any <code>Node</code> in this Kata may only contain <strong>non-negative integer</strong> values.  For example, you will not encounter a <code>Node</code> whose <code>data</code>/<code>$data</code>/<code>Data</code> property is <code>&quot;Hello World&quot;</code>.</p>
<p>Enjoy, and don&apos;t forget to check out my other Kata Series :D</p>

### Solution