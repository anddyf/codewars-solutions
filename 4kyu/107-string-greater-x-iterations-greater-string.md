### Problem:
<p>This kata is <del> blatantly copied from </del> inspired by <a title="This Kata" href="https://www.codewars.com/kata/reversing-fun/train/java" target="_blank">This Kata</a></p>
<h1>Welcome</h1>

<p>this is the second in the series of the string iterations kata!</p>
<p>Here we go!</p>
<hr>
<p>We have a string <strong>s</strong></p>
<p>Let&apos;s say you start with this: &quot;String&quot;</p>
<p>The first thing you do is reverse it: &quot;gnirtS&quot;</p>
<p>Then you will take the string from the 1st position and reverse it again: &quot;gStrin&quot;</p>
<p>Then you will take the string from the 2nd position and reverse it again: &quot;gSnirt&quot;</p>
<p>Then you will take the string from the 3rd position and reverse it again: &quot;gSntri&quot;</p>
<p>Continue this pattern until you have done every single position, and then you will return the string you have created. For this particular string, you would return: 
&quot;gSntir&quot;</p>
<p>now,</p>
<h1>The Task:</h1>

<p>In this kata, we also have a number <strong>x</strong></p>
<p>take that reversal function, and apply it to the string x times.</p>
<p>return the result of the string after applying the reversal function to it x times.</p>
<pre><code>example where s = &quot;String&quot; and x = 3:

after 0 iteration  s = &quot;String&quot;
after 1 iteration  s = &quot;gSntir&quot;
after 2 iterations s = &quot;rgiStn&quot;
after 3 iterations s = &quot;nrtgSi&quot;

so you would return &quot;nrtgSi&quot;.</code></pre><h1> Note </h1>

<p>String lengths may exceed 2 million</p>
<p>x exceeds a billion</p>
<p>be read to optimize</p>
<p>if this is too hard, go here <a href="https://www.codewars.com/kata/string-%3E-n-iterations-%3E-string/java" target="_blank">https://www.codewars.com/kata/string-%3E-n-iterations-%3E-string/java</a></p>

### Solution