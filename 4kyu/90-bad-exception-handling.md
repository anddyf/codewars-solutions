### Problem:
<p>We all know how to handle exceptions in Python. Just use:</p>
<pre><code>try:
    num = float(input())
except ValueError:
    print(&quot;That&apos;s not a number!&quot;)
else:
    print(num)</code></pre><p>Code such as this</p>
<pre><code>def factorial(x, n = 1):
    if x == 0:
      raise ValueError(n)
    factorial(x - 1, n * x)</code></pre><p>relies on ridiculous exception misuse, but you can&apos;t change it because that would require a complete refactor. Code such as this</p>
<pre><code>try:
    return int(input(&quot;Input a number: &quot;)
except ValueError:
    return 4 # random number</code></pre><p>relies on reasonable exception use - almost all of the Python documentation examples are written in this way.</p>
<p>What if you are using a faulty implementation of Embedded Python that doesn&apos;t implement the <code>try</code> statement? Where <code>sys.excepthook</code> is a hard-coded, unoverrideable value? Where even <code>__file__</code> is not defined? How do you use basic functions like <code>list.index</code>?</p>
<p>Your task is to write a function that can handle exceptions raised in a program or function <em>without</em> using <code>try</code> or <code>except</code>. Somehow.</p>
<p>The first argument of your function <code>handle</code> will be a <code>lambda</code> requiring no parameters. You will call this function and handle any exceptions raised. The second argument will be a callable <code>success</code>:</p>
<pre><code>def success(func, val):
    pass</code></pre><p>The third argument will be a callable <code>failure</code>:</p>
<pre><code>def failure(func, exc):
    pass</code></pre><p>Subsequent arguments will be exceptions. If instances of these exceptions are raised, you must call the handler and no error message must be printed to <code>stderr</code>. If the exception raised is not provided as an argument, it should appear as though the exception was never caught.</p>
<p>Pass the return value of <code>func</code> to <code>success</code> unless it raises an exception. If it raises an exception that <code>isinstance</code> of an exception class passed to <code>handle</code>, call <code>failure</code> with an instance of the raised exception.</p>
<p>Don&apos;t worry about the little things like dealing with the extra arguments to exceptions or maintaining the call stack. Whoever writes code like <em>that</em> deserves the extra work.</p>
<h2 id="what-does-catching-an-exception-mean">What does &quot;catching an exception&quot; mean?</h2>
<p>It means:</p>
<ul>
<li>The exception will not be printed to <code>stderr</code>.</li>
<li>Code can continue to be executed.</li>
<li>The <code>failure</code> callable knows what the exception was.</li>
</ul>

### Solution