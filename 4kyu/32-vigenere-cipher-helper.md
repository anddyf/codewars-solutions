### Problem:
<p>The Vigen&#xE8;re cipher is a classic cipher originally developed by Italian cryptographer Giovan Battista Bellaso and published in 1553. It is named after a later French cryptographer Blaise de Vigen&#xE8;re, who had developed a stronger autokey cipher (a cipher that incorporates the message of the text into the key). </p>
<p>The cipher is easy to understand and implement, but survived three centuries of attempts to break it, earning it the nickname &quot;le chiffre ind&#xE9;chiffrable&quot; or &quot;the indecipherable cipher.&quot;</p>
<p><a href="https://en.wikipedia.org/wiki/Vigen%C3%A8re_cipher" target="_blank">From Wikipedia</a>:</p>
<blockquote>
<p>The Vigen&#xE8;re cipher is a method of encrypting alphabetic text by using a series of different Caesar ciphers based on the letters of a keyword. It is a simple form of polyalphabetic substitution.</p>
<p>. . .</p>
<p>In a Caesar cipher, each letter of the alphabet is shifted along some number of places; for example, in a Caesar cipher of shift <code>3</code>, <code>A</code> would become <code>D</code>, <code>B</code> would become <code>E</code>, <code>Y</code> would become <code>B</code> and so on. The Vigen&#xE8;re cipher consists of several Caesar ciphers in sequence with different shift values.</p>
</blockquote>
<p>Assume the key is repeated for the length of the text, character by character. Note that some implementations repeat the key over characters only if they are part of the alphabet -- <strong>this is not the case here.</strong></p>
<p>The shift is derived by applying a Caesar shift to a character with the corresponding index of the key in the alphabet.</p>
<p>Visual representation:</p>
<pre><code class="language-js"><span class="hljs-string">&quot;my secret code i want to secure&quot;</span>  <span class="hljs-comment">// message</span>
<span class="hljs-string">&quot;passwordpasswordpasswordpasswor&quot;</span>  <span class="hljs-comment">// key</span></code></pre>
<p>Write a class that, when given a key and an alphabet, can be used to encode and decode from the cipher.</p>
<h2 id="example">Example</h2>
<pre><code class="language-js"><span class="hljs-keyword">var</span> alphabet = <span class="hljs-string">&apos;abcdefghijklmnopqrstuvwxyz&apos;</span>;
<span class="hljs-keyword">var</span> key = <span class="hljs-string">&apos;password&apos;</span>;

<span class="hljs-comment">// creates a cipher helper with each letter substituted</span>
<span class="hljs-comment">// by the corresponding character in the key</span>
<span class="hljs-keyword">var</span> c = <span class="hljs-keyword">new</span> Vigen&#xE8;reCipher(key, alphabet);

c.encode(<span class="hljs-string">&apos;codewars&apos;</span>); <span class="hljs-comment">// returns &apos;rovwsoiv&apos;</span>
c.decode(<span class="hljs-string">&apos;laxxhsj&apos;</span>);  <span class="hljs-comment">// returns &apos;waffles&apos;</span></code></pre>
<p>Any character not in the alphabet must be left as is. For example (following from above):</p>
<pre><code class="language-js">c.encode(<span class="hljs-string">&apos;CODEWARS&apos;</span>); <span class="hljs-comment">// returns &apos;CODEWARS&apos;</span></code></pre>
<hr>
<p><strong>NOTE FOR PYTHON</strong></p>
<p>The Python implementation requires Unicode conversion, i.e. <code>input.decode(&apos;utf-8&apos;)</code>, <code>output.encode(&apos;utf-8&apos;)</code></p>
<p>Trying to print utf-8 strings without encoding them first (as mentioned above) will give you an error:</p>
<pre><code>UnicodeEncodeError: &apos;ascii&apos; codec can&apos;t encode characters in position 0-3: ordinal not in range(128)</code></pre>
### Solution