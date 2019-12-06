### Problem:
<p>Create a finite automaton that has three states. Finite automatons are the same as finite state machines for our purposes.</p>
<p>Our simple automaton, accepts the language of <code>A</code>, defined as <code>{0, 1}</code> and should have three states: <code>q1</code>, <code>q2</code>, and <code>q3</code>. Here is the description if the states:</p>
<ul>
<li><code>q1</code> is our start state, we begin reading commands from here</li>
<li><code>q2</code> is our accept state, we return <code>true</code> if this is our last state</li>
</ul>
<p>And the transitions:</p>
<ul>
<li><code>q1</code> moves to <code>q2</code> when given a <code>1</code>, and stays at <code>q1</code> when given a <code>0</code></li>
<li><code>q2</code> moves to <code>q3</code> when given a <code>0</code>, and stays at <code>q2</code> when given a <code>1</code>  </li>
<li><code>q3</code> moves to <code>q2</code> when given a <code>0</code> or <code>1</code></li>
</ul>
<p>The automaton should return whether we end in our accepted state (<code>q2</code>), or not (<code>true</code>/<code>false</code>).</p>
<h2 id="your-task">Your task</h2>
<p>You will have to design your state objects, and how your Automaton handles transitions. Also make sure you set up the three states, <code>q1</code>, <code>q2</code>, and <code>q3</code> for the myAutomaton instance. The test fixtures will be calling against myAutomaton.</p>
<p>As an aside, the automaton accepts an array of strings, rather than just numbers, or a number represented as a string, because the language an automaton can accept isn&apos;t confined to just numbers. An automaton should be able to accept any &apos;symbol.&apos;</p>
<p>Here are some resources on DFAs (the automaton this Kata asks you to create):</p>
<ul>
<li><a href="http://en.wikipedia.org/wiki/Deterministic_finite_automaton" target="_blank">http://en.wikipedia.org/wiki/Deterministic_finite_automaton</a>  </li>
<li><a href="http://www.cs.odu.edu/~toida/nerzic/390teched/regular/fa/dfa-definitions.html" target="_blank">http://www.cs.odu.edu/~toida/nerzic/390teched/regular/fa/dfa-definitions.html</a>  </li>
<li><a href="http://www.cse.chalmers.se/~coquand/AUTOMATA/o2.pdf" target="_blank">http://www.cse.chalmers.se/~coquand/AUTOMATA/o2.pdf</a>  </li>
</ul>
<h2 id="example">Example</h2>
<pre><code class="language-javascript"><span class="hljs-keyword">var</span> a = <span class="hljs-keyword">new</span> Automaton();
a.readCommands([<span class="hljs-string">&quot;1&quot;</span>, <span class="hljs-string">&quot;0&quot;</span>, <span class="hljs-string">&quot;0&quot;</span>, <span class="hljs-string">&quot;1&quot;</span>, <span class="hljs-string">&quot;0&quot;</span>]);  ==&gt; <span class="hljs-literal">false</span></code></pre>
<pre style="display: none;"><code class="language-python">a = Automaton()
a.read_commands([&quot;1&quot;, &quot;0&quot;, &quot;0&quot;, &quot;1&quot;, &quot;0&quot;])  ==&gt; False</code></pre>
<pre style="display: none;"><code class="language-ruby">a = Automaton.new
a.read_commands([<span class="hljs-string">&quot;1&quot;</span>, <span class="hljs-string">&quot;0&quot;</span>, <span class="hljs-string">&quot;0&quot;</span>, <span class="hljs-string">&quot;1&quot;</span>, <span class="hljs-string">&quot;0&quot;</span>])  ==&gt; <span class="hljs-literal">false</span></code></pre>
<pre style="display: none;"><code class="language-coffeescript">a = <span class="hljs-keyword">new</span> Automaton()
a.readCommands [<span class="hljs-string">&quot;1&quot;</span>, <span class="hljs-string">&quot;0&quot;</span>, <span class="hljs-string">&quot;0&quot;</span>, <span class="hljs-string">&quot;1&quot;</span>, <span class="hljs-string">&quot;0&quot;</span>]  =<span class="hljs-function">=&gt;</span> <span class="hljs-literal">false</span></code></pre>
<pre style="display: none;"><code class="language-c++">a = Automaton()
a.read_commands({<span class="hljs-string">&apos;1&apos;</span>, <span class="hljs-string">&apos;0&apos;</span>, <span class="hljs-string">&apos;0&apos;</span>, <span class="hljs-string">&apos;1&apos;</span>});   ==&gt; <span class="hljs-literal">false</span></code></pre>
<pre style="display: none;"><code class="language-c">read_commands(<span class="hljs-string">&quot;1001&quot;</span>);  ==&gt; <span class="hljs-literal">false</span></code></pre>
<p>We make these transitions:</p>
<pre><code>input: [&quot;1&quot;, &quot;0&quot;, &quot;0&quot;, &quot;1&quot;, &quot;0&quot;]

1: q1 -&gt; q2
0: q2 -&gt; q3
0: q3 -&gt; q2
1: q2 -&gt; q2
0: q2 -&gt; q3</code></pre><p>We end in <code>q3</code> which is <strong>not</strong> our accept state, so we return <code>false</code></p>

### Solution