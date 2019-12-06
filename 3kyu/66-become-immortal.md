### Problem:
<p>In the nation of CodeWars, there lives an Elder who has lived for a long time. Some people call him the Grandpatriarch, but most people just refer to him as the Elder.</p>
<p>There is a secret to his longetivity: he has a lot of <code>young</code> worshippers, who regularly perform a ritual to ensure that the Elder stays immortal:</p>
<ul>
<li>The worshippers lines up in a magic rectangle, of dimensions <code>m</code> and <code>n</code>.</li>
<li>They channel their will to wish for the Elder. In this magic rectangle, any worshipper can donate time equal to the <code>xor</code> of the column and the row (zero-indexed) he&apos;s on, in seconds, to the Elder.</li>
<li>However, not every ritual goes perfectly. The donation of time from the worshippers to the Elder will experience a transmission loss <code>l</code> (in seconds). Also, if a specific worshipper cannot channel more than <code>l</code> seconds, the Elder will not be able to receive this worshipper&apos;s donation.</li>
</ul>
<p>The estimated age of the Elder is so old it&apos;s probably bigger than the total number of atoms in the universe. However, the lazy programmers (who <code>made a big news</code> by inventing <a href="https://en.wikipedia.org/wiki/Time_formatting_and_storage_bugs" target="_blank">the Y2K bug and other related things</a>) apparently didn&apos;t think thoroughly enough about this, and so their <code>simple</code> date-time system can only record time from 0 to <code>t-1</code> seconds. If the elder received the total amount of time (in seconds) more than the system can store, it will be wrapped around so that the time would be between the range 0 to <code>t-1</code>.</p>
<p>Given <code>m</code>, <code>n</code>, <code>l</code> and <code>t</code>, please find the number of seconds the Elder has received, represented in the poor programmer&apos;s date-time system.</p>
<p>(Note: <code>t</code> will never be bigger than <code>2^32 - 1</code>, and in JS, <code>2^26 - 1</code>.)</p>
<hr>
<p>Example:</p>
<pre><code>m=8, n=5, l=1, t=100

Let&apos;s draw out the whole magic rectangle:
0 1 2 3 4 5 6 7
1 0 3 2 5 4 7 6
2 3 0 1 6 7 4 5
3 2 1 0 7 6 5 4
4 5 6 7 0 1 2 3

Applying a transmission loss of 1:
0 0 1 2 3 4 5 6
0 0 2 1 4 3 6 5
1 2 0 0 5 6 3 4
2 1 0 0 6 5 4 3
3 4 5 6 0 0 1 2

Adding up all the time gives 105 seconds.

Because the system can only store time between 0 to 99 seconds, the first 100 seconds of time will be lost, giving the answer of 5.</code></pre><hr>
<p>This is no ordinary magic (the Elder&apos;s life is at stake), so <em>you need to care about performance</em>. All test cases (900 tests) can be passed within 1 second, but <code>naive</code> solutions will time out easily. Good luck, and do not displease the Elder.</p>

### Solution