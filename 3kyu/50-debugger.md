### Problem:
<p>Imagine you have a large project where is suddenly going something very messy. You are not able to guess what it is and don&apos;t want to debug all the code through. Your project has one base class.</p>
<p>In this kata you will write metaclass Meta for your base class, which will collect data about all attribute accesses and method calls in all project classes. From this data you can then better guess what is happening or which method call is bottleneck of your app.</p>
<p>We will use class Debugger to store the data.
Method call collection should look like this:</p>
<pre><code class="language-python">Debugger.method_calls.append({
    <span class="hljs-string">&apos;class&apos;</span>: ..., <span class="hljs-comment"># class object, not string</span>
    <span class="hljs-string">&apos;method&apos;</span>: ..., <span class="hljs-comment"># method name, string</span>
    <span class="hljs-string">&apos;args&apos;</span>: args, <span class="hljs-comment"># all args, including self</span>
    <span class="hljs-string">&apos;kwargs&apos;</span>: kwargs
})</code></pre>
<p>Attribute access collection should look like this:</p>
<pre><code class="language-python">Debugger.attribute_accesses.append({
    <span class="hljs-string">&apos;action&apos;</span>: <span class="hljs-string">&apos;set&apos;</span>, <span class="hljs-comment"># set/get</span>
    <span class="hljs-string">&apos;class&apos;</span>: ..., <span class="hljs-comment"># class object, not string</span>
    <span class="hljs-string">&apos;attribute&apos;</span>: ..., <span class="hljs-comment"># name of attribute, string</span>
    <span class="hljs-string">&apos;value&apos;</span>: value <span class="hljs-comment"># actual value</span>
})</code></pre>
<p>You should NOT log calls of getter/setter methods that you might create by meta class.
Note that Python 2 is used.</p>
<p>See the tests if in doubts.</p>

### Solution