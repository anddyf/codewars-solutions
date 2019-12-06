### Problem:
<p>This Kata is a continuation of <a href="http://www.codewars.com/kata/the-fusc-function-part-1" target="_blank">Part 1</a>. The <code>fusc</code> function is defined recursively as follows:</p>
<pre><code>fusc(0) = 0
fusc(1) = 1
fusc(2n) = fusc(n)
fusc(2n + 1) = fusc(n) + fusc(n + 1)</code></pre><p>Your job is to produce the code for the <code>fusc</code> function. In this kata, your function will be tested with large values of <code>n</code> more than 1000 bits (in JS and PHP: at most 52 bits), so you should be concerned about stack overflow and timeouts.</p>
<p>Method suggestion:</p>
<p>Imagine that instead of <code>fusc(n)</code>, you were to implement <code>fib(n)</code>, which returns the n&apos;th Fibonacci number.</p>
<p>The function is recursively defined by:</p>
<pre><code>1.    fib(0) = 1
2.    fib(1) = 1
3.    fib(n + 2) = fib(n) + fib(n + 1), if n + 2 &gt; 1</code></pre><p>If one translates the above definition directly into a recursive function, the result is not very efficient. One can try memoization, but that requires lots of space and is not necessary. So, first step is to try and find a <em>tail recursive</em> definition. In order to do that we try to write both sides of equation 3) on the same form. Currently, the left side of the equation contains a single term, whereas the right side is the sum of two terms. A first attempt is to add <code>fib(n + 1)</code> to both sides of the equation:</p>
<pre><code>3.    fib(n + 1) + fib(n + 2) = fib(n) + 2 * fib(n + 1)</code></pre><p>The two sides of the equation look much more alike, but there is still an essential difference, which is the coefficient of the second term of each side. On the left side of the equation, it is <code>1</code>  and, on the right, it is <code>2</code>. To remedy this, we can introduce a variable <code>b</code>:</p>
<pre><code>3.    fib(n + 1) + b * fib(n + 2) = b * fib(n) + (b + 1) * fib(n + 1)</code></pre><p>We notice that the coefficients of the first term are not the same (<code>1</code> on the left and <code>b</code> on the right), so we introduce a variable <code>a</code>:</p>
<pre><code>3.    a * fib(n + 1) + b * fib(n + 2) = b * fib(n) + (a + b) * fib(n + 1)</code></pre><p>Now the two sides have the same form (call it <code>F</code>), which we can define as: </p>
<p><code>F(a, b, n) = a * fib(n) + b * fib(n + 1)</code></p>
<p>In fact, we can write equation 3) as:</p>
<pre><code>3.    F(a, b, n + 1) = F(b, a + b, n)</code></pre><p>We also have, by definition of <code>F</code> and <code>fib</code>:</p>
<pre><code>4.    F(a, b, 0) = a * fib(0) + b * fib(1) = a + b</code></pre><p>Also, by definition of <code>F</code>: </p>
<pre><code>5.    fib(n) = F(1, 0, n)</code></pre><p>The next step is to translate the above into code:</p>
<pre><code>def fib(n):

    def F(a, b, n):
        if n == 0: return a + b    # see 4. above
        return F(b, a + b, n - 1)  # see 3. above

    return F(1, 0, n)              # see 5. above</code></pre><p>The final step (optional for languages that support tail call optimization) is to replace the tail recursive function <code>F</code> with a loop:</p>
<pre><code>def fib(n):
    a, b = 1, 0                    # see 5. above
    while n &gt; 0:
        a, b, n = b, a + b, n - 1  # see 3. above
    return a + b .                 # see 4. above</code></pre><p>Voila! Now, go do the same with <code>fusc</code>.</p>

### Solution