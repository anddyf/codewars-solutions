### Problem:
<p>Bob is preparing to pass IQ test. The most frequent task in this test is <code>to find out which one of the given numbers differs from the others</code>. Bob observed that one number usually differs from the others in <strong>evenness</strong>. Help Bob &#x2014; to check his answers, he needs a program that among the given numbers finds one that is different in evenness, and return a position of this number.</p>
<p><code>!</code> Keep in mind that your task is to help Bob solve a <code>real IQ test</code>, which means indexes of the elements start from <code>1 (not 0)</code></p>
<p>##Examples :</p>
<pre><code class="language-csharp">IQ.Test(<span class="hljs-string">&quot;2 4 7 8 10&quot;</span>) =&gt; <span class="hljs-number">3</span> <span class="hljs-comment">// Third number is odd, while the rest of the numbers are even</span>

IQ.Test(<span class="hljs-string">&quot;1 2 1 1&quot;</span>) =&gt; <span class="hljs-number">2</span> <span class="hljs-comment">// Second number is even, while the rest of the numbers are odd</span></code></pre>
<pre style="display: none;"><code class="language-javascript">iqTest(<span class="hljs-string">&quot;2 4 7 8 10&quot;</span>) =&gt; <span class="hljs-number">3</span> <span class="hljs-comment">// Third number is odd, while the rest of the numbers are even</span>

iqTest(<span class="hljs-string">&quot;1 2 1 1&quot;</span>) =&gt; <span class="hljs-number">2</span> <span class="hljs-comment">// Second number is even, while the rest of the numbers are odd</span></code></pre>
<pre style="display: none;"><code class="language-typescript">iqTest(<span class="hljs-string">&quot;2 4 7 8 10&quot;</span>) =&gt; <span class="hljs-number">3</span> <span class="hljs-comment">// Third number is odd, while the rest of the numbers are even</span>

iqTest(<span class="hljs-string">&quot;1 2 1 1&quot;</span>) =&gt; <span class="hljs-number">2</span> <span class="hljs-comment">// Second number is even, while the rest of the numbers are odd</span></code></pre>
<pre style="display: none;"><code class="language-ruby">iq_test(&quot;2 4 7 8 10&quot;) =&gt; 3 // Third number is odd, while the rest of the numbers are even

iq_test(&quot;1 2 1 1&quot;) =&gt; 2 // Second number is even, while the rest of the numbers are odd</code></pre>
<pre style="display: none;"><code class="language-python">iq_test(&quot;2 4 7 8 10&quot;) =&gt; 3 // Third number is odd, while the rest of the numbers are even

iq_test(&quot;1 2 1 1&quot;) =&gt; 2 // Second number is even, while the rest of the numbers are odd</code></pre>

### Solution