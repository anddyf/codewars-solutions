### Problem:
<p>A natural number is called <strong>k-prime</strong> if it has exactly k prime factors, counted with multiplicity. A natural number is thus prime if and only if it is 1-prime.</p>
<pre><code>Examples:
k = 2 -&gt; 4, 6, 9, 10, 14, 15, 21, 22, &#x2026;
k = 3 -&gt; 8, 12, 18, 20, 27, 28, 30, &#x2026;
k = 5 -&gt; 32, 48, 72, 80, 108, 112, &#x2026;</code></pre><p>Task:</p>
<p>Given an integer <code>k</code> and a list <code>arr</code> of positive integers the function <code>consec_kprimes (or its variants in other languages)</code> returns
how many times in the sequence <code>arr</code> numbers come up twice in a row with exactly <code>k</code> prime factors? </p>
<p>Examples:</p>
<pre><code>arr = [10005, 10030, 10026, 10008, 10016, 10028, 10004]
consec_kprimes(4, arr) =&gt; 3 because 10005 and 10030 are consecutive 4-primes, 10030 and 10026 too as well as 10028 and 10004 but 10008 and 10016 are 6-primes.

consec_kprimes(4, [10175, 10185, 10180, 10197]) =&gt; 3 because 10175-10185 and 10185- 10180 and 10180-10197 are all consecutive 4-primes.
</code></pre><p>Note:</p>
<p>It could be interesting to begin with:
<a href="https://www.codewars.com/kata/k-primes" target="_blank">https://www.codewars.com/kata/k-primes</a></p>

### Solution