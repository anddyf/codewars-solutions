### Problem:
<p>Implement <a href="https://xkcd.com/426/" target="_blank">the Geohashing algorithm</a> proposed by xkcd.</p>
<p><img src="https://imgs.xkcd.com/comics/geohashing.png" alt="the Geohashing algorithm"></p>
<p>Specifically, given the the Dow opening and a date in date object (optional), return the geohashing coordinates, using the following steps (adapted from <a href="https://www.explainxkcd.com/wiki/index.php/426:_Geohashing" target="_blank">explainxkcd</a>, slightly modified):</p>
<ol>
<li>Take the provided date and convert it in the format <code>yyyy-mm-dd-</code> at UTC time, then append the most recent opening value for the Dow Jones Industrial Average (supplied as an argument). Dow opening provided will always be accurate to 2 decimal places, but if it has less than 2 decimal digits, pad 0s on the right (<code>12345 =&gt; 12345.00</code>). If no dates are provided, use current time instead.</li>
<li>Pass this string through the MD5 algorithm, and output as a hexademical value.</li>
<li>Divide the hash value into two 16 character halves, treat each half as base-16 decimal expansions (by appending <code>0.</code> in the front, and convert them back to base 10, rounded to 6 decimal places. </li>
<li>Return the result coordinates as an array.</li>
</ol>
<p>An example case straight out from the comic is provided:</p>
<pre><code>Date: 2005-05-26, Dow opening: 10458.68
yyyy-mm-dd-dow: 2005-05-26-10458.68
MD5: db9318c2259923d08b672cb305440f97 =&gt; db9318c2259923d0 | 8b672cb305440f97
Coordinates (HEX): [0.db9318c2259923d0, 0.8b672cb305440f97]
Coordinates (DEC): [0.857713, 0.544543]</code></pre>

<p>Note: You don&apos;t have to worry about the 30W Time Zone Rule.</p>

### Solution