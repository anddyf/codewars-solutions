### Problem:
<p>John has some amount of money of which he wants to deposit a part <code>f0</code> to the bank at the beginning
of year <code>1</code>. He wants to withdraw each year for his living an amount <code>c0</code>.</p>
<p>Here is his banker plan:</p>
<ul>
<li>deposit <code>f0</code> at beginning of year 1</li>
<li>his bank account has an interest rate of <code>p</code> percent per year, constant over the years</li>
<li>John can withdraw each year <code>c0</code>, taking it whenever he wants in the year; he must take account of an inflation of <code>i</code> percent per year in order to keep his quality of living. <code>i</code> is supposed to stay constant over the years.</li>
<li>all amounts <code>f<sub>0</sub></code>..<code>f<sub>n-1</sub></code>, <code>c<sub>0</sub></code>..<code>c<sub>n-1</sub></code> are truncated by the bank to their integral part</li>
<li>Given <code>f<sub>0</sub></code>, <code>p</code>, <code>c<sub>0</sub></code>, <code>i</code> 
the banker guarantees that John will be able to go on that way until the <code>nth</code> year.</li>
</ul>
<h1 id="example">Example:</h1>
<pre><code>f0 = 100000, p = 1 percent, c0 = 2000, n = 15, i = 1 percent</code></pre><pre><code>beginning of year 2 -&gt; f1 = 100000 + 0.01*100000 - 2000 = 99000;  c1 = c0 + c0*0.01 = 2020 (with inflation of previous year)</code></pre><pre><code>beginning of year 3 -&gt; f2 =  99000 + 0.01*99000 - 2020  = 97970;  c2 = c1 + c1*0.01 = 2040.20 
(with inflation of previous year, truncated to 2040)</code></pre><pre><code>beginning of year 4 -&gt; f3 =  97970 + 0.01*97970 - 2040  = 96909.7 (truncated to 96909); 
c3 = c2 + c2*0.01 = 2060.4 (with inflation of previous year, truncated to 2060)</code></pre><p>and so on...</p>
<p>John wants to know if the bankers&apos;plan is right or wrong.
Given parameters <code>f0, p, c0, n, i</code> build a function <code>fortune</code> which returns <code>true</code> if John can make a living until the <code>nth</code> year
and <code>false</code> if it is not possible.</p>
<h1 id="some-cases">Some cases:</h1>
<pre><code>fortune(100000, 1, 2000, 15, 1) -&gt; True
fortune(100000, 1, 10000, 10, 1) -&gt; True
fortune(100000, 1, 9185, 12, 1) -&gt; False

For the last case you can find below the amounts of his account at the beginning of each year:
100000, 91815, 83457, 74923, 66211, 57318, 48241, 38977, 29523, 19877, 10035, -5</code></pre><pre><code>f<sub>11</sub> = -5 so he has no way to withdraw something for his living in year 12.</code></pre>

<blockquote>
<p><strong>Note:</strong> Don&apos;t forget to convert the percent parameters as percentages in the body of your function: if a parameter percent is 2 you have to convert it to 0.02.</p>
</blockquote>

### Solution