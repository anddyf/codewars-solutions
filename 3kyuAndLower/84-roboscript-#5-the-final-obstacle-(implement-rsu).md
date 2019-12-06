### Problem:
<p><em>NOTE: It is highly recommended that you complete the first 4 Kata in this Series before attempting this final Kata; otherwise, the description would make little sense.</em></p>
<hr>
<hr>
<h1 id="roboscript-5---the-final-obstacle-implement-rsu">RoboScript #5 - The Final Obstacle (Implement RSU)</h1>
<h2 id="disclaimer">Disclaimer</h2>
<p>The story presented in this Kata Series is purely fictional; any resemblance to actual programming languages, products, organisations or people should be treated as purely coincidental.</p>
<h2 id="about-this-kata-series">About this Kata Series</h2>
<p>This Kata Series is based on a fictional story about a computer scientist and engineer who owns a firm that sells a toy robot called MyRobot which can interpret its own (esoteric) programming language called RoboScript.  Naturally, this Kata Series deals with the software side of things (I&apos;m afraid Codewars cannot test your ability to build a physical robot!).</p>
<h2 id="story">Story</h2>
<p>Since <strong>RS3</strong> was released into the market which introduced handy pattern definitions on top of command grouping and repetition, its popularity soared within the robotics community, insomuch that other budding robotics firms have pleaded your company to allow them to use the RoboScript programming language in their products.  In order to grant them their requests and protect your company at the same time, you decided to apply for a patent which would allow other companies to utilize RoboScript in their own products with certain restrictions and only with an annual fee paid to your company.  So far, so good - the patent application was successful and your firm gained an ample amount of revenue in the first year from this patent alone.  However, since RoboScript is still a rather small and domain-specific programming language, the restrictions listed on the patent were rather limited.  Competing firms soon found a loophole in the wording of the patent which allowed them to develop their own RoboScript-like programming language with minor modifications and improvements which allowed them to legally circumvent your patent.  Soon, these robotics firms start overtaking your company in terms of popularity, profitability and size.  In order to investigate the main cause of the downfall of your company, a secret survey was sent to thousands of former MyRobot (and hence &quot;official&quot; RoboScript) users.  It was revealed in this survey that the main reason for this downfall was due to the <strong>lack of readability</strong> of <strong>RS3</strong> code (and RoboScript code in general), especially as the program becomes very large and complex.  After all, it makes perfect sense - who would even bother to try to understand and maintain the following <strong>RS3</strong> code, let alone <em>much</em> larger and complex programs?</p>
<pre><code>p0FFLFFR((FFFR)2(FFFFFL)3)4qp1FRqp2FP1qp3FP2qp4FP3qP0P1P2P3P4</code></pre><p>In a final attempt to save your company from going bankrupt and disappearing from the world of robotics, you decide to address all of the major issues identified in the secret survey head-on by designing the fourth and <em>final</em> specification for the RoboScript programming language - <strong>RoboScript Ultimatum (RSU)</strong>.  The only thing left for you to do is to properly implement the specification by writing an RSU-compliant code executor - once that is achieved, your company will catapult back into 1st position in global robotics and perhaps even leave a mark in the history of technology ... </p>
<h2 id="task">Task</h2>
<h3 id="roboscript-ultimatum-rsu---the-official-specification">RoboScript Ultimatum (RSU) - The Official Specification</h3>
<p>RoboScript Ultimatum (RSU) is a superset of the RS3 specification (which itself is a superset of RS2, RS2 being a superset of RS1).  However, it introduces quite a few new (and handy) features.</p>
<h4 id="1-whitespace-and-indentation-support">1. Whitespace and Indentation Support</h4>
<p>In RSU, whitespace and indentation is supported to improve readability and can appear <em>anywhere</em> in the program <em>in any form</em> <strong>except within a token itself</strong> (explained in more detail later).  For example, the program below is valid:</p>
<pre><code>p0
  (
    F2 L
  )2 (
    F2 R
  )2
q

(
  P0
)2</code></pre><p>While the following program is <strong>not</strong> valid:</p>
<pre><code>p 0
  (
    F 2L
  ) 2 (
    F 2 R
  )         2
q

(
  P  0
)2</code></pre><p>Of course, the code <em>need not</em> be neatly indented - it should be valid <em>so long as</em> tokens such as <code>p0</code>, <code>F2</code>, <code>)2</code> do not contain any whitespace themselves.</p>
<h4 id="2-comment-support">2. Comment Support</h4>
<p>RSU should support single line comments <code>(optional code) // ...</code> and multiline comments <code>/* ... */</code> like in many other programming languages such as JavaScript.  All single line comments are terminated by <strong>either of</strong> a newline character <code>\n</code> and the <strong>end-of-file (EOF)</strong> (beware of this edge case ;) ) and multiline comments <em>cannot</em> be nested.  For example, this is a valid program with comments:</p>
<pre><code>/*
  RoboScript Ultimatum (RSU)
  A simple and comprehensive code example
*/

// Define a new pattern with identifier n = 0
p0
  // The commands below causes the MyRobot to move
  // in a short snake-like path upwards if executed
  (
    F2 L // Go forwards two steps and then turn left
  )2 (
    F2 R // Go forwards two steps and then turn right
  )2
q

// Execute the snake-like pattern twice to generate
// a longer snake-like pattern
(
  P0
)2</code></pre><p>Comments follow the same rules as whitespace and indentation - they can be placed <em>anywhere</em> within the program <strong>except within a token itself</strong>, e.g. <code>F/* ... */37</code> is <strong>invalid</strong>.  Both single-line and multiline comments may be empty, i.e. <code>/**/</code> and <code>//\n</code> are valid.</p>
<h4 id="3-pattern-scoping">3. Pattern Scoping</h4>
<p>This is much like function and/or block scoping in many other programming languages.  While attempts to nest a pattern definition in another pattern yielded undefined behavior in RS3, each pattern will have its own scope in RSU.  Furthermore, each pattern will be able to &quot;see&quot; pattern definitions both in its own scope and in any subsequent parent scopes.  For example:</p>
<pre><code>// The global scope can &quot;see&quot; P1 and P2
p1
  // P1 can see P2, P3 and P4
  p3
    // P3 can see P1, P2 and P4 though invoking
    // P1 will likely result in infinite recursion
    F L
  q
  p4
    // Similar rules apply to P4 as they do in P3
    F P3
  q

  F P4
q
p2
  // P2 can &quot;see&quot; P1 and therefore can invoke P1 if it wishes
  F3 R
q

(
  P1 P2
)2 // Execute both globally defined patterns twice</code></pre><p>Furthermore, an RSU program is still <strong>valid</strong> if more than one pattern with the <em>same</em> identifier is defined <strong>provided that they all appear in different scopes</strong>.  In case of an identifier conflict between two patterns of different scopes, the definition of the pattern in the <strong>innermost</strong> scope takes precedence.  For example:</p>
<pre><code>p1
  p1
    F R
  q

  F2 P1 // Refers to &quot;inner&quot; (locally defined) P1 so no infinite recursion results
q

(
  F2 P1 // Refers to &quot;outer&quot; (global) P1 since the
  // global scope can&apos;t &quot;see&quot; local P1
)4

/*
  Equivalent to executing the following raw commands:
  F F F F F R F F F F F R F F F F F R F F F F F R
*/</code></pre><p>However, pattern <em>redefinition</em> in the same scope is <strong>not</strong> allowed and should throw an error at some stage (more details later).</p>
<h4 id="finally-">Finally ...</h4>
<p>... no other character sequences are allowed in an RSU program, such as &quot;stray comments&quot; as in <code>this is a stray comment not escaped by a double slash or slash followed by asterisk F F F L F F F R F F F L F F F R and lowercase &quot;flr&quot; are not acceptable as commands</code> or &quot;stray numbers&quot; as in <code>F 32R    298984</code>.</p>
<p>Also, some edge cases in case you&apos;re wondering:</p>
<ol>
<li>Zero postfixes (e.g. <code>F0</code>, <code>L0</code> and of course <code>P0</code>) are allowed (<code>F0</code> and <code>L0</code> do nothing while <code>P0</code> invokes pattern with identifier <code>n = 0</code>).</li>
<li>Empty pattern definitions / bracketed repeat sequences <code>p0 /* (empty) */ q</code>, <code>()</code>, <code>()23</code> are allowed.</li>
<li>Leading zeroes (except for the number <code>0</code> itself) should <strong>not</strong> be allowed - these errors should be thrown <em>during the tokenizing process</em> (more details later) as a &quot;token&quot; containing a number with leading zeroes is an invalid token.</li>
<li>Pattern definitions can contain brackets within them (of course!) but <strong>bracketed sequences must NOT contain any pattern definitions</strong>.  Such errors should be detected in the second stage of RSU code processing.</li>
<li>Calls to infinitely recursive patterns and/or non-existent patterns within a bracketed sequence that is executed <code>0</code> times should <em>not</em> throw an error; they should simply be ignored.</li>
</ol>
<h3 id="rsu-code-executor---structure">RSU Code Executor - Structure</h3>
<p>In this Kata, your RSU code executor should be a class <code>RSUProgram</code> with a class constructor which accepts a string <code>source</code>, the RSU source code to be executed.  No error checking is required in this part.</p>
<p><em>NOTE: All methods described below must be properly implemented and will be tested extensively in the Submit tests - namely,</em> <code>getTokens</code>, <code>convertToRaw</code>, <code>executeRaw</code> and <code>execute</code> (<em>or the equivalent function/method names in your language,</em> <strong>according to your language&apos;s naming convention(s)</strong>).  <em>If in doubt, you may always refer to the Sample Test Cases to get an idea of what will be tested in the Sumbit tests.</em></p>
<h4 id="tokenizer">Tokenizer</h4>
<p>Your class should have an <em>instance method</em> <code>getTokens</code> which accepts no arguments and returns the tokens present in <code>source</code> (argument passed to class constructor) <strong>in order</strong> as an array.  The tokenizer should ignore all whitespace characters (except when they prevent a token from being identified, e.g. in <code>)  2</code>) and comments and should throw if it encounters one or more invalid tokens in the process.  The following tokens are the <em>only</em> valid tokens:</p>
<ul>
<li>Single commands <code>F</code>, <code>L</code> and <code>R</code></li>
<li>Commands with repeats <code>Fn</code>, <code>Ln</code> and <code>Rn</code> (<code>n</code> being a non-negative integer which <em>may</em> exceed 1 digit but may <em>not</em> contain any leading <code>0</code>s)</li>
<li>Opening round brackets <code>(</code></li>
<li>Closing round brackets, with or without a repeat prefix <code>)</code> <strong>OR</strong> <code>)n</code> (<code>n</code> a non-negative integer with the rules described above)</li>
<li>Pattern definition <code>pn</code> (<code>n</code> a non-negative integer ... )</li>
<li>End of pattern definition <code>q</code></li>
<li>Pattern invocation <code>Pn</code> (<code>n</code> a non-negative integer ... )</li>
</ul>
<p>During the tokenizing process, do <em>not</em> perform any form of analysis checking the order of the tokens or whether a particular pattern invoked actually exists, etc.  Such errors should be left to later stages.</p>
<h4 id="compiler">Compiler</h4>
<p>Your class should have an <em>instance method</em> <code>convertToRaw</code> which accepts 1 argument <code>tokens</code> (an array of tokens, ideally returned from the tokenizer in the previous step) and returns an array of <strong>raw commands</strong> from processing the tokens.  &quot;Raw commands&quot; are the most basic commands that can be understood by the robot natively, namely <code>F</code>, <code>L</code> and <code>R</code> (<strong>nothing else</strong>, <em>not even with prefixes</em> such as <code>F2</code> or <code>R5</code>).  For example, the following RS3-compliant program from the Story:</p>
<pre><code>p0FFLFFR((FFFR)2(FFFFFL)3)4qp1FRqp2FP1qp3FP2qp4FP3qP0P1P2P3P4</code></pre><p>... can be converted into the following &quot;raw commands&quot; <em>after its tokenized form is passed in to this instance method</em> (indented for better visualization):</p>
<pre><code>[
  &quot;F&quot;, &quot;F&quot;, &quot;L&quot;, &quot;F&quot;, &quot;F&quot;, &quot;R&quot;,
  &quot;F&quot;, &quot;F&quot;, &quot;F&quot;, &quot;R&quot;, &quot;F&quot;, &quot;F&quot;, &quot;F&quot;, &quot;R&quot;,
  &quot;F&quot;, &quot;F&quot;, &quot;F&quot;, &quot;F&quot;, &quot;F&quot;, &quot;L&quot;,
  &quot;F&quot;, &quot;F&quot;, &quot;F&quot;, &quot;F&quot;, &quot;F&quot;, &quot;L&quot;,
  &quot;F&quot;, &quot;F&quot;, &quot;F&quot;, &quot;F&quot;, &quot;F&quot;, &quot;L&quot;,
  &quot;F&quot;, &quot;F&quot;, &quot;F&quot;, &quot;R&quot;, &quot;F&quot;, &quot;F&quot;, &quot;F&quot;, &quot;R&quot;,
  &quot;F&quot;, &quot;F&quot;, &quot;F&quot;, &quot;F&quot;, &quot;F&quot;, &quot;L&quot;,
  &quot;F&quot;, &quot;F&quot;, &quot;F&quot;, &quot;F&quot;, &quot;F&quot;, &quot;L&quot;,
  &quot;F&quot;, &quot;F&quot;, &quot;F&quot;, &quot;F&quot;, &quot;F&quot;, &quot;L&quot;,
  &quot;F&quot;, &quot;F&quot;, &quot;F&quot;, &quot;R&quot;, &quot;F&quot;, &quot;F&quot;, &quot;F&quot;, &quot;R&quot;,
  &quot;F&quot;, &quot;F&quot;, &quot;F&quot;, &quot;F&quot;, &quot;F&quot;, &quot;L&quot;,
  &quot;F&quot;, &quot;F&quot;, &quot;F&quot;, &quot;F&quot;, &quot;F&quot;, &quot;L&quot;,
  &quot;F&quot;, &quot;F&quot;, &quot;F&quot;, &quot;F&quot;, &quot;F&quot;, &quot;L&quot;,
  &quot;F&quot;, &quot;F&quot;, &quot;F&quot;, &quot;R&quot;, &quot;F&quot;, &quot;F&quot;, &quot;F&quot;, &quot;R&quot;,
  &quot;F&quot;, &quot;F&quot;, &quot;F&quot;, &quot;F&quot;, &quot;F&quot;, &quot;L&quot;,
  &quot;F&quot;, &quot;F&quot;, &quot;F&quot;, &quot;F&quot;, &quot;F&quot;, &quot;L&quot;,
  &quot;F&quot;, &quot;F&quot;, &quot;F&quot;, &quot;F&quot;, &quot;F&quot;, &quot;L&quot;,
  &quot;F&quot;, &quot;R&quot;,
  &quot;F&quot;, &quot;F&quot;, &quot;R&quot;,
  &quot;F&quot;, &quot;F&quot;, &quot;F&quot;, &quot;R&quot;,
  &quot;F&quot;, &quot;F&quot;, &quot;F&quot;, &quot;F&quot;, &quot;R&quot;
]</code></pre><p>See the &quot;Sample Tests&quot; for more examples.</p>
<p>Remember from RS3 that placing a pattern invocation before its definition is valid, e.g. <code>P0P1P2P3P4p0FFLFFR((FFFR)2(FFFFFL)3)4qp1FRqp2FP1qp3FP2qp4FP3q</code> should produce the same result as the above program.  On the other hand, the following RSU programs are <em>invalid</em> and should throw an error at this stage:</p>
<ul>
<li>Unmatched bracketing and/or pattern definition sequences, e.g. <code>(p0q</code> or <code>p1(q)34</code> (an obvious syntax error)</li>
<li><strong>Nesting pattern definitions within bracketed sequences</strong>, e.g. <code>(p0/* ... */q)</code>.  This should be treated as a <em>syntax error</em> and as such, it should not appear <em>anywhere</em> within the program, even if it is nested within multiple pattern definitions and never invoked.</li>
<li>Attempting to invoke a non-existent pattern or one that invokes a non-existing pattern definition in its pattern body, etc., <em>in the global scope</em></li>
<li>Attempting to invoke an infinitely recursive pattern <em>of any form</em> (including non-recursive patterns which call on infinitely recursive patterns in their pattern body, etc.) <em>in the global scope</em>.  Extreme cases (e.g. <code>500</code> levels of non-infinite recursion) will <em>not</em> be tested in the test cases so a sensible recursion limit will do.</li>
</ul>
<p>As for the input token array <code>tokens</code>, you may assume that it will always be valid <strong>provided that your tokenizer is working properly ;)</strong></p>
<h4 id="machine-instruction-executor">Machine Instruction Executor</h4>
<p>Now that you&apos;ve implemented the most challenging part of your <code>RSUProgram</code> class, it is time to wind down a little and implement something more straightforward :)  Your class should have an <em>instance method</em> <code>executeRaw</code> which receives an array of raw commands (consisting of only <code>F</code>, <code>L</code> and/or <code>R</code>) returned from your compiler and returns a string representation of the path that the MyRobot walks on the floor.  This string representation is identical in format as the ones required in Kata #2 through #4 of this Series.  For example, the raw commands (comparable to machine instructions/code in computers) obtained from this program:</p>
<pre><code>/*
  RoboScript Ultimatum (RSU)
  A simple and comprehensive code example
*/

// Define a new pattern with identifier n = 0
p0
  // The commands below causes the MyRobot to move
  // in a short snake-like path upwards if executed
  (
    F2 L // Go forwards two steps and then turn left
  )2 (
    F2 R // Go forwards two steps and then turn right
  )2
q

// Execute the snake-like pattern twice to generate
// a longer snake-like pattern
(
  P0
)2</code></pre><p>... should evaluate to the string <code>&quot;*  \r\n*  \r\n***\r\n  *\r\n***\r\n*  \r\n***\r\n  *\r\n***&quot;</code>.</p>
<p>Once again, you may assume that the array of raw commands passed in will always be valid <strong>provided that your tokenizer and compiler are both working properly</strong>.</p>
<p><em>Quick Tip: If you have completed Kata #2 of this Series (Implement the RS1 Specification), you may pass this section by simply copying and pasting your solution to that Kata here and making minor modifications.</em></p>
<h4 id="one-step-execution">One-Step Execution</h4>
<p>Hooray - you have successfully implemented an RSU-compliant code executor!  In order to tidy things up a little, define an <em>instance method</em> <code>execute</code> which accepts no arguments and combines the three previous instance methods in a way such that when this method is invoked (without invoking any other methods before it), it tokenizes, compiles and executes the <code>source</code> (from the constructor) in one go and returns the string representation of the MyRobot&apos;s path.  For example:</p>
<pre><code class="language-javascript"><span class="hljs-keyword">new</span> RSUProgram(<span class="hljs-string">`/*
  RoboScript Ultimatum (RSU)
  A simple and comprehensive code example
*/

// Define a new pattern with identifier n = 0
p0
  // The commands below causes the MyRobot to move
  // in a short snake-like path upwards if executed
  (
    F2 L // Go forwards two steps and then turn left
  )2 (
    F2 R // Go forwards two steps and then turn right
  )2
q

// Execute the snake-like pattern twice to generate
// a longer snake-like pattern
(
  P0
)2`</span>).execute(); <span class="hljs-comment">// =&gt; &quot;*  \r\n*  \r\n***\r\n  *\r\n***\r\n*  \r\n***\r\n  *\r\n***&quot;</span></code></pre>
<pre style="display: none;"><code class="language-java">List&lt;String&gt; lst = Arrays.asList(
<span class="hljs-string">&quot;/*&quot;</span>,
<span class="hljs-string">&quot;  RoboScript Ultimatum (RSU)&quot;</span>,
<span class="hljs-string">&quot;  A simple and comprehensive code example&quot;</span>,
<span class="hljs-string">&quot;*/&quot;</span>,
<span class="hljs-string">&quot;// Define a new pattern with identifier n = 0&quot;</span>,
<span class="hljs-string">&quot;p0&quot;</span>,
<span class="hljs-string">&quot;  // The commands below causes the MyRobot to move&quot;</span>,
<span class="hljs-string">&quot;  // in a short snake-like path upwards if executed&quot;</span>,
<span class="hljs-string">&quot;  (&quot;</span>,
<span class="hljs-string">&quot;    F2 L // Go forwards two steps and then turn left&quot;</span>,
<span class="hljs-string">&quot;  )2 (&quot;</span>,
<span class="hljs-string">&quot;    F2 R // Go forwards two steps and then turn right&quot;</span>,
<span class="hljs-string">&quot;  )2&quot;</span>,
<span class="hljs-string">&quot;q&quot;</span>,
<span class="hljs-string">&quot;// Execute the snake-like pattern twice to generate&quot;</span>,
<span class="hljs-string">&quot;// a longer snake-like pattern&quot;</span>,
<span class="hljs-string">&quot;(&quot;</span>,
<span class="hljs-string">&quot;  P0&quot;</span>,
<span class="hljs-string">&quot;)2&quot;</span>);

<span class="hljs-keyword">new</span> RSUProgram(String.join(<span class="hljs-string">&quot;\n&quot;</span>,lst)).execute(); <span class="hljs-comment">// =&gt; &quot;*  \r\n*  \r\n***\r\n  *\r\n***\r\n*  \r\n***\r\n  *\r\n***&quot;</span></code></pre>
<pre style="display: none;"><code class="language-python">RSUProgram(&quot;&quot;&quot;/*
  RoboScript Ultimatum (RSU)
  A simple and comprehensive code example
*/

// Define a new pattern with identifier n = 0
p0
  // The commands below causes the MyRobot to move
  // in a short snake-like path upwards if executed
  (
    F2 L // Go forwards two steps and then turn left
  )2 (
    F2 R // Go forwards two steps and then turn right
  )2
q

// Execute the snake-like pattern twice to generate
// a longer snake-like pattern
(
  P0
)2&quot;&quot;&quot;).execute(); // =&gt; &quot;*  \r\n*  \r\n***\r\n  *\r\n***\r\n*  \r\n***\r\n  *\r\n***&quot;</code></pre>
<h2 id="kata-in-this-series">Kata in this Series</h2>
<ol>
<li><a href="https://www.codewars.com/kata/roboscript-number-1-implement-syntax-highlighting" target="_blank">RoboScript #1 - Implement Syntax Highlighting</a></li>
<li><a href="https://www.codewars.com/kata/roboscript-number-2-implement-the-rs1-specification" target="_blank">RoboScript #2 - Implement the RS1 Specification</a></li>
<li><a href="https://www.codewars.com/kata/58738d518ec3b4bf95000192" target="_blank">RoboScript #3 - Implement the RS2 Specification</a></li>
<li><a href="https://www.codewars.com/kata/594b898169c1d644f900002e" target="_blank">RoboScript #4 - RS3 Patterns to the Rescue</a></li>
<li><strong>RoboScript #5 - The Final Obstacle (Implement RSU)</strong></li>
</ol>

### Solution