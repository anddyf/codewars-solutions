### Problem:
<p>In this kata you have to implement a base converter, which converts <strong>positive integers</strong> between arbitrary bases / alphabets. Here are some pre-defined alphabets:</p>
<pre><code class="language-javascript"><span class="hljs-keyword">var</span> Alphabet = {
  <span class="hljs-attr">BINARY</span>:        <span class="hljs-string">&apos;01&apos;</span>,
  <span class="hljs-attr">OCTAL</span>:         <span class="hljs-string">&apos;01234567&apos;</span>,
  <span class="hljs-attr">DECIMAL</span>:       <span class="hljs-string">&apos;0123456789&apos;</span>,
  <span class="hljs-attr">HEXA_DECIMAL</span>:  <span class="hljs-string">&apos;0123456789abcdef&apos;</span>,
  <span class="hljs-attr">ALPHA_LOWER</span>:   <span class="hljs-string">&apos;abcdefghijklmnopqrstuvwxyz&apos;</span>,
  <span class="hljs-attr">ALPHA_UPPER</span>:   <span class="hljs-string">&apos;ABCDEFGHIJKLMNOPQRSTUVWXYZ&apos;</span>,
  <span class="hljs-attr">ALPHA</span>:         <span class="hljs-string">&apos;abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ&apos;</span>,
  <span class="hljs-attr">ALPHA_NUMERIC</span>: <span class="hljs-string">&apos;0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ&apos;</span>
};</code></pre>
<pre style="display: none;"><code class="language-csharp"><span class="hljs-keyword">public</span> <span class="hljs-keyword">class</span> <span class="hljs-title">Alphabet</span>
{
   <span class="hljs-keyword">public</span> <span class="hljs-keyword">const</span> <span class="hljs-keyword">string</span> BINARY = <span class="hljs-string">&quot;01&quot;</span>;
   <span class="hljs-keyword">public</span> <span class="hljs-keyword">const</span> <span class="hljs-keyword">string</span> OCTAL = <span class="hljs-string">&quot;01234567&quot;</span>;
   <span class="hljs-keyword">public</span> <span class="hljs-keyword">const</span> <span class="hljs-keyword">string</span> DECIMAL = <span class="hljs-string">&quot;0123456789&quot;</span>;
   <span class="hljs-keyword">public</span> <span class="hljs-keyword">const</span> <span class="hljs-keyword">string</span> HEXA_DECIMAL = <span class="hljs-string">&quot;0123456789abcdef&quot;</span>;
   <span class="hljs-keyword">public</span> <span class="hljs-keyword">const</span> <span class="hljs-keyword">string</span> ALPHA_LOWER = <span class="hljs-string">&quot;abcdefghijklmnopqrstuvwxyz&quot;</span>;
   <span class="hljs-keyword">public</span> <span class="hljs-keyword">const</span> <span class="hljs-keyword">string</span> ALPHA_UPPER = <span class="hljs-string">&quot;ABCDEFGHIJKLMNOPQRSTUVWXYZ&quot;</span>;
   <span class="hljs-keyword">public</span> <span class="hljs-keyword">const</span> <span class="hljs-keyword">string</span> ALPHA = <span class="hljs-string">&quot;abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ&quot;</span>;
   <span class="hljs-keyword">public</span> <span class="hljs-keyword">const</span> <span class="hljs-keyword">string</span> ALPHA_NUMERIC = <span class="hljs-string">&quot;0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ&quot;</span>;
}</code></pre>
<pre style="display: none;"><code class="language-python">bin      = <span class="hljs-string">&apos;01&apos;</span>
oct      = <span class="hljs-string">&apos;01234567&apos;</span>
dec      = <span class="hljs-string">&apos;0123456789&apos;</span>
hex      = <span class="hljs-string">&apos;0123456789abcdef&apos;</span>
allow    = <span class="hljs-string">&apos;abcdefghijklmnopqrstuvwxyz&apos;</span>
allup    = <span class="hljs-string">&apos;ABCDEFGHIJKLMNOPQRSTUVWXYZ&apos;</span>
alpha    = <span class="hljs-string">&apos;abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ&apos;</span>
alphanum = <span class="hljs-string">&apos;0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ&apos;</span></code></pre>
<pre style="display: none;"><code class="language-ruby">bin      = <span class="hljs-string">&apos;01&apos;</span>
oct      = <span class="hljs-string">&apos;01234567&apos;</span>
dec      = <span class="hljs-string">&apos;0123456789&apos;</span>
hex      = <span class="hljs-string">&apos;0123456789abcdef&apos;</span>
allow    = <span class="hljs-string">&apos;abcdefghijklmnopqrstuvwxyz&apos;</span>
allup    = <span class="hljs-string">&apos;ABCDEFGHIJKLMNOPQRSTUVWXYZ&apos;</span>
alpha    = <span class="hljs-string">&apos;abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ&apos;</span>
alphanum = <span class="hljs-string">&apos;0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ&apos;</span></code></pre>
<pre style="display: none;"><code class="language-haskell"><span class="hljs-class"><span class="hljs-keyword">newtype</span> <span class="hljs-type">Alphabet</span> = <span class="hljs-type">Alphabet</span> { <span class="hljs-title">getDigits</span> :: [<span class="hljs-type">Char</span>] } <span class="hljs-keyword">deriving</span> (<span class="hljs-type">Show</span>)</span>
<span class="hljs-title">bin</span>, oct, dec, hex, alphaLower, alphaUpper, alpha, alphaNumeric :: <span class="hljs-type">Alphabet</span>
<span class="hljs-title">bin</span> = <span class="hljs-type">Alphabet</span> $ <span class="hljs-string">&quot;01&quot;</span>
<span class="hljs-title">oct</span> = <span class="hljs-type">Alphabet</span> $ [&apos;<span class="hljs-number">0</span>&apos;..&apos;<span class="hljs-number">7</span>&apos;]
<span class="hljs-title">dec</span> = <span class="hljs-type">Alphabet</span> $ [&apos;<span class="hljs-number">0</span>&apos;..&apos;<span class="hljs-number">9</span>&apos;]
<span class="hljs-title">hex</span> = <span class="hljs-type">Alphabet</span> $ [&apos;<span class="hljs-number">0</span>&apos;..&apos;<span class="hljs-number">9</span>&apos;] ++ [&apos;a&apos;..&apos;f&apos;]
<span class="hljs-title">alphaLower</span>    = <span class="hljs-type">Alphabet</span> $ [&apos;a&apos;..&apos;z&apos;]
<span class="hljs-title">alphaUpper</span>    = <span class="hljs-type">Alphabet</span> $ [&apos;<span class="hljs-type">A&apos;</span>..&apos;<span class="hljs-type">Z&apos;</span>]
<span class="hljs-title">alpha</span>         = <span class="hljs-type">Alphabet</span> $ [&apos;a&apos;..&apos;z&apos;] ++ [&apos;<span class="hljs-type">A&apos;</span>..&apos;<span class="hljs-type">Z&apos;</span>]
<span class="hljs-title">alphaNumeric</span>  = <span class="hljs-type">Alphabet</span> $ [&apos;<span class="hljs-number">0</span>&apos;..&apos;<span class="hljs-number">9</span>&apos;] ++ [&apos;a&apos;..&apos;z&apos;] ++ [&apos;<span class="hljs-type">A&apos;</span>..&apos;<span class="hljs-type">Z&apos;</span>]</code></pre>
<pre style="display: none;"><code class="language-c"><span class="hljs-keyword">const</span> <span class="hljs-keyword">char</span> * bin = <span class="hljs-string">&quot;01&quot;</span>;
<span class="hljs-keyword">const</span> <span class="hljs-keyword">char</span> * oct = <span class="hljs-string">&quot;01234567&quot;</span>;
<span class="hljs-keyword">const</span> <span class="hljs-keyword">char</span> * dec = <span class="hljs-string">&quot;0123456789&quot;</span>;
<span class="hljs-keyword">const</span> <span class="hljs-keyword">char</span> * hex = <span class="hljs-string">&quot;0123456789abcdef&quot;</span>;
<span class="hljs-keyword">const</span> <span class="hljs-keyword">char</span> * allow = <span class="hljs-string">&quot;abcdefghijklmnopqrstuvwxyz&quot;</span>;
<span class="hljs-keyword">const</span> <span class="hljs-keyword">char</span> * alup = <span class="hljs-string">&quot;ABCDEFGHIJKLMNOPQRSTUVWXYZ&quot;</span>;
<span class="hljs-keyword">const</span> <span class="hljs-keyword">char</span> * alpha = <span class="hljs-string">&quot;abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ&quot;</span>;
<span class="hljs-keyword">const</span> <span class="hljs-keyword">char</span> * alnum = <span class="hljs-string">&quot;0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ&quot;</span>;</code></pre>
<p>The function <code>convert()</code> should take an input (string), the source alphabet (string) and the target alphabet (string). You can assume that the input value always consists of characters from the source alphabet. You don&apos;t need to validate it.</p>
<h3 id="examples">Examples</h3>
<pre><code class="language-javascript"><span class="hljs-comment">// convert between numeral systems</span>
convert(<span class="hljs-string">&quot;15&quot;</span>, Alphabet.DECIMAL, Alphabet.BINARY); <span class="hljs-comment">// should return &quot;1111&quot;</span>
convert(<span class="hljs-string">&quot;15&quot;</span>, Alphabet.DECIMAL, Alphabet.OCTAL); <span class="hljs-comment">// should return &quot;17&quot;</span>
convert(<span class="hljs-string">&quot;1010&quot;</span>, Alphabet.BINARY, Alphabet.DECIMAL); <span class="hljs-comment">// should return &quot;10&quot;</span>
convert(<span class="hljs-string">&quot;1010&quot;</span>, Alphabet.BINARY, Alphabet.HEXA_DECIMAL); <span class="hljs-comment">// should return &quot;a&quot;</span>

<span class="hljs-comment">// other bases</span>
convert(<span class="hljs-string">&quot;0&quot;</span>, Alphabet.DECIMAL, Alphabet.ALPHA); <span class="hljs-comment">// should return &quot;a&quot;</span>
convert(<span class="hljs-string">&quot;27&quot;</span>, Alphabet.DECIMAL, Alphabet.ALPHA_LOWER); <span class="hljs-comment">// should return &quot;bb&quot;</span>
convert(<span class="hljs-string">&quot;hello&quot;</span>, Alphabet.ALPHA_LOWER, Alphabet.HEXA_DECIMAL); <span class="hljs-comment">// should return &quot;320048&quot;</span>
convert(<span class="hljs-string">&quot;SAME&quot;</span>, Alphabet.ALPHA_UPPER, Alphabet.ALPHA_UPPER); <span class="hljs-comment">// should return &quot;SAME&quot;</span></code></pre>
<pre style="display: none;"><code class="language-csharp"><span class="hljs-comment">// convert between numeral systems</span>
Convert(<span class="hljs-string">&quot;15&quot;</span>, Alphabet.DECIMAL, Alphabet.BINARY); <span class="hljs-comment">// should return &quot;1111&quot;</span>
Convert(<span class="hljs-string">&quot;15&quot;</span>, Alphabet.DECIMAL, Alphabet.OCTAL); <span class="hljs-comment">// should return &quot;17&quot;</span>
Convert(<span class="hljs-string">&quot;1010&quot;</span>, Alphabet.BINARY, Alphabet.DECIMAL); <span class="hljs-comment">// should return &quot;10&quot;</span>
Convert(<span class="hljs-string">&quot;1010&quot;</span>, Alphabet.BINARY, Alphabet.HEXA_DECIMAL); <span class="hljs-comment">// should return &quot;a&quot;</span>

<span class="hljs-comment">// other bases</span>
Convert(<span class="hljs-string">&quot;0&quot;</span>, Alphabet.DECIMAL, Alphabet.ALPHA); <span class="hljs-comment">// should return &quot;a&quot;</span>
Convert(<span class="hljs-string">&quot;27&quot;</span>, Alphabet.DECIMAL, Alphabet.ALPHA_LOWER); <span class="hljs-comment">// should return &quot;bb&quot;</span>
Convert(<span class="hljs-string">&quot;hello&quot;</span>, Alphabet.ALPHA_LOWER, Alphabet.HEXA_DECIMAL); <span class="hljs-comment">// should return &quot;320048&quot;</span>
Convert(<span class="hljs-string">&quot;SAME&quot;</span>, Alphabet.ALPHA_UPPER, Alphabet.ALPHA_UPPER); <span class="hljs-comment">// should return &quot;SAME&quot;</span></code></pre>
<pre style="display: none;"><code class="language-python">convert(&quot;15&quot;, dec, bin)       ==&gt;  &quot;1111&quot;
convert(&quot;15&quot;, dec, oct)       ==&gt;  &quot;17&quot;
convert(&quot;1010&quot;, bin, dec)     ==&gt;  &quot;10&quot;
convert(&quot;1010&quot;, bin, hex)     ==&gt;  &quot;a&quot;
convert(&quot;0&quot;, dec, alpha)      ==&gt;  &quot;a&quot;
convert(&quot;27&quot;, dec, allow)     ==&gt;  &quot;bb&quot;
convert(&quot;hello&quot;, allow, hex)  ==&gt;  &quot;320048&quot;</code></pre>
<pre style="display: none;"><code class="language-ruby">convert(<span class="hljs-string">&quot;15&quot;</span>, dec, bin)   <span class="hljs-comment"># should return &quot;1111&quot;</span>
convert(<span class="hljs-string">&quot;15&quot;</span>, dec, oct)   <span class="hljs-comment"># should return &quot;17&quot;</span>
convert(<span class="hljs-string">&quot;1010&quot;</span>, bin, dec) <span class="hljs-comment"># should return &quot;10&quot;</span>
convert(<span class="hljs-string">&quot;1010&quot;</span>, bin, hex) <span class="hljs-comment"># should return &quot;a&quot;</span>
convert(<span class="hljs-string">&quot;0&quot;</span>, dec, alpha)  <span class="hljs-comment"># should return &quot;a&quot;</span>
convert(<span class="hljs-string">&quot;27&quot;</span>, dec, allow) <span class="hljs-comment"># should return &quot;bb&quot;</span>
convert(<span class="hljs-string">&quot;hello&quot;</span>, allow, hex) <span class="hljs-comment"># should return &quot;320048&quot;</span></code></pre>
<pre style="display: none;"><code class="language-haskell"><span class="hljs-title">convert</span> dec bin <span class="hljs-string">&quot;15&quot;</span>   `shouldBe` <span class="hljs-string">&quot;1111&quot;</span>
<span class="hljs-title">convert</span> dec oct <span class="hljs-string">&quot;15&quot;</span>   `shouldBe` <span class="hljs-string">&quot;17&quot;</span>
<span class="hljs-title">convert</span> bin dec <span class="hljs-string">&quot;1010&quot;</span> `shouldBe` <span class="hljs-string">&quot;10&quot;</span>
<span class="hljs-title">convert</span> bin hex <span class="hljs-string">&quot;1010&quot;</span> `shouldBe` <span class="hljs-string">&quot;a&quot;</span>
<span class="hljs-title">convert</span> dec alpha      <span class="hljs-string">&quot;0&quot;</span>     `shouldBe` <span class="hljs-string">&quot;a&quot;</span>
<span class="hljs-title">convert</span> dec alphaLower <span class="hljs-string">&quot;27&quot;</span>    `shouldBe` <span class="hljs-string">&quot;bb&quot;</span>
<span class="hljs-title">convert</span> alphaLower hex <span class="hljs-string">&quot;hello&quot;</span> `shouldBe` <span class="hljs-string">&quot;320048&quot;</span></code></pre>
<pre style="display: none;"><code class="language-c">convert(<span class="hljs-string">&quot;15&quot;</span>, dec, bin)       <span class="hljs-comment">// should return &quot;1111&quot;</span>
convert(<span class="hljs-string">&quot;15&quot;</span>, dec, oct)       <span class="hljs-comment">// should return &quot;17&quot;</span>
convert(<span class="hljs-string">&quot;1010&quot;</span>, bin, dec)     <span class="hljs-comment">// should return &quot;10&quot;</span>
convert(<span class="hljs-string">&quot;1010&quot;</span>, bin, hex)     <span class="hljs-comment">// should return &quot;a&quot;</span>
convert(<span class="hljs-string">&quot;0&quot;</span>, dec, alpha)      <span class="hljs-comment">// should return &quot;a&quot;</span>
convert(<span class="hljs-string">&quot;27&quot;</span>, dec, allow)     <span class="hljs-comment">// should return &quot;bb&quot;</span>
convert(<span class="hljs-string">&quot;hello&quot;</span>, allow, hex)  <span class="hljs-comment">// should return &quot;320048&quot;</span></code></pre>
<p>Additional Notes:</p>
<ul>
<li>The maximum input value can always be encoded in a number without loss of precision in JavaScript. In Haskell, intermediate results will probably be too large for <code>Int</code>.</li>
<li>The function must work for any arbitrary alphabets, not only the pre-defined ones</li>
<li>You don&apos;t have to consider negative numbers</li>
</ul>

### Solution