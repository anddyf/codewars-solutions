### Problem:
<p>Given a string <i>S.</i>
You have to return another string such that even-indexed and odd-indexed characters of <i>S</i> are grouped and groups are space-separated (see sample below)</p>
<pre>Note: 
0 is considered to be an even index. 
All input strings are valid with no spaces
</pre>
<hr>
input:
<b>&apos;CodeWars&apos;</b>

<p>output
<b>&apos;CdWr oeas&apos;</b></p>
<pre>S[0] = &apos;C&apos;
S[1] = &apos;o&apos;
S[2] = &apos;d&apos;
S[3] = &apos;e&apos;
S[4] = &apos;W&apos;
S[5] = &apos;a&apos;
S[6] = &apos;r&apos;
S[7] = &apos;s&apos;
</pre>

<p>Even indices 0, 2, 4, 6, so we have <b>&apos;CdWr&apos;</b> as the first group<br>
odd ones are 1, 3, 5, 7, so the second group is <b>&apos;oeas&apos;</b><br>
And the final string to return is <b>&apos;Cdwr oeas&apos;</b><br></p>
<hr>
Enjoy.
### Solution