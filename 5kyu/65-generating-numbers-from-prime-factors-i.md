### Problem:
<p>Given a list of prime factors, <code>primesL</code>, and an integer, <code>limit</code>, try to generate in order, all the numbers less than the value of <code>limit</code>, that have <strong>all and only</strong> the prime factors of <code>primesL</code></p>
<h2 id="example">Example</h2>
<pre><code class="language-py">primesL = [<span class="hljs-number">2</span>, <span class="hljs-number">5</span>, <span class="hljs-number">7</span>]
limit = <span class="hljs-number">500</span>
List of Numbers Under <span class="hljs-number">500</span>          Prime Factorization
___________________________________________________________
           <span class="hljs-number">70</span>                         [<span class="hljs-number">2</span>, <span class="hljs-number">5</span>, <span class="hljs-number">7</span>]
          <span class="hljs-number">140</span>                         [<span class="hljs-number">2</span>, <span class="hljs-number">2</span>, <span class="hljs-number">5</span>, <span class="hljs-number">7</span>]
          <span class="hljs-number">280</span>                         [<span class="hljs-number">2</span>, <span class="hljs-number">2</span>, <span class="hljs-number">2</span>, <span class="hljs-number">5</span>, <span class="hljs-number">7</span>]
          <span class="hljs-number">350</span>                         [<span class="hljs-number">2</span>, <span class="hljs-number">5</span>, <span class="hljs-number">5</span>, <span class="hljs-number">7</span>]
          <span class="hljs-number">490</span>                         [<span class="hljs-number">2</span>, <span class="hljs-number">5</span>, <span class="hljs-number">7</span>, <span class="hljs-number">7</span>]</code></pre>
<p>There are <code>5</code> of these numbers under <code>500</code> and the largest one is <code>490</code>.</p>
<h2 id="task">Task</h2>
<p>For this kata you have to create the function <code>count_find_num()</code>, that accepts two arguments: <code>primesL</code> and <code>limit</code>, and returns the amount of numbers that fulfill the requirements, and the largest number under <code>limit</code>.</p>
<p>The example given above will be:</p>
<pre><code class="language-python">primesL = [<span class="hljs-number">2</span>, <span class="hljs-number">5</span>, <span class="hljs-number">7</span>]
limit = <span class="hljs-number">500</span>
count_find_num(primesL, val) == [<span class="hljs-number">5</span>, <span class="hljs-number">490</span>]</code></pre>
<p>If no numbers can be generated under <code>limit</code> then return an empty list:</p>
<pre><code class="language-python">primesL = [<span class="hljs-number">2</span>, <span class="hljs-number">3</span>, <span class="hljs-number">47</span>]
limit = <span class="hljs-number">200</span>
find_nums(primesL, limit) == []</code></pre>
<p>The result should consider the limit as inclusive:</p>
<pre><code class="language-python">primesL = [<span class="hljs-number">2</span>, <span class="hljs-number">3</span>, <span class="hljs-number">47</span>]
limit = <span class="hljs-number">282</span>
find_nums(primesL, limit) == [<span class="hljs-number">1</span>, <span class="hljs-number">282</span>]</code></pre>
<p>Features of the random tests:</p>
<pre><code>number of tests = 200
2 &lt;= length_primesL &lt;= 6 // length of the given prime factors array
5000 &lt;= limit &lt;= 1e17
2 &lt;= prime &lt;= 499  // for every prime in primesL</code></pre><p>Enjoy!</p>

### Solution