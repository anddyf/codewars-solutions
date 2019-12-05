### Problem:
<p>You&apos;ll be given a string of characters as an input. Complete the function that returns a <em>list</em> of strings: 
(a) in the reverse order of the original string, and 
(b) with each successive string starting one character further in from the end of the original string.  </p>
<p>Assume the original string is at least 3 characters long.  <em>Try to do this using slices and avoid converting the string to a list.</em></p>
<h2 id="examples">Examples</h2>
<pre><code class="language-python">&apos;123&apos;   ==&gt;  [&apos;321&apos;, &apos;21&apos;, &apos;1&apos;]
&apos;abcde&apos; ==&gt;  [&apos;edcba&apos;, &apos;dcba&apos;, &apos;cba&apos;, &apos;ba&apos;, &apos;a&apos;]</code></pre>

### Solution