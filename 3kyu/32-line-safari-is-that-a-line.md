### Problem:
<p><a href="https://imgur.com/ta6gv1i" target="_blank"><img src="https://i.imgur.com/ta6gv1i.png?1" title="source: imgur.com"></a></p>
<h1 id="kata-task">Kata Task</h1>
<p>You are given a <code>grid</code>, which always includes exactly two end-points indicated by <code>X</code></p>
<p>You simply need to return true/false if you can detect a <strong>one and only one</strong> &quot;valid&quot; line joining those points.</p>
<p>A line can have the following characters :</p>
<ul>
<li><code>-</code> = left / right</li>
<li><code>|</code> = up / down</li>
<li><code>+</code> = corner</li>
</ul>
<h2 id="rules-for-valid-lines">Rules for valid lines</h2>
<ul>
<li>The most basic kind of valid line is when the end-points are already adjacent<pre><code>X
X</code></pre><pre><code>XX</code></pre></li>
<li>The corner character (<code>+</code>) must be used for all corners (but <strong>only</strong> for corners).</li>
<li>It must be possible to follow the line with no ambiguity (lookahead of just <strong>one</strong> step, and never treading on the same spot twice).</li>
<li>The line may take any path between the two points.</li>
<li>Sometimes a line may be valid in one direction but not the other. Such a line is still considered valid.</li>
<li>Every line &quot;character&quot; found in the grid must be part of the line. If extras are found then the line is not valid.</li>
</ul>
<h1 id="examples">Examples</h1>
<h2 id="good-lines">Good lines</h2>
<table border="2">
<tbody><tr>

<td width="20%">
<pre style="font-size:20px;line-height:22px">X---------X
</pre>

</td><td width="20%">
<pre style="font-size:20px;line-height:22px">X
|
|
X
</pre>

</td><td width="20%">
<pre style="font-size:20px;line-height:22px">   +--------+
X--+        +--+
               |
               X
</pre>

</td><td width="20%">
<pre style="font-size:20px;line-height:22px">   +-------------+
   |             |
X--+      X------+    
</pre>

</td><td width="20%">
<pre style="font-size:20px;line-height:22px">   +-------+
   |      +<span style="background:green">+</span>+---+
X--+      +-+   X
</pre>
</td></tr></tbody></table>

<h2 id="bad-lines">Bad lines</h2>
<table border="2">

<tbody><tr>
<td width="20%">
<pre style="font-size:20px;line-height:22px">X-----<span style="background:red">|</span>----X
</pre>

</td><td width="20%">
<pre style="font-size:20px;line-height:22px">X
|
<span style="background:red">+</span>
X
</pre>

</td><td width="20%">
<pre style="font-size:20px;line-height:22px">   <span style="background:red">|</span>--------+
X---        <span style="background:red">-</span>--+
               |
               X
</pre>

</td><td width="20%">
<pre style="font-size:20px;line-height:22px">   +------<span style="background:red"> </span>
   |      <span style="background:red"> </span>       
X--+      X  
</pre>

</td><td width="20%">
<pre style="font-size:20px;line-height:22px">      +------+
      |      |
X-----<span style="background:red">+</span>------+
      |
      X
</pre>
</td></tr></tbody></table>

<h1 id="hint">Hint</h1>
<p>Imagine yourself walking a path where you can only see your very next step. Can you know which step you must take, or not?</p>

### Solution