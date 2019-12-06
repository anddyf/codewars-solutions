### Problem:
<p>The Dynamic Connectivity Problem</p>
<p>Given a set of of N objects, is there a path connecting the two objects?</p>
<p>Implement an class that implements the following API:</p>
<ul>
<li>Takes n as input, initializing a data-structure with N objects (0...N-1)</li>
<li>Implements a Union command that adds a connection between point p and point q</li>
<li>Implements a Connected command that returns a boolean and asks is there a connection between point p and point q</li>
</ul>
<p>As a simple example: 
Imagine you initialize an data structure filled with integers from 0 to 9 (N = 10)</p>
<pre><code class="language-python">  results1 = DynamicConnectivity(<span class="hljs-number">10</span>)</code></pre>
<p>You will receive a series of union commands linking various points</p>
<pre><code class="language-python">  results1.union(<span class="hljs-number">4</span>,<span class="hljs-number">3</span>)
  results1.union(<span class="hljs-number">3</span>,<span class="hljs-number">8</span>)
  results1.union(<span class="hljs-number">6</span>,<span class="hljs-number">5</span>)
  results1.union(<span class="hljs-number">9</span>,<span class="hljs-number">4</span>)
  results1.union(<span class="hljs-number">2</span>,<span class="hljs-number">1</span>)</code></pre>
<p>This should result in 5 groups of connections:</p>
<ul>
<li>3,4,8,9</li>
<li>5,6</li>
<li>2,1</li>
<li>0</li>
<li>7</li>
</ul>
<p>All members of a groups (set) are conected to every other member
If you asked is 0 connected to 7, it should return False
If you asked is 8 connected to 9 you should return True even if 8,9 wern&apos;t directly joined.
(8 is connected to 3 which is connected to 4 which is connected to 9)</p>
<pre><code class="language-python">  results1.connected(<span class="hljs-number">0</span>,<span class="hljs-number">7</span>) == <span class="hljs-literal">False</span>
  results1.connected(<span class="hljs-number">8</span>,<span class="hljs-number">9</span>) == <span class="hljs-literal">True</span></code></pre>
<p>For the purposes of this problem, you do not have to mainatin the order of the connections, you just have to know that the connection is there.</p>
<p>Hint:
  There is a naive implenetation that takes time proportional to O(n^2) (Quadratic Funtion)
  <strong>This will time out the problem</strong>
  (Because every time you double the input like from 50 nodes to 100 nodes, the function takes <strong>4</strong> times as long)
  Test will check that you are able to outrun this naive implementation. If you can&apos;t that means that your code is too slow</p>
<p>  There is a solution that takes linearitmic time or faster O(n * lg n)</p>
<p>Hint Two: (Take it or leave it)
  If you find yourself nesting a loop inside a loop, you are creating a quadratic function</p>
<p>Implementation must be able to handle initializing 1 million nodes, and creating connections between those nodes.</p>
<p>Full Tests before submission generate random connections to make sure you can&apos;t hard code the connections into your class.</p>

### Solution