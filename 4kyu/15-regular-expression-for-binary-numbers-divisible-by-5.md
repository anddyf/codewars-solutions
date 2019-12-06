### Problem:
<p>Define a regular expression which tests if a given string representing a binary number is divisible by 5.</p>
<h3 id="examples">Examples:</h3>
<pre style="display: none;"><code class="language-csharp"><span class="hljs-comment">// 5 divisable by 5</span>
Regex.IsMatch(<span class="hljs-string">&apos;101&apos;</span>, DivisibleByFive) == <span class="hljs-literal">true</span>

<span class="hljs-comment">// 135 divisable by 5</span>
Regex.IsMatch(<span class="hljs-string">&apos;10000111&apos;</span>, DivisibleByFive) == <span class="hljs-literal">true</span>

<span class="hljs-comment">// 666 not divisable by 5</span>
Regex.IsMatch(<span class="hljs-string">&apos;0000001010011010&apos;</span>, DivisibleByFive) == <span class="hljs-literal">false</span></code></pre>
<pre><code class="language-javascript"><span class="hljs-comment">// 5 divisable by 5</span>
divisibleByFive.test(<span class="hljs-string">&apos;101&apos;</span>) === <span class="hljs-literal">true</span>

<span class="hljs-comment">// 135 divisable by 5</span>
divisibleByFive.test(<span class="hljs-string">&apos;10000111&apos;</span>) === <span class="hljs-literal">true</span>

<span class="hljs-comment">// 666 not divisable by 5</span>
divisibleByFive.test(<span class="hljs-string">&apos;0000001010011010&apos;</span>) === <span class="hljs-literal">false</span></code></pre>
<pre style="display: none;"><code class="language-php"><span class="hljs-comment">// 5 is divisible by 5</span>
preg_match($pattern, <span class="hljs-string">&apos;101&apos;</span>); <span class="hljs-comment">// =&gt; 1</span>
<span class="hljs-comment">// 135 is divisible by 5</span>
preg_match($pattern, <span class="hljs-string">&apos;10000111&apos;</span>); <span class="hljs-comment">// =&gt; 1</span>
<span class="hljs-comment">// 666 is not divisible by 5</span>
preg_match($pattern, <span class="hljs-string">&apos;0000001010011010&apos;</span>); <span class="hljs-comment">// =&gt; 0</span></code></pre>
<pre style="display: none;"><code class="language-python"><span class="hljs-comment"># 5 divisible by 5</span>
PATTERN.match(<span class="hljs-string">&apos;101&apos;</span>) == true

<span class="hljs-comment"># 135 divisible by 5</span>
PATTERN.match(<span class="hljs-string">&apos;10000111&apos;</span>) == true

<span class="hljs-comment"># 666 not divisible by 5</span>
PATTERN.match(<span class="hljs-string">&apos;0000001010011010&apos;</span>) == false</code></pre>
<pre style="display: none;"><code class="language-java"><span class="hljs-comment">// 5 divisible by 5</span>
DivisibleByFive.pattern().matcher(<span class="hljs-string">&apos;101&apos;</span>).matches() == <span class="hljs-keyword">true</span>

<span class="hljs-comment">// 135 divisible by 5</span>
DivisibleByFive.pattern().matcher(<span class="hljs-string">&apos;10000111&apos;</span>).matches() == <span class="hljs-keyword">true</span>

<span class="hljs-comment">// 666 not divisible by 5</span>
DivisibleByFive.pattern().matcher(<span class="hljs-string">&apos;0000001010011010&apos;</span>).matches() == <span class="hljs-keyword">false</span></code></pre>
<h3 id="note">Note:</h3>
<p>This can be solved by creating a Finite State Machine that evaluates if a string representing a number in binary base is divisible by given number.</p>
<p>The detailed explanation for dividing by 3 is
<a href="http://math.stackexchange.com/questions/140283/why-does-this-fsm-accept-binary-numbers-divisible-by-three" target="_blank">here</a></p>
<p>The FSM diagram for dividing by 5 is
<a href="http://aswitalski.github.io/img/FSM-binary-divisible-by-five.png" title="Finite State machine - string representing a binary number divisible by 5" target="_blank">here</a></p>

### Solution