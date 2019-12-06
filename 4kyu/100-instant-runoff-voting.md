### Problem:
<p>Your task is to implement a function that calculates an election winner from a list of voter selections using an <a href="http://en.wikipedia.org/wiki/Instant-runoff_voting" target="_blank">Instant Runoff Voting</a> algorithm. If you haven&apos;t heard of IRV, here&apos;s a basic overview (slightly altered for this kata):</p>
<ul>
<li>Each voter selects several candidates in order of preference.</li>
<li>The votes are tallied from the each voter&apos;s first choice.</li>
<li>If the first-place candidate has more than half the total votes, they win.</li>
<li>Otherwise, find the candidate who got the least votes and remove them from each person&apos;s voting list.</li>
<li>In case of a tie for least, remove all of the tying candidates.</li>
<li>In case of a complete tie between every candidate, return nil(Ruby)/None(Python)/undefined(JS).</li>
<li>Start over.</li>
<li>Continue until somebody has more than half the votes; they are the winner.</li>
</ul>
<p>Your function will be given a list of voter ballots; each ballot will be a list of candidates (symbols) in descending order of preference. You should return the symbol corresponding to the winning candidate. See the default test for an example!</p>

### Solution