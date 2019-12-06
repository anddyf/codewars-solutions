### Problem:
<h2 id="task">Task</h2>
<p>Create a RomanNumerals class that can convert a roman numeral to and from an integer value.  It should follow the API demonstrated in the examples below. Multiple roman numeral values will be tested for each helper method. </p>
<p>Modern Roman numerals are written by expressing each digit separately starting with the left most digit and skipping any digit with a value of zero. In Roman numerals 1990 is rendered: 1000=M, 900=CM, 90=XC; resulting in MCMXC. 2008 is written as 2000=MM, 8=VIII; or MMVIII. 1666 uses each Roman symbol in descending order: MDCLXVI.</p>
<h2 id="examples">Examples</h2>
<pre><code class="language-javascript">RomanNumerals.toRoman(<span class="hljs-number">1000</span>); <span class="hljs-comment">// should return &apos;M&apos;</span>
RomanNumerals.fromRoman(<span class="hljs-string">&apos;M&apos;</span>); <span class="hljs-comment">// should return 1000</span></code></pre>
<pre style="display: none;"><code class="language-coffeescript">RomanNumerals.toRoman(<span class="hljs-number">1000</span>) <span class="hljs-comment"># should return &apos;M&apos;</span>
RomanNumerals.fromRoman(<span class="hljs-string">&apos;M&apos;</span>) <span class="hljs-comment"># should return 1000</span></code></pre>
<pre style="display: none;"><code class="language-ruby">RomanNumerals.to_roman(<span class="hljs-number">1000</span>) <span class="hljs-comment"># should return &apos;M&apos;</span>
RomanNumerals.from_roman(<span class="hljs-string">&apos;M&apos;</span>) <span class="hljs-comment"># should return 1000</span></code></pre>
<pre style="display: none;"><code class="language-python">RomanNumerals.to_roman(<span class="hljs-number">1000</span>) <span class="hljs-comment"># should return &apos;M&apos;</span>
RomanNumerals.from_roman(<span class="hljs-string">&apos;M&apos;</span>) <span class="hljs-comment"># should return 1000</span></code></pre>
<pre style="display: none;"><code class="language-c">to_roman(<span class="hljs-number">1000</span>) <span class="hljs-comment">// should return &apos;M&apos;</span>
from_roman(<span class="hljs-string">&apos;M&apos;</span>) <span class="hljs-comment">// should return 1000</span></code></pre>
<pre style="display: none;"><code class="language-c++">RomanNumerals.to_roman(<span class="hljs-number">1000</span>) <span class="hljs-comment">// should return &apos;M&apos;</span>
RomanNumerals.from_roman(<span class="hljs-string">&apos;M&apos;</span>) <span class="hljs-comment">// should return 1000</span></code></pre>
<pre style="display: none;"><code class="language-julia">RomanNumerals.toroman(<span class="hljs-number">1000</span>) <span class="hljs-comment"># should return &quot;M&quot;</span>
RomanNumerals.fromroman(<span class="hljs-string">&quot;M&quot;</span>) <span class="hljs-comment"># should return 1000</span></code></pre>
<h2 id="help">Help</h2>
<p>| Symbol | Value |
|----------------|
| I         | 1     |
| V         | 5     |
| X         | 10    |
| L         | 50    |
| C         | 100   |
| D         | 500   |
| M         | 1000  |</p>

### Solution