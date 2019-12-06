### Problem:
<p>Let&apos;s define <code>increasing</code> numbers as the numbers whose digits, read from left to right, are never less than the previous ones: 234559 is an example of increasing number.</p>
<p>Conversely, <code>decreasing</code> numbers have all the digits read from left to right so that no digits is bigger than the previous one: 97732 is an example of decreasing number.</p>
<p>You do not need to be the next Gauss to figure that all numbers with 1 or 2 digits are either increasing or decreasing: 00, 01, 02, ..., 98, 99 are all belonging to one of this categories (if not both, like 22 or 55): 101 is indeed the first number which does NOT fall into either of the categories. Same goes for all the numbers up to 109, while 110 is again a decreasing number.</p>
<p>Now your task is rather easy to declare (a bit less to perform): you have to build a function to return the total occurrences of all the increasing or decreasing numbers <em>below</em> 10 raised to the xth power (x will always be &gt;= 0).</p>
<p>To give you a starting point, there are a grand total of increasing and decreasing numbers as shown in the table:</p>
<p>|Total  | Below
|---------------
|1      | 1
|10     | 10
|100    | 100
|475    | 1000
|1675   | 10000
|4954   | 100000
|12952  | 1000000</p>
<p>This means that your function will have to behave like this:</p>
<pre><code class="language-python">total_inc_dec(<span class="hljs-number">0</span>)==<span class="hljs-number">1</span>
total_inc_dec(<span class="hljs-number">1</span>)==<span class="hljs-number">10</span>
total_inc_dec(<span class="hljs-number">2</span>)==<span class="hljs-number">100</span>
total_inc_dec(<span class="hljs-number">3</span>)==<span class="hljs-number">475</span>
total_inc_dec(<span class="hljs-number">4</span>)==<span class="hljs-number">1675</span>
total_inc_dec(<span class="hljs-number">5</span>)==<span class="hljs-number">4954</span>
total_inc_dec(<span class="hljs-number">6</span>)==<span class="hljs-number">12952</span></code></pre>
<pre style="display: none;"><code class="language-javascript">totalIncDec(<span class="hljs-number">0</span>)==<span class="hljs-number">1</span>
totalIncDec(<span class="hljs-number">1</span>)==<span class="hljs-number">10</span>
totalIncDec(<span class="hljs-number">2</span>)==<span class="hljs-number">100</span>
totalIncDec(<span class="hljs-number">3</span>)==<span class="hljs-number">475</span>
totalIncDec(<span class="hljs-number">4</span>)==<span class="hljs-number">1675</span>
totalIncDec(<span class="hljs-number">5</span>)==<span class="hljs-number">4954</span>
totalIncDec(<span class="hljs-number">6</span>)==<span class="hljs-number">12952</span></code></pre>
<pre style="display: none;"><code class="language-ruby">total_inc_dec(<span class="hljs-number">0</span>)==<span class="hljs-number">1</span>
total_inc_dec(<span class="hljs-number">1</span>)==<span class="hljs-number">10</span>
total_inc_dec(<span class="hljs-number">2</span>)==<span class="hljs-number">100</span>
total_inc_dec(<span class="hljs-number">3</span>)==<span class="hljs-number">475</span>
total_inc_dec(<span class="hljs-number">4</span>)==<span class="hljs-number">1675</span>
total_inc_dec(<span class="hljs-number">5</span>)==<span class="hljs-number">4954</span>
total_inc_dec(<span class="hljs-number">6</span>)==<span class="hljs-number">12952</span></code></pre>
<pre style="display: none;"><code class="language-haskell"><span class="hljs-title">totalIncDec</span> <span class="hljs-number">0</span> `shouldBe` <span class="hljs-number">1</span>
<span class="hljs-title">totalIncDec</span> <span class="hljs-number">1</span> `shouldBe` <span class="hljs-number">10</span>
<span class="hljs-title">totalIncDec</span> <span class="hljs-number">2</span> `shouldBe` <span class="hljs-number">100</span>
<span class="hljs-title">totalIncDec</span> <span class="hljs-number">3</span> `shouldBe` <span class="hljs-number">475</span>
<span class="hljs-title">totalIncDec</span> <span class="hljs-number">4</span> `shouldBe` <span class="hljs-number">1675</span>
<span class="hljs-title">totalIncDec</span> <span class="hljs-number">5</span> `shouldBe` <span class="hljs-number">4954</span>
<span class="hljs-title">totalIncDec</span> <span class="hljs-number">6</span> `shouldBe` <span class="hljs-number">12952</span></code></pre>
<pre style="display: none;"><code class="language-clojure">total-inc-dec 0 =&gt; 1
total-inc-dec 1 =&gt; 10
total-inc-dec 2 =&gt; 100
total-inc-dec 3 =&gt; 475
total-inc-dec 4 =&gt; 1675
total-inc-dec 5 =&gt; 4954
total-inc-dec 6 =&gt; 12952</code></pre>
<pre style="display: none;"><code class="language-csharp">TotalIncDec(<span class="hljs-number">0</span>) == <span class="hljs-number">1</span>
TotalIncDec(<span class="hljs-number">1</span>) == <span class="hljs-number">10</span>
TotalIncDec(<span class="hljs-number">2</span>) == <span class="hljs-number">100</span>
TotalIncDec(<span class="hljs-number">3</span>) == <span class="hljs-number">475</span>
TotalIncDec(<span class="hljs-number">4</span>) == <span class="hljs-number">1675</span>
TotalIncDec(<span class="hljs-number">5</span>) == <span class="hljs-number">4954</span>
TotalIncDec(<span class="hljs-number">6</span>) == <span class="hljs-number">12952</span></code></pre>
<pre style="display: none;"><code class="language-coffeescript">totalIncDec(<span class="hljs-number">0</span>)==<span class="hljs-number">1</span>
totalIncDec(<span class="hljs-number">1</span>)==<span class="hljs-number">10</span>
totalIncDec(<span class="hljs-number">2</span>)==<span class="hljs-number">100</span>
totalIncDec(<span class="hljs-number">3</span>)==<span class="hljs-number">475</span>
totalIncDec(<span class="hljs-number">4</span>)==<span class="hljs-number">1675</span>
totalIncDec(<span class="hljs-number">5</span>)==<span class="hljs-number">4954</span>
totalIncDec(<span class="hljs-number">6</span>)==<span class="hljs-number">12952</span></code></pre>
<pre style="display: none;"><code class="language-java">totalIncDec(<span class="hljs-number">0</span>)==<span class="hljs-number">1</span>
totalIncDec(<span class="hljs-number">1</span>)==<span class="hljs-number">10</span>
totalIncDec(<span class="hljs-number">2</span>)==<span class="hljs-number">100</span>
totalIncDec(<span class="hljs-number">3</span>)==<span class="hljs-number">475</span>
totalIncDec(<span class="hljs-number">4</span>)==<span class="hljs-number">1675</span>
totalIncDec(<span class="hljs-number">5</span>)==<span class="hljs-number">4954</span>
totalIncDec(<span class="hljs-number">6</span>)==<span class="hljs-number">12952</span></code></pre>
<pre style="display: none;"><code class="language-scala">totalIncDec(<span class="hljs-number">0</span>) should be (<span class="hljs-number">1</span>)
totalIncDec(<span class="hljs-number">1</span>) should be (<span class="hljs-number">10</span>)
totalIncDec(<span class="hljs-number">2</span>) should be (<span class="hljs-number">100</span>)
totalIncDec(<span class="hljs-number">3</span>) should be (<span class="hljs-number">475</span>)
totalIncDec(<span class="hljs-number">4</span>) should be (<span class="hljs-number">1675</span>)
totalIncDec(<span class="hljs-number">5</span>) should be (<span class="hljs-number">4954</span>)
totalIncDec(<span class="hljs-number">6</span>) should be (<span class="hljs-number">12952</span>)</code></pre>
<pre style="display: none;"><code class="language-racket">(<span class="hljs-name"><span class="hljs-builtin-name">equal?</span></span> (<span class="hljs-name">total-inc-dec</span> <span class="hljs-number">0</span>) <span class="hljs-number">1</span>)
(<span class="hljs-name"><span class="hljs-builtin-name">equal?</span></span> (<span class="hljs-name">total-inc-dec</span> <span class="hljs-number">1</span>) <span class="hljs-number">10</span>)
(<span class="hljs-name"><span class="hljs-builtin-name">equal?</span></span> (<span class="hljs-name">total-inc-dec</span> <span class="hljs-number">2</span>) <span class="hljs-number">100</span>)
(<span class="hljs-name"><span class="hljs-builtin-name">equal?</span></span> (<span class="hljs-name">total-inc-dec</span> <span class="hljs-number">3</span>) <span class="hljs-number">475</span>)
(<span class="hljs-name"><span class="hljs-builtin-name">equal?</span></span> (<span class="hljs-name">total-inc-dec</span> <span class="hljs-number">4</span>) <span class="hljs-number">1675</span>)
(<span class="hljs-name"><span class="hljs-builtin-name">equal?</span></span> (<span class="hljs-name">total-inc-dec</span> <span class="hljs-number">5</span>) <span class="hljs-number">4954</span>)
(<span class="hljs-name"><span class="hljs-builtin-name">equal?</span></span> (<span class="hljs-name">total-inc-dec</span> <span class="hljs-number">6</span>) <span class="hljs-number">12952</span>)</code></pre>
<p><strong>Tips:</strong> efficiency and trying to figure out how it works are essential: with a brute force approach, some tests with larger numbers may take more than the total computing power currently on Earth to be finished in the short allotted time.</p>
<p>To make it even clearer, the increasing or decreasing numbers between in the range 101-200 are: [110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 122, 123, 124, 125, 126, 127, 128, 129, 133, 134, 135, 136, 137, 138, 139, 144, 145, 146, 147, 148, 149, 155, 156, 157, 158, 159, 166, 167, 168, 169, 177, 178, 179, 188, 189, 199, 200], that is 47 of them. In the following range, 201-300, there are 41 of them and so on, getting rarer and rarer.</p>
<p><strong>Trivia:</strong> just for the sake of your own curiosity, a number which is neither decreasing of increasing is called a <code>bouncy</code> number, like, say, 3848 or 37294; also, usually 0 is not considered being increasing, decreasing or bouncy, but it will be for the purpose of this kata</p>

### Solution