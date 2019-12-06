### Problem:
<h3 id="count-the-number-of-duplicates">Count the number of Duplicates</h3>
<p>Write a function that will return the count of <strong>distinct case-insensitive</strong> alphabetic characters and numeric digits that occur more than 
once in the input string. 
The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.</p>
<h3 id="example">Example</h3>
<p>&quot;abcde&quot; -&gt; 0             <code># no characters repeats more than once</code><br>&quot;aabbcde&quot; -&gt; 2           <code># &apos;a&apos; and &apos;b&apos;</code><br>&quot;aabBcde&quot; -&gt; 2           <code># &apos;a&apos; occurs twice and &apos;b&apos; twice (`b` and `B`)</code><br>&quot;indivisibility&quot; -&gt; 1    <code># &apos;i&apos; occurs six times</code><br>&quot;Indivisibilities&quot; -&gt; 2  <code># &apos;i&apos; occurs seven times and &apos;s&apos; occurs twice</code><br>&quot;aA11&quot; -&gt; 2              <code># &apos;a&apos; and &apos;1&apos;</code><br>&quot;ABBA&quot; -&gt; 2              <code># &apos;A&apos; and &apos;B&apos; each occur twice</code></p>

### Solution