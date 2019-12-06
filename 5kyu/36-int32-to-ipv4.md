### Problem:
<p>Take the following IPv4 address: <code>128.32.10.1</code></p>
<p>This address has 4 octets where each octet is a single byte (or 8 bits).</p>
<ul>
<li>1st octet <code>128</code> has the binary representation: <code>10000000</code></li>
<li>2nd octet <code>32</code> has the binary representation: <code>00100000</code></li>
<li>3rd octet <code>10</code> has the binary representation: <code>00001010</code></li>
<li>4th octet <code>1</code> has the binary representation: <code>00000001</code></li>
</ul>
<p>So <code>128.32.10.1</code> == <code>10000000.00100000.00001010.00000001</code></p>
<p>Because the above IP address has 32 bits, we can represent it as the unsigned 32 bit number: <code>2149583361</code></p>
<p>Complete the function that takes an unsigned 32 bit number and returns a string representation of its IPv4 address.</p>
<h2 id="examples">Examples</h2>
<pre><code>2149583361 ==&gt; &quot;128.32.10.1&quot;
32         ==&gt; &quot;0.0.0.32&quot;
0          ==&gt; &quot;0.0.0.0&quot;</code></pre>
### Solution