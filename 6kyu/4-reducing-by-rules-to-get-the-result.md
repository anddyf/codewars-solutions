### Problem:
<p>#Reducing by rules to get the result</p>
<p>Your task is to reduce a list of numbers to one number.<br>
For this you get a list of rules, how you have to reduce the numbers.<br>
You have to use these rules consecutively. So when you get to the end of the list of rules, you start again at the beginning.</p>
<p>An example is clearer than more words...</p>
<pre><code>numbers: [ 2.0, 2.0, 3.0, 4.0 ]
rules: [ (a,b) =&gt; a + b, (a,b) =&gt; a - b ]
result: 5.0

You get a list of four numbers.
There are two rules. First rule says: Sum the two numbers a and b. Second rule says: Subtract b from a.

The steps in progressing:
1. Rule 1: First number + second number -&gt; 2.0 + 2.0 = 4.0
2. Rule 2: result from step before - third number -&gt; 4.0 - 3.0 = 1.0
3. Rule 1: result from step before + forth number -&gt; 1.0 + 4.0 = 5.0</code></pre><p>Both lists/arrays are never null and will always contain valid elements.<br>
The list of numbers will always contain more than 1 numbers.<br>
In the list of numbers will only be values greater than 0.<br>
Every rule takes always two input parameter.
<br><br><br>
Have fun coding it and please don&apos;t forget to vote and rank this kata! :-) </p>
<p>I have also created other katas. Take a look if you enjoyed this kata!</p>

### Solution