### Problem:
<p>My little sister came back home from school with the following task:
given a squared sheet of paper she has to cut it in pieces
which, when assembled, give squares the sides of which form
an increasing sequence of numbers.
At the beginning it was lot of fun but little by little we were tired of seeing the pile of torn paper.
So we decided to write a program that could help us and protects trees.</p>
<h2 id="task">Task</h2>
<p>Given a positive integral number n, return a <strong>strictly increasing</strong> sequence (list/array/string depending on the language) of numbers, so that the sum of the squares is equal to n&#xB2;.</p>
<p>If there are multiple solutions (and there will be), return as far as possible the result with the largest possible values:</p>
<h2 id="examples">Examples</h2>
<p><code>decompose(11)</code> must return <code>[1,2,4,10]</code>. Note that there are actually two ways to decompose 11&#xB2;,
11&#xB2; = 121 = 1 + 4 + 16 + 100 = 1&#xB2; + 2&#xB2; + 4&#xB2; + 10&#xB2; but don&apos;t return <code>[2,6,9]</code>, since 9 is smaller than 10.</p>
<p>For <code>decompose(50)</code> don&apos;t return <code>[1, 1, 4, 9, 49]</code> but <code>[1, 3, 5, 8, 49]</code> since <code>[1, 1, 4, 9, 49]</code>
doesn&apos;t form a strictly increasing sequence.</p>
<h2 id="note">Note</h2>
<p>Neither <code>[n]</code> nor <code>[1,1,1,&#x2026;,1]</code> are valid solutions. If no valid solution exists, return <code>nil</code>, <code>null</code>, <code>Nothing</code>, <code>None</code> (depending on the language) or <code>&quot;[]&quot;</code> (C) ,<code>{}</code> (C++), <code>[]</code> (Swift, Go).</p>
<p>The function &quot;decompose&quot; will take a positive integer n 
and return the decomposition of N = n&#xB2; as:</p>
<ul>
<li>[x1 ... xk]
or</li>
<li>&quot;x1 ... xk&quot;
or</li>
<li>Just [x1 ... xk]
or</li>
<li>Some [x1 ... xk]
or</li>
<li>{x1 ... xk}
or</li>
<li>&quot;[x1,x2, ... ,xk]&quot;</li>
</ul>
<p>depending on the language (see &quot;Sample tests&quot;)</p>
<h1 id="note-for-bash">Note for Bash</h1>
<pre><code>decompose 50 returns &quot;1,3,5,8,49&quot;
decompose 4  returns &quot;Nothing&quot;</code></pre><h1 id="hint">Hint</h1>
<p>Very often <code>xk</code> will be <code>n-1</code>.</p>

### Solution