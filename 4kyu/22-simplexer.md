### Problem:
<h2 id="the-challenge">The Challenge</h2>
<p>You&apos;ll need to implement a simple lexer type. It should take in an input string through the constructor (or the parameter, for Javascript), and break it up into typed-tokens (in python, C# and Java, you&apos;ll have to manage <code>null/None</code> input too, resulting in the same behavior than an empty string). You&apos;ll need to implement the necessary methods (aaccording to your language) to make the Simplexer object behave like an iterator, Meaning that it returns a token (assuming one is available) object each time it a <code>next</code> (<code>Current</code> field in C#) method would be called. If no tokens are available, an exception should be thrown (idealy: <code>StopIteration</code> in python, <code>InvalidOperationException</code> in C# and <code>NoSuchElementException</code> in Java).</p>
<p>Tokens are represented by Token objects, which define two properties as strings: <code>text</code>, and <code>type</code>. Constructor is <code>Token(text, type)</code>.</p>
<p><strong>C# Notes</strong>:</p>
<p>`Iterator<t>` is an extension of `IEnumerator<t>` with default implementations for `Reset()`, `Dispose()` and `IEnumerator.Current` as these are not need to pass the challenge. You only need to override `MoveNext()` and `Current { get; }`.

</t></t></p><h2 id="token-types">Token Types</h2>
<p>There are 7 tokens types that your lexer will need to produce: <code>identifier</code>, <code>string</code>, <code>integer</code>, <code>boolean</code>, <code>keyword</code>, <code>operator</code>, and <code>whitespace</code>. To create the token, you&apos;d need to pass in the token value (the text) and the token type as strings, so for example, a simple integer token could be created with <code>new Token(&quot;1&quot;, &quot;integer&quot;)</code> (Note: no default values or default constructor are provided, so use <code>new Token(&quot;&quot;,&quot;&quot;)</code> if you want a default Token object).</p>
<h2 id="token-grammar">Token Grammar</h2>
<p>Here&apos;s a table of the grammars for the various token types:</p>
<pre><code>integer : Any sequence of one or more digits.

boolean : true or false.

string : Any sequence of characters surrounded by &quot;double quotes&quot;.

operator : The characters +, -, *, /, %, (, ), and =.

keyword : The following are keywords: if, else, for, while, return, func, and break.

whitespace : Matches standard whitespace characters (space, newline, tab, etc.)
Consecutive whitespace characters should be matched together.

identifier : Any sequence of alphanumber characters, as well as underscore and dollar sign,
and which doesn&apos;t start with a digit. Make sure that keywords aren&apos;t matched as identifiers!</code></pre>
### Solution