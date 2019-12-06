### Problem:
<p>Given: an array containing hashes of names</p>
<p>Return: a string formatted as a list of names separated by commas except for the last two names, which should be separated by an ampersand.</p>
<p>Example:</p>
<pre><code class="language-ruby">list([ {<span class="hljs-symbol">name:</span> <span class="hljs-string">&apos;Bart&apos;</span>}, {<span class="hljs-symbol">name:</span> <span class="hljs-string">&apos;Lisa&apos;</span>}, {<span class="hljs-symbol">name:</span> <span class="hljs-string">&apos;Maggie&apos;</span>} ])
<span class="hljs-comment"># returns &apos;Bart, Lisa &amp; Maggie&apos;</span>

list([ {<span class="hljs-symbol">name:</span> <span class="hljs-string">&apos;Bart&apos;</span>}, {<span class="hljs-symbol">name:</span> <span class="hljs-string">&apos;Lisa&apos;</span>} ])
<span class="hljs-comment"># returns &apos;Bart &amp; Lisa&apos;</span>

list([ {<span class="hljs-symbol">name:</span> <span class="hljs-string">&apos;Bart&apos;</span>} ])
<span class="hljs-comment"># returns &apos;Bart&apos;</span>

list([])
<span class="hljs-comment"># returns &apos;&apos;</span></code></pre>
<pre style="display: none;"><code class="language-elixir">list([ %{<span class="hljs-symbol">name:</span> <span class="hljs-string">&quot;Bart&quot;</span>}, %{<span class="hljs-symbol">name:</span> <span class="hljs-string">&quot;Lisa&quot;</span>}, %{<span class="hljs-symbol">name:</span> <span class="hljs-string">&quot;Maggie&quot;</span>} ])
<span class="hljs-comment"># returns &apos;Bart, Lisa &amp; Maggie&apos;</span>

list([ %{<span class="hljs-symbol">name:</span> <span class="hljs-string">&quot;Bart&quot;</span>}, %{<span class="hljs-symbol">name:</span> <span class="hljs-string">&quot;Lisa&quot;</span>} ])
<span class="hljs-comment"># returns &apos;Bart &amp; Lisa&apos;</span>

list([ %{<span class="hljs-symbol">name:</span> <span class="hljs-string">&quot;Bart&quot;</span>} ])
<span class="hljs-comment"># returns &apos;Bart&apos;</span>

list([])
<span class="hljs-comment"># returns &apos;&apos;</span></code></pre>
<pre style="display: none;"><code class="language-javascript">list([ {<span class="hljs-attr">name</span>: <span class="hljs-string">&apos;Bart&apos;</span>}, {<span class="hljs-attr">name</span>: <span class="hljs-string">&apos;Lisa&apos;</span>}, {<span class="hljs-attr">name</span>: <span class="hljs-string">&apos;Maggie&apos;</span>} ])
<span class="hljs-comment">// returns &apos;Bart, Lisa &amp; Maggie&apos;</span>

list([ {<span class="hljs-attr">name</span>: <span class="hljs-string">&apos;Bart&apos;</span>}, {<span class="hljs-attr">name</span>: <span class="hljs-string">&apos;Lisa&apos;</span>} ])
<span class="hljs-comment">// returns &apos;Bart &amp; Lisa&apos;</span>

list([ {<span class="hljs-attr">name</span>: <span class="hljs-string">&apos;Bart&apos;</span>} ])
<span class="hljs-comment">// returns &apos;Bart&apos;</span>

list([])
<span class="hljs-comment">// returns &apos;&apos;</span></code></pre>
<pre style="display: none;"><code class="language-python">namelist([ {<span class="hljs-string">&apos;name&apos;</span>: <span class="hljs-string">&apos;Bart&apos;</span>}, {<span class="hljs-string">&apos;name&apos;</span>: <span class="hljs-string">&apos;Lisa&apos;</span>}, {<span class="hljs-string">&apos;name&apos;</span>: <span class="hljs-string">&apos;Maggie&apos;</span>} ])
<span class="hljs-comment"># returns &apos;Bart, Lisa &amp; Maggie&apos;</span>

namelist([ {<span class="hljs-string">&apos;name&apos;</span>: <span class="hljs-string">&apos;Bart&apos;</span>}, {<span class="hljs-string">&apos;name&apos;</span>: <span class="hljs-string">&apos;Lisa&apos;</span>} ])
<span class="hljs-comment"># returns &apos;Bart &amp; Lisa&apos;</span>

namelist([ {<span class="hljs-string">&apos;name&apos;</span>: <span class="hljs-string">&apos;Bart&apos;</span>} ])
<span class="hljs-comment"># returns &apos;Bart&apos;</span>

namelist([])
<span class="hljs-comment"># returns &apos;&apos;</span></code></pre>
<p>Note: all the hashes are pre-validated and will only contain A-Z, a-z, &apos;-&apos; and &apos;.&apos;.</p>

### Solution