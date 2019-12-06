### Problem:
<h1 id="church-numbers">Church Numbers</h1>
<p>Church Numbers are representations of natural numbers (non-negative integers) as functions. Not only as functions, but as functions that can perform a task upon a value a set number of times. This is an important concept of Lambda Calculus, so naturally we&apos;ll have to talk about Lambda Calculus.</p>
<h1 id="lambda-calculus">Lambda Calculus</h1>
<p>Lambda Calculus is a syntax for functional computing/mathematics. In Lambda Calculus, a function has one input, and one output. However, the input function can be another lambda function (which accepts another input), and this can somewhat simulate multiple inputs with some important differences; this is called &quot;currying&quot;.</p>
<p>Some languages (e.g., Haskell) naturally use curried functions. Other languages (e.g., Javascript) must have currying forced upon them. The solution starts with the functions properly curried, and will need to remain that way.</p>
<h1 id="church-functions">Church Functions</h1>
<p>Back to Church Numbers. With a Church Number, we want to accept &quot;two inputs&quot; (a function <code>f</code> and a value <code>x</code>; remember they&apos;re curried, so it&apos;s <code>c(f)(x)</code> not <code>c(f, x)</code>), and we want to successively perform <code>f</code> on <code>x</code>. So, if we have Church Number 2, that should mean <code>f(f(x))</code>. If you&apos;re working in Haskell, ignore this bit; you&apos;re already curried.</p>
<p>To define this, we&apos;ll start at zero:</p>
<pre><code class="language-javascript"><span class="hljs-keyword">var</span> zero = <span class="hljs-function">(<span class="hljs-params">f</span>) =&gt;</span> <span class="hljs-function">(<span class="hljs-params">x</span>) =&gt;</span> x;</code></pre>
<pre style="display: none;"><code class="language-python">zero = <span class="hljs-keyword">lambda</span> f: <span class="hljs-keyword">lambda</span> x: x</code></pre>
<pre style="display: none;"><code class="language-haskell"><span class="hljs-class"><span class="hljs-keyword">type</span> <span class="hljs-type">Lambda</span> a = (<span class="hljs-title">a</span> -&gt; <span class="hljs-title">a</span>)</span>
<span class="hljs-class"><span class="hljs-keyword">type</span> <span class="hljs-type">Cnum</span> a = <span class="hljs-type">Lambda</span> a -&gt; <span class="hljs-type">Lambda</span> a</span>

<span class="hljs-title">zero</span> :: <span class="hljs-type">Cnum</span> a
<span class="hljs-title">zero</span> f = id</code></pre>
<p>As you can see, zero accepts a function, and returns a function. The returned function performs <code>f</code> zero times and returns the result (also known as an identify function). One goes a step further:</p>
<pre><code class="language-javascript"><span class="hljs-keyword">var</span> one = <span class="hljs-function">(<span class="hljs-params">f</span>) =&gt;</span> <span class="hljs-function">(<span class="hljs-params">x</span>) =&gt;</span> f(x);</code></pre>
<pre style="display: none;"><code class="language-python">one = <span class="hljs-keyword">lambda</span> f: <span class="hljs-keyword">lambda</span> x: f(x)</code></pre>
<pre style="display: none;"><code class="language-haskell"><span class="hljs-title">one</span> :: <span class="hljs-type">Cnum</span> a
<span class="hljs-title">one</span> f = f</code></pre>
<p>Of course, it would get tedious to have to declare every natural number you need. So let&apos;s write a successor function:</p>
<pre><code class="language-javascript"><span class="hljs-keyword">var</span> succ = <span class="hljs-function">(<span class="hljs-params">c</span>) =&gt;</span> <span class="hljs-function">(<span class="hljs-params">f</span>) =&gt;</span> <span class="hljs-function">(<span class="hljs-params">x</span>) =&gt;</span> f(c(f)(x));</code></pre>
<pre style="display: none;"><code class="language-python">succ = <span class="hljs-keyword">lambda</span> c: <span class="hljs-keyword">lambda</span> f: <span class="hljs-keyword">lambda</span> x: f(c(f)(x))</code></pre>
<pre style="display: none;"><code class="language-haskell"><span class="hljs-title">churchSucc</span> :: <span class="hljs-type">Cnum</span> a -&gt; <span class="hljs-type">Cnum</span> a
<span class="hljs-title">churchSucc</span> c = (\h -&gt; h . c h)</code></pre>
<p>The successor function takes a Church Number (including zero), and returns a function that performs one more application of <code>f</code> than the previous Church Number. So, <code>succ(zero)</code> is equivalent to <code>one</code>, <code>succ(succ(zero))</code> is <code>two</code>, etc.. And how you use a Church Number <code>c</code> is to:</p>
<pre><code class="language-javascript"><span class="hljs-keyword">var</span> result = c(f)(x);</code></pre>
<pre style="display: none;"><code class="language-python">result = c(f)(x)</code></pre>
<pre style="display: none;"><code class="language-haskell"><span class="hljs-title">let</span> result = c f x</code></pre>
<p><code>result</code> will be <code>f</code> performed on <code>x</code> <code>c</code> times. So if <code>c</code> is 3 (<code>succ(succ(succ(zero)))</code>), result will be <code>f(f(f(x)))</code>.</p>
<h1 id="your-goal">Your Goal</h1>
<p>Implement some basic arithmetic for Church Numbers, namely adding, multiplying, and exponentiation. Performance is part of this kata; if you&apos;re timing out (and Codewars isn&apos;t under load), you&apos;ll need to come up with more efficient functions.</p>
<h2 id="general-tips">General Tips</h2>
<p>Since the functions are curried, you can call a function with only one &quot;input&quot; and receive a function back. Think of this like the classic <code>adder</code> function:</p>
<pre><code class="language-javascript"><span class="hljs-keyword">var</span> addX = <span class="hljs-function">(<span class="hljs-params">x</span>) =&gt;</span> <span class="hljs-function">(<span class="hljs-params">y</span>) =&gt;</span> x + y;
<span class="hljs-keyword">var</span> addOne = addX(<span class="hljs-number">1</span>);
addOne(<span class="hljs-number">5</span>);<span class="hljs-comment">// == 6</span></code></pre>
<pre style="display: none;"><code class="language-python">add_x = <span class="hljs-keyword">lambda</span> x: <span class="hljs-keyword">lambda</span> y: x + y
add_one = add_x(<span class="hljs-number">1</span>)
add_one(<span class="hljs-number">5</span>) <span class="hljs-comment"># == 6</span></code></pre>
<pre style="display: none;"><code class="language-haskell"><span class="hljs-title">addX</span> x y = x + y
<span class="hljs-title">addOne</span> y = addX <span class="hljs-number">1</span>
<span class="hljs-title">let</span> six = addOne <span class="hljs-number">5</span></code></pre>
<p>With Church Numbers, this means that <code>c(f)</code> is a function that takes one input (x) and returns <code>f</code> performed on <code>x</code> <code>c</code> times. The ability to pass this function around is useful, to give an example, for multiplying.</p>
<h2 id="adding-tips">Adding Tips</h2>
<p>What you want to do is perform <code>f</code> on <code>x</code> through an entire one of your Church inputs, then feed that value into your next Church input as if it were <code>x</code>.<br>Lambda Calculus definition for adding: <code>c1 f (c2 f x)</code></p>
<h2 id="multiplying-tips">Multiplying Tips</h2>
<p>You can use repeated adding to multiply, but there&apos;s a much cleaner solution. Remember <code>c(f)</code> is a function of its own.<br>Lambda Calculus definition for multiplying: <code>c1 (c2 f) x</code></p>
<h2 id="exponentiation-tips">Exponentiation Tips</h2>
<p>Similar to multiplying, you <em>could</em> use repeated multiplication, but it&apos;s better not to. In fact, exponentiation is syntactically simpler than adding with Church Numbers (even if it takes some brain gymnastics to figure out why).<br>Lambda Calculus definition: <code>(ce cb) f x</code></p>
<p>While it isn&apos;t a hard requirement for this kata, try to implement multiplying without adding, and exponentiation without multiplying or adding. It&apos;s actually simpler this way (really).</p>
<h2 id="testing-tips">Testing Tips</h2>
<p>The following functions are preloaded; feel free to use them for testing purposes. They can&apos;t be used when you Submit, only when you run your own test cases.</p>
<pre><code class="language-javascript"><span class="hljs-keyword">var</span> zero = <span class="hljs-function">(<span class="hljs-params">f</span>) =&gt;</span> <span class="hljs-function">(<span class="hljs-params">x</span>) =&gt;</span> x;
<span class="hljs-keyword">var</span> succ = <span class="hljs-function">(<span class="hljs-params">c</span>) =&gt;</span> <span class="hljs-function">(<span class="hljs-params">f</span>) =&gt;</span> <span class="hljs-function">(<span class="hljs-params">x</span>) =&gt;</span> f(c(f)(x));
<span class="hljs-keyword">var</span> numerify = <span class="hljs-function">(<span class="hljs-params">c</span>) =&gt;</span> c(<span class="hljs-function">(<span class="hljs-params">i</span>) =&gt;</span> i + <span class="hljs-number">1</span>)(<span class="hljs-number">0</span>); <span class="hljs-comment">//Turns a Church Number into an integer</span>
<span class="hljs-keyword">var</span> churchify = <span class="hljs-function">(<span class="hljs-params">n</span>) =&gt;</span> <span class="hljs-function">(<span class="hljs-params">f</span>) =&gt;</span> <span class="hljs-function">(<span class="hljs-params">x</span>) =&gt;</span> { <span class="hljs-comment">//Turns an integer into a Church Number.</span>
      <span class="hljs-keyword">for</span>(<span class="hljs-keyword">var</span> i = <span class="hljs-number">0</span>; i &lt; n; i++) x = f(x);
      <span class="hljs-keyword">return</span> x;
    };
<span class="hljs-comment">//For churchify, why don&apos;t we use succ(churchify(n - 1))? The stack size gets out of hand.</span></code></pre>
<pre style="display: none;"><code class="language-python">zero = <span class="hljs-keyword">lambda</span> f: <span class="hljs-keyword">lambda</span> x: x
succ = <span class="hljs-keyword">lambda</span> c: <span class="hljs-keyword">lambda</span> f: <span class="hljs-keyword">lambda</span> x: f(c(f)(x))
numerify = <span class="hljs-keyword">lambda</span> c: c(<span class="hljs-keyword">lambda</span> i: i + <span class="hljs-number">1</span>)(<span class="hljs-number">0</span>)
<span class="hljs-function"><span class="hljs-keyword">def</span> <span class="hljs-title">churchify</span><span class="hljs-params">(n)</span>:</span>
  <span class="hljs-function"><span class="hljs-keyword">def</span> <span class="hljs-title">_f</span><span class="hljs-params">(f)</span>:</span>
    <span class="hljs-function"><span class="hljs-keyword">def</span> <span class="hljs-title">_x</span><span class="hljs-params">(x)</span>:</span>
      <span class="hljs-keyword">for</span> i <span class="hljs-keyword">in</span> range(n): x = f(x)
      <span class="hljs-keyword">return</span> x
    <span class="hljs-keyword">return</span> _x
  <span class="hljs-keyword">return</span> _f
<span class="hljs-comment"># For churchify, why don&apos;t we use succ(churchify(n - 1))? The stack size gets out of hand.</span></code></pre>
<pre style="display: none;"><code class="language-haskell"><span class="hljs-keyword">module</span> Haskell.Codewars.Church.Preloaded <span class="hljs-keyword">where</span>

<span class="hljs-class"><span class="hljs-keyword">type</span> <span class="hljs-type">Lambda</span> a = (<span class="hljs-title">a</span> -&gt; <span class="hljs-title">a</span>)</span>
<span class="hljs-class"><span class="hljs-keyword">type</span> <span class="hljs-type">Cnum</span> a = <span class="hljs-type">Lambda</span> a -&gt; <span class="hljs-type">Lambda</span> a</span>

<span class="hljs-title">zero</span> :: <span class="hljs-type">Cnum</span> a
<span class="hljs-title">zero</span> f = id

<span class="hljs-title">churchSucc</span> :: <span class="hljs-type">Cnum</span> a -&gt; <span class="hljs-type">Cnum</span> a
<span class="hljs-title">churchSucc</span> c = (\h -&gt; h . c h)

<span class="hljs-title">churchify</span> <span class="hljs-number">0</span> = zero
<span class="hljs-title">churchify</span> n = churchSucc (churchify (n<span class="hljs-number">-1</span>))

<span class="hljs-title">numerify</span> :: <span class="hljs-type">Cnum</span> <span class="hljs-type">Int</span> -&gt; <span class="hljs-type">Int</span>
<span class="hljs-title">numerify</span> c = c (+<span class="hljs-number">1</span>) <span class="hljs-number">0</span></code></pre>
<p>You won&apos;t need to sanitize your inputs; you will always receive valid Church Numbers into churchAdd, churchMul, and churchPow.</p>
<h2 id="beta-notes">Beta Notes</h2>
<p>A C# version is forthcoming. If someone else translates into other languages, I&apos;ll add them as well. It&apos;s improbable that a satisfactory Java solution can be made since generics and lambdas don&apos;t play well.</p>
<p>After you finish, please mark as Ready (or add why it isn&apos;t to the discussion) and give a kyu rating.</p>

### Solution