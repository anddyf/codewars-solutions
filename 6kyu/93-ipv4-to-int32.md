### Problem:
<p>Take the following IPv4 address:  128.32.10.1
This address has 4 octets where each octet is a single byte (or 8 bits).</p>
<ul>
<li>1st octet 128 has the binary representation: 10000000</li>
<li>2nd octet 32 has the binary representation: 00100000</li>
<li>3rd octet 10 has the binary representation: 00001010</li>
<li>4th octet 1 has the binary representation: 00000001</li>
</ul>
<p>So 128.32.10.1 == 10000000.00100000.00001010.00000001</p>
<p>Because the above IP address has 32 bits, we can represent it as the 32
bit number: 2149583361.</p>
<p>Write a function ip_to_int32(ip) ( <strong>JS</strong>: <code>ipToInt32(ip)</code> ) that takes an IPv4 address and returns
a 32 bit number.</p>
<pre><code class="language-ruby">  ip_to_int32(<span class="hljs-string">&quot;128.32.10.1&quot;</span>) =&gt; <span class="hljs-number">2149583361</span></code></pre>
<pre style="display: none;"><code class="language-python">  ip_to_int32(&quot;128.32.10.1&quot;) =&gt; 2149583361</code></pre>
<pre style="display: none;"><code class="language-javascript">  ipToInt32(<span class="hljs-string">&quot;128.32.10.1&quot;</span>) =&gt; <span class="hljs-number">2149583361</span></code></pre>

### Solution