### Problem:
<p><a href="http://base91.sourceforge.net/" target="_blank">BasE91</a> is a method for encoding binary as ASCII characters. It is more efficient than Base64 and needs 91 characters to represent the encoded data.</p>
<p>The following ASCII charakters are used:</p>
<pre><code>&apos;ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789&apos;
&apos;!#$%&amp;()*+,./:;&lt;=&gt;?@[]^_`{|}~&quot;&apos;</code></pre><p>Create two functions that encode strings to basE91 string and decodes the other way round. </p>
<pre><code>b91encode(&apos;test&apos;) = &apos;fPNKd&apos;
b91decode(&apos;fPNKd&apos;) = &apos;test&apos;

b91decode(&apos;&gt;OwJh&gt;Io0Tv!8PE&apos;) = &apos;Hello World!&apos;
b91encode(&apos;Hello World!&apos;) = &apos;&gt;OwJh&gt;Io0Tv!8PE&apos;</code></pre><p>Input strings are valid.</p>

### Solution