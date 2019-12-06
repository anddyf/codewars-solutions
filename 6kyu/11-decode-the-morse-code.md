### Problem:
<div style="border:1px solid;position:relative;padding:1ex 1ex 1ex 11.1em;"><div style="position:absolute;left:0;top:0;bottom:0; width:10em; padding:1ex;text-align:center;border:1px solid;margin:0 1ex 0 0;color:#000;background-color:#eee;font-variant:small-caps">Part of Series 1/3</div><div>This kata is part of a series on the Morse code. After you solve this kata, you may move to the [next one](/kata/decode-the-morse-code-advanced).</div></div><br>In this kata you have to write a simple <a href="https://en.wikipedia.org/wiki/Morse_code" target="_blank">Morse code</a> decoder. While the Morse code is now mostly superceded by voice and digital data communication channels, it still has its use in some applications around the world.

<p>The Morse code encodes every character as a sequence of &quot;dots&quot; and &quot;dashes&quot;. For example, the letter <code>A</code> is coded as <code>&#xB7;&#x2212;</code>, letter <code>Q</code> is coded as <code>&#x2212;&#x2212;&#xB7;&#x2212;</code>, and digit <code>1</code> is coded as <code>&#xB7;&#x2212;&#x2212;&#x2212;&#x2212;</code>. The Morse code is case-insensitive, traditionally capital letters are used. When the message is written in Morse code, a single space is used to separate the character codes and 3 spaces are used to separate words. For example, the message <code>HEY JUDE</code> in Morse code is <code>&#xB7;&#xB7;&#xB7;&#xB7; &#xB7; &#x2212;&#xB7;&#x2212;&#x2212; &#xA0; &#xB7;&#x2212;&#x2212;&#x2212; &#xB7;&#xB7;&#x2212; &#x2212;&#xB7;&#xB7; &#xB7;</code>.</p>
<p><strong>NOTE:</strong> Extra spaces before or after the code have no meaning and should be ignored.</p>
<p>In addition to letters, digits and some punctuation, there are some special service codes, the most notorious of those is the international distress signal <a href="https://en.wikipedia.org/wiki/SOS" target="_blank">SOS</a> (that was first issued by <a href="https://en.wikipedia.org/wiki/RMS_Titanic" target="_blank">Titanic</a>), that is coded as <code>&#xB7;&#xB7;&#xB7;&#x2212;&#x2212;&#x2212;&#xB7;&#xB7;&#xB7;</code>. These special codes are treated as single special characters, and usually are transmitted as separate words.</p>
<p>Your task is to implement a function that would take the morse code as input and return a decoded human-readable string.</p>
<p>For example:</p>
<pre style="display: none;"><code class="language-coffeescript">decodeMorse(<span class="hljs-string">&apos;.... . -.--   .--- ..- -.. .&apos;</span>)
<span class="hljs-regexp">//</span>should <span class="hljs-keyword">return</span> <span class="hljs-string">&quot;HEY JUDE&quot;</span></code></pre>
<pre style="display: none;"><code class="language-cpp">decodeMorse(&apos;.... . -.--   .--- ..- -.. .&apos;)
//should return &quot;HEY JUDE&quot;</code></pre>
<pre style="display: none;"><code class="language-csharp">MorseCodeDecoder.Decode(<span class="hljs-string">&quot;.... . -.--   .--- ..- -.. .&quot;</span>)
<span class="hljs-comment">//should return &quot;HEY JUDE&quot;</span></code></pre>
<pre style="display: none;"><code class="language-elixir">MorseCode.decode(<span class="hljs-string">&apos;.... . -.--   .--- ..- -.. .&apos;</span>)
<span class="hljs-comment">#=&gt; &quot;HEY JUDE&quot;</span></code></pre>
<pre style="display: none;"><code class="language-elm"><span class="hljs-type">MorseCode</span>.decode <span class="hljs-string">&quot;.... . -.--   .--- ..- -.. .&quot;</span>
<span class="hljs-comment">--should return &quot;HEY JUDE&quot;</span></code></pre>
<pre style="display: none;"><code class="language-go">DecodeMorse(<span class="hljs-string">&quot;.... . -.--   .--- ..- -.. .&quot;</span>)
<span class="hljs-comment">// should return &quot;HEY JUDE&quot;</span></code></pre>
<pre style="display: none;"><code class="language-haskell"><span class="hljs-title">decodeMorse</span> <span class="hljs-string">&quot;.... . -.--   .--- ..- -.. .&quot;</span>
<span class="hljs-comment">--should return &quot;HEY JUDE&quot;</span></code></pre>
<pre style="display: none;"><code class="language-java">MorseCodeDecoder.decode(<span class="hljs-string">&quot;.... . -.--   .--- ..- -.. .&quot;</span>)
<span class="hljs-comment">//should return &quot;HEY JUDE&quot;</span></code></pre>
<pre style="display: none;"><code class="language-javascript">decodeMorse(<span class="hljs-string">&apos;.... . -.--   .--- ..- -.. .&apos;</span>)
<span class="hljs-comment">//should return &quot;HEY JUDE&quot;</span></code></pre>
<pre style="display: none;"><code class="language-kotlin">decodeMorse(<span class="hljs-string">&apos;.... . -.--   .--- ..- -.. .&apos;</span>)
<span class="hljs-comment">//should return &quot;HEY JUDE&quot;</span></code></pre>
<pre style="display: none;"><code class="language-php">decode_morse(<span class="hljs-string">&apos;.... . -.--   .--- ..- -.. .&apos;</span>)
<span class="hljs-comment">//should return &quot;HEY JUDE&quot;</span></code></pre>
<pre><code class="language-python">decodeMorse(<span class="hljs-string">&apos;.... . -.--   .--- ..- -.. .&apos;</span>)
<span class="hljs-comment">#should return &quot;HEY JUDE&quot;</span></code></pre>
<pre style="display: none;"><code class="language-ruby">decodeMorse(<span class="hljs-string">&apos;.... . -.--   .--- ..- -.. .&apos;</span>)
<span class="hljs-comment">#should return &quot;HEY JUDE&quot;</span></code></pre>
<pre style="display: none;"><code class="language-typescript">decodeMorse(<span class="hljs-string">&apos;.... . -.--   .--- ..- -.. .&apos;</span>)
<span class="hljs-comment">//should return &quot;HEY JUDE&quot;</span></code></pre>
<pre style="display: none;"><code class="language-rust">MorseDecoder::new().decode_morse(<span class="hljs-string">&quot;.... . -.--   .--- ..- -.. .&quot;</span>)
<span class="hljs-comment">//should return &quot;HEY JUDE&quot;</span></code></pre>
<pre style="display: none;"><code class="language-scala"><span class="hljs-type">MorseDecoder</span>.decode(<span class="hljs-string">&quot;.... . -.--   .--- ..- -.. .&quot;</span>)
<span class="hljs-comment">//should return &quot;HEY JUDE&quot;</span></code></pre>
<pre style="display: none;"><code class="language-c">decode_morse(<span class="hljs-string">&quot;.... . -.--   .--- ..- -.. .&quot;</span>)
<span class="hljs-comment">// should return &quot;HEY JUDE&quot;</span></code></pre>
<p><strong>NOTE:</strong> For coding purposes you have to use ASCII characters <code>.</code> and <code>-</code>, not Unicode characters.</p>
<p>The Morse code table is preloaded for you as a dictionary, feel free to use it:</p>
<ul>
<li>Coffeescript/C++/Go/JavaScript/PHP/Python/Ruby/TypeScript: <code>MORSE_CODE[&apos;.--&apos;]</code></li>
<li>C#: <code>MorseCode.Get(&quot;.--&quot;)</code> (returns <code>string</code>)</li>
<li>Elixir: <code>@morse_codes</code> variable (from <code>use MorseCode.Constants</code>). Ignore the unused variable warning for <code>morse_codes</code> because it&apos;s no longer used and kept only for old solutions.</li>
<li>Elm: <code>MorseCodes.get : Dict String String</code></li>
<li>Haskell: <code>morseCodes ! &quot;.--&quot;</code> (Codes are in a <code>Map String String</code>)</li>
<li>Java: <code>MorseCode.get(&quot;.--&quot;)</code></li>
<li>Kotlin: <code>MorseCode[&quot;.--&quot;] ?: &quot;&quot;</code> or <code>MorseCode.getOrDefault(&quot;.--&quot;, &quot;&quot;)</code></li>
<li>Rust: <code>self.morse_code</code></li>
<li>Scala: <code>morseCodes(&quot;.--&quot;)</code></li>
</ul>
<ul>
<li>C: provides parallel arrays, i.e. <code>morse[2] == &quot;-.-&quot;</code> for <code>ascii[2] == &quot;C&quot;</code></li>
</ul>
<p>All the test strings would contain valid Morse code, so you may skip checking for errors and exceptions. In C#, tests will fail if the solution code throws an exception, please keep that in mind. This is mostly because otherwise the engine would simply ignore the tests, resulting in a &quot;valid&quot; solution.</p>
<p>Good luck!</p>
<p>After you complete this kata, you may try yourself at <a href="http://www.codewars.com/kata/decode-the-morse-code-advanced" target="_blank">Decode the Morse code, advanced</a>.</p>

### Solution