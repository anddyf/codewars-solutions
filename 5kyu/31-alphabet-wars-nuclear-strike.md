### Problem:
<h1 id="introduction">Introduction</h1>
<p>There is a war and nobody knows - the alphabet war!<br>The letters hide in their nuclear shelters. The nuclear strikes hit the battlefield and killed a lot of them. </p>
<h1 id="task">Task</h1>
<p>Write a function that accepts <code>battlefield</code> string and returns letters that survived the nuclear strike.  </p>
<ul>
<li>The <code>battlefield</code> string consists of only small letters, <code>#</code>,<code>[</code> and <code>]</code>. </li>
<li>The nuclear shelter is represented by square brackets <code>[]</code>. The letters inside the square brackets represent letters inside the shelter.  </li>
<li>The <code>#</code> means a place where nuclear strike hit the battlefield. 
If there is at least one <code>#</code> on the battlefield, all letters outside of shelter die. When there is no any <code>#</code> on the battlefield, all letters survive (but do not expect such scenario too often ;-P ).</li>
<li>The shelters have some durability. When 2 or more <code>#</code> hit close to the shelter, the shelter is destroyed and all letters inside evaporate. The &apos;close to the shelter&apos; means on the ground between the shelter and the next shelter (or beginning/end of battlefield). The below samples make it clear for you.</li>
</ul>
<h1 id="example">Example</h1>
<pre><code>abde[fgh]ijk     =&gt; &quot;abdefghijk&quot;  (all letters survive because there is no # )
ab#de[fgh]ijk    =&gt; &quot;fgh&quot; (all letters outside die because there is a # )
ab#de[fgh]ij#k   =&gt; &quot;&quot;  (all letters dies, there are 2 # close to the shellter )
##abde[fgh]ijk   =&gt; &quot;&quot;  (all letters dies, there are 2 # close to the shellter )
##abde[fgh]ijk[mn]op =&gt; &quot;mn&quot; (letters from the second shelter survive, there is no # close)
#ab#de[fgh]ijk[mn]op =&gt; &quot;mn&quot; (letters from the second shelter survive, there is no # close)
#abde[fgh]i#jk[mn]op =&gt; &quot;mn&quot; (letters from the second shelter survive, there is only 1 # close)
[a]#[b]#[c]  =&gt; &quot;ac&quot;
[a]#b#[c][d] =&gt; &quot;d&quot;
[a][b][c]    =&gt; &quot;abc&quot;
##a[a]b[c]#  =&gt; &quot;c&quot;
</code></pre><h1 id="alphabet-war-collection">Alphabet war Collection</h1>
<table border="0" cellpadding="0" cellspacing="0">
<tbody><tr>
<td><a href="https://www.codewars.com/kata/59377c53e66267c8f6000027" target="_blank">Alphavet war </a></td>
</tr>
<tr>
<td><a href="https://www.codewars.com/kata/5938f5b606c3033f4700015a" target="_blank">Alphabet war - airstrike - letters massacre</a></td>
</tr>
<tr>
<td><a href="https://www.codewars.com/kata/alphabet-wars-reinforces-massacre" target="_blank">Alphabet wars - reinforces massacre</a></td>
</tr>
<tr>
<td><a href="https://www.codewars.com/kata/59437bd7d8c9438fb5000004" target="_blank">Alphabet wars - nuclear strike</a></td>
</tr>
<tr>
<td><a href="https://www.codewars.com/kata/59473c0a952ac9b463000064" target="_blank">Alphabet war - Wo lo loooooo priests join the war</a></td>
</tr>
</tbody></table>

### Solution