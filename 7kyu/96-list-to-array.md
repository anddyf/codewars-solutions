### Problem:
<p><b>Linked lists</b> are data structures composed of nested or chained objects, each containing a single value and a reference to the next object. </p>
<p>Here&apos;s an example of a list:</p>
<pre><code class="language-javascript">{<span class="hljs-attr">value</span>: <span class="hljs-number">1</span>, <span class="hljs-attr">next</span>: {<span class="hljs-attr">value</span>: <span class="hljs-number">2</span>, <span class="hljs-attr">next</span>: {<span class="hljs-attr">value</span>: <span class="hljs-number">3</span>, <span class="hljs-attr">next</span>: <span class="hljs-literal">null</span>}}}</code></pre>
<pre style="display: none;"><code class="language-python"><span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">LinkedList</span>:</span>
    <span class="hljs-function"><span class="hljs-keyword">def</span> <span class="hljs-title">__init__</span><span class="hljs-params">(self, value=<span class="hljs-number">0</span>, next=None)</span>:</span>
        self.value = value
        self.next = next

LinkedList(<span class="hljs-number">1</span>, LinkedList(<span class="hljs-number">2</span>, LinkedList(<span class="hljs-number">3</span>)))
</code></pre>
<pre style="display: none;"><code class="language-ruby">{<span class="hljs-symbol">value:</span> <span class="hljs-number">1</span>, <span class="hljs-symbol">next:</span> {<span class="hljs-symbol">value:</span> <span class="hljs-number">2</span>, <span class="hljs-symbol">next:</span> {<span class="hljs-symbol">value:</span> <span class="hljs-number">3</span>, <span class="hljs-symbol">next:</span> null}}}</code></pre>
<p>Write a function listToArray (or list_to_array in Python) that converts a list to an array, like this:</p>
<pre><code>[1, 2, 3]</code></pre><p>Assume all inputs are valid lists with at least one value. For the purpose of simplicity, all values will be either numbers, strings, or Booleans.</p>

### Solution