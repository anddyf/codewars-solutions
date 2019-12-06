### Problem:
<p>Write a class that, when given a string, will return an <strong>uppercase</strong> string with each letter shifted forward in the alphabet by however many spots the cipher was initialized to.</p>
<p>For example:</p>
<pre><code class="language-javascript"><span class="hljs-keyword">var</span> c = <span class="hljs-keyword">new</span> CaesarCipher(<span class="hljs-number">5</span>); <span class="hljs-comment">// creates a CipherHelper with a shift of five</span>
c.encode(<span class="hljs-string">&apos;Codewars&apos;</span>); <span class="hljs-comment">// returns &apos;HTIJBFWX&apos;</span>
c.decode(<span class="hljs-string">&apos;BFKKQJX&apos;</span>); <span class="hljs-comment">// returns &apos;WAFFLES&apos;</span></code></pre>
<pre style="display: none;"><code class="language-coffeescript">c = <span class="hljs-keyword">new</span> CaesarCipher(<span class="hljs-number">5</span>) <span class="hljs-comment"># creates a CipherHelper with a shift of five</span>
c.encode(<span class="hljs-string">&apos;Codewars&apos;</span>) <span class="hljs-comment"># returns &apos;HTIJBFWX&apos;</span>
c.decode(<span class="hljs-string">&apos;BFKKQJX&apos;</span>) <span class="hljs-comment"># returns &apos;WAFFLES&apos;</span></code></pre>
<pre style="display: none;"><code class="language-python">c = CaesarCipher(<span class="hljs-number">5</span>); <span class="hljs-comment"># creates a CipherHelper with a shift of five</span>
c.encode(<span class="hljs-string">&apos;Codewars&apos;</span>) <span class="hljs-comment"># returns &apos;HTIJBFWX&apos;</span>
c.decode(<span class="hljs-string">&apos;BFKKQJX&apos;</span>) <span class="hljs-comment"># returns &apos;WAFFLES&apos;</span></code></pre>
<pre style="display: none;"><code class="language-ruby">c = CaesarCipher.new(<span class="hljs-number">5</span>); <span class="hljs-comment"># creates a CipherHelper with a shift of five</span>
c.encode(<span class="hljs-string">&apos;Codewars&apos;</span>) <span class="hljs-comment"># returns &apos;HTIJBFWX&apos;</span>
c.decode(<span class="hljs-string">&apos;BFKKQJX&apos;</span>) <span class="hljs-comment"># returns &apos;WAFFLES&apos;</span></code></pre>
<pre style="display: none;"><code class="language-php">$c = <span class="hljs-keyword">new</span> CaesarCipher(<span class="hljs-number">5</span>);
$c-&gt;encode(<span class="hljs-string">&apos;Codewars&apos;</span>); <span class="hljs-comment">// returns &apos;HTIJBFWX&apos;</span>
$c-&gt;decode(<span class="hljs-string">&apos;BFKKQJX&apos;</span>); <span class="hljs-comment">// returns &apos;WAFFLES&apos;</span></code></pre>
<p>If something in the string is not in the alphabet (e.g. punctuation, spaces), simply leave it as is.<br>The shift will always be in range of <code>[1, 26]</code>.</p>

### Solution