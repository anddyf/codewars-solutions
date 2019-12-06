### Problem:
<p><img src="https://i.imgur.com/OLFUBvV.png" alt="Reference Image"></p>
<p>In this kata, your task is to implement what I call <strong>Interlaced Spiral Cipher (ISC)</strong>.</p>
<p><em>Encoding</em> a string using ISC is achieved with the following steps:</p>
<ol>
<li>Form a square large enough to fit all the string characters</li>
<li>Starting with the top-left corner, place string characters in the corner cells moving in a clockwise direction</li>
<li>After the first cycle is complete, continue placing characters in the cells following the last one in its respective row/column</li>
<li>When the outer cells are filled, repeat steps <code>2</code> through <code>4</code> for the remaining inner squares (refer to the example below for further clarification)</li>
<li>Fill up any unused cells with a space character and return the rows joined together.</li>
</ol>
<h2 id="input">Input</h2>
<p>A string comprised of any combination of alphabetic characters, the space character, and any of the following characters <code>_!@#$%^&amp;()[]{}+-*/=&quot;&apos;&lt;&gt;,.?:;</code>.</p>
<p>Arguments passed to the <code>encode</code> method will never have any trailing spaces.</p>
<h2 id="output">Output</h2>
<p>The <code>encode</code> method should return the encoded message as a <code>string</code></p>
<p>The <code>decode</code> method should return the decoded message as a <code>string</code> with no trailing spaces</p>
<h2 id="test-examples">Test Examples</h2>
<pre><code class="language-javascript"><span class="hljs-keyword">let</span> phrase1 = <span class="hljs-string">`Romani ite domum`</span>;
InterlacedSpiralCipher.encode(phrase1); <span class="hljs-comment">// `Rntodomiimuea  m`</span>

<span class="hljs-keyword">let</span> phrase2 = <span class="hljs-string">`Stsgiriuar i ninmd l otac`</span>;
InterlacedSpiralCipher.decode(phrase2); <span class="hljs-comment">// `Sic transit gloria mundi`</span>

<span class="hljs-comment">/* Encoding sequence for a 5 x 5 square:
[ 1  5  9 13  2]
[16 17 21 18  6]
[12 24 25 22 10]
[ 8 20 23 19 14]
[ 4 15 11  7  3]
*/</span></code></pre>
<pre style="display: none;"><code class="language-python">phrase1 = <span class="hljs-string">&apos;Romani ite domum&apos;</span>
InterlacedSpiralCipher[<span class="hljs-string">&apos;encode&apos;</span>](phrase1) <span class="hljs-comment">#&apos;Rntodomiimuea  m&apos;</span>

phrase2 = <span class="hljs-string">&apos;Stsgiriuar i ninmd l otac&apos;</span>
InterlacedSpiralCipher[<span class="hljs-string">&apos;decode&apos;</span>](phrase2) <span class="hljs-comment">#&apos;Sic transit gloria mundi&apos;</span>

<span class="hljs-string">&apos;&apos;&apos;
Encoding sequence for a 5 x 5 square:
[ 1  5  9 13  2]
[16 17 21 18  6]
[12 24 25 22 10]
[ 8 20 23 19 14]
[ 4 15 11  7  3]
&apos;&apos;&apos;</span></code></pre>
<pre style="display: none;"><code class="language-go">phrase1 := <span class="hljs-string">&quot;Romani ite domum&quot;</span>
InterlacedSpiralCipher[<span class="hljs-string">&quot;encode&quot;</span>](phrase1) <span class="hljs-comment">// &quot;Rntodomiimuea  m&quot;</span>

phrase2 := <span class="hljs-string">&quot;Stsgiriuar i ninmd l otac&quot;</span>
InterlacedSpiralCipher[<span class="hljs-string">&quot;decode&quot;</span>](phrase2) <span class="hljs-comment">// &quot;Sic transit gloria mundi&quot;</span>

<span class="hljs-comment">/* Encoding sequence for a 5 x 5 square:
[ 1  5  9 13  2]
[16 17 21 18  6]
[12 24 25 22 10]
[ 8 20 23 19 14]
[ 4 15 11  7  3]
*/</span></code></pre>
<pre style="display: none;"><code class="language-elixir">phrase1 = <span class="hljs-string">&quot;Romani ite domum&quot;</span>
InterlacedSpiralCipher.encode(phrase1) <span class="hljs-comment"># &quot;Rntodomiimuea  m&quot;</span>

phrase2 = <span class="hljs-string">&quot;Stsgiriuar i ninmd l otac&quot;</span>
InterlacedSpiralCipher.decode(phrase2) <span class="hljs-comment"># &quot;Sic transit gloria mundi&quot;</span>

<span class="hljs-comment"># Encoding sequence for a 5 x 5 square:</span>
<span class="hljs-comment"># [ 1  5  9 13  2]</span>
<span class="hljs-comment"># [16 17 21 18  6]</span>
<span class="hljs-comment"># [12 24 25 22 10]</span>
<span class="hljs-comment"># [ 8 20 23 19 14]</span>
<span class="hljs-comment"># [ 4 15 11  7  3]</span></code></pre>
<pre style="display: none;"><code class="language-csharp"><span class="hljs-keyword">string</span> phrase1 = <span class="hljs-string">&quot;Romani ite domum&quot;</span>;
InterlacedSpiralCipher.Encode(phrase1) <span class="hljs-comment">// &quot;Rntodomiimuea  m&quot;</span>

<span class="hljs-keyword">string</span> phrase2 = <span class="hljs-string">&quot;Stsgiriuar i ninmd l otac&quot;</span>;
InterlacedSpiralCipher.Decode(phrase2) <span class="hljs-comment">// &quot;Sic transit gloria mundi&quot;</span>

<span class="hljs-comment">/* Encoding sequence for a 5 x 5 square:
[ 1  5  9 13  2]
[16 17 21 18  6]
[12 24 25 22 10]
[ 8 20 23 19 14]
[ 4 15 11  7  3]
*/</span></code></pre>
<h2 id="technical-details">Technical Details</h2>
<ul>
<li>Input will always be valid.</li>
</ul>
<p>If you enjoyed this kata, be sure to check out <a href="https://www.codewars.com/users/docgunthrop/authored" target="_blank">my other katas</a>.</p>

### Solution