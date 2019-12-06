### Problem:
<p>There is a queue for the self-checkout tills at the supermarket. Your task is write a function to calculate the total time required for all the customers to check out!</p>
<h3 id="input">input</h3>
<ul>
<li>customers: an array of positive integers representing the queue. Each integer represents a customer, and its value is the amount of time they require to check out.</li>
<li>n: a positive integer, the number of checkout tills.</li>
</ul>
<h3 id="output">output</h3>
<p>The function should return an integer, the total time required.</p>
<hr>
<h2 id="important">Important</h2>
<p><strong>Please look at the examples and clarifications below, to ensure you understand the task correctly :)</strong></p>
<hr>
<h3 id="examples">Examples</h3>
<pre><code class="language-javascript">queueTime([<span class="hljs-number">5</span>,<span class="hljs-number">3</span>,<span class="hljs-number">4</span>], <span class="hljs-number">1</span>)
<span class="hljs-comment">// should return 12</span>
<span class="hljs-comment">// because when there is 1 till, the total time is just the sum of the times</span>

queueTime([<span class="hljs-number">10</span>,<span class="hljs-number">2</span>,<span class="hljs-number">3</span>,<span class="hljs-number">3</span>], <span class="hljs-number">2</span>)
<span class="hljs-comment">// should return 10</span>
<span class="hljs-comment">// because here n=2 and the 2nd, 3rd, and 4th people in the </span>
<span class="hljs-comment">// queue finish before the 1st person has finished.</span>

queueTime([<span class="hljs-number">2</span>,<span class="hljs-number">3</span>,<span class="hljs-number">10</span>], <span class="hljs-number">2</span>)
<span class="hljs-comment">// should return 12</span></code></pre>
<pre style="display: none;"><code class="language-haskell"><span class="hljs-title">queueTime</span> [<span class="hljs-number">5</span>,<span class="hljs-number">3</span>,<span class="hljs-number">4</span>] <span class="hljs-number">1</span>
<span class="hljs-comment">-- should return 12</span>
<span class="hljs-comment">-- because when there is 1 till, the total time is just the sum of the times</span>

<span class="hljs-title">queueTime</span> [<span class="hljs-number">10</span>,<span class="hljs-number">2</span>,<span class="hljs-number">3</span>,<span class="hljs-number">3</span>] <span class="hljs-number">2</span>
<span class="hljs-comment">-- should return 10</span>
<span class="hljs-comment">-- because here n=2 and the 2nd, 3rd, and 4th people in the </span>
<span class="hljs-comment">-- queue finish before the 1st person has finished.</span>

<span class="hljs-title">queueTime</span> [<span class="hljs-number">2</span>,<span class="hljs-number">3</span>,<span class="hljs-number">10</span>] <span class="hljs-number">2</span>
<span class="hljs-comment">-- should return 12</span></code></pre>
<pre style="display: none;"><code class="language-python">queue_time([<span class="hljs-number">5</span>,<span class="hljs-number">3</span>,<span class="hljs-number">4</span>], <span class="hljs-number">1</span>)
<span class="hljs-comment"># should return 12</span>
<span class="hljs-comment"># because when n=1, the total time is just the sum of the times</span>

queue_time([<span class="hljs-number">10</span>,<span class="hljs-number">2</span>,<span class="hljs-number">3</span>,<span class="hljs-number">3</span>], <span class="hljs-number">2</span>)
<span class="hljs-comment"># should return 10</span>
<span class="hljs-comment"># because here n=2 and the 2nd, 3rd, and 4th people in the </span>
<span class="hljs-comment"># queue finish before the 1st person has finished.</span>

queue_time([<span class="hljs-number">2</span>,<span class="hljs-number">3</span>,<span class="hljs-number">10</span>], <span class="hljs-number">2</span>)
<span class="hljs-comment"># should return 12</span></code></pre>
<pre style="display: none;"><code class="language-ruby">queue_time([<span class="hljs-number">5</span>,<span class="hljs-number">3</span>,<span class="hljs-number">4</span>], <span class="hljs-number">1</span>)
<span class="hljs-comment"># should return 12</span>
<span class="hljs-comment"># because when n=1, the total time is just the sum of the times</span>

queue_time([<span class="hljs-number">10</span>,<span class="hljs-number">2</span>,<span class="hljs-number">3</span>,<span class="hljs-number">3</span>], <span class="hljs-number">2</span>)
<span class="hljs-comment"># should return 10</span>
<span class="hljs-comment"># because here n=2 and the 2nd, 3rd, and 4th people in the </span>
<span class="hljs-comment"># queue finish before the 1st person has finished.</span>

queue_time([<span class="hljs-number">2</span>,<span class="hljs-number">3</span>,<span class="hljs-number">10</span>], <span class="hljs-number">2</span>)
<span class="hljs-comment"># should return 12</span></code></pre>
<pre style="display: none;"><code class="language-cpp">queueTime(<span class="hljs-built_in">std</span>::<span class="hljs-built_in">vector</span>&lt;<span class="hljs-keyword">int</span>&gt;{<span class="hljs-number">5</span>,<span class="hljs-number">3</span>,<span class="hljs-number">4</span>}, <span class="hljs-number">1</span>)
<span class="hljs-comment">// should return 12</span>
<span class="hljs-comment">// because when n=1, the total time is just the sum of the times</span>

queueTime(<span class="hljs-built_in">std</span>::<span class="hljs-built_in">vector</span>&lt;<span class="hljs-keyword">int</span>&gt;{<span class="hljs-number">10</span>,<span class="hljs-number">2</span>,<span class="hljs-number">3</span>,<span class="hljs-number">3</span>}, <span class="hljs-number">2</span>)
<span class="hljs-comment">// should return 10</span>
<span class="hljs-comment">// because here n=2 and the 2nd, 3rd, and 4th people in the </span>
<span class="hljs-comment">// queue finish before the 1st person has finished.</span>

queueTime(<span class="hljs-built_in">std</span>::<span class="hljs-built_in">vector</span>&lt;<span class="hljs-keyword">int</span>&gt;{<span class="hljs-number">2</span>,<span class="hljs-number">3</span>,<span class="hljs-number">10</span>}, <span class="hljs-number">2</span>)
<span class="hljs-comment">// should return 12</span></code></pre>
<pre style="display: none;"><code class="language-fsharp">queueTime [<span class="hljs-number">5</span>;<span class="hljs-number">3</span>;<span class="hljs-number">4</span>] <span class="hljs-number">1</span>
<span class="hljs-comment">// should return 12</span>
<span class="hljs-comment">// because when there is 1 till, the total time is just the sum of the times</span>

queueTime [<span class="hljs-number">10</span>;<span class="hljs-number">2</span>;<span class="hljs-number">3</span>;<span class="hljs-number">3</span>] <span class="hljs-number">2</span>
<span class="hljs-comment">// should return 10</span>
<span class="hljs-comment">// because here n=2 and the 2nd, 3rd, and 4th people in the </span>
<span class="hljs-comment">// queue finish before the 1st person has finished.</span>

queueTime [<span class="hljs-number">2</span>;<span class="hljs-number">3</span>;<span class="hljs-number">10</span>] <span class="hljs-number">2</span>
<span class="hljs-comment">// should return 12</span></code></pre>
<pre style="display: none;"><code class="language-c"><span class="hljs-keyword">int</span> customers1[] = {<span class="hljs-number">5</span>, <span class="hljs-number">3</span>, <span class="hljs-number">4</span>};
<span class="hljs-keyword">int</span> customers1_length = <span class="hljs-number">3</span>;
<span class="hljs-keyword">int</span> n1 = <span class="hljs-number">1</span>;
queueTime(customers1, customers1_length, n1)
<span class="hljs-comment">// should return 12</span>
<span class="hljs-comment">// because when n=1, the total time is just the sum of the times</span>

<span class="hljs-keyword">int</span> customers2[] = {<span class="hljs-number">10</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>, <span class="hljs-number">3</span>};
<span class="hljs-keyword">int</span> customers2_length = <span class="hljs-number">4</span>;
<span class="hljs-keyword">int</span> n2 = <span class="hljs-number">2</span>;
queueTime(customers2, customers2_length, n2)
<span class="hljs-comment">// should return 10</span>
<span class="hljs-comment">// because here n=2 and the 2nd, 3rd, and 4th people in the </span>
<span class="hljs-comment">// queue finish before the 1st person has finished.</span>

<span class="hljs-keyword">int</span> customers3[] = {<span class="hljs-number">2</span>, <span class="hljs-number">3</span>, <span class="hljs-number">10</span>};
<span class="hljs-keyword">int</span> customers3_length = <span class="hljs-number">3</span>;
<span class="hljs-keyword">int</span> n3 = <span class="hljs-number">2</span>;
queueTime(customers3, customers3_length, n3)
<span class="hljs-comment">// should return 12</span></code></pre>
<h3 id="clarifications">Clarifications</h3>
<ul>
<li>There is only ONE queue serving many tills, and</li>
<li>The order of the queue NEVER changes, and</li>
<li>The front person in the queue (i.e. the first element in the array/list) proceeds to a till as soon as it becomes free.</li>
</ul>
<p>N.B. You should assume that all the test input will be valid, as specified above.</p>
<p>P.S. The situation in this kata can be likened to the more-computer-science-related idea of a thread pool, with relation to running multiple processes at the same time: <a href="https://en.wikipedia.org/wiki/Thread_pool" target="_blank">https://en.wikipedia.org/wiki/Thread_pool</a></p>

### Solution