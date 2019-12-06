### Problem:
<p>To almost all of us solving sets of linear equations is quite obviously the most exciting bit of linear algebra. Benny does not agree though and wants to write a quick program to solve his homework problems for him. Unfortunately Benny&apos;s lack of interest in linear algebra means he has no real clue on how to go about this. Fortunately, you can help him!</p>
<p>Write a method <code>solve</code> that accepts a list of linear equations that your method will have to solve. The output should be a map (a <code>Map</code> object in JavaScript) with a value for each variable in the equations. If the system does not have a unique solution (has infinitely many solutions or is unsolvable), return <code>null</code> (<code>None</code> in python).</p>
<p>For example :  </p>
<p>&quot;2x + 4y + 6z = 18&quot;<br>&quot;3y + 3z = 6&quot;<br>&quot;x + 2y = z - 3&quot;</p>
<p>should result in a map :  </p>
<p>x = 2<br>y = -1<br>z = 3  </p>
<p>Possible input equations have the following rules:  </p>
<ul>
<li>Only the plus and minus operators are used on both the left and right hand side of the equation.  </li>
<li>Both sides of the equation can have variables; One variable can appear in multiple terms, on both sides.</li>
<li>Variable names are strings of arbitrary length.  </li>
<li>All coefficients are integers and generally fall within the range of -150 to 150, with a few ranging from -1000 to 1000. Free terms are integers in range -20000 to 20000.  </li>
<li>Equations do not necessarily have variables.  </li>
<li>Equations have exactly one operator (+ or -) between terms.  </li>
</ul>
<p>Comparisons are performed with accuracy of <code>1e-6</code>.</p>
<p><strong>Note on numerical stability:</strong></p>
<p>There are many possible ways to solve a system of linear equations. One group of such algorithms is based on reduction and elimination methods. If you are going to use any of these, remember that such algorithms are in general <em>numerically unstable</em>, i.e. division operations repeated over and over introduce inaccuracies which accumulate from row to row. As a result it might occur that some value which is expected to be zero is actually larger, for example, <code>2.5e-10</code>. Such inaccuracies tend to be bigger in large equation systems, and random tests check systems of up to 26 equations. If it happens that small tests pass for you, and large tests fail, it probably means that you did not account for inaccuracies correctly.
Also note that tests do not depend on any reference solution, so the way how test cases are generated <em>is numrically stable</em> - the only source of inaccuracies is your solution, and you need to account for it.</p>

### Solution