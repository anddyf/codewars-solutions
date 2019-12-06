### Problem:
<p>You need to create a function that will validate if given parameters are valid geographical coordinates.</p>
<p>Valid coordinates look like the following: <strong>&quot;23.32353342, -32.543534534&quot;</strong>.
The return value should be either <strong>true</strong> or <strong>false</strong>.</p>
<p>Latitude (which is first float) can be between 0 and 90, positive or negative.
Longitude (which is second float) can be between 0 and 180, positive or negative.</p>
<p>Coordinates can only contain digits, or one of the following symbols (including space after comma) __ -, . __</p>
<p>There should be no space between the minus &quot;-&quot; sign and the digit after it.</p>
<p>Here are some valid coordinates:</p>
<ul>
<li>-23, 25</li>
<li>24.53525235, 23.45235</li>
<li>04, -23.234235</li>
<li>43.91343345, 143</li>
<li>4, -3</li>
</ul>
<p>And some invalid ones:</p>
<ul>
<li>23.234, - 23.4234</li>
<li>2342.43536, 34.324236</li>
<li>N23.43345, E32.6457</li>
<li>99.234, 12.324</li>
<li>6.325624, 43.34345.345</li>
<li>0, 1,2</li>
<li>0.342q0832, 1.2324</li>
</ul>

### Solution