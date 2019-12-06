### Problem:
<p>The number <code>89</code> is the first positive integer that has a particular, curious property:</p>
<p>The square of <code>89</code> is <code>7921</code>; <code>89&#xB2; = 7921</code></p>
<p>The reverse of <code>7921</code> is <code>1297</code>, and <code>1297</code> is a prime number.</p>
<p>The cube of <code>89</code> is <code>704969</code>; <code>89&#xB3; = 704969</code></p>
<p>The reverse of <code>704969</code> is <code>969407</code>, and <code>969407</code> is a prime number.</p>
<p>The first four terms of this sequence having this special property are:</p>
<pre><code>n-th term      term value
    1               89 
    2              271
    3              325
    4              328</code></pre><p>Create a function <code>sq_cub_rev_prime()</code>, that receives the ordinal number of the sequence and outputs its correspoding value.</p>
<p>Use the above table to show how the function should work:</p>
<pre><code class="language-python">sq_cub_rev_prime(<span class="hljs-number">1</span>) == <span class="hljs-number">89</span> 
sq_cub_rev_prime(<span class="hljs-number">2</span>) == <span class="hljs-number">271</span>
sq_cub_rev_prime(<span class="hljs-number">3</span>) == <span class="hljs-number">325</span>
sq_cub_rev_prime(<span class="hljs-number">4</span>) == <span class="hljs-number">328</span></code></pre>
<p>Your code will be tested up to the 250th term</p>
<p>This is not a registered sequence of OESIS, so if you are one of the first ten people that solve this kata, you may have the privilege to register the sequence at <a href="https://oeis.org" target="_blank">https://oeis.org</a>, with your name. If you do so, please, mention in your biography that you are a Codewarrior.</p>
<p>Memoize your results to pass the tests.</p>
<p>Enjoy it!</p>

### Solution