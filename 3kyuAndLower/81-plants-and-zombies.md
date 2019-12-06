### Problem:
<p>This kata is inspired by <a href="http://plantsvszombies.wikia.com/wiki/Main_Page" style="color:#9f9;text-decoration:none" target="_blank"><b>Plants vs. Zombies</b></a>, a tower defense video game developed and originally published by PopCap Games.</p>

<p>The battlefield is the front lawn and the zombies are coming. Our defenses (consisting of pea-shooters) are in place and we&apos;ve got the stats of each attacking zombie. Your job is to figure out how long it takes for them to penetrate our defenses.</p>

<h2 style="color:#f66">Mechanics</h2>
<p>The two images below represent the lawn (for the test example below) at separate stages in the game.<br>
<b>Left:</b> state at move <code>3</code>, before shooters fire. <b>Right:</b>state at move <code>5</code>, after shooters fire. (Moves are <code>0</code>-based)</p>
<div style="background:#262729"><img src="https://i.imgur.com/1wSbnMC.png" alt="example image"></div>
<ul>
    <li><strong style="color:#95c4ff">Moves:</strong> During a move, new zombies appear and/or existing ones move forward one space to the left. Then the shooters fire. This two-step process repeats.<br>
    If a zombie reaches a shooter&apos;s position, it destroys that shooter. In the example image above, the zombie at <code>[4,4]</code> on the left reaches the shooter at <code>[4,2]</code> and destroys it. The zombie has <code>1</code> health point remaining and is eliminated in the same move by the shooter at <code>[4,0]</code>.</li>
    <li><strong style="color:#95c4ff">Numbered shooters</strong> shoot straight (to the right) a given number of times per move. In the example image, the green numbered shooter at <code>[0,0]</code> fires <code>2</code> times per move.</li>
    <li><strong style="color:#95c4ff">S-shooters</strong> shoot straight, and diagonally upward and downward (ie. three directions simultaneously) once per move. In the example image, the blue and orange S-shooters can attack zombies in any of the blue and orange squares, respectively (if not blocked by other zombies).<br>
    At move <code>3</code> the blue shooter can only hit the zombie at <code>[1,5]</code> while the orange shooter hits each of the zombies at <code>[1,5]</code>, <code>[2,7]</code>, and <code>[4,6]</code> once for that move.</li>
    <li><strong style="color:#95c4ff">Shooting Priority</strong>: The numbered shooters fire all their shots in a cluster, then the S-shooters fire their shots in order from right to left, then top to bottom. Note that once a zombie&apos;s health reaches <code>0</code> it drops immediately and does not absorb any additional shooter pellets.<br>
    In the example image, the orange S-shooter fires before the blue one.</li>
</ul>

<h2 style="color:#f66">Input</h2>
<p>Your function will receive two arguments:</p>
<ul>
    <li><strong style="color:#95c4ff">Lawn Map:</strong> An array/list consisting of strings, where each string represents a row of the map. Each string will consist of either <code>&quot; &quot;</code> (space character) which represents empty space, a numeric digit (<code>0-9</code>) representing a numbered shooter, or the letter <code>S</code> representing an S-shooter.</li>
    <li><strong style="color:#95c4ff">Zombie Stats:</strong> An array of subarrays representing each zombie, in the following format:<br>
    <code>[i,row,hp]</code> - where <code>i</code> is the move number (0-based) when it appears, <code>row</code> is the row the zombie walks down, and <code>hp</code> is the initial health point value of the zombie.<br>
    When new zombies appear, they start at the farthest right column of their row.</li>
</ul>
<p>Input will always be valid.</p>

<h2 style="color:#f66">Output</h2>
<p>Return the number of moves before the first zombie penetrates our defenses (by getting past column <code>0</code>), or <code>null</code>/<code>None</code> if all zombies are eliminated.</p>

<h2 style="color:#f66">Test Example</h2>

<pre><code class="language-javascript"><span class="hljs-keyword">let</span> lawn = [
    <span class="hljs-string">&apos;2       &apos;</span>,
    <span class="hljs-string">&apos;  S     &apos;</span>,
    <span class="hljs-string">&apos;21  S   &apos;</span>,
    <span class="hljs-string">&apos;13      &apos;</span>,
    <span class="hljs-string">&apos;2 3     &apos;</span>
];
<span class="hljs-keyword">let</span> zombies = [[<span class="hljs-number">0</span>,<span class="hljs-number">4</span>,<span class="hljs-number">28</span>],[<span class="hljs-number">1</span>,<span class="hljs-number">1</span>,<span class="hljs-number">6</span>],[<span class="hljs-number">2</span>,<span class="hljs-number">0</span>,<span class="hljs-number">10</span>],[<span class="hljs-number">2</span>,<span class="hljs-number">4</span>,<span class="hljs-number">15</span>],[<span class="hljs-number">3</span>,<span class="hljs-number">2</span>,<span class="hljs-number">16</span>],[<span class="hljs-number">3</span>,<span class="hljs-number">3</span>,<span class="hljs-number">13</span>]];
plantsAndZombies(lawn,zombies); <span class="hljs-comment">//10</span></code></pre>
<pre style="display: none;"><code class="language-python">lawn = [
    <span class="hljs-string">&apos;2       &apos;</span>,
    <span class="hljs-string">&apos;  S     &apos;</span>,
    <span class="hljs-string">&apos;21  S   &apos;</span>,
    <span class="hljs-string">&apos;13      &apos;</span>,
    <span class="hljs-string">&apos;2 3     &apos;</span>
]
zombies = [[<span class="hljs-number">0</span>,<span class="hljs-number">4</span>,<span class="hljs-number">28</span>],[<span class="hljs-number">1</span>,<span class="hljs-number">1</span>,<span class="hljs-number">6</span>],[<span class="hljs-number">2</span>,<span class="hljs-number">0</span>,<span class="hljs-number">10</span>],[<span class="hljs-number">2</span>,<span class="hljs-number">4</span>,<span class="hljs-number">15</span>],[<span class="hljs-number">3</span>,<span class="hljs-number">2</span>,<span class="hljs-number">16</span>],[<span class="hljs-number">3</span>,<span class="hljs-number">3</span>,<span class="hljs-number">13</span>]]
plants_and_zombies(lawn,zombies); <span class="hljs-comment">#10</span></code></pre>
<p>For another Tower Defense-style challenge, check out <a href="https://www.codewars.com/kata/5a57faad880385f3b60000d0" style="color:#aff;text-decoration:none" target="_blank"><b>Tower Defense: Risk Analysis</b></a></p>

<p>If you enjoyed this kata, be sure to check out <a href="https://www.codewars.com/users/docgunthrop/authored" target="_blank">my other katas</a>.</p>

### Solution