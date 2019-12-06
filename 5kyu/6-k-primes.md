### Problem:
<p>A natural number is called <strong>k-prime</strong> if it has exactly <code>k</code> prime factors, counted with multiplicity. For example:</p>
<pre><code>k = 2  --&gt;  4, 6, 9, 10, 14, 15, 21, 22, ...
k = 3  --&gt;  8, 12, 18, 20, 27, 28, 30, ...
k = 5  --&gt;  32, 48, 72, 80, 108, 112, ...</code></pre><p>A natural number is thus prime if and only if it is 1-prime.</p>
<h2 id="task">Task:</h2>
<p>Complete the function <code>count_Kprimes</code> (or <code>countKprimes</code>, <code>count-K-primes</code>, <code>kPrimes</code>) which is given parameters <code>k, start, end</code> (or <code>nd</code>) and returns an <strong>array</strong> (or a list or a string depending on the language - see &quot;Solution&quot; and &quot;Sample Tests&quot;) of the <code>k-primes</code> between <code>start (inclusive)</code> and <code>end (inclusive)</code>.</p>
<h2 id="example">Example:</h2>
<pre><code>countKprimes(5, 500, 600) --&gt; [500, 520, 552, 567, 588, 592, 594]</code></pre><p>Notes: </p>
<ul>
<li>The first function would have been better named: <code>findKprimes</code> or <code>kPrimes</code> :-)</li>
<li>In C some helper functions are given (see declarations in &apos;Solution&apos;).</li>
<li>For Go: nil slice is expected when there are no k-primes between <code>start</code> and <code>end</code>.</li>
</ul>
<hr>
<h2 id="second-task-puzzle">Second Task (puzzle):</h2>
<p>Given a positive integer s, find the total number of solutions of the equation <code>a + b + c = s</code>, where a is 1-prime, b is 3-prime, and c is 7-prime.</p>
<p>Call this function <code>puzzle(s)</code>.</p>
<h2 id="examples">Examples:</h2>
<pre><code>puzzle(138)  --&gt;  1  because [2 + 8 + 128] is the only solution
puzzle(143)  --&gt;  2  because [3 + 12 + 128] and [7 + 8 + 128] are the solutions</code></pre>
### Solution