### Problem:
<p>NOTE: It is recommended you complete <a href="https://www.codewars.com/kata/esolang-interpreters-number-1-introduction-to-esolangs-and-my-first-interpreter-ministringfuck/" target="_blank">Introduction to Esolangs</a> or <a href="https://www.codewars.com/kata/esolang-minibitflip/" target="_blank">MiniBitFlip</a> before solving this one.</p>
<h3>Task:</h3>
Make an interpreter for an esoteric language called Ticker. Ticker is a descendant of [Tick](https://www.codewars.com/kata/esolang-tick). Your language has the following commands:

<p><code>&gt;</code>: increment the selector by 1</p>
<p><code>&lt;</code>: decrement the selector by 1</p>
<p><code>*</code>: add the ascii value of selected cell to the output tape</p>
<p><code>+</code>: increment selected cell data by 1. If 256, then it is 0</p>
<p><code>-</code>: increment selected cell data by -1. If less than 0, then 255</p>
<p><code>/</code>: set selected cell data to 0</p>
<p><code>!</code>: add new data cell to the end of the array</p>
<p>You start with selector at <code>0</code> and one cell with a value of <code>0</code>. If selector goes out of bounds, assume 0 for that cell <b>but do not add it to the memory. If a + or - is being made do not change the value of the assumed cell. It will always stay 0 unless it is added to the memory</b></p>
<p>In other words:</p>
<pre><code>data: start 0 end
selector:   ^
data start 1 2 4 end
selector:        ^
Assume that cell is zero.</code></pre><h3>Examples:</h3>
Consider the following program:

<pre><code class="language-python"><span class="hljs-string">&apos;++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/++++++++++++++++++++++++++++++++*/+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/+++++++++++++++++++++++++++++++++*/&apos;</span></code></pre>
<p>It&apos;s output is this:</p>
<pre><code class="language-python"><span class="hljs-string">&apos;Hello World!&apos;</span></code></pre>
<p>This is made just by using 1 data cell.</p>
<p>Example using multiple data cells:</p>
<pre><code class="language-python"><span class="hljs-string">&apos;++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*!&gt;+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*!&gt;++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*!&gt;++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*!&gt;+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*!&gt;++++++++++++++++++++++++++++++++*!&gt;+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*!&gt;+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*!&gt;++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*!&gt;++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*!&gt;++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*!&gt;+++++++++++++++++++++++++++++++++*!&gt;&apos;</span></code></pre>
<p>And it&apos;s output is still:</p>
<pre><code class="language-python"><span class="hljs-string">&apos;Hello World!&apos;</span></code></pre>
<p>A more efficient example:</p>
<pre><code class="language-python"><span class="hljs-string">&apos;++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*!&gt;+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*!&gt;++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++**!&gt;+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*!&gt;++++++++++++++++++++++++++++++++*!&gt;+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*&lt;&lt;*&gt;&gt;!&gt;++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*&lt;&lt;&lt;&lt;*!&gt;&gt;&gt;&gt;&gt;++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*!&gt;+++++++++++++++++++++++++++++++++*&apos;</span></code></pre>
<p>Which still returns the classic:</p>
<pre><code class="language-python"><span class="hljs-string">&apos;Hello World!&apos;</span></code></pre>
<p>Other characters are ingnored and therefore can serve as comments.</p>
<p>After you&apos;re done, fell free to make translations and to discuss this kata.</p>

### Solution