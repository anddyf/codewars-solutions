### Problem:
<p>Suzuki is preparing for a walk over fire ceremony high up in the mountains and the monks need coal for the fire. He must pack a basket of coal to the optimal level for each trip up the mountain. He must fit as much as possible into his basket. He can either take a piece of coal or leave it so he must chose which pieces will be optimal for the trip based on the weight in order to maximize the basket capacity.</p>
<p>10 &#x2264; basket &#x2264; 200</p>
<p>1 &#x2264; pile &#x2264; 100</p>
<p>You will be given a data structure similar to the one below:</p>
<pre><code class="language-python">pile = <span class="hljs-string">&apos;dust 1 dust 4 dust 8 dust 100 dust&apos;</span>

basket = <span class="hljs-number">43</span>

Return the weight of the coal:

<span class="hljs-string">&apos;The basket weighs 13 kilograms&apos;</span>

basket = <span class="hljs-number">50</span>

pile = <span class="hljs-string">&apos;dust83dust 45 25 22 46&apos;</span>

Returns:

<span class="hljs-string">&apos;The basket weighs 47 kilograms&apos;</span></code></pre>
<p>Rake out the dust setting the pieces represented as integers for their weight aside. Take as much coal as possible filling the basket as close to its capacity as possible.</p>
<p>The size of the basket will change with each test as Suzuki exchanges it for an empty one on each trip up the mountain.</p>
<p>Return the weight of the coal as a string:</p>
<p>&apos;The basket weighs 13 kilograms&apos;</p>
<p>If there are no pieces of coal that will fit in the basket the solution returns:</p>
<p>&apos;The basket weighs 0 kilograms&apos;</p>
<p>Please also try the other Kata in this series..</p>
<ul>
<li><a href="https://www.codewars.com/kata/56ff1667cc08cacf4b00171b" target="_blank">Help Suzuki count his vegetables...</a></li>
<li><a href="https://www.codewars.com/kata/57d4ecb8164a67b97c00003c" target="_blank">Help Suzuki purchase his Tofu!</a></li>
<li><a href="https://www.codewars.com/kata/571c1e847beb0a8f8900153d" target="_blank">Help Suzuki rake his garden!</a></li>
<li><a href="https://www.codewars.com/kata/5701800886306a876a001031" target="_blank">Suzuki needs help lining up his students!</a></li>
<li><a href="https://www.codewars.com/kata/56fc55cd1f5a93d68a001d4e" target="_blank">How many stairs will Suzuki climb in 20 years?</a></li>
</ul>

### Solution