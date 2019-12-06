### Problem:
<p>In this kata you parse RGB colors represented by strings. The formats are primarily used in HTML and CSS. Your task is to implement a function which takes a color as a string and returns the parsed color as a map (see Examples).</p>
<h2 id="input">Input:</h2>
<p>The input string represents one of the following:</p>
<ul>
<li><strong>6-digit hexadecimal</strong> - &quot;#RRGGBB&quot;<br>e.g. &quot;#012345&quot;, &quot;#789abc&quot;, &quot;#FFA077&quot;<br>Each pair of digits represents a value of the channel in hexadecimal: 00 to FF</li>
</ul>
<ul>
<li><strong>3-digit hexadecimal</strong> - &quot;#RGB&quot;<br>e.g. &quot;#012&quot;, &quot;#aaa&quot;, &quot;#F5A&quot;<br>Each digit represents a value 0 to F which translates to 2-digit hexadecimal: 0-&gt;00, 1-&gt;11, 2-&gt;22, and so on.</li>
</ul>
<ul>
<li><strong>Preset color name</strong><br>e.g. &quot;red&quot;, &quot;BLUE&quot;, &quot;LimeGreen&quot;<br>You have to use the predefined map <code>PRESET_COLORS</code> (JavaScript, Python, Ruby), <code>presetColors</code> (Java, C#, Haskell), or <code>preset-colors</code> (Clojure). The keys are the names of preset colors <em>in lower-case</em> and the values are the corresponding colors in 6-digit hexadecimal (same as 1. &quot;#RRGGBB&quot;).</li>
</ul>
<h2 id="examples">Examples:</h2>
<pre><code class="language-ruby">parse_html_color(<span class="hljs-string">&apos;#80FFA0&apos;</span>)   <span class="hljs-comment"># =&gt; { r: 128, g: 255, b: 160 }</span>
parse_html_color(<span class="hljs-string">&apos;#3B7&apos;</span>)      <span class="hljs-comment"># =&gt; { r: 51,  g: 187, b: 119 }</span>
parse_html_color(<span class="hljs-string">&apos;LimeGreen&apos;</span>) <span class="hljs-comment"># =&gt; { r: 50,  g: 205, b: 50  }</span></code></pre>
<pre style="display: none;"><code class="language-python">parse_html_color(<span class="hljs-string">&apos;#80FFA0&apos;</span>)   <span class="hljs-comment"># =&gt; {&apos;r&apos;: 128, &apos;g&apos;: 255, &apos;b&apos;: 160}</span>
parse_html_color(<span class="hljs-string">&apos;#3B7&apos;</span>)      <span class="hljs-comment"># =&gt; {&apos;r&apos;: 51,  &apos;g&apos;: 187, &apos;b&apos;: 119}</span>
parse_html_color(<span class="hljs-string">&apos;LimeGreen&apos;</span>) <span class="hljs-comment"># =&gt; {&apos;r&apos;: 50,  &apos;g&apos;: 205, &apos;b&apos;: 50 }</span></code></pre>
<pre style="display: none;"><code class="language-javascript">parseHTMLColor(<span class="hljs-string">&apos;#80FFA0&apos;</span>);    <span class="hljs-comment">// =&gt; { r: 128, g: 255, b: 160 }</span>
parseHTMLColor(<span class="hljs-string">&apos;#3B7&apos;</span>);       <span class="hljs-comment">// =&gt; { r: 51,  g: 187, b: 119 }</span>
parseHTMLColor(<span class="hljs-string">&apos;LimeGreen&apos;</span>);  <span class="hljs-comment">// =&gt; { r: 50,  g: 205, b: 50  }</span></code></pre>
<pre style="display: none;"><code class="language-clojure">(<span class="hljs-name">parse-html-color</span> <span class="hljs-string">&quot;#80FFA0&quot;</span>)   <span class="hljs-comment">; =&gt; {:r 128 :g 255 :b 160}</span>
(<span class="hljs-name">parse-html-color</span> <span class="hljs-string">&quot;#3B7&quot;</span>)      <span class="hljs-comment">; =&gt; {:r 51  :g 187 :b 119}</span>
(<span class="hljs-name">parse-html-color</span> <span class="hljs-string">&quot;LimeGreen&quot;</span>) <span class="hljs-comment">; =&gt; {:r 50  :g 205 :b 50 }</span></code></pre>
<pre style="display: none;"><code class="language-haskell"><span class="hljs-comment">-- You can get a value from the map like this:</span>
<span class="hljs-title">presetColors</span> ! <span class="hljs-string">&quot;blue&quot;</span>
<span class="hljs-comment">--</span>
<span class="hljs-title">parseHtmlColor</span> <span class="hljs-string">&quot;#80FFA0&quot;</span>   === fromList [(&apos;r&apos;,<span class="hljs-number">128</span>), (&apos;g&apos;,<span class="hljs-number">255</span>), (&apos;b&apos;,<span class="hljs-number">160</span>)]
<span class="hljs-title">parseHtmlColor</span> <span class="hljs-string">&quot;#3B7&quot;</span>      === fromList [(&apos;r&apos;,<span class="hljs-number">51</span>), (&apos;g&apos;,<span class="hljs-number">187</span>), (&apos;b&apos;,<span class="hljs-number">119</span>)]
<span class="hljs-title">parseHtmlColor</span> <span class="hljs-string">&quot;LimeGreen&quot;</span> === fromList [(&apos;r&apos;,<span class="hljs-number">50</span>), (&apos;g&apos;,<span class="hljs-number">205</span>), (&apos;b&apos;,<span class="hljs-number">50</span>)]</code></pre>
<pre style="display: none;"><code class="language-java">parse(<span class="hljs-string">&quot;#80FFA0&quot;</span>)   === <span class="hljs-keyword">new</span> RGB(<span class="hljs-number">128</span>, <span class="hljs-number">255</span>, <span class="hljs-number">160</span>))
parse(<span class="hljs-string">&quot;#3B7&quot;</span>)      === <span class="hljs-keyword">new</span> RGB( <span class="hljs-number">51</span>, <span class="hljs-number">187</span>, <span class="hljs-number">119</span>))
parse(<span class="hljs-string">&quot;LimeGreen&quot;</span>) === <span class="hljs-keyword">new</span> RGB( <span class="hljs-number">50</span>, <span class="hljs-number">205</span>,  <span class="hljs-number">50</span>))

<span class="hljs-comment">// RGB class is defined as follows:</span>
<span class="hljs-keyword">final</span> <span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">RGB</span> </span>{
    <span class="hljs-keyword">public</span> <span class="hljs-keyword">int</span> r, g, b;

    <span class="hljs-function"><span class="hljs-keyword">public</span> <span class="hljs-title">RGB</span><span class="hljs-params">()</span></span>;
    <span class="hljs-function"><span class="hljs-keyword">public</span> <span class="hljs-title">RGB</span><span class="hljs-params">(<span class="hljs-keyword">int</span> r, <span class="hljs-keyword">int</span> g, <span class="hljs-keyword">int</span> b)</span></span>;
}</code></pre>
<pre style="display: none;"><code class="language-csharp">Parse(<span class="hljs-string">&quot;#80FFA0&quot;</span>)   === <span class="hljs-keyword">new</span> RGB(<span class="hljs-number">128</span>, <span class="hljs-number">255</span>, <span class="hljs-number">160</span>))
Parse(<span class="hljs-string">&quot;#3B7&quot;</span>)      === <span class="hljs-keyword">new</span> RGB( <span class="hljs-number">51</span>, <span class="hljs-number">187</span>, <span class="hljs-number">119</span>))
Parse(<span class="hljs-string">&quot;LimeGreen&quot;</span>) === <span class="hljs-keyword">new</span> RGB( <span class="hljs-number">50</span>, <span class="hljs-number">205</span>,  <span class="hljs-number">50</span>))

<span class="hljs-comment">// RGB struct is defined as follows:</span>
<span class="hljs-keyword">struct</span> RGB
{
    <span class="hljs-keyword">public</span> <span class="hljs-keyword">byte</span> r, g, b;
    <span class="hljs-function"><span class="hljs-keyword">public</span> <span class="hljs-title">RGB</span>(<span class="hljs-params"><span class="hljs-keyword">byte</span> r, <span class="hljs-keyword">byte</span> g, <span class="hljs-keyword">byte</span> b</span>)</span>;
}</code></pre>

### Solution