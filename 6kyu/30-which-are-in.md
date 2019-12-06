### Problem:
<p>Given two arrays of strings <code>a1</code> and <code>a2</code> return a sorted array <code>r</code> in lexicographical order of the strings of <code>a1</code> which are substrings of strings of <code>a2</code>.</p>
<p>#Example 1:
<code>a1 = [&quot;arp&quot;, &quot;live&quot;, &quot;strong&quot;]</code></p>
<p><code>a2 = [&quot;lively&quot;, &quot;alive&quot;, &quot;harp&quot;, &quot;sharp&quot;, &quot;armstrong&quot;]</code></p>
<p>returns <code>[&quot;arp&quot;, &quot;live&quot;, &quot;strong&quot;]</code></p>
<p>#Example 2:
<code>a1 = [&quot;tarp&quot;, &quot;mice&quot;, &quot;bull&quot;]</code></p>
<p><code>a2 = [&quot;lively&quot;, &quot;alive&quot;, &quot;harp&quot;, &quot;sharp&quot;, &quot;armstrong&quot;]</code></p>
<p>returns <code>[]</code></p>
<h1 id="notes">Notes:</h1>
<ul>
<li><p>Arrays are written in &quot;general&quot; notation. See &quot;Your Test Cases&quot; for examples in your language.</p>
</li>
<li><p>In Shell bash <code>a1</code> and <code>a2</code> are strings. The return is a string where words are separated by commas.</p>
</li>
</ul>
<ul>
<li>Beware: <code>r</code> must be without duplicates.</li>
<li>Don&apos;t mutate the inputs.</li>
</ul>

### Solution