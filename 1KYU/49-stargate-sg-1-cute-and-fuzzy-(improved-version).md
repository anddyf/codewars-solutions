### Problem:
<p><i><font size="2"><u>Note:</u> This kata is the improved/corrected version of <a href="https://www.codewars.com/kata/stargate-sg-1-cute-and-fuzzy" target="_blank">this one</a>.<br>I&apos;m not the original author but, while the former has quit codewars without correcting the bugs in his kata and letting it inconsistent with the description, the latter took a lot of time to debug the thing and improve it (the original algorithm didn&apos;t have full coverage), so I published it on my side <font size="1">(and that will make the maintenance easier...)</font>.</font></i></p><i><font size="2">
</font></i><p><i><font size="2">Enjoy!</font></i></p>
<hr>

<br>
<blockquote><i>I don&apos;t even know what they look like.
<br>Furling... Sounds cute and fuzzy to me.</i>
<br><br>- Jonas Quinn and Jack O&apos;Neill, &quot;Paradise Lost&quot;.</blockquote>

<br>
<h1>Previously on Stargate SG-1</h1>

<p>Arriving on P4F-976, SG-1 finally come into contact with the <i>Furlings</i>, one of the four great races within the Milky Way. After several days of deliberation with the Furling Directorate, the Tauri finally have access to the knowledge they have been searching for. </p>
<p>The Furlings, having provided assistance with the Ancient&apos;s expansion into the Milky Way, have extensive knowledge of the Stargate Network and it&apos;s components. One such component, the Dial Home Device, has caused many disasters at Stargate Command through it&apos;s absence. Thankfully, the Furlings have all the necessary blueprints for it&apos;s construction, and have handed copies over to the Tauri. After beginning mass production of the control crystals necessary for it&apos;s function, Stargate Command has hit a snag. The Ancients had designed the control crystals to function if their inner pathways are as efficient as possible - essentially, the pathways must choose the shortest path between two nodes. Stargate Command has turned to you - a software engineer - to fix their problems.</p>
<br>
<h1>Your Mission</h1>

<p>Given a string containing the current state of the control crystals inner pathways (labeled as <code>&quot;X&quot;</code>) and its gaps (labeled as <code>&quot;.&quot;</code>), generate the shortest path from the start node (labeled as <code>&quot;S&quot;</code>) to the goal node (labeled as <code>&quot;G&quot;</code>) and return the new pathway (labeled with <code>&quot;P&quot;</code> characters).<br>If no solution is possible, return the string <code>&quot;Oh for crying out loud...&quot;</code> (in frustration).</p>
<br>
<h1>The Rules</h1>

<ul>
<li>Nodes labeled as <code>&quot;X&quot;</code> are not traversable.</li>
<li>Nodes labeled as <code>&quot;.&quot;</code> are traversable.</li>
<li>A pathway can be grown in eight directions (up, down, left, right, up-left, up-right, down-left, down-right), so diagonals are possible.</li>
<li>Nodes labeled <code>&quot;S&quot;</code> and <code>&quot;G&quot;</code> are not to be replaced with <code>&quot;P&quot;</code> in the case of a solution.</li>
<li>The shortest path is defined as the path with the shortest euclidiean distance going from one node to the next.</li>
<li>If several paths are possible with the same shortest distance, return any one of them.</li>
</ul>
<p>Note that the mazes won&apos;t always be squares.</p>
<br>
<b>Example #1: Valid solution</b>

<pre><code>.S...             .SP..
XXX..             XXXP.
.X.XX      =&gt;     .XPXX
..X..             .PX..
G...X             G...X</code></pre><br>
<b>Example #2: No solution</b>

<pre><code>S....      
XX...      
...XX      =&gt;     &quot;Oh for crying out loud...&quot;
.XXX.      
XX..G</code></pre><br>
<hr>
<br>
Note: Your solution will have to be efficient because it will have to deal with a lot of maps and big ones.

<p>Caracteristics of the random tests:</p>
<ul>
<li>map sizes from 3x3 to 73x73 (step is 5 from one size to the other, mazes won&apos;t always be squares)</li>
<li>20 random maps for each size.</li>
<li>Overall, 311 tests to pass with the fixed ones.</li>
</ul>

### Solution