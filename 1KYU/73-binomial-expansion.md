### Problem:
<p>The purpose of this kata is to write a program that can do some algebra.
Write a function <code>expand</code> that takes in an expresion with a single, one character variable, and expands it. The expresion is in the form <code>(ax+b)^n</code> where <code>a</code> and <code>b</code> are integers which may be positive or negative, <code>x</code> is any one character long variable, and <code>n</code> is a natural number. If a = 1, no coeficient will be placed in front of the variable. If a = -1, a &quot;-&quot; will be placed in front of the variable. </p>
<p>The expanded form should be returned as a string in the form <code>ax^b+cx^d+ex^f...</code> where <code>a</code>, <code>c</code>, and <code>e</code> are the coefficients of the term, <code>x</code> is the original one character variable that was passed in the original expression and <code>b</code>, <code>d</code>, and <code>f</code>, are the powers that <code>x</code> is being raised to in each term and are in decreasing order.
If the coeficient of a term is zero, the term should not be included. If the coeficient of a term is one, the coeficient should not be included. If the coeficient of a term is -1, only the &quot;-&quot; should be included. If the power of the term is 0, only the coeficient should be included. If the power of the term is 1, the carrot and power should be excluded.</p>
<hr>
<h2 id="examples">Examples:</h2>
<pre><code class="language-javascript">expand(<span class="hljs-string">&quot;(x+1)^2&quot;</span>);      <span class="hljs-comment">// returns &quot;x^2+2x+1&quot;</span>
expand(<span class="hljs-string">&quot;(p-1)^3&quot;</span>);      <span class="hljs-comment">// returns &quot;p^3-3p^2+3p-1&quot;</span>
expand(<span class="hljs-string">&quot;(2f+4)^6&quot;</span>);     <span class="hljs-comment">// returns &quot;64f^6+768f^5+3840f^4+10240f^3+15360f^2+12288f+4096&quot;</span>
expand(<span class="hljs-string">&quot;(-2a-4)^0&quot;</span>);    <span class="hljs-comment">// returns &quot;1&quot;</span>
expand(<span class="hljs-string">&quot;(-12t+43)^2&quot;</span>);  <span class="hljs-comment">// returns &quot;144t^2-1032t+1849&quot;</span>
expand(<span class="hljs-string">&quot;(r+0)^203&quot;</span>);    <span class="hljs-comment">// returns &quot;r^203&quot;</span>
expand(<span class="hljs-string">&quot;(-x-1)^2&quot;</span>);     <span class="hljs-comment">// returns &quot;x^2+2x+1&quot;</span></code></pre>
<pre style="display: none;"><code class="language-python">expand(<span class="hljs-string">&quot;(x+1)^2&quot;</span>)      <span class="hljs-comment"># returns &quot;x^2+2x+1&quot;</span>
expand(<span class="hljs-string">&quot;(p-1)^3&quot;</span>)      <span class="hljs-comment"># returns &quot;p^3-3p^2+3p-1&quot;</span>
expand(<span class="hljs-string">&quot;(2f+4)^6&quot;</span>)     <span class="hljs-comment"># returns &quot;64f^6+768f^5+3840f^4+10240f^3+15360f^2+12288f+4096&quot;</span>
expand(<span class="hljs-string">&quot;(-2a-4)^0&quot;</span>)    <span class="hljs-comment"># returns &quot;1&quot;</span>
expand(<span class="hljs-string">&quot;(-12t+43)^2&quot;</span>)  <span class="hljs-comment"># returns &quot;144t^2-1032t+1849&quot;</span>
expand(<span class="hljs-string">&quot;(r+0)^203&quot;</span>)    <span class="hljs-comment"># returns &quot;r^203&quot;</span>
expand(<span class="hljs-string">&quot;(-x-1)^2&quot;</span>)     <span class="hljs-comment"># returns &quot;x^2+2x+1&quot;</span></code></pre>
<pre style="display: none;"><code class="language-java">KataSolution.expand(<span class="hljs-string">&quot;(x+1)^2&quot;</span>);      <span class="hljs-comment">// returns &quot;x^2+2x+1&quot;</span>
KataSolution.expand(<span class="hljs-string">&quot;(p-1)^3&quot;</span>);      <span class="hljs-comment">// returns &quot;p^3-3p^2+3p-1&quot;</span>
KataSolution.expand(<span class="hljs-string">&quot;(2f+4)^6&quot;</span>);     <span class="hljs-comment">// returns &quot;64f^6+768f^5+3840f^4+10240f^3+15360f^2+12288f+4096&quot;</span>
KataSolution.expand(<span class="hljs-string">&quot;(-2a-4)^0&quot;</span>);    <span class="hljs-comment">// returns &quot;1&quot;</span>
KataSolution.expand(<span class="hljs-string">&quot;(-12t+43)^2&quot;</span>);  <span class="hljs-comment">// returns &quot;144t^2-1032t+1849&quot;</span>
KataSolution.expand(<span class="hljs-string">&quot;(r+0)^203&quot;</span>);    <span class="hljs-comment">// returns &quot;r^203&quot;</span>
KataSolution.expand(<span class="hljs-string">&quot;(-x-1)^2&quot;</span>);     <span class="hljs-comment">// returns &quot;x^2+2x+1&quot;</span></code></pre>
<pre style="display: none;"><code class="language-csharp">KataSolution.Expand(<span class="hljs-string">&quot;(x+1)^2&quot;</span>);      <span class="hljs-comment">// returns &quot;x^2+2x+1&quot;</span>
KataSolution.Expand(<span class="hljs-string">&quot;(p-1)^3&quot;</span>);      <span class="hljs-comment">// returns &quot;p^3-3p^2+3p-1&quot;</span>
KataSolution.Expand(<span class="hljs-string">&quot;(2f+4)^6&quot;</span>);     <span class="hljs-comment">// returns &quot;64f^6+768f^5+3840f^4+10240f^3+15360f^2+12288f+4096&quot;</span>
KataSolution.Expand(<span class="hljs-string">&quot;(-2a-4)^0&quot;</span>);    <span class="hljs-comment">// returns &quot;1&quot;</span>
KataSolution.Expand(<span class="hljs-string">&quot;(-12t+43)^2&quot;</span>);  <span class="hljs-comment">// returns &quot;144t^2-1032t+1849&quot;</span>
KataSolution.Expand(<span class="hljs-string">&quot;(r+0)^203&quot;</span>);    <span class="hljs-comment">// returns &quot;r^203&quot;</span>
KataSolution.Expand(<span class="hljs-string">&quot;(-x-1)^2&quot;</span>);     <span class="hljs-comment">// returns &quot;x^2+2x+1&quot;</span></code></pre>
<pre style="display: none;"><code class="language-ruby">expand(<span class="hljs-string">&quot;(x+1)^2&quot;</span>)      <span class="hljs-comment"># returns &quot;x^2+2x+1&quot;</span>
expand(<span class="hljs-string">&quot;(p-1)^3&quot;</span>)      <span class="hljs-comment"># returns &quot;p^3-3p^2+3p-1&quot;</span>
expand(<span class="hljs-string">&quot;(2f+4)^6&quot;</span>)     <span class="hljs-comment"># returns &quot;64f^6+768f^5+3840f^4+10240f^3+15360f^2+12288f+4096&quot;</span>
expand(<span class="hljs-string">&quot;(-2a-4)^0&quot;</span>)    <span class="hljs-comment"># returns &quot;1&quot;</span>
expand(<span class="hljs-string">&quot;(-12t+43)^2&quot;</span>)  <span class="hljs-comment"># returns &quot;144t^2-1032t+1849&quot;</span>
expand(<span class="hljs-string">&quot;(r+0)^203&quot;</span>)    <span class="hljs-comment"># returns &quot;r^203&quot;</span>
expand(<span class="hljs-string">&quot;(-x-1)^2&quot;</span>)     <span class="hljs-comment"># returns &quot;x^2+2x+1&quot;</span></code></pre>

### Solution