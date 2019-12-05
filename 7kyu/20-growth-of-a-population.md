### Problem:
<p>In a small town the population is <code>p0 = 1000</code> at the beginning of a year. The population
regularly increases by <code>2 percent</code> per year and moreover <code>50</code> new inhabitants per year
come to live in the town. 
How many years does the town need to see its population
greater or equal to <code>p = 1200</code> inhabitants?</p>
<pre><code>At the end of the first year there will be: 
1000 + 1000 * 0.02 + 50 =&gt; 1070 inhabitants

At the end of the 2nd year there will be: 
1070 + 1070 * 0.02 + 50 =&gt; 1141 inhabitants (number of inhabitants is an integer)

At the end of the 3rd year there will be:
1141 + 1141 * 0.02 + 50 =&gt; 1213

It will need 3 entire years.</code></pre><p>More generally given parameters:</p>
<p><code>p0, percent, aug (inhabitants coming or leaving each year), p (population to surpass)</code></p>
<p>the function <code>nb_year</code> should return <code>n</code> number of entire years needed to
get a population greater or equal to <code>p</code>.</p>
<p>aug is an integer, percent a positive or null number, p0 and p are positive integers (&gt; 0)</p>
<pre><code>Examples:
nb_year(1500, 5, 100, 5000) -&gt; 15
nb_year(1500000, 2.5, 10000, 2000000) -&gt; 10</code></pre><p>Note: Don&apos;t forget to convert the percent parameter as a percentage in the body of your function: if the parameter percent is 2 you have to convert it to 0.02.</p>

### Solution