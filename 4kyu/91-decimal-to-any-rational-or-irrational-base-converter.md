### Problem:
<p>I started this as a joke among friends, telling that converting numbers to other integer bases is for n00bs, while an actual coder at least converts numbers to more complex bases like <a href="http://en.wikipedia.org/wiki/Pi" target="_blank">pi (or &#x3C0; or however you wish to spell it in your language)</a>, so they dared me proving I was better.</p>
<p>And I did it in few hours, discovering that what I started as a joke actually has <a href="http://en.wikipedia.org/wiki/Non-integer_representation" target="_blank">some math ground and application (particularly the conversion to base pi, it seems)</a>.</p>
<p>That said, now I am daring you to do the same, that is to build a function so that it takes a <strong>number</strong> (any number, you are warned!) and optionally the <strong>number of decimals</strong> (default: 0) and a <strong>base</strong> (default: pi), returning the proper conversion <strong>as a string</strong>:</p>
<p>#Note
In Java there is no easy way with optional parameters so all three parameters will be given; the same in C# because, as of now, the used version is not known. </p>
<pre style="display: none;"><code class="language-python">converter(<span class="hljs-number">13</span>) <span class="hljs-comment">#returns &apos;103&apos;</span>
converter(<span class="hljs-number">13</span>,<span class="hljs-number">3</span>) <span class="hljs-comment">#returns &apos;103.010&apos;</span>
converter(<span class="hljs-number">-13</span>,<span class="hljs-number">0</span>,<span class="hljs-number">2</span>) <span class="hljs-comment">#returns &apos;-1101&apos;</span></code></pre>
<pre><code class="language-javascript">converter(<span class="hljs-number">13</span>) <span class="hljs-comment">//returns &apos;103&apos;</span>
converter(<span class="hljs-number">13</span>,<span class="hljs-number">3</span>) <span class="hljs-comment">//returns &apos;103.010&apos;</span>
converter(<span class="hljs-number">-13</span>,<span class="hljs-number">0</span>,<span class="hljs-number">2</span>) <span class="hljs-comment">//returns &apos;-1101&apos;</span></code></pre>
<pre style="display: none;"><code class="language-ruby">converter(<span class="hljs-number">13</span>) <span class="hljs-comment">#returns &apos;103&apos;</span>
converter(<span class="hljs-number">13</span>,<span class="hljs-number">3</span>) <span class="hljs-comment">#returns &apos;103.010&apos;</span>
converter(-<span class="hljs-number">13</span>,<span class="hljs-number">0</span>,<span class="hljs-number">2</span>) <span class="hljs-comment">#returns &apos;-1101&apos;</span></code></pre>
<pre style="display: none;"><code class="language-java">Converter.converter(13, 0, Math.PI) #returns &apos;103&apos;
Converter.converter(13, 3, Math.PI) #returns &apos;103.010&apos;
Converter.converter(-13, 0, 2) #returns &apos;-1101&apos;</code></pre>
<pre style="display: none;"><code class="language-csharp">Converter.Convert(<span class="hljs-number">13</span>, <span class="hljs-number">0</span>, Math.PI) <span class="hljs-meta">#returns &apos;103&apos;</span>
Converter.Convert(<span class="hljs-number">13</span>, <span class="hljs-number">3</span>, Math.PI) <span class="hljs-meta">#returns &apos;103.010&apos;</span>
Converter.Convert(<span class="hljs-number">-13</span>, <span class="hljs-number">0</span>, <span class="hljs-number">2</span>) <span class="hljs-meta">#returns &apos;-1101&apos;</span></code></pre>
<p>I know most of the world uses a comma as a <a href="http://en.wikipedia.org/wiki/Decimal_mark" target="_blank">decimal mark</a>, but as English language and culture are <em>de facto</em> the Esperanto of us coders, we will stick to our common glorious traditions and uses, adopting the trivial dot (&quot;.&quot;) as decimal separator; if the absolute value of the result is &lt;1, you have of course to put one (and only one) leading 0 before the decimal separator.</p>
<p>Finally, you may assume that decimals if provided will always be &gt;= 0 and that no test base will be smaller than 2 (because, you know, converting to base 1 is pretty lame) or greater than 36; as usual, for digits greater than 9 you can use uppercase alphabet letter, so your base of numeration is going to be: &apos;0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ&apos;.</p>
<p>That is my first 3-languages-kata, so I count on you all to give me extensive feedback, no matter how harsh it may sound, so to improve myself even further :)</p>

### Solution