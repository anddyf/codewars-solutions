### Problem:
<p><strong>Function composition</strong> is a mathematical operation that mainly presents itself in lambda calculus and computability. It is explained well <a href="http://www.mathsisfun.com/sets/functions-composition.html" target="_blank">here</a>, but this is my explanation, in simple mathematical notation:</p>
<pre><code>f3 = compose( f1 f2 )
   Is equivalent to...
f3(a) = f1( f2( a ) )</code></pre><p>Your task is to create a <code>compose</code> function to carry out this task, which will be passed two functions or lambdas. Ruby functions will be passed, and should return, either a proc or a lambda. Remember that the resulting composed function may be passed multiple arguments!</p>
<pre style="display: none;"><code class="language-javascript">compose(f , g)(x)
=&gt; f( g( x ) )</code></pre>
<pre style="display: none;"><code class="language-ruby">compose(f , g).(x)
=&gt; f.( g.( x ) )</code></pre>
<pre style="display: none;"><code class="language-coffeescript">compose(f , g)(x)
=&gt; f( g( x ) )</code></pre>
<pre><code class="language-clojure">((compose f  g) x)
=&gt; (f (g x) )</code></pre>
<pre style="display: none;"><code class="language-python">compose(f , g)(x)
=&gt; f( g( x ) )</code></pre>
<p>This kata is not available in haskell; that would be too easy!</p>

### Solution