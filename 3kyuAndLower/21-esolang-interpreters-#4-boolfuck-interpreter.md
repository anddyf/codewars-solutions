### Problem:
<p><em>For the rest of this Kata, I recommend considering &quot;fuck&quot; to be non-profane.</em></p>
<h1 id="esolang-interpreters-4---boolfuck-interpreter">Esolang Interpreters #4 - Boolfuck Interpreter</h1>
<h2 id="about-this-kata-series">About this Kata Series</h2>
<p>&quot;Esolang Interpreters&quot; is a Kata Series that originally began as three separate, independent esolang interpreter Kata authored by <a href="http://codewars.com/users/donaldsebleung" target="_blank">@donaldsebleung</a> which all shared a similar format and were all somewhat inter-related.  Under the influence of <a href="https://www.codewars.com/users/nickkwest" target="_blank">a fellow Codewarrior</a>, these three high-level inter-related Kata gradually evolved into what is known today as the &quot;Esolang Interpreters&quot; series.</p>
<p>This series is a high-level Kata Series designed to challenge the minds of bright and daring programmers by implementing interpreters for various <a href="http://esolangs.org" target="_blank">esoteric programming languages/Esolangs</a>, mainly <a href="http://esolangs.org/wiki/Brainfuck" target="_blank">Brainfuck</a> derivatives but not limited to them, given a certain specification for a certain Esolang.  Perhaps the only exception to this rule is the very first Kata in this Series which is intended as an introduction/taster to the world of esoteric programming languages and writing interpreters for them.</p>
<h2 id="the-language">The Language</h2>
<p>Boolfuck is an <a href="http://esolangs.org/wiki/Esoteric_programming_language" target="_blank">esoteric programming language (Esolang)</a> based on the famous <a href="http://esolangs.org/wiki/Brainfuck" target="_blank">Brainfuck</a> (also an Esolang) which was invented in 2004 or 2005 according to <a href="http://samuelhughes.com/boof/index.html" target="_blank">the official website</a>.  It is very similar to Brainfuck except for a few key differences:</p>
<ul>
<li>Boolfuck works with bits as opposed to bytes</li>
<li>The tape for Brainfuck contains exactly 30,000 cells with the pointer starting from the very left; Boolfuck contains an infinitely long tape with the pointer starting at the &quot;middle&quot; (since the tape can be extended indefinitely either direction)</li>
<li>Each cell in Boolfuck can only contain the values <code>0</code> or <code>1</code> (i.e. bits not bytes) as opposed to Brainfuck which has cells containing values ranging from <code>0</code> to <code>255</code> inclusive.</li>
<li>The output command in Boolfuck is <code>;</code> NOT <code>.</code></li>
<li>The <code>-</code> command does <strong>not</strong> exist in Boolfuck since either <code>+</code> or <code>-</code> would flip a bit anyway</li>
</ul>
<p>Anyway, here is a list of commands and their descriptions:</p>
<ul>
<li><code>+</code> - Flips the value of the bit under the pointer</li>
<li><code>,</code> - Reads a bit from the input stream, storing it under the pointer. The end-user types information using characters, though. Bytes are read in little-endian order&#x2014;the first bit read from the character <code>a</code>, for instance, is 1, followed by 0, 0, 0, 0, 1, 1, and finally 0. If the end-of-file has been reached, outputs a zero to the bit under the pointer.</li>
<li><code>;</code> - Outputs the bit under the pointer to the output stream. The bits get output in little-endian order, the same order in which they would be input. If the total number of bits output is not a multiple of eight at the end of the program, the last character of output gets padded with zeros on the more significant end.</li>
<li><code>&lt;</code> - Moves the pointer left by 1 bit</li>
<li><code>&gt;</code> - Moves the pointer right by 1 bit</li>
<li><code>[</code> - If the value under the pointer is <code>0</code> then skip to the corresponding <code>]</code></li>
<li><code>]</code> - Jumps back to the matching <code>[</code> character, if the value under the pointer is <code>1</code></li>
</ul>
<p>If you haven&apos;t written an interpreter for Brainfuck yet I recommend you to complete <a href="https://www.codewars.com/kata/my-smallest-code-interpreter-aka-brainf-star-star-k" target="_blank">this Kata</a> first.</p>
<h2 id="the-task">The Task</h2>
<p>Write a Boolfuck interpreter which accepts up to two arguments.  The first (required) argument is the Boolfuck code in the form of a string.  The second (optional) argument is the input passed in by the <strong>end-user</strong> (i.e. as actual characters not bits) which should default to <code>&quot;&quot;</code> if not provided.  Your interpreter should return the output as actual characters (not bits!) as a string.</p>
<pre><code class="language-javascript"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">boolfuck</span> (<span class="hljs-params">code, input = <span class="hljs-string">&quot;&quot;</span></span>)</span></code></pre>
<pre style="display: none;"><code class="language-c"><span class="hljs-function"><span class="hljs-keyword">char</span>* <span class="hljs-title">boolfuck</span> <span class="hljs-params">(<span class="hljs-keyword">char</span> *code, <span class="hljs-keyword">char</span> *in)</span></span></code></pre>
<pre style="display: none;"><code class="language-cpp"><span class="hljs-function"><span class="hljs-keyword">char</span>* <span class="hljs-title">boolfuck</span> <span class="hljs-params">(<span class="hljs-keyword">const</span> <span class="hljs-keyword">char</span> *code, <span class="hljs-keyword">const</span> <span class="hljs-keyword">char</span> *in)</span></span></code></pre>
<pre style="display: none;"><code class="language-java"><span class="hljs-function"><span class="hljs-keyword">public</span> <span class="hljs-keyword">static</span> String <span class="hljs-title">interpret</span> <span class="hljs-params">(String code, String input)</span></span></code></pre>
<pre style="display: none;"><code class="language-fsharp"><span class="hljs-keyword">let</span> interpret (code: string) (input: string) : string</code></pre>
<pre style="display: none;"><code class="language-python"><span class="hljs-function"><span class="hljs-keyword">def</span> <span class="hljs-title">boolfuck</span><span class="hljs-params">(code, input)</span></span></code></pre>
<pre style="display: none;"><code class="language-go"><span class="hljs-function"><span class="hljs-keyword">func</span> <span class="hljs-title">Boolfuck</span><span class="hljs-params">(code, input <span class="hljs-keyword">string</span>)</span> <span class="hljs-title">string</span></span></code></pre>
<pre style="display: none;"><code class="language-rust"><span class="hljs-function"><span class="hljs-keyword">fn</span> <span class="hljs-title">boolfuck</span></span>(code: &amp;<span class="hljs-built_in">str</span>, input: <span class="hljs-built_in">Vec</span>&lt;<span class="hljs-built_in">u8</span>&gt;) -&gt; <span class="hljs-built_in">Vec</span>&lt;<span class="hljs-built_in">u8</span>&gt;</code></pre>
<pre style="display: none;"><code class="language-haskell"><span class="hljs-title">boolfuck</span> :: <span class="hljs-type">String</span> -&gt; <span class="hljs-type">String</span> -&gt; <span class="hljs-type">String</span></code></pre>
<p>Preloaded for you is a function <code>brainfuckToBoolfuck()</code>/<code>brainfuck_to_boolfuck()</code>/<code>BrainfuckToBoolfuck()</code> which accepts 1 required argument (the Brainfuck code) and returns its Boolfuck equivalent should you find it useful.</p>
<p>Please note that your interpreter should simply ignore any non-command characters.  <strong>This will be tested in the test cases.</strong></p>
<p>If in doubt, feel free to refer to the official website (link at top).</p>
<p>Good luck :D</p>
<h2 id="kata-in-this-series">Kata in this Series</h2>
<ol>
<li><a href="https://www.codewars.com/kata/esolang-interpreters-number-1-introduction-to-esolangs-and-my-first-interpreter-ministringfuck" target="_blank">Esolang Interpreters #1 - Introduction to Esolangs and My First Interpreter (MiniStringFuck)</a></li>
<li><a href="http://codewars.com/kata/esolang-interpreters-number-2-custom-smallfuck-interpreter" target="_blank">Esolang Interpreters #2 - Custom Smallfuck Interpreter</a></li>
<li><a href="http://codewars.com/kata/esolang-interpreters-number-3-custom-paintf-star-star-k-interpreter" target="_blank">Esolang Interpreters #3 - Custom Paintfuck Interpreter</a></li>
<li><strong>Esolang Interpreters #4 - Boolfuck Interpreter</strong></li>
</ol>

### Solution