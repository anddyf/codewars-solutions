### Problem:
<p>Write a function <code>toWeirdCase</code> (<code>weirdcase</code> in Ruby) that accepts a string, and returns the same string with all even indexed characters in each word upper cased, and all odd indexed characters in each word lower cased. The indexing just explained is zero based, so the zero-ith index is even, therefore that character should be upper cased.</p>
<p>The passed in string will only consist of alphabetical characters and spaces(<code>&apos; &apos;</code>). Spaces will only be present if there are multiple words. Words will be separated by a single space(<code>&apos; &apos;</code>).</p>
<h3 id="examples">Examples:</h3>
<pre><code class="language-javascript">toWeirdCase( <span class="hljs-string">&quot;String&quot;</span> );<span class="hljs-comment">//=&gt; returns &quot;StRiNg&quot;</span>
toWeirdCase( <span class="hljs-string">&quot;Weird string case&quot;</span> );<span class="hljs-comment">//=&gt; returns &quot;WeIrD StRiNg CaSe&quot;</span></code></pre>
<pre style="display: none;"><code class="language-coffeescript">toWeirdCase( <span class="hljs-string">&quot;String&quot;</span> );<span class="hljs-regexp">//</span>=&gt; returns <span class="hljs-string">&quot;StRiNg&quot;</span>
toWeirdCase( <span class="hljs-string">&quot;Weird string case&quot;</span> );<span class="hljs-regexp">//</span>=&gt; returns <span class="hljs-string">&quot;WeIrD StRiNg CaSe&quot;</span></code></pre>
<pre style="display: none;"><code class="language-python">to_weird_case(<span class="hljs-string">&apos;String&apos;</span>); <span class="hljs-comment"># =&gt; returns &apos;StRiNg&apos;</span>
to_weird_case(<span class="hljs-string">&apos;Weird string case&apos;</span>) <span class="hljs-comment"># =&gt; returns &apos;WeIrD StRiNg CaSe&apos;</span></code></pre>
<pre style="display: none;"><code class="language-haskell"><span class="hljs-title">toWeirdCase</span> <span class="hljs-string">&quot;String&quot;</span>            `shouldBe` <span class="hljs-string">&quot;StRiNg&quot;</span>
<span class="hljs-title">toWeirdCase</span> <span class="hljs-string">&quot;Weird string case&quot;</span> `shouldBe` <span class="hljs-string">&quot;WeIrD StRiNg CaSe&quot;</span></code></pre>
<pre style="display: none;"><code class="language-ruby">weirdcase( <span class="hljs-string">&quot;String&quot;</span> )<span class="hljs-comment">#=&gt; returns &quot;StRiNg&quot;</span>
weirdcase( <span class="hljs-string">&quot;Weird string case&quot;</span> );<span class="hljs-comment">#=&gt; returns &quot;WeIrD StRiNg CaSe&quot;</span></code></pre>
<pre style="display: none;"><code class="language-php">toWeirdCase(<span class="hljs-string">&quot;String&quot;</span>); <span class="hljs-comment">// =&gt; returns &quot;StRiNg&quot;</span>
toWeirdCase(<span class="hljs-string">&quot;Weird string case&quot;</span>); <span class="hljs-comment">// =&gt; returns &quot;WeIrD StRiNg CaSe&quot;</span></code></pre>
<pre style="display: none;"><code class="language-go">toWeirdCase(<span class="hljs-string">&quot;String&quot;</span>) <span class="hljs-comment">// =&gt; returns &quot;StRiNg&quot;</span>
toWeirdCase(<span class="hljs-string">&quot;Weird string case&quot;</span>) <span class="hljs-comment">// =&gt; returns &quot;WeIrD StRiNg CaSe&quot;</span></code></pre>

### Solution