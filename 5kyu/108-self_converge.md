### Problem:
<h3 id="self_converge">self_converge</h3>
<p><code>Goal</code>: Given a number (with a minimum of 3 digits), return the number of iterations it takes to arrive at a derived number that converges on to itself, as per the following <a href="http://mathworld.wolfram.com/KaprekarRoutine.html" target="_blank">Kaprekar</a> routine. As a learning exercise, come up with a solution that uses recursion. The
following steps would be applicable to a number that originally had
exactly 4 digits.</p>
<ol start="0">
<li>Initialize a counter to count the number of iterations</li>
<li>Take any four-digit number <code>n</code>, using at least two different digits.</li>
<li>Arrange the digits in descending and then in ascending order to get two four-digit numbers, adding leading zeros if necessary. <ul>
<li>Add as many zeroes so that the width of the original number is maintained.</li>
</ul>
</li>
<li>Subtract the smaller number from the bigger number. Let us call this <code>nseq</code>.</li>
<li>Check if <code>nseq</code> (the remainder) from Step 4 equals the previous value of <code>n</code>. If not, increment the iteration counter and go back to step 2 and perform it on the <code>nseq</code>. </li>
</ol>
<p>If the number of digits to start with was more than 4, convergence occurs on to a <code>cycle</code> of numbers. Therefore in Step 5, detect this cycle by comparing to not only the previous value, but to all previous values of <code>n</code>.</p>
<ul>
<li>If there is a match, then return the count of iterations</li>
<li>If the sequence_number collapses to zero, then return -1 </li>
</ul>
<h3 id="converge-values">Converge values</h3>
<p>While 3-digit numbers converge to the same unique number <code>k</code> which is also 3 digits long, all 4-digit numbers also converge to the same unique value <code>k1</code> which is 4 digits long. However, 5 digit numbers converge to any one of the following values: <code>53955, 59994, 61974, 62964, 63954, 71973, 74943, 75933, 82962, 83952</code>.</p>
<h3 id="example">Example</h3>
<p><code>1234</code>  -&gt;   <code>4</code></p>
<pre><code>1. 4321 - 1234 =  3087 /   
2. 8730 - 378  =  8352 /   
3. 8532 - 2358 =  6174 /   
4. 7641 - 1467 =  6174 // same as previous</code></pre><p><code>414</code> -&gt; <code>5</code></p>
<pre><code>1. 441 - 144 =  297 /   
2. 972 - 279 =  693 /   
3. 963 - 369 =  594 /
4. 954 - 459 =  495 /
5. 954 - 459 =  495 // same as previous</code></pre><p><code>50000</code> -&gt; <code>4</code></p>
<pre><code>1. 50000 - 5      =  49995 /   
2. 99954 - 45999  =  53955 /  # first 
3. 95553 - 35559  =  59994 /
4. 99954 - 45999  =  53955 /  # 2nd time</code></pre>
### Solution