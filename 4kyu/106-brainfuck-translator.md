### Problem:
<p><strong>Introduction</strong></p>
<p><a href="https://en.wikipedia.org/wiki/Brainfuck" target="_blank">Brainfuck</a> is one of the most well-known esoteric programming languages. But it can be hard to understand any code longer that 5 characters. In this kata you have to solve that problem.</p>
<p><strong>Description</strong></p>
<p>In this kata you have to write a function which will do 3 tasks:</p>
<ol>
<li>Optimize the given Brainfuck code.</li>
<li>Check it for mistakes.</li>
<li>Translate the given Brainfuck programming code into <a href="https://en.wikipedia.org/wiki/C_(programming_language)" target="_blank">C</a> programming code.</li>
</ol>

<p>More formally about each of the tasks:</p>
<ol>

<li>
Your function has to remove from the source code all useless command sequences such as: <code>&apos;+-&apos;, &apos;&lt;&gt;&apos;, &apos;[]&apos;</code>. Also it must erase all characters except <code>+-&lt;&gt;,.[]</code>.
<pre>Example:
<code>&quot;++--+.&quot; -&gt; &quot;+.&quot;
&quot;[][+++]&quot; -&gt; &quot;[+++]&quot;
&quot;&lt;&gt;&gt;&lt;&quot; -&gt; &quot;&quot;</code></pre>
</li>

<li>
If the source code contains unpaired braces, your function should return <code>&quot;Error!&quot;</code> string.
</li>

<li>
Your function must generate a string of the C programming code as follows:
<br>
<br>

<ol>
<li>
Sequences of the X commands <code>+</code> or <code>-</code> must be replaced by <code>\*p += X;\n</code> or <code>\*p -= X;\n</code>.
<pre>Example:
<code>&quot;++++++++++&quot; -&gt; &quot;\*p += 10;\n&quot;
&quot;------&quot; -&gt; &quot;\*p -= 6;\n&quot;
</code></pre>
</li>

<li>
Sequences of the Y commands <code>&gt;</code> or <code>&lt;</code> must be replaced by <code>p += Y;\n</code> or <code>p -= Y;\n</code>.
<pre>Example:
<code>&quot;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&quot; -&gt; &quot;p += 10;\n&quot;
&quot;&lt;&lt;&lt;&lt;&lt;&lt;&quot; -&gt; &quot;p -= 6;\n&quot;
</code></pre>
</li>

<li>
<code>.</code> command must be replaced by <code>putchar(\*p);\n</code>.
<pre>Example:
<code>&quot;..&quot; -&gt; &quot;putchar(\*p);\nputchar(\*p);\n&quot;
</code></pre>
</li>

<li>
<code>,</code> command must be replaced by <code>\*p = getchar();\n</code>.
<pre>Example:
<code>&quot;,&quot; -&gt; &quot;\*p = getchar();\n&quot;
</code></pre>
</li>

<li>
<code>[</code> command must be replaced by <code>if (\*p) do {\n</code>. <code>]</code> command must be replaced by <code>} while (\*p);\n</code>.
<pre>Example:
<code>&quot;[&gt;&gt;]&quot; -&gt;
if (\*p) do {\n
  p += 2;\n
} while (\*p);\n
</code></pre>
</li>

<li>
Each command in the code block must be shifted 2 spaces to the right accordingly to the previous code block.
<pre>Example:
<code>&quot;[&gt;&gt;[&lt;&lt;]]&quot; -&gt;
if (\*p) do {\n
  p += 2;\n
  if (\*p) do {\n
    p -= 2;\n
  } while (\*p);\n
} while (\*p);\n
</code></pre>
</li>

</ol>
</li>

</ol>

<p><strong>Examples</strong></p>
<pre><code>Input:
+++++[&gt;++++.&lt;-]
Output:
*p += 5;
if (*p) do {
  p += 1;
  *p += 4;
  putchar(*p);
  p -= 1;
  *p -= 1;
} while (*p);
</code></pre>
### Solution