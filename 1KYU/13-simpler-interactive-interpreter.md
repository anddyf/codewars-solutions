### Problem:
<h1 id="simpler-interactive-interpreter-or-repl">Simpler Interactive interpreter (or REPL)</h1>
<p>You will create an interpreter which takes inputs described below and produces outputs, storing state in between each input. This is a simplified version of the <a href="http://www.codewars.com/dojo/katas/52ffcfa4aff455b3c2000750" target="_blank">Simple Interactive Interpreter</a> kata with functions removed, so if you have fun with this kata, check out its big brother to add functions into the mix.</p>
<p>If you&apos;re not sure where to start with this kata, check out <a href="http://www.codewars.com/users/ankr" target="_blank">ankr</a>&apos;s <a href="http://www.codewars.com/dojo/katas/52a78825cdfc2cfc87000005" target="_blank">Evaluate Mathematical Expression</a> kata.</p>
<p><strong>Note that the <code>eval</code> command has been disabled.</strong></p>
<h2 id="concepts">Concepts</h2>
<p>The interpreter will take inputs in the language described under the language header below. This section will give an overview of the language constructs.</p>
<h3 id="variables">Variables</h3>
<p>Any <code>identifier</code> which is not a keyword will be treated as a variable. If the identifier is on the left hand side of an assignment operator, the result of the right hand side will be stored in the variable. If a variable occurs as part of an expression, the value held in the variable will be substituted when the expression is evaluated.</p>
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
    7</code></pre><p>In this kata, all tests will contain only a single assignment. You do not need to consider chained or nested assignments.</p>
<h3 id="operator-precedence">Operator Precedence</h3>
<p>Operator precedence will follow the common order. There is a table in the <em>Language</em> section below that explicitly states the operators and their relative precedence.</p>
<h3 id="name-conflicts">Name conflicts</h3>
<p>Because variables are declared implicitly, no naming conflicts are possible. variable assignment will always overwrite any existing value.</p>
<h3 id="input">Input</h3>
<p>Input will conform to the <code>expression</code> production in the grammar below.</p>
<h3 id="output">Output</h3>
<p>Output for a valid expression will be the result of the expression.</p>
<p>Output for input consisting entirely of whitespace will be an empty string (<code>null</code> in case of Java).</p>
<p>All other cases will throw an error.</p>
<h2 id="language">Language</h2>
<h3 id="grammar">Grammar</h3>
<p>This section specifies the grammar for the interpreter language in <a href="http://en.wikipedia.org/wiki/Extended_Backus%E2%80%93Naur_Form" target="_blank">EBNF syntax</a></p>
<pre><code>expression      ::= factor | expression operator expression
factor          ::= number | identifier | assignment | &apos;(&apos; expression &apos;)&apos;
assignment      ::= identifier &apos;=&apos; expression

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
</tbody></table>

### Solution