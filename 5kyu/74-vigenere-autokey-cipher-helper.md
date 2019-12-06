### Problem:
<p>This is the advanced version of the <a href="https://www.codewars.com/kata/vigenere-cipher-helper" target="_blank">Vigen&#xE8;re Cipher Helper</a> kata. The following assumes that you have already completed that kata -- if you haven&apos;t done it yet, you should start there. </p>
<p>The basic concept is the same as in the previous kata (see the detailed explanation there). However, there is a major difference:</p>
<p>With the basic Vigen&#xE8;re Cipher, we assume the key is repeated for the length of the text. <strong>In this kata, the key is only used once, and then complemented by the decoded text.</strong> Thus every encoding and decoding is independent (still using the same key to begin with). Furthermore, <strong>the key index is only incremented if the current letter is in the provided alphabet.</strong></p>
<p>Visual representation:</p>
<pre><code class="language-js"><span class="hljs-string">&quot;password&quot;</span>                         <span class="hljs-comment">// original key</span>
<span class="hljs-string">&quot;my secret code i want to secure&quot;</span>  <span class="hljs-comment">// message</span>
<span class="hljs-string">&quot;pa ssword myse c retc od eiwant&quot;</span>  <span class="hljs-comment">// full key used</span></code></pre>
<p>Write a class that, when given a key and an alphabet, can be used to encode and decode from the cipher.</p>
<h2 id="examples">Examples</h2>
<pre style="display: none;"><code class="language-js"><span class="hljs-keyword">var</span> alphabet = <span class="hljs-string">&apos;abcdefghijklmnopqrstuvwxyz&apos;</span>;
<span class="hljs-keyword">var</span> key = <span class="hljs-string">&apos;password&apos;</span>;

<span class="hljs-comment">// creates a cipher helper with each letter substituted</span>
<span class="hljs-comment">// by the corresponding character in the key</span>
<span class="hljs-keyword">var</span> c = <span class="hljs-keyword">new</span> Vigen&#xE8;reCipher(key, alphabet);

c.encode(<span class="hljs-string">&apos;codewars&apos;</span>); <span class="hljs-comment">// returns &apos;rovwsoiv&apos;</span>
c.decode(<span class="hljs-string">&apos;laxxhsj&apos;</span>);  <span class="hljs-comment">// returns &apos;waffles&apos;</span>

c.encode(<span class="hljs-string">&apos;amazingly few discotheques provide jukeboxes&apos;</span>)
<span class="hljs-comment">// returns &apos;pmsrebxoy rev lvynmylatcwu dkvzyxi bjbswwaib&apos;</span>

c.decode(<span class="hljs-string">&apos;pmsrebxoy rev lvynmylatcwu dkvzyxi bjbswwaib&apos;</span>)
<span class="hljs-comment">// returns &apos;amazingly few discotheques provide jukeboxes&apos;</span></code></pre>
<pre style="display: none;"><code class="language-python">alphabet = <span class="hljs-string">&apos;abcdefghijklmnopqrstuvwxyz&apos;</span>
key = <span class="hljs-string">&apos;password&apos;</span>

<span class="hljs-comment"># creates a cipher helper with each letter substituted</span>
<span class="hljs-comment"># by the corresponding character in the key</span>
c = VigenereCipher(key, alphabet)

c.encode(<span class="hljs-string">&apos;codewars&apos;</span>) <span class="hljs-comment"># returns &apos;rovwsoiv&apos;</span>
c.decode(<span class="hljs-string">&apos;laxxhsj&apos;</span>)  <span class="hljs-comment"># returns &apos;waffles&apos;</span>

c.encode(<span class="hljs-string">&apos;amazingly few discotheques provide jukeboxes&apos;</span>)
<span class="hljs-comment"># returns &apos;pmsrebxoy rev lvynmylatcwu dkvzyxi bjbswwaib&apos;</span>

c.decode(<span class="hljs-string">&apos;pmsrebxoy rev lvynmylatcwu dkvzyxi bjbswwaib&apos;</span>)
<span class="hljs-comment"># returns &apos;amazingly few discotheques provide jukeboxes&apos;</span></code></pre>
<pre style="display: none;"><code class="language-coffeescript">alphabet = <span class="hljs-string">&apos;abcdefghijklmnopqrstuvwxyz&apos;</span>
key = <span class="hljs-string">&apos;password&apos;</span>

<span class="hljs-comment"># creates a cipher helper with each letter substituted</span>
<span class="hljs-comment"># by the corresponding character in the key</span>
c = <span class="hljs-keyword">new</span> VigenereCipher(key, alphabet)

c.encode(<span class="hljs-string">&apos;codewars&apos;</span>)  <span class="hljs-comment"># returns &apos;rovwsoiv&apos;</span>
c.decode(<span class="hljs-string">&apos;laxxhsj&apos;</span>)   <span class="hljs-comment"># returns &apos;waffles&apos;</span>

c.encode(<span class="hljs-string">&apos;amazingly few discotheques provide jukeboxes&apos;</span>)
<span class="hljs-comment"># returns &apos;pmsrebxoy rev lvynmylatcwu dkvzyxi bjbswwaib&apos;</span>

c.decode(<span class="hljs-string">&apos;pmsrebxoy rev lvynmylatcwu dkvzyxi bjbswwaib&apos;</span>)
<span class="hljs-comment"># returns &apos;amazingly few discotheques provide jukeboxes&apos;</span></code></pre>
<p>Any character not in the alphabet should be left alone. For example (following from above):</p>
<pre><code class="language-javascript">c.encode(<span class="hljs-string">&apos;CODEWARS&apos;</span>); <span class="hljs-comment">// returns &apos;CODEWARS&apos;</span></code></pre>
<pre style="display: none;"><code class="language-python">c.encode(<span class="hljs-string">&apos;CODEWARS&apos;</span>) <span class="hljs-comment"># returns &apos;CODEWARS&apos;</span></code></pre>
<pre style="display: none;"><code class="language-coffeescript">c.encode(<span class="hljs-string">&apos;CODEWARS&apos;</span>) <span class="hljs-comment"># returns &apos;CODEWARS&apos;</span></code></pre>

### Solution