### Problem:
<p>This is the second part of a two-part challenge. See <a href="https://www.codewars.com/kata/587387d169b6fddc16000002" target="_blank">part I</a> if you haven&apos;t done so already.
The problem is the same, only with longer lists and larger values.</p>
<p>Imagine you have a number of jobs to execute. Your workers are not permanently connected to your network, so you have to distribute all your jobs in the beginning. Luckily, you know exactly how long each job is going to take. </p>
<p>Let </p>
<pre><code>x = [2,3,4,6,8,2]</code></pre><p>be the amount of time each of your jobs is going to take.</p>
<p>Your task is to write a function <code>splitlist(x)</code>, that will return two lists <code>a</code> and <code>b</code>, such that <code>abs(sum(a)-sum(b))</code> is minimised.</p>
<p>One possible solution to this example would be </p>
<pre><code>a=[2, 4, 6]
b=[3, 8, 2]</code></pre><p>with  <code>abs(sum(a)-sum(b)) == 1</code>.</p>
<p>The order of the elements is not tested, just make sure that you minimise <code>abs(sum(a)-sum(b))</code> and that <code>sorted(a+b)==sorted(x)</code>.</p>
<p>You may assume that <code>len(x)&lt;=40</code> and <code>0&lt;=x[i]&lt;=1000</code>.</p>

### Solution