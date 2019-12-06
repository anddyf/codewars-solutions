### Problem:
<p>The aim of this Kata is to write a function which will reverse the case of all consecutive duplicate letters in a string.  That is, any letters that occur one after the other and are identical.</p>
<p>If the duplicate letters are lowercase then they must be set to uppercase, and if they are uppercase then they need to be changed to lowercase. </p>
<p><strong>Examples:</strong></p>
<pre><code class="language-javascript">reverseCase(<span class="hljs-string">&quot;puzzles&quot;</span>)    Expected Result: <span class="hljs-string">&quot;puZZles&quot;</span>
reverseCase(<span class="hljs-string">&quot;massive&quot;</span>)    Expected Result: <span class="hljs-string">&quot;maSSive&quot;</span>
reverseCase(<span class="hljs-string">&quot;LITTLE&quot;</span>)     Expected Result: <span class="hljs-string">&quot;LIttLE&quot;</span>
reverseCase(<span class="hljs-string">&quot;shhh&quot;</span>)       Expected Result: <span class="hljs-string">&quot;sHHH&quot;</span></code></pre>
<pre style="display: none;"><code class="language-python">reverse_case(<span class="hljs-string">&quot;puzzles&quot;</span>)    Expected Result: <span class="hljs-string">&quot;puZZles&quot;</span>
reverse_case(<span class="hljs-string">&quot;massive&quot;</span>)    Expected Result: <span class="hljs-string">&quot;maSSive&quot;</span>
reverse_case(<span class="hljs-string">&quot;LITTLE&quot;</span>)     Expected Result: <span class="hljs-string">&quot;LIttLE&quot;</span>
reverse_case(<span class="hljs-string">&quot;shhh&quot;</span>)       Expected Result: <span class="hljs-string">&quot;sHHH&quot;</span></code></pre>
<pre style="display: none;"><code class="language-ruby">reverse_case(<span class="hljs-string">&quot;puzzles&quot;</span>)    Expected <span class="hljs-symbol">Result:</span> <span class="hljs-string">&quot;puZZles&quot;</span>
reverse_case(<span class="hljs-string">&quot;massive&quot;</span>)    Expected <span class="hljs-symbol">Result:</span> <span class="hljs-string">&quot;maSSive&quot;</span>
reverse_case(<span class="hljs-string">&quot;LITTLE&quot;</span>)     Expected <span class="hljs-symbol">Result:</span> <span class="hljs-string">&quot;LIttLE&quot;</span>
reverse_case(<span class="hljs-string">&quot;shhh&quot;</span>)       Expected <span class="hljs-symbol">Result:</span> <span class="hljs-string">&quot;sHHH&quot;</span></code></pre>
<pre style="display: none;"><code class="language-crystal">reverse_case(<span class="hljs-string">&quot;puzzles&quot;</span>)    Expected <span class="hljs-symbol">Result:</span> <span class="hljs-string">&quot;puZZles&quot;</span>
reverse_case(<span class="hljs-string">&quot;massive&quot;</span>)    Expected <span class="hljs-symbol">Result:</span> <span class="hljs-string">&quot;maSSive&quot;</span>
reverse_case(<span class="hljs-string">&quot;LITTLE&quot;</span>)     Expected <span class="hljs-symbol">Result:</span> <span class="hljs-string">&quot;LIttLE&quot;</span>
reverse_case(<span class="hljs-string">&quot;shhh&quot;</span>)       Expected <span class="hljs-symbol">Result:</span> <span class="hljs-string">&quot;sHHH&quot;</span></code></pre>
<p>Arguments passed will include only alphabetical letters A&#x2013;Z or a&#x2013;z.</p>

### Solution