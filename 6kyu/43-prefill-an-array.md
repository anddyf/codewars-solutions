### Problem:
<p>Create the function <code>prefill</code> that returns an array of <code>n</code> elements that all have the same value <code>v</code>.  See if you can do this <em>without</em> using a loop.</p>
<p>You have to validate input:</p>
<ul>
<li><code>v</code> can be <em>anything</em> (primitive or otherwise)</li>
<li>if <code>v</code> is ommited, fill the array with <code>undefined</code></li>
<li>if <code>n</code> is 0, return an empty array</li>
<li>if <code>n</code> is anything other than an <strong>integer</strong> or <strong>integer-formatted</strong> string (e.g. <code>&apos;123&apos;</code>) that is <code>&gt;=0</code>, throw a <code>TypeError</code></li>
</ul>
<p>When throwing a <code>TypeError</code>, the message should be <code>n is invalid</code>, where you replace <code>n</code> for the actual value passed to the function.</p>
<p>Code Examples</p>
<pre><code class="language-javascript">    prefill(<span class="hljs-number">3</span>,<span class="hljs-number">1</span>) --&gt; [<span class="hljs-number">1</span>,<span class="hljs-number">1</span>,<span class="hljs-number">1</span>]

    prefill(<span class="hljs-number">2</span>,<span class="hljs-string">&quot;abc&quot;</span>) --&gt; [<span class="hljs-string">&apos;abc&apos;</span>,<span class="hljs-string">&apos;abc&apos;</span>]

    prefill(<span class="hljs-string">&quot;1&quot;</span>, <span class="hljs-number">1</span>) --&gt; [<span class="hljs-number">1</span>]

    prefill(<span class="hljs-number">3</span>, prefill(<span class="hljs-number">2</span>,<span class="hljs-string">&apos;2d&apos;</span>))
      --&gt; [[<span class="hljs-string">&apos;2d&apos;</span>,<span class="hljs-string">&apos;2d&apos;</span>],[<span class="hljs-string">&apos;2d&apos;</span>,<span class="hljs-string">&apos;2d&apos;</span>],[<span class="hljs-string">&apos;2d&apos;</span>,<span class="hljs-string">&apos;2d&apos;</span>]]

    prefill(<span class="hljs-string">&quot;xyz&quot;</span>, <span class="hljs-number">1</span>)
      --&gt; throws <span class="hljs-built_in">TypeError</span> <span class="hljs-keyword">with</span> message <span class="hljs-string">&quot;xyz is invalid&quot;</span></code></pre>
<pre style="display: none;"><code class="language-ruby">    prefill(<span class="hljs-number">3</span>,<span class="hljs-number">1</span>) --&gt; [<span class="hljs-number">1</span>,<span class="hljs-number">1</span>,<span class="hljs-number">1</span>]

    prefill(<span class="hljs-number">2</span>,<span class="hljs-string">&quot;abc&quot;</span>) --&gt; [<span class="hljs-string">&apos;abc&apos;</span>,<span class="hljs-string">&apos;abc&apos;</span>]

    prefill(<span class="hljs-string">&quot;1&quot;</span>, <span class="hljs-number">1</span>) --&gt; [<span class="hljs-number">1</span>]

    prefill(<span class="hljs-number">3</span>, prefill(<span class="hljs-number">2</span>,<span class="hljs-string">&apos;2d&apos;</span>))
      --&gt; [[<span class="hljs-string">&apos;2d&apos;</span>,<span class="hljs-string">&apos;2d&apos;</span>],[<span class="hljs-string">&apos;2d&apos;</span>,<span class="hljs-string">&apos;2d&apos;</span>],[<span class="hljs-string">&apos;2d&apos;</span>,<span class="hljs-string">&apos;2d&apos;</span>]]

    prefill(<span class="hljs-string">&quot;xyz&quot;</span>, <span class="hljs-number">1</span>)
      --&gt; throws TypeError with message <span class="hljs-string">&quot;xyz is invalid&quot;</span></code></pre>
<pre style="display: none;"><code class="language-python">    prefill(3,1) --&gt; [1,1,1]

    prefill(2,&quot;abc&quot;) --&gt; [&apos;abc&apos;,&apos;abc&apos;]

    prefill(&quot;1&quot;, 1) --&gt; [1]

    prefill(3, prefill(2,&apos;2d&apos;))
      --&gt; [[&apos;2d&apos;,&apos;2d&apos;],[&apos;2d&apos;,&apos;2d&apos;],[&apos;2d&apos;,&apos;2d&apos;]]

    prefill(&quot;xyz&quot;, 1)
      --&gt; throws TypeError with message &quot;xyz is invalid&quot;</code></pre>
<pre style="display: none;"><code class="language-coffeescript">    prefill <span class="hljs-number">3</span>, <span class="hljs-number">1</span> <span class="hljs-comment">#returns [1, 1, 1]</span>

    prefill <span class="hljs-number">2</span>, <span class="hljs-string">&quot;abc&quot;</span> <span class="hljs-comment">#returns [&quot;abc&quot;,&quot;abc&quot;]</span>

    prefill <span class="hljs-string">&quot;1&quot;</span>, <span class="hljs-number">1</span> <span class="hljs-comment">#returns [1]</span>

    prefill <span class="hljs-number">3</span>, prefill(<span class="hljs-number">2</span>, <span class="hljs-string">&quot;2d&quot;</span>)
      <span class="hljs-comment">#returns [[&apos;2d&apos;,&apos;2d&apos;],[&apos;2d&apos;,&apos;2d&apos;],[&apos;2d&apos;,&apos;2d&apos;]]</span>

    prefill <span class="hljs-string">&quot;xyz&quot;</span>, <span class="hljs-number">1</span>
      <span class="hljs-comment">#throws TypeError with message &quot;xyz is invalid&quot;</span></code></pre>

### Solution