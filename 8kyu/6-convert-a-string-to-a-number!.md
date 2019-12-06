### Problem:
<p>Note: This kata is inspired by <a href="http://www.codewars.com/kata/convert-a-number-to-a-string/" target="_blank">Convert a Number to a String!</a>. Try that one too.</p>
<h2 id="description">Description</h2>
<p>We need a function that can transform a string into a number. What ways of achieving this do you know?</p>
<p>Note: Don&apos;t worry, all inputs will be strings, and every string is a perfectly valid representation of an integral number.</p>
<h2 id="examples">Examples</h2>
<pre><code class="language-haskell"><span class="hljs-title">stringToNumber</span> <span class="hljs-string">&quot;1234&quot;</span> == <span class="hljs-number">1234</span>
<span class="hljs-title">stringToNumber</span> <span class="hljs-string">&quot;605&quot;</span>  == <span class="hljs-number">605</span>
<span class="hljs-title">stringToNumber</span> <span class="hljs-string">&quot;1405&quot;</span> == <span class="hljs-number">1405</span>
<span class="hljs-title">stringToNumber</span> <span class="hljs-string">&quot;-7&quot;</span>   == <span class="hljs-number">-7</span></code></pre>
<pre style="display: none;"><code class="language-clojure">(stringToNumber &quot;1234&quot;) =&gt; 1234
(stringToNumber &quot;605&quot;)  =&gt; 605
(stringToNumber &quot;1405&quot;) =&gt; 1405
(stringToNumber &quot;-7&quot;)   =&gt; -7</code></pre>
<pre style="display: none;"><code class="language-javascript">stringToNumber(<span class="hljs-string">&quot;1234&quot;</span>) == <span class="hljs-number">1234</span>
stringToNumber(<span class="hljs-string">&quot;605&quot;</span> ) == <span class="hljs-number">605</span>
stringToNumber(<span class="hljs-string">&quot;1405&quot;</span>) == <span class="hljs-number">1405</span>
stringToNumber(<span class="hljs-string">&quot;-7&quot;</span>  ) == <span class="hljs-number">-7</span></code></pre>
<pre style="display: none;"><code class="language-dart">stringToNumber(<span class="hljs-string">&quot;1234&quot;</span>) == <span class="hljs-number">1234</span>
stringToNumber(<span class="hljs-string">&quot;605&quot;</span> ) == <span class="hljs-number">605</span>
stringToNumber(<span class="hljs-string">&quot;1405&quot;</span>) == <span class="hljs-number">1405</span>
stringToNumber(<span class="hljs-string">&quot;-7&quot;</span>  ) == <span class="hljs-number">-7</span></code></pre>
<pre style="display: none;"><code class="language-php">stringToNumber(<span class="hljs-string">&quot;1234&quot;</span>) === <span class="hljs-number">1234</span>
stringToNumber(<span class="hljs-string">&quot;605&quot;</span> ) === <span class="hljs-number">605</span>
stringToNumber(<span class="hljs-string">&quot;1405&quot;</span>) === <span class="hljs-number">1405</span>
stringToNumber(<span class="hljs-string">&quot;-7&quot;</span>  ) === <span class="hljs-number">-7</span></code></pre>
<pre style="display: none;"><code class="language-typescript">stringToNumber(<span class="hljs-string">&quot;1234&quot;</span>) == <span class="hljs-number">1234</span>
stringToNumber(<span class="hljs-string">&quot;605&quot;</span> ) == <span class="hljs-number">605</span>
stringToNumber(<span class="hljs-string">&quot;1405&quot;</span>) == <span class="hljs-number">1405</span>
stringToNumber(<span class="hljs-string">&quot;-7&quot;</span>  ) == <span class="hljs-number">-7</span></code></pre>
<pre style="display: none;"><code class="language-java">stringToNumber(<span class="hljs-string">&quot;1234&quot;</span>) == <span class="hljs-number">1234</span>
stringToNumber(<span class="hljs-string">&quot;605&quot;</span> ) == <span class="hljs-number">605</span>
stringToNumber(<span class="hljs-string">&quot;1405&quot;</span>) == <span class="hljs-number">1405</span>
stringToNumber(<span class="hljs-string">&quot;-7&quot;</span>  ) == -<span class="hljs-number">7</span></code></pre>
<pre style="display: none;"><code class="language-coffeescript">stringToNumber <span class="hljs-string">&quot;1234&quot;</span>  == <span class="hljs-number">1234</span>
stringToNumber <span class="hljs-string">&quot;605&quot;</span>   == <span class="hljs-number">605</span>
stringToNumber <span class="hljs-string">&quot;1405&quot;</span>  == <span class="hljs-number">1405</span>
stringToNumber <span class="hljs-string">&quot;-7&quot;</span>    == <span class="hljs-number">-7</span></code></pre>
<pre style="display: none;"><code class="language-python">stringToNumber(<span class="hljs-string">&quot;1234&quot;</span>) == <span class="hljs-number">1234</span>
stringToNumber(<span class="hljs-string">&quot;605&quot;</span> ) == <span class="hljs-number">605</span>
stringToNumber(<span class="hljs-string">&quot;1405&quot;</span>) == <span class="hljs-number">1405</span>
stringToNumber(<span class="hljs-string">&quot;-7&quot;</span>  ) == <span class="hljs-number">-7</span></code></pre>
<pre style="display: none;"><code class="language-ruby">string_to_number <span class="hljs-string">&quot;1234&quot;</span>  == <span class="hljs-number">1234</span>
string_to_number <span class="hljs-string">&quot;605&quot;</span>   == <span class="hljs-number">605</span>
string_to_number <span class="hljs-string">&quot;1405&quot;</span>  == <span class="hljs-number">1405</span>
string_to_number <span class="hljs-string">&quot;-7&quot;</span>    == -<span class="hljs-number">7</span></code></pre>
<pre style="display: none;"><code class="language-csharp">StringToNumber(<span class="hljs-string">&quot;1234&quot;</span>) == <span class="hljs-number">1234</span>
StringToNumber(<span class="hljs-string">&quot;605&quot;</span>) == <span class="hljs-number">605</span>
StringToNumber(<span class="hljs-string">&quot;1405&quot;</span>) == <span class="hljs-number">1405</span>
StringToNumber(<span class="hljs-string">&quot;-7&quot;</span>) == <span class="hljs-number">-7</span></code></pre>
<pre style="display: none;"><code class="language-elixir">string_to_number <span class="hljs-string">&quot;1234&quot;</span>  == <span class="hljs-number">1234</span>
string_to_number <span class="hljs-string">&quot;605&quot;</span>   == <span class="hljs-number">605</span>
string_to_number <span class="hljs-string">&quot;1405&quot;</span>  == <span class="hljs-number">1405</span>
string_to_number <span class="hljs-string">&quot;-7&quot;</span>    == <span class="hljs-number">-7</span></code></pre>
<pre style="display: none;"><code class="language-cpp">string_to_number(<span class="hljs-string">&quot;1234&quot;</span>)  == <span class="hljs-number">1234</span>
string_to_number(<span class="hljs-string">&quot;605&quot;</span>)   == <span class="hljs-number">605</span>
string_to_number(<span class="hljs-string">&quot;1405&quot;</span>)  == <span class="hljs-number">1405</span>
string_to_number(<span class="hljs-string">&quot;-7&quot;</span>)    == <span class="hljs-number">-7</span></code></pre>
<pre style="display: none;"><code class="language-c">string_to_number(<span class="hljs-string">&quot;1234&quot;</span>)  == <span class="hljs-number">1234</span>
string_to_number(<span class="hljs-string">&quot;605&quot;</span>)   == <span class="hljs-number">605</span>
string_to_number(<span class="hljs-string">&quot;1405&quot;</span>)  == <span class="hljs-number">1405</span>
string_to_number(<span class="hljs-string">&quot;-7&quot;</span>)    == <span class="hljs-number">-7</span></code></pre>
<pre style="display: none;"><code class="language-rust">string_to_number(<span class="hljs-string">&quot;1234&quot;</span>)  == <span class="hljs-number">1234</span>
string_to_number(<span class="hljs-string">&quot;605&quot;</span>)   == <span class="hljs-number">605</span>
string_to_number(<span class="hljs-string">&quot;1405&quot;</span>)  == <span class="hljs-number">1405</span>
string_to_number(<span class="hljs-string">&quot;-7&quot;</span>)    == -<span class="hljs-number">7</span></code></pre>
<pre style="display: none;"><code class="language-lua">string_to_number(<span class="hljs-string">&quot;1234&quot;</span>)  == <span class="hljs-number">1234</span>
string_to_number(<span class="hljs-string">&quot;605&quot;</span>)   == <span class="hljs-number">605</span>
string_to_number(<span class="hljs-string">&quot;1405&quot;</span>)  == <span class="hljs-number">1405</span>
string_to_number(<span class="hljs-string">&quot;-7&quot;</span>)    == <span class="hljs-number">-7</span></code></pre>
<pre style="display: none;"><code class="language-groovy">Kata.stringToNumber(<span class="hljs-string">&quot;1234&quot;</span>) == <span class="hljs-number">1234</span>
Kata.stringToNumber(<span class="hljs-string">&quot;605&quot;</span> ) == <span class="hljs-number">605</span>
Kata.stringToNumber(<span class="hljs-string">&quot;1405&quot;</span>) == <span class="hljs-number">1405</span>
Kata.stringToNumber(<span class="hljs-string">&quot;-7&quot;</span>  ) == <span class="hljs-number">-7</span></code></pre>
<pre style="display: none;"><code class="language-julia">stringtonumber(<span class="hljs-string">&quot;1234&quot;</span>)  == <span class="hljs-number">1234</span>
stringtonumber(<span class="hljs-string">&quot;605&quot;</span>)   == <span class="hljs-number">605</span>
stringtonumber(<span class="hljs-string">&quot;1405&quot;</span>)  == <span class="hljs-number">1405</span>
stringtonumber(<span class="hljs-string">&quot;-7&quot;</span>)    == -<span class="hljs-number">7</span></code></pre>
<pre style="display: none;"><code class="language-racket">(<span class="hljs-name"><span class="hljs-builtin-name">=</span></span> (<span class="hljs-name">string-to-number</span> <span class="hljs-string">&quot;1234&quot;</span>) <span class="hljs-number">1234</span>)
(<span class="hljs-name"><span class="hljs-builtin-name">=</span></span> (<span class="hljs-name">string-to-number</span> <span class="hljs-string">&quot;605&quot;</span>) <span class="hljs-number">605</span>)
(<span class="hljs-name"><span class="hljs-builtin-name">=</span></span> (<span class="hljs-name">string-to-number</span> <span class="hljs-string">&quot;1405&quot;</span>) <span class="hljs-number">1405</span>)
(<span class="hljs-name"><span class="hljs-builtin-name">=</span></span> (<span class="hljs-name">string-to-number</span> <span class="hljs-string">&quot;-7&quot;</span>) <span class="hljs-number">-7</span>)</code></pre>

### Solution