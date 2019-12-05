### Problem:
<h3 id="sum-of-n-numbers">Sum of &apos;n&apos; Numbers</h3>
<p>A <a href="http://world.mathigon.org/Sequences" target="_blank">sequence or a series</a>, in mathematics, is a string of objects, like numbers, that follow a particular pattern. The individual elements in a sequence are called terms.</p>
<p>For example, some simple patterns include: 
<code>3, 6, 9, 12, 15, 18, 21, ...</code><br>Pattern: <code>&quot;add 3 to the previous number to get the next number&quot;</code></p>
<p><code>0, 12, 24, 36, 48, 60, 72, ...</code><br>Pattern: <code>&quot;add 12 to the previous number to get the next number&quot;</code></p>
<p>How about generating a more complicated pattern?<br><code>0, 1, 3, 6, 10, 15, 21, 28, ...</code><br><code>0</code><em>(0)_<code>,1</code></em>(0+1)<em><code>,3</code></em>(0+1+2)<em><code>,6</code></em>(0+1+2+3)_...<br>Pattern: <code>&quot;the</code>n<code>th term is the sum of numbers(from 0 to</code>n<code>, inclusive)&quot;</code>  </p>
<p><code>sum_of_n</code> (or <code>SequenceSum.sumOfN</code> in Java, <code>SequenceSum.SumOfN</code> in C#) takes an integer <code>n</code> and returns a <code>List</code> (an <code>Array</code> in Java/C#) of length <code>abs(n)</code> + 1. The <code>List</code>/<code>Array</code> contains the numbers in the arithmetic series produced by taking the sum of the consecutive integer numbers from <code>0</code> to <code>n</code> inclusive.</p>
<ul>
<li><code>n</code> can also be <code>0</code> or a negative value. </li>
</ul>
<p>Wikipedia reference for <code>abs</code> value is available <a href="https://en.wikipedia.org/wiki/Absolute_value" target="_blank">here</a>.</p>
<h2 id="example">Example:</h2>
<p> <code>5</code> -&gt; <code>[0, 1, 3, 6, 10, 15]</code></p>
<p> <code>-5</code> -&gt; <code>[0, -1, -3, -6, -10, -15]</code></p>
<p> <code>7</code> -&gt; <code>[0, 1, 3, 6, 10, 15, 21, 28]</code></p>

### Solution