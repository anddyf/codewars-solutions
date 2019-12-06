### Problem:
<p>Greed is a dice game played with five six-sided dice. Your mission, should you choose to accept it, is to score a throw according to these rules. You will always be given an array with five six-sided dice values.</p>
<pre><code> Three 1&apos;s =&gt; 1000 points
 Three 6&apos;s =&gt;  600 points
 Three 5&apos;s =&gt;  500 points
 Three 4&apos;s =&gt;  400 points
 Three 3&apos;s =&gt;  300 points
 Three 2&apos;s =&gt;  200 points
 One   1   =&gt;  100 points
 One   5   =&gt;   50 point</code></pre><p>A single die can only be counted once in each roll.  For example, a &quot;5&quot; can only count as part of a triplet (contributing to the 500 points) or as a single 50 points, but not both in the same roll.</p>
<p>Example scoring</p>
<pre><code> Throw       Score
 ---------   ------------------
 5 1 3 4 1   50 + 2 * 100 = 250
 1 1 1 3 1   1000 + 100 = 1100
 2 4 4 5 4   400 + 50 = 450</code></pre><p>In some languages, it is possible to mutate the input to the function. This is something that you should never do. If you mutate the input, you will not be able to pass all the tests.</p>

### Solution