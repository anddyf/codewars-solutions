### Problem:
<img src="https://i.imgur.com/ta6gv1i.png?1">

<hr>
<p><span style="font-weight:bold;font-size:1.5em;color:red"><em>Blaine is a pain, and that is the truth</em></span><em>&#xA0;- Jake Chambers</em></p>
<h1 id="span-stylecolororangebackgroundspan"><span style="color:orange">Background</span></h1>
<p>Blaine likes to deliberately crash toy trains!</p>
<h2 id="span-stylecolororangetrainsspan"><span style="color:orange"><em>Trains</em></span></h2>
<p>Trains look like this</p>
<ul>
<li><code>Aaaaaaaaaa</code></li>
<li><code>bbbB</code></li>
</ul>
<p>The engine and carriages use the same character, but because the only engine is uppercase you can tell which way the train is going.</p>
<p>Trains can be any alphabetic character</p>
<ul>
<li>An &quot;Express&quot; train uses <code>X</code></li>
<li>Normal suburban trains are all other letters</li>
</ul>
<h2 id="span-stylecolororangetracksspan"><span style="color:orange"><em>Tracks</em></span></h2>
<p>Track pieces are characters <code>-</code> <code>|</code> <code>/</code> <code>\</code> <code>+</code> <code>X</code> and they can be joined together like this</p>
<table>
<tbody><tr>
<td><i>Straights</i>
</td><td width="20%">
<pre style="background:black">----------

<p></p></pre><p></p>
</td><td width="20%">
<pre style="background:black">|
|
|
</pre>
</td><td width="20%">
<pre style="background:black">\
 \
  \
</pre>
</td><td width="20%">
<pre style="background:black">   /
  /
 /
</pre>
</td></tr>
<tr>
<td><i>Corners</i>
</td><td>
<pre style="background:black">|
|
 \-----
</pre>
</td><td>
<pre style="background:black">     |
     |
-----/
</pre>
</td><td>
<pre style="background:black">/-----
|
|
</pre>
</td><td>
<pre style="background:black">-----\
     |
     |
</pre>

</td></tr>

<tr>
<td><i>Curves</i>
</td><td>
<pre style="background:black">-----\
      \-----

<p></p></pre><p></p>
</td><td>
<pre style="background:black">      /-----
-----/

<p></p></pre><p></p>
</td><td>
<pre style="background:black">  |
  /
 /
 |
</pre>
</td><td>
<pre style="background:black">|
\
 \
 |
</pre>

</td></tr>
<tr>
<td><i>Crossings</i>
</td><td>
<pre style="background:black">   |
---+---
   |
</pre>
</td><td>
<pre style="background:black">  \ /
   X
  / \
</pre>
</td><td>
</td><td>

</td></tr>


</tbody></table>

<h2 id="span-stylecolororangedescribing-where-a-train-is-on-the-linespan"><span style="color:orange"><em>Describing where a train is on the line</em></span></h2>
<p>The track &quot;zero position&quot; is defined as the leftmost piece of track of the top row.</p>
<p>Other <u>track positions</u> are just distances from this <em>zero position</em> (following the line beginning clockwise).</p>
<p>A <u>train position</u> is the track position of the train <em>engine</em>. </p>
<h2 id="span-stylecolororangestationsspan"><span style="color:orange"><em>Stations</em></span></h2>
<p>Train stations are represented by a letter <code>S</code>. </p>
<p>Stations can be on straight sections of track, or crossings, like this</p>
<table>
<tbody><tr>
<td rowspan="2"><i>Stations</i>
</td><td width="20%">
<pre style="background:black"><p>----S-----</p>
<p></p></pre><p></p>
</td><td width="20%">
<pre style="background:black">|
S
|
</pre>
</td><td width="20%">
<pre style="background:black">\
 S
  \
</pre>
</td><td width="20%">
<pre style="background:black">   /
  S
 /
</pre>
</td></tr>

<tr>
<td width="20%">
<pre style="background:black">    |
----S----
    |
</pre>
</td><td width="20%">
<pre style="background:black"> \ /
  S
 /  \
</pre>
</td></tr>

</tbody></table>

<br>
When a train arrives at a station it stops there for a period of time determined by the length of the train!

<p>The time <strong>T</strong> that a train will remain at the station is same as the number of <em>carriages</em> it has. </p>
<p>For example</p>
<ul>
<li><code>bbbB</code> - will stop at a station for 3 time units</li>
<li><code>Aa</code> - will stop at a station for 1 time unit</li>
</ul>
<p>Exception to the rule: The &quot;Express&quot; trains never stop at any station.</p>
<h2 id="span-stylecolororangecollisionsspan"><span style="color:orange"><em>Collisions</em></span></h2>
<p>There are lots of ways to crash trains. Here are a few of Blaine&apos;s favorites...</p>
<ul>
<li><em>The Chicken-Run</em> - Train chicken. Maximum impact.</li>
<li><em>The T-Bone</em> -  Two trains and one crossing</li>
<li><em>The Self-Destruct</em> - Nobody else to blame here</li>
<li><em>The Cabooser</em> - Run up the tail of a stopped train</li>
<li><em>The Kamikaze</em> - Crash head-on into a stopped train</li>
</ul>
<h1 id="span-stylecolororangekata-taskspan"><span style="color:orange">Kata Task</span></h1>
<p>Blaine has a variety of <em>continuous loop</em> train lines. </p>
<p>Two trains are then placed onto the line, and both start moving at the same time. </p>
<p>How long (how many iterations) before the trains collide?</p>
<h2 id="span-stylecolororangeinputspan"><span style="color:orange"><em>Input</em></span></h2>
<ul>
<li><code>track</code> - string representation of the entire train line (<code>\n</code> separators - maybe jagged, maybe not trailing)</li>
<li><code>a</code> - train A</li>
<li><code>aPos</code> - train A start position</li>
<li><code>b</code> - train B</li>
<li><code>bPos</code> - train B start position</li>
<li><code>limit</code> - how long before Blaine tires of waiting for a crash and gives up</li>
</ul>
<h2 id="span-stylecolororangeoutputspan"><span style="color:orange"><em>Output</em></span></h2>
<ul>
<li>Return how long before the trains collide, or</li>
<li>Return <code>-1</code> if they have not crashed before <code>limit</code> time has elapsed, or</li>
<li>Return <code>0</code> if the trains were already crashed in their start positions. Blaine is sneaky sometimes.</li>
</ul>
<h1 id="span-stylecolororangenotesspan"><span style="color:orange">Notes</span></h1>
<p>Trains</p>
<ul>
<li>Speed...<ul>
<li>All trains (even the &quot;Express&quot; ones) move at the same constant speed of 1 track piece / time unit</li>
</ul>
</li>
<li>Length...<ul>
<li>Trains can be any length, but there will always be at least one carriage</li>
</ul>
</li>
<li>Stations...<ul>
<li>Suburban trains stop at every station</li>
<li>&quot;Express&quot; trains don&apos;t stop at any station</li>
<li>If the start position happens to be at a station then the train leaves at the next move</li>
</ul>
</li>
<li>Directions...<ul>
<li>Trains can travel in either direction</li>
<li>A train that looks like <code>zzzzzZ</code> is travelling <em>clockwise</em> as it passed the track &quot;zero position&quot;</li>
<li>A train that looks like <code>Zzzzzz</code> is traveliing <em>anti-clockwise</em> as it passes the track &quot;zero position&quot;</li>
</ul>
</li>
</ul>
<p>Tracks</p>
<ul>
<li>All tracks are single continuous loops</li>
<li>There are no ambiguous corners / junctions in Blaine&apos;s track layouts</li>
</ul>
<p>All input is valid</p>
<h1 id="span-stylecolororangeexamplespan"><span style="color:orange">Example</span></h1>
<p>In the following track layout:</p>
<ul>
<li>The &quot;zero position&quot; is  <span style="background:orange">/</span></li>
<li>Train A is <span style="background:green">Aaaa</span> and is at position <code>147</code></li>
<li>Train B is <span style="background:red">Bbbbbbbbbbb</span> and is at position <code>288</code></li>
<li>There are 3 stations denoted by <code>S</code></li>
</ul>
<pre style="background:black">                                <span style="background:orange">/</span>------------\
/-----<span style="background:green">Aaaa</span>----\                /             |
|             |               /              S
|             |              /               |
|        /----+--------------+------\        |
\       /     |              |      |        |      
 \      |     \              |      |        |
 |      |      \-------------+------+--------+---\            
 |      |                    |      |        |   |
 \------+------S-------------+------/        /   |
        |                    |              /    |
        \--------------------+-------------/     |
                             |                   |
/-------------\              |                   |        
|             |              |             /-----+----\      
|             |              |             |     |     \    
\-------------+--------------+-----S-------+-----/      \   
              |              |             |             \
              |              |             |             |
              |              \-------------+-------------/
              |                            |
              \---------<span style="background:red">Bbbbbbbbbbb</span>--------/
</pre>   

<br>
<hr>
Good Luck!

<p>DM<br><span style="color:red">:-)</span></p>

### Solution