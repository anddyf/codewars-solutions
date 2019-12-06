### Problem:
<h2 id="the-stack-arithmetic-machine">The Stack Arithmetic Machine</h2>
<p>This time we&apos;re going to be writing a stack arithmetic machine, and we&apos;re going to call it Sam. Essentially, Sam is a very small virtual machine, with a simple intruction set, four general registers, and a stack. We&apos;ve already given a CPU class, which gives you read and write access to registers and the stack, through <code>readReg()</code> and <code>writeReg()</code>, and <code>popStack()</code> and <code>writeStack()</code> respectively. All instructions on Sam are 32-bit (Java int), and either interact with the stack, or one of the 4 registers; <code>a</code>, <code>b</code>, <code>c</code>, or <code>d</code>.</p>
<hr>
The CPU API
-----------

<p>The CPU instructions available through the CPU class, with a bit more detail:</p>
<pre><code class="language-java"><span class="hljs-function"><span class="hljs-keyword">int</span> <span class="hljs-title">readReg</span><span class="hljs-params">(String name)</span>: Returns the value of the named register.
<span class="hljs-keyword">void</span> <span class="hljs-title">writeReg</span><span class="hljs-params">(String name, <span class="hljs-keyword">int</span> value)</span>: Stores the value into the given register.

<span class="hljs-keyword">int</span> <span class="hljs-title">popStack</span><span class="hljs-params">()</span>: Pops the top element of the stack, returning the value.
<span class="hljs-keyword">void</span> <span class="hljs-title">writeStack</span><span class="hljs-params">(<span class="hljs-keyword">int</span> value)</span>: Pushes an element onto the stack.</span></code></pre>
<pre style="display: none;"><code class="language-python">read_reg(self, name): Returns the value of the named register.
write_reg(self, name, value): Stores the value into the given register.

pop_stack(self): Pops the top element of the stack, returning the value.
write_stack(self, value): Pushes an element onto the stack.</code></pre>
<pre style="display: none;"><code class="language-csharp"><span class="hljs-function"><span class="hljs-keyword">public</span> <span class="hljs-keyword">int</span> <span class="hljs-title">ReadReg</span>(<span class="hljs-params"><span class="hljs-keyword">string</span> name</span>): Returns the <span class="hljs-keyword">value</span> of the named register.
<span class="hljs-keyword">public</span> <span class="hljs-keyword">void</span> <span class="hljs-title">WriteReg</span>(<span class="hljs-params"><span class="hljs-keyword">string</span> name, <span class="hljs-keyword">int</span> <span class="hljs-keyword">value</span></span>): Stores the <span class="hljs-keyword">value</span> <span class="hljs-keyword">into</span> the given register.

<span class="hljs-keyword">public</span> <span class="hljs-keyword">int</span> <span class="hljs-title">PopStack</span>(<span class="hljs-params"></span>): Pops the top element of the stack, returning the <span class="hljs-keyword">value</span>.
<span class="hljs-keyword">public</span> <span class="hljs-keyword">void</span> <span class="hljs-title">WriteStack</span>(<span class="hljs-params"><span class="hljs-keyword">int</span> <span class="hljs-keyword">value</span></span>): Pushes an element onto the stack.
<span class="hljs-keyword">public</span> <span class="hljs-keyword">void</span> <span class="hljs-title">PrintStack</span>(<span class="hljs-params"></span>): Prints the contents of the stack to System.Console.</span></code></pre>
<p>Note that the registers have a default value of <code>0</code> and  that the sStack is printable (if needed).</p>
<hr>

<h2 id="the-instruction-set">The Instruction Set</h2>
<p>Instructions for same are done in assembly style, and are passed one by one into the <code>Exec|exec|execute</code> function (depending on your language). Each instruction begins with the name of the operation, and is optionally followed by either one or two operands. The operands are marked in the table below by either <code>[reg]</code>, which accepts a register name, or <code>[reg|int]</code> which accepts either a register, or an immediate integer value.</p>
<h3 id="stack-operations">Stack Operations</h3>
<pre><code>push [reg|int]: Pushes a register [reg] or an immediate value [int] to the stack.

pop: Pops a value of the stack, discarding the value.

pop [reg]: Pops a value of the stack, into the given register [reg].

pushr: Pushes the general registers onto the stack, in order. (a, b, c, d)

pushrr: Pushes the general registers onto the stack, in reverse order. (d, c, b, a)

popr: Pops values off the stack, and loads them into the general registers, in order so that the two executions `pushr()`  and `popr()` would leave the registers unchanged.

poprr: Pops values off the stack, and loads them into the general registers, in order so that the two executions `pushr()`  and `poprr()` would invert the values of the registers from left to right.</code></pre><h3 id="misc-operations">Misc Operations</h3>
<pre><code>mov [reg|int], [reg2]: Stores the value from [reg|int] into the register [reg2].</code></pre><h3 id="arithmetic-operations">Arithmetic Operations</h3>
<pre><code>add [reg|int]: Pops [reg|int] arguments off the stack, storing the sum in register a.

sub [reg|int]: Pops [reg|int] arguments off the stack, storing the difference in register a.

mul [reg|int]: Pops [reg|int] arguments off the stack, storing the product in register a.

div [reg|int]: Pops [reg|int] arguments off the stack, storing the quotient in register a.

and [reg|int]: Pops [reg|int] arguments off the stack, performing a bit-and operation, and storing the result in register a.

or [reg|int] : Pops [reg|int] arguments off the stack, performing a bit-or operation, and storing the result in register a.

xor [reg|int]: Pops [reg|int] arguments off the stack, performing a bit-xor operation, and storing the result in register a.</code></pre><p>All arithmetic operations have 4 variants; they may be suffixed with the character <code>&apos;a&apos;</code> (<code>adda</code>, <code>xora</code>), and they may take an additional register parameter, which is the destination register. Thus, using add as an example:</p>
<pre><code>add 5: Adds the top 5 values of the stack, storing the result in register a.

add 5, b: Adds the top 5 values of the stack, storing the result in register b instead.

adda 5: Pushes the value of register A onto the stack, then adds the top 5 values of the stack, and stores the result in register a.

adda 5, b: Pushes the value of register A onto the stack, adds the top 5 values of the stack, and stores the result in register b.</code></pre><p>All arithmetic instructions may also take a register as their first argument, to perform a variable number of operation, as follows:</p>
<pre><code>mov 3, a: Stores the number 3 in register a.
add a: Adds the top a values of the stack (in this case 3), storing the result in register a.</code></pre>
### Solution