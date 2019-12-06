### Problem:
<p>A <a href="https://en.wikipedia.org/wiki/Finite-state_machine" target="_blank">Finite State Machine</a> (FSM) is an abstract machine that can be in exactly one of a finite number of states at any given time. Simple examples are:</p>
<ul>
<li>vending machines, which dispense products when the proper combination of coins is deposited;</li>
<li>elevators, whose sequence of stops is determined by the floors requested by riders;</li>
<li>traffic lights, which change sequence when cars are waiting;</li>
<li>combination locks, which require the input of combination numbers in the proper order.</li>
</ul>
<p>In this Kata we are going to design our very own basic FSM <code>class</code> that takes in a <code>string</code> of <code>instructions</code></p>
<p><code>instructions</code> is a string input with the following format:</p>
<pre><code>first; next_if_input_0, next_if_input_1; output\n
second; next_if_input_0, next_if_input_1; output\n
third; next_if_input_0, next_if_input_1; output</code></pre><p>A basic example would be:</p>
<pre><code class="language-python">instructions = \
<span class="hljs-string">&apos;&apos;&apos;S1; S1, S2; 9
S2; S1, S3; 10
S3; S4, S3; 8
S4; S4, S1; 0&apos;&apos;&apos;</span></code></pre>
<pre style="display: none;"><code class="language-c"><span class="hljs-keyword">char</span> instructions[] = <span class="hljs-string">&quot;S1; S1, S2; 9\n&quot;</span>
                      <span class="hljs-string">&quot;S2; S1, S3; 10\n&quot;</span>
                      <span class="hljs-string">&quot;S3; S4, S3; 8\n&quot;</span>
                      <span class="hljs-string">&quot;S4; S4, S1; 0&quot;</span>;</code></pre>
<pre style="display: none;"><code class="language-julia">instructions = <span class="hljs-string">&quot;&quot;&quot;
S1; S1, S2; 9
S2; S1, S3; 10
S3; S4, S3; 8
S4; S4, S1; 0&quot;&quot;&quot;</span></code></pre>
<p>Where each line in the string describes a state in the FSM.
Given in the example, if the current state was <code>S1</code>, if the <code>input is 0</code> it would loop back to itself: <code>S1</code> and if the <code>input is 1</code> it would go to <code>S2</code> </p>
<p>The instructions are compiled into the <code>FSM</code> class, then the <code>run_fsm()</code> method will be called to simulate the compiled FSM.</p>
<p>Example:</p>
<pre><code class="language-python"># run_fsm takes in two arguments:

start = &apos;S1&apos;
# where start is the name of the state that it starts from
sequence = [0, 1, 1, 0, 1]
# where sequence is a list of inputs
# inputs are only 1 or 0 (1 input variable) 
# to keep it simple with this Kata
final_state, final_state_value, path = run_fsm(start, sequence)
# run_fsm should return a tuple as:
final_state =&gt; name of final state
final_state_value =&gt; integer value of state output
path =&gt; list of states the FSM sequence went through</code></pre>
<pre style="display: none;"><code class="language-c">Fsm *fsm = compile(instructions);

<span class="hljs-keyword">const</span> <span class="hljs-keyword">char</span> *final_state;
<span class="hljs-keyword">const</span> <span class="hljs-keyword">char</span> *path[<span class="hljs-number">6</span>];
<span class="hljs-keyword">int</span> final_state_value = run_fsm(
  fsm,
  <span class="hljs-string">&quot;S1&quot;</span>,                     <span class="hljs-comment">// name of the initial state</span>
  (<span class="hljs-keyword">_Bool</span>[]){<span class="hljs-number">0</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">0</span>, <span class="hljs-number">1</span>}, <span class="hljs-comment">// input</span>
  <span class="hljs-number">5</span>,                        <span class="hljs-comment">// input length</span>
  &amp;final_state,             <span class="hljs-comment">// returned final state</span>
  &amp;path                     <span class="hljs-comment">// returned path</span>
); <span class="hljs-comment">// returns the output from the final state</span></code></pre>
<pre style="display: none;"><code class="language-julia"><span class="hljs-comment"># run_fsm takes in three arguments:</span>

<span class="hljs-comment"># fsm is your compiled FSM</span>
fsm = FSM(instructions)

<span class="hljs-comment"># start is the name of the state that it starts from</span>
start = <span class="hljs-string">&quot;S1&quot;</span>

<span class="hljs-comment"># sequence is a list of inputs</span>
sequence = [<span class="hljs-number">0</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">0</span>, <span class="hljs-number">1</span>]
<span class="hljs-comment"># inputs are only 1 or 0 (1 input variable) </span>
<span class="hljs-comment"># to keep it simple with this Kata</span>

<span class="hljs-comment"># run_fsm should return a tuple as:</span>
final_state, final_state_value, path = run_fsm(fsm, start, sequence)
<span class="hljs-comment">#=
  final_state =&gt; name of final state
  final_state_value =&gt; integer value of state output
  path =&gt; list of states the FSM sequence went through
=#</span></code></pre>
<p>From the given example, when <code>run_fsm</code> is executed the following should proceed below</p>
<pre><code>instructions:
S1; S1, S2; 9
S2; S1, S3; 10
S3; S4, S3; 8
S4; S4, S1; 0

start: S1
sequence: 0, 1, 1, 0, 1

input 0: S1-&gt;S1
input 1: S1-&gt;S2
input 1: S2-&gt;S3
input 0: S3-&gt;S4
input 1: S4-&gt;S1

final state: S1
output: 9</code></pre><p>In this Kata are many FSM examples in real life described in:
<a href="https://en.wikipedia.org/wiki/Finite-state_machine" target="_blank">https://en.wikipedia.org/wiki/Finite-state_machine</a></p>
<p>Good Luck!</p>

### Solution