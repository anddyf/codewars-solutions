### Problem:
<p>You probably know the &quot;like&quot; system from Facebook and other pages. People can &quot;like&quot; blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.</p>
<p>Implement a function <code>likes :: [String] -&gt; String</code>, which must take in input array, containing the names of people who like an item. It must return the display text as shown in the examples:</p>
<pre><code class="language-haskell"><span class="hljs-title">likes</span> [] // must be <span class="hljs-string">&quot;no one likes this&quot;</span>
<span class="hljs-title">likes</span> [<span class="hljs-string">&quot;Peter&quot;</span>] // must be <span class="hljs-string">&quot;Peter likes this&quot;</span>
<span class="hljs-title">likes</span> [<span class="hljs-string">&quot;Jacob&quot;</span>, <span class="hljs-string">&quot;Alex&quot;</span>] // must be <span class="hljs-string">&quot;Jacob and Alex like this&quot;</span>
<span class="hljs-title">likes</span> [<span class="hljs-string">&quot;Max&quot;</span>, <span class="hljs-string">&quot;John&quot;</span>, <span class="hljs-string">&quot;Mark&quot;</span>] // must be <span class="hljs-string">&quot;Max, John and Mark like this&quot;</span>
<span class="hljs-title">likes</span> [<span class="hljs-string">&quot;Alex&quot;</span>, <span class="hljs-string">&quot;Jacob&quot;</span>, <span class="hljs-string">&quot;Mark&quot;</span>, <span class="hljs-string">&quot;Max&quot;</span>] // must be <span class="hljs-string">&quot;Alex, Jacob and 2 others like this&quot;</span></code></pre>
<pre style="display: none;"><code class="language-csharp">Kata.Likes(<span class="hljs-keyword">new</span> <span class="hljs-keyword">string</span>[<span class="hljs-number">0</span>]) =&gt; <span class="hljs-string">&quot;no one likes this&quot;</span>
Kata.Likes(<span class="hljs-keyword">new</span> <span class="hljs-keyword">string</span>[] {<span class="hljs-string">&quot;Peter&quot;</span>}) =&gt; <span class="hljs-string">&quot;Peter likes this&quot;</span>
Kata.Likes(<span class="hljs-keyword">new</span> <span class="hljs-keyword">string</span>[] {<span class="hljs-string">&quot;Jacob&quot;</span>, <span class="hljs-string">&quot;Alex&quot;</span>}) =&gt; <span class="hljs-string">&quot;Jacob and Alex like this&quot;</span>
Kata.Likes(<span class="hljs-keyword">new</span> <span class="hljs-keyword">string</span>[] {<span class="hljs-string">&quot;Max&quot;</span>, <span class="hljs-string">&quot;John&quot;</span>, <span class="hljs-string">&quot;Mark&quot;</span>}) =&gt; <span class="hljs-string">&quot;Max, John and Mark like this&quot;</span>
Kata.Likes(<span class="hljs-keyword">new</span> <span class="hljs-keyword">string</span>[] {<span class="hljs-string">&quot;Alex&quot;</span>, <span class="hljs-string">&quot;Jacob&quot;</span>, <span class="hljs-string">&quot;Mark&quot;</span>, <span class="hljs-string">&quot;Max&quot;</span>}) =&gt; <span class="hljs-string">&quot;Alex, Jacob and 2 others like this&quot;</span></code></pre>
<pre style="display: none;"><code class="language-c">* <span class="hljs-keyword">return</span> must be an allocated <span class="hljs-built_in">string</span>
* <span class="hljs-keyword">do</span> <span class="hljs-keyword">not</span> mutate input

likes({})
    <span class="hljs-comment">// should return &quot;no one likes this&quot;</span>

likes({<span class="hljs-string">&quot;Peter&quot;</span>})
    <span class="hljs-comment">// should return &quot;Peter likes this&quot;</span>

likes({<span class="hljs-string">&quot;Jacob&quot;</span>, <span class="hljs-string">&quot;Alex&quot;</span>})
    <span class="hljs-comment">// should return &quot;Jacob and Alex like this&quot;</span>

likes({<span class="hljs-string">&quot;Max&quot;</span>,<span class="hljs-string">&quot;John&quot;</span>,<span class="hljs-string">&quot;Mark&quot;</span>})
    <span class="hljs-comment">// should return &quot;Max, John and Mark like this&quot;</span>

likes({<span class="hljs-string">&quot;Alex&quot;</span>, <span class="hljs-string">&quot;Jacob&quot;</span>, <span class="hljs-string">&quot;Mark&quot;</span>, <span class="hljs-string">&quot;Max&quot;</span>})
    <span class="hljs-comment">// should return &quot;Alex, Jacob and 2 others like this&quot;</span></code></pre>
<pre style="display: none;"><code class="language-cpp">likes {} <span class="hljs-comment">// must be &quot;no one likes this&quot;</span>
likes {<span class="hljs-string">&quot;Peter&quot;</span>} <span class="hljs-comment">// must be &quot;Peter likes this&quot;</span>
likes {<span class="hljs-string">&quot;Jacob&quot;</span>, <span class="hljs-string">&quot;Alex&quot;</span>} <span class="hljs-comment">// must be &quot;Jacob and Alex like this&quot;</span>
likes {<span class="hljs-string">&quot;Max&quot;</span>, <span class="hljs-string">&quot;John&quot;</span>, <span class="hljs-string">&quot;Mark&quot;</span>} <span class="hljs-comment">// must be &quot;Max, John and Mark like this&quot;</span>
likes {<span class="hljs-string">&quot;Alex&quot;</span>, <span class="hljs-string">&quot;Jacob&quot;</span>, <span class="hljs-string">&quot;Mark&quot;</span>, <span class="hljs-string">&quot;Max&quot;</span>} <span class="hljs-comment">// must be &quot;Alex, Jacob and 2 others like this&quot;</span></code></pre>
<pre style="display: none;"><code class="language-java">likes {} <span class="hljs-comment">// must be &quot;no one likes this&quot;</span>
likes {<span class="hljs-string">&quot;Peter&quot;</span>} <span class="hljs-comment">// must be &quot;Peter likes this&quot;</span>
likes {<span class="hljs-string">&quot;Jacob&quot;</span>, <span class="hljs-string">&quot;Alex&quot;</span>} <span class="hljs-comment">// must be &quot;Jacob and Alex like this&quot;</span>
likes {<span class="hljs-string">&quot;Max&quot;</span>, <span class="hljs-string">&quot;John&quot;</span>, <span class="hljs-string">&quot;Mark&quot;</span>} <span class="hljs-comment">// must be &quot;Max, John and Mark like this&quot;</span>
likes {<span class="hljs-string">&quot;Alex&quot;</span>, <span class="hljs-string">&quot;Jacob&quot;</span>, <span class="hljs-string">&quot;Mark&quot;</span>, <span class="hljs-string">&quot;Max&quot;</span>} <span class="hljs-comment">// must be &quot;Alex, Jacob and 2 others like this&quot;</span></code></pre>
<pre style="display: none;"><code class="language-julia">likes([]) <span class="hljs-comment"># must be &quot;no one likes this&quot;</span>
likes([<span class="hljs-string">&quot;Peter&quot;</span>]) <span class="hljs-comment"># must be &quot;Peter likes this&quot;</span>
likes([<span class="hljs-string">&quot;Jacob&quot;</span>, <span class="hljs-string">&quot;Alex&quot;</span>]) <span class="hljs-comment"># must be &quot;Jacob and Alex like this&quot;</span>
likes([<span class="hljs-string">&quot;Max&quot;</span>, <span class="hljs-string">&quot;John&quot;</span>, <span class="hljs-string">&quot;Mark&quot;</span>]) <span class="hljs-comment"># must be &quot;Max, John and Mark like this&quot;</span>
likes([<span class="hljs-string">&quot;Alex&quot;</span>, <span class="hljs-string">&quot;Jacob&quot;</span>, <span class="hljs-string">&quot;Mark&quot;</span>, <span class="hljs-string">&quot;Max&quot;</span>]) <span class="hljs-comment"># must be &quot;Alex, Jacob and 2 others like this&quot;</span></code></pre>
<p>For 4 or more names, the number in <code>and 2 others</code> simply increases.</p>

### Solution