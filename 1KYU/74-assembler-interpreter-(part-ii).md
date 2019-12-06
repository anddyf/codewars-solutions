### Problem:
<p>This is the second part of this kata series. First part is <a href="https://www.codewars.com/kata/simple-assembler-interpreter/" target="_blank">here</a>.</p>
<p>We want to create an interpreter of assembler which will support the following instructions:</p>
<ul>
<li><code>mov x, y</code> - copy y (either an integer or the value of a register) into register x.</li>
<li><code>inc x</code> - increase the content of register x by one.</li>
<li><code>dec x</code> - decrease the content of register x by one.</li>
<li><code>add x, y</code> - add the content of the register x with y (either an integer or the value of a register) and stores the result in x (i.e. register[x] += y).</li>
<li><code>sub x, y</code> - subtract y (either an integer or the value of a register) from the register x and stores the result in x (i.e. register[x] -= y).</li>
<li><code>mul x, y</code> - same with multiply (i.e. register[x] *= y).</li>
<li><code>div x, y</code> - same with integer division (i.e. register[x] /= y).</li>
<li><code>label:</code> - define a label position (<code>label = identifier + &quot;:&quot;</code>, an identifier being a string that does not match any other command). Jump commands and <code>call</code> are aimed to these labels positions in the program.</li>
<li><code>jmp lbl</code> - jumps to the label <code>lbl</code>.</li>
<li><code>cmp x, y</code> - compares x (either an integer or the value of a register) and y (either an integer or the value of a register). The result is used in the conditional jumps (<code>jne</code>, <code>je</code>, <code>jge</code>, <code>jg</code>, <code>jle</code> and <code>jl</code>)</li>
<li><code>jne lbl</code> - jump to the label <code>lbl</code> if the values of the previous <code>cmp</code> command were not equal.</li>
<li><code>je lbl</code> - jump to the label <code>lbl</code> if the values of the previous <code>cmp</code> command were equal.</li>
<li><code>jge lbl</code> - jump to the label <code>lbl</code> if x was greater or equal than y in the previous <code>cmp</code> command.</li>
<li><code>jg lbl</code> - jump to the label <code>lbl</code> if x was greater than y in the previous <code>cmp</code> command.</li>
<li><code>jle lbl</code> - jump to the label <code>lbl</code> if x was less or equal than y in the previous <code>cmp</code> command.</li>
<li><code>jl lbl</code> - jump to the label <code>lbl</code> if x was less than y in the previous <code>cmp</code> command.</li>
<li><code>call lbl</code> - call to the subroutine identified by <code>lbl</code>. When a <code>ret</code> is found in a subroutine, the instruction pointer should return to the instruction next to this <code>call</code> command.</li>
<li><code>ret</code> - when a <code>ret</code> is found in a subroutine, the instruction pointer should return to the instruction that called the current function.</li>
<li><code>msg &apos;Register: &apos;, x</code> - this instruction stores the output of the program. It may contain text strings (delimited by single quotes) and registers. The number of arguments isn&apos;t limited and will vary, depending on the program.</li>
<li><code>end</code> - this instruction indicates that the program ends correctly, so the stored output is returned (if the program terminates without this instruction it should return the default output: see below).</li>
<li><code>; comment</code> - comments should not be taken in consideration during the execution of the program.</li>
</ul>
<p><br> </p>
<h2 id="output-format">Output format:</h2>
<p>The normal output format is a string (returned with the <code>end</code> command).</p>
<p>If the program does finish itself without using an <code>end</code> instruction, the default return value is:</p>
<pre><code class="language-python"><span class="hljs-number">-1</span> (<span class="hljs-keyword">as</span> an integer)</code></pre>
<pre style="display: none;"><code class="language-java"><span class="hljs-keyword">null</span></code></pre>
<pre style="display: none;"><code class="language-csharp"><span class="hljs-literal">null</span></code></pre>
<pre style="display: none;"><code class="language-ruby">-<span class="hljs-number">1</span> (as an integer)</code></pre>
<pre style="display: none;"><code class="language-cpp"><span class="hljs-string">&quot;-1&quot;</span> (as a <span class="hljs-built_in">string</span>)</code></pre>
<p><br> </p>
<h2 id="input-format">Input format:</h2>
<p>The function/method will take as input a multiline string of instructions, delimited with EOL characters. Please, note that the instructions may also have indentation for readability purposes.</p>
<p>For example:</p>
<pre><code class="language-python">program = <span class="hljs-string">&quot;&quot;&quot;
; My first program
mov  a, 5
inc  a
call function
msg  &apos;(5+1)/2 = &apos;, a    ; output message
end

function:
    div  a, 2
    ret
&quot;&quot;&quot;</span>
assembler_interpreter(program)</code></pre>
<pre style="display: none;"><code class="language-java">program = <span class="hljs-string">&quot;\n; My first program\nmov  a, 5\ninc  a\ncall function\nmsg  &apos;(5+1)/2 = &apos;, a    ; output message\nend\n\nfunction:\n    div  a, 2\n    ret\n&quot;</span>
AssemblerInterpreter.interpret(program);

<span class="hljs-comment">// Which is equivalent to (keep in mind that empty lines are not displayed in the console on CW, so you actually won&apos;t see the separation before &quot;function:&quot;...):</span>

; My first program
mov  a, <span class="hljs-number">5</span>
inc  a
call function
msg  <span class="hljs-string">&apos;(5+1)/2 = &apos;</span>, a    ; output message
end

function:
    div  a, <span class="hljs-number">2</span>
    ret</code></pre>
<pre style="display: none;"><code class="language-csharp">program = <span class="hljs-string">&quot;\n; My first program\nmov  a, 5\ninc  a\ncall function\nmsg  &apos;(5+1)/2 = &apos;, a    ; output message\nend\n\nfunction:\n    div  a, 2\n    ret\n&quot;</span>
AssemblerInterpreter.Interpret(program);

<span class="hljs-comment">// Which is equivalent to (keep in mind that empty lines are not displayed in the console on CW, so you actually won&apos;t see the separation before &quot;function:&quot;...):</span>

; My first program
mov  a, <span class="hljs-number">5</span>
inc  a
call function
msg  <span class="hljs-string">&apos;(5+1)/2 = &apos;</span>, a    ; output message
end

function:
    div  a, <span class="hljs-number">2</span>
    ret</code></pre>
<pre style="display: none;"><code class="language-ruby">program = <span class="hljs-string">&quot;
; My first program
mov  a, 5
inc  a
call function
msg  &apos;(5+1)/2 = &apos;, a    ; output message
end

function:
    div  a, 2
    ret
&quot;</span>
assembler_interpreter(program)</code></pre>
<pre style="display: none;"><code class="language-cpp">program = <span class="hljs-string">R&quot;(
; My first program
mov  a, 5
inc  a
call function
msg  &apos;(5+1)/2 = &apos;, a    ; output message
end

function:
    div  a, 2
    ret)&quot;</span>;
assembler_interpreter(program);</code></pre>
<p>The above code would set register <code>a</code> to 5, increase its value by 1, calls the subroutine function, divide its value by 2, returns to the first call instruction, prepares the output of the program and then returns it with the <code>end</code> instruction. In this case, the output would be <code>(5+1)/2 = 3</code>.</p>

### Solution