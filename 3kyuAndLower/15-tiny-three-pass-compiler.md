### Problem:
<p>You are writing a three-pass compiler for a simple programming language into a small assembly language.</p>
<p>The programming language has this syntax:</p>
<pre><code>    function   ::= &apos;[&apos; arg-list &apos;]&apos; expression

    arg-list   ::= /* nothing */
                 | variable arg-list

    expression ::= term
                 | expression &apos;+&apos; term
                 | expression &apos;-&apos; term

    term       ::= factor
                 | term &apos;*&apos; factor
                 | term &apos;/&apos; factor

    factor     ::= number
                 | variable
                 | &apos;(&apos; expression &apos;)&apos;</code></pre><p>Variables are strings of alphabetic characters.  Numbers are strings of decimal digits representing integers.  So, for example, a function which computes a<sup>2</sup> + b<sup>2</sup> might look like:</p>
<pre><code>    [ a b ] a*a + b*b</code></pre><p>A function which computes the average of two numbers might look like:</p>
<pre><code>    [ first second ] (first + second) / 2</code></pre><p>You need write a three-pass compiler.  All test cases will be valid programs, so you needn&apos;t concentrate on error-handling.</p>
<p>The first pass will be the method <code>pass1</code> which takes a string representing a function in the original programming language and will return a (JSON) object that represents that Abstract Syntax Tree.  The Abstract Syntax Tree must use the following representations:</p>
<pre><code class="language-javascript">    { <span class="hljs-string">&apos;op&apos;</span>: <span class="hljs-string">&apos;+&apos;</span>, <span class="hljs-string">&apos;a&apos;</span>: a, <span class="hljs-string">&apos;b&apos;</span>: b }    <span class="hljs-comment">// add subtree a to subtree b</span>
    { <span class="hljs-string">&apos;op&apos;</span>: <span class="hljs-string">&apos;-&apos;</span>, <span class="hljs-string">&apos;a&apos;</span>: a, <span class="hljs-string">&apos;b&apos;</span>: b }    <span class="hljs-comment">// subtract subtree b from subtree a</span>
    { <span class="hljs-string">&apos;op&apos;</span>: <span class="hljs-string">&apos;*&apos;</span>, <span class="hljs-string">&apos;a&apos;</span>: a, <span class="hljs-string">&apos;b&apos;</span>: b }    <span class="hljs-comment">// multiply subtree a by subtree b</span>
    { <span class="hljs-string">&apos;op&apos;</span>: <span class="hljs-string">&apos;/&apos;</span>, <span class="hljs-string">&apos;a&apos;</span>: a, <span class="hljs-string">&apos;b&apos;</span>: b }    <span class="hljs-comment">// divide subtree a from subtree b</span>
    { <span class="hljs-string">&apos;op&apos;</span>: <span class="hljs-string">&apos;arg&apos;</span>, <span class="hljs-string">&apos;n&apos;</span>: n }          <span class="hljs-comment">// reference to n-th argument, n integer</span>
    { <span class="hljs-string">&apos;op&apos;</span>: <span class="hljs-string">&apos;imm&apos;</span>, <span class="hljs-string">&apos;n&apos;</span>: n }          <span class="hljs-comment">// immediate value n, n integer</span></code></pre>
<pre style="display: none;"><code class="language-coffeescript">    { <span class="hljs-string">&apos;op&apos;</span>: <span class="hljs-string">&apos;+&apos;</span>, <span class="hljs-string">&apos;a&apos;</span>: a, <span class="hljs-string">&apos;b&apos;</span>: b }    <span class="hljs-regexp">//</span> add subtree a to subtree b
    { <span class="hljs-string">&apos;op&apos;</span>: <span class="hljs-string">&apos;-&apos;</span>, <span class="hljs-string">&apos;a&apos;</span>: a, <span class="hljs-string">&apos;b&apos;</span>: b }    <span class="hljs-regexp">//</span> subtract subtree b <span class="hljs-keyword">from</span> subtree a
    { <span class="hljs-string">&apos;op&apos;</span>: <span class="hljs-string">&apos;*&apos;</span>, <span class="hljs-string">&apos;a&apos;</span>: a, <span class="hljs-string">&apos;b&apos;</span>: b }    <span class="hljs-regexp">//</span> multiply subtree a <span class="hljs-keyword">by</span> subtree b
    { <span class="hljs-string">&apos;op&apos;</span>: <span class="hljs-string">&apos;/&apos;</span>, <span class="hljs-string">&apos;a&apos;</span>: a, <span class="hljs-string">&apos;b&apos;</span>: b }    <span class="hljs-regexp">//</span> divide subtree a <span class="hljs-keyword">from</span> subtree b
    { <span class="hljs-string">&apos;op&apos;</span>: <span class="hljs-string">&apos;arg&apos;</span>, <span class="hljs-string">&apos;n&apos;</span>: n }          <span class="hljs-regexp">//</span> reference to n-th argument, n integer
    { <span class="hljs-string">&apos;op&apos;</span>: <span class="hljs-string">&apos;imm&apos;</span>, <span class="hljs-string">&apos;n&apos;</span>: n }          <span class="hljs-regexp">//</span> immediate value n, n integer</code></pre>
<pre style="display: none;"><code class="language-python">    { <span class="hljs-string">&apos;op&apos;</span>: <span class="hljs-string">&apos;+&apos;</span>, <span class="hljs-string">&apos;a&apos;</span>: a, <span class="hljs-string">&apos;b&apos;</span>: b }    // add subtree a to subtree b
    { <span class="hljs-string">&apos;op&apos;</span>: <span class="hljs-string">&apos;-&apos;</span>, <span class="hljs-string">&apos;a&apos;</span>: a, <span class="hljs-string">&apos;b&apos;</span>: b }    // subtract subtree b <span class="hljs-keyword">from</span> subtree a
    { <span class="hljs-string">&apos;op&apos;</span>: <span class="hljs-string">&apos;*&apos;</span>, <span class="hljs-string">&apos;a&apos;</span>: a, <span class="hljs-string">&apos;b&apos;</span>: b }    // multiply subtree a by subtree b
    { <span class="hljs-string">&apos;op&apos;</span>: <span class="hljs-string">&apos;/&apos;</span>, <span class="hljs-string">&apos;a&apos;</span>: a, <span class="hljs-string">&apos;b&apos;</span>: b }    // divide subtree a <span class="hljs-keyword">from</span> subtree b
    { <span class="hljs-string">&apos;op&apos;</span>: <span class="hljs-string">&apos;arg&apos;</span>, <span class="hljs-string">&apos;n&apos;</span>: n }          // reference to n-th argument, n integer
    { <span class="hljs-string">&apos;op&apos;</span>: <span class="hljs-string">&apos;imm&apos;</span>, <span class="hljs-string">&apos;n&apos;</span>: n }          // immediate value n, n integer</code></pre>
<pre style="display: none;"><code class="language-ruby">    { &apos;op&apos;: &apos;+&apos;, &apos;a&apos;: a, &apos;b&apos;: b }    // add subtree a to subtree b
    { &apos;op&apos;: &apos;-&apos;, &apos;a&apos;: a, &apos;b&apos;: b }    // subtract subtree b from subtree a
    { &apos;op&apos;: &apos;*&apos;, &apos;a&apos;: a, &apos;b&apos;: b }    // multiply subtree a by subtree b
    { &apos;op&apos;: &apos;/&apos;, &apos;a&apos;: a, &apos;b&apos;: b }    // divide subtree a from subtree b
    { &apos;op&apos;: &apos;arg&apos;, &apos;n&apos;: n }          // reference to n-th argument, n integer
    { &apos;op&apos;: &apos;imm&apos;, &apos;n&apos;: n }          // immediate value n, n integer</code></pre>
<pre style="display: none;"><code class="language-php">    { <span class="hljs-string">&apos;op&apos;</span>: <span class="hljs-string">&apos;+&apos;</span>, <span class="hljs-string">&apos;a&apos;</span>: a, <span class="hljs-string">&apos;b&apos;</span>: b }    <span class="hljs-comment">// add subtree a to subtree b</span>
    { <span class="hljs-string">&apos;op&apos;</span>: <span class="hljs-string">&apos;-&apos;</span>, <span class="hljs-string">&apos;a&apos;</span>: a, <span class="hljs-string">&apos;b&apos;</span>: b }    <span class="hljs-comment">// subtract subtree b from subtree a</span>
    { <span class="hljs-string">&apos;op&apos;</span>: <span class="hljs-string">&apos;*&apos;</span>, <span class="hljs-string">&apos;a&apos;</span>: a, <span class="hljs-string">&apos;b&apos;</span>: b }    <span class="hljs-comment">// multiply subtree a by subtree b</span>
    { <span class="hljs-string">&apos;op&apos;</span>: <span class="hljs-string">&apos;/&apos;</span>, <span class="hljs-string">&apos;a&apos;</span>: a, <span class="hljs-string">&apos;b&apos;</span>: b }    <span class="hljs-comment">// divide subtree a from subtree b</span>
    { <span class="hljs-string">&apos;op&apos;</span>: <span class="hljs-string">&apos;arg&apos;</span>, <span class="hljs-string">&apos;n&apos;</span>: n }          <span class="hljs-comment">// reference to n-th argument, n integer</span>
    { <span class="hljs-string">&apos;op&apos;</span>: <span class="hljs-string">&apos;imm&apos;</span>, <span class="hljs-string">&apos;n&apos;</span>: n }          <span class="hljs-comment">// immediate value n, n integer</span></code></pre>
<pre style="display: none;"><code class="language-haskell"><span class="hljs-class"><span class="hljs-keyword">data</span> <span class="hljs-type">AST</span> = <span class="hljs-type">Imm</span> <span class="hljs-type">Int</span>      <span class="hljs-comment">-- immediate value</span></span>
         | <span class="hljs-type">Arg</span> <span class="hljs-type">Int</span>      <span class="hljs-comment">-- reference to n-th argument</span>
         | <span class="hljs-type">Add</span> <span class="hljs-type">AST</span> <span class="hljs-type">AST</span>  <span class="hljs-comment">-- add first to second</span>
         | <span class="hljs-type">Sub</span> <span class="hljs-type">AST</span> <span class="hljs-type">AST</span>  <span class="hljs-comment">-- subtract second from first</span>
         | <span class="hljs-type">Mul</span> <span class="hljs-type">AST</span> <span class="hljs-type">AST</span>  <span class="hljs-comment">-- multiply first by second</span>
         | <span class="hljs-type">Div</span> <span class="hljs-type">AST</span> <span class="hljs-type">AST</span>  <span class="hljs-comment">-- divide first by second</span></code></pre>
<pre style="display: none;"><code class="language-java">  <span class="hljs-comment">// Each node type implements interface &apos;Ast&apos; and has the</span>
  <span class="hljs-comment">// following methods:</span>
  <span class="hljs-comment">// interface Ast has method &apos;op()&apos; returning &apos;String&apos;</span>
  <span class="hljs-comment">// BinOp has methods &apos;a()&apos; and &apos;b()&apos;, both return &apos;Ast&apos;</span>
  <span class="hljs-comment">// UnOp has method &apos;n()&apos; returning &apos;int&apos;</span>
  <span class="hljs-keyword">new</span> BinOp(<span class="hljs-string">&apos;+&apos;</span>, a, b)       <span class="hljs-comment">// add subtree a to subtree b</span>
  <span class="hljs-keyword">new</span> BinOp(<span class="hljs-string">&apos;-&apos;</span>, a, b)       <span class="hljs-comment">// subtract subtree b from subtree a</span>
  <span class="hljs-keyword">new</span> BinOp(<span class="hljs-string">&apos;*&apos;</span>, a, b)       <span class="hljs-comment">// multiply subtree a by subtree b</span>
  <span class="hljs-keyword">new</span> BinOp(<span class="hljs-string">&apos;/&apos;</span>, a, b)       <span class="hljs-comment">// divide subtree a from subtree b</span>
  <span class="hljs-keyword">new</span> UnOp(<span class="hljs-string">&apos;arg&apos;</span>, n)         <span class="hljs-comment">// reference to n-th argument, n integer</span>
  <span class="hljs-keyword">new</span> UnOp(<span class="hljs-string">&apos;imm&apos;</span>, n)         <span class="hljs-comment">// immediate value n, n integer</span></code></pre>
<pre style="display: none;"><code class="language-dart">  <span class="hljs-comment">// Each node type implements interface &apos;Ast&apos; and has the</span>
  <span class="hljs-comment">// following methods:</span>
  <span class="hljs-comment">// interface Ast has method &apos;op()&apos; returning &apos;String&apos;</span>
  <span class="hljs-comment">// BinOp has methods &apos;a()&apos; and &apos;b()&apos;, both return &apos;Ast&apos;</span>
  <span class="hljs-comment">// UnOp has method &apos;n()&apos; returning &apos;int&apos;</span>
  <span class="hljs-keyword">new</span> BinOp(<span class="hljs-string">&apos;+&apos;</span>, a, b)       <span class="hljs-comment">// add subtree a to subtree b</span>
  <span class="hljs-keyword">new</span> BinOp(<span class="hljs-string">&apos;-&apos;</span>, a, b)       <span class="hljs-comment">// subtract subtree b from subtree a</span>
  <span class="hljs-keyword">new</span> BinOp(<span class="hljs-string">&apos;*&apos;</span>, a, b)       <span class="hljs-comment">// multiply subtree a by subtree b</span>
  <span class="hljs-keyword">new</span> BinOp(<span class="hljs-string">&apos;/&apos;</span>, a, b)       <span class="hljs-comment">// divide subtree a from subtree b</span>
  <span class="hljs-keyword">new</span> UnOp(<span class="hljs-string">&apos;arg&apos;</span>, n)         <span class="hljs-comment">// reference to n-th argument, n integer</span>
  <span class="hljs-keyword">new</span> UnOp(<span class="hljs-string">&apos;imm&apos;</span>, n)         <span class="hljs-comment">// immediate value n, n integer</span></code></pre>
<pre style="display: none;"><code class="language-csharp">  <span class="hljs-comment">// Each node is of type &apos;Ast&apos; and has the following methods:</span>
  <span class="hljs-comment">// Ast has method &apos;op()&apos; returning &apos;String&apos;</span>
  <span class="hljs-comment">// BinOp has methods &apos;a()&apos; and &apos;b()&apos;, both return &apos;Ast&apos;</span>
  <span class="hljs-comment">// UnOp has method &apos;n()&apos; returning &apos;int&apos;</span>
  <span class="hljs-keyword">new</span> BinOp(<span class="hljs-string">&apos;+&apos;</span>, a, b)       <span class="hljs-comment">// add subtree a to subtree b</span>
  <span class="hljs-keyword">new</span> BinOp(<span class="hljs-string">&apos;-&apos;</span>, a, b)       <span class="hljs-comment">// subtract subtree b from subtree a</span>
  <span class="hljs-keyword">new</span> BinOp(<span class="hljs-string">&apos;*&apos;</span>, a, b)       <span class="hljs-comment">// multiply subtree a by subtree b</span>
  <span class="hljs-keyword">new</span> BinOp(<span class="hljs-string">&apos;/&apos;</span>, a, b)       <span class="hljs-comment">// divide subtree a from subtree b</span>
  <span class="hljs-keyword">new</span> UnOp(<span class="hljs-string">&apos;arg&apos;</span>, n)         <span class="hljs-comment">// reference to n-th argument, n integer</span>
  <span class="hljs-keyword">new</span> UnOp(<span class="hljs-string">&apos;imm&apos;</span>, n)         <span class="hljs-comment">// immediate value n, n integer</span></code></pre>
<pre style="display: none;"><code class="language-cpp">  <span class="hljs-comment">// Each node is of type &apos;AST&apos; and has the following fields:</span>
  <span class="hljs-comment">// &apos;string op&apos;, &apos;AST* a&apos;, &apos;AST* b&apos;, and &apos;int n&apos;</span>
  AST (<span class="hljs-string">&quot;+&quot;</span>, a, b)       <span class="hljs-comment">// add subtree a to subtree b</span>
  AST (<span class="hljs-string">&quot;-&quot;</span>, a, b)       <span class="hljs-comment">// subtract subtree b from subtree a</span>
  AST (<span class="hljs-string">&quot;*&quot;</span>, a, b)       <span class="hljs-comment">// multiply subtree a by subtree b</span>
  AST (<span class="hljs-string">&quot;/&quot;</span>, a, b)       <span class="hljs-comment">// divide subtree a from subtree b</span>
  AST (<span class="hljs-string">&quot;arg&quot;</span>, n)        <span class="hljs-comment">// reference to n-th argument, n integer</span>
  AST (<span class="hljs-string">&quot;imm&quot;</span>, n)        <span class="hljs-comment">// immediate value n, n integer</span></code></pre>
<pre style="display: none;"><code class="language-ocaml"><span class="hljs-keyword">type</span> ast =
  | <span class="hljs-type">Imm</span> <span class="hljs-keyword">of</span> <span class="hljs-built_in">int</span>  <span class="hljs-comment">(* immediate value *)</span>
  | <span class="hljs-type">Arg</span> <span class="hljs-keyword">of</span> <span class="hljs-built_in">int</span>  <span class="hljs-comment">(* reference to n-th argument *)</span>
  | <span class="hljs-type">Add</span> <span class="hljs-keyword">of</span> (ast * ast) <span class="hljs-comment">(* add first to second *)</span>
  | <span class="hljs-type">Sub</span> <span class="hljs-keyword">of</span> (ast * ast) <span class="hljs-comment">(* subtract second from first *)</span>
  | <span class="hljs-type">Mul</span> <span class="hljs-keyword">of</span> (ast * ast) <span class="hljs-comment">(* multiply first by second *)</span>
  | <span class="hljs-type">Div</span> <span class="hljs-keyword">of</span> (ast * ast) <span class="hljs-comment">(* divide first by second *)</span></code></pre>
<pre style="display: none;"><code class="language-c">  <span class="hljs-comment">// Each node is a struct of type &apos;AST&apos; and has the following fields:</span>
  <span class="hljs-comment">// &apos;enum op op&apos;, &apos;AST* a&apos;, &apos;AST* b&apos;, and &apos;int n&apos; (unused fields are 0)</span>
  Bin (add, a, b)       <span class="hljs-comment">// add subtree a to subtree b</span>
  Bin (sub, a, b)       <span class="hljs-comment">// subtract subtree b from subtree a</span>
  Bin (mul, a, b)       <span class="hljs-comment">// multiply subtree a by subtree b</span>
  Bin (div, a, b)       <span class="hljs-comment">// divide subtree a from subtree b</span>
  Arg (n)               <span class="hljs-comment">// reference to n-th argument, n integer</span>
  Imm (n)               <span class="hljs-comment">// immediate value n, n integer</span></code></pre>
<pre style="display: none;"><code class="language-rust">    Ast::BinOp(<span class="hljs-string">&quot;+&quot;</span>.to_string(), <span class="hljs-built_in">Box</span>::new(a), <span class="hljs-built_in">Box</span>::new(b) } <span class="hljs-comment">// add subtree a to subtree b</span>
    Ast::BinOp(<span class="hljs-string">&quot;-&quot;</span>.to_string(), <span class="hljs-built_in">Box</span>::new(a), <span class="hljs-built_in">Box</span>::new(b) } <span class="hljs-comment">// subtract subtree b from subtree a</span>
    Ast::BinOp(<span class="hljs-string">&quot;*&quot;</span>.to_string(), <span class="hljs-built_in">Box</span>::new(a), <span class="hljs-built_in">Box</span>::new(b) } <span class="hljs-comment">// multiply subtree a by subtree b</span>
    Ast::BinOp(<span class="hljs-string">&quot;/&quot;</span>.to_string(), <span class="hljs-built_in">Box</span>::new(a), <span class="hljs-built_in">Box</span>::new(b) } <span class="hljs-comment">// divide subtree a from subtree b</span>
    Ast::UnOp(<span class="hljs-string">&quot;arg&quot;</span>.to_string(), n) <span class="hljs-comment">// reference to n-th argument, n integer</span>
    Ast::UnOp(<span class="hljs-string">&quot;imm&quot;</span>.to_string(), n) <span class="hljs-comment">// immediate value n, n integer</span></code></pre>
<p>Note: arguments are indexed from zero.  So, for example, the function</p>
<p><code>[ x y ] ( x + y ) / 2</code> would look like:</p>
<pre><code class="language-javascript">    { <span class="hljs-string">&apos;op&apos;</span>: <span class="hljs-string">&apos;/&apos;</span>, <span class="hljs-string">&apos;a&apos;</span>: { <span class="hljs-string">&apos;op&apos;</span>: <span class="hljs-string">&apos;+&apos;</span>, <span class="hljs-string">&apos;a&apos;</span>: { <span class="hljs-string">&apos;op&apos;</span>: <span class="hljs-string">&apos;arg&apos;</span>, <span class="hljs-string">&apos;n&apos;</span>: <span class="hljs-number">0</span> },
                                   <span class="hljs-string">&apos;b&apos;</span>: { <span class="hljs-string">&apos;op&apos;</span>: <span class="hljs-string">&apos;arg&apos;</span>, <span class="hljs-string">&apos;n&apos;</span>: <span class="hljs-number">1</span> } },
                 <span class="hljs-string">&apos;b&apos;</span>: { <span class="hljs-string">&apos;op&apos;</span>: <span class="hljs-string">&apos;imm&apos;</span>, <span class="hljs-string">&apos;n&apos;</span>: <span class="hljs-number">2</span> } }</code></pre>
<pre style="display: none;"><code class="language-coffeescript">    { <span class="hljs-string">&apos;op&apos;</span>: <span class="hljs-string">&apos;/&apos;</span>, <span class="hljs-string">&apos;a&apos;</span>: { <span class="hljs-string">&apos;op&apos;</span>: <span class="hljs-string">&apos;+&apos;</span>, <span class="hljs-string">&apos;a&apos;</span>: { <span class="hljs-string">&apos;op&apos;</span>: <span class="hljs-string">&apos;arg&apos;</span>, <span class="hljs-string">&apos;n&apos;</span>: <span class="hljs-number">0</span> },
                                   <span class="hljs-string">&apos;b&apos;</span>: { <span class="hljs-string">&apos;op&apos;</span>: <span class="hljs-string">&apos;arg&apos;</span>, <span class="hljs-string">&apos;n&apos;</span>: <span class="hljs-number">1</span> } },
                 <span class="hljs-string">&apos;b&apos;</span>: { <span class="hljs-string">&apos;op&apos;</span>: <span class="hljs-string">&apos;imm&apos;</span>, <span class="hljs-string">&apos;n&apos;</span>: <span class="hljs-number">2</span> } }</code></pre>
<pre style="display: none;"><code class="language-python">    { <span class="hljs-string">&apos;op&apos;</span>: <span class="hljs-string">&apos;/&apos;</span>, <span class="hljs-string">&apos;a&apos;</span>: { <span class="hljs-string">&apos;op&apos;</span>: <span class="hljs-string">&apos;+&apos;</span>, <span class="hljs-string">&apos;a&apos;</span>: { <span class="hljs-string">&apos;op&apos;</span>: <span class="hljs-string">&apos;arg&apos;</span>, <span class="hljs-string">&apos;n&apos;</span>: <span class="hljs-number">0</span> },
                                   <span class="hljs-string">&apos;b&apos;</span>: { <span class="hljs-string">&apos;op&apos;</span>: <span class="hljs-string">&apos;arg&apos;</span>, <span class="hljs-string">&apos;n&apos;</span>: <span class="hljs-number">1</span> } },
                 <span class="hljs-string">&apos;b&apos;</span>: { <span class="hljs-string">&apos;op&apos;</span>: <span class="hljs-string">&apos;imm&apos;</span>, <span class="hljs-string">&apos;n&apos;</span>: <span class="hljs-number">2</span> } }</code></pre>
<pre style="display: none;"><code class="language-ruby">    { <span class="hljs-string">&apos;op&apos;</span>: <span class="hljs-string">&apos;/&apos;</span>, <span class="hljs-string">&apos;a&apos;</span>: { <span class="hljs-string">&apos;op&apos;</span>: <span class="hljs-string">&apos;+&apos;</span>, <span class="hljs-string">&apos;a&apos;</span>: { <span class="hljs-string">&apos;op&apos;</span>: <span class="hljs-string">&apos;arg&apos;</span>, <span class="hljs-string">&apos;n&apos;</span>: <span class="hljs-number">0</span> },
                                   <span class="hljs-string">&apos;b&apos;</span>: { <span class="hljs-string">&apos;op&apos;</span>: <span class="hljs-string">&apos;arg&apos;</span>, <span class="hljs-string">&apos;n&apos;</span>: <span class="hljs-number">1</span> } },
                 <span class="hljs-string">&apos;b&apos;</span>: { <span class="hljs-string">&apos;op&apos;</span>: <span class="hljs-string">&apos;imm&apos;</span>, <span class="hljs-string">&apos;n&apos;</span>: <span class="hljs-number">2</span> } }</code></pre>
<pre style="display: none;"><code class="language-php">    { <span class="hljs-string">&apos;op&apos;</span>: <span class="hljs-string">&apos;/&apos;</span>, <span class="hljs-string">&apos;a&apos;</span>: { <span class="hljs-string">&apos;op&apos;</span>: <span class="hljs-string">&apos;+&apos;</span>, <span class="hljs-string">&apos;a&apos;</span>: { <span class="hljs-string">&apos;op&apos;</span>: <span class="hljs-string">&apos;arg&apos;</span>, <span class="hljs-string">&apos;n&apos;</span>: <span class="hljs-number">0</span> },
                                   <span class="hljs-string">&apos;b&apos;</span>: { <span class="hljs-string">&apos;op&apos;</span>: <span class="hljs-string">&apos;arg&apos;</span>, <span class="hljs-string">&apos;n&apos;</span>: <span class="hljs-number">1</span> } },
                 <span class="hljs-string">&apos;b&apos;</span>: { <span class="hljs-string">&apos;op&apos;</span>: <span class="hljs-string">&apos;imm&apos;</span>, <span class="hljs-string">&apos;n&apos;</span>: <span class="hljs-number">2</span> } }</code></pre>
<pre style="display: none;"><code class="language-haskell">(<span class="hljs-type">Div</span> (<span class="hljs-type">Add</span> (<span class="hljs-type">Arg</span> <span class="hljs-number">0</span>) (<span class="hljs-type">Arg</span> <span class="hljs-number">1</span>))
     (<span class="hljs-type">Imm</span> <span class="hljs-number">2</span>))</code></pre>
<pre style="display: none;"><code class="language-java">  <span class="hljs-keyword">new</span> BinOp(<span class="hljs-string">&quot;/&quot;</span>, <span class="hljs-keyword">new</span> BinOp(<span class="hljs-string">&quot;+&quot;</span>, <span class="hljs-keyword">new</span> UnOp(<span class="hljs-string">&quot;arg&quot;</span>, <span class="hljs-number">0</span>), <span class="hljs-keyword">new</span> UnOp(<span class="hljs-string">&quot;arg&quot;</span>, <span class="hljs-number">1</span>)), <span class="hljs-keyword">new</span> UnOp(<span class="hljs-string">&quot;imm&quot;</span>, <span class="hljs-number">2</span>))</code></pre>
<pre style="display: none;"><code class="language-dart">  <span class="hljs-keyword">new</span> BinOp(<span class="hljs-string">&quot;/&quot;</span>, <span class="hljs-keyword">new</span> BinOp(<span class="hljs-string">&quot;+&quot;</span>, <span class="hljs-keyword">new</span> UnOp(<span class="hljs-string">&quot;arg&quot;</span>, <span class="hljs-number">0</span>), <span class="hljs-keyword">new</span> UnOp(<span class="hljs-string">&quot;arg&quot;</span>, <span class="hljs-number">1</span>)), <span class="hljs-keyword">new</span> UnOp(<span class="hljs-string">&quot;imm&quot;</span>, <span class="hljs-number">2</span>))</code></pre>
<pre style="display: none;"><code class="language-csharp">  <span class="hljs-keyword">new</span> BinOp(<span class="hljs-string">&quot;/&quot;</span>, <span class="hljs-keyword">new</span> BinOp(<span class="hljs-string">&quot;+&quot;</span>, <span class="hljs-keyword">new</span> UnOp(<span class="hljs-string">&quot;arg&quot;</span>, <span class="hljs-number">0</span>), <span class="hljs-keyword">new</span> UnOp(<span class="hljs-string">&quot;arg&quot;</span>, <span class="hljs-number">1</span>)), <span class="hljs-keyword">new</span> UnOp(<span class="hljs-string">&quot;imm&quot;</span>, <span class="hljs-number">2</span>))</code></pre>
<pre style="display: none;"><code class="language-cpp">  <span class="hljs-keyword">new</span> AST (<span class="hljs-string">&quot;/&quot;</span>, <span class="hljs-keyword">new</span> AST (<span class="hljs-string">&quot;+&quot;</span>, <span class="hljs-keyword">new</span> AST (<span class="hljs-string">&quot;arg&quot;</span>, <span class="hljs-number">0</span>), <span class="hljs-keyword">new</span> AST (<span class="hljs-string">&quot;arg&quot;</span>, <span class="hljs-number">1</span>)), <span class="hljs-keyword">new</span> AST (<span class="hljs-string">&quot;imm&quot;</span>, <span class="hljs-number">2</span>))</code></pre>
<pre style="display: none;"><code class="language-ocaml"><span class="hljs-type">Div</span>(<span class="hljs-type">Add</span>(<span class="hljs-type">Arg</span> <span class="hljs-number">0</span>,<span class="hljs-type">Arg</span> <span class="hljs-number">1</span>), <span class="hljs-type">Imm</span> <span class="hljs-number">2</span>)</code></pre>
<pre style="display: none;"><code class="language-c">  Bin (div, Bin (add, Arg (<span class="hljs-number">0</span>), Arg (<span class="hljs-number">1</span>)), Imm (<span class="hljs-number">2</span>))</code></pre>
<pre style="display: none;"><code class="language-rust">  Ast::BinOp(<span class="hljs-string">&quot;/&quot;</span>.to_string(),
    <span class="hljs-built_in">Box</span>::new(Ast::BinOp(<span class="hljs-string">&quot;+&quot;</span>.to_string(),
        <span class="hljs-built_in">Box</span>::new(Ast::UnOp(<span class="hljs-string">&quot;arg&quot;</span>.to_string(), <span class="hljs-number">0</span>)),
        <span class="hljs-built_in">Box</span>::new(Ast::UnOp(<span class="hljs-string">&quot;arg&quot;</span>.to_string(), <span class="hljs-number">1</span>)))),
    <span class="hljs-built_in">Box</span>::new(Ast::UnOp(<span class="hljs-string">&quot;imm&quot;</span>.to_string(), <span class="hljs-number">2</span>)))</code></pre>
<p>The second pass of the compiler will be called <code>pass2</code>.  This pass will take the output from <code>pass1</code> and return a new Abstract Syntax Tree (with the same format) with all constant expressions reduced as much as possible.  So, if for example, the function is <code>[ x ] x + 2*5</code>, the result of <code>pass1</code> would be:</p>
<pre><code class="language-javascript">    { <span class="hljs-string">&apos;op&apos;</span>: <span class="hljs-string">&apos;+&apos;</span>, <span class="hljs-string">&apos;a&apos;</span>: { <span class="hljs-string">&apos;op&apos;</span>: <span class="hljs-string">&apos;arg&apos;</span>, <span class="hljs-string">&apos;n&apos;</span>: <span class="hljs-number">0</span> },
                 <span class="hljs-string">&apos;b&apos;</span>: { <span class="hljs-string">&apos;op&apos;</span>: <span class="hljs-string">&apos;*&apos;</span>, <span class="hljs-string">&apos;a&apos;</span>: { <span class="hljs-string">&apos;op&apos;</span>: <span class="hljs-string">&apos;imm&apos;</span>, <span class="hljs-string">&apos;n&apos;</span>: <span class="hljs-number">2</span> },
                                   <span class="hljs-string">&apos;b&apos;</span>: { <span class="hljs-string">&apos;op&apos;</span>: <span class="hljs-string">&apos;imm&apos;</span>, <span class="hljs-string">&apos;n&apos;</span>: <span class="hljs-number">5</span> } } }</code></pre>
<pre style="display: none;"><code class="language-coffeescript">    { <span class="hljs-string">&apos;op&apos;</span>: <span class="hljs-string">&apos;+&apos;</span>, <span class="hljs-string">&apos;a&apos;</span>: { <span class="hljs-string">&apos;op&apos;</span>: <span class="hljs-string">&apos;arg&apos;</span>, <span class="hljs-string">&apos;n&apos;</span>: <span class="hljs-number">0</span> },
                 <span class="hljs-string">&apos;b&apos;</span>: { <span class="hljs-string">&apos;op&apos;</span>: <span class="hljs-string">&apos;*&apos;</span>, <span class="hljs-string">&apos;a&apos;</span>: { <span class="hljs-string">&apos;op&apos;</span>: <span class="hljs-string">&apos;imm&apos;</span>, <span class="hljs-string">&apos;n&apos;</span>: <span class="hljs-number">2</span> },
                                   <span class="hljs-string">&apos;b&apos;</span>: { <span class="hljs-string">&apos;op&apos;</span>: <span class="hljs-string">&apos;imm&apos;</span>, <span class="hljs-string">&apos;n&apos;</span>: <span class="hljs-number">5</span> } } }</code></pre>
<pre style="display: none;"><code class="language-python">    { <span class="hljs-string">&apos;op&apos;</span>: <span class="hljs-string">&apos;+&apos;</span>, <span class="hljs-string">&apos;a&apos;</span>: { <span class="hljs-string">&apos;op&apos;</span>: <span class="hljs-string">&apos;arg&apos;</span>, <span class="hljs-string">&apos;n&apos;</span>: <span class="hljs-number">0</span> },
                 <span class="hljs-string">&apos;b&apos;</span>: { <span class="hljs-string">&apos;op&apos;</span>: <span class="hljs-string">&apos;*&apos;</span>, <span class="hljs-string">&apos;a&apos;</span>: { <span class="hljs-string">&apos;op&apos;</span>: <span class="hljs-string">&apos;imm&apos;</span>, <span class="hljs-string">&apos;n&apos;</span>: <span class="hljs-number">2</span> },
                                   <span class="hljs-string">&apos;b&apos;</span>: { <span class="hljs-string">&apos;op&apos;</span>: <span class="hljs-string">&apos;imm&apos;</span>, <span class="hljs-string">&apos;n&apos;</span>: <span class="hljs-number">5</span> } } }</code></pre>
<pre style="display: none;"><code class="language-ruby">    { <span class="hljs-string">&apos;op&apos;</span>: <span class="hljs-string">&apos;+&apos;</span>, <span class="hljs-string">&apos;a&apos;</span>: { <span class="hljs-string">&apos;op&apos;</span>: <span class="hljs-string">&apos;arg&apos;</span>, <span class="hljs-string">&apos;n&apos;</span>: <span class="hljs-number">0</span> },
                 <span class="hljs-string">&apos;b&apos;</span>: { <span class="hljs-string">&apos;op&apos;</span>: <span class="hljs-string">&apos;*&apos;</span>, <span class="hljs-string">&apos;a&apos;</span>: { <span class="hljs-string">&apos;op&apos;</span>: <span class="hljs-string">&apos;imm&apos;</span>, <span class="hljs-string">&apos;n&apos;</span>: <span class="hljs-number">2</span> },
                                   <span class="hljs-string">&apos;b&apos;</span>: { <span class="hljs-string">&apos;op&apos;</span>: <span class="hljs-string">&apos;imm&apos;</span>, <span class="hljs-string">&apos;n&apos;</span>: <span class="hljs-number">5</span> } } }</code></pre>
<pre style="display: none;"><code class="language-php">    { <span class="hljs-string">&apos;op&apos;</span>: <span class="hljs-string">&apos;+&apos;</span>, <span class="hljs-string">&apos;a&apos;</span>: { <span class="hljs-string">&apos;op&apos;</span>: <span class="hljs-string">&apos;arg&apos;</span>, <span class="hljs-string">&apos;n&apos;</span>: <span class="hljs-number">0</span> },
                 <span class="hljs-string">&apos;b&apos;</span>: { <span class="hljs-string">&apos;op&apos;</span>: <span class="hljs-string">&apos;*&apos;</span>, <span class="hljs-string">&apos;a&apos;</span>: { <span class="hljs-string">&apos;op&apos;</span>: <span class="hljs-string">&apos;imm&apos;</span>, <span class="hljs-string">&apos;n&apos;</span>: <span class="hljs-number">2</span> },
                                   <span class="hljs-string">&apos;b&apos;</span>: { <span class="hljs-string">&apos;op&apos;</span>: <span class="hljs-string">&apos;imm&apos;</span>, <span class="hljs-string">&apos;n&apos;</span>: <span class="hljs-number">5</span> } } }</code></pre>
<pre style="display: none;"><code class="language-haskell">(<span class="hljs-type">Add</span> (<span class="hljs-type">Arg</span> <span class="hljs-number">0</span>)
     (<span class="hljs-type">Mul</span> (<span class="hljs-type">Imm</span> <span class="hljs-number">2</span>) (<span class="hljs-type">Imm</span> <span class="hljs-number">5</span>)))</code></pre>
<pre style="display: none;"><code class="language-java"><span class="hljs-keyword">new</span> BinOp(<span class="hljs-string">&quot;+&quot;</span>, <span class="hljs-keyword">new</span> UnOp(<span class="hljs-string">&quot;arg&quot;</span>, <span class="hljs-number">0</span>), <span class="hljs-keyword">new</span> BinOp(<span class="hljs-string">&quot;*&quot;</span>, <span class="hljs-keyword">new</span> UnOp(<span class="hljs-string">&quot;imm&quot;</span>, <span class="hljs-number">2</span>), <span class="hljs-keyword">new</span> UnOp(<span class="hljs-string">&quot;imm&quot;</span>, <span class="hljs-number">5</span>)))</code></pre>
<pre style="display: none;"><code class="language-dart"><span class="hljs-keyword">new</span> BinOp(<span class="hljs-string">&quot;+&quot;</span>, <span class="hljs-keyword">new</span> UnOp(<span class="hljs-string">&quot;arg&quot;</span>, <span class="hljs-number">0</span>), <span class="hljs-keyword">new</span> BinOp(<span class="hljs-string">&quot;*&quot;</span>, <span class="hljs-keyword">new</span> UnOp(<span class="hljs-string">&quot;imm&quot;</span>, <span class="hljs-number">2</span>), <span class="hljs-keyword">new</span> UnOp(<span class="hljs-string">&quot;imm&quot;</span>, <span class="hljs-number">5</span>)))</code></pre>
<pre style="display: none;"><code class="language-csharp"><span class="hljs-keyword">new</span> BinOp(<span class="hljs-string">&quot;+&quot;</span>, <span class="hljs-keyword">new</span> UnOp(<span class="hljs-string">&quot;arg&quot;</span>, <span class="hljs-number">0</span>), <span class="hljs-keyword">new</span> BinOp(<span class="hljs-string">&quot;*&quot;</span>, <span class="hljs-keyword">new</span> UnOp(<span class="hljs-string">&quot;imm&quot;</span>, <span class="hljs-number">2</span>), <span class="hljs-keyword">new</span> UnOp(<span class="hljs-string">&quot;imm&quot;</span>, <span class="hljs-number">5</span>)))</code></pre>
<pre style="display: none;"><code class="language-cpp"><span class="hljs-keyword">new</span> AST (<span class="hljs-string">&quot;+&quot;</span>, <span class="hljs-keyword">new</span> AST (<span class="hljs-string">&quot;arg&quot;</span>, <span class="hljs-number">0</span>), <span class="hljs-keyword">new</span> AST (<span class="hljs-string">&quot;*&quot;</span>, <span class="hljs-keyword">new</span> AST (<span class="hljs-string">&quot;imm&quot;</span>, <span class="hljs-number">2</span>), <span class="hljs-keyword">new</span> AST (<span class="hljs-string">&quot;imm&quot;</span>, <span class="hljs-number">5</span>)))</code></pre>
<pre style="display: none;"><code class="language-ocaml"><span class="hljs-type">Add</span>(<span class="hljs-type">Arg</span> <span class="hljs-number">0</span>, <span class="hljs-type">Mul</span>(<span class="hljs-type">Imm</span> <span class="hljs-number">2</span>, <span class="hljs-type">Imm</span> <span class="hljs-number">5</span>))</code></pre>
<pre style="display: none;"><code class="language-c">  Bin (add, Arg (<span class="hljs-number">0</span>), Bin (mul, Imm (<span class="hljs-number">2</span>), Imm (<span class="hljs-number">5</span>)))</code></pre>
<pre style="display: none;"><code class="language-rust">Ast::BinOp(<span class="hljs-string">&quot;+&quot;</span>.to_string(),
    <span class="hljs-built_in">Box</span>::new(Ast::UnOp(<span class="hljs-string">&quot;arg&quot;</span>.to_string(), <span class="hljs-number">0</span>)),
    <span class="hljs-built_in">Box</span>::new(Ast::BinOp(<span class="hljs-string">&quot;*&quot;</span>.to_string(),
        <span class="hljs-built_in">Box</span>::new(Ast::UnOp(<span class="hljs-string">&quot;imm&quot;</span>.to_string(), <span class="hljs-number">2</span>)),
        <span class="hljs-built_in">Box</span>::new(Ast::UnOp(<span class="hljs-string">&quot;imm&quot;</span>.to_string(), <span class="hljs-number">5</span>)))))</code></pre>
<p>This would be passed into <code>pass2</code> which would return:</p>
<pre><code class="language-javascript">    { <span class="hljs-string">&apos;op&apos;</span>: <span class="hljs-string">&apos;+&apos;</span>, <span class="hljs-string">&apos;a&apos;</span>: { <span class="hljs-string">&apos;op&apos;</span>: <span class="hljs-string">&apos;arg&apos;</span>, <span class="hljs-string">&apos;n&apos;</span>: <span class="hljs-number">0</span> },
                 <span class="hljs-string">&apos;b&apos;</span>: { <span class="hljs-string">&apos;op&apos;</span>: <span class="hljs-string">&apos;imm&apos;</span>, <span class="hljs-string">&apos;n&apos;</span>: <span class="hljs-number">10</span> } }</code></pre>
<pre style="display: none;"><code class="language-coffeescript">    { <span class="hljs-string">&apos;op&apos;</span>: <span class="hljs-string">&apos;+&apos;</span>, <span class="hljs-string">&apos;a&apos;</span>: { <span class="hljs-string">&apos;op&apos;</span>: <span class="hljs-string">&apos;arg&apos;</span>, <span class="hljs-string">&apos;n&apos;</span>: <span class="hljs-number">0</span> },
                 <span class="hljs-string">&apos;b&apos;</span>: { <span class="hljs-string">&apos;op&apos;</span>: <span class="hljs-string">&apos;imm&apos;</span>, <span class="hljs-string">&apos;n&apos;</span>: <span class="hljs-number">10</span> } }</code></pre>
<pre style="display: none;"><code class="language-python">    { <span class="hljs-string">&apos;op&apos;</span>: <span class="hljs-string">&apos;+&apos;</span>, <span class="hljs-string">&apos;a&apos;</span>: { <span class="hljs-string">&apos;op&apos;</span>: <span class="hljs-string">&apos;arg&apos;</span>, <span class="hljs-string">&apos;n&apos;</span>: <span class="hljs-number">0</span> },
                 <span class="hljs-string">&apos;b&apos;</span>: { <span class="hljs-string">&apos;op&apos;</span>: <span class="hljs-string">&apos;imm&apos;</span>, <span class="hljs-string">&apos;n&apos;</span>: <span class="hljs-number">10</span> } }</code></pre>
<pre style="display: none;"><code class="language-ruby">    { <span class="hljs-string">&apos;op&apos;</span>: <span class="hljs-string">&apos;+&apos;</span>, <span class="hljs-string">&apos;a&apos;</span>: { <span class="hljs-string">&apos;op&apos;</span>: <span class="hljs-string">&apos;arg&apos;</span>, <span class="hljs-string">&apos;n&apos;</span>: <span class="hljs-number">0</span> },
                 <span class="hljs-string">&apos;b&apos;</span>: { <span class="hljs-string">&apos;op&apos;</span>: <span class="hljs-string">&apos;imm&apos;</span>, <span class="hljs-string">&apos;n&apos;</span>: <span class="hljs-number">10</span> } }</code></pre>
<pre style="display: none;"><code class="language-php">    { <span class="hljs-string">&apos;op&apos;</span>: <span class="hljs-string">&apos;+&apos;</span>, <span class="hljs-string">&apos;a&apos;</span>: { <span class="hljs-string">&apos;op&apos;</span>: <span class="hljs-string">&apos;arg&apos;</span>, <span class="hljs-string">&apos;n&apos;</span>: <span class="hljs-number">0</span> },
                 <span class="hljs-string">&apos;b&apos;</span>: { <span class="hljs-string">&apos;op&apos;</span>: <span class="hljs-string">&apos;imm&apos;</span>, <span class="hljs-string">&apos;n&apos;</span>: <span class="hljs-number">10</span> } }</code></pre>
<pre style="display: none;"><code class="language-haskell">(<span class="hljs-type">Add</span> (<span class="hljs-type">Arg</span> <span class="hljs-number">0</span>) (<span class="hljs-type">Imm</span> <span class="hljs-number">10</span>))</code></pre>
<pre style="display: none;"><code class="language-java"><span class="hljs-keyword">new</span> BinOp(<span class="hljs-string">&quot;+&quot;</span>, <span class="hljs-keyword">new</span> UnOp(<span class="hljs-string">&quot;arg&quot;</span>, <span class="hljs-number">0</span>), <span class="hljs-keyword">new</span> UnOp(<span class="hljs-string">&quot;imm&quot;</span>, <span class="hljs-number">10</span>))</code></pre>
<pre style="display: none;"><code class="language-dart"><span class="hljs-keyword">new</span> BinOp(<span class="hljs-string">&quot;+&quot;</span>, <span class="hljs-keyword">new</span> UnOp(<span class="hljs-string">&quot;arg&quot;</span>, <span class="hljs-number">0</span>), <span class="hljs-keyword">new</span> UnOp(<span class="hljs-string">&quot;imm&quot;</span>, <span class="hljs-number">10</span>))</code></pre>
<pre style="display: none;"><code class="language-csharp"><span class="hljs-keyword">new</span> BinOp(<span class="hljs-string">&quot;+&quot;</span>, <span class="hljs-keyword">new</span> UnOp(<span class="hljs-string">&quot;arg&quot;</span>, <span class="hljs-number">0</span>), <span class="hljs-keyword">new</span> UnOp(<span class="hljs-string">&quot;imm&quot;</span>, <span class="hljs-number">10</span>))</code></pre>
<pre style="display: none;"><code class="language-cpp"><span class="hljs-keyword">new</span> AST (<span class="hljs-string">&quot;+&quot;</span>, <span class="hljs-keyword">new</span> AST (<span class="hljs-string">&quot;arg&quot;</span>, <span class="hljs-number">0</span>), <span class="hljs-keyword">new</span> AST (<span class="hljs-string">&quot;imm&quot;</span>, <span class="hljs-number">10</span>))</code></pre>
<pre style="display: none;"><code class="language-ocaml"><span class="hljs-type">Add</span>(<span class="hljs-type">Arg</span> <span class="hljs-number">0</span>, <span class="hljs-type">Imm</span> <span class="hljs-number">10</span>)</code></pre>
<pre style="display: none;"><code class="language-c">  Bin (add, Arg (<span class="hljs-number">0</span>), Imm (<span class="hljs-number">10</span>))</code></pre>
<pre style="display: none;"><code class="language-rust">Ast::BinOp(<span class="hljs-string">&quot;+&quot;</span>.to_string(),
    <span class="hljs-built_in">Box</span>::new(Ast::UnOp(<span class="hljs-string">&quot;arg&quot;</span>.to_string(), <span class="hljs-number">0</span>)),
    <span class="hljs-built_in">Box</span>::new(<span class="hljs-built_in">Box</span>::new(Ast::UnOp(<span class="hljs-string">&quot;imm&quot;</span>.to_string(), <span class="hljs-number">10</span>)))),</code></pre>
<p>The third pass of the compiler is <code>pass3</code>.  The <code>pass3</code> method takes in an Abstract Syntax Tree and returns an array of strings.  Each string is an assembly directive.  You are working on a small processor with two registers (<code>R0</code> and <code>R1</code>), a stack, and an array of input arguments.  The result of a function is expected to be in <code>R0</code>.  The processor supports the following instructions:</p>
<pre><code>    &quot;IM n&quot;     // load the constant value n into R0
    &quot;AR n&quot;     // load the n-th input argument into R0
    &quot;SW&quot;       // swap R0 and R1
    &quot;PU&quot;       // push R0 onto the stack
    &quot;PO&quot;       // pop the top value off of the stack into R0
    &quot;AD&quot;       // add R1 to R0 and put the result in R0
    &quot;SU&quot;       // subtract R1 from R0 and put the result in R0
    &quot;MU&quot;       // multiply R0 by R1 and put the result in R0
    &quot;DI&quot;       // divide R0 by R1 and put the result in R0</code></pre><p>So, one possible return value from <code>pass3</code> given the Abstract Syntax Tree shown above from <code>pass2</code> is:</p>
<pre><code>    [ &quot;IM 10&quot;, &quot;SW&quot;, &quot;AR 0&quot;, &quot;AD&quot; ]</code></pre><p>Here is a simulator for the target machine.  It takes an array of assembly instructions and an array of arguments and returns the result.</p>
<pre><code class="language-javascript"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">simulate</span>(<span class="hljs-params">asm, args</span>) </span>{
      <span class="hljs-keyword">var</span> r0 = <span class="hljs-literal">undefined</span>;
      <span class="hljs-keyword">var</span> r1 = <span class="hljs-literal">undefined</span>;
      <span class="hljs-keyword">var</span> stack = [];
      asm.forEach(<span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params">instruct</span>) </span>{
        <span class="hljs-keyword">var</span> match = instruct.match(<span class="hljs-regexp">/(IM|AR)\s+(\d+)/</span>) || [ <span class="hljs-number">0</span>, instruct, <span class="hljs-number">0</span> ];
        <span class="hljs-keyword">var</span> ins = match[<span class="hljs-number">1</span>];
        <span class="hljs-keyword">var</span> n = match[<span class="hljs-number">2</span>] | <span class="hljs-number">0</span>;

        <span class="hljs-keyword">if</span> (ins == <span class="hljs-string">&apos;IM&apos;</span>)   { r0 = n; }
        <span class="hljs-keyword">else</span> <span class="hljs-keyword">if</span> (ins == <span class="hljs-string">&apos;AR&apos;</span>) { r0 = args[n]; }
        <span class="hljs-keyword">else</span> <span class="hljs-keyword">if</span> (ins == <span class="hljs-string">&apos;SW&apos;</span>) { <span class="hljs-keyword">var</span> tmp = r0; r0 = r1; r1 = tmp; }
        <span class="hljs-keyword">else</span> <span class="hljs-keyword">if</span> (ins == <span class="hljs-string">&apos;PU&apos;</span>) { stack.push(r0); }
        <span class="hljs-keyword">else</span> <span class="hljs-keyword">if</span> (ins == <span class="hljs-string">&apos;PO&apos;</span>) { r0 = stack.pop(); }
        <span class="hljs-keyword">else</span> <span class="hljs-keyword">if</span> (ins == <span class="hljs-string">&apos;AD&apos;</span>) { r0 += r1; }
        <span class="hljs-keyword">else</span> <span class="hljs-keyword">if</span> (ins == <span class="hljs-string">&apos;SU&apos;</span>) { r0 -= r1; }
        <span class="hljs-keyword">else</span> <span class="hljs-keyword">if</span> (ins == <span class="hljs-string">&apos;MU&apos;</span>) { r0 *= r1; }
        <span class="hljs-keyword">else</span> <span class="hljs-keyword">if</span> (ins == <span class="hljs-string">&apos;DI&apos;</span>) { r0 /= r1; }
      });
      <span class="hljs-keyword">return</span> r0;
    }</code></pre>
<pre style="display: none;"><code class="language-coffeescript"><span class="hljs-function"><span class="hljs-title">simulate</span> = <span class="hljs-params">(asm, args)</span> -&gt;</span>
  r0 = <span class="hljs-literal">undefined</span>;
  r1 = <span class="hljs-literal">undefined</span>;
  stack = [];
<span class="hljs-function">  <span class="hljs-title">swap</span> = <span class="hljs-params">()</span> -&gt;</span> tmp = r0; r0 = r1; r1 = tmp;
  <span class="hljs-keyword">for</span> instruct <span class="hljs-keyword">in</span> asm
    match = instruct.match(<span class="hljs-regexp">/(IM|AR)\s+(\d+)/</span>) || [ <span class="hljs-number">0</span>, instruct, <span class="hljs-number">0</span> ];
    ins = match[<span class="hljs-number">1</span>];
    n = match[<span class="hljs-number">2</span>] | <span class="hljs-number">0</span>;

    <span class="hljs-keyword">if</span> (ins == <span class="hljs-string">&apos;IM&apos;</span>)      <span class="hljs-keyword">then</span> r0 = n
    <span class="hljs-keyword">else</span> <span class="hljs-keyword">if</span> (ins == <span class="hljs-string">&apos;AR&apos;</span>) <span class="hljs-keyword">then</span> r0 = args[n]
    <span class="hljs-keyword">else</span> <span class="hljs-keyword">if</span> (ins == <span class="hljs-string">&apos;SW&apos;</span>) <span class="hljs-keyword">then</span> swap()
    <span class="hljs-keyword">else</span> <span class="hljs-keyword">if</span> (ins == <span class="hljs-string">&apos;PU&apos;</span>) <span class="hljs-keyword">then</span> stack.push(r0)
    <span class="hljs-keyword">else</span> <span class="hljs-keyword">if</span> (ins == <span class="hljs-string">&apos;PO&apos;</span>) <span class="hljs-keyword">then</span> r0 = stack.pop()
    <span class="hljs-keyword">else</span> <span class="hljs-keyword">if</span> (ins == <span class="hljs-string">&apos;AD&apos;</span>) <span class="hljs-keyword">then</span> r0 += r1
    <span class="hljs-keyword">else</span> <span class="hljs-keyword">if</span> (ins == <span class="hljs-string">&apos;SU&apos;</span>) <span class="hljs-keyword">then</span> r0 -= r1
    <span class="hljs-keyword">else</span> <span class="hljs-keyword">if</span> (ins == <span class="hljs-string">&apos;MU&apos;</span>) <span class="hljs-keyword">then</span> r0 *= r1
    <span class="hljs-keyword">else</span> <span class="hljs-keyword">if</span> (ins == <span class="hljs-string">&apos;DI&apos;</span>) <span class="hljs-keyword">then</span> r0 /= r1
  r0</code></pre>
<pre style="display: none;"><code class="language-python"><span class="hljs-function"><span class="hljs-keyword">def</span> <span class="hljs-title">simulate</span><span class="hljs-params">(asm, argv)</span>:</span>
    r0, r1 = <span class="hljs-literal">None</span>, <span class="hljs-literal">None</span>
    stack = []
    <span class="hljs-keyword">for</span> ins <span class="hljs-keyword">in</span> asm:
        <span class="hljs-keyword">if</span> ins[:<span class="hljs-number">2</span>] == <span class="hljs-string">&apos;IM&apos;</span> <span class="hljs-keyword">or</span> ins[:<span class="hljs-number">2</span>] == <span class="hljs-string">&apos;AR&apos;</span>:
            ins, n = ins[:<span class="hljs-number">2</span>], int(ins[<span class="hljs-number">2</span>:])
        <span class="hljs-keyword">if</span> ins == <span class="hljs-string">&apos;IM&apos;</span>:   r0 = n
        <span class="hljs-keyword">elif</span> ins == <span class="hljs-string">&apos;AR&apos;</span>: r0 = argv[n]
        <span class="hljs-keyword">elif</span> ins == <span class="hljs-string">&apos;SW&apos;</span>: r0, r1 = r1, r0
        <span class="hljs-keyword">elif</span> ins == <span class="hljs-string">&apos;PU&apos;</span>: stack.append(r0)
        <span class="hljs-keyword">elif</span> ins == <span class="hljs-string">&apos;PO&apos;</span>: r0 = stack.pop()
        <span class="hljs-keyword">elif</span> ins == <span class="hljs-string">&apos;AD&apos;</span>: r0 += r1
        <span class="hljs-keyword">elif</span> ins == <span class="hljs-string">&apos;SU&apos;</span>: r0 -= r1
        <span class="hljs-keyword">elif</span> ins == <span class="hljs-string">&apos;MU&apos;</span>: r0 *= r1
        <span class="hljs-keyword">elif</span> ins == <span class="hljs-string">&apos;DI&apos;</span>: r0 /= r1
    <span class="hljs-keyword">return</span> r0</code></pre>
<pre style="display: none;"><code class="language-ruby"><span class="hljs-function"><span class="hljs-keyword">def</span> <span class="hljs-title">simulate</span><span class="hljs-params">(asm, argv)</span></span>
    r<span class="hljs-number">0</span>, r1 = <span class="hljs-number">0</span>, <span class="hljs-number">0</span>
    stack = []
    asm.each <span class="hljs-keyword">do</span> <span class="hljs-params">|ins|</span>
        <span class="hljs-keyword">if</span> ins[<span class="hljs-number">0</span>..<span class="hljs-number">1</span>] == <span class="hljs-string">&apos;IM&apos;</span> <span class="hljs-keyword">or</span> ins[<span class="hljs-number">0</span>..<span class="hljs-number">1</span>] == <span class="hljs-string">&apos;AR&apos;</span>
            ins, n = ins[<span class="hljs-number">0</span>..<span class="hljs-number">1</span>], ins[<span class="hljs-number">2</span>..-<span class="hljs-number">1</span>].to_i
        <span class="hljs-keyword">end</span>
        <span class="hljs-keyword">if</span> ins == <span class="hljs-string">&apos;IM&apos;</span>    <span class="hljs-keyword">then</span> r<span class="hljs-number">0</span> = n
        <span class="hljs-keyword">elsif</span> ins == <span class="hljs-string">&apos;AR&apos;</span> <span class="hljs-keyword">then</span> r<span class="hljs-number">0</span> = argv[n]
        <span class="hljs-keyword">elsif</span> ins == <span class="hljs-string">&apos;SW&apos;</span> <span class="hljs-keyword">then</span> r<span class="hljs-number">0</span>, r1 = r1, r<span class="hljs-number">0</span>
        <span class="hljs-keyword">elsif</span> ins == <span class="hljs-string">&apos;PU&apos;</span> <span class="hljs-keyword">then</span> stack.push(r<span class="hljs-number">0</span>)
        <span class="hljs-keyword">elsif</span> ins == <span class="hljs-string">&apos;PO&apos;</span> <span class="hljs-keyword">then</span> r<span class="hljs-number">0</span> = stack.pop()
        <span class="hljs-keyword">elsif</span> ins == <span class="hljs-string">&apos;AD&apos;</span> <span class="hljs-keyword">then</span> r<span class="hljs-number">0</span> += r1
        <span class="hljs-keyword">elsif</span> ins == <span class="hljs-string">&apos;SU&apos;</span> <span class="hljs-keyword">then</span> r<span class="hljs-number">0</span> -= r1
        <span class="hljs-keyword">elsif</span> ins == <span class="hljs-string">&apos;MU&apos;</span> <span class="hljs-keyword">then</span> r<span class="hljs-number">0</span> *= r1
        <span class="hljs-keyword">elsif</span> ins == <span class="hljs-string">&apos;DI&apos;</span> <span class="hljs-keyword">then</span> r<span class="hljs-number">0</span> /= r1
        <span class="hljs-keyword">end</span>
    <span class="hljs-keyword">end</span>
    <span class="hljs-keyword">return</span> r<span class="hljs-number">0</span>
<span class="hljs-keyword">end</span></code></pre>
<pre style="display: none;"><code class="language-php"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">simulate</span><span class="hljs-params">($asm, $argv)</span> </span>{
    <span class="hljs-keyword">list</span>($r0, $r1) = [<span class="hljs-number">0</span>, <span class="hljs-number">0</span>];
    $stack = [];
    <span class="hljs-keyword">foreach</span> ($asm <span class="hljs-keyword">as</span> $ins) {
        <span class="hljs-keyword">if</span> (substr($ins, <span class="hljs-number">0</span>, <span class="hljs-number">2</span>) == <span class="hljs-string">&apos;IM&apos;</span> || substr($ins, <span class="hljs-number">0</span>, <span class="hljs-number">2</span>) == <span class="hljs-string">&apos;AR&apos;</span>) {
            <span class="hljs-keyword">list</span>($ins, $n) = [substr($ins, <span class="hljs-number">0</span>, <span class="hljs-number">2</span>), intval(substr($ins, <span class="hljs-number">2</span>))];
        }
        <span class="hljs-keyword">if</span> ($ins == <span class="hljs-string">&apos;IM&apos;</span>)      $r0 = $n;
        <span class="hljs-keyword">else</span> <span class="hljs-keyword">if</span> ($ins == <span class="hljs-string">&apos;AR&apos;</span>) $r0 = $argv[$n];
        <span class="hljs-keyword">else</span> <span class="hljs-keyword">if</span> ($ins == <span class="hljs-string">&apos;SW&apos;</span>) <span class="hljs-keyword">list</span>($r0, $r1) = [$r1, $r0];
        <span class="hljs-keyword">else</span> <span class="hljs-keyword">if</span> ($ins == <span class="hljs-string">&apos;PU&apos;</span>) array_push($stack, $r0);
        <span class="hljs-keyword">else</span> <span class="hljs-keyword">if</span> ($ins == <span class="hljs-string">&apos;PO&apos;</span>) $r0 = array_pop($stack);
        <span class="hljs-keyword">else</span> <span class="hljs-keyword">if</span> ($ins == <span class="hljs-string">&apos;AD&apos;</span>) $r0 += $r1;
        <span class="hljs-keyword">else</span> <span class="hljs-keyword">if</span> ($ins == <span class="hljs-string">&apos;SU&apos;</span>) $r0 -= $r1;
        <span class="hljs-keyword">else</span> <span class="hljs-keyword">if</span> ($ins == <span class="hljs-string">&apos;MU&apos;</span>) $r0 *= $r1;
        <span class="hljs-keyword">else</span> <span class="hljs-keyword">if</span> ($ins == <span class="hljs-string">&apos;DI&apos;</span>) $r0 /= $r1;
    }
    <span class="hljs-keyword">return</span> $r0;
}</code></pre>
<pre style="display: none;"><code class="language-haskell"><span class="hljs-title">simulate</span> :: [<span class="hljs-type">String</span>] -&gt; [<span class="hljs-type">Int</span>] -&gt; <span class="hljs-type">Int</span>
<span class="hljs-title">simulate</span> asm argv = takeR0 $ foldl&apos; step (<span class="hljs-number">0</span>, <span class="hljs-number">0</span>, []) asm <span class="hljs-keyword">where</span>
  step (r0,r1,stack) ins =
    <span class="hljs-keyword">case</span> ins <span class="hljs-keyword">of</span>
      (&apos;<span class="hljs-type">I&apos;</span>:&apos;<span class="hljs-type">M&apos;</span>:xs) -&gt; (read xs, r1, stack)
      (&apos;<span class="hljs-type">A&apos;</span>:&apos;<span class="hljs-type">R&apos;</span>:xs) -&gt; (argv !! n, r1, stack) <span class="hljs-keyword">where</span> n = read xs
      <span class="hljs-string">&quot;SW&quot;</span> -&gt; (r1, r0, stack)
      <span class="hljs-string">&quot;PU&quot;</span> -&gt; (r0, r1, r0:stack)
      <span class="hljs-string">&quot;PO&quot;</span> -&gt; (head stack, r1, tail stack)
      <span class="hljs-string">&quot;AD&quot;</span> -&gt; (r0 + r1, r1, stack)
      <span class="hljs-string">&quot;SU&quot;</span> -&gt; (r0 - r1, r1, stack)
      <span class="hljs-string">&quot;MU&quot;</span> -&gt; (r0 * r1, r1, stack)
      <span class="hljs-string">&quot;DI&quot;</span> -&gt; (r0 `div` r1, r1, stack)
  takeR0 (r0,_,_) = r0</code></pre>
<pre style="display: none;"><code class="language-dart">
<span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">Simulator</span> </span>{
  <span class="hljs-keyword">static</span> <span class="hljs-built_in">int</span> simulate(<span class="hljs-built_in">List</span>&lt;<span class="hljs-built_in">String</span>&gt; asm, <span class="hljs-built_in">List</span>&lt;<span class="hljs-built_in">int</span>&gt; argv) {
    <span class="hljs-built_in">int</span> r0 = <span class="hljs-number">0</span>;
    <span class="hljs-built_in">int</span> r1 = <span class="hljs-number">0</span>;
    <span class="hljs-built_in">List</span>&lt;<span class="hljs-built_in">int</span>&gt; stack = <span class="hljs-keyword">new</span> <span class="hljs-built_in">List</span>();
    asm.forEach((ins) {
      <span class="hljs-keyword">switch</span> (ins.substring(<span class="hljs-number">0</span>, <span class="hljs-number">2</span>)) {
        <span class="hljs-keyword">case</span> <span class="hljs-string">&quot;IM&quot;</span>:
          r0 = <span class="hljs-built_in">int</span>.parse(ins.substring(<span class="hljs-number">2</span>).trim());
          <span class="hljs-keyword">break</span>;
        <span class="hljs-keyword">case</span> <span class="hljs-string">&quot;AR&quot;</span>:
          r0 = argv[<span class="hljs-built_in">int</span>.parse(ins.substring(<span class="hljs-number">2</span>).trim())];
          <span class="hljs-keyword">break</span>;
        <span class="hljs-keyword">case</span> <span class="hljs-string">&quot;SW&quot;</span>:
          <span class="hljs-built_in">int</span> tmp = r0;
          r0 = r1;
          r1 = tmp;
          <span class="hljs-keyword">break</span>;
        <span class="hljs-keyword">case</span> <span class="hljs-string">&quot;PU&quot;</span>:
          stack.add(r0);
          <span class="hljs-keyword">break</span>;
        <span class="hljs-keyword">case</span> <span class="hljs-string">&quot;PO&quot;</span>:
          r0 = stack.removeLast();
          <span class="hljs-keyword">break</span>;
        <span class="hljs-keyword">case</span> <span class="hljs-string">&quot;AD&quot;</span>:
          r0 += r1;
          <span class="hljs-keyword">break</span>;
        <span class="hljs-keyword">case</span> <span class="hljs-string">&quot;SU&quot;</span>:
          r0 -= r1;
          <span class="hljs-keyword">break</span>;
        <span class="hljs-keyword">case</span> <span class="hljs-string">&quot;MU&quot;</span>:
          r0 *= r1;
          <span class="hljs-keyword">break</span>;
        <span class="hljs-keyword">case</span> <span class="hljs-string">&quot;DI&quot;</span>:
          r0 ~/= r1;
          <span class="hljs-keyword">break</span>;
      }
    });
    <span class="hljs-keyword">return</span> r0;
  }
}</code></pre>
<pre style="display: none;"><code class="language-java"><span class="hljs-keyword">import</span> java.util.Deque;
<span class="hljs-keyword">import</span> java.util.LinkedList;
<span class="hljs-keyword">import</span> java.util.List;

<span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">Simulator</span> </span>{
  <span class="hljs-function"><span class="hljs-keyword">public</span> <span class="hljs-keyword">static</span> <span class="hljs-keyword">int</span> <span class="hljs-title">simulate</span><span class="hljs-params">(List&lt;String&gt; asm, <span class="hljs-keyword">int</span>... argv)</span> </span>{
    <span class="hljs-keyword">int</span> r0 = <span class="hljs-number">0</span>;
    <span class="hljs-keyword">int</span> r1 = <span class="hljs-number">0</span>;
    Deque&lt;Integer&gt; stack = <span class="hljs-keyword">new</span> LinkedList&lt;&gt;();
    <span class="hljs-keyword">for</span> (String ins : asm) {
      String code = ins.replaceAll(<span class="hljs-string">&quot;\\s+[0-9]+&quot;</span>, <span class="hljs-string">&quot;&quot;</span>);
      <span class="hljs-keyword">switch</span> (code) {
        <span class="hljs-keyword">case</span> <span class="hljs-string">&quot;IM&quot;</span>: r0 = Integer.parseInt(ins.substring(<span class="hljs-number">2</span>).trim()); <span class="hljs-keyword">break</span>;
        <span class="hljs-keyword">case</span> <span class="hljs-string">&quot;AR&quot;</span>: r0 = argv[Integer.parseInt(ins.substring(<span class="hljs-number">2</span>).trim())]; <span class="hljs-keyword">break</span>;
        <span class="hljs-keyword">case</span> <span class="hljs-string">&quot;SW&quot;</span>: <span class="hljs-keyword">int</span> tmp = r0; r0 = r1; r1 = tmp; <span class="hljs-keyword">break</span>;
        <span class="hljs-keyword">case</span> <span class="hljs-string">&quot;PU&quot;</span>: stack.addLast(r0); <span class="hljs-keyword">break</span>;
        <span class="hljs-keyword">case</span> <span class="hljs-string">&quot;PO&quot;</span>: r0 = stack.removeLast(); <span class="hljs-keyword">break</span>;
        <span class="hljs-keyword">case</span> <span class="hljs-string">&quot;AD&quot;</span>: r0 += r1; <span class="hljs-keyword">break</span>;
        <span class="hljs-keyword">case</span> <span class="hljs-string">&quot;SU&quot;</span>: r0 -= r1; <span class="hljs-keyword">break</span>;
        <span class="hljs-keyword">case</span> <span class="hljs-string">&quot;MU&quot;</span>: r0 *= r1; <span class="hljs-keyword">break</span>;
        <span class="hljs-keyword">case</span> <span class="hljs-string">&quot;DI&quot;</span>: r0 /= r1; <span class="hljs-keyword">break</span>;
      }
    }
    <span class="hljs-keyword">return</span> r0;
  }
}</code></pre>
<pre style="display: none;"><code class="language-csharp"><span class="hljs-keyword">using</span> System;
<span class="hljs-keyword">using</span> System.Collections.Generic;

<span class="hljs-keyword">public</span> <span class="hljs-keyword">class</span> <span class="hljs-title">Simulator</span>
{
  <span class="hljs-function"><span class="hljs-keyword">public</span> <span class="hljs-keyword">static</span> <span class="hljs-keyword">int</span> <span class="hljs-title">simulate</span>(<span class="hljs-params">List&lt;<span class="hljs-keyword">string</span>&gt; asm, <span class="hljs-keyword">int</span>[] argv</span>)</span>
  {
    <span class="hljs-keyword">int</span> r0 = <span class="hljs-number">0</span>;
    <span class="hljs-keyword">int</span> r1 = <span class="hljs-number">0</span>;
    List&lt;<span class="hljs-keyword">int</span>&gt; stack = <span class="hljs-keyword">new</span> List&lt;<span class="hljs-keyword">int</span>&gt;();
    <span class="hljs-keyword">foreach</span> (<span class="hljs-keyword">string</span> ins <span class="hljs-keyword">in</span> asm)
    {
      <span class="hljs-keyword">string</span> code = ins.Substring(<span class="hljs-number">0</span>,<span class="hljs-number">2</span>);
      <span class="hljs-keyword">switch</span> (code)
      {
        <span class="hljs-keyword">case</span> <span class="hljs-string">&quot;IM&quot;</span>: r0 = Int32.Parse(ins.Substring(<span class="hljs-number">2</span>).Trim()); <span class="hljs-keyword">break</span>;
        <span class="hljs-keyword">case</span> <span class="hljs-string">&quot;AR&quot;</span>: r0 = argv[Int32.Parse(ins.Substring(<span class="hljs-number">2</span>).Trim())]; <span class="hljs-keyword">break</span>;
        <span class="hljs-keyword">case</span> <span class="hljs-string">&quot;SW&quot;</span>: <span class="hljs-keyword">int</span> tmp = r0; r0 = r1; r1 = tmp; <span class="hljs-keyword">break</span>;
        <span class="hljs-keyword">case</span> <span class="hljs-string">&quot;PU&quot;</span>: stack.Add(r0); <span class="hljs-keyword">break</span>;
        <span class="hljs-keyword">case</span> <span class="hljs-string">&quot;PO&quot;</span>: r0 = stack[stack.Count - <span class="hljs-number">1</span>]; stack.RemoveAt(stack.Count - <span class="hljs-number">1</span>); <span class="hljs-keyword">break</span>;
        <span class="hljs-keyword">case</span> <span class="hljs-string">&quot;AD&quot;</span>: r0 += r1; <span class="hljs-keyword">break</span>;
        <span class="hljs-keyword">case</span> <span class="hljs-string">&quot;SU&quot;</span>: r0 -= r1; <span class="hljs-keyword">break</span>;
        <span class="hljs-keyword">case</span> <span class="hljs-string">&quot;MU&quot;</span>: r0 *= r1; <span class="hljs-keyword">break</span>;
        <span class="hljs-keyword">case</span> <span class="hljs-string">&quot;DI&quot;</span>: r0 /= r1; <span class="hljs-keyword">break</span>;
      }
    }
    <span class="hljs-keyword">return</span> r0;
  }
}</code></pre>
<pre style="display: none;"><code class="language-cpp"><span class="hljs-meta">#<span class="hljs-meta-keyword">include</span> <span class="hljs-meta-string">&lt;vector&gt;</span></span>
<span class="hljs-meta">#<span class="hljs-meta-keyword">include</span> <span class="hljs-meta-string">&lt;stack&gt;</span></span>
<span class="hljs-meta">#<span class="hljs-meta-keyword">include</span> <span class="hljs-meta-string">&lt;string&gt;</span></span>
<span class="hljs-meta">#<span class="hljs-meta-keyword">include</span> <span class="hljs-meta-string">&lt;utility&gt;</span></span>

<span class="hljs-keyword">using</span> <span class="hljs-keyword">namespace</span> <span class="hljs-built_in">std</span>;

<span class="hljs-function"><span class="hljs-keyword">int</span> <span class="hljs-title">simulate</span> <span class="hljs-params">(<span class="hljs-keyword">const</span> <span class="hljs-built_in">vector</span> &lt;<span class="hljs-built_in">string</span>&gt; &amp;assembly, <span class="hljs-keyword">const</span> <span class="hljs-built_in">vector</span> &lt;<span class="hljs-keyword">int</span>&gt; &amp;argv)</span> </span>{
  <span class="hljs-keyword">int</span> r0 = <span class="hljs-number">0</span>, r1 = <span class="hljs-number">0</span>;
  <span class="hljs-built_in">stack</span> &lt;<span class="hljs-keyword">int</span>&gt; istack;
  <span class="hljs-keyword">for</span> (<span class="hljs-keyword">auto</span> &amp;ins : assembly) {
    <span class="hljs-built_in">string</span> code = ins.substr (<span class="hljs-number">0</span>, <span class="hljs-number">2</span>);
         <span class="hljs-keyword">if</span> (code == <span class="hljs-string">&quot;IM&quot;</span>) { r0 = stoi (ins.substr (<span class="hljs-number">3</span>)); }
    <span class="hljs-keyword">else</span> <span class="hljs-keyword">if</span> (code == <span class="hljs-string">&quot;AR&quot;</span>) { r0 = argv.at (stoi (ins.substr (<span class="hljs-number">3</span>))); }
    <span class="hljs-keyword">else</span> <span class="hljs-keyword">if</span> (code == <span class="hljs-string">&quot;SW&quot;</span>) { swap (r0, r1); }
    <span class="hljs-keyword">else</span> <span class="hljs-keyword">if</span> (code == <span class="hljs-string">&quot;PU&quot;</span>) { istack.push (r0); }
    <span class="hljs-keyword">else</span> <span class="hljs-keyword">if</span> (code == <span class="hljs-string">&quot;PO&quot;</span>) { r0 = istack.top (); istack.pop (); }
    <span class="hljs-keyword">else</span> <span class="hljs-keyword">if</span> (code == <span class="hljs-string">&quot;AD&quot;</span>) { r0 += r1; }
    <span class="hljs-keyword">else</span> <span class="hljs-keyword">if</span> (code == <span class="hljs-string">&quot;SU&quot;</span>) { r0 -= r1; }
    <span class="hljs-keyword">else</span> <span class="hljs-keyword">if</span> (code == <span class="hljs-string">&quot;MU&quot;</span>) { r0 *= r1; }
    <span class="hljs-keyword">else</span> <span class="hljs-keyword">if</span> (code == <span class="hljs-string">&quot;DI&quot;</span>) { r0 /= r1; }
  }
  <span class="hljs-keyword">return</span> r0;
}</code></pre>
<pre style="display: none;"><code class="language-ocaml"><span class="hljs-keyword">let</span> <span class="hljs-keyword">rec</span> simualte : <span class="hljs-built_in">string</span> <span class="hljs-built_in">list</span> * <span class="hljs-built_in">int</span> <span class="hljs-built_in">list</span> -&gt; <span class="hljs-built_in">int</span> =
  <span class="hljs-keyword">let</span> stack = <span class="hljs-type">Stack</span>.create <span class="hljs-literal">()</span> <span class="hljs-keyword">in</span>
  <span class="hljs-keyword">let</span> r0 = <span class="hljs-built_in">ref</span> <span class="hljs-number">0</span> <span class="hljs-keyword">in</span>
  <span class="hljs-keyword">let</span> r1 = <span class="hljs-built_in">ref</span> <span class="hljs-number">0</span> <span class="hljs-keyword">in</span>
  <span class="hljs-keyword">function</span>
  | (<span class="hljs-literal">[]</span>,argumets) -&gt; !r0
  | (<span class="hljs-string">&quot;SU&quot;</span>::lst,argumets) -&gt;
     r0 := !r0 - !r1;
     simualte(lst,argumets)
  | (<span class="hljs-string">&quot;DI&quot;</span>::lst,argumets) -&gt;
     r0 := !r0 / !r1;
     simualte(lst,argumets)
  | (<span class="hljs-string">&quot;MU&quot;</span>::lst,argumets) -&gt;
     r0 := !r0 * !r1;
     simualte(lst,argumets)
  | (<span class="hljs-string">&quot;AD&quot;</span>::lst,argumets) -&gt;
     r0 := !r0 + !r1;
     simualte(lst,argumets)
  | (<span class="hljs-string">&quot;PU&quot;</span>::lst,argumets) -&gt;
     <span class="hljs-type">Stack</span>.push !r0 stack;
     simualte(lst,argumets)
  | (<span class="hljs-string">&quot;PO&quot;</span>::lst,argumets) -&gt;
     r0 := (<span class="hljs-type">Stack</span>.pop stack);
     simualte(lst,argumets)
  | (<span class="hljs-string">&quot;SW&quot;</span>::lst,argumets) -&gt;
     <span class="hljs-keyword">let</span> tmp = !r0 <span class="hljs-keyword">in</span>
     r0 := !r1;
     r1 := tmp;
     simualte(lst,argumets)
  | (op::lst,argumets) -&gt;
     <span class="hljs-keyword">let</span> op_code = <span class="hljs-type">String</span>.sub op <span class="hljs-number">0</span> <span class="hljs-number">2</span> <span class="hljs-keyword">in</span>
     <span class="hljs-keyword">let</span> <span class="hljs-keyword">value</span> =
       int_of_string
         (<span class="hljs-type">String</span>.sub op <span class="hljs-number">3</span> ((<span class="hljs-type">String</span>.length op) - <span class="hljs-number">3</span>))
     <span class="hljs-keyword">in</span>
     <span class="hljs-keyword">match</span> op_code <span class="hljs-keyword">with</span>
     | <span class="hljs-string">&quot;IM&quot;</span> -&gt;
        r0 := <span class="hljs-keyword">value</span>;
        simualte(lst,argumets)
     | <span class="hljs-string">&quot;AR&quot;</span> -&gt;
        r0 := <span class="hljs-type">List</span>.nth argumets <span class="hljs-keyword">value</span>;
        simualte(lst,argumets)
     | _ -&gt; raise (<span class="hljs-type">CompilerError</span> <span class="hljs-string">&quot;bad assembly&quot;</span>)
</code></pre>
<pre style="display: none;"><code class="language-c"><span class="hljs-meta">#<span class="hljs-meta-keyword">include</span> <span class="hljs-meta-string">&lt;stdlib.h&gt;</span></span>
<span class="hljs-meta">#<span class="hljs-meta-keyword">include</span> <span class="hljs-meta-string">&lt;string.h&gt;</span></span>

<span class="hljs-comment">// stack push (int) and pop () function defintions</span>

<span class="hljs-function"><span class="hljs-keyword">int</span> <span class="hljs-title">simulate</span> <span class="hljs-params">(<span class="hljs-keyword">const</span> <span class="hljs-keyword">char</span> *ins, <span class="hljs-keyword">const</span> <span class="hljs-keyword">int</span> *args)</span> </span>{
  <span class="hljs-keyword">int</span> r0 = <span class="hljs-number">0</span>, r1 = <span class="hljs-number">0</span>, t;
  <span class="hljs-keyword">for</span> (; ins &amp;&amp; *ins; (ins = <span class="hljs-built_in">strchr</span> (ins, <span class="hljs-string">&apos;\n&apos;</span>)) ? ++ins : <span class="hljs-number">0x60d1510f</span>)
         <span class="hljs-keyword">if</span> (!<span class="hljs-built_in">memcmp</span> (ins, <span class="hljs-string">&quot;IM&quot;</span>, <span class="hljs-number">2</span>)) r0 = atoi (ins+<span class="hljs-number">3</span>);
    <span class="hljs-keyword">else</span> <span class="hljs-keyword">if</span> (!<span class="hljs-built_in">memcmp</span> (ins, <span class="hljs-string">&quot;AR&quot;</span>, <span class="hljs-number">2</span>)) r0 = args[atoi (ins+<span class="hljs-number">3</span>)];
    <span class="hljs-keyword">else</span> <span class="hljs-keyword">if</span> (!<span class="hljs-built_in">memcmp</span> (ins, <span class="hljs-string">&quot;SW&quot;</span>, <span class="hljs-number">2</span>)) t = r0, r0 = r1, r1 = t;
    <span class="hljs-keyword">else</span> <span class="hljs-keyword">if</span> (!<span class="hljs-built_in">memcmp</span> (ins, <span class="hljs-string">&quot;PU&quot;</span>, <span class="hljs-number">2</span>)) push (r0);
    <span class="hljs-keyword">else</span> <span class="hljs-keyword">if</span> (!<span class="hljs-built_in">memcmp</span> (ins, <span class="hljs-string">&quot;PO&quot;</span>, <span class="hljs-number">2</span>)) r0 = pop ();
    <span class="hljs-keyword">else</span> <span class="hljs-keyword">if</span> (!<span class="hljs-built_in">memcmp</span> (ins, <span class="hljs-string">&quot;AD&quot;</span>, <span class="hljs-number">2</span>)) r0 += r1;
    <span class="hljs-keyword">else</span> <span class="hljs-keyword">if</span> (!<span class="hljs-built_in">memcmp</span> (ins, <span class="hljs-string">&quot;SU&quot;</span>, <span class="hljs-number">2</span>)) r0 -= r1;
    <span class="hljs-keyword">else</span> <span class="hljs-keyword">if</span> (!<span class="hljs-built_in">memcmp</span> (ins, <span class="hljs-string">&quot;MU&quot;</span>, <span class="hljs-number">2</span>)) r0 *= r1;
    <span class="hljs-keyword">else</span> <span class="hljs-keyword">if</span> (!<span class="hljs-built_in">memcmp</span> (ins, <span class="hljs-string">&quot;DI&quot;</span>, <span class="hljs-number">2</span>)) r0 /= r1;
  <span class="hljs-keyword">return</span> r0;
}</code></pre>
<pre style="display: none;"><code class="language-rust"><span class="hljs-function"><span class="hljs-keyword">fn</span> <span class="hljs-title">simulate</span></span>(assembly : <span class="hljs-built_in">Vec</span>&lt;&amp;<span class="hljs-built_in">str</span>&gt;, argv : <span class="hljs-built_in">Vec</span>&lt;<span class="hljs-built_in">i32</span>&gt;) -&gt; <span class="hljs-built_in">i32</span> {
  <span class="hljs-keyword">let</span> <span class="hljs-keyword">mut</span> r = (<span class="hljs-number">0</span>, <span class="hljs-number">0</span>);
  <span class="hljs-keyword">let</span> <span class="hljs-keyword">mut</span> stack : <span class="hljs-built_in">Vec</span>&lt;<span class="hljs-built_in">i32</span>&gt; = <span class="hljs-built_in">vec!</span>[];

  <span class="hljs-keyword">for</span> ins <span class="hljs-keyword">in</span> assembly {
    <span class="hljs-keyword">let</span> <span class="hljs-keyword">mut</span> ws = ins.split_whitespace();
    <span class="hljs-keyword">match</span> ws.next() {
      <span class="hljs-literal">Some</span>(<span class="hljs-string">&quot;IM&quot;</span>) =&gt; r.<span class="hljs-number">0</span> = <span class="hljs-built_in">i32</span>::from_str_radix(ws.next().unwrap(), <span class="hljs-number">10</span>).unwrap(),
      <span class="hljs-literal">Some</span>(<span class="hljs-string">&quot;AR&quot;</span>) =&gt; r.<span class="hljs-number">0</span> = argv[<span class="hljs-built_in">i32</span>::from_str_radix(ws.next().unwrap(), <span class="hljs-number">10</span>).unwrap() <span class="hljs-keyword">as</span> <span class="hljs-built_in">usize</span>],
      <span class="hljs-literal">Some</span>(<span class="hljs-string">&quot;SW&quot;</span>) =&gt; r = (r.<span class="hljs-number">1</span>,r.<span class="hljs-number">0</span>),
      <span class="hljs-literal">Some</span>(<span class="hljs-string">&quot;PU&quot;</span>) =&gt; stack.push(r.<span class="hljs-number">0</span>),
      <span class="hljs-literal">Some</span>(<span class="hljs-string">&quot;PO&quot;</span>) =&gt; r.<span class="hljs-number">0</span> = stack.pop().unwrap(),
      <span class="hljs-literal">Some</span>(<span class="hljs-string">&quot;AD&quot;</span>) =&gt; r.<span class="hljs-number">0</span> += r.<span class="hljs-number">1</span>,
      <span class="hljs-literal">Some</span>(<span class="hljs-string">&quot;SU&quot;</span>) =&gt; r.<span class="hljs-number">0</span> -= r.<span class="hljs-number">1</span>,
      <span class="hljs-literal">Some</span>(<span class="hljs-string">&quot;MU&quot;</span>) =&gt; r.<span class="hljs-number">0</span> *= r.<span class="hljs-number">1</span>,
      <span class="hljs-literal">Some</span>(<span class="hljs-string">&quot;DI&quot;</span>) =&gt; r.<span class="hljs-number">0</span> /= r.<span class="hljs-number">1</span>,
      _ =&gt; <span class="hljs-built_in">panic!</span>(<span class="hljs-string">&quot;Invalid instruction encountered&quot;</span>),
    }
  }
  r.<span class="hljs-number">0</span>
}</code></pre>

### Solution