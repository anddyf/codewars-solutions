### Problem:
<blockquote>
<p>When no more interesting kata can be resolved, I just choose to create the new kata, to solve their own, to enjoy the process  --myjinxin2015 said</p>
</blockquote>
<h1 id="description">Description:</h1>
<p> Given a string <code>str</code> that contains some &quot;(&quot; or &quot;)&quot;. Your task is to find the longest substring in <code>str</code>(all brackets in the substring are closed). The result is the length of the longest substring.</p>
<p> For example:</p>
<pre><code> str = &quot;()()(&quot;
 findLongest(str) === 4 
 &quot;()()&quot; is the longest substring</code></pre><h1 id="note">Note:</h1>
<ul>
<li>All inputs are valid.</li>
<li>If no such substring found, return 0.</li>
<li>Please pay attention to the performance of code. ;-)</li>
<li>In the performance test(100000 brackets str x 100 testcases), the time consuming of each test case should be within 35ms. This means, your code should run as fast as a rocket ;-) </li>
</ul>
<h1 id="some-examples">Some Examples</h1>
<pre><code> findLongest(&quot;()&quot;) === 2
 findLongest(&quot;()(&quot;) === 2
 findLongest(&quot;()()&quot;) === 4
 findLongest(&quot;()()(&quot;) === 4
 findLongest(&quot;(()())&quot;) === 6
 findLongest(&quot;(()(())&quot;) === 6
 findLongest(&quot;())(()))&quot;) === 4
 findLongest(&quot;))((&quot;) === 0
 findLongest(&quot;&quot;) === 0</code></pre>
### Solution