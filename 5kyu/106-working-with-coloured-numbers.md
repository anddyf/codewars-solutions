### Problem:
<p><i><font color="    #FFE4B5">We have the numbers with different colours with the sequence: [<font color="red">&apos;red&apos;, <font color="yellow">&apos;yellow&apos;, <font color="DodgerBlue">&apos;blue&apos;</font><font color="    #FFE4B5">].</font></font></font></font></i></p><i><font color="    #FFE4B5"><font color="red"><font color="yellow"><font color="    #FFE4B5">
<p><i><font color="    #FFE4B5">That sequence colours the numbers in the following way:</font></i></p><i><font color="    #FFE4B5">
</font></i></font><p><font color="    #FFE4B5"><font size="3" face="Arial" color="red"><b><i>   1  <font color="yellow">  2  <font color="DodgerBlue">  3  <font color="red">  4 <font color="yellow">  5  <font color="DodgerBlue">  6  <font color="red">  7 <font color="yellow">  8  <font color="DodgerBlue">  9 <font color="red">  10 <font color="yellow">  11 <font color="DodgerBlue">  12  <font color="red">  13.....</font></font></font></font></font></font></font></font></font></font></font></font></i></b></font></font></p><font size="3" face="Arial" color="red"><font color="yellow"><font color="DodgerBlue"><font color="red"><font color="yellow"><font color="DodgerBlue"><font color="red"><font color="yellow"><font color="DodgerBlue">

<p><i><font color="    #FFE4B5">We have got the following recursive function:</font></i></p><i><font color="    #FFE4B5">
<pre><code>f(1) = 1
f(n) = f(n - 1) + n</code></pre><p><i><font color="    #FFE4B5">Some terms of this sequence with their corresponding colour are:</font></i></p><i><font color="    #FFE4B5">
<pre><code class="language-python">term   value   colour
<span class="hljs-number">1</span>        <span class="hljs-number">1</span>     <span class="hljs-string">&apos;red&apos;</span>
<span class="hljs-number">2</span>        <span class="hljs-number">3</span>     <span class="hljs-string">&apos;blue&apos;</span>
<span class="hljs-number">3</span>        <span class="hljs-number">6</span>     <span class="hljs-string">&apos;blue&apos;</span>
<span class="hljs-number">4</span>       <span class="hljs-number">10</span>      <span class="hljs-string">&apos;red&apos;</span>
<span class="hljs-number">5</span>       <span class="hljs-number">15</span>     <span class="hljs-string">&apos;blue&apos;</span>
<span class="hljs-number">6</span>       <span class="hljs-number">21</span>     <span class="hljs-string">&apos;blue&apos;</span>
<span class="hljs-number">7</span>       <span class="hljs-number">28</span>     <span class="hljs-string">&apos;red&apos;</span></code></pre>
<p>The three terms of the same colour &quot;blue&quot;, higher than 3, are: <code>[6, 15, 21]</code></p>
<p>We need a function <code>same_col_seq()</code>, that may receive three arguments:</p>
<ul>
<li>val, an integer number</li>
<li>k, an integer number</li>
<li>colour, the name of one of the three colours(red, yellow or blue), as a string.</li>
</ul>
<p>The function will output a sorted array with the smallest <code>k</code> terms, having the same marked colour, but higher than <code>val</code>.</p>
<p>Let&apos;s see some examples:</p>
<pre><code class="language-python">same_col_seq(<span class="hljs-number">3</span>, <span class="hljs-number">3</span>, <span class="hljs-string">&apos;blue&apos;</span>) == [<span class="hljs-number">6</span>, <span class="hljs-number">15</span>, <span class="hljs-number">21</span>]
same_col_seq(<span class="hljs-number">100</span>, <span class="hljs-number">4</span>, <span class="hljs-string">&apos;red&apos;</span>) == [<span class="hljs-number">136</span>, <span class="hljs-number">190</span>, <span class="hljs-number">253</span>, <span class="hljs-number">325</span>]</code></pre>
<p>The function may output an empty list if it does not find terms of the sequence with the wanted colour in the range [val, 2* k * val]</p>
<pre><code class="language-python">same_col_seq(<span class="hljs-number">250</span>, <span class="hljs-number">6</span>, <span class="hljs-string">&apos;yellow&apos;</span>) == []</code></pre>
<p>That means that the function did not find any &quot;yellow&quot; term in the range [250, 3000]</p>
<p>Tests will be with the following features:</p>
<pre><code>number of tests = 100
100 &lt; val &lt; 1000000
3 &lt; k &lt; 20</code></pre></font></i></font></i></font></font></font></font></font></font></font></font></font></font></font></font></i>
### Solution