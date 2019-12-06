### Problem:
<h1 id="task">Task</h1>
<p> Sorting is one of the most basic computational devices used in Computer Science. </p>
<p> Given a sequence (length &#x2264; 1000) of 3 different key values (7, 8, 9), your task is to find the minimum number of exchange operations necessary to make the sequence sorted. </p>
<p> One operation is the switching of 2 key values in the sequence.</p>
<h1 id="example">Example</h1>
<p> For <code>sequence = [7, 7, 8, 8, 9, 9]</code>, the result should be <code>0</code>.</p>
<p> It&apos;s already a sorted sequence.</p>
<p> For <code>sequence = [9, 7, 8, 8, 9, 7]</code>, the result should be <code>1</code>.</p>
<p> We can switching <code>sequence[0]</code> and <code>sequence[5]</code>.</p>
<p> For <code>sequence = [8, 8, 7, 9, 9, 9, 8, 9, 7]</code>, the result should be <code>4</code>.</p>
<p> We can:</p>
<pre><code> [8, 8, 7, 9, 9, 9, 8, 9, 7] 
 switching sequence[0] and sequence[3]
 --&gt; [9, 8, 7, 8, 9, 9, 8, 9, 7]
 switching sequence[0] and sequence[8]
 --&gt; [7, 8, 7, 8, 9, 9, 8, 9, 9]
 switching sequence[1] and sequence[2]
 --&gt; [7, 7, 8, 8, 9, 9, 8, 9, 9]
 switching sequence[5] and sequence[7]
 --&gt; [7, 7, 8, 8, 8, 9, 9, 9, 9] </code></pre><p>So <code>4</code> is the minimum number of operations for the sequence to become sorted.</p>
<h1 id="inputoutput">Input/Output</h1>
<ul>
<li><p><code>[input]</code> integer array <code>sequence</code></p>
<p>The Sequence.</p>
</li>
</ul>
<ul>
<li><p><code>[output]</code> an integer</p>
<p>the minimum number of operations.</p>
</li>
</ul>

### Solution