### Problem:
<h2 id="task">Task</h2>
<p>You will create an interpreter which takes inputs described below and produces outputs, storing state in between each input.</p>
<p>If you&apos;re not sure where to start with this kata, check out my <a href="http://www.codewars.com/dojo/katas/53005a7b26d12be55c000243" target="_blank">Simpler Interactive Interpreter</a> kata, which greatly simplifies the interpreter by removing functions.</p>
<p><strong>Note that the</strong> <code>eval</code> <strong>command has been disabled.</strong></p>
<h2 id="concepts">Concepts</h2>
<p>The interpreter will take inputs in the language described under the language header below. This section will give an overview of the language constructs.</p>
<h3 id="variables">Variables</h3>
<p>Any <code>identifier</code> which is not a keyword or a function name will be treated as a variable. If the identifier is on the left hand side of an assignment operator, the result of the right hand side will be stored in the variable. If a variable occurs as part of an expression, the value held in the variable will be substituted when the expression is evaluated.</p>
<p>Variables are implicitly declared the first time they are assigned to.</p>
<p><strong>Example:</strong> Initializing a variable to a constant value and using the variable in another expression (Each line starting with a &apos;&gt;&apos; indicates a separate call to the input method of the interpreter, other lines represent output)</p>
<pre><code>&gt;x = 7
    7
&gt;x + 6
    13    </code></pre><p>Referencing a non-existent variable will cause the interpreter to throw an error. The interpreter should be able to continue accepting input even after throwing.</p>
<p><strong>Example:</strong> Referencing a non-existent variable</p>
<pre><code>&gt;y + 7
    ERROR: Invalid identifier. No variable with name &apos;y&apos; was found.&quot;</code></pre><h3 id="assignments">Assignments</h3>
<p>An assignment is an expression that has an identifier on left side of an <code>=</code> operator, and any expression on the right. Such expressions should store the value of the right hand side in the specified variable and return the result.</p>
<p><strong>Example:</strong> Assigning a constant to a variable</p>
<pre><code>x = 7
    7</code></pre><p>You should also be able to chain and nest assignments. Note that the assignment operator is one of the few that is right associative.</p>
<p><strong>Example:</strong> Chained assignments. The statement below should set both <code>x</code> and <code>y</code> to <code>7</code>.</p>
<pre><code>x = y = 7
    7</code></pre><p><strong>Example:</strong> Nested assignments. The statement below should set <code>y</code> to <code>3</code>, but it only outputs the final result.</p>
<pre><code>x = 13 + (y = 3)
    16</code></pre><h3 id="operator-precedence">Operator Precedence</h3>
<p>Operator precedence will follow the common order. There is a table in the <em>Language</em> section below that explicitly states the operators and their relative precedence.</p>
<h3 id="functions">Functions</h3>
<p>Functions are declared by the <code>fn</code> keyword followed by a name, an optional arguments list, the <code>=&gt;</code> operator, and finally an expression. All function variables are local to the function. That is, the only variable names allowed in the function body are those declared by the arguments list. If a function has an argument called &apos;x&apos;, and there is also a global variable called &apos;x&apos;, the function should use the value of the supplied argument, not the value of the global variable, when evaluating the epxression. References to variables not found in the argument list should result in an error when the function is defined.</p>
<p><strong>Example:</strong> declare a function to calculate the average of two variables and call it. (Each line starting with a &apos;&gt;&apos; indicates a separate call to the input method of the interpreter, other lines represent output)</p>
<pre><code>&gt;fn avg =&gt; (x + y) / 2
    ERROR: Unknown identifier &apos;x&apos;
&gt;fn avg x y =&gt; (x + y) / 2
&gt;a = 2
    2
&gt;b = 4
    4
&gt;avg a b
    3 </code></pre><p><strong>Example:</strong> declare a function with an invalid variable name in the function body</p>
<pre><code>&gt;fn add x y =&gt; x + z
    ERROR: Invalid identifier &apos;z&apos; in function body.</code></pre><p><strong>Example:</strong> chain method calls (hint: function calls are right associative!)</p>
<pre><code>&gt;fn echo x =&gt; x
&gt;fn add x y =&gt; x + y
&gt;add echo 4 echo 3
    7</code></pre><h3 id="name-conflicts">Name conflicts</h3>
<p>Because variable and function names share the same grammar, conflicts are possible. Precedence will be given to the first object declared. That is, if a variable is declared, then subsequent declaration of a function with the same name should result in an error. Likewise, declaration of a function followed by the initialization of a variable with the same name should result in an error.</p>
<p>Declaration of function with the same name as an existing function should overwrite the old function with the new one.</p>
<p><strong>Example:</strong> Overwriting a function</p>
<pre><code>&gt;fn inc x =&gt; x + 1
&gt;a = 0
    0
&gt;a = inc a
    1
&gt;fn inc x =&gt; x + 2
&gt;a = inc a
    3</code></pre><h3 id="input">Input</h3>
<p>Input will conform to either the <code>function</code> production or the <code>expression</code> production in the grammar below.</p>
<h3 id="output">Output</h3>
<ul>
<li>Output for a valid function declaration will be an empty string (null in Java).</li>
<li>Output for a valid expression will be the result of the expression.</li>
<li>Output for input consisting entirely of whitespace will be an empty string (null in Java).</li>
<li>All other cases will throw an error.</li>
</ul>
<pre><code class="language-haskell"><span class="hljs-comment">-- In Haskell that is:</span>
<span class="hljs-type">Right</span> (<span class="hljs-type">Nothing</span>, <span class="hljs-type">Interpreter</span>)
<span class="hljs-type">Right</span> (<span class="hljs-type">Just</span> <span class="hljs-type">Double</span>, <span class="hljs-type">Interpreter</span>) 
<span class="hljs-type">Right</span> (<span class="hljs-type">Nothing</span>, <span class="hljs-type">Interpreter</span>)
<span class="hljs-type">Left</span> <span class="hljs-type">String</span></code></pre>
<pre style="display: none;"><code class="language-rust"><span class="hljs-comment">// In Rust that is:</span>
<span class="hljs-literal">Ok</span>(<span class="hljs-literal">None</span>)
<span class="hljs-literal">Ok</span>(<span class="hljs-literal">Some</span>(<span class="hljs-built_in">f32</span>))
<span class="hljs-literal">Ok</span>(<span class="hljs-literal">None</span>)
<span class="hljs-literal">Err</span>(<span class="hljs-built_in">String</span>)</code></pre>
<h2 id="language">Language</h2>
<h3 id="grammar">Grammar</h3>
<p>This section specifies the grammar for the interpreter language in <a href="http://en.wikipedia.org/wiki/Extended_Backus%E2%80%93Naur_Form" target="_blank">EBNF syntax</a></p>
<pre><code>function        ::= fn-keyword fn-name { identifier } fn-operator expression
fn-name         ::= identifier
fn-operator     ::= &apos;=&gt;&apos;
fn-keyword      ::= &apos;fn&apos;

expression      ::= factor | expression operator expression
factor          ::= number | identifier | assignment | &apos;(&apos; expression &apos;)&apos; | function-call
assignment      ::= identifier &apos;=&apos; expression
function-call   ::= fn-name { expression }

operator        ::= &apos;+&apos; | &apos;-&apos; | &apos;*&apos; | &apos;/&apos; | &apos;%&apos;

identifier      ::= letter | &apos;_&apos; { identifier-char }
identifier-char ::= &apos;_&apos; | letter | digit

number          ::= { digit } [ &apos;.&apos; digit { digit } ]

letter          ::= &apos;a&apos; | &apos;b&apos; | ... | &apos;y&apos; | &apos;z&apos; | &apos;A&apos; | &apos;B&apos; | ... | &apos;Y&apos; | &apos;Z&apos;
digit           ::= &apos;0&apos; | &apos;1&apos; | &apos;2&apos; | &apos;3&apos; | &apos;4&apos; | &apos;5&apos; | &apos;6&apos; | &apos;7&apos; | &apos;8&apos; | &apos;9&apos;</code></pre><h3 id="operator-precedence-1">Operator Precedence</h3>
<p>The following table lists the language&apos;s operators grouped in order of precedence. Operators within each group have equal precedence.</p>
<table>
<thead>
<tr>
<th>Category</th>
<th>Operators</th>
</tr>
</thead>
<tbody><tr>
<td>Multiplicative</td>
<td>*, /, %</td>
</tr>
<tr>
<td>Additive</td>
<td>+, -</td>
</tr>
<tr>
<td>Assignment</td>
<td>=</td>
</tr>
<tr>
<td>Function</td>
<td>=&gt;</td>
</tr>
</tbody></table>
<h3 id="division">Division</h3>
<p>You should use float division instead of integer division.</p>

### Solution