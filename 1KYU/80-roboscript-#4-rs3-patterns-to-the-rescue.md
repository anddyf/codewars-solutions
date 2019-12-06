### Problem:
<h1 id="roboscript-4---rs3-patterns-to-the-rescue">RoboScript #4 - RS3 Patterns to the Rescue</h1>
<h2 id="disclaimer">Disclaimer</h2>
<p>The story presented in this Kata Series is purely fictional; any resemblance to actual programming languages, products, organisations or people should be treated as purely coincidental.</p>
<h2 id="about-this-kata-series">About this Kata Series</h2>
<p>This Kata Series is based on a fictional story about a computer scientist and engineer who owns a firm that sells a toy robot called MyRobot which can interpret its own (esoteric) programming language called RoboScript.  Naturally, this Kata Series deals with the software side of things (I&apos;m afraid Codewars cannot test your ability to build a physical robot!).</p>
<h2 id="story">Story</h2>
<p>Ever since you released <a href="https://www.codewars.com/kata/58738d518ec3b4bf95000192" target="_blank">RS2</a> to the market, there have been much fewer complaints from RoboScript developers about the inefficiency of the language and the popularity of your programming language has continuously soared.  It has even gained so much attention that Zachary Mikowski, the CEO of the world-famous Doodle search engine, has contacted you to try out your product!  Initially, when you explain the RoboScript (RS2) syntax to him, he looks satisfied, but then he soon finds a major loophole in the efficiency of the RS2 language and brings forth the following program:</p>
<pre style="background: #161616; color: #c5c8c6; font-family: &apos;CamingoCode-Regular&apos;, monospace; display: block; padding: 10px; margin-bottom: 15px; font-weight: normal; overflow-x: auto">(F2LF2R)2FRF4L(F2LF2R)2(FRFL)4(F2LF2R)2
</pre> 

<p>As you can see from the program above, the movement sequence <code>(F2LF2R)2</code> has to be rewritten every time and no amount of RS2 syntax can simplify it because the movement sequences in between are different each time (<code>FRF4L</code> and <code>(FRFL)4</code>).  If only RoboScript had a movement sequence reuse feature that makes writing programs like these less repetitive ... </p>
<h2 id="task">Task</h2>
<p>Define and implement the RS3 specification whose syntax is a superset of <a href="https://www.codewars.com/kata/58738d518ec3b4bf95000192" target="_blank">RS2</a> (and RS1) syntax.  Your interpreter should be named <code>execute()</code> and accept exactly 1 argument <code>code</code>, the RoboScript code to be executed.</p>
<h3 id="patterns---the-new-feature">Patterns - The New Feature</h3>
<p>To solve the problem outlined in the Story above, you have decided to introduce a new syntax feature to RS3 called the &quot;pattern&quot;.  The &quot;pattern&quot; as defined in RS3 behaves rather like a primitive version of functions/methods in other programming languages - it allows the programmer to define and name (to a certain extent) a certain sequence of movements which can be easily referenced and reused later instead of rewriting the whole thing.</p>
<p>The basic syntax for defining a pattern is as follows:</p>
<pre style="background: #161616; color: #c5c8c6; font-family: &apos;CamingoCode-Regular&apos;, monospace; display: block; padding: 10px; margin-bottom: 15px; font-weight: normal; overflow-x: auto">p(n)&lt;CODE_HERE&gt;q
</pre> 



<p>Where:</p>
<ul>
<li><code>p</code> is a &quot;keyword&quot; that declares the beginning of a pattern definition (much like the <code>function</code> keyword in JavaScript or the <code>def</code> keyword in Python)</li>
<li><code>(n)</code> is any non-negative integer (without the round brackets) which acts as a unique identifier for the pattern (much like a function/method name)</li>
<li><code>&lt;CODE_HERE&gt;</code> is any valid RoboScript code (without the angled brackets)</li>
<li><code>q</code> is a &quot;keyword&quot; that marks the end of a pattern definition (like the <code>end</code> keyword in Ruby)</li>
</ul>
<p>For example, if I want to define <code>(F2LF2R)2</code> as a pattern and reuse it later in my code:</p>
<pre style="background: #161616; color: #c5c8c6; font-family: &apos;CamingoCode-Regular&apos;, monospace; display: block; padding: 10px; margin-bottom: 15px; font-weight: normal; overflow-x: auto">p0(F2LF2R)2q
</pre> 

<p>It can also be rewritten as below since <code>(n)</code> only serves as an identifier and its value doesn&apos;t matter:</p>
<pre style="background: #161616; color: #c5c8c6; font-family: &apos;CamingoCode-Regular&apos;, monospace; display: block; padding: 10px; margin-bottom: 15px; font-weight: normal; overflow-x: auto">p312(F2LF2R)2q
</pre>

<p>Like function/method definitions in other languages, merely defining a pattern (or patterns) in RS3 should cause no side effects, so:</p>
<pre style="background: #161616; color: #c5c8c6; font-family: &apos;CamingoCode-Regular&apos;, monospace; display: block; padding: 10px; margin-bottom: 15px; font-weight: normal; overflow-x: auto">execute(&quot;p0(F2LF2R)2q&quot;);   # =&gt; &apos;*&apos;
execute(&quot;p312(F2LF2R)2q&quot;); # =&gt; &apos;*&apos;
</pre> 

<p>To invoke a pattern (i.e. make the MyRobot move according to the movement sequences defined inside the pattern), a capital <code>P</code> followed by the pattern identifier <code>(n)</code> is used:</p>
<pre style="background: #161616; color: #c5c8c6; font-family: &apos;CamingoCode-Regular&apos;, monospace; display: block; padding: 10px; margin-bottom: 15px; font-weight: normal; overflow-x: auto">P0
</pre> 

<p>(or <code>P312</code>, depending on which example you are using)</p>
<p>So:</p>
<pre style="background: #161616; color: #c5c8c6; font-family: &apos;CamingoCode-Regular&apos;, monospace; display: block; padding: 10px; margin-bottom: 15px; font-weight: normal; overflow-x: auto">execute(&quot;p0(F2LF2R)2qP0&quot;);     # =&gt; &quot;    *\r\n    *\r\n  ***\r\n  *  \r\n***  &quot;
execute(&quot;p312(F2LF2R)2qP312&quot;); # =&gt; &quot;    *\r\n    *\r\n  ***\r\n  *  \r\n***  &quot;
</pre> 

<h3 id="additional-rules-for-parsing-rs3">Additional Rules for parsing RS3</h3>
<p>It doesn&apos;t matter whether the invocation of the pattern or the pattern definition comes first - pattern definitions should <strong>always</strong> be parsed first, so:</p>
<pre style="background: #161616; color: #c5c8c6; font-family: &apos;CamingoCode-Regular&apos;, monospace; display: block; padding: 10px; margin-bottom: 15px; font-weight: normal; overflow-x: auto">execute(&quot;P0p0(F2LF2R)2q&quot;);     # =&gt; &quot;    *\r\n    *\r\n  ***\r\n  *  \r\n***  &quot;
execute(&quot;P312p312(F2LF2R)2q&quot;); # =&gt; &quot;    *\r\n    *\r\n  ***\r\n  *  \r\n***  &quot;
</pre> 

<p>Of course, RoboScript code can occur anywhere before and/or after a pattern definition/invocation, so:</p>
<pre style="background: #161616; color: #c5c8c6; font-family: &apos;CamingoCode-Regular&apos;, monospace; display: block; padding: 10px; margin-bottom: 15px; font-weight: normal; overflow-x: auto">execute(&quot;F3P0Lp0(F2LF2R)2qF2&quot;); # =&gt; &quot;       *\r\n       *\r\n       *\r\n       *\r\n     ***\r\n     *  \r\n******  &quot;
</pre>

<p>Much like a function/definition can be invoked multiple times in other languages, a pattern should also be able to be invoked multiple times in RS3.  So:</p>
<pre style="background: #161616; color: #c5c8c6; font-family: &apos;CamingoCode-Regular&apos;, monospace; display: block; padding: 10px; margin-bottom: 15px; font-weight: normal; overflow-x: auto">execute(&quot;(P0)2p0F2LF2RqP0&quot;); # =&gt; &quot;      *\r\n      *\r\n    ***\r\n    *  \r\n  ***  \r\n  *    \r\n***    &quot;
</pre>

<p>If a pattern is invoked which does not exist, your interpreter should <code>throw</code>/<code>raise</code> an exception (depending on the language you are attempting this Kata in) of any kind.  This could be anything and will not be tested, but <em>ideally</em> it should provide a useful message which describes the error in detail.</p>
<p><strong>In PHP this must be an inst</strong></p>
<pre style="background: #161616; color: #c5c8c6; font-family: &apos;CamingoCode-Regular&apos;, monospace; display: block; padding: 10px; margin-bottom: 15px; font-weight: normal; overflow-x: auto">execute(&quot;p0(F2LF2R)2qP1&quot;);   # throws
execute(&quot;P0p312(F2LF2R)2q&quot;); # throws
execute(&quot;P312&quot;);             # throws
</pre>

<p>Much like any good programming language will allow you to define an unlimited number of functions/methods, your RS3 interpreter should also allow the user to define a virtually unlimited number of patterns.  A pattern definition should be able to invoke other patterns if required.  If the same pattern (i.e. both containing the same identifier <code>(n)</code>) is defined more than once, your interpreter should <code>throw</code>/<code>raise</code> an exception (depending on the language you are attempting this Kata in) of any kind.</p>
<p><strong>In PHP this error must again be an instance of</strong> <code>ParseError</code>.**</p>
<pre style="background: #161616; color: #c5c8c6; font-family: &apos;CamingoCode-Regular&apos;, monospace; display: block; padding: 10px; margin-bottom: 15px; font-weight: normal; overflow-x: auto">execute(&quot;P1P2p1F2Lqp2F2RqP2P1&quot;);                      # =&gt; &quot;  ***\r\n  * *\r\n*** *&quot;
execute(&quot;p1F2Lqp2F2Rqp3P1(P2)2P1q(P3)3&quot;);             # =&gt; &quot;  *** *** ***\r\n  * * * * * *\r\n*** *** *** *&quot;
execute(&quot;p1F2Lqp1(F3LF4R)5qp2F2Rqp3P1(P2)2P1q(P3)3&quot;); # throws exception
</pre>

<p>Furthermore, your interpreter should be able to detect (potentially) infinite recursion, including mutual recursion.  Instead of just getting stuck in an infinite loop and timing out, your interpreter should <code>throw</code>/<code>raise</code> an exception (depending on the language you are attempting this Kata in) of any kind when the &quot;stack&quot; (or just the total number of pattern invocations) exceeds a particular very high (but sensible) threshold.</p>
<p><strong>In PHP this error must again be an instance of</strong> <code>ParseError</code>.**</p>
<pre style="background: #161616; color: #c5c8c6; font-family: &apos;CamingoCode-Regular&apos;, monospace; display: block; padding: 10px; margin-bottom: 15px; font-weight: normal; overflow-x: auto">execute(&quot;p1F2RP1F2LqP1&quot;);      # throws
execute(&quot;p1F2LP2qp2F2RP1qP1&quot;); # throws
</pre>

<p>For the sake of simplicity, you may assume that all programs passed into your interpreter contains valid syntax and that pattern definitions will never be empty.  Furthermore, nesting pattern definitions is not allowed either (it is considered a syntax error) so your interpreter will not need to account for these.</p>
<h2 id="kata-in-this-series">Kata in this Series</h2>
<ol>
<li><a href="https://www.codewars.com/kata/roboscript-number-1-implement-syntax-highlighting" target="_blank">RoboScript #1 - Implement Syntax Highlighting</a></li>
<li><a href="https://www.codewars.com/kata/roboscript-number-2-implement-the-rs1-specification" target="_blank">RoboScript #2 - Implement the RS1 Specification</a></li>
<li><a href="https://www.codewars.com/kata/58738d518ec3b4bf95000192" target="_blank">RoboScript #3 - Implement the RS2 Specification</a></li>
<li><strong>RoboScript #4 - RS3 Patterns to the Rescue</strong></li>
<li><a href="https://www.codewars.com/kata/5a12755832b8b956a9000133" target="_blank">RoboScript #5 - The Final Obstacle (Implement RSU)</a></li>
</ol>

### Solution