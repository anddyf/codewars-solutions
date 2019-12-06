### Problem:
<p>Haskell has some useful functions for dealing with lists:</p>
<pre><code class="language-haskell">$ ghci
<span class="hljs-type">GHCi</span>, version <span class="hljs-number">7.6</span><span class="hljs-number">.3</span>: http://www.haskell.org/ghc/  :? for help
&#x3BB; head [<span class="hljs-number">1</span>,<span class="hljs-number">2</span>,<span class="hljs-number">3</span>,<span class="hljs-number">4</span>,<span class="hljs-number">5</span>]
<span class="hljs-number">1</span>
&#x3BB; tail [<span class="hljs-number">1</span>,<span class="hljs-number">2</span>,<span class="hljs-number">3</span>,<span class="hljs-number">4</span>,<span class="hljs-number">5</span>]
[<span class="hljs-number">2</span>,<span class="hljs-number">3</span>,<span class="hljs-number">4</span>,<span class="hljs-number">5</span>]
&#x3BB; init [<span class="hljs-number">1</span>,<span class="hljs-number">2</span>,<span class="hljs-number">3</span>,<span class="hljs-number">4</span>,<span class="hljs-number">5</span>]
[<span class="hljs-number">1</span>,<span class="hljs-number">2</span>,<span class="hljs-number">3</span>,<span class="hljs-number">4</span>]
&#x3BB; last [<span class="hljs-number">1</span>,<span class="hljs-number">2</span>,<span class="hljs-number">3</span>,<span class="hljs-number">4</span>,<span class="hljs-number">5</span>]
<span class="hljs-number">5</span></code></pre>
<p>Your job is to implement these functions in your given language. Make sure it doesn&apos;t edit the array; that would cause problems! Here&apos;s a cheat sheet:</p>
<pre><code class="language-haskell">| <span class="hljs-type">HEAD</span> | &lt;-<span class="hljs-comment">---------- TAIL ------------&gt; |</span>
[  <span class="hljs-number">1</span>,  <span class="hljs-number">2</span>,  <span class="hljs-number">3</span>,  <span class="hljs-number">4</span>,  <span class="hljs-number">5</span>,  <span class="hljs-number">6</span>,  <span class="hljs-number">7</span>,  <span class="hljs-number">8</span>,  <span class="hljs-number">9</span>,  <span class="hljs-number">10</span>]
| &lt;-<span class="hljs-comment">---------- INIT ------------&gt; | LAST |</span>

<span class="hljs-title">head</span> [x] = x
<span class="hljs-title">tail</span> [x] = []
<span class="hljs-title">init</span> [x] = []
<span class="hljs-title">last</span> [x] = x</code></pre>
<p>Here&apos;s how I expect the functions to be called in your language:</p>
<pre style="display: none;"><code class="language-coffeescript">head [<span class="hljs-number">1</span>,<span class="hljs-number">2</span>,<span class="hljs-number">3</span>,<span class="hljs-number">4</span>,<span class="hljs-number">5</span>] =&gt; <span class="hljs-number">1</span>
tail [<span class="hljs-number">1</span>,<span class="hljs-number">2</span>,<span class="hljs-number">3</span>,<span class="hljs-number">4</span>,<span class="hljs-number">5</span>] =&gt; [<span class="hljs-number">2</span>,<span class="hljs-number">3</span>,<span class="hljs-number">4</span>,<span class="hljs-number">5</span>]</code></pre>
<pre><code class="language-javascript">head([<span class="hljs-number">1</span>,<span class="hljs-number">2</span>,<span class="hljs-number">3</span>,<span class="hljs-number">4</span>,<span class="hljs-number">5</span>]); =&gt; <span class="hljs-number">1</span>
tail([<span class="hljs-number">1</span>,<span class="hljs-number">2</span>,<span class="hljs-number">3</span>,<span class="hljs-number">4</span>,<span class="hljs-number">5</span>]); =&gt; [<span class="hljs-number">2</span>,<span class="hljs-number">3</span>,<span class="hljs-number">4</span>,<span class="hljs-number">5</span>]</code></pre>
<pre style="display: none;"><code class="language-typescript">head([<span class="hljs-number">1</span>,<span class="hljs-number">2</span>,<span class="hljs-number">3</span>,<span class="hljs-number">4</span>,<span class="hljs-number">5</span>]); =&gt; <span class="hljs-number">1</span>
tail([<span class="hljs-number">1</span>,<span class="hljs-number">2</span>,<span class="hljs-number">3</span>,<span class="hljs-number">4</span>,<span class="hljs-number">5</span>]); =&gt; [<span class="hljs-number">2</span>,<span class="hljs-number">3</span>,<span class="hljs-number">4</span>,<span class="hljs-number">5</span>]</code></pre>
<pre style="display: none;"><code class="language-python">head([1,2,3,4,5]) =&gt; 1
tail([1,2,3,4,5]) =&gt; [2,3,4,5]</code></pre>
<pre style="display: none;"><code class="language-ruby">head [<span class="hljs-number">1</span>,<span class="hljs-number">2</span>,<span class="hljs-number">3</span>,<span class="hljs-number">4</span>,<span class="hljs-number">5</span>] =&gt; <span class="hljs-number">1</span>
tail [<span class="hljs-number">1</span>,<span class="hljs-number">2</span>,<span class="hljs-number">3</span>,<span class="hljs-number">4</span>,<span class="hljs-number">5</span>] =&gt; [<span class="hljs-number">2</span>,<span class="hljs-number">3</span>,<span class="hljs-number">4</span>,<span class="hljs-number">5</span>]</code></pre>
<pre style="display: none;"><code class="language-clojure">(head [1,2,3,4,5]) =&gt; 1
(tail [1,2,3,4,5]) =&gt; [2,3,4,5]</code></pre>
<pre style="display: none;"><code class="language-haskell"><span class="hljs-title">head</span> [<span class="hljs-number">1</span>,<span class="hljs-number">2</span>,<span class="hljs-number">3</span>,<span class="hljs-number">4</span>,<span class="hljs-number">5</span>] =&gt; <span class="hljs-number">1</span>
<span class="hljs-title">tail</span> [<span class="hljs-number">1</span>,<span class="hljs-number">2</span>,<span class="hljs-number">3</span>,<span class="hljs-number">4</span>,<span class="hljs-number">5</span>] =&gt; [<span class="hljs-number">2</span>,<span class="hljs-number">3</span>,<span class="hljs-number">4</span>,<span class="hljs-number">5</span>]</code></pre>
<pre style="display: none;"><code class="language-csharp"><span class="hljs-keyword">new</span> List&lt;<span class="hljs-keyword">int</span>&gt; {<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>, <span class="hljs-number">4</span>, <span class="hljs-number">5</span>}.Head() =&gt; <span class="hljs-number">1</span>
<span class="hljs-keyword">new</span> List&lt;<span class="hljs-keyword">int</span>&gt; {<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>, <span class="hljs-number">4</span>, <span class="hljs-number">5</span>}.Tail() =&gt; <span class="hljs-keyword">new</span> List&lt;<span class="hljs-keyword">int</span>&gt; {<span class="hljs-number">2</span>, <span class="hljs-number">3</span>, <span class="hljs-number">4</span>, <span class="hljs-number">5</span>}</code></pre>
<hr>
<p><em>Most tests consist of 100 randomly generated arrays, each with four tests, one for each operation. There are 400 tests overall. No empty arrays will be given. Haskell has QuickCheck tests</em></p>

### Solution