### Problem:
<p>In this Kata, you&apos;re going to transpile an expression from one langauge into another language.</p>
<p>The source language looks like Kotlin and the target language looks like Dart. And you <strong>don&apos;t need to know neither of them</strong> to complete this Kata.</p>
<p>We&apos;re going to transpile a <code>function call</code> expression.</p>
<p>If you successfully parsed the input, return <code>Right output</code>, otherwise give me <code>Left &quot;Hugh?&quot;</code>.</p>
<p>We have three kinds of basic expressions:</p>
<ul>
<li>names, like <code>abc</code>, <code>ABC</code>, <code>run</code>, <code>a1</code>, beginning with <code>_</code>/letters and followed by <code>_</code>/letters/numbers</li>
<li>numbers, like <code>123</code>, <code>2333</code>, <code>66666</code></li>
<li>lambda expressions, like <code>{ a -&gt; a }</code>, <code>{ a, b -&gt; a b }</code>(source), <code>(a){a;}</code>, <code>(a,b){a;b;}</code>(target)</li>
</ul>
<p>We have empty characters <code>blank space</code> and <code>\n</code>.</p>
<p>The definition of <code>names</code> is quite similiar to C/Java. Names like this are invalid:</p>
<ul>
<li><code>1a</code></li>
</ul>
<p>You don&apos;t have to worry about reserved words here.</p>
<p>Lambda expressions consist of two parts:</p>
<ul>
<li>parameters, they&apos;re just names/numbers</li>
<li>statements, a list of names/numbers, seperated by whitespaces in source language, by <code>;</code> in target language.</li>
</ul>
<p>Invoking a function is to pass some arguments to something callable(names and lambdas), like <code>plus(1, 2)</code>, or <code>repeat(10, { xxx })</code>.</p>
<p>There&apos;s a syntax sugar in Kotlin: if the last argument is a lambda, it can be out of the brackets. Like, <code>repeat(10, { xxx })</code> can be written in <code>repeat(10) { xxx }</code>. And if that lambda is the only argument, you can even ignore the brackets. Like: <code>run({ xxx })</code> is equaled to <code>run { xxx }</code>.</p>
<p>You can refer to the examples at the bottom.</p>
<h2 id="the-source-language-looks-like">The source language looks like:</h2>
<pre><code>function ::= expression &quot;(&quot; [parameters] &quot;)&quot; [lambda]
           | expression lambda

expression ::= nameOrNumber
             | lambda

parameters ::= expression [&quot;,&quot; parameters]

lambdaparam ::= nameOrNumber [&quot;,&quot; lambdaparam]
lambdastmt  ::= nameOrNumber [lambdastmt]

lambda ::= &quot;{&quot; [lambdaparam &quot;-&gt;&quot;] [lambdastmt] &quot;}&quot;</code></pre><p>Notice: there can be whitespaces among everywhere, it&apos;s not a part of the language grammar.</p>
<h2 id="the-target-language-looks-like">The target language looks like:</h2>
<pre><code>function ::= expression &quot;(&quot; [parameters] &quot;)&quot;

expression ::= nameOrNumber
             | lambda

parameters ::= expression [&quot;,&quot; parameters]

lambdaparam ::= nameOrNumber [&quot;,&quot; lambdaparam]
lambdastmt  ::= nameOrNumber &quot;;&quot; [lambdastmt]

lambda ::= &quot;(&quot; [lambdaparam] &quot;){&quot; [lambdastmt] &quot;}&quot;</code></pre><p>You shouldn&apos;t produce any whitespaces in the target language.</p>
<p>Those examples covered all the language features shown above. Hope you enjoy it :D</p>
<p><code>fun()</code> =&gt; <code>fun()</code><br><code>fun(a)</code> =&gt; <code>fun(a)</code><br><code>fun(a, b)</code> =&gt; <code>fun(a,b)</code><br><code>{}()</code> =&gt; <code>(){}()</code><br><code>fun {}</code> =&gt; <code>fun((){})</code><br><code>fun(a, {})</code> =&gt; <code>fun(a,(){})</code><br><code>fun(a) {}</code> =&gt; <code>fun(a,(){})</code><br><code>fun {a -&gt; a}</code> =&gt; <code>fun((a){a;})</code><br><code>{a -&gt; a}(1)</code> =&gt; <code>(a){a;}(1)</code><br><code>fun { a, b -&gt; a b }</code> =&gt; <code>fun((a,b){a;b;})</code><br><code>{a, b -&gt; a b} (1, 2)</code> =&gt; <code>(a,b){a;b;}(1,2)</code><br><code>f { a }</code> =&gt; <code>f((){a;})</code><br><code>f { a -&gt; }</code> =&gt; <code>f((a){})</code>  </p>
<p>You have to write your own tokenizer (hint: whitespace is significant to separate some tokens, but can be ignored otherwise).</p>

### Solution