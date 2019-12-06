### Problem:
<p>Imagine the following situations:</p>
<ul>
<li>A truck loading cargo</li>
<li>A shopper on a budget</li>
<li>A thief stealing from a house using a large bag</li>
<li>A child eating candy very quickly</li>
</ul>
<p>All of these are examples of <strong><em>The Knapsack Problem</em></strong>, where there are more things that you <strong><em>want</em></strong> to take with you than you <strong><em>can</em></strong> take with you.</p>
<h1 id="the-problem">The Problem</h1>
<p>Given a container with a certain capacity and an assortment of discrete items with various sizes and values (and an infinite supply of each item), determine the combination of items that fits within the container and maximizes the value of the collection.</p>
<p>However, <strong>DO NOT</strong> attempt to solve the problem <strong>EXACTLY!</strong> (we will do that in Part 2)</p>
<h1 id="the-simplification">The Simplification</h1>
<p>Because the optimal collection of items is <strong>MUCH</strong> more difficult to determine than a nearly-optimal collection, this kata will only focus on one specific nearly-optimal solution: the greedy solution. The greedy solution is that which always adds an item to the collection if it has the highest value-to-size ratio.</p>
<p>For example, if a &quot;greedy thief&quot; with a 10-Liter knapsack sees two types of items</p>
<ul>
<li><p>a 6-Liter item worth $9 (1.5 $/L)</p>
</li>
<li><p>a 5-Liter item worth $5 (1.0 $/L)</p>
</li>
</ul>
<p>the thief will take 1 of the 6-Liter items instead of 2 of the 5-Liter items. Although this means the thief will only profit $9 instead of $10, the decision algorithm is much simpler. Maybe the thief is bad at math.</p>
<p>Now, go be bad at math!</p>
<h1 id="the-kata">The Kata</h1>
<p>Write the function <code>knapsack</code> that takes two parameters, <code>capacity</code> and <code>items</code>, and returns a list of quantities.</p>
<p><code>capacity</code> will be a positive number</p>
<p><code>items</code> will be an array of arrays of positive numbers that gives the items&apos; sizes and values in the form [[size 1, value 1], [size 2, value 2], ...]</p>
<p><code>knapsack</code> will return an array of integers that specifies the quantity of each item to take according to the greedy solution (the order of the quantities must match the order of <code>items</code>)</p>

### Solution