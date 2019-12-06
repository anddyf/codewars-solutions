### Problem:
<h3 id="context-and-definitions">Context and Definitions</h3>
<p>You are in charge of developing a new cool JavaScript library that provides functionality similar to that of <a href="http://underscorejs.org/" target="_blank">Underscore.js</a>.</p>
<p>You have started by adding a new  <strong>list data type</strong> to your library. You came up with a design of a data structure that represents an <a href="http://en.wikipedia.org/wiki/Algebraic_data_type" target="_blank">algebraic data type</a> as a pair of elements:</p>
<pre><code class="language-javascript"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">Cons</span>(<span class="hljs-params">head,tail</span>)</span>{
    <span class="hljs-keyword">this</span>.head = head;
    <span class="hljs-keyword">this</span>.tail = tail;
}</code></pre>
<pre style="display: none;"><code class="language-python"><span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">Cons</span>:</span>
  <span class="hljs-function"><span class="hljs-keyword">def</span> <span class="hljs-title">__init__</span><span class="hljs-params">(self, head, tail)</span>:</span>
    self.head = head
    self.tail = tail</code></pre>
<pre style="display: none;"><code class="language-rust"><span class="hljs-meta">#[derive(Debug, PartialEq, Eq)]</span>
<span class="hljs-class"><span class="hljs-keyword">enum</span> <span class="hljs-title">Cons</span></span>&lt;T: <span class="hljs-built_in">Clone</span>&gt; {
  Cons(T, <span class="hljs-built_in">Box</span>&lt;Cons&lt;T&gt;&gt;),
  Null
}

<span class="hljs-keyword">impl</span>&lt;T: <span class="hljs-built_in">Clone</span>&gt; Cons&lt;T&gt; {
  <span class="hljs-keyword">pub</span> <span class="hljs-function"><span class="hljs-keyword">fn</span> <span class="hljs-title">new</span></span>(head: T, tail: <span class="hljs-keyword">Self</span>) -&gt; <span class="hljs-keyword">Self</span> {
    Cons::Cons(head, <span class="hljs-built_in">Box</span>::new(tail))
  }
}</code></pre>
<p>You are pretty smart, because using this new data type, we can easily build a list of elements. For instance, a list of numbers:</p>
<pre><code class="language-javascript"><span class="hljs-keyword">var</span> numbers  = <span class="hljs-keyword">new</span> Cons(<span class="hljs-number">1</span>, <span class="hljs-keyword">new</span> Cons(<span class="hljs-number">2</span>, <span class="hljs-keyword">new</span> Cons(<span class="hljs-number">3</span>, <span class="hljs-keyword">new</span> Cons(<span class="hljs-number">4</span>, <span class="hljs-keyword">new</span> Cons(<span class="hljs-number">5</span>, <span class="hljs-literal">null</span>)))));</code></pre>
<pre style="display: none;"><code class="language-python">numbers = Cons(<span class="hljs-number">1</span>, Cons(<span class="hljs-number">2</span>, Cons(<span class="hljs-number">3</span>, Cons(<span class="hljs-number">4</span>, Cons(<span class="hljs-number">5</span>, <span class="hljs-literal">None</span>)))))</code></pre>
<pre style="display: none;"><code class="language-rust"><span class="hljs-keyword">let</span> numbers = Cons::new(<span class="hljs-number">1</span>, Cons::new(<span class="hljs-number">2</span>, Cons::new(<span class="hljs-number">3</span>, Cons::new(<span class="hljs-number">4</span>, Cons::new(<span class="hljs-number">5</span>, Cons::Null)))));</code></pre>
<p>In a code review with your boss, you explained him how every <em>cons cell</em> contains a &quot;value&quot; in its head, and in its tail it contains either another cons cell or null. We know we have reached the end of the data structure when the tail is null.</p>
<p>So, your boss is pretty excited about this new data structure and wants to know if you will be able to build some more  functionality around it. In a demo you did this week for the rest of your team, in order to illustrate how this works, you showed them a method to transform a list of items of your list data type into a JavaScript array:</p>
<pre><code class="language-javascript"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">toArray</span>(<span class="hljs-params">list</span>) </span>{
    <span class="hljs-keyword">if</span>(list){
        <span class="hljs-keyword">var</span> more = list.tail;
        <span class="hljs-keyword">return</span> [list.head].concat(more? toArray(more) : []);
    }
    <span class="hljs-keyword">return</span> [];
}

Cons.prototype.toArray = <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>)</span>{ <span class="hljs-keyword">return</span> toArray(<span class="hljs-keyword">this</span>); };</code></pre>
<pre style="display: none;"><code class="language-python">  <span class="hljs-comment"># added to the class implementation:</span>
  <span class="hljs-function"><span class="hljs-keyword">def</span> <span class="hljs-title">to_array</span><span class="hljs-params">(self)</span>:</span>
    tail = self.tail
    new_tail = (tail.to_array() <span class="hljs-keyword">if</span> tail <span class="hljs-keyword">is</span> <span class="hljs-keyword">not</span> <span class="hljs-literal">None</span> <span class="hljs-keyword">else</span> [])
    <span class="hljs-keyword">return</span> [self.head] + new_tail</code></pre>
<pre style="display: none;"><code class="language-rust"><span class="hljs-keyword">impl</span>&lt;T: <span class="hljs-built_in">Clone</span>&gt; Cons&lt;T&gt; {
  <span class="hljs-keyword">pub</span> <span class="hljs-function"><span class="hljs-keyword">fn</span> <span class="hljs-title">to_vec</span></span>(&amp;<span class="hljs-keyword">self</span>) -&gt; <span class="hljs-built_in">Vec</span>&lt;T&gt; {
    <span class="hljs-keyword">match</span> <span class="hljs-keyword">self</span> {
      &amp;Cons::Null =&gt; <span class="hljs-built_in">vec!</span>[],
      &amp;Cons::Cons(<span class="hljs-keyword">ref</span> head, <span class="hljs-keyword">ref</span> tail) =&gt; {
        <span class="hljs-keyword">let</span> <span class="hljs-keyword">mut</span> head = <span class="hljs-built_in">vec!</span>[head.clone()];
        head.extend(tail.to_vec());
        head
      }
    }
  }
}</code></pre>
<p>And they were amazed when you simply did this:</p>
<pre><code class="language-javascript"><span class="hljs-built_in">console</span>.log(numbers.toArray());  <span class="hljs-comment">// yields [1,2,3,4,5]</span></code></pre>
<pre style="display: none;"><code class="language-python">print(numbers.to_array())  <span class="hljs-comment"># yields [1,2,3,4,5]</span></code></pre>
<pre style="display: none;"><code class="language-rust"><span class="hljs-built_in">println!</span>(<span class="hljs-string">&quot;{:?}&quot;</span>, numbers.to_vec());  <span class="hljs-comment">// yields [1,2,3,4,5]</span></code></pre>
<h3 id="the-new-requirements">The New Requirements</h3>
<p>Now, the team is convinced that this is the way to go and they would like to build the library around this cool new data type, but they want you to provide a few more features for them so that they can start using this type in solving some real world problems.</p>
<p>You have been reading about a technique called  <a href="http://quod.lib.umich.edu/s/spobooks/bbv9810.0001.001/1:15?rgn=div1;view=fulltext" target="_blank">applicative programming</a> which basically consists in applying a function to every element in a list.  So, you gave it some thought and you have decided to start adding features  like <strong>filter</strong>, <strong>map</strong> and <strong>reduce</strong>. Basically you want to provide equivalent functionality to that of JavaScript arrays and in the future even more.</p>
<p>So, you will now add:</p>
<ul>
<li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter?redirectlocale=en-US&amp;redirectslug=JavaScript%2FReference%2FGlobal_Objects%2FArray%2Ffilter" target="_blank">filter</a>: create a new algebraic list containing only the elements that satisfy a predicate function. </li>
<li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter?redirectlocale=en-US&amp;redirectslug=JavaScript%2FReference%2FGlobal_Objects%2FArray%2Ffilter" target="_blank">map</a> : create a new list in which every element is the result of applying a function provided as argument.</li>
<li>fromArray:  a convenient complementary method  that creates a list out of a JavaScript array.</li>
</ul>
<p>For this Kata, the definition of <code>Cons</code> and the prototypal/class method <code>toArray</code>/<code>to_array</code>/<code>into_vec</code> are already loaded in your environment.</p>
<h3 id="examples-of-usage">Examples of Usage</h3>
<pre><code class="language-javascript"><span class="hljs-keyword">var</span> numbers  = Cons.fromArray([<span class="hljs-number">1</span>,<span class="hljs-number">2</span>,<span class="hljs-number">3</span>,<span class="hljs-number">4</span>,<span class="hljs-number">5</span>]);
numbers.filter(<span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params">n</span>)</span>{ <span class="hljs-keyword">return</span> n % <span class="hljs-number">2</span> === <span class="hljs-number">0</span>; }).toArray();  <span class="hljs-comment">//yields [2,4]</span>
numbers.map( <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params">n</span>)</span>{ <span class="hljs-keyword">return</span> n * n; }).toArray(); <span class="hljs-comment">//yields [1,4,9,16,25]</span>

<span class="hljs-keyword">var</span> digits = Cons.fromArray([<span class="hljs-string">&quot;1&quot;</span>,<span class="hljs-string">&quot;2&quot;</span>,<span class="hljs-string">&quot;3&quot;</span>,<span class="hljs-string">&quot;4&quot;</span>,<span class="hljs-string">&quot;5&quot;</span>]);
<span class="hljs-keyword">var</span> integers = digits.map(<span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params">s</span>)</span>{<span class="hljs-keyword">return</span> <span class="hljs-built_in">parseInt</span>(s);})
                     .filter(<span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params">n</span>)</span>{ <span class="hljs-keyword">return</span> n &gt; <span class="hljs-number">3</span>;})
                     .toArray(); <span class="hljs-comment">//yields [4,5]</span></code></pre>
<pre style="display: none;"><code class="language-python">numbers = Cons.from_array([<span class="hljs-number">1</span>,<span class="hljs-number">2</span>,<span class="hljs-number">3</span>,<span class="hljs-number">4</span>,<span class="hljs-number">5</span>])
numbers.filter(<span class="hljs-keyword">lambda</span> x: x % <span class="hljs-number">2</span> == <span class="hljs-number">0</span>).to_array()  <span class="hljs-comment"># yields [2,4]</span>
numbers.map(<span class="hljs-keyword">lambda</span> x: x * x).to_array()  <span class="hljs-comment"># yields [1,4,9,16,25]</span>

digits = Cons.from_array([<span class="hljs-string">&quot;1&quot;</span>,<span class="hljs-string">&quot;2&quot;</span>,<span class="hljs-string">&quot;3&quot;</span>,<span class="hljs-string">&quot;4&quot;</span>,<span class="hljs-string">&quot;5&quot;</span>])
integers = digits.map(int) \
                 .filter(<span class="hljs-keyword">lambda</span> n: n &gt; <span class="hljs-number">3</span>) \
                 .to_array()  <span class="hljs-comment"># yields [4,5]</span></code></pre>
<pre style="display: none;"><code class="language-rust"><span class="hljs-keyword">let</span> numbers = Cons::from_iter(<span class="hljs-built_in">vec!</span>[<span class="hljs-number">1</span>,<span class="hljs-number">2</span>,<span class="hljs-number">3</span>,<span class="hljs-number">4</span>,<span class="hljs-number">5</span>]);
numbers.filter(|x| x % <span class="hljs-number">2</span> == <span class="hljs-number">0</span>).into_vec();  <span class="hljs-comment">// yields [2,4]</span>
numbers.map(|x| x * x).into_vec();  <span class="hljs-comment">// yields [1,4,9,16,25]</span>

<span class="hljs-keyword">let</span> digits = Cons::from_iter(<span class="hljs-built_in">vec!</span>[<span class="hljs-string">&quot;1&quot;</span>,<span class="hljs-string">&quot;2&quot;</span>,<span class="hljs-string">&quot;3&quot;</span>,<span class="hljs-string">&quot;4&quot;</span>,<span class="hljs-string">&quot;5&quot;</span>]);
<span class="hljs-keyword">let</span> ints = digits.map(<span class="hljs-built_in">str</span>::parse::&lt;<span class="hljs-built_in">i32</span>&gt;)
                 .map(<span class="hljs-built_in">Result</span>::unwrap)
                 .filter(|&amp;n| n &gt; <span class="hljs-number">3</span>)
                 .into_vec()  <span class="hljs-comment">// yields [4,5]</span></code></pre>
<p>In other words:</p>
<ul>
<li>The static method <code>Cons.fromArray</code> (or <code>from_array</code>, <code>from_iter</code>) produces <code>Cons(1, Cons(2, Cons(3, Cons 4, Cons 5, null)))))</code>.<ul>
<li>Above filter creates a new list: <code>Cons(2, Cons(4, null))</code>.</li>
</ul>
</li>
<li>So does above map:  <code>Cons(1, Cos(4, Cons(9, Cons(16, Cons(25, null)))))</code>.</li>
</ul>

### Solution