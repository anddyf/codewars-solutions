### Problem:
<h1 id="intro">Intro</h1>
<p>Hi there! 
You have to implement the </p>
<p><code>get_reversed_color(hex_color)</code> (Python, Ruby, Haskell) </p>
<p>or <code>getReversedColor(hexColor)</code> (JavaScript, Java) </p>
<p><img src="http://www.w3schools.com/colors/img_colormap.gif" align="right"></p>
<p>function that takes a hex-color string and returns the string represents the complementary color.</p>
<p>What is the hex-color? You can find the answer on <a href="http://www.w3schools.com/colors/colors_picker.asp" target="_blank">w3schools</a> and <a href="https://en.wikipedia.org/wiki/Web_colors" target="_blank">Wikipedia</a></p>
<h1 id="input">Input</h1>
<p>It takes only one argument - string with hex value (case-ignored with chars 0..9 or A..F) without hash-char &quot;#&quot;.
Argument <code>hex_color</code> is not necessarily with 6-digits length - rest of digits are filled by zeros: </p>
<pre><code>&quot;a23&quot; &lt;=&gt; &quot;000a23&quot;
&quot;&quot; &lt;=&gt; &quot;0&quot; &lt;=&gt; &quot;000000&quot;</code></pre><h1 id="output">Output</h1>
<p>Output is the upper-cased string contains of the hash character (#) and complementary color. Complementary color is some color which gives completely white color in sum with entered one:
<code>#000A23</code> + <code>#FFF0DD</code> = <code>#FFFFFF</code></p>
<h1 id="errors">Errors</h1>
<p>If the entered string is incorrect: length is 7+, has non-hexadecimal characters or non-string type, then the Error(IllegalArgumentException - Java) should be raised/thrown or Nothing should be returned in Haskell.</p>
<pre><code class="language-js">&gt;&gt;&gt; getReversedColor(<span class="hljs-string">&quot;00fffff&quot;</span>)
Uncaught <span class="hljs-built_in">Error</span>: Incorrect string length
&gt;&gt;&gt; getReversedColor(<span class="hljs-string">&quot;00ffZZ&quot;</span>)
Uncaught <span class="hljs-built_in">Error</span>: Non-hex chars
&gt;&gt;&gt; getReversedColor(<span class="hljs-number">112233</span>)
Uncaught <span class="hljs-built_in">Error</span>: Incorrect string type</code></pre>
<h1 id="examples">Examples</h1>
<pre><code class="language-python"><span class="hljs-meta">&gt;&gt;&gt; </span>get_reversed_color(<span class="hljs-string">&quot;01fD08&quot;</span>)
<span class="hljs-string">&quot;#FE02F7&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>get_reversed_color(<span class="hljs-string">&quot;&quot;</span>)
<span class="hljs-string">&quot;#FFFFFF&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>get_reversed_color(<span class="hljs-string">&quot;a23&quot;</span>)
<span class="hljs-string">&quot;#FFF5DC&quot;</span></code></pre>
<pre style="display: none;"><code class="language-ruby"><span class="hljs-meta">&gt;&gt;</span>&gt; get_reversed_color(<span class="hljs-string">&quot;01fD08&quot;</span>)
<span class="hljs-string">&quot;#FE02F7&quot;</span>
<span class="hljs-meta">&gt;&gt;</span>&gt; get_reversed_color(<span class="hljs-string">&quot;&quot;</span>)
<span class="hljs-string">&quot;#FFFFFF&quot;</span>
<span class="hljs-meta">&gt;&gt;</span>&gt; get_reversed_color(<span class="hljs-string">&quot;a23&quot;</span>)
<span class="hljs-string">&quot;#FFF5DC&quot;</span></code></pre>
<pre style="display: none;"><code class="language-js">&gt;&gt;&gt; getReversedColor(<span class="hljs-string">&quot;01fD08&quot;</span>)
<span class="hljs-string">&quot;#FE02F7&quot;</span>
&gt;&gt;&gt; getReversedColor(<span class="hljs-string">&quot;&quot;</span>)
<span class="hljs-string">&quot;#FFFFFF&quot;</span>
&gt;&gt;&gt; getReversedColor(<span class="hljs-string">&quot;a23&quot;</span>)
<span class="hljs-string">&quot;#FFF5DC&quot;</span></code></pre>

### Solution