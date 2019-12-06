### Problem:
<p>The year is 1214. One night, Pope Innocent III awakens to find the the archangel Gabriel floating before him.  Gabriel thunders to the pope:</p>
<blockquote>
<p>Gather all of the learned men in Pisa, especially Leonardo Fibonacci.  In order for the crusades in the holy lands to be successful, these men must calculate the <em>millionth</em> number in Fibonacci&apos;s recurrence.  Fail to do this, and your armies will never reclaim the holy land.  It is His will.</p>
</blockquote>
<p>The angel then vanishes in an explosion of white light.</p>
<p>Pope Innocent III sits in his bed in awe.  <em>How much is a million?</em> he thinks to himself.  He never was very good at math.</p>
<p>He tries writing the number down, but because everyone in Europe is still using Roman numerals at this moment in history, he cannot represent this number.  If he only knew about the invention of zero, it might make this sort of thing easier.</p>
<p>He decides to go back to bed.  He consoles himself, <em>The Lord would never challenge me thus; this must have been some deceit by the devil.  A pretty horrendous nightmare, to be sure.</em></p>
<p>Pope Innocent III&apos;s armies would go on to conquer Constantinople (now Istanbul), but they would never reclaim the holy land as he desired.</p>
<hr>
<p>In this kata you will have to calculate <code>fib(n)</code> where:</p>
<pre><code>fib(0) := 0
fib(1) := 1
fin(n + 2) := fib(n + 1) + fib(n)</code></pre><p>Write an algorithm that can handle <code>n</code> up to <code>2000000</code>.</p>
<p>Your algorithm must output the exact integer answer, to full precision. Also, it must correctly handle negative numbers as input.</p>
<p><strong>HINT I</strong>: Can you rearrange the equation <code>fib(n + 2) = fib(n + 1) + fib(n)</code> to find <code>fib(n)</code> if you already know <code>fib(n + 1)</code> and <code>fib(n + 2)</code>?  Use this to reason what value <code>fib</code> has to have for negative values.</p>
<p><strong>HINT II</strong>: See <a href="https://mitpress.mit.edu/sites/default/files/sicp/full-text/book/book-Z-H-11.html#%_sec_1.2.4" target="_blank">https://mitpress.mit.edu/sites/default/files/sicp/full-text/book/book-Z-H-11.html#%_sec_1.2.4</a></p>

### Solution