### Problem:
<blockquote>
<p>When no more interesting kata can be resolved, I just choose to create the new kata, to solve their own, to enjoy the process  --myjinxin2015 said</p>
</blockquote>
<h1 id="description">Description:</h1>
<p> There is a infinite string. You can imagine it&apos;s a combination of numbers from 1 to n, like this:</p>
<pre><code> &quot;123456789101112131415....n-2n-1n&quot;</code></pre><p> Please note: the length of the string is infinite. It depends on how long you need it(I can&apos;t offer it as a argument, it only exists in your imagination) ;-)</p>
<p> Your task is complete function <code>findPosition</code> that accept a digital string <code>num</code>. Returns the position(index) of the digital string(the first appearance).</p>
<p> For example:</p>
<pre><code> findPosition(&quot;456&quot;) == 3
 because &quot;123456789101112131415&quot;.indexOf(&quot;456&quot;) = 3
             ^^^</code></pre><p> Is it simple? No, It is more difficult than you think ;-) </p>
<pre><code> findPosition(&quot;454&quot;) = ?
 Oh, no! There is no &quot;454&quot; in &quot;123456789101112131415&quot;,
 so we should return -1?
 No, I said, this is a string of infinite length.
 We need to increase the length of the string to find &quot;454&quot;

 findPosition(&quot;454&quot;) == 79
 because &quot;123456789101112131415...44454647&quot;.indexOf(&quot;454&quot;)=79
                                    ^^^</code></pre><p> The length of argument <code>num</code> is 2 to 15. So now there are two ways: one is to create a huge own string to find the index position; Or thinking about an algorithm to calculate the index position. </p>
<p> Which way would you choose? ;-)</p>
<h1 id="some-examples">Some examples:</h1>
<pre><code> findPosition(&quot;456&quot;) == 3
 (&quot;...3456...&quot;)
       ^^^
 findPosition(&quot;454&quot;) == 79
 (&quot;...444546...&quot;)
        ^^^
 findPosition(&quot;455&quot;) == 98
 (&quot;...545556...&quot;)
       ^^^
 findPosition(&quot;910&quot;) == 8
 (&quot;...7891011...&quot;)
        ^^^
 findPosition(&quot;9100&quot;) == 188
 (&quot;...9899100101...&quot;)
         ^^^^
 findPosition(&quot;99100&quot;) == 187
 (&quot;...9899100101...&quot;)
        ^^^^^
 findPosition(&quot;00101&quot;) == 190
 (&quot;...99100101...&quot;)
         ^^^^^
 findPosition(&quot;001&quot;) == 190
 (&quot;...9899100101...&quot;)
           ^^^
 findPosition(&quot;123456789&quot;) == 0
 findPosition(&quot;1234567891&quot;) == 0
 findPosition(&quot;123456798&quot;) == 1000000071</code></pre><p>A bit difficulty, A bit of fun, happy coding ;-)</p>

### Solution