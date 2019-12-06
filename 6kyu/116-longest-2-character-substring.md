### Problem:
<p>Find the longest substring within a string that contains at most 2 unique characters.</p>
<pre><code>substring(&quot;a&quot;) =&gt; &quot;a&quot;
substring(&quot;aaa&quot;) =&gt; &quot;aaa&quot;
substring(&quot;abacd&quot;) =&gt; &quot;aba&quot;
substring(&quot;abacddcd&quot;) =&gt; &quot;cddcd&quot;
substring(&quot;cefageaacceaccacca&quot;) =&gt; &quot;accacca&quot;</code></pre><p>This function will take alphanumeric characters as input.</p>
<p>In cases where there could be more than one correct answer, the first string occurrence should be used. For example, substring(&apos;abc&apos;) should return &apos;ab&apos; instead of &apos;bc&apos;.</p>
<p>Although there are O(N^2) solutions to this problem, you should try to solve this problem in O(N) time. Tests may pass for O(N^2) solutions but, this is not guaranteed.</p>
<p>This question is much harder than some of the other substring questions. It&apos;s easy to think that you have a solution and then get hung up on the implementation.</p>

### Solution