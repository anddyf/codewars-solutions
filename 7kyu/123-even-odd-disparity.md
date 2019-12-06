### Problem:
<p>Given an array, return the difference between the count of even numbers and the count of odd numbers. <code>0</code> will be considered an even number. </p>
<pre><code class="language-Haskell"><span class="hljs-type">For</span> example:
<span class="hljs-title">solve</span>([<span class="hljs-number">0</span>,<span class="hljs-number">1</span>,<span class="hljs-number">2</span>,<span class="hljs-number">3</span>]) = <span class="hljs-number">0</span> because there are two even numbers and two odd numbers. <span class="hljs-type">Even</span> - <span class="hljs-type">Odd</span> = <span class="hljs-number">2</span> - <span class="hljs-number">2</span> = <span class="hljs-number">0.</span>  </code></pre>
<p>Let&apos;s now add two letters to the last example: </p>
<pre><code class="language-Haskell"><span class="hljs-title">solve</span>([<span class="hljs-number">0</span>,<span class="hljs-number">1</span>,<span class="hljs-number">2</span>,<span class="hljs-number">3</span>,&apos;a&apos;,&apos;b&apos;]) = <span class="hljs-number">0.</span> <span class="hljs-type">Again</span>, <span class="hljs-type">Even</span> - <span class="hljs-type">Odd</span> = <span class="hljs-number">2</span> - <span class="hljs-number">2</span> = <span class="hljs-number">0.</span> <span class="hljs-type">Ignore</span> letters. </code></pre>
<p>The input will be an array of lowercase letters and numbers only. </p>
<pre><code class="language-Haskell"><span class="hljs-type">Haskell</span>: 
<span class="hljs-title">solve</span> [<span class="hljs-string">&quot;0&quot;</span>,<span class="hljs-string">&quot;1&quot;</span>,<span class="hljs-string">&quot;2&quot;</span>,<span class="hljs-string">&quot;3&quot;</span>,<span class="hljs-string">&quot;a&quot;</span>,<span class="hljs-string">&quot;b&quot;</span>] = <span class="hljs-number">0</span> <span class="hljs-comment">-- In Haskell, all array elements will be strings.</span></code></pre>
<pre><code class="language-Python">Other languages: 
solve([<span class="hljs-number">0</span>, <span class="hljs-number">1</span> ,<span class="hljs-number">2</span>, <span class="hljs-number">3</span>, <span class="hljs-string">&apos;a&apos;</span>, <span class="hljs-string">&apos;b&apos;</span>]) = <span class="hljs-number">0</span></code></pre>
<p>Good luck!</p>
<p>If you like this Kata, please try: </p>
<p><a href="https://www.codewars.com/kata/59c5f4e9d751df43cf000035" target="_blank">Longest vowel chain</a></p>
<p><a href="https://www.codewars.com/kata/598d91785d4ce3ec4f000018" target="_blank">Word values</a></p>

### Solution