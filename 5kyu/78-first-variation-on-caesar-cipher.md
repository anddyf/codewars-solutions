### Problem:
<p>The action of a Caesar cipher is to replace each plaintext letter with a different one a fixed number of places up or down the alphabet.</p>
<p>This program performs a variation of the Caesar shift. The shift increases by 1 for each character (on each iteration).</p>
<p>If the shift is initially 1, the first character of the message to be
encoded will be shifted by 1, the second character will be
shifted by 2, etc...</p>
<h1 id="coding-parameters-and-return-of-function-movingshift">Coding: Parameters and return of function &quot;movingShift&quot;</h1>
<p>param s: a string to be coded</p>
<p>param shift: an integer giving the initial shift</p>
<p>The function &quot;movingShift&quot; <em>first</em> codes the entire string and <em>then</em> returns an array of strings 
containing the coded string in 5 parts (five parts
because, to avoid more risks, the coded message will be given to five
runners, one piece for each runner). </p>
<p>If possible the message will be equally divided by message length between the five runners. If this is not possible, parts 1 to 5 will have subsequently non-increasing lengths, such that parts 1 to 4 are at least as long as when evenly divided, but at most 1 longer. If the last part is the empty string this empty string must be shown in the resulting array.</p>
<p>For example, if the coded message has a length of 17 the five parts will have lengths of 4, 4, 4, 4, 1. The parts 1, 2, 3, 4 are evenly split and the last part of length 1 is shorter. If the length is 16 the parts will be of lengths 4, 4, 4, 4, 0. Parts 1, 2, 3, 4 are evenly split and the fifth runner will stay at home since his part is the empty string. If the length is 11, equal parts would be of length 2.2, hence parts will be of lengths 3, 3, 3, 2, 0.</p>
<p>You will also implement a &quot;demovingShift&quot; function with two parameters </p>
<h1 id="decoding-parameters-and-return-of-function-demovingshift">Decoding: parameters and return of function &quot;demovingShift&quot;</h1>
<p>1) an array of strings: s (possibly resulting from &quot;movingShift&quot;, with 5 strings)</p>
<p>2) an int shift</p>
<p>&quot;demovingShift&quot; returns a string.</p>
<h1 id="example">Example:</h1>
<p>u = &quot;I should have known that you would have a perfect answer for me!!!&quot;</p>
<p><code>movingShift(u, 1)</code> returns : </p>
<p>v = [&quot;J vltasl rlhr &quot;, &quot;zdfog odxr ypw&quot;, &quot; atasl rlhr p &quot;, &quot;gwkzzyq zntyhv&quot;, &quot; lvz wp!!!&quot;]</p>
<p>(quotes added in order to see the strings and the spaces, your program won&apos;t write these quotes, see Example Test Cases)</p>
<p>and <code>demovingShift(v, 1)</code> returns u.</p>
<p>#Ref:</p>
<p>Caesar Cipher : <a href="http://en.wikipedia.org/wiki/Caesar_cipher" target="_blank">http://en.wikipedia.org/wiki/Caesar_cipher</a></p>

### Solution