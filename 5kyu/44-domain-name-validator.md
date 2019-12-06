### Problem:
<p>In this kata you have to create a domain name validator mostly compliant with RFC 1035, RFC 1123, and RFC 2181</p>
<p>For purposes of this kata, following rules apply:</p>
<ul>
<li>Domain name may contain subdomains (levels), hierarchically separated by . (period) character</li>
<li>Domain name must not contain more than 127 levels, including <a href="https://en.wikipedia.org/wiki/Top-level_domain" target="_blank">top level (TLD)</a></li>
<li>Domain name must not be longer than 253 characters (RFC specifies 255, but 2 characters are reserved for trailing dot and null character for root level)</li>
<li>Level names must be composed out of lowercase and uppercase ASCII letters, digits and - (minus sign) character</li>
<li>Level names must not start or end with - (minus sign) character</li>
<li>Level names must not be longer than 63 characters</li>
<li>Top level (TLD) must not be fully numerical</li>
</ul>
<p>Additionally, in this kata</p>
<ul>
<li>Domain name must contain at least one subdomain (level) apart from TLD</li>
<li>Top level validation must be naive - ie. TLDs nonexistent in IANA register are still considered valid as long as they adhere to the rules given above.</li>
</ul>
<p>The validation function accepts string with the full domain name and returns boolean value indicating whether the domain name is valid or not.</p>
<p>Examples:</p>
<pre><code class="language-python">validate(<span class="hljs-string">&apos;codewars&apos;</span>) == <span class="hljs-literal">False</span>
validate(<span class="hljs-string">&apos;g.co&apos;</span>) == <span class="hljs-literal">True</span>
validate(<span class="hljs-string">&apos;codewars.com&apos;</span>) == <span class="hljs-literal">True</span>
validate(<span class="hljs-string">&apos;CODEWARS.COM&apos;</span>) == <span class="hljs-literal">True</span>
validate(<span class="hljs-string">&apos;sub.codewars.com&apos;</span>) == <span class="hljs-literal">True</span>
validate(<span class="hljs-string">&apos;codewars.com-&apos;</span>) == <span class="hljs-literal">False</span>
validate(<span class="hljs-string">&apos;.codewars.com&apos;</span>) == <span class="hljs-literal">False</span>
validate(<span class="hljs-string">&apos;example@codewars.com&apos;</span>) == <span class="hljs-literal">False</span>
validate(<span class="hljs-string">&apos;127.0.0.1&apos;</span>) == <span class="hljs-literal">False</span></code></pre>

### Solution