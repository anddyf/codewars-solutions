### Problem:
<p>Write a method that will search an array of strings for all strings that contain another string, ignoring capitalization. Then return an array of the found strings. </p>
<p>The method takes two parameters, the query string and the array of strings to search, and returns an array. </p>
<p>If the string isn&apos;t contained in any of the strings in the array, the method returns an array containing a single string: &quot;Empty&quot; (or <code>Nothing</code> in Haskell, or &quot;None&quot; in Python and C)</p>
<h3 id="examples">Examples</h3>
<p>If the string to search for is &quot;me&quot;, and the array to search is [&quot;home&quot;, &quot;milk&quot;, &quot;Mercury&quot;, &quot;fish&quot;], the method should return [&quot;home&quot;, &quot;Mercury&quot;].</p>

### Solution