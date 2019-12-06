### Problem:
<hr>
<h2 id="clear-cutters-needs-your-help"><strong>CLEAR CUTTER&apos;S NEEDS YOUR HELP!</strong></h2>
<p>The logging company Clear Cutter&apos;s makes its money by optimizing the price-to-length of each log they cut before selling them. An example of one of their price tables is included:</p>
<pre><code class="language-python"><span class="hljs-comment"># So a price table p</span>
p = [ <span class="hljs-number">0</span>,  <span class="hljs-number">1</span>,  <span class="hljs-number">5</span>,  <span class="hljs-number">8</span>,  <span class="hljs-number">9</span>, <span class="hljs-number">10</span>]

<span class="hljs-comment"># Can be imagined as:</span>
<span class="hljs-comment"># length i | 0  1  2  3  4  5 *in feet*</span>
<span class="hljs-comment"># price pi | 0  1  5  8  9 10 *in money*</span></code></pre>
<p>They hired an intern last summer to create a recursive function for them to easily calculate the most profitable price for a log of length <em>n</em> using price table <em>p</em> as follows:</p>
<pre><code class="language-python"><span class="hljs-function"><span class="hljs-keyword">def</span> <span class="hljs-title">cut_log</span><span class="hljs-params">(p, n)</span>:</span>
   <span class="hljs-keyword">if</span> (n == <span class="hljs-number">0</span>):
      <span class="hljs-keyword">return</span> <span class="hljs-number">0</span>
   q = <span class="hljs-number">-1</span>
   <span class="hljs-keyword">for</span> i <span class="hljs-keyword">in</span> range(<span class="hljs-number">1</span>, n+<span class="hljs-number">1</span>)
      q = max(q, p[i] + cut_log(p, n-i))
   <span class="hljs-keyword">return</span> q</code></pre>
<p>An example of the working code:</p>
<pre><code class="language-python">cut_log(p, <span class="hljs-number">5</span>) <span class="hljs-comment"># =&gt; 13</span>
<span class="hljs-comment"># 5ft = $10, BUT 2ft + 3ft = 5ft -&gt; $5 + $8 = $13 which is greater in value</span></code></pre>
<p>However, their senior software engineer realized that the number of recursive calls in the function gives it an awful running time of 2^n (as this function iterates through ALL 2^n-1 possibilities for a log of length n).</p>
<p>Having discovered this problem just as you&apos;ve arrived for your internship, he responsibly delegates the issue to you.</p>
<p>Using the power of Stack Overflow and Google, he wants you to create a solution that runs in &#x398;(n^2) time so that it doesn&apos;t take 5 hours to calculate the optimal price for a log of size 50. (He also suggests to research the problem using the keywords in the tags)</p>
<p><strong>(Be aware that if your algorithm is not efficient, it will attempt to look at 2^49 = 562949953421312 nodes instead of 49^2 = 2401... The solution will automatically fail if it takes longer than 6 seconds... which occurs at right around Log 23)</strong></p>

### Solution