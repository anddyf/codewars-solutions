### Problem:
<p><em>For the rest of this Kata, I would recommend considering &quot;fuck&quot; to be non-profane.</em></p>
<h1 id="esolang-interpreters-3---custom-paintfuck-interpreter">Esolang Interpreters #3 - Custom Paintfuck Interpreter</h1>
<h2 id="about-this-kata-series">About this Kata Series</h2>
<p>&quot;Esolang Interpreters&quot; is a Kata Series that originally began as three separate, independent esolang interpreter Kata authored by <a href="http://codewars.com/users/donaldsebleung" target="_blank">@donaldsebleung</a> which all shared a similar format and were all somewhat inter-related.  Under the influence of <a href="https://www.codewars.com/users/nickkwest" target="_blank">a fellow Codewarrior</a>, these three high-level inter-related Kata gradually evolved into what is known today as the &quot;Esolang Interpreters&quot; series.</p>
<p>This series is a high-level Kata Series designed to challenge the minds of bright and daring programmers by implementing interpreters for various <a href="http://esolangs.org" target="_blank">esoteric programming languages/Esolangs</a>, mainly <a href="http://esolangs.org/wiki/Brainfuck" target="_blank">Brainfuck</a> derivatives but not limited to them, given a certain specification for a certain Esolang.  Perhaps the only exception to this rule is the very first Kata in this Series which is intended as an introduction/taster to the world of esoteric programming languages and writing interpreters for them.</p>
<h2 id="the-language">The Language</h2>
<p>Paintfuck is a <a href="http://esolangs.org" target="_blank">borderline-esoteric programming language/Esolang</a> which is a derivative of <a href="http://esolangs.org/wiki/Smallfuck" title="itself a derivative of the famous [Brainfuck](http://esolangs.org/wiki/Brainfuck" target="_blank">Smallfuck</a>) that uses a two-dimensional data grid instead of a one-dimensional tape.</p>
<p>Valid commands in Paintfuck include:</p>
<ul>
<li><code>n</code> - Move data pointer north (up)</li>
<li><code>e</code> - Move data pointer east (right)</li>
<li><code>s</code> - Move data pointer south (down)</li>
<li><code>w</code> - Move data pointer west (left)</li>
<li><code>*</code> - Flip the bit at the current cell (same as in Smallfuck)</li>
<li><code>[</code> - Jump past matching <code>]</code> if bit under current pointer is <code>0</code> (same as in Smallfuck)</li>
<li><code>]</code> - Jump back to the matching <code>[</code> (if bit under current pointer is nonzero) (same as in Smallfuck)</li>
</ul>
<p>The specification states that any non-command character (i.e. any character other than those mentioned above) should simply be ignored.  The output of the interpreter is the two-dimensional data grid itself, best as animation as the interpreter is running, but at least a representation of the data grid itself after a certain number of iterations (explained later in task).</p>
<p>In current implementations, the 2D datagrid is finite in size with toroidal (wrapping) behaviour.  This is one of the few major differences of Paintfuck from Smallfuck as Smallfuck terminates (normally) whenever the pointer exceeds the bounds of the tape.</p>
<p>Similar to Smallfuck, Paintfuck is Turing-complete <strong>if and only if</strong> the 2D data grid/canvas were unlimited in size.  However, since the size of the data grid is defined to be finite, it acts like a finite state machine.</p>
<p>More info on this Esolang can be found <a href="http://esolangs.org/wiki/Paintfuck" target="_blank">here</a>.</p>
<h2 id="the-task">The Task</h2>
<p>Your task is to implement a custom Paintfuck interpreter <code>interpreter()</code>/<code>Interpret</code> which accepts the following arguments in the specified order:</p>
<ol>
<li><code>code</code> - <strong>Required</strong>.  The Paintfuck code to be executed, passed in as a string.  May contain comments (non-command characters), in which case your interpreter should simply ignore them.  If empty, simply return the initial state of the data grid.</li>
<li><code>iterations</code> - <strong>Required</strong>.  A non-negative integer specifying the number of iterations to be performed before the final state of the data grid is returned.  See notes for definition of 1 iteration.  If equal to zero, simply return the initial state of the data grid.</li>
<li><code>width</code> - <strong>Required</strong>.  The width of the data grid in terms of the number of data cells in each row, passed in as a positive integer.</li>
<li><code>height</code> - <strong>Required</strong>.  The height of the data grid in cells (i.e. number of rows) passed in as a positive integer.</li>
</ol>
<p>A few things to note:</p>
<ul>
<li>Your interpreter should treat all command characters as <strong>case-sensitive</strong> so <code>N</code>, <code>E</code>, <code>S</code> and <code>W</code> are <strong>not</strong> valid command characters</li>
<li>Your interpreter should initialize all cells within the data grid to a value of <code>0</code> regardless of the width and height of the grid</li>
<li>In this implementation, your pointer must always start at the <strong>top-left hand corner</strong> of the data grid (i.e. first row, first column).  This is important as some implementations have the data pointer starting at the middle of the grid.</li>
<li>One iteration is defined as one step in the program, i.e. the number of command characters evaluated.  For example, given a program <code>nessewnnnewwwsswse</code> and an iteration count of <code>5</code>, your interpreter should evaluate <code>nesse</code> before returning the final state of the data grid.  <strong>Non-command characters should not count towards the number of iterations.</strong></li>
<li>Regarding iterations, the act of skipping to the matching <code>]</code> when a <code>[</code> is encountered (or vice versa) is considered to be <strong>one</strong> iteration regardless of the number of command characters in between.  The next iteration then commences at the command <strong>right after</strong> the matching <code>]</code> (or <code>[</code>).</li>
<li>Your interpreter should terminate normally and return the final state of the 2D data grid whenever <strong>any</strong> of the mentioned conditions become true: (1) All commands have been considered left to right, or (2) Your interpreter has already performed the number of iterations specified in the second argument.</li>
<li>The return value of your interpreter should be a representation of the final state of the 2D data grid where each row is separated from the next by a CRLF (<code>\r\n</code>).  For example, if the final state of your datagrid is</li>
</ul>
<pre><code>[
  [1, 0, 0],
  [0, 1, 0],
  [0, 0, 1]
]</code></pre><p>... then your return string should be <code>&quot;100\r\n010\r\n001&quot;</code>.</p>
<p>Good luck :D</p>
<h2 id="kata-in-this-series">Kata in this Series</h2>
<ol>
<li><a href="https://www.codewars.com/kata/esolang-interpreters-number-1-introduction-to-esolangs-and-my-first-interpreter-ministringfuck" target="_blank">Esolang Interpreters #1 - Introduction to Esolangs and My First Interpreter (MiniStringFuck)</a></li>
<li><a href="http://codewars.com/kata/esolang-interpreters-number-2-custom-smallfuck-interpreter" target="_blank">Esolang Interpreters #2 - Custom Smallfuck Interpreter</a></li>
<li><strong>Esolang Interpreters #3 - Custom Paintfuck Interpreter</strong></li>
<li><a href="http://codewars.com/kata/esolang-interpreters-number-4-boolfuck-interpreter" target="_blank">Esolang Interpreters #4 - Boolfuck Interpreter</a></li>
</ol>

### Solution