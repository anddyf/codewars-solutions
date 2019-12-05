### Problem:
<h1 id="sentence-smash">Sentence Smash</h1>
<p>Write a method <code>smash</code> that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. <strong>Be careful, there shouldn&apos;t be a space at the beginning or the end of the sentence!</strong></p>
<h2 id="example">Example</h2>
<pre><code class="language-javascript"><span class="hljs-keyword">var</span> words = [<span class="hljs-string">&apos;hello&apos;</span>, <span class="hljs-string">&apos;world&apos;</span>, <span class="hljs-string">&apos;this&apos;</span>, <span class="hljs-string">&apos;is&apos;</span>, <span class="hljs-string">&apos;great&apos;</span>];
smash(words); <span class="hljs-comment">// returns &quot;hello world this is great&quot;</span></code></pre>
<pre style="display: none;"><code class="language-php">smash([<span class="hljs-string">&apos;hello&apos;</span>, <span class="hljs-string">&apos;world&apos;</span>, <span class="hljs-string">&apos;this&apos;</span>, <span class="hljs-string">&apos;is&apos;</span>, <span class="hljs-string">&apos;great&apos;</span>]); <span class="hljs-comment">// =&gt; &apos;hello world this is great&apos;</span></code></pre>
<pre style="display: none;"><code class="language-dart">smash([<span class="hljs-string">&apos;hello&apos;</span>, <span class="hljs-string">&apos;world&apos;</span>, <span class="hljs-string">&apos;this&apos;</span>, <span class="hljs-string">&apos;is&apos;</span>, <span class="hljs-string">&apos;great&apos;</span>]); <span class="hljs-comment">// =&gt; &apos;hello world this is great&apos;</span></code></pre>
<pre style="display: none;"><code class="language-python">words = [<span class="hljs-string">&apos;hello&apos;</span>, <span class="hljs-string">&apos;world&apos;</span>, <span class="hljs-string">&apos;this&apos;</span>, <span class="hljs-string">&apos;is&apos;</span>, <span class="hljs-string">&apos;great&apos;</span>]
smash(words) <span class="hljs-comment"># returns &quot;hello world this is great&quot;</span></code></pre>
<pre style="display: none;"><code class="language-ruby">words = [<span class="hljs-string">&apos;hello&apos;</span>, <span class="hljs-string">&apos;world&apos;</span>, <span class="hljs-string">&apos;this&apos;</span>, <span class="hljs-string">&apos;is&apos;</span>, <span class="hljs-string">&apos;great&apos;</span>]
smash(words) <span class="hljs-comment"># returns &quot;hello world this is great&quot;</span></code></pre>
<pre style="display: none;"><code class="language-haskell"><span class="hljs-title">smash</span> [<span class="hljs-string">&quot;hello&quot;</span>, <span class="hljs-string">&quot;world&quot;</span>, <span class="hljs-string">&quot;this&quot;</span>, <span class="hljs-string">&quot;is&quot;</span>, <span class="hljs-string">&quot;great&quot;</span>] `shouldBe` <span class="hljs-string">&quot;hello world this is great&quot;</span></code></pre>
<pre style="display: none;"><code class="language-elixir">words = [<span class="hljs-string">&quot;hello&quot;</span>, <span class="hljs-string">&quot;world&quot;</span>, <span class="hljs-string">&quot;this&quot;</span>, <span class="hljs-string">&quot;is&quot;</span>, <span class="hljs-string">&quot;great&quot;</span>]
smash(words) <span class="hljs-comment"># returns &quot;hello world this is great&quot;</span></code></pre>
<pre style="display: none;"><code class="language-csharp">Kata.Smash(<span class="hljs-keyword">new</span> <span class="hljs-keyword">string</span>[] {<span class="hljs-string">&quot;hello&quot;</span>, <span class="hljs-string">&quot;world&quot;</span>, <span class="hljs-string">&quot;this&quot;</span>, <span class="hljs-string">&quot;is&quot;</span>, <span class="hljs-string">&quot;great&quot;</span>}) =&gt; <span class="hljs-string">&quot;hello world this is great&quot;</span>;</code></pre>
<pre style="display: none;"><code class="language-r">words = c(<span class="hljs-string">&quot;hello&quot;</span>, <span class="hljs-string">&quot;world&quot;</span>, <span class="hljs-string">&quot;this&quot;</span>, <span class="hljs-string">&quot;is&quot;</span>, <span class="hljs-string">&quot;great&quot;</span>)
smash(words)
[<span class="hljs-number">1</span>] <span class="hljs-string">&quot;hello world this is great&quot;</span></code></pre>
<pre style="display: none;"><code class="language-julia">words = [<span class="hljs-string">&quot;hello&quot;</span>, <span class="hljs-string">&quot;world&quot;</span>, <span class="hljs-string">&quot;this&quot;</span>, <span class="hljs-string">&quot;is&quot;</span>, <span class="hljs-string">&quot;great&quot;</span>]
smash(words) <span class="hljs-comment"># returns &quot;hello world this is great&quot;</span></code></pre>
<pre style="display: none;"><code class="language-racket"><span class="hljs-comment">;; use a list intead of an array in racket</span>
(<span class="hljs-name"><span class="hljs-builtin-name">define</span></span> words &apos;(<span class="hljs-string">&quot;hello&quot;</span> <span class="hljs-string">&quot;world&quot;</span> <span class="hljs-string">&quot;this&quot;</span> <span class="hljs-string">&quot;is&quot;</span> <span class="hljs-string">&quot;great&quot;</span>))
(<span class="hljs-name">smash</span> words) <span class="hljs-comment">; returns &quot;hello world this is great&quot;</span></code></pre>
<h2 id="assumptions">Assumptions</h2>
<ul>
<li>You can assume that you are only given words.</li>
<li>You cannot assume the size of the array.</li>
<li>You can assume that you will always get an array.</li>
</ul>
<h2 id="what-were-testing">What We&apos;re Testing</h2>
<p>We&apos;re testing basic loops and string manipulation. This is for beginners who are just learning loops and string manipulation.</p>
<h2 id="disclaimer">Disclaimer</h2>
<p>This is for beginners so we want to test basic loops and string manipulation. Advanced users should easily be able to do this in one line.</p>

### Solution