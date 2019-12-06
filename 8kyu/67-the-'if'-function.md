### Problem:
<p>Who likes keywords? Nobody likes keywords, so why use them?</p>
<p>You know what keyword I use too much? <code>if</code>! We should <strong>make a function</strong> called <code>_if</code>, with its <strong>arguments as a logical test and two functions/lambdas where the first function is executed if the boolean is true, and the second if it&apos;s false</strong>, like an if/else statement, so that we don&apos;t have to mess around with those nasty keywords! Even so, <strong>It should support truthy/falsy types</strong> just like the keyword.</p>
<h3 id="example">Example:</h3>
<pre style="display: none;"><code class="language-coffeescript">_if(<span class="hljs-literal">true</span>, <span class="hljs-function">(<span class="hljs-params">()</span> -&gt;</span> <span class="hljs-built_in">console</span>.log <span class="hljs-string">&apos;true&apos;</span>), <span class="hljs-function">(<span class="hljs-params">()</span> -&gt;</span> <span class="hljs-built_in">console</span>.log <span class="hljs-string">&apos;false&apos;</span>))
<span class="hljs-regexp">//</span> Logs <span class="hljs-string">&apos;true&apos;</span> to the <span class="hljs-built_in">console</span>.</code></pre>
<pre style="display: none;"><code class="language-c"><span class="hljs-function"><span class="hljs-keyword">void</span> <span class="hljs-title">the_true</span><span class="hljs-params">()</span> </span>{ <span class="hljs-built_in">printf</span>(<span class="hljs-string">&quot;true&quot;</span>); }
<span class="hljs-function"><span class="hljs-keyword">void</span> <span class="hljs-title">the_false</span><span class="hljs-params">()</span> </span>{ <span class="hljs-built_in">printf</span>(<span class="hljs-string">&quot;false&quot;</span>); }
_if(<span class="hljs-literal">true</span>, the_true, the_false);
<span class="hljs-comment">/* Logs &quot;true&quot; to the console */</span></code></pre>
<pre style="display: none;"><code class="language-nasm"><span class="hljs-symbol">the_true:</span>
    <span class="hljs-keyword">mov</span> <span class="hljs-built_in">rdi</span> .true
    <span class="hljs-keyword">jmp</span> printf
<span class="hljs-symbol">.true:</span>   <span class="hljs-built_in">db</span>  <span class="hljs-string">`true\0`</span>
<span class="hljs-symbol">
the_false:</span>
    <span class="hljs-keyword">mov</span> <span class="hljs-built_in">rdi</span>, .false
    <span class="hljs-keyword">jmp</span> printf
<span class="hljs-symbol">.false:</span>  <span class="hljs-built_in">db</span>  <span class="hljs-string">`false\0`</span>

<span class="hljs-keyword">mov</span> <span class="hljs-built_in">dil</span>, <span class="hljs-number">1</span>
<span class="hljs-keyword">mov</span> <span class="hljs-built_in">rsi</span>, the_true
<span class="hljs-keyword">mov</span> <span class="hljs-built_in">rdx</span>, the_false
<span class="hljs-keyword">call</span> _if            <span class="hljs-comment">; Logs &quot;true&quot; to the console</span></code></pre>
<pre style="display: none;"><code class="language-cpp"><span class="hljs-function"><span class="hljs-keyword">void</span> <span class="hljs-title">TheTrue</span><span class="hljs-params">()</span> </span>{ <span class="hljs-built_in">std</span>::<span class="hljs-built_in">cout</span> &lt;&lt; <span class="hljs-string">&quot;true&quot;</span> }
<span class="hljs-function"><span class="hljs-keyword">void</span> <span class="hljs-title">TheFalse</span><span class="hljs-params">()</span> </span>{ <span class="hljs-built_in">std</span>::<span class="hljs-built_in">cout</span> &lt;&lt; <span class="hljs-string">&quot;false&quot;</span> }
_if(<span class="hljs-literal">true</span>, TheTrue, TheFalse);
<span class="hljs-comment">// Logs &apos;true&apos; to the console.</span></code></pre>
<pre style="display: none;"><code class="language-csharp">Kata.If(<span class="hljs-literal">true</span>, () =&gt; Console.WriteLine(<span class="hljs-string">&quot;True&quot;</span>), () =&gt; Console.WriteLine(<span class="hljs-string">&quot;False&quot;</span>));
<span class="hljs-comment">// write &quot;True&quot; to console</span></code></pre>
<pre style="display: none;"><code class="language-elixir">_if(<span class="hljs-keyword">true</span>, <span class="hljs-keyword">fn</span> -&gt; IO.puts <span class="hljs-string">&quot;true&quot;</span> <span class="hljs-keyword">end</span>, <span class="hljs-keyword">fn</span> -&gt; IO.puts <span class="hljs-string">&quot;false&quot;</span> <span class="hljs-keyword">end</span>)
<span class="hljs-comment"># prints &quot;true&quot; to the console</span></code></pre>
<pre style="display: none;"><code class="language-haskell"><span class="hljs-title">main</span> = _if <span class="hljs-type">True</span> (putStrLn <span class="hljs-string">&quot;You spoke the truth&quot;</span>) (putStrLn <span class="hljs-string">&quot;liar&quot;</span>)
<span class="hljs-comment">-- puts &quot;You spoke the truth&quot; to the console.</span>

<span class="hljs-title">_if</span> <span class="hljs-type">False</span> <span class="hljs-string">&quot;Hello&quot;</span> <span class="hljs-string">&quot;Goodbye&quot;</span> <span class="hljs-comment">-- &quot;Goodbye&quot;</span></code></pre>
<pre><code class="language-javascript">_if(<span class="hljs-literal">true</span>, <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>)</span>{<span class="hljs-built_in">console</span>.log(<span class="hljs-string">&quot;True&quot;</span>)}, <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>)</span>{<span class="hljs-built_in">console</span>.log(<span class="hljs-string">&quot;false&quot;</span>)})
<span class="hljs-comment">// Logs &apos;True&apos; to the console.</span></code></pre>
<pre style="display: none;"><code class="language-ruby">_if(<span class="hljs-literal">true</span>, proc{puts <span class="hljs-string">&quot;True&quot;</span>}, proc{puts <span class="hljs-string">&quot;False&quot;</span>})
<span class="hljs-comment"># Logs &apos;True&apos; to the console.</span></code></pre>
<pre style="display: none;"><code class="language-python"><span class="hljs-function"><span class="hljs-keyword">def</span> <span class="hljs-title">truthy</span><span class="hljs-params">()</span>:</span> print(<span class="hljs-string">&quot;True&quot;</span>)
<span class="hljs-function"><span class="hljs-keyword">def</span> <span class="hljs-title">falsey</span><span class="hljs-params">()</span>:</span> print(<span class="hljs-string">&quot;False&quot;</span>)
_if(<span class="hljs-literal">True</span>, truthy, falsey)
<span class="hljs-comment"># prints &apos;True&apos; to the console</span></code></pre>
<pre style="display: none;"><code class="language-rust">_<span class="hljs-keyword">if</span>(<span class="hljs-literal">true</span>, || <span class="hljs-built_in">println!</span>(<span class="hljs-string">&quot;true&quot;</span>), || <span class="hljs-built_in">println!</span>(<span class="hljs-string">&quot;false&quot;</span>))
# prints <span class="hljs-string">&quot;true&quot;</span> to the console</code></pre>
<pre style="display: none;"><code class="language-lua">kata._if(<span class="hljs-literal">true</span>, <span class="hljs-function"><span class="hljs-keyword">function</span><span class="hljs-params">()</span></span> <span class="hljs-built_in">print</span>(<span class="hljs-string">&quot;true&quot;</span>) <span class="hljs-keyword">end</span>, <span class="hljs-function"><span class="hljs-keyword">function</span><span class="hljs-params">()</span></span> <span class="hljs-built_in">print</span>(<span class="hljs-string">&quot;false&quot;</span>) <span class="hljs-keyword">end</span>)
<span class="hljs-comment">-- prints &quot;true&quot; to the console</span></code></pre>

### Solution