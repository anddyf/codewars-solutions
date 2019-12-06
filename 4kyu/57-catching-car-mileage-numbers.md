### Problem:
<blockquote>
<p>&quot;7777...<em>8?!??!</em>&quot;, exclaimed Bob, &quot;I missed it again!  Argh!&quot;  Every time there&apos;s an interesting number coming up, he notices and then promptly forgets.  Who <em>doesn&apos;t</em> like catching those one-off interesting mileage numbers?</p>
</blockquote>
<p>Let&apos;s make it so Bob <strong>never</strong> misses another interesting number.  We&apos;ve hacked into his car&apos;s computer, and we have a box hooked up that reads mileage numbers.  We&apos;ve got a box glued to his dash that lights up yellow or green depending on whether it receives a <code>1</code> or a <code>2</code> (respectively).</p>
<p>It&apos;s up to you, intrepid warrior, to glue the parts together.  Write the function that parses the mileage number input, and returns a <code>2</code> if the number is &quot;interesting&quot; (see below), a <code>1</code> if an interesting number occurs within the next two miles, or a <code>0</code> if the number is not interesting.</p>
<p><strong>Note:</strong> In Haskell, we use <code>No</code>, <code>Almost</code> and <code>Yes</code> instead of <code>0</code>, <code>1</code> and <code>2</code>.</p>
<h2 id="interesting-numbers">&quot;Interesting&quot; Numbers</h2>
<p>Interesting numbers are 3-or-more digit numbers that meet one or more of the following criteria:</p>
<ul>
<li>Any digit followed by all zeros: <code>100</code>, <code>90000</code></li>
<li>Every digit is the same number: <code>1111</code></li>
<li>The digits are sequential, incementing<sup>&#x2020;</sup>: <code>1234</code></li>
<li>The digits are sequential, decrementing<sup>&#x2021;</sup>: <code>4321</code></li>
<li>The digits are a palindrome: <code>1221</code> or <code>73837</code></li>
<li>The digits match one of the values in the <code>awesomePhrases</code> array</li>
</ul>
<blockquote>
<p><sup>&#x2020;</sup> For incrementing sequences, <code>0</code> should come after <code>9</code>, and not before  <code>1</code>, as in <code>7890</code>.<br><sup>&#x2021;</sup> For decrementing sequences, <code>0</code> should come after <code>1</code>, and not before  <code>9</code>, as in <code>3210</code>.</p>
</blockquote>
<p>So, you should expect these inputs and outputs:</p>
<pre><code class="language-javascript"><span class="hljs-comment">// &quot;boring&quot; numbers</span>
isInteresting(<span class="hljs-number">3</span>, [<span class="hljs-number">1337</span>, <span class="hljs-number">256</span>]);    <span class="hljs-comment">// 0</span>
isInteresting(<span class="hljs-number">3236</span>, [<span class="hljs-number">1337</span>, <span class="hljs-number">256</span>]); <span class="hljs-comment">// 0</span>

<span class="hljs-comment">// progress as we near an &quot;interesting&quot; number</span>
isInteresting(<span class="hljs-number">11207</span>, []); <span class="hljs-comment">// 0</span>
isInteresting(<span class="hljs-number">11208</span>, []); <span class="hljs-comment">// 0</span>
isInteresting(<span class="hljs-number">11209</span>, []); <span class="hljs-comment">// 1</span>
isInteresting(<span class="hljs-number">11210</span>, []); <span class="hljs-comment">// 1</span>
isInteresting(<span class="hljs-number">11211</span>, []); <span class="hljs-comment">// 2</span>

<span class="hljs-comment">// nearing a provided &quot;awesome phrase&quot;</span>
isInteresting(<span class="hljs-number">1335</span>, [<span class="hljs-number">1337</span>, <span class="hljs-number">256</span>]); <span class="hljs-comment">// 1</span>
isInteresting(<span class="hljs-number">1336</span>, [<span class="hljs-number">1337</span>, <span class="hljs-number">256</span>]); <span class="hljs-comment">// 1</span>
isInteresting(<span class="hljs-number">1337</span>, [<span class="hljs-number">1337</span>, <span class="hljs-number">256</span>]); <span class="hljs-comment">// 2</span></code></pre>
<pre style="display: none;"><code class="language-haskell"><span class="hljs-comment">-- &quot;boring&quot; numbers</span>
<span class="hljs-title">isInteresting</span> <span class="hljs-number">3</span>     [<span class="hljs-number">1337</span>, <span class="hljs-number">256</span>] <span class="hljs-comment">-- 0</span>
<span class="hljs-title">isInteresting</span> <span class="hljs-number">3236</span>  [<span class="hljs-number">1337</span>, <span class="hljs-number">256</span>] <span class="hljs-comment">-- 0</span>

<span class="hljs-comment">-- progress as we near an &quot;interesting&quot; number</span>
<span class="hljs-title">isInteresting</span> <span class="hljs-number">11207</span>  [] <span class="hljs-comment">-- No </span>
<span class="hljs-title">isInteresting</span> <span class="hljs-number">11208</span>  [] <span class="hljs-comment">-- No </span>
<span class="hljs-title">isInteresting</span> <span class="hljs-number">11209</span>  [] <span class="hljs-comment">-- Almost</span>
<span class="hljs-title">isInteresting</span> <span class="hljs-number">11210</span>  [] <span class="hljs-comment">-- Almost</span>
<span class="hljs-title">isInteresting</span> <span class="hljs-number">11211</span>  [] <span class="hljs-comment">-- Yes</span>

<span class="hljs-comment">-- nearing a provided &quot;awesome phrase&quot;</span>
<span class="hljs-title">isInteresting</span> <span class="hljs-number">1335</span>  [<span class="hljs-number">1337</span>, <span class="hljs-number">256</span>] <span class="hljs-comment">-- Almost</span>
<span class="hljs-title">isInteresting</span> <span class="hljs-number">1336</span>  [<span class="hljs-number">1337</span>, <span class="hljs-number">256</span>] <span class="hljs-comment">-- Almost</span>
<span class="hljs-title">isInteresting</span> <span class="hljs-number">1337</span>  [<span class="hljs-number">1337</span>, <span class="hljs-number">256</span>] <span class="hljs-comment">-- Yes</span></code></pre>
<pre style="display: none;"><code class="language-coffeescript"><span class="hljs-comment"># &quot;boring&quot; numbers</span>
isInteresting(<span class="hljs-number">3</span>, [<span class="hljs-number">1337</span>, <span class="hljs-number">256</span>])    <span class="hljs-comment"># 0</span>
isInteresting(<span class="hljs-number">3236</span>, [<span class="hljs-number">1337</span>, <span class="hljs-number">256</span>]) <span class="hljs-comment"># 0</span>

<span class="hljs-comment"># progress as we near an &quot;interesting&quot; number</span>
isInteresting(<span class="hljs-number">11207</span>, []) <span class="hljs-comment"># 0</span>
isInteresting(<span class="hljs-number">11208</span>, []) <span class="hljs-comment"># 0</span>
isInteresting(<span class="hljs-number">11209</span>, []) <span class="hljs-comment"># 1</span>
isInteresting(<span class="hljs-number">11210</span>, []) <span class="hljs-comment"># 1</span>
isInteresting(<span class="hljs-number">11211</span>, []) <span class="hljs-comment"># 2</span>

<span class="hljs-comment"># nearing a provided &quot;awesome phrase&quot;</span>
isInteresting(<span class="hljs-number">1335</span>, [<span class="hljs-number">1337</span>, <span class="hljs-number">256</span>]) <span class="hljs-comment"># 1</span>
isInteresting(<span class="hljs-number">1336</span>, [<span class="hljs-number">1337</span>, <span class="hljs-number">256</span>]) <span class="hljs-comment"># 1</span>
isInteresting(<span class="hljs-number">1337</span>, [<span class="hljs-number">1337</span>, <span class="hljs-number">256</span>]) <span class="hljs-comment"># 2</span></code></pre>
<pre style="display: none;"><code class="language-java"><span class="hljs-comment">// &quot;boring&quot; numbers</span>
CarMileage.isInteresting(<span class="hljs-number">3</span>, <span class="hljs-keyword">new</span> <span class="hljs-keyword">int</span>[]{<span class="hljs-number">1337</span>, <span class="hljs-number">256</span>});    <span class="hljs-comment">// 0</span>
CarMileage.isInteresting(<span class="hljs-number">3236</span>, <span class="hljs-keyword">new</span> <span class="hljs-keyword">int</span>[]{<span class="hljs-number">1337</span>, <span class="hljs-number">256</span>}); <span class="hljs-comment">// 0</span>

<span class="hljs-comment">// progress as we near an &quot;interesting&quot; number</span>
CarMileage.isInteresting(<span class="hljs-number">11207</span>, <span class="hljs-keyword">new</span> <span class="hljs-keyword">int</span>[]{}); <span class="hljs-comment">// 0</span>
CarMileage.isInteresting(<span class="hljs-number">11208</span>, <span class="hljs-keyword">new</span> <span class="hljs-keyword">int</span>[]{}); <span class="hljs-comment">// 0</span>
CarMileage.isInteresting(<span class="hljs-number">11209</span>, <span class="hljs-keyword">new</span> <span class="hljs-keyword">int</span>[]{}); <span class="hljs-comment">// 1</span>
CarMileage.isInteresting(<span class="hljs-number">11210</span>, <span class="hljs-keyword">new</span> <span class="hljs-keyword">int</span>[]{}); <span class="hljs-comment">// 1</span>
CarMileage.isInteresting(<span class="hljs-number">11211</span>, <span class="hljs-keyword">new</span> <span class="hljs-keyword">int</span>[]{}); <span class="hljs-comment">// 2</span>

<span class="hljs-comment">// nearing a provided &quot;awesome phrase&quot;</span>
CarMileage.isInteresting(<span class="hljs-number">1335</span>, <span class="hljs-keyword">new</span> <span class="hljs-keyword">int</span>[]{<span class="hljs-number">1337</span>, <span class="hljs-number">256</span>}); <span class="hljs-comment">// 1</span>
CarMileage.isInteresting(<span class="hljs-number">1336</span>, <span class="hljs-keyword">new</span> <span class="hljs-keyword">int</span>[]{<span class="hljs-number">1337</span>, <span class="hljs-number">256</span>}); <span class="hljs-comment">// 1</span>
CarMileage.isInteresting(<span class="hljs-number">1337</span>, <span class="hljs-keyword">new</span> <span class="hljs-keyword">int</span>[]{<span class="hljs-number">1337</span>, <span class="hljs-number">256</span>}); <span class="hljs-comment">// 2</span></code></pre>
<pre style="display: none;"><code class="language-python"><span class="hljs-comment"># &quot;boring&quot; numbers</span>
is_interesting(<span class="hljs-number">3</span>, [<span class="hljs-number">1337</span>, <span class="hljs-number">256</span>])    <span class="hljs-comment"># 0</span>
is_interesting(<span class="hljs-number">3236</span>, [<span class="hljs-number">1337</span>, <span class="hljs-number">256</span>]) <span class="hljs-comment"># 0</span>

<span class="hljs-comment"># progress as we near an &quot;interesting&quot; number</span>
is_interesting(<span class="hljs-number">11207</span>, []) <span class="hljs-comment"># 0</span>
is_interesting(<span class="hljs-number">11208</span>, []) <span class="hljs-comment"># 0</span>
is_interesting(<span class="hljs-number">11209</span>, []) <span class="hljs-comment"># 1</span>
is_interesting(<span class="hljs-number">11210</span>, []) <span class="hljs-comment"># 1</span>
is_interesting(<span class="hljs-number">11211</span>, []) <span class="hljs-comment"># 2</span>

<span class="hljs-comment"># nearing a provided &quot;awesome phrase&quot;</span>
is_interesting(<span class="hljs-number">1335</span>, [<span class="hljs-number">1337</span>, <span class="hljs-number">256</span>]) <span class="hljs-comment"># 1</span>
is_interesting(<span class="hljs-number">1336</span>, [<span class="hljs-number">1337</span>, <span class="hljs-number">256</span>]) <span class="hljs-comment"># 1</span>
is_interesting(<span class="hljs-number">1337</span>, [<span class="hljs-number">1337</span>, <span class="hljs-number">256</span>]) <span class="hljs-comment"># 2</span></code></pre>
<pre style="display: none;"><code class="language-ruby"><span class="hljs-comment"># &quot;boring&quot; numbers</span>
is_interesting(<span class="hljs-number">3</span>, [<span class="hljs-number">1337</span>, <span class="hljs-number">256</span>])    <span class="hljs-comment"># 0</span>
is_interesting(<span class="hljs-number">3236</span>, [<span class="hljs-number">1337</span>, <span class="hljs-number">256</span>]) <span class="hljs-comment"># 0</span>

<span class="hljs-comment"># progress as we near an &quot;interesting&quot; number</span>
is_interesting(<span class="hljs-number">11207</span>, []) <span class="hljs-comment"># 0</span>
is_interesting(<span class="hljs-number">11208</span>, []) <span class="hljs-comment"># 0</span>
is_interesting(<span class="hljs-number">11209</span>, []) <span class="hljs-comment"># 1</span>
is_interesting(<span class="hljs-number">11210</span>, []) <span class="hljs-comment"># 1</span>
is_interesting(<span class="hljs-number">11211</span>, []) <span class="hljs-comment"># 2</span>

<span class="hljs-comment"># nearing a provided &quot;awesome phrase&quot;</span>
is_interesting(<span class="hljs-number">1335</span>, [<span class="hljs-number">1337</span>, <span class="hljs-number">256</span>]) <span class="hljs-comment"># 1</span>
is_interesting(<span class="hljs-number">1336</span>, [<span class="hljs-number">1337</span>, <span class="hljs-number">256</span>]) <span class="hljs-comment"># 1</span>
is_interesting(<span class="hljs-number">1337</span>, [<span class="hljs-number">1337</span>, <span class="hljs-number">256</span>]) <span class="hljs-comment"># 2</span></code></pre>
<pre style="display: none;"><code class="language-csharp"><span class="hljs-comment">// &quot;boring&quot; numbers</span>
Kata.IsInteresting(<span class="hljs-number">3</span>, <span class="hljs-keyword">new</span> List&lt;<span class="hljs-keyword">int</span>&gt;() { <span class="hljs-number">1337</span>, <span class="hljs-number">256</span> });    <span class="hljs-comment">// 0</span>
Kata.IsInteresting(<span class="hljs-number">3236</span>, <span class="hljs-keyword">new</span> List&lt;<span class="hljs-keyword">int</span>&gt;() { <span class="hljs-number">1337</span>, <span class="hljs-number">256</span> }); <span class="hljs-comment">// 0</span>

<span class="hljs-comment">// progress as we near an &quot;interesting&quot; number</span>
Kata.IsInteresting(<span class="hljs-number">11207</span>, <span class="hljs-keyword">new</span> List&lt;<span class="hljs-keyword">int</span>&gt;() { });   <span class="hljs-comment">// 0</span>
Kata.IsInteresting(<span class="hljs-number">11208</span>, <span class="hljs-keyword">new</span> List&lt;<span class="hljs-keyword">int</span>&gt;() { });   <span class="hljs-comment">// 0</span>
Kata.IsInteresting(<span class="hljs-number">11209</span>, <span class="hljs-keyword">new</span> List&lt;<span class="hljs-keyword">int</span>&gt;() { });   <span class="hljs-comment">// 1</span>
Kata.IsInteresting(<span class="hljs-number">11210</span>, <span class="hljs-keyword">new</span> List&lt;<span class="hljs-keyword">int</span>&gt;() { });   <span class="hljs-comment">// 1</span>
Kata.IsInteresting(<span class="hljs-number">11211</span>, <span class="hljs-keyword">new</span> List&lt;<span class="hljs-keyword">int</span>&gt;() { });   <span class="hljs-comment">// 2</span>

<span class="hljs-comment">// nearing a provided &quot;awesome phrase&quot;</span>
Kata.IsInteresting(<span class="hljs-number">1335</span>, <span class="hljs-keyword">new</span> List&lt;<span class="hljs-keyword">int</span>&gt;() { <span class="hljs-number">1337</span>, <span class="hljs-number">256</span> });   <span class="hljs-comment">// 1</span>
Kata.IsInteresting(<span class="hljs-number">1336</span>, <span class="hljs-keyword">new</span> List&lt;<span class="hljs-keyword">int</span>&gt;() { <span class="hljs-number">1337</span>, <span class="hljs-number">256</span> });   <span class="hljs-comment">// 1</span>
Kata.IsInteresting(<span class="hljs-number">1337</span>, <span class="hljs-keyword">new</span> List&lt;<span class="hljs-keyword">int</span>&gt;() { <span class="hljs-number">1337</span>, <span class="hljs-number">256</span> });   <span class="hljs-comment">// 2</span></code></pre>
<h2 id="error-checking">Error Checking</h2>
<ul>
<li>A number is only interesting if it is greater than <code>99</code>!</li>
<li>Input will <em>always</em> be an integer greater than <code>0</code>, and less than <code>1,000,000,000</code>. </li>
<li>The <code>awesomePhrases</code> array will always be provided, and will always be an array, but may be empty.  (Not <em>everyone</em> thinks numbers spell funny words...)</li>
<li>You should only ever output <code>0</code>, <code>1</code>, or <code>2</code>.</li>
</ul>

### Solution