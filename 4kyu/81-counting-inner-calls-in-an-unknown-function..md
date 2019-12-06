### Problem:
<p>The aim of this kata is to determine the number of sub-function calls made by an unknown function.</p>
<p>You have to write a function named <code>count_calls</code> which:</p>
<ul>
<li><p>takes as parameter a function and its arguments (args, kwargs)</p>
</li>
<li><p>calls the function</p>
</li>
<li><p>returns a tuple containing:</p>
<ul>
<li>the number of function calls made inside it and inside all the sub-called functions recursively</li>
<li>the function return value.</li>
</ul>
</li>
</ul>
<p>NB: The call to the function itself is not counted.</p>
<p>HINT: The sys module may come in handy.</p>

### Solution