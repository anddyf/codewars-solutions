### Problem:
<p>Complete the function/method so that it returns the url with anything after the anchor (<code>#</code>) removed. </p>
<h2 id="examples">Examples</h2>
<pre><code class="language-javascript"><span class="hljs-comment">// returns &apos;www.codewars.com&apos;</span>
removeUrlAnchor(<span class="hljs-string">&apos;www.codewars.com#about&apos;</span>)

<span class="hljs-comment">// returns &apos;www.codewars.com?page=1&apos; </span>
removeUrlAnchor(<span class="hljs-string">&apos;www.codewars.com?page=1&apos;</span>) </code></pre>
<pre style="display: none;"><code class="language-c">remove_url_anchor(<span class="hljs-string">&quot;www.codewars.com#about&quot;</span>)
<span class="hljs-comment">// returns &quot;www.codewars.com&quot;</span>

remove_url_anchor(<span class="hljs-string">&quot;www.codewars.com?page=1&quot;</span>) 
<span class="hljs-comment">// returns &quot;www.codewars.com?page=1&quot;</span></code></pre>
<pre style="display: none;"><code class="language-nasm"><span class="hljs-symbol">url1:</span>  <span class="hljs-built_in">db</span>    <span class="hljs-string">`www.codewars.com#about\0`</span>
<span class="hljs-symbol">url2:</span>  <span class="hljs-built_in">db</span>    <span class="hljs-string">`www.codewars.com?page=1\0`</span>

    <span class="hljs-keyword">mov</span> <span class="hljs-built_in">rdi</span>, url1
    <span class="hljs-keyword">call</span> rmurlahr    <span class="hljs-comment">; RAX &lt;- `www.codewars.com\0`</span>

    <span class="hljs-keyword">mov</span> <span class="hljs-built_in">rdi</span>, url2
    <span class="hljs-keyword">call</span> rmurlahr    <span class="hljs-comment">; RAX &lt;- `www.codewars.com?page=1\0`</span></code></pre>
<pre style="display: none;"><code class="language-coffeescript"><span class="hljs-comment"># returns &apos;www.codewars.com&apos;</span>
removeUrlAnchor(<span class="hljs-string">&apos;www.codewars.com#about&apos;</span>)

<span class="hljs-comment"># returns &apos;www.codewars.com?page=1&apos; </span>
removeUrlAnchor(<span class="hljs-string">&apos;www.codewars.com?page=1&apos;</span>) </code></pre>
<pre style="display: none;"><code class="language-ruby"><span class="hljs-comment"># returns &apos;www.codewars.com&apos;</span>
remove_url_anchor(<span class="hljs-string">&apos;www.codewars.com#about&apos;</span>)

<span class="hljs-comment"># returns &apos;www.codewars.com?page=1&apos; </span>
remove_url_anchor(<span class="hljs-string">&apos;www.codewars.com?page=1&apos;</span>) </code></pre>
<pre style="display: none;"><code class="language-python"><span class="hljs-comment"># returns &apos;www.codewars.com&apos;</span>
remove_url_anchor(<span class="hljs-string">&apos;www.codewars.com#about&apos;</span>)

<span class="hljs-comment"># returns &apos;www.codewars.com?page=1&apos; </span>
remove_url_anchor(<span class="hljs-string">&apos;www.codewars.com?page=1&apos;</span>) </code></pre>
<pre style="display: none;"><code class="language-csharp">Kata.RemoveUrlAnchor(<span class="hljs-string">&quot;www.codewars.com#about&quot;</span>) =&gt; <span class="hljs-string">&quot;www.codewars.com&quot;</span>
Kata.RemoveUrlAnchor(<span class="hljs-string">&quot;www.codewars.com?page=1&quot;</span>) =&gt; <span class="hljs-string">&quot;www.codewars.com?page=1&quot;</span></code></pre>
<pre style="display: none;"><code class="language-haskell"><span class="hljs-title">removeUrlAnchor</span> <span class="hljs-string">&quot;www.codewars.com#about&quot;</span>  == <span class="hljs-string">&quot;www.codewars.com&quot;</span>
<span class="hljs-title">removeUrlAnchor</span> <span class="hljs-string">&quot;www.codewars.com?page=1&quot;</span> == <span class="hljs-string">&quot;www.codewars.com?page=1&quot;</span></code></pre>

### Solution