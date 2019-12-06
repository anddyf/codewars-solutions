### Problem:
<p>For building the encrypted string:<br>Take every 2nd char from the string, then the other chars, that are not every 2nd char, and concat them as new String.<br>
Do this n times!</p>
<p>Examples:</p>
<pre><code>&quot;This is a test!&quot;, 1 -&gt; &quot;hsi  etTi sats!&quot;
&quot;This is a test!&quot;, 2 -&gt; &quot;hsi  etTi sats!&quot; -&gt; &quot;s eT ashi tist!&quot;</code></pre><p>Write two methods:</p>
<pre><code class="language-csharp"><span class="hljs-function"><span class="hljs-keyword">string</span> <span class="hljs-title">Encrypt</span>(<span class="hljs-params"><span class="hljs-keyword">string</span> text, <span class="hljs-keyword">int</span> n</span>)
<span class="hljs-keyword">string</span> <span class="hljs-title">Decrypt</span>(<span class="hljs-params"><span class="hljs-keyword">string</span> encryptedText, <span class="hljs-keyword">int</span> n</span>)</span></code></pre>
<pre style="display: none;"><code class="language-cpp">std::string encrypt(std::string text, int n)
std::string decrypt(std::string encryptedText, int n)</code></pre>
<pre style="display: none;"><code class="language-java"><span class="hljs-function">String <span class="hljs-title">encrypt</span><span class="hljs-params">(<span class="hljs-keyword">final</span> String text, <span class="hljs-keyword">final</span> <span class="hljs-keyword">int</span> n)</span>
String <span class="hljs-title">decrypt</span><span class="hljs-params">(<span class="hljs-keyword">final</span> String encryptedText, <span class="hljs-keyword">final</span> <span class="hljs-keyword">int</span> n)</span></span></code></pre>
<pre style="display: none;"><code class="language-javascript"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">encrypt</span>(<span class="hljs-params">text, n</span>)
<span class="hljs-title">function</span> <span class="hljs-title">decrypt</span>(<span class="hljs-params">encryptedText, n</span>)</span></code></pre>
<pre style="display: none;"><code class="language-coffeescript"><span class="hljs-function"><span class="hljs-title">encrypt</span> = <span class="hljs-params">(text, n)</span> -&gt;</span>
<span class="hljs-function"><span class="hljs-title">decrypt</span> = <span class="hljs-params">(encryptedText, n)</span> -&gt;</span></code></pre>
<pre style="display: none;"><code class="language-python">def encrypt(text, n)
def decrypt(encrypted_text, n)</code></pre>
<pre style="display: none;"><code class="language-ruby"><span class="hljs-function"><span class="hljs-keyword">def</span> <span class="hljs-title">encrypt</span><span class="hljs-params">(text, n)</span></span>
<span class="hljs-function"><span class="hljs-keyword">def</span> <span class="hljs-title">decrypt</span><span class="hljs-params">(encrypted_text, n)</span></span></code></pre>
<pre style="display: none;"><code class="language-php"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">encrypt</span><span class="hljs-params">($text, $n)</span> 
<span class="hljs-title">function</span> <span class="hljs-title">decrypt</span><span class="hljs-params">($text, $n)</span></span></code></pre>
<pre style="display: none;"><code class="language-Fsharp"><span class="hljs-keyword">let</span> encrypt (str:string) (n:int) -&gt; string
<span class="hljs-keyword">let</span> decrypt (str:string) (n:int) -&gt; string</code></pre>
<p>For both methods:<br>
If the input-string is null or empty return exactly this value!<br>
If n is &lt;= 0 then return the input text.<br></p>
<p>This kata is part of the Simple Encryption Series:<br>
<a href="https://www.codewars.com/kata/simple-encryption-number-1-alternating-split" taget="_blank" target="_blank">Simple Encryption #1 - Alternating Split</a><br>
<a href="https://www.codewars.com/kata/simple-encryption-number-2-index-difference" taget="_blank" target="_blank">Simple Encryption #2 - Index-Difference</a><br>
<a href="https://www.codewars.com/kata/simple-encryption-number-3-turn-the-bits-around" taget="_blank" target="_blank">Simple Encryption #3 - Turn The Bits Around</a><br>
<a href="https://www.codewars.com/kata/simple-encryption-number-4-qwerty" taget="_blank" target="_blank">Simple Encryption #4 - Qwerty</a><br></p>
<p>Have fun coding it and please don&apos;t forget to vote and rank this kata! :-)</p>

### Solution