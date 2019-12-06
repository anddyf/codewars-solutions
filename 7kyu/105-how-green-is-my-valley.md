### Problem:
<ul>
<li><p>Input : an array of integers.</p>
</li>
<li><p>Output : this array, but sorted in such a way that there are two wings:</p>
<ul>
<li><p>the left wing with numbers decreasing, </p>
</li>
<li><p>the right wing with numbers increasing. </p>
</li>
<li><p>the two wings have the same length. If the length of the array is odd
the wings are around the bottom, if the length is even the bottom is
considered to be part of the right wing.</p>
</li>
<li><p>each integer <code>l</code> of the left wing must be greater or equal to its counterpart <code>r</code> in the right wing, the
difference <code>l - r</code> being as small as possible.
In other words the right wing must be nearly as steep as the left wing.</p>
</li>
</ul>
</li>
</ul>
<p>The function is <code>make_valley or makeValley or make-valley</code>.</p>
<pre><code>a = [79, 35, 54, 19, 35, 25]
make_valley(a) --&gt; [79, 35, 25, *19*, 35, 54]
The bottom is 19, left wing is [79, 35, 25], right wing is [*19*, 35, 54].
79..................54
    35..........35
        25. 
          ..19

a = [67, 93, 100, -16, 65, 97, 92]
make_valley(a) --&gt; [100, 93, 67, *-16*, 65, 92, 97]
The bottom is -16, left wing [100, 93, 67] and right wing [65, 92, 97] have same length.
100.........................97
    93..........
               .........92
        67......
               .....65
            -16     

a = [66, 55, 100, 68, 46, -82, 12, 72, 12, 38]
make_valley(a) --&gt; [100, 68, 55, 38, 12, *-82*, 12, 46, 66, 72]
The bottom is -82, left wing is [100, 68, 55, 38, 12]], right wing is [*-82*, 12, 46, 66, 72].

a = [14,14,14,14,7,14]
make_valley(a) =&gt; [14, 14, 14, *7*, 14, 14]

a = [14,14,14,14,14]
make_valley(a) =&gt; [14, 14, *14*, 14, 14]</code></pre><h1 id="a-counter-example">A counter-example:</h1>
<pre><code>a = [17, 17, 15, 14, 8, 7, 7, 5, 4, 4, 1]
A solution could be [17, 17, 15, 14, 8, 1, 4, 4, 5, 7, 7]
but the right wing [4, 4, 5, 7, 7] is much flatter than the left one 
[17, 17, 15, 14, 8].

Summing the differences between left and right wing:
(17-7)+(17-7)+(15-5)+(14-4)+(8-4) = 44

Consider the following solution:
[17, 15, 8, 7, 4, 1, 4, 5, 7, 14, 17]
Summing the differences between left and right wing:
(17-17)+(15-14)+(8-7)+(7-5)+(4-4) = 4
The right wing is nearly as steep as the right one.</code></pre>
### Solution