### Problem:
<p>Write an algorithm that will identify valid IPv4 addresses in dot-decimal format. IPs should be considered valid if they consist of four octets, with values between <code>0</code> and <code>255</code>, inclusive.</p>
<p>Input to the function is guaranteed to be a single string.</p>
<h3 id="examples">Examples</h3>
<p>Valid inputs:</p>
<pre><code>1.2.3.4
123.45.67.89</code></pre><p>Invalid inputs:</p>
<pre><code>1.2.3
1.2.3.4.5
123.456.78.90
123.045.067.089</code></pre><p>Note that leading zeros (e.g. <code>01.02.03.04</code>) are considered invalid.</p>

### Solution