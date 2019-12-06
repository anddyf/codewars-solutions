### Problem:
<h1 id="task">Task</h1>
<p>Make a custom esolang interpreter for the language <a href="https://esolangs.org/wiki/InfiniTick" target="_blank">InfiniTick</a>. InfiniTick is a descendant of <a href="https://esolangs.org/wiki/tick" target="_blank">Tick</a> but also very different. Unlike Tick, InfiniTick has 8 commands instead of 4. It also runs infinitely, stopping the program only when an error occurs. You may choose to do the <a href="https://www.codewars.com/kata/esolang-tick" target="_blank">Tick</a> kata first.</p>
<h1 id="syntaxinfo">Syntax/Info</h1>
<p>InfiniTick runs in an infinite loop. This makes it both harder and easier to program in. It has an infinite memory of bytes and an infinite output amount. The program only stops when an error is reached. The program is also supposed to ignore non-commands.</p>
<h1 id="commands">Commands</h1>
<p><code>&gt;</code>: Move data selector right.</p>
<p><code>&lt;</code>: Move data selector left.</p>
<p><code>+</code>: Increment amount of memory cell. Truncate overflow: 255+1=0.</p>
<p><code>-</code>: Decrement amount of memory cell. Truncate overflow: 0-1=255.</p>
<p><code>*</code>: Add ascii value of memory cell to the output tape.</p>
<p><code>&amp;</code>: Raise an error, ie stop the program.</p>
<p><code>/</code>: Skip next command if cell value is zero.</p>
<p><code>\</code>: Skip next command if cell value is nonzero.</p>
<h1 id="examples">Examples</h1>
<p><strong>Hello world!</strong></p>
<p>The following is a valid hello world program in InfiniTick.</p>
<pre><code>&apos;++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*&gt;+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*&gt;++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++**&gt;+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*&gt;++++++++++++++++++++++++++++++++*&gt;+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*&lt;&lt;*&gt;&gt;&gt;++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*&lt;&lt;&lt;&lt;*&gt;&gt;&gt;&gt;&gt;++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*&gt;+++++++++++++++++++++++++++++++++*&amp;&apos;</code></pre><h1 id="notes">Notes</h1>
<ul>
<li>Please be wordy and post your likes/dislikes in the discourse area.</li>
<li>If this kata is a duplicate or uses incorrect style, this is not an issue, this is a suggestion.</li>
<li>Please don&apos;t edit this kata just to change the estimated rank. Thank you!</li>
</ul>

### Solution