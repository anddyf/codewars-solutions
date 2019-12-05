### Problem:
<p>Your boss decided to save money by purchasing some cut-rate optical character recognition software for scanning in the text of old novels to your database. At first it seems to capture words okay, but you quickly notice that it throws in a lot of numbers at random places in the text. For example:</p>
<pre><code class="language-python">string_clean(<span class="hljs-string">&apos;! !&apos;</span>) == <span class="hljs-string">&apos;! !&apos;</span>
string_clean(<span class="hljs-string">&apos;123456789&apos;</span>) == <span class="hljs-string">&apos;&apos;</span>
string_clean(<span class="hljs-string">&apos;This looks5 grea8t!&apos;</span>) == <span class="hljs-string">&apos;This looks great!&apos;</span>
</code></pre>
<pre style="display: none;"><code class="language-javascript">stringClean(<span class="hljs-string">&apos;! !&apos;</span>) == <span class="hljs-string">&apos;! !&apos;</span>
stringClean(<span class="hljs-string">&apos;123456789&apos;</span>) == <span class="hljs-string">&apos;&apos;</span>
stringClean(<span class="hljs-string">&apos;This looks5 grea8t!&apos;</span>) == <span class="hljs-string">&apos;This looks great!&apos;</span>
</code></pre>
<p>Your harried co-workers are looking to you for a solution to take this garbled text and remove all of the numbers. Your program will take in a string and clean out all numeric characters, and return a string with spacing and special characters <code>~#$%^&amp;!@*():;&quot;&apos;.,?</code> all intact.</p>

### Solution