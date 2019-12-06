### Problem:
<p>Given two integers <code>a</code> and <code>b</code>, which can be positive or negative, find the sum of all the numbers between including them too and return it. If the two numbers are equal return <code>a</code> or <code>b</code>.</p>
<p><strong>Note:</strong> <code>a</code> and <code>b</code> are not ordered!</p>
<h2 id="examples">Examples</h2>
<pre style="display: none;"><code class="language-javascript">GetSum(<span class="hljs-number">1</span>, <span class="hljs-number">0</span>) == <span class="hljs-number">1</span>   <span class="hljs-comment">// 1 + 0 = 1</span>
GetSum(<span class="hljs-number">1</span>, <span class="hljs-number">2</span>) == <span class="hljs-number">3</span>   <span class="hljs-comment">// 1 + 2 = 3</span>
GetSum(<span class="hljs-number">0</span>, <span class="hljs-number">1</span>) == <span class="hljs-number">1</span>   <span class="hljs-comment">// 0 + 1 = 1</span>
GetSum(<span class="hljs-number">1</span>, <span class="hljs-number">1</span>) == <span class="hljs-number">1</span>   <span class="hljs-comment">// 1 Since both are same</span>
GetSum(<span class="hljs-number">-1</span>, <span class="hljs-number">0</span>) == <span class="hljs-number">-1</span> <span class="hljs-comment">// -1 + 0 = -1</span>
GetSum(<span class="hljs-number">-1</span>, <span class="hljs-number">2</span>) == <span class="hljs-number">2</span>  <span class="hljs-comment">// -1 + 0 + 1 + 2 = 2</span></code></pre>
<pre style="display: none;"><code class="language-coffeescript">getSum(<span class="hljs-number">1</span>, <span class="hljs-number">0</span>) == <span class="hljs-number">1</span>   // <span class="hljs-number">1</span> + <span class="hljs-number">0</span> = <span class="hljs-number">1</span>
getSum(<span class="hljs-number">1</span>, <span class="hljs-number">2</span>) == <span class="hljs-number">3</span>   // <span class="hljs-number">1</span> + <span class="hljs-number">2</span> = <span class="hljs-number">3</span>
getSum(<span class="hljs-number">0</span>, <span class="hljs-number">1</span>) == <span class="hljs-number">1</span>   // <span class="hljs-number">0</span> + <span class="hljs-number">1</span> = <span class="hljs-number">1</span>
getSum(<span class="hljs-number">1</span>, <span class="hljs-number">1</span>) == <span class="hljs-number">1</span>   // <span class="hljs-number">1</span> Since both are same
getSum(<span class="hljs-number">-1</span>, <span class="hljs-number">0</span>) == <span class="hljs-number">-1</span> // <span class="hljs-number">-1</span> + <span class="hljs-number">0</span> = <span class="hljs-number">-1</span>
getSum(<span class="hljs-number">-1</span>, <span class="hljs-number">2</span>) == <span class="hljs-number">2</span>  // <span class="hljs-number">-1</span> + <span class="hljs-number">0</span> + <span class="hljs-number">1</span> + <span class="hljs-number">2</span> = <span class="hljs-number">2</span></code></pre>
<pre style="display: none;"><code class="language-java">GetSum(<span class="hljs-number">1</span>, <span class="hljs-number">0</span>) == <span class="hljs-number">1</span>   <span class="hljs-comment">// 1 + 0 = 1</span>
GetSum(<span class="hljs-number">1</span>, <span class="hljs-number">2</span>) == <span class="hljs-number">3</span>   <span class="hljs-comment">// 1 + 2 = 3</span>
GetSum(<span class="hljs-number">0</span>, <span class="hljs-number">1</span>) == <span class="hljs-number">1</span>   <span class="hljs-comment">// 0 + 1 = 1</span>
GetSum(<span class="hljs-number">1</span>, <span class="hljs-number">1</span>) == <span class="hljs-number">1</span>   <span class="hljs-comment">// 1 Since both are same</span>
GetSum(-<span class="hljs-number">1</span>, <span class="hljs-number">0</span>) == -<span class="hljs-number">1</span> <span class="hljs-comment">// -1 + 0 = -1</span>
GetSum(-<span class="hljs-number">1</span>, <span class="hljs-number">2</span>) == <span class="hljs-number">2</span>  <span class="hljs-comment">// -1 + 0 + 1 + 2 = 2</span></code></pre>
<pre><code class="language-csharp">GetSum(<span class="hljs-number">1</span>, <span class="hljs-number">0</span>) == <span class="hljs-number">1</span>   <span class="hljs-comment">// 1 + 0 = 1</span>
GetSum(<span class="hljs-number">1</span>, <span class="hljs-number">2</span>) == <span class="hljs-number">3</span>   <span class="hljs-comment">// 1 + 2 = 3</span>
GetSum(<span class="hljs-number">0</span>, <span class="hljs-number">1</span>) == <span class="hljs-number">1</span>   <span class="hljs-comment">// 0 + 1 = 1</span>
GetSum(<span class="hljs-number">1</span>, <span class="hljs-number">1</span>) == <span class="hljs-number">1</span>   <span class="hljs-comment">// 1 Since both are same</span>
GetSum(<span class="hljs-number">-1</span>, <span class="hljs-number">0</span>) == <span class="hljs-number">-1</span> <span class="hljs-comment">// -1 + 0 = -1</span>
GetSum(<span class="hljs-number">-1</span>, <span class="hljs-number">2</span>) == <span class="hljs-number">2</span>  <span class="hljs-comment">// -1 + 0 + 1 + 2 = 2</span></code></pre>
<pre style="display: none;"><code class="language-python">get_sum(<span class="hljs-number">1</span>, <span class="hljs-number">0</span>) == <span class="hljs-number">1</span>   // <span class="hljs-number">1</span> + <span class="hljs-number">0</span> = <span class="hljs-number">1</span>
get_sum(<span class="hljs-number">1</span>, <span class="hljs-number">2</span>) == <span class="hljs-number">3</span>   // <span class="hljs-number">1</span> + <span class="hljs-number">2</span> = <span class="hljs-number">3</span>
get_sum(<span class="hljs-number">0</span>, <span class="hljs-number">1</span>) == <span class="hljs-number">1</span>   // <span class="hljs-number">0</span> + <span class="hljs-number">1</span> = <span class="hljs-number">1</span>
get_sum(<span class="hljs-number">1</span>, <span class="hljs-number">1</span>) == <span class="hljs-number">1</span>   // <span class="hljs-number">1</span> Since both are same
get_sum(<span class="hljs-number">-1</span>, <span class="hljs-number">0</span>) == <span class="hljs-number">-1</span> // <span class="hljs-number">-1</span> + <span class="hljs-number">0</span> = <span class="hljs-number">-1</span>
get_sum(<span class="hljs-number">-1</span>, <span class="hljs-number">2</span>) == <span class="hljs-number">2</span>  // <span class="hljs-number">-1</span> + <span class="hljs-number">0</span> + <span class="hljs-number">1</span> + <span class="hljs-number">2</span> = <span class="hljs-number">2</span></code></pre>
<pre style="display: none;"><code class="language-ruby">get_sum(<span class="hljs-number">1</span>, <span class="hljs-number">0</span>) == <span class="hljs-number">1</span>   <span class="hljs-comment"># 1 + 0 = 1</span>
get_sum(<span class="hljs-number">1</span>, <span class="hljs-number">2</span>) == <span class="hljs-number">3</span>   <span class="hljs-comment"># 1 + 2 = 3</span>
get_sum(<span class="hljs-number">0</span>, <span class="hljs-number">1</span>) == <span class="hljs-number">1</span>   <span class="hljs-comment"># 0 + 1 = 1</span>
get_sum(<span class="hljs-number">1</span>, <span class="hljs-number">1</span>) == <span class="hljs-number">1</span>   <span class="hljs-comment"># 1 Since both are same</span>
get_sum(-<span class="hljs-number">1</span>, <span class="hljs-number">0</span>) == -<span class="hljs-number">1</span> <span class="hljs-comment"># -1 + 0 = -1</span>
get_sum(-<span class="hljs-number">1</span>, <span class="hljs-number">2</span>) == <span class="hljs-number">2</span>  <span class="hljs-comment"># -1 + 0 + 1 + 2 = 2</span></code></pre>
<pre style="display: none;"><code class="language-C">get_sum(<span class="hljs-number">1</span>, <span class="hljs-number">0</span>) == <span class="hljs-number">1</span>   <span class="hljs-comment">// 1 + 0 = 1</span>
get_sum(<span class="hljs-number">1</span>, <span class="hljs-number">2</span>) == <span class="hljs-number">3</span>   <span class="hljs-comment">// 1 + 2 = 3</span>
get_sum(<span class="hljs-number">0</span>, <span class="hljs-number">1</span>) == <span class="hljs-number">1</span>   <span class="hljs-comment">// 0 + 1 = 1</span>
get_sum(<span class="hljs-number">1</span>, <span class="hljs-number">1</span>) == <span class="hljs-number">1</span>   <span class="hljs-comment">// 1 Since both are same</span>
get_sum(<span class="hljs-number">-1</span>, <span class="hljs-number">0</span>) == <span class="hljs-number">-1</span> <span class="hljs-comment">// -1 + 0 = -1</span>
get_sum(<span class="hljs-number">-1</span>, <span class="hljs-number">2</span>) == <span class="hljs-number">2</span>  <span class="hljs-comment">// -1 + 0 + 1 + 2 = 2</span></code></pre>
<pre style="display: none;"><code class="language-r">get_sum(<span class="hljs-number">1</span>, <span class="hljs-number">0</span>) == <span class="hljs-number">1</span>   <span class="hljs-comment"># 1 + 0 = 1</span>
get_sum(<span class="hljs-number">1</span>, <span class="hljs-number">2</span>) == <span class="hljs-number">3</span>   <span class="hljs-comment"># 1 + 2 = 3</span>
get_sum(<span class="hljs-number">0</span>, <span class="hljs-number">1</span>) == <span class="hljs-number">1</span>   <span class="hljs-comment"># 0 + 1 = 1</span>
get_sum(<span class="hljs-number">1</span>, <span class="hljs-number">1</span>) == <span class="hljs-number">1</span>   <span class="hljs-comment"># 1 Since both are same</span>
get_sum(-<span class="hljs-number">1</span>, <span class="hljs-number">0</span>) == -<span class="hljs-number">1</span> <span class="hljs-comment"># -1 + 0 = -1</span>
get_sum(-<span class="hljs-number">1</span>, <span class="hljs-number">2</span>) == <span class="hljs-number">2</span>  <span class="hljs-comment"># -1 + 0 + 1 + 2 = 2</span></code></pre>
<pre style="display: none;"><code class="language-nasm"><span class="hljs-keyword">mov</span> <span class="hljs-built_in">edi</span>, <span class="hljs-number">1</span>
<span class="hljs-keyword">mov</span> <span class="hljs-built_in">esi</span>, <span class="hljs-number">0</span>
<span class="hljs-keyword">call</span> get_sum    <span class="hljs-comment">; EAX &lt;- 1 = 1 + 0</span>

<span class="hljs-keyword">mov</span> <span class="hljs-built_in">edi</span>, <span class="hljs-number">1</span>
<span class="hljs-keyword">mov</span> <span class="hljs-built_in">esi</span>, <span class="hljs-number">2</span>
<span class="hljs-keyword">call</span> get_sum    <span class="hljs-comment">; EAX &lt;- 3 = 1 + 2</span>

<span class="hljs-keyword">mov</span> <span class="hljs-built_in">edi</span>, <span class="hljs-number">0</span>
<span class="hljs-keyword">mov</span> <span class="hljs-built_in">esi</span>, <span class="hljs-number">1</span>
<span class="hljs-keyword">call</span> get_sum    <span class="hljs-comment">; EAX &lt;- 1 = 0 + 1</span></code></pre>
<pre style="display: none;"><code class="language-fsharp">getSum <span class="hljs-number">1</span> <span class="hljs-number">0</span> == <span class="hljs-number">1</span>   <span class="hljs-comment">// 1 + 0 = 1</span>
getSum <span class="hljs-number">1</span> <span class="hljs-number">2</span> == <span class="hljs-number">3</span>   <span class="hljs-comment">// 1 + 2 = 3</span>
getSum <span class="hljs-number">0</span> <span class="hljs-number">1</span> == <span class="hljs-number">1</span>   <span class="hljs-comment">// 0 + 1 = 1</span>
getSum <span class="hljs-number">1</span> <span class="hljs-number">1</span> == <span class="hljs-number">1</span>   <span class="hljs-comment">// 1 Since both are same</span>
getSum <span class="hljs-number">-1</span> <span class="hljs-number">0</span> == <span class="hljs-number">-1</span> <span class="hljs-comment">// -1 + 0 = -1</span>
getSum <span class="hljs-number">-1</span> <span class="hljs-number">2</span> == <span class="hljs-number">2</span>  <span class="hljs-comment">// -1 + 0 + 1 + 2 = 2</span></code></pre>

### Solution