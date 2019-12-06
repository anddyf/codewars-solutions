### Problem:
<p>Write a function that determines whether a string is a valid guess in a Boggle board, as per the rules of Boggle. A Boggle board is a 2D array of individual characters, e.g.:</p>
<pre><code class="language-javascript">[ [<span class="hljs-string">&quot;I&quot;</span>,<span class="hljs-string">&quot;L&quot;</span>,<span class="hljs-string">&quot;A&quot;</span>,<span class="hljs-string">&quot;W&quot;</span>],
  [<span class="hljs-string">&quot;B&quot;</span>,<span class="hljs-string">&quot;N&quot;</span>,<span class="hljs-string">&quot;G&quot;</span>,<span class="hljs-string">&quot;E&quot;</span>],
  [<span class="hljs-string">&quot;I&quot;</span>,<span class="hljs-string">&quot;U&quot;</span>,<span class="hljs-string">&quot;A&quot;</span>,<span class="hljs-string">&quot;O&quot;</span>],
  [<span class="hljs-string">&quot;A&quot;</span>,<span class="hljs-string">&quot;S&quot;</span>,<span class="hljs-string">&quot;R&quot;</span>,<span class="hljs-string">&quot;L&quot;</span>] ]</code></pre>
<pre style="display: none;"><code class="language-python">[ [<span class="hljs-string">&quot;I&quot;</span>,<span class="hljs-string">&quot;L&quot;</span>,<span class="hljs-string">&quot;A&quot;</span>,<span class="hljs-string">&quot;W&quot;</span>],
  [<span class="hljs-string">&quot;B&quot;</span>,<span class="hljs-string">&quot;N&quot;</span>,<span class="hljs-string">&quot;G&quot;</span>,<span class="hljs-string">&quot;E&quot;</span>],
  [<span class="hljs-string">&quot;I&quot;</span>,<span class="hljs-string">&quot;U&quot;</span>,<span class="hljs-string">&quot;A&quot;</span>,<span class="hljs-string">&quot;O&quot;</span>],
  [<span class="hljs-string">&quot;A&quot;</span>,<span class="hljs-string">&quot;S&quot;</span>,<span class="hljs-string">&quot;R&quot;</span>,<span class="hljs-string">&quot;L&quot;</span>] ]</code></pre>
<pre style="display: none;"><code class="language-java">[ [<span class="hljs-string">&apos;I&apos;</span>,<span class="hljs-string">&apos;L&apos;</span>,<span class="hljs-string">&apos;A&apos;</span>,<span class="hljs-string">&apos;W&apos;</span>],
  [<span class="hljs-string">&apos;B&apos;</span>,<span class="hljs-string">&apos;N&apos;</span>,<span class="hljs-string">&apos;G&apos;</span>,<span class="hljs-string">&apos;E&apos;</span>],
  [<span class="hljs-string">&apos;I&apos;</span>,<span class="hljs-string">&apos;U&apos;</span>,<span class="hljs-string">&apos;A&apos;</span>,<span class="hljs-string">&apos;O&apos;</span>],
  [<span class="hljs-string">&apos;A&apos;</span>,<span class="hljs-string">&apos;S&apos;</span>,<span class="hljs-string">&apos;R&apos;</span>,<span class="hljs-string">&apos;L&apos;</span>] ]</code></pre>
<pre style="display: none;"><code class="language-cpp">{ {<span class="hljs-string">&apos;I&apos;</span>,<span class="hljs-string">&apos;L&apos;</span>,<span class="hljs-string">&apos;A&apos;</span>,<span class="hljs-string">&apos;W&apos;</span>},
  {<span class="hljs-string">&apos;B&apos;</span>,<span class="hljs-string">&apos;N&apos;</span>,<span class="hljs-string">&apos;G&apos;</span>,<span class="hljs-string">&apos;E&apos;</span>},
  {<span class="hljs-string">&apos;I&apos;</span>,<span class="hljs-string">&apos;U&apos;</span>,<span class="hljs-string">&apos;A&apos;</span>,<span class="hljs-string">&apos;O&apos;</span>},
  {<span class="hljs-string">&apos;A&apos;</span>,<span class="hljs-string">&apos;S&apos;</span>,<span class="hljs-string">&apos;R&apos;</span>,<span class="hljs-string">&apos;L&apos;</span>} }</code></pre>
<p>Valid guesses are strings which can be formed by connecting adjacent cells (horizontally, vertically, or diagonally) without re-using any previously used cells.</p>
<p>For example, in the above board &quot;BINGO&quot;, &quot;LINGO&quot;, and &quot;ILNBIA&quot; would all be valid guesses, while &quot;BUNGIE&quot;, &quot;BINS&quot;, and &quot;SINUS&quot; would not.</p>
<p>Your function should take two arguments (a 2D array and a string) and return true or false depending on whether the string is found in the array as per Boggle rules.</p>
<p>Test cases will provide various array and string sizes (squared arrays up to 150x150 and strings up to 150 uppercase letters). You do not have to check whether the string is a real word or not, only if it&apos;s a valid guess.</p>

### Solution