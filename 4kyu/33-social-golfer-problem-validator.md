### Problem:
<p>A group of N golfers wants to play in groups of G players for D days in such a way that no golfer plays more than once with any other golfer. For example, for N=20, G=4, D=5, the solution at Wolfram MathWorld is</p>
<pre><code> Mon:    ABCD    EFGH    IJKL    MNOP    QRST
 Tue:    AEIM    BJOQ    CHNT    DGLS    FKPR
 Wed:    AGKO    BIPT    CFMS    DHJR    ELNQ
 Thu:    AHLP    BKNS    CEOR    DFIQ    GJMT
 Fri:    AFJN    BLMR    CGPQ    DEKT    HIOS</code></pre><p>Write a function that validates a proposed solution, a list of list of strings, as being a solution to the social golfer problem. Each character represents a golfer, and each string is a group of players. Rows represent days. The solution above would be encoded as:</p>
<pre><code> [
  [&apos;ABCD&apos;, &apos;EFGH&apos;, &apos;IJKL&apos;, &apos;MNOP&apos;, &apos;QRST&apos;],
  [&apos;AEIM&apos;, &apos;BJOQ&apos;, &apos;CHNT&apos;, &apos;DGLS&apos;, &apos;FKPR&apos;],
  [&apos;AGKO&apos;, &apos;BIPT&apos;, &apos;CFMS&apos;, &apos;DHJR&apos;, &apos;ELNQ&apos;],
  [&apos;AHLP&apos;, &apos;BKNS&apos;, &apos;CEOR&apos;, &apos;DFIQ&apos;, &apos;GJMT&apos;],
  [&apos;AFJN&apos;, &apos;BLMR&apos;, &apos;CGPQ&apos;, &apos;DEKT&apos;, &apos;HIOS&apos;]
 ]</code></pre><p>You need to make sure (1) that each golfer plays exactly once every day, (2) that the number and size of the groups is the same every day, and (3) that each player plays with every other player <em>at most</em> once.</p>
<p>So although each player must play every day, there can be particular pairs of players that never play together.</p>
<p>It is not necessary to consider the case where the number of golfers is zero; no tests will check for that. If you do wish to consider that case, note that you should accept as valid all possible solutions for zero golfers, who (vacuously) can indeed play in an unlimited number of groups of zero.</p>

### Solution