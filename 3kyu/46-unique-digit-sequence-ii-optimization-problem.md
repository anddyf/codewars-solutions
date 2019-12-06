### Problem:
<p><em>This is the performance verison of <a href="https://www.codewars.com/users/KenKamau" target="_blank">KenKamau</a>&apos;s kata: &quot;<strong><a href="https://www.codewars.com/kata/unique-digit-sequence/python" target="_blank">Unique digit sequence</a></strong>&quot;. If you did not complete it yet, you should begin there.</em></p>
<hr>
<br>
<h1>Sequence detail:</h1>

<p>Consider a serie that has the following sequence:</p>
<pre><code>0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 22, 11, 20, ...</code></pre><p>There is nothing special between numbers 0 and 10.</p>
<p>The number 10 has digits 1 and 0. The smallest number before or after 10 that does not have 1 or 0 and is not already in the series is 22. Similarly, the smallest number before or after 22 that has not yet appeared in the series and that has no 2 is 11. Again the smallest number before and after 11 that has not appeared in the series and that has no 1 is 20, and so on. Once a number appers in the series, it cannot appear again.</p>
<p>The order of the generated numbers might be quite erratic. You can see below the generated values (vertical axis) against the input values (horizontal axis) on different ranges:</p>
<img src="http://www.escalade-alsace.com/photos/Freddy/UniqueDigitSeq.png">

<p>As you can surely feel it by seeing these graphes, for numbers above 10000, things become quite messy about performances...</p>
<br>
<h1>Context:</h1>

<p>Your boss has strange habits. One might rather say, really odd delirious ones... He actually likes to play with some numbers with no reason. His last bad idea was to institute some kind of &quot;&quot;control&quot;&quot; over the references of the stored items, labelling those using the sequence above, in order. Well, not so bad as what he asked to you for this morning...</p>
<p>Now he has the idea of using some Stock Exchange data to determine what number in the sequence he will use to determine... Well actually he lost you at this part... So weird. But he&apos;s the boss, right...? :/</p>
<p>The problem is that those data can output big numbers and that generating the sequence is quite time consuming in these cases. Moreover, the input values are random: you do not know the number of calls the function will recieve each time it&apos;s used and there is no known upperbond to the input value. And of course, he wants that you use the minimum amount of time possible to get all of those results, meaning you are not allowed to do extra calculations. Just what is needed. Damn boss...</p>
<br>
<h1>Task:</h1>

<p>Optimize whatever you can in <code>find_num(n)</code> with (almost) whatever trick you want to generate the wanted numbers with this constraints:</p>
<ul>
<li>No extra computations: never calculate useless outputs. That will be checked!</li>
<li>Your function will have to handle inputs over the 10000 critical limit (up to 18000. The reference solution does that in 8,6s). Take in consideration that the naive algorithm (classical good solutions to the original kata version) times out around 11500 when the full sequence is generated with one unique call. Bad algorithms could even times out at 1500-2000 numbers.</li>
<li>Your implementation has to handle inputs in random order</li>
<li>Inputs range: <code>0 &lt;= n &lt;= 18000</code> (codewars limitation)</li>
<li>Number of calls of the function: a <strong><em>LOT</em></strong> ! (several thausends)</li>
</ul>
<p>Since this is an optimization problem, you&apos;ll have to do these optimizations. What is forbidden:</p>
<ul>
<li>hardcoding the full sequence</li>
<li>precompute the sequence or a part if it (meaning: the first test has to be launched less than 100 ms after you clicked the &quot;attempt&quot; button)</li>
</ul>
<br>
<h1>Control over the executions of the tests:</h1>

<p>Since an optimization kata is all about timing out a lot, and that timing out doesn&apos;t provide you any information on what&apos;s going on and if you are far away from the goal or not, I added a constant <code>N_LIMIT = 18000</code> in the background. You can change its value in your code and the executions will be stopped when your code reach this limit. This way, you&apos;ll be able to scan the performances of your function. Still, there may be some executions that could slip through this and time out with special values of <code>N_LIMIT</code>, but just try another value if you encounter the case.</p>
<br>
<h1>Particularity of the tests protocol:</h1>

<p>Codewars&apos;s tests having a time limit there is, as a matter of fact, an upper bound to the values of <code>n</code>. So you might be tempted to memoize the full sequence up to 18000 in a way or another and be done with it. That will be forbidden by the tests for two reasons:</p>
<p>1) The task/context being what it is, the idea is that one could run the program sometimes only with small inputs (they are random!), so &quot;your boss&quot; doesn&apos;t want you to compute the whole range if it is not needed, and sometimes with big numbers showing up so you would have to dig far deeper in the sequence. This way, memoization with an upperlimit is not acceptable. This behaviour will be checked.</p>
<p>2) The idea is to be able to compute the number with any input. That cannot be done on codewars. But you&apos;ll be forced to struggle with that anyway. ;)</p>
<p><br><br><br>
Final notes:</p>
<ul>
<li>This is designed to be a computationnal task, don&apos;t search for mathematical stuff with complicate relations between consecutive numbers in the sequence (I don&apos;t even know if it is possible, but if you find a complete mathematical solution, go ahead!).</li>
<li>Not tested but if you want to try the challenge: my best code can generate up to approximately 20100 numbers in one shot on codewars (it takes 11.7-11.9s). If you want to try it, define <code>CHALLENGE = True</code> at the beginning of your code. That will deactivate all the tests and lunch a one shot sequence of 20100 numbers. Of course, a final assertion will make fail the execution after that, to avoid some kind of cheating... (note: <code>N_LIMIT</code> is inactive if <code>CHALLENGE = True</code>)</li>
<li>While creating the kata, I had to dig further in the structure of the sequence and about the performance tests of various implementations. If you&apos;re interested in that, you can go read the comment under <a href="https://www.codewars.com/kata/reviews/599965d1a48343a01d000075/groups/599965d121b8c8ac910005d7" target="_blank">my solution</a>.</li>
</ul>
<hr>
<br>
_This is an optimization problem. It may/will be hard on you. Be persistent!_ ;)
### Solution