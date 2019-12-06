### Problem:
<p>In baseball, the batting average is a simple and most common way to measure a hitter&apos;s performace.  Batting average is calculated by taking all the players <code>hits</code> and dividing it by their number of <code>at_bats</code>, and it is usually displayed as a 3 digit decimal (i.e. 0.300).</p>
<p>Given a <code>yankees</code> table with  the following schema,</p>
<p>-<code>player_id</code> STRING</p>
<p>-<code>player_name</code> STRING</p>
<p>-<code>primary_position</code> STRING</p>
<p>-<code>games</code>  INTEGER</p>
<p>-<code>at_bats</code> INTEGER</p>
<p>-<code>hits</code> INTEGER</p>
<p>return a table with <code>player_name</code>, <code>games</code>, and <code>batting_average</code>. </p>
<p>We want <code>batting_average</code> to be rounded to the nearest thousandth, since that is how baseball fans are used to seeing it. Format it as text and make sure it has 3 digits to the right of the decimal (pad with zeroes if neccesary).</p>
<p>Next, order our resulting table by <code>batting_average</code>, with the highest average in the first row. </p>
<p>Finally, since <code>batting_average</code> is a rate statistic, a small number of <code>at_bats</code> can change the average dramatically. To correct for this, exclude any player who doesn&apos;t have at least 100 at bats. </p>
<p>Expected Output Table</p>
<p>-<code>player_name</code> STRING</p>
<p>-<code>games</code> INTEGER</p>
<p>-<code>batting_average</code> STRING</p>

### Solution