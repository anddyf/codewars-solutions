### Problem:
<p>Define a method <code>hello</code> that <code>returns</code> &quot;Hello, Name!&quot; to a given <code>name</code>, or says Hello, World! if name is not given (or passed as an empty String).</p>
<p>Assuming that <code>name</code> is a <code>String</code> and it checks for user typos to return a name with a first capital letter (Xxxx).</p>
<p>Examples:</p>
<pre><code class="language-ruby">hello <span class="hljs-string">&quot;john&quot;</span>   =&gt; <span class="hljs-string">&quot;Hello, John!&quot;</span>
hello <span class="hljs-string">&quot;aliCE&quot;</span>  =&gt; <span class="hljs-string">&quot;Hello, Alice!&quot;</span>
hello          =&gt; <span class="hljs-string">&quot;Hello, World!&quot;</span> <span class="hljs-comment"># name not given</span>
hello <span class="hljs-string">&apos;&apos;</span>       =&gt; <span class="hljs-string">&quot;Hello, World!&quot;</span> <span class="hljs-comment"># name is an empty String</span></code></pre>

### Solution