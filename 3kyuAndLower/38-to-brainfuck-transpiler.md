### Problem:
<h2 id="prologue">Prologue</h2>
<p>In this kata. We assume that you know what <a href="http://en.wikipedia.org/wiki/Brainfuck" target="_blank">BrainFuck</a> is. And it would be better if you were able to recite all 8 basic operators to solve this kata.</p>
<h2 id="background">Background</h2>
<p>Have you ever coded BrainFuck by hand ?<br>Have you ever counted the operators again and again to make sure that the pointer points to the correct cell ?<br>Is it fun ?<br>Of course it is fun, especially when you produce a super short code abusing every cells while having the same functionality as long long codes.<br>But is it always that fun ?</p>
<p>We know what to do if we are not 100 percent satisfied with an existing language. Stop using it, or create another language and transpile to it.</p>
<h2 id="requirement">Requirement</h2>
<p>You are given a <code>code</code> follows the following specification, and are going to transpile it to BrainFuck.</p>
<h2 id="specification">Specification</h2>
<h3 id="lexical-syntax">Lexical Syntax</h3>
<pre><code>Program -&gt; Statement Comment* [EOL Program]

Statement -&gt; &quot;var&quot; VarSingle+
    | &quot;set&quot; VarName VarNameOrNumber

    | &quot;inc&quot; VarName VarNameOrNumber
    | &quot;dec&quot; VarName VarNameOrNumber

    | &quot;add&quot; VarNameOrNumber VarNameOrNumber VarName
    | &quot;sub&quot; VarNameOrNumber VarNameOrNumber VarName
    | &quot;mul&quot; VarNameOrNumber VarNameOrNumber VarName
    | &quot;divmod&quot; VarNameOrNumber VarNameOrNumber VarName VarName
    | &quot;div&quot; VarNameOrNumber VarNameOrNumber VarName
    | &quot;mod&quot; VarNameOrNumber VarNameOrNumber VarName

    | &quot;cmp&quot; VarNameOrNumber VarNameOrNumber VarName

    | &quot;a2b&quot; VarNameOrNumber VarNameOrNumber VarNameOrNumber VarName
    | &quot;b2a&quot; VarNameOrNumber VarName VarName VarName

    | &quot;lset&quot; ListName VarNameOrNumber VarNameOrNumber
    | &quot;lget&quot; ListName VarNameOrNumber VarName

    | &quot;ifeq&quot; VarName VarNameOrNumber
    | &quot;ifneq&quot; VarName VarNameOrNumber
    | &quot;wneq&quot; VarName VarNameOrNumber
    | &quot;proc&quot; VarName+
    | &quot;end&quot;
    | &quot;call&quot; VarName+

    | &quot;read&quot; VarName
    | &quot;msg&quot; VarNameOrString+

    | &quot;rem&quot; &lt;all characters until EOL or EOF&gt;

Comment -&gt; CommentPrefix &lt;all characters until EOL or EOF&gt;

EOL -&gt; &lt;U+000A&gt;
CommentPrefix -&gt; // | -- | #
Digit -&gt; 0 | 1 | ... | 9
VarPrefix -&gt; $ | _
    | a | b | ... | z
    | A | B | ... | Z
VarSuffix -&gt; VarPrefix | Digit
CharElement -&gt; &lt;any characters other than &apos;, &quot;, or \&gt;
    | \\ | \&apos; | \&quot;
    | \n | \r | \t
CharQuote -&gt; &apos;
Char -&gt; CharQuote CharElement CharQuote
StringQuote -&gt; &quot;
String -&gt; StringQuote CharElement* StringQuote
Number -&gt; &apos;-&apos; Digit+ | Digit+ | Char

VarName -&gt; VarPrefix VarSuffix*
ListName -&gt; VarName
VarNameOrNumber -&gt; VarName | Number
VarNameOrString -&gt; VarName | String
VarSingle -&gt; VarName
    | ListName &apos;[&apos; Digit+ &apos;]&apos;</code></pre><p>Note</p>
<ul>
<li>One line per instruction. Empty lines are acceptable. White spaces are used to seprate elements. Redundent spaces are just ignored.</li>
<li>Instruction names and variable names are all case insensitive.</li>
<li>Character literals are just numbers. (eg. <code>&apos;z&apos; -&gt; 122</code>)</li>
<li>If a number is not in range [0,255] wrap it into this range. (eg. <code>450 -&gt; 194</code>, <code>-450 -&gt; 62</code>)</li>
</ul>
<h3 id="instruction">Instruction</h3>
<h4 id="variable">Variable</h4>
<p><code>var VarSingle+</code>. Define one to many variables, some could be lists.<br>The length of a list will always be in range [1,256].<br>eg. <code>var A B C[100] D</code> defines variable <code>A</code>, <code>B</code>, <code>C</code> and <code>D</code> where <code>C</code> represent a 100-length list (or you call it an array).<br><code>var X [ 80 ]</code> is also acceptable.<br>All variables and all list slots are initialized to <code>0</code>.</p>
<p><code>set a b</code>. Set value of variable <code>a</code> to <code>b</code>.<br>eg. <code>set X 30</code>, <code>set X Y</code>.</p>
<p><strong>Note</strong> Variables can be defined everywhere except inside a <code>procedure</code>, and they are all global variables, cannot be used before defined.</p>
<h4 id="arithmetic">Arithmetic</h4>
<p><code>inc a b</code>. Increase the value of <code>a</code> as <code>b</code>. Equals to <code>a += b</code>.<br>eg. <code>inc X 10</code>, <code>inc X Y</code>.</p>
<p><code>dec a b</code>. Decrease the value of <code>a</code> as <code>b</code>. Equals to <code>a -= b</code>.<br>eg. <code>dec Y 10</code>, <code>dec X Y</code>.</p>
<p><code>add a b c</code>. Add <code>a</code> and <code>b</code> then store the result into <code>c</code>. Equals to <code>c = a + b</code>.<br>eg. <code>add 10 X Y</code>, <code>add X Y X</code></p>
<p><code>sub a b c</code>. Subtract <code>b</code> from <code>a</code> then store the result into <code>c</code>. Equals to <code>c = a - b</code>.<br>eg. <code>sub X 20 Y</code>, <code>sub X Y Y</code></p>
<p><code>mul a b c</code>. Multiply <code>a</code> and <code>b</code> then store the result into <code>c</code>. Equals to <code>c = a * b</code>.<br>eg. <code>mul 10 20 X</code>, <code>mul X 10 X</code></p>
<p><code>divmod a b c d</code>. Divide <code>a</code> and <code>b</code> then store the quotient into <code>c</code> and the remainder into <code>d</code>. Equals to <code>c = floor(a / b), d = a % b</code>.<br>eg. <code>divmod 20 10 X Y</code>, <code>divmod X Y X Y</code>, <code>divmod X 10 Y X</code>.</p>
<p><code>div a b c</code>. Divide <code>a</code> and <code>b</code> then store the quotient into <code>c</code>. Equals to <code>c = floor(a / b)</code>.<br>eg. <code>div 10 X X</code>, <code>div X X X</code></p>
<p><code>mod a b c</code>. Divide <code>a</code> and <code>b</code> then store the remainder into <code>c</code>. Equals to <code>c = a % b</code>.<br>eg. <code>mod 10 X X</code>, <code>mod X X Y</code></p>
<p><strong>Note</strong> The behavior when divisor is 0 is not defined, and will not be tested.</p>
<p><code>cmp a b c</code>. Compare <code>a</code> and <code>b</code>.<br>If <code>a</code> &lt; <code>b</code> store -1(255) into <code>c</code>.<br>If <code>a</code> == <code>b</code> store 0 into <code>c</code>.<br>If <code>a</code> &gt; <code>b</code> store 1 into <code>c</code>.<br>eg. <code>cmp 10 10 X</code>, <code>cmp X X X</code>, <code>cmp X 20 Y</code></p>
<p><code>a2b a b c d</code>. ASCII To Byte. Treat <code>a</code>, <code>b</code> and <code>c</code> as ASCII digits and store the number represents those digits into <code>d</code>.<br>Equals to <code>d = 100 * (a - 48) + 10 * (b - 48) + (c - 48)</code>.<br>eg. <code>a2b &apos;1&apos; &apos;5&apos; &apos;9&apos; X</code>, <code>a2b &apos;0&apos; X Y X</code></p>
<p><code>b2a a b c d</code>. Byte To ASCII. The reverse operation of <code>a2b</code>.<br>Equals to <code>b = 48 + floor(a / 100), c = 48 + floor(a / 10 % 10), d = 48 + (a % 10)</code>.<br>eg. <code>b2a 159 X Y Z</code>, <code>b2a &apos;z&apos; X Y Z</code>, <code>b2a X X Y Z</code></p>
<h4 id="list">List</h4>
<p><code>lset a b c</code>. Set <code>c</code> into index <code>b</code> of list <code>a</code>. Equals to <code>a[b] = c</code>.<br>eg. <code>lset X 0 20</code>, <code>lset X Y Z</code></p>
<p><code>lget a b c</code>. Read index <code>b</code> of list <code>a</code> into <code>c</code>. Equals to <code>c = a[b]</code>.<br>eg. <code>lget X 0 X</code>, <code>lget X Y Z</code></p>
<p><strong>Note</strong> The behavior of accessing invalid index (negative or too big) is not defined, and will not be tested.</p>
<h4 id="control-flow">Control Flow</h4>
<p><code>ifeq a b</code>. Execute the block when <code>a</code> equals to <code>b</code>. Equals to <code>if (a == b) {</code></p>
<p><code>ifneq a b</code>. Execute the block when <code>a</code> not equals to <code>b</code>. Equals to <code>if (a != b) {</code></p>
<p><code>wneq a b</code>. Execute the block repeatly while <code>a</code> not equals to <code>b</code>. Equals to <code>while (a != b) {</code></p>
<p><code>proc procedureName procedureParamater</code>. Begin a procedure block.</p>
<p><code>end</code>. The end of <code>ifeq</code>, <code>ifneq</code>, <code>wneq</code> and <code>proc</code>. Equals to <code>}</code></p>
<p><code>call procedureName argument</code>. Invoke a procedure.</p>
<p>Notes</p>
<ul>
<li><code>ifeq</code>, <code>ifneq</code> and <code>wneq</code> can be nested, can appear inside a <code>proc</code>.</li>
<li><code>proc</code> can not be nested.</li>
<li><code>call</code> can invoke a <code>proc</code> defines below it.</li>
<li><code>call</code> can be inside a <code>proc</code>.</li>
<li>Procedures can not be directly or indirectly recursive.</li>
<li>Arguments are passed to a procedure by reference, which means procedures are kind of marco.</li>
<li>Procedure paramaters can have same name with global variables, in which case its content refers to the parameter instead of global variables.</li>
</ul>
<h4 id="interactive">Interactive</h4>
<p><code>read a</code>. Read into <code>a</code>.</p>
<p><code>msg</code>. Print message. The spaces around strings are not necessary.<br>eg. <code>msg &quot;a is &quot; a</code>, <code>msg&quot;b &quot;&quot;is&quot;b&quot;\n&quot;</code>, <code>msg a b c</code></p>
<h4 id="comment">Comment</h4>
<p><code>rem</code>. Comment the whole line.</p>
<h2 id="error-handling">Error Handling</h2>
<p>A complete transpiler would not only accept valid input but also tells the errors in an invalid input.<br>If any situation mentioned below occured, just throws anything.<br>There will not be any other invalid forms appears in the final tests. (eg. <code>msg 20</code> does not suit the specification but will not be tested)<br>Also, there will not exist procedures that are not being used.</p>
<ul>
<li>Unknown instructions. <code>whatever a b c</code></li>
<li>Number of arguments for an instruction does not match the expectation. <code>add 20</code>, <code>div 20 20 c d</code></li>
<li>Undefined var names. <code>var Q\nadd Q Q S</code></li>
<li>Duplicate var names. <code>var Q q</code>, <code>var Q\nvar Q[20]</code></li>
<li>Define variables inside a procedure. <code>proc whatever\nvar Q\nend</code></li>
<li>Unclosed <code>[]</code> pair. <code>var Q[ 20 S</code></li>
<li>Expect a variable but got something else. <code>set 20 20</code>, <code>inc &quot;a&quot; 5</code></li>
<li>Expect a variable but got a list. <code>var A B[20]\nlset B B 20</code></li>
<li>Expect a list but got a variable. <code>var A B[20]\nlset A 0 20</code></li>
<li>Unclosed <code>&apos;&apos;</code> pair. <code>add &apos;0 &apos;1&apos; a</code></li>
<li>Unclosed <code>&quot;&quot;</code> pair. <code>msg &quot;abc</code></li>
<li>Nested procedures. <code>proc pa\nproc pb\nend\nend</code></li>
<li>Duplicate procedure names. <code>proc a\nend\nproc a\nend</code></li>
<li>Duplicate parameter names. <code>proc a Q q\nend</code></li>
<li>End before beginning a block. <code>end</code></li>
<li>Unclosed blocks. <code>var a\nifeq a 0</code></li>
<li>Undefined procedure. <code>call whatever</code></li>
<li>The length of arguments does not match the length of parameters. <code>proc a b c\nend\ncall a x</code></li>
<li>Recursive call.</li>
</ul>
<pre><code>var A
set a 20
call Wrap a
proc Say x
    msg &quot;It is &quot;x
    call Wrap X
end
Proc Wrap X
    call Say x
eNd</code></pre><h2 id="what-should-the-code-be-transpiled-like">What should the code be transpiled like</h2>
<p>Any valid BrainFuck code with the same functionality.<br>If you stuck on some instructions, you can check the following links.<br><a href="https://esolangs.org/wiki/Brainfuck_algorithms" target="_blank">Brainfuck algorithms</a><br><a href="http://www.inshame.com/search/label/Brainfuck" target="_blank">INSHAME: Brainfuck</a><br>Actually this kata is inspired by the project <code>FBF</code> on INSHAME site.</p>
<h2 id="example">Example</h2>
<pre><code class="language-js"><span class="hljs-keyword">var</span> code = kcuf(<span class="hljs-string">`
var q w e
read q
read w
add q w e
msg q &quot; &quot; w &quot; &quot; e
`</span>)
runBF(Code,<span class="hljs-string">&apos;A!&apos;</span>) === <span class="hljs-string">&apos;A ! b&apos;</span></code></pre>
<p>Checkout more in example tests.</p>
<h2 id="about-the-brainfuck-interpreter">About the BrainFuck interpreter</h2>
<p>The interpreter used here</p>
<ul>
<li>Accept and ignore characters other than <code>+-&lt;&gt;,.[]</code>.</li>
<li>Has <em>infinity</em> cells.</li>
<li>Cells value are wrapped into [0,255].</li>
<li>Throws an error when accessing negative indexes.</li>
</ul>
<p>The following situations will be optimized</p>
<ul>
<li>Continous <code>+</code>s.</li>
<li>Continous <code>-</code>s.</li>
<li>Continous <code>&lt;</code>s.</li>
<li>Continous <code>&gt;</code>s.</li>
<li>Loops that only contain <code>+-&lt;&gt;</code>, return back to be begining position at the end, and totally increasing 1 or decreasing 1 to the begining position. (eg. <code>[-]</code>, <code>[&gt;+&lt;-&lt;+&gt;]</code>. Not <code>[&gt;]</code>, <code>[-&gt;]</code>, <code>[&gt;[-]]</code>)</li>
</ul>
<h2 id="note">Note</h2>
<ul>
<li>You do not need to concentrate on the size and performance of the output code, but you may need to be careful if the algorithm you used to transpile an instruction is too slow.</li>
<li>If you are sure that my implementation of BrainFuck interpreter includes a bug that fails your solution. Please feel free to raise an issue.</li>
<li>If the description above is not clear enough. Please feel free to question me.</li>
</ul>
<p>Have Fun. O_o</p>

### Solution