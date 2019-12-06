### Problem:
<p>Complete the solution so that it returns the number of times the search_text is found within the full_text.</p>
<pre style="display: none;"><code class="language-python">search_substr( fullText, searchText, allowOverlap = true )</code></pre>
<pre><code class="language-ruby">search_substr( fullText, searchText, allowOverlap = <span class="hljs-literal">true</span> )</code></pre>
<pre style="display: none;"><code class="language-coffeescript">searchSubstr( fullText, searchText, allowOverlap = <span class="hljs-literal">true</span> )</code></pre>
<pre style="display: none;"><code class="language-javascript">searchSubstr( fullText, searchText, allowOverlap = <span class="hljs-literal">true</span> )</code></pre>
<p>so that overlapping solutions are (not) counted. If the searchText is empty, it should return <code>0</code>. Usage examples:</p>
<pre style="display: none;"><code class="language-python">search_substr(<span class="hljs-string">&apos;aa_bb_cc_dd_bb_e&apos;</span>, <span class="hljs-string">&apos;bb&apos;</span>) <span class="hljs-comment"># should return 2 since bb shows up twice</span>
search_substr(<span class="hljs-string">&apos;aaabbbcccc&apos;</span>, <span class="hljs-string">&apos;bbb&apos;</span>) <span class="hljs-comment"># should return 1</span>
search_substr( <span class="hljs-string">&apos;aaa&apos;</span>, <span class="hljs-string">&apos;aa&apos;</span> ) <span class="hljs-comment"># should return 2</span>
search_substr( <span class="hljs-string">&apos;aaa&apos;</span>, <span class="hljs-string">&apos;&apos;</span> ) <span class="hljs-comment"># should return 0</span>
search_substr( <span class="hljs-string">&apos;aaa&apos;</span>, <span class="hljs-string">&apos;aa&apos;</span>, false ) <span class="hljs-comment"># should return 1</span></code></pre>
<pre><code class="language-ruby">search_substr(<span class="hljs-string">&apos;aa_bb_cc_dd_bb_e&apos;</span>, <span class="hljs-string">&apos;bb&apos;</span>) <span class="hljs-comment"># should return 2 since bb shows up twice</span>
search_substr(<span class="hljs-string">&apos;aaabbbcccc&apos;</span>, <span class="hljs-string">&apos;bbb&apos;</span>) <span class="hljs-comment"># should return 1</span>
search_substr( <span class="hljs-string">&apos;aaa&apos;</span>, <span class="hljs-string">&apos;aa&apos;</span> ) <span class="hljs-comment"># should return 2</span>
search_substr( <span class="hljs-string">&apos;aaa&apos;</span>, <span class="hljs-string">&apos;&apos;</span> ) <span class="hljs-comment"># should return 0</span>
search_substr( <span class="hljs-string">&apos;aaa&apos;</span>, <span class="hljs-string">&apos;aa&apos;</span>, <span class="hljs-literal">false</span> ) <span class="hljs-comment"># should return 1</span></code></pre>
<pre style="display: none;"><code class="language-coffeescript">searchSubstr(<span class="hljs-string">&apos;aa_bb_cc_dd_bb_e&apos;</span>, <span class="hljs-string">&apos;bb&apos;</span>) <span class="hljs-comment"># should return 2 since bb shows up twice</span>
searchSubstr(<span class="hljs-string">&apos;aaabbbcccc&apos;</span>, <span class="hljs-string">&apos;bbb&apos;</span>) <span class="hljs-comment"># should return 1</span>
searchSubstr( <span class="hljs-string">&apos;aaa&apos;</span>, <span class="hljs-string">&apos;aa&apos;</span> ) <span class="hljs-comment"># should return 2</span>
searchSubstr( <span class="hljs-string">&apos;aaa&apos;</span>, <span class="hljs-string">&apos;&apos;</span> ) <span class="hljs-comment"># should return 0</span>
searchSubstr( <span class="hljs-string">&apos;aaa&apos;</span>, <span class="hljs-string">&apos;aa&apos;</span>, <span class="hljs-literal">false</span> ) <span class="hljs-comment"># should return 1</span></code></pre>
<pre style="display: none;"><code class="language-javascript">searchSubstr(&apos;aa_bb_cc_dd_bb_e&apos;, &apos;bb&apos;) # should return 2 since bb shows up twice
searchSubstr(&apos;aaabbbcccc&apos;, &apos;bbb&apos;) # should return 1
searchSubstr( &apos;aaa&apos;, &apos;aa&apos; ) # should return 2
searchSubstr( &apos;aaa&apos;, &apos;&apos; ) # should return 0
searchSubstr( &apos;aaa&apos;, &apos;aa&apos;, false ) # should return 1</code></pre>

### Solution