### Problem:
<p>This calculator takes values that could be written in a browsers route path as a single string. It then returns the result as a number (or an error message).</p>
<p>Route paths use the &apos;/&apos; symbol so this can&apos;t be in our calculator. Instead we are using the &apos;$&apos; symbol as our divide operator.</p>
<p>You will be passed a string of any length containing numbers and operators:</p>
<ul>
<li>&apos;+&apos; = add        </li>
<li>&apos;-&apos; = subtract  </li>
<li>&apos;*&apos; = multiply </li>
<li>&apos;$&apos; = divide   </li>
</ul>
<p>Your task is to break the string down and calculate the expression using this order of operations. (division =&gt; multiplication =&gt; subtraction =&gt; addition)</p>
<p>If you are given an invalid input (i.e. any character except <code>.0123456789+-*$</code>) you should return the error message:<code>&apos;400: Bad request&apos;</code></p>
<h3 id="remember">Remember:</h3>
<ol>
<li>Operations are infinite</li>
<li>Order of operations is imperitive</li>
<li>No <code>eval</code> or equivalent functions</li>
</ol>
<p><strong>Examples:</strong></p>
<pre><code class="language-javascript">calculate(<span class="hljs-string">&apos;1+1&apos;</span>)     =&gt; <span class="hljs-string">&apos;2&apos;</span>
calculate(<span class="hljs-string">&apos;10$2&apos;</span>)    =&gt; <span class="hljs-string">&apos;5&apos;</span>
calculate(<span class="hljs-string">&apos;1.5*3&apos;</span>)   =&gt; <span class="hljs-string">&apos;4.5&apos;</span>

calculate(<span class="hljs-string">&apos;5+5+5+5&apos;</span>) =&gt; <span class="hljs-string">&apos;20&apos;</span>

calculate(<span class="hljs-string">&apos;1000$2.5$5+5-5+6$6&apos;</span>) =&gt;<span class="hljs-string">&apos;81&apos;</span>

calculate(<span class="hljs-string">&apos;10-9p&apos;</span>)   =&gt;  <span class="hljs-string">&apos;400: Bad request&apos;</span></code></pre>
<pre style="display: none;"><code class="language-typescript">calculate(<span class="hljs-string">&apos;1+1&apos;</span>)     =&gt; <span class="hljs-string">&apos;2&apos;</span>
calculate(<span class="hljs-string">&apos;10$2&apos;</span>)    =&gt; <span class="hljs-string">&apos;5&apos;</span>
calculate(<span class="hljs-string">&apos;1.5*3&apos;</span>)   =&gt; <span class="hljs-string">&apos;4.5&apos;</span>

calculate(<span class="hljs-string">&apos;5+5+5+5&apos;</span>) =&gt; <span class="hljs-string">&apos;20&apos;</span>

calculate(<span class="hljs-string">&apos;1000$2.5$5+5-5+6$6&apos;</span>) =&gt;<span class="hljs-string">&apos;81&apos;</span>

calculate(<span class="hljs-string">&apos;10-9p&apos;</span>)   =&gt;  <span class="hljs-string">&apos;400: Bad request&apos;</span></code></pre>
<pre style="display: none;"><code class="language-python">calculate(&apos;1+1&apos;)     =&gt; &apos;2&apos;
calculate(&apos;10$2&apos;)    =&gt; &apos;5&apos;
calculate(&apos;1.5*3&apos;)   =&gt; &apos;4.5&apos;

calculate(&apos;5+5+5+5&apos;) =&gt; &apos;20&apos;

calculate(&apos;1000$2.5$5+5-5+6$6&apos;) =&gt;&apos;81&apos;

calculate(&apos;10-9p&apos;)   =&gt;  &apos;400: Bad request&apos;</code></pre>
<h3 id="further-notes---parameters-outside-of-this-challenge">Further Notes - Parameters outside of this challenge:</h3>
<ul>
<li>Brackets e.g. 10*(1+2)</li>
<li>Square root, log, % or any other operators</li>
<li>Unary minus (10*-1)</li>
<li>Bad mathematical input (10**$10 or 5+5$)</li>
<li>You may have to deal with floats</li>
</ul>
<p>If enjoy this and want something harder please see <a href="http://www.codewars.com/kata/evaluate-mathematical-expression/" target="_blank">http://www.codewars.com/kata/evaluate-mathematical-expression/</a> for making a much more complicated calculator. This is a good kata leading up to that.</p>

### Solution