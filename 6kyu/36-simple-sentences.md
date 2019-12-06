### Problem:
<p>Implement a function, so it will produce a sentence out of the given parts.</p>
<p>Array of parts could contain:<br></p>
<ul>
<li>words;<br></li>
<li>commas in the middle;<br></li>
<li>multiple periods at the end.<br></li>
</ul>
<p>Sentence making rules:<br></p>
<ul>
<li>there must always be a space between words;<br></li>
<li>there must not be a space between a comma and word on the left;<br></li>
<li>there must always be one and only one period at the end of a sentence.<br></li>
</ul>
<p><strong>Example:</strong></p>
<pre><code class="language-javascript">makeSentence([<span class="hljs-string">&apos;hello&apos;</span>, <span class="hljs-string">&apos;,&apos;</span>, <span class="hljs-string">&apos;my&apos;</span>, <span class="hljs-string">&apos;dear&apos;</span>]) <span class="hljs-comment">// returns &apos;hello, my dear.&apos;</span></code></pre>
<pre style="display: none;"><code class="language-coffeescript">makeSentence [<span class="hljs-string">&apos;hello&apos;</span>, <span class="hljs-string">&apos;,&apos;</span>, <span class="hljs-string">&apos;my&apos;</span>, <span class="hljs-string">&apos;dear&apos;</span>] <span class="hljs-comment"># returns &apos;hello, my dear.&apos;</span></code></pre>
<pre style="display: none;"><code class="language-ruby">make_sentence [<span class="hljs-string">&apos;hello&apos;</span>, <span class="hljs-string">&apos;,&apos;</span>, <span class="hljs-string">&apos;my&apos;</span>, <span class="hljs-string">&apos;dear&apos;</span>] <span class="hljs-comment"># returns &apos;hello, my dear.&apos;</span></code></pre>

### Solution