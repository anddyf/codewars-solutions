### Problem:
<h3 id="once-upon-a-time-on-a-way-through-the-old-wild-west">Once upon a time, on a way through the old wild west,&#x2026;</h3>
<p>&#x2026; a man was given directions to go from one point to another. The directions were &quot;NORTH&quot;, &quot;SOUTH&quot;, &quot;WEST&quot;, &quot;EAST&quot;. Clearly &quot;NORTH&quot; and &quot;SOUTH&quot; are opposite, &quot;WEST&quot; and &quot;EAST&quot; too. Going to one direction and coming back the opposite direction is a needless effort. Since this is the wild west, with dreadfull weather and not much water, it&apos;s important to save yourself some energy, otherwise you might die of thirst!</p>
<h3 id="how-i-crossed-the-desert-the-smart-way">How I crossed the desert the smart way.</h3>
<p>The directions given to the man are, for example, the following (depending on the language):</p>
<pre><code>[&quot;NORTH&quot;, &quot;SOUTH&quot;, &quot;SOUTH&quot;, &quot;EAST&quot;, &quot;WEST&quot;, &quot;NORTH&quot;, &quot;WEST&quot;].</code></pre><p>or</p>
<pre><code>{ &quot;NORTH&quot;, &quot;SOUTH&quot;, &quot;SOUTH&quot;, &quot;EAST&quot;, &quot;WEST&quot;, &quot;NORTH&quot;, &quot;WEST&quot; };</code></pre><p>or</p>
<pre><code>[North, South, South, East, West, North, West]</code></pre><p>You can immediatly see that going &quot;NORTH&quot; and then &quot;SOUTH&quot; is not reasonable, better stay to the same place!
So the task is to give to the man a simplified version of the plan. A better plan in this case is simply:</p>
<pre><code>[&quot;WEST&quot;]</code></pre><p>or</p>
<pre><code>{ &quot;WEST&quot; }</code></pre><p>or</p>
<pre><code>[West]</code></pre><h3 id="other-examples">Other examples:</h3>
<p>In <code>[&quot;NORTH&quot;, &quot;SOUTH&quot;, &quot;EAST&quot;, &quot;WEST&quot;]</code>, the direction <code>&quot;NORTH&quot; + &quot;SOUTH&quot;</code> is going north and coming back <em>right away</em>. What a waste of time! Better to do nothing. </p>
<p>The path becomes <code>[&quot;EAST&quot;, &quot;WEST&quot;]</code>, now <code>&quot;EAST&quot;</code> and <code>&quot;WEST&quot;</code> annihilate each other, therefore, the final result is <code>[]</code> (nil in Clojure).</p>
<p>In [&quot;NORTH&quot;, &quot;EAST&quot;, &quot;WEST&quot;, &quot;SOUTH&quot;, &quot;WEST&quot;, &quot;WEST&quot;], &quot;NORTH&quot; and &quot;SOUTH&quot; are not directly opposite but they become directly opposite after the reduction of &quot;EAST&quot; and &quot;WEST&quot; so the whole path is reducible to [&quot;WEST&quot;, &quot;WEST&quot;].</p>
<h3 id="task">Task</h3>
<p>Write a function <code>dirReduc</code> which will take an array of strings and returns an array of strings with the needless directions removed (W&lt;-&gt;E or S&lt;-&gt;N side by side).</p>
<ul>
<li>The Haskell version takes a list of directions with <code>data Direction = North | East | West | South</code>. </li>
<li>The Clojure version returns nil when the path is reduced to nothing. </li>
<li>The Rust version takes a slice of <code>enum Direction {NORTH, SOUTH, EAST, WEST}</code>.</li>
</ul>
<h3 id="see-more-examples-in-sample-tests">See more examples in &quot;Sample Tests:&quot;</h3>
<h3 id="notes">Notes</h3>
<ul>
<li>Not all paths can be made simpler. 
The path [&quot;NORTH&quot;, &quot;WEST&quot;, &quot;SOUTH&quot;, &quot;EAST&quot;] is not reducible. &quot;NORTH&quot; and &quot;WEST&quot;, &quot;WEST&quot; and &quot;SOUTH&quot;, &quot;SOUTH&quot; and &quot;EAST&quot; are not <em>directly</em> opposite of each other and can&apos;t become such. Hence the result path is itself : [&quot;NORTH&quot;, &quot;WEST&quot;, &quot;SOUTH&quot;, &quot;EAST&quot;].</li>
</ul>
<ul>
<li>if you want to translate, please ask before translating.</li>
</ul>

### Solution