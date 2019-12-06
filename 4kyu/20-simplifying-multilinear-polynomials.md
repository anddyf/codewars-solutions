### Problem:
<!---
For translators: sorry if I am a noob with markdown (it's my very first time...). You are invited to make all the changes you think are needed
-->
<p>When we attended middle school were asked to simplify mathematical expressions like &quot;3x-yx+2xy-x&quot; (or usually bigger), and that was easy-peasy (&quot;2x+xy&quot;). But tell that to your pc and we&apos;ll see! <br></p>
<p>Write a function: <code>simplify</code>, that takes a string in input, representing a <em>multilinear non-constant polynomial in integers coefficients</em> (like <code>&quot;3x-zx+2xy-x&quot;</code>), and returns another string as output where the same expression has been simplified in the following way ( <code>-&gt;</code> means application of <code>simplify</code>):</p>
<ul>
<li>All possible sums and subtraction of equivalent monomials (&quot;xy==yx&quot;) has been done, e.g.:<br> <p><code>&quot;cb+cba&quot; -&gt; &quot;bc+abc&quot;</code>, <code>&quot;2xy-yx&quot; -&gt; &quot;xy&quot;</code>, <code>&quot;-a+5ab+3a-c-2a&quot; -&gt; &quot;-c+5ab&quot;</code>
<br><br></p></li>
<li>All monomials appears in order of increasing number of variables, e.g.:<br> <p><code>&quot;-abc+3a+2ac&quot; -&gt; &quot;3a+2ac-abc&quot;</code>, <code>&quot;xyz-xz&quot; -&gt; &quot;-xz+xyz&quot;</code>
<br><br> </p></li>
<li>If two monomials have the same number of variables, they appears in <a href="https://en.wikipedia.org/wiki/Lexicographical_order" target="_blank">lexicographic order</a>, e.g.:<br> <p><code>&quot;a+ca-ab&quot; -&gt; &quot;a-ab+ac&quot;</code>, <code>&quot;xzy+zby&quot; -&gt;&quot;byz+xyz&quot;</code>
<br><br>  </p></li>
<li>There is no leading <code>+</code> sign if the first coefficient is positive, e.g.:<br> <p><code>&quot;-y+x&quot; -&gt; &quot;x-y&quot;</code>, but no restrictions for <code>-</code>:  <code>&quot;y-x&quot; -&gt;&quot;-x+y&quot;</code></p></li>
</ul>
<hr>
<p><strong>N.B.</strong> to keep it simplest, the string in input is restricted to represent only <em>multilinear non-constant polynomials</em>, so you won&apos;t find something like `-3+yx^2&apos;. <strong>Multilinear</strong> means in this context: <strong>of degree 1 on each variable</strong>.</p>
<p><strong>Warning</strong>: the string in input can contain arbitrary variables represented by lowercase characters in the english alphabet.</p>
<p><strong>Good Work :)</strong></p>

### Solution