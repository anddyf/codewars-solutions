### Problem:
<h1 id="whitespace">Whitespace</h1>
<p><a href="http://compsoc.dur.ac.uk/whitespace/tutorial.php" target="_blank">Whitespace</a> is an esoteric programming language that uses only three characters:</p>
<ul>
<li><code>[space]</code> or  <code>&quot; &quot;</code> (ASCII 32)</li>
<li><code>[tab]</code> or <code>&quot;\t&quot;</code> (ASCII 9)</li>
<li><code>[line-feed]</code> or <code>&quot;\n&quot;</code> (ASCII 10)</li>
</ul>
<p>All other characters may be used for comments. The interpreter ignores them.</p>
<p>Whitespace is an imperative, stack-based programming language, including features such as subroutines.</p>
<p>Each command in whitespace begins with an <em>Instruction Modification Parameter</em> (IMP).</p>
<h2 id="imps">IMPs</h2>
<hr>
<ul>
<li><code>[space]</code>: Stack Manipulation</li>
<li><code>[tab][space]</code>: Arithmetic</li>
<li><code>[tab][tab]</code>: Heap Access</li>
<li><code>[tab][line-feed]</code>: Input/Output</li>
<li><code>[line-feed]</code>: Flow Control</li>
</ul>
<p>There are two types of data a command may be passed: numbers and labels.</p>
<h3 id="parsing-numbers">Parsing Numbers</h3>
<ul>
<li><p>Numbers begin with a <code>[sign]</code> symbol. The sign symbol is either <code>[tab]</code> -&gt; <strong>negative</strong>, or <code>[space]</code> -&gt; <strong>positive</strong>.</p>
</li>
<li><p>Numbers end with a <code>[terminal]</code> symbol: <code>[line-feed]</code>.</p>
</li>
<li><p>Between the sign symbol and the terminal symbol are binary digits <code>[space]</code> -&gt; <strong>binary-0</strong>, or <code>[tab]</code> -&gt; <strong>binary-1</strong>.</p>
</li>
<li><p>A number expression <code>[sign][terminal]</code> will be treated as <strong>zero</strong>.</p>
</li>
<li><p>The expression of just <code>[terminal]</code> should <strong>throw an error</strong>. <em>(The Haskell implementation is inconsistent about this.)</em></p>
</li>
</ul>
<h3 id="parsing-labels">Parsing Labels</h3>
<ul>
<li><p>Labels begin with any number of <code>[tab]</code> and <code>[space]</code> characters.</p>
</li>
<li><p>Labels end with a <strong>terminal</strong> symbol: <code>[line-feed]</code>.</p>
</li>
<li><p>Unlike with numbers, the expression of just <code>[terminal]</code> is <strong>valid</strong>.</p>
</li>
<li><p>Labels <strong>must</strong> be unique.</p>
</li>
<li><p>A label <strong>may</strong> be declared either before or after a command that refers to it.</p>
</li>
</ul>
<h2 id="inputoutput">Input/Output</h2>
<p>As stated earlier, there commands may read data from input or write to output.</p>
<h3 id="parsing-input">Parsing Input</h3>
<p>Whitespace will accept input either characters or integers. Due to the lack of an input stream mechanism, the input will be passed as a string to the interpreter function.</p>
<ul>
<li><p>Reading a character involves simply taking a character from the input stream.</p>
</li>
<li><p>Reading an integer involves parsing a decimal or hexadecimal number from the current position of the input stream, up to and terminated by a line-feed character.</p>
</li>
<li><p>The original implementation being in Haskell has stricter requirements for parsing an integer. </p>
</li>
<li><p>The Javascript and Coffeescript implementations will accept any number that can be parsed by the <strong>parseInt</strong> function as a single parameter.</p>
</li>
<li><p>The Python implementations will accept any number that can be parsed by the <strong>int</strong> function as a single parameter.</p>
</li>
<li><p>The Java implementations <strong>will</strong> use an <code>InputStream</code> instance for input. For <code>InputStream</code> use <code>readLine</code> if the program requests a number and <code>read</code> if the program expects a character.</p>
</li>
<li><p>An error should be thrown if the input ends before parsing is complete. <em>(This is a non-issue for the Haskell implementation, as it expects user input)</em></p>
</li>
</ul>
<h3 id="writing-output">Writing Output</h3>
<ul>
<li><p>For a number, append the output string with the number&apos;s string value.</p>
</li>
<li><p>For a character, simply append the output string with the character.</p>
</li>
<li><p>The Java implementations will support an optional <code>OutputStream</code> for output. If an <code>OutputStream</code> is provided, it should be flushed before and after code execution and filled as code is executed. The output string should be returned in any case.</p>
</li>
</ul>
<h2 id="commands">Commands</h2>
<p>Notation: <strong><em>n</em></strong> specifies the parameter, <code>[number]</code> or <code>[label]</code>.</p>
<p><strong>Errors should be thrown</strong> for invalid numbers, labels, and heap addresses, or if there are not enough items on the stack to complete an operation (unless otherwise specified). In addition, an error should be thrown for unclean termination.</p>
<h3 id="imp-space---stack-manipulation">IMP [space] - Stack Manipulation</h3>
<ul>
<li><code>[space]</code> <code>(number)</code>: Push <em>n</em> onto the stack.</li>
<li><code>[tab][space]</code> <code>(number)</code>: Duplicate the <em>n</em>th value from the top of the stack.</li>
<li><code>[tab][line-feed]</code> <code>(number)</code>: Discard the top <em>n</em> values below the top of the stack from the stack. (<em>For <strong>n</strong>&lt;<strong>0</strong> or <strong>n</strong>&gt;=<strong>stack.length</strong>, remove everything but the top value.</em>)</li>
<li><code>[line-feed][space]</code>: Duplicate the top value on the stack.</li>
<li><code>[line-feed][tab]</code>: Swap the top two value on the stack.</li>
<li><code>[line-feed][line-feed]</code>: Discard the top value on the stack.</li>
</ul>
<h3 id="imp-tabspace---arithmetic">IMP [tab][space] - Arithmetic</h3>
<ul>
<li><code>[space][space]</code>: Pop <code>a</code> and <code>b</code>, then push <code>b+a</code>.</li>
<li><code>[space][tab]</code>: Pop <code>a</code> and <code>b</code>, then push <code>b-a</code>.</li>
<li><code>[space][line-feed]</code>: Pop <code>a</code> and <code>b</code>, then push <code>b*a</code>.</li>
<li><code>[tab][space]</code>: Pop <code>a</code> and <code>b</code>, then push <code>b/a</code>*. If <code>a</code> is zero, throw an error. <ul>
<li>*<strong>Note that the result is defined as the floor of the quotient.</strong></li>
</ul>
</li>
<li><code>[tab][tab]</code>: Pop <code>a</code> and <code>b</code>, then push <code>b%a</code>*. If <code>a</code> is zero, throw an error.<ul>
<li>*<strong>Note that the result is defined as the remainder after division and sign (+/-) of the divisor (a).</strong></li>
</ul>
</li>
</ul>
<h3 id="imp-tabtab---heap-access">IMP [tab][tab] - Heap Access</h3>
<ul>
<li><code>[space]</code>: Pop <code>a</code> and <code>b</code>, then store <code>a</code> at heap address <code>b</code>.</li>
<li><code>[tab]</code>: Pop <code>a</code> and then push the value at heap address <code>a</code> onto the stack.</li>
</ul>
<h3 id="imp-tabline-feed---inputoutput">IMP [tab][line-feed] - Input/Output</h3>
<ul>
<li><code>[space][space]</code>: Pop a value off the stack and output it as a <strong>character</strong>.</li>
<li><code>[space][tab]</code>: Pop a value off the stack and output it as a <strong>number</strong>.</li>
<li><code>[tab][space]</code>: Read a <strong>character</strong> from input, <code>a</code>, Pop a value off the stack, <code>b</code>, then store the ASCII value of <code>a</code> at heap address <code>b</code>.</li>
<li><code>[tab][tab]</code>: Read a <strong>number</strong> from input, <code>a</code>, Pop a value off the stack, <code>b</code>, then store <code>a</code> at heap address <code>b</code>.</li>
</ul>
<h3 id="imp-line-feed---flow-control">IMP [line-feed] - Flow Control</h3>
<ul>
<li><code>[space][space]</code> <code>(label)</code>: Mark a location in the program with label <em>n</em>.</li>
<li><code>[space][tab]</code> <code>(label)</code>: Call a subroutine with the location specified by label <em>n</em>.</li>
<li><code>[space][line-feed]</code> <code>(label)</code>: Jump unconditionally to the position specified by label <em>n</em>.</li>
<li><code>[tab][space]</code> <code>(label)</code>: Pop a value off the stack and jump to the label specified by <em>n</em> <strong>if</strong> the value is zero.</li>
<li><code>[tab][tab]</code> <code>(label)</code>: Pop a value off the stack and jump to the label specified by <em>n</em> <strong>if</strong> the value is less than zero.</li>
<li><code>[tab][line-feed]</code>: Exit a subroutine and return control to the location from which the subroutine was called.</li>
<li><code>[line-feed][line-feed]</code>: Exit the program.</li>
</ul>
<hr>
<h2 id="notes">Notes</h2>
<h3 id="division-and-modulo">Division and modulo</h3>
<p>Whitespace expects floored division and modulo</p>
<ul>
<li>In Javascript and Coffeescript, the modulus operator is implemented differently than it was in the original Whitespace interpreter. Whitespace was influenced by having been originally implemented in Haskell. Javascript and Coffeescript also lack integer division operations. You need to pay a little extra attention in regard to the implementation of integer division and the modulus operator (See: <a href="https://en.wikipedia.org/wiki/Modulo_operation#Remainder_calculation_for_the_modulo_operation" target="_blank">floored division in the Wikipedia article &quot;Modulo operation&quot;</a></li>
<li>Java defines methods for floor division and modulo in <code>Math</code> class. The methods differ from the traditional <code>/</code> and <code>%</code> operators.</li>
<li>There is no difference between Whitespace and Python in regard to the standard implementation of integer division and modulo operations.</li>
</ul>

### Solution