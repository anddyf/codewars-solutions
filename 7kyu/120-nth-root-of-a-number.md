### Problem:
<p>Given two numbers <em>x</em> and <em>n</em>, calculate the (positive) nth root of x.</p>
<p>This means that being <code>r = result</code>, <code>r^n = x</code>;
Examples</p>
<pre><code class="language-javascript">root(<span class="hljs-number">4</span>, <span class="hljs-number">2</span>);   <span class="hljs-comment">// 2 (the square root of 4 is 2 , 2^2 = 4);</span>
root(<span class="hljs-number">8</span>, <span class="hljs-number">3</span>);   <span class="hljs-comment">// 2 (the cube root of 8 is 2   , 2^3 = 8);</span>
root(<span class="hljs-number">256</span>, <span class="hljs-number">4</span>); <span class="hljs-comment">// 4 (the 4th root of 256 is 4  , 4^4 = 256);</span>
root(<span class="hljs-number">9</span>, <span class="hljs-number">2</span>);   <span class="hljs-comment">// 3 (the square root of 9 is 3 , 3^2 = 9)</span></code></pre>
<pre style="display: none;"><code class="language-coffeescript">root <span class="hljs-number">4</span>, <span class="hljs-number">2</span>   <span class="hljs-comment"># 2 (the square root of 4 is 2 , 2^2 = 4);</span>
root <span class="hljs-number">8</span>, <span class="hljs-number">3</span>   <span class="hljs-comment"># 2 (the cube root of 8 is 2   , 2^3 = 8);</span>
root <span class="hljs-number">256</span>, <span class="hljs-number">4</span> <span class="hljs-comment"># 4 (the 4th root of 256 is 4  , 4^4 = 256);</span>
root <span class="hljs-number">9</span>, <span class="hljs-number">2</span>   <span class="hljs-comment"># 3 (the square root of 9 is 3 , 3^2 = 9)</span></code></pre>
<pre style="display: none;"><code class="language-haskell"><span class="hljs-comment">-- (~~~) stands for almost equal, given that we&apos;re using floating point numbers</span>
<span class="hljs-title">root</span>   <span class="hljs-number">4</span> <span class="hljs-number">2</span> ~~~ <span class="hljs-number">2</span>  
<span class="hljs-title">root</span>   <span class="hljs-number">8</span> <span class="hljs-number">3</span> ~~~ <span class="hljs-number">2</span>
<span class="hljs-title">root</span> <span class="hljs-number">256</span> <span class="hljs-number">4</span> ~~~ <span class="hljs-number">4</span>
<span class="hljs-title">root</span>   <span class="hljs-number">9</span> <span class="hljs-number">2</span> ~~~ <span class="hljs-number">3</span></code></pre>
<pre style="display: none;"><code class="language-python">root(<span class="hljs-number">4</span>, <span class="hljs-number">2</span>)    <span class="hljs-comment"># 2 (the square root of 4 is 2 , 2^2 = 4);</span>
root(<span class="hljs-number">8</span>, <span class="hljs-number">3</span>)    <span class="hljs-comment"># 2 (the cube root of 8 is 2   , 2^3 = 8);</span>
root(<span class="hljs-number">256</span>, <span class="hljs-number">4</span>)  <span class="hljs-comment"># 4 (the 4th root of 256 is 4  , 4^4 = 256);</span>
root(<span class="hljs-number">9</span>, <span class="hljs-number">2</span>)    <span class="hljs-comment"># 3 (the square root of 9 is 3 , 3^2 = 9)</span></code></pre>
<pre style="display: none;"><code class="language-ruby">root(<span class="hljs-number">4</span>, <span class="hljs-number">2</span>)    <span class="hljs-comment"># 2 (the square root of 4 is 2 , 2^2 = 4);</span>
root(<span class="hljs-number">8</span>, <span class="hljs-number">3</span>)    <span class="hljs-comment"># 2 (the cube root of 8 is 2   , 2^3 = 8);</span>
root(<span class="hljs-number">256</span>, <span class="hljs-number">4</span>)  <span class="hljs-comment"># 4 (the 4th root of 256 is 4  , 4^4 = 256);</span>
root(<span class="hljs-number">9</span>, <span class="hljs-number">2</span>)    <span class="hljs-comment"># 3 (the square root of 9 is 3 , 3^2 = 9)</span></code></pre>
<h1 id="inputs">Inputs:</h1>
<ul>
<li>Expect inputs greater than 1 &#xD7; 10^19</li>
<li>Your function will recieve only positive integers</li>
</ul>
<p>Good luck!</p>

### Solution