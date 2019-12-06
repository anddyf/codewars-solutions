### Problem:
<p>Write a function that takes a positive integer and returns the next smaller positive integer containing the same digits.</p>
<p>For example:</p>
<pre><code class="language-javascript">nextSmaller(<span class="hljs-number">21</span>) == <span class="hljs-number">12</span>
nextSmaller(<span class="hljs-number">531</span>) == <span class="hljs-number">513</span>
nextSmaller(<span class="hljs-number">2071</span>) == <span class="hljs-number">2017</span></code></pre>
<pre style="display: none;"><code class="language-haskell"><span class="hljs-title">nextSmaller</span>(<span class="hljs-number">21</span>) == <span class="hljs-number">12</span>
<span class="hljs-title">nextSmaller</span>(<span class="hljs-number">531</span>) == <span class="hljs-number">513</span>
<span class="hljs-title">nextSmaller</span>(<span class="hljs-number">2071</span>) == <span class="hljs-number">2017</span></code></pre>
<pre style="display: none;"><code class="language-csharp">nextSmaller(<span class="hljs-number">21</span>) == <span class="hljs-number">12</span>
nextSmaller(<span class="hljs-number">531</span>) == <span class="hljs-number">513</span>
nextSmaller(<span class="hljs-number">2071</span>) == <span class="hljs-number">2017</span></code></pre>
<pre style="display: none;"><code class="language-python">next_smaller(<span class="hljs-number">21</span>) == <span class="hljs-number">12</span>
next_smaller(<span class="hljs-number">531</span>) == <span class="hljs-number">513</span>
next_smaller(<span class="hljs-number">2071</span>) == <span class="hljs-number">2017</span></code></pre>
<pre style="display: none;"><code class="language-ruby">next_smaller(<span class="hljs-number">21</span>) == <span class="hljs-number">12</span>
next_smaller(<span class="hljs-number">531</span>) == <span class="hljs-number">513</span>
next_smaller(<span class="hljs-number">2071</span>) == <span class="hljs-number">2017</span></code></pre>
<pre style="display: none;"><code class="language-rust">next_smaller(<span class="hljs-number">21</span>) == <span class="hljs-literal">Some</span>(<span class="hljs-number">12</span>)
next_smaller(<span class="hljs-number">531</span>) == <span class="hljs-literal">Some</span>(<span class="hljs-number">513</span>)
next_smaller(<span class="hljs-number">2071</span>) == <span class="hljs-literal">Some</span>(<span class="hljs-number">2017</span>)</code></pre>
<p>Return -1 (for <code>Haskell</code>: return <code>Nothing</code>, for <code>Rust</code>: return <code>None</code>), when there is no smaller number that contains the same digits. Also return -1 when the next smaller number with the same digits would require the leading digit to be zero.</p>
<pre><code class="language-javascript">nextSmaller(<span class="hljs-number">9</span>) == <span class="hljs-number">-1</span>
nextSmaller(<span class="hljs-number">111</span>) == <span class="hljs-number">-1</span>
nextSmaller(<span class="hljs-number">135</span>) == <span class="hljs-number">-1</span>
nextSmaller(<span class="hljs-number">1027</span>) == <span class="hljs-number">-1</span> <span class="hljs-comment">// 0721 is out since we don&apos;t write numbers with leading zeros</span></code></pre>
<pre style="display: none;"><code class="language-csharp">nextSmaller(<span class="hljs-number">9</span>) == <span class="hljs-number">-1</span>
nextSmaller(<span class="hljs-number">111</span>) == <span class="hljs-number">-1</span>
nextSmaller(<span class="hljs-number">135</span>) == <span class="hljs-number">-1</span>
nextSmaller(<span class="hljs-number">1027</span>) == <span class="hljs-number">-1</span> <span class="hljs-comment">// 0721 is out since we don&apos;t write numbers with leading zeros</span></code></pre>
<pre style="display: none;"><code class="language-haskell"><span class="hljs-title">nextSmaller</span>(<span class="hljs-number">9</span>) == <span class="hljs-type">Nothing</span>
<span class="hljs-title">nextSmaller</span>(<span class="hljs-number">135</span>) == <span class="hljs-type">Nothing</span>
<span class="hljs-title">nextSmaller</span>(<span class="hljs-number">1027</span>) == <span class="hljs-type">Nothing</span> <span class="hljs-comment">-- 0721 is out since we don&apos;t write numbers with leading zeros</span></code></pre>
<pre style="display: none;"><code class="language-python">next_smaller(<span class="hljs-number">9</span>) == <span class="hljs-number">-1</span>
next_smaller(<span class="hljs-number">135</span>) == <span class="hljs-number">-1</span>
next_smaller(<span class="hljs-number">1027</span>) == <span class="hljs-number">-1</span>  <span class="hljs-comment"># 0721 is out since we don&apos;t write numbers with leading zeros</span></code></pre>
<pre style="display: none;"><code class="language-ruby">next_smaller(<span class="hljs-number">9</span>) == -<span class="hljs-number">1</span>
next_smaller(<span class="hljs-number">135</span>) == -<span class="hljs-number">1</span>
next_smaller(<span class="hljs-number">1027</span>) == -<span class="hljs-number">1</span>  <span class="hljs-comment"># 0721 is out since we don&apos;t write numbers with leading zeros</span></code></pre>
<pre style="display: none;"><code class="language-rust">next_smaller(<span class="hljs-number">9</span>) == <span class="hljs-literal">None</span>
next_smaller(<span class="hljs-number">135</span>) == <span class="hljs-literal">None</span>
next_smaller(<span class="hljs-number">1027</span>) == <span class="hljs-literal">None</span>  <span class="hljs-comment">// 0721 is out since we don&apos;t write numbers with leading zeros</span></code></pre>
<ul>
<li>some tests will include very large numbers.</li>
<li>test data only employs positive integers.</li>
</ul>
<p><em>The function you write for this challenge is the inverse of this kata: &quot;<a href="http://www.codewars.com/kata/next-bigger-number-with-the-same-digits" target="_blank">Next bigger number with the same digits</a>.&quot;</em></p>

### Solution