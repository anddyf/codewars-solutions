### Problem:
<p>I need to save some money to buy a gift. I think I can do something like that:</p>
<p>First week (W0) I save nothing on Sunday, 1 on Monday, 2 on Tuesday... 6 on Saturday,
second week (W1) 2 on Monday... 7 on Saturday and so on according to the table below where the days are numbered from 0 to 6.</p>
<p>Can you tell me how much I will have for my gift on Saturday evening after I have saved 12? (Your function finance(6) should return 168 which is the sum of the savings in the table). </p>
<p>Imagine now that we live on planet XY140Z-n where the days of the week are numbered from 0 to n (integer n &gt; 0) and where
I save from week number 0 to week number n included (in the table below n = 6).</p>
<p>How much money would I have at the end of my financing plan on planet XY140Z-n?</p>
<table>
<thead>
<tr>
<th>--</th>
<th>Su</th>
<th>Mo</th>
<th>Tu</th>
<th>We</th>
<th>Th</th>
<th>Fr</th>
<th>Sa</th>
</tr>
</thead>
<tbody><tr>
<td>W6</td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td>12</td>
</tr>
<tr>
<td>W5</td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td>10</td>
<td>11</td>
</tr>
<tr>
<td>W4</td>
<td></td>
<td></td>
<td></td>
<td></td>
<td>8</td>
<td>9</td>
<td>10</td>
</tr>
<tr>
<td>W3</td>
<td></td>
<td></td>
<td></td>
<td>6</td>
<td>7</td>
<td>8</td>
<td>9</td>
</tr>
<tr>
<td>W2</td>
<td></td>
<td></td>
<td>4</td>
<td>5</td>
<td>6</td>
<td>7</td>
<td>8</td>
</tr>
<tr>
<td>W1</td>
<td></td>
<td>2</td>
<td>3</td>
<td>4</td>
<td>5</td>
<td>6</td>
<td>7</td>
</tr>
<tr>
<td>W0</td>
<td>0</td>
<td>1</td>
<td>2</td>
<td>3</td>
<td>4</td>
<td>5</td>
<td>6</td>
</tr>
</tbody></table>
<p>#Example:</p>
<pre><code>finance(5) --&gt; 105
finance(6) --&gt; 168
finance(7) --&gt; 252
finance(5000) --&gt; 62537505000</code></pre><p>#Hint: 
try to avoid nested loops</p>

### Solution