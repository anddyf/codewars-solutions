### Problem:
<p>In this kata you have to correctly return who is the &quot;survivor&quot;, ie: the last element of a <a href="http://www.codewars.com/kata/josephus-permutation/" target="_blank" title="Josephus sequence">Josephus permutation</a>.</p>
<p>Basically you have to assume that n people are put into a circle and that they are eliminated in steps of k elements, like this:</p>
<pre><code>josephus_survivor(7,3) =&gt; means 7 people in a circle;
one every 3 is eliminated until one remains
[1,2,3,4,5,6,7] - initial sequence
[1,2,4,5,6,7] =&gt; 3 is counted out
[1,2,4,5,7] =&gt; 6 is counted out
[1,4,5,7] =&gt; 2 is counted out
[1,4,5] =&gt; 7 is counted out
[1,4] =&gt; 5 is counted out
[4] =&gt; 1 counted out, 4 is the last element - the survivor!</code></pre><p>The above link about the &quot;base&quot; kata description will give you a more thorough insight about the origin of this kind of permutation, but basically that&apos;s all that there is to know to solve this kata.</p>
<p><strong>Notes and tips:</strong> using the solution to the other kata to check your function may be helpful, but as much larger numbers will be used, using an array/list to compute the number of the survivor may be too slow; you may assume that both n and k will always be &gt;=1.</p>

### Solution