### Problem:
<p>Your task is to calculate logical value of boolean array. Test arrays are one-dimensional and their size is in the range 1-50.</p>
<p>Links referring to logical operations: <a href="https://en.wikipedia.org/wiki/Logical_conjunction" target="_blank">AND</a>, <a href="https://en.wikipedia.org/wiki/Logical_disjunction" target="_blank">OR</a> and <a href="https://en.wikipedia.org/wiki/Exclusive_or" target="_blank">XOR</a>.</p>
<p>You should begin at the first value, and repeatedly apply the logical operation across the remaining elements in the array sequentially.</p>
<p><b>First Example:</b></p><b>
<p>Input: true, true, false, operator: AND</p>
<p>Steps: true AND true -&gt; true, true AND false -&gt; false</p>
<p>Output: false</p>
<p><b>Second Example:</b></p><b>
<p>Input: true, true, false, operator: OR</p>
<p>Steps: true OR true -&gt; true, true OR false -&gt; true</p>
<p>Output: true</p>
<p><b>Third Example:</b></p><b>
<p>Input: true, true, false, operator: XOR</p>
<p>Steps: true XOR true -&gt; false, false XOR false -&gt; false</p>
<p>Output: false</p>
<hr>
<p>Input:</p>
<p>boolean array, string with operator&apos; s name: &apos;AND&apos;, &apos;OR&apos;, &apos;XOR&apos;.</p>
<p>Output:</p>
<p>calculated boolean</p>
</b></b></b>
### Solution