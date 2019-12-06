### Problem:
<p>This kata is inspired by <a href="https://en.wikipedia.org/wiki/Tower_defense" style="color:#9f9;text-decoration:none" target="_blank"><b>Tower Defense</b></a> (TD), a subgenre of strategy video games where the goal is to defend a player&apos;s territories or possessions by obstructing enemy attackers, usually by placing defensive structures on or along their path of attack.</p>

<!--<p style="color:#fdd">If you enjoyed this kata, check out its little sibling, <a href="blank"><b><i>Plants vs Zombies: Risk Assessment</i></b></a></p>-->

<h2 style="color:#f66">Objective</h2>
<p>It&apos;s the future, and hostile aliens are attacking our planet. We&apos;ve set up a defense system in the planet&apos;s outer perimeter. You&apos;re tasked with calculating the severity of a breach.</p>

<h2 style="color:#f66">Input</h2>
<p>Your function will receive three arguments:</p>
<ul>
    <li><b>Battle Area Map:</b> An array/list of strings representing an <code>n</code> x <code>n</code> battle area.<br>
    Each string will consist of any of the following characters:<br>
    <ul>
        <li><code>0</code>: entrance point (starting position on alien path)</li>
        <li><code>1</code>: alien path</li>
        <li><code>&quot; &quot;</code>(space character): not alien path</li>
        <li><code>A - Z</code>: turret positions</li>
    </ul>
    </li>
    <li><b>Turret Stats:</b> An object/dict where keys are upper-case characters from the English alphabet (<code>A - Z</code>) and the values are subarrays in the following format:<br>
    <code>[n,m]</code> - where <code>n</code> is the attack range of a turret, and <code>m</code> is its shot frequency per move</li>
    <li><b>Alien Wave Stats:</b> An array of integers representing each individual alien in sequence. Each value is an integer representing the health points of each alien; health points are the number of turret shots required to take down a given alien. Integer zero (<code>0</code>) counts as a gap in sequence.</li>
</ul>

<h2 style="color:#f66">Output</h2>
<p>Return the integer sum of total health points of all aliens that successfully penetrate our defense.</p><br>

<div style="height:330px;width:666px;background:#111;padding:5px">
<img src="https://i.imgur.com/etQx7I8.png" alt="example image">
</div>
<p><b>The image above shows the game state for the test example (below) at the </b><code>11</code><b>th move.</b></p>
<p>The green square in the north-west quadrant represents the starting position of the alien wave, and the red square in the south-east quadrant represents the last position before breaching the defensive perimeter.<br>
The blue circles represent the turret positions and are labeled <code>A</code>,<code>B</code>,<code>C</code>, and <code>D</code>.<br>
The red alien is the first alien in the sequence.</p>

<h2 style="color:#f66">Technical Details</h2>
<ul>
    <li>There is only one path and it maintains a width of <code>1</code>.</li>
    <li>Aliens move one square per turn</li>
    <li><b>Turrets only fire toward enemies in range.</b><br>
    In the image above, the turret labeled <code>A</code> has the value <code>[3,2]</code>, meaning it can fire at aliens that occupy any position within <code>3</code> squares&apos; length in Euclidean distance (the pink squares). Turret <code>A</code> will fire <code>2</code> times per move.<br>
    The turret labeled <code>D</code> with the value <code>[1,3]</code> can fire at targets that enter the square above it and the square to the right of it (the blue shaded squares) at a rate of <code>3</code> times per move.</li>
    <li><b>Turret target priority is toward the enemy within shooting range that is furthest along on the path.</b><br>
    In the image above, turret <code>A</code> will target the red alien because it is the alien furthest along the path that is also within shooting range. This reduces the alien&apos;s health from <code>8</code> to <code>6</code>.<br>
    The next alien will die from damage taken from turret <code>B</code>, which reduced its health from <code>4</code> to <code>0</code>.
    </li>
    <li><b>Turret shooting timing:</b> All turrets with a target will fire their first shot in alphabetical order. The remaining turrets that still have more shots available will fire their next shot in alphabetical order once again. This repeats until there are no more shots to fire. This marks the end of the move.</li>
    <li>Matrix size: <code>n</code> x <code>n</code> where <code>20 &gt;= n &gt;= 7</code></li>
    <li>Alien list max length: <code>80</code></li>
    <li>Full Test Suite: <code>10</code> Fixed Tests, <code>100</code> Random Tests</li>
    <li>Input will always be valid.</li>
</ul>

<h2 style="color:#f66">Test Example</h2>

<pre><code class="language-javascript"><span class="hljs-keyword">let</span> battlefield = [
    <span class="hljs-string">&apos;0111111&apos;</span>,
    <span class="hljs-string">&apos;  A  B1&apos;</span>,
    <span class="hljs-string">&apos; 111111&apos;</span>,
    <span class="hljs-string">&apos; 1     &apos;</span>,
    <span class="hljs-string">&apos; 1C1111&apos;</span>,
    <span class="hljs-string">&apos; 111 D1&apos;</span>,
    <span class="hljs-string">&apos;      1&apos;</span>
];
<span class="hljs-keyword">let</span> turrets = {<span class="hljs-attr">A</span>:[<span class="hljs-number">3</span>,<span class="hljs-number">2</span>],<span class="hljs-attr">B</span>:[<span class="hljs-number">1</span>,<span class="hljs-number">4</span>],<span class="hljs-attr">C</span>:[<span class="hljs-number">2</span>,<span class="hljs-number">2</span>],<span class="hljs-attr">D</span>:[<span class="hljs-number">1</span>,<span class="hljs-number">3</span>]},
<span class="hljs-keyword">let</span> wave = [<span class="hljs-number">30</span>,<span class="hljs-number">14</span>,<span class="hljs-number">27</span>,<span class="hljs-number">21</span>,<span class="hljs-number">13</span>,<span class="hljs-number">0</span>,<span class="hljs-number">15</span>,<span class="hljs-number">17</span>,<span class="hljs-number">0</span>,<span class="hljs-number">18</span>,<span class="hljs-number">26</span>];
towerDefense(battlefield,turrets,wave); <span class="hljs-comment">//10</span>
<span class="hljs-comment">/*
The aliens that survive are the alien at wave[7] with an ending health of 2
and the alien at wave[8] with an ending health of 8.
*/</span></code></pre>
<pre style="display: none;"><code class="language-python">battlefield = [
    <span class="hljs-string">&apos;0111111&apos;</span>,
    <span class="hljs-string">&apos;  A  B1&apos;</span>,
    <span class="hljs-string">&apos; 111111&apos;</span>,
    <span class="hljs-string">&apos; 1     &apos;</span>,
    <span class="hljs-string">&apos; 1C1111&apos;</span>,
    <span class="hljs-string">&apos; 111 D1&apos;</span>,
    <span class="hljs-string">&apos;      1&apos;</span>
]
turrets = {<span class="hljs-string">&apos;A&apos;</span>:[<span class="hljs-number">3</span>,<span class="hljs-number">2</span>],<span class="hljs-string">&apos;B&apos;</span>:[<span class="hljs-number">1</span>,<span class="hljs-number">4</span>],<span class="hljs-string">&apos;C&apos;</span>:[<span class="hljs-number">2</span>,<span class="hljs-number">2</span>],<span class="hljs-string">&apos;D&apos;</span>:[<span class="hljs-number">1</span>,<span class="hljs-number">3</span>]}
wave = [<span class="hljs-number">30</span>,<span class="hljs-number">14</span>,<span class="hljs-number">27</span>,<span class="hljs-number">21</span>,<span class="hljs-number">13</span>,<span class="hljs-number">0</span>,<span class="hljs-number">15</span>,<span class="hljs-number">17</span>,<span class="hljs-number">0</span>,<span class="hljs-number">18</span>,<span class="hljs-number">26</span>]
tower_defense(battlefield,turrets,wave); <span class="hljs-comment">#10</span>
<span class="hljs-string">&apos;&apos;&apos;
The aliens that survive are the alien at wave[7] with an ending health of 2
and the alien at wave[8] with an ending health of 8.&apos;&apos;&apos;</span></code></pre>
<p>For another Tower Defense-style challenge, check out <a href="https://www.codewars.com/kata/5a5db0f580eba84589000979" style="color:#aff;text-decoration:none" target="_blank"><b>Plants and Zombies</b></a></p>

<!--<p style="color:#8ff">If the Description is unclear or if you find a bug, feel free to make a comment in the Discourse section.</p>-->

<p>If you enjoyed this kata, be sure to check out <a href="https://www.codewars.com/users/docgunthrop/authored" target="_blank">my other katas</a>.</p>

### Solution