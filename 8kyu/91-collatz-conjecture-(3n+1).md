### Problem:
<p>The Collatz conjecture (also known as 3n+1 conjecture) is a conjecture that applying the following algorithm to any number we will always eventually reach one:</p>
<pre><code>[This is writen in pseudocode]
if(number is even) number = number / 2
if(number is odd) number = 3*number + 1</code></pre><p>#Task</p>
<p>Your task is to make a function <code>hotpo</code> that takes a positive <code>n</code> as input and returns the number of times you need to perform this algorithm to get <code>n = 1</code>.</p>
<p>#Examples</p>
<pre><code>hotpo(1) returns 0
(1 is already 1)

hotpo(5) returns 5
5 -&gt; 16 -&gt; 8 -&gt; 4 -&gt; 2 -&gt; 1

hotpo(6) returns 8
6 -&gt; 3 -&gt; 10 -&gt; 5 -&gt; 16 -&gt; 8 -&gt; 4 -&gt; 2 -&gt; 1

hotpo(23) returns 15
23 -&gt; 70 -&gt; 35 -&gt; 106 -&gt; 53 -&gt; 160 -&gt; 80 -&gt; 40 -&gt; 20 -&gt; 10 -&gt; 5 -&gt; 16 -&gt; 8 -&gt; 4 -&gt; 2 -&gt; 1</code></pre><p>#References</p>
<ul>
<li>Collatz conjecture wikipedia page: <a href="https://en.wikipedia.org/wiki/Collatz_conjecture" target="_blank">https://en.wikipedia.org/wiki/Collatz_conjecture</a></li>
</ul>

### Solution