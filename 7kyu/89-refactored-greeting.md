### Problem:
<p>The following code could use a bit of object oriented artistry. While its a simple method and works just fine as it is, in a larger system its best to organize methods into classes/objects. Refactor the following code so that it belongs to a Person class/object. Each Person instance will have a greet method. The Person instance should be instantiated with a name so that it no longer has to be passed into each greet method call. </p>
<p>Here is how the final refactored code would be used:</p>
<pre><code class="language-javascript"><span class="hljs-keyword">var</span> joe = <span class="hljs-keyword">new</span> Person(<span class="hljs-string">&apos;Joe&apos;</span>);
joe.greet(<span class="hljs-string">&apos;Kate&apos;</span>); <span class="hljs-comment">// should return &apos;Hello Kate, my name is Joe&apos;</span>
joe.name           <span class="hljs-comment">// should == &apos;Joe&apos;</span></code></pre>
<pre style="display: none;"><code class="language-coffeescript">joe = <span class="hljs-keyword">new</span> Person(<span class="hljs-string">&apos;Joe&apos;</span>)
joe.greet(<span class="hljs-string">&apos;Kate&apos;</span>) <span class="hljs-comment"># should return &apos;Hello Kate, my name is Joe&apos;</span>
joe.name          <span class="hljs-comment"># should == &apos;Joe&apos;</span></code></pre>
<pre style="display: none;"><code class="language-ruby">joe = Person.new(<span class="hljs-string">&apos;Joe&apos;</span>)
joe.greet(<span class="hljs-string">&apos;Kate&apos;</span>) <span class="hljs-comment"># should return &apos;Hello Kate, my name is Joe&apos;</span>
joe.name          <span class="hljs-comment"># should == &apos;Joe&apos;</span></code></pre>
<pre style="display: none;"><code class="language-python">joe = Person(<span class="hljs-string">&apos;Joe&apos;</span>)
joe.greet(<span class="hljs-string">&apos;Kate&apos;</span>) <span class="hljs-comment"># should return &apos;Hello Kate, my name is Joe&apos;</span>
joe.name          <span class="hljs-comment"># should == &apos;Joe&apos;</span></code></pre>

### Solution