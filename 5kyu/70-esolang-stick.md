### Problem:
<p>#Task
Make a custom esolang interpreter for the language Stick. Stick is a simple, stack-based esoteric programming language with only 7 commands.</p>
<p>#Commands</p>
<ul>
<li><p><code>^</code>: Pop the stack.</p>
</li>
<li><p><code>!</code>: Add new element to stack with the value of 0.</p>
</li>
<li><p><code>+</code>: Increment element. 255+1=0.</p>
</li>
<li><p><code>-</code>: Decrement element. 0-1=255.</p>
</li>
<li><p><code>*</code>: Add ascii value of <strong>top</strong> element to the output stream.</p>
</li>
<li><p><code>[</code>: Skip past <strong>next</strong> <code>]</code> if element value is 0.</p>
</li>
<li><p><code>]</code>: Jump back to the command after <strong>previous</strong> <code>[</code> if element value is nonzero.</p>
</li>
</ul>
<p>#Syntax and other info</p>
<ul>
<li>You don&apos;t need to add support for nested brackets.</li>
<li>Non-command characters should be ignored.</li>
<li>Code will always have all brackets closed.</li>
<li>Note the highlighted <strong>next</strong> and <strong>previous</strong> in the commands reference.</li>
<li>Program begins with the top element having the value of 0 and being the only element in the stack.</li>
<li>Program ends when command executor reaches the end.</li>
</ul>
<p>#Examples</p>
<p>##Hello, World!</p>
<pre><code class="language-python"><span class="hljs-string">&apos;++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*!+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*!++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*!++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*!+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*!++++++++++++++++++++++++++++++++++++++++++++*!++++++++++++++++++++++++++++++++*!+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*!+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*!++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*!++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*!++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*!+++++++++++++++++++++++++++++++++*!&apos;</span></code></pre>
<p>#Notes</p>
<ul>
<li>If this kata is a duplicate, this is not an issue.</li>
<li>If this kata uses incorrect styling, it is also not an issue.</li>
<li>Feel free to comment in the discource area.</li>
<li>Swift versions must throw an error (conforming to the Error Protocol) when abnormal conditions occur.</li>
</ul>

### Solution