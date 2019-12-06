### Problem:
<h1 id="description-">Description :</h1>
<p>Given a string consisting entirely of binary digits (0 , 1) seperated using spaces. Find the XOR of all digits and return the answer. </p>
<h1 id="examples-">Examples :</h1>
<p>Given </p>
<pre><code>1 0 0 1 0 --&gt; 0
1 0 1 1 1 0 0 1 0 0 0 0 --&gt; 1</code></pre><h1 id="how-">How :</h1>
<pre><code>1 0 0 1 0</code></pre><p>Solving :</p>
<pre><code>(1 XOR 0) (0 XOR 1) 0
1 1 0
(1 XOR 1) 0
0 0
0 XOR 0
0 ---&gt; Answer</code></pre><p>This is <strong>code-golf</strong> so shortest code is winner. The limit of solution is set to 40 chars (exclusive).</p>

### Solution