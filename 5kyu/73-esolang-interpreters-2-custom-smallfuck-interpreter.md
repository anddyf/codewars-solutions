### Problem:
<p><em>For the rest of this Kata, I would recommend considering &quot;fuck&quot; to be non-profane.</em></p>
<h1 id="esolang-interpreters-2---custom-smallfuck-interpreter">Esolang Interpreters #2 - Custom Smallfuck Interpreter</h1>
<h2 id="about-this-kata-series">About this Kata Series</h2>
<p>&quot;Esolang Interpreters&quot; is a Kata Series that originally began as three separate, independent esolang interpreter Kata authored by <a href="http://codewars.com/users/donaldsebleung" target="_blank">@donaldsebleung</a> which all shared a similar format and were all somewhat inter-related.  Under the influence of <a href="https://www.codewars.com/users/nickkwest" target="_blank">a fellow Codewarrior</a>, these three high-level inter-related Kata gradually evolved into what is known today as the &quot;Esolang Interpreters&quot; series.</p>
<p>This series is a high-level Kata Series designed to challenge the minds of bright and daring programmers by implementing interpreters for various <a href="http://esolangs.org" target="_blank">esoteric programming languages/Esolangs</a>, mainly <a href="http://esolangs.org/wiki/Brainfuck" target="_blank">Brainfuck</a> derivatives but not limited to them, given a certain specification for a certain Esolang.  Perhaps the only exception to this rule is the very first Kata in this Series which is intended as an introduction/taster to the world of esoteric programming languages and writing interpreters for them.</p>
<h2 id="the-language">The Language</h2>
<p>Smallfuck is an <a href="http://esolangs.org" target="_blank">esoteric programming language/Esolang</a> invented in 2002 which is a sized-down variant of the famous <a href="http://esolangs.org/wiki/Brainfuck" target="_blank">Brainfuck</a> Esolang.  Key differences include:</p>
<ul>
<li>Smallfuck operates only on bits as opposed to bytes</li>
<li>It has a limited data storage which varies from implementation to implementation depending on the size of the tape</li>
<li>It does not define input or output - the &quot;input&quot; is encoded in the initial state of the data storage (tape) and the &quot;output&quot; should be decoded in the final state of the data storage (tape)</li>
</ul>
<p>Here are a list of commands in Smallfuck:</p>
<ul>
<li><code>&gt;</code> - Move pointer to the right (by 1 cell)</li>
<li><code>&lt;</code> - Move pointer to the left (by 1 cell)</li>
<li><code>*</code> - Flip the bit at the current cell</li>
<li><code>[</code> - Jump past matching <code>]</code> if value at current cell is <code>0</code></li>
<li><code>]</code> - Jump back to matching <code>[</code> (if value at current cell is nonzero)</li>
</ul>
<p>As opposed to Brainfuck where a program terminates only when all of the commands in the program have been considered (left to right), Smallfuck terminates when any of the two conditions mentioned below become true:</p>
<ul>
<li>All commands have been considered from left to right</li>
<li>The pointer goes out-of-bounds (i.e. if it moves to the left of the first cell or to the right of the last cell of the tape)</li>
</ul>
<p>Smallfuck is considered to be Turing-complete <strong>if and only if</strong> it had a tape of infinite length; however, since the length of the tape is always defined as finite (as the interpreter cannot return a tape of infinite length), its computational class is of bounded-storage machines with bounded input.</p>
<p>More information on this Esolang can be found <a href="http://esolangs.org/wiki/Smallfuck" target="_blank">here</a>.</p>
<h2 id="the-task">The Task</h2>
<p>Implement a custom Smallfuck interpreter <code>interpreter()</code> (<code>interpreter</code> in Haskell and F#, <code>Interpreter</code> in C#, <code>custom_small_fuck:interpreter/2</code> in Erlang) which accepts the following arguments:</p>
<ol>
<li><code>code</code> - <strong>Required</strong>.  The Smallfuck program to be executed, passed in as a string.  May contain non-command characters.  Your interpreter should simply ignore any non-command characters.</li>
<li><code>tape</code> - <strong>Required</strong>.  The initial state of the data storage (tape), passed in <strong>as a string</strong>.  For example, if the string <code>&quot;00101100&quot;</code> is passed in then it should translate to something of this form within your interpreter: <code>[0, 0, 1, 0, 1, 1, 0, 0]</code>.  You may assume that all input strings for <code>tape</code> will be non-empty and will only contain <code>&quot;0&quot;</code>s and <code>&quot;1&quot;</code>s.</li>
</ol>
<p>Your interpreter should return the final state of the data storage (tape) <strong>as a string</strong> in the same format that it was passed in.  For example, if the tape in your interpreter ends up being <code>[1, 1, 1, 1, 1]</code> then return the string <code>&quot;11111&quot;</code>.</p>
<p><em>NOTE: The pointer of the interpreter always starts from the first (leftmost) cell of the tape, same as in Brainfuck.</em></p>
<p>Good luck :D</p>
<h2 id="kata-in-this-series">Kata in this Series</h2>
<ol>
<li><a href="https://www.codewars.com/kata/esolang-interpreters-number-1-introduction-to-esolangs-and-my-first-interpreter-ministringfuck" target="_blank">Esolang Interpreters #1 - Introduction to Esolangs and My First Interpreter (MiniStringFuck)</a></li>
<li><strong>Esolang Interpreters #2 - Custom Smallfuck Interpreter</strong></li>
<li><a href="http://codewars.com/kata/esolang-interpreters-number-3-custom-paintf-star-star-k-interpreter" target="_blank">Esolang Interpreters #3 - Custom Paintfuck Interpreter</a></li>
<li><a href="http://codewars.com/kata/esolang-interpreters-number-4-boolfuck-interpreter" target="_blank">Esolang Interpreters #4 - Boolfuck Interpreter</a></li>
</ol>

### Solution