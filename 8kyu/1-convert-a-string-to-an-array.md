### Problem:
<p>Write a function to split a string and convert it into an array of words. For example:</p>
<pre><code class="language-python">&quot;Robin Singh&quot; ==&gt; [&quot;Robin&quot;, &quot;Singh&quot;]

&quot;I love arrays they are my favorite&quot; ==&gt; [&quot;I&quot;, &quot;love&quot;, &quot;arrays&quot;, &quot;they&quot;, &quot;are&quot;, &quot;my&quot;, &quot;favorite&quot;]</code></pre>

### Solution
```javascript
function stringToArray(string){
  return string.split(' ');
}
```
