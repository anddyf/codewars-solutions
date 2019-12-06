### Problem:
<p>In Haskell, <em>Monads</em> are simple containers, or even &apos;box-like&apos; datastructures, of which lists are included, which can respond to certain functions, which are defined in the Monad typeclass. (To put it simply!)</p>
<p>In this kata, you must implement the <strong>Bind</strong> function for lists, or arrays. In haskell, the function is represented by <code>&gt;&gt;=</code>, but we&apos;ll just call it <code>bind</code>.</p>
<p>Essentially, <code>bind</code> should map the array with the function given, and then flatten it one time. Don&apos;t manipulate the original array; make you function <em>pure</em>: without side-effects, so that no variables are edited whilst the function is carried out.</p>
<p>Here&apos;s how it should work:</p>
<pre style="display: none;"><code class="language-coffeescript">bind( [<span class="hljs-number">1</span>,<span class="hljs-number">2</span>,<span class="hljs-number">3</span>], <span class="hljs-function"><span class="hljs-params">(a)</span> -&gt;</span> [a+<span class="hljs-number">1</span>] )
=&gt; [<span class="hljs-number">2</span>,<span class="hljs-number">3</span>,<span class="hljs-number">4</span>]

bind( [<span class="hljs-number">1</span>,<span class="hljs-number">2</span>,<span class="hljs-number">3</span>], <span class="hljs-function"><span class="hljs-params">(a)</span> -&gt;</span> [[a]] )
=&gt; [[<span class="hljs-number">1</span>],[<span class="hljs-number">2</span>],[<span class="hljs-number">3</span>]]

bind( [<span class="hljs-number">1</span>,<span class="hljs-number">2</span>,<span class="hljs-number">3</span>], <span class="hljs-function"><span class="hljs-params">(a)</span> -&gt;</span> a )
=&gt; <span class="hljs-comment"># ERROR! The returned value is not a list!</span></code></pre>
<pre><code class="language-javascript">bind( [1,2,3], function(a){ return [a+1] } )
=&gt; [2,3,4]

bind( [1,2,3], function(a){ return [[a]] } )
=&gt; [[1],[2],[3]]

bind( [1,2,3], function(a){ return a } )
=&gt; # ERROR! The returned value is not a list!</code></pre>
<pre style="display: none;"><code class="language-python">bind( [1,2,3], lambda a: [a+1] )
=&gt; [2,3,4]

bind( [1,2,3], lambda a: [[a]] )
=&gt; [[1],[2],[3]]

bind( [1,2,3], lambda a: a )
=&gt; # ERROR! The returned value is not a list!</code></pre>
<pre style="display: none;"><code class="language-ruby">bind( [<span class="hljs-number">1</span>,<span class="hljs-number">2</span>,<span class="hljs-number">3</span>] ) {<span class="hljs-params">|a|</span> [a+<span class="hljs-number">1</span>] }
=&gt; [<span class="hljs-number">2</span>,<span class="hljs-number">3</span>,<span class="hljs-number">4</span>]

bind( [<span class="hljs-number">1</span>,<span class="hljs-number">2</span>,<span class="hljs-number">3</span>] ) {<span class="hljs-params">|a|</span> [[a]] }
=&gt; [[<span class="hljs-number">1</span>],[<span class="hljs-number">2</span>],[<span class="hljs-number">3</span>]]

bind( [<span class="hljs-number">1</span>,<span class="hljs-number">2</span>,<span class="hljs-number">3</span>] ) {<span class="hljs-params">|a|</span> a }
=&gt; <span class="hljs-comment"># ERROR! The returned value is not a list!</span></code></pre>
<pre style="display: none;"><code class="language-clojure">(bind [1 2 3]  #(do [(+ % 1)]) )
=&gt; [2,3,4]

(bind [1 2 3]  #(do [[ % ]]) )
=&gt; [[1],[2],[3]]

(bind [1 2 3]  #(do %) )
=&gt; # ERROR! The returned value is not a list!</code></pre>
<pre style="display: none;"><code class="language-java">bind(Arrays.asList(<span class="hljs-number">1</span>,<span class="hljs-number">2</span>,<span class="hljs-number">3</span>), i -&gt; Arrays.asList((<span class="hljs-keyword">int</span>)i + <span class="hljs-number">1</span>))
<span class="hljs-comment">//=&gt; [2,3,4]</span>

bind(Arrays.asList(<span class="hljs-number">1</span>,<span class="hljs-number">2</span>,<span class="hljs-number">3</span>), i -&gt; Arrays.asList(Arrays.asList(i)));
<span class="hljs-comment">//=&gt; [[1],[2],[3]]</span>

bind(Arrays.asList(<span class="hljs-number">3</span>,<span class="hljs-number">4</span>,<span class="hljs-number">5</span>), i -&gt; i);
<span class="hljs-comment">//=&gt; # ERROR! Java does this on its own! You can&apos;t even compile! Strong typing FTW!</span></code></pre>
<p>As per usual, the ruby function will be passed a Proc or Lambda. Remember that the function still takes two arguments!</p>

### Solution