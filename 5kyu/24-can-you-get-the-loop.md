### Problem:
<p>You are given a node that is the beginning of a linked list. This list always contains a tail and a loop.</p>
<p>Your objective is to determine the length of the loop.  </p>
<p>For example in the following picture the tail&apos;s size is 3 and the loop size is 11.</p>
<div style="overflow-y:hidden;height:450px;margin-bottom:20px"><img style="position: relative;top: -160px" src="https://i.imgur.com/Rc6RPT5.png" border="0" alt="Image and video hosting by TinyPic"></div>

<pre><code class="language-ruby"><span class="hljs-comment"># Use the `next&apos; method to get the following node.</span>

node.<span class="hljs-keyword">next</span></code></pre>
<pre style="display: none;"><code class="language-javascript"><span class="hljs-comment">// Use the `getNext&apos; method or &apos;next&apos; property to get the following node.</span>

node.getNext()
node.next</code></pre>
<pre style="display: none;"><code class="language-python"><span class="hljs-comment"># Use the `next&apos; attribute to get the following node</span>

node.next</code></pre>
<pre style="display: none;"><code class="language-java"><span class="hljs-comment">// Use the `getNext()` method to get the following node.</span>

node.getNext()</code></pre>
<pre style="display: none;"><code class="language-haskell"><span class="hljs-comment">-- use the `next :: Node a -&gt; Node a` function to get the following node</span></code></pre>
<pre style="display: none;"><code class="language-cs"><span class="hljs-meta"># Use the `next&apos; method to get the following node.</span>

node.next</code></pre>
<p>Note: do NOT mutate the nodes!</p>
<blockquote>
<p>Thanks to shadchnev, I broke all of the methods from the Hash class.</p>
</blockquote>
<blockquote>
<p>Don&apos;t miss dmitry&apos;s article in the discussion after you pass the Kata !! </p>
</blockquote>

### Solution