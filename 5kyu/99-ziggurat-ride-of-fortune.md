### Problem:
<p>You and a group of explorers have found a legendary ziggurat hidden in an obscure jungle. According to legend, the ancient structure houses portals to other worlds.</p>
<p>The outer west wall of the ziggurat consists of a series of entrance doors. When an explorer enters through a door, they sit in a mobile cart that moves in a straight path until it reaches a &quot;switch&quot; or hits a wall.</p>
<p>A <span style="color:#8df">switch</span> re-routes the cart either left or right, depending on the state of the switch and the cart&apos;s movement direction.</p>
<p>Interdimensional portals line the entire north, east, and south walls inside the ziggurat. If a cart hits one of these walls, the occupying explorer exits through the portal before them. If a cart ends at the west wall, the explorer exits through a door and returns back outside.</p>
<p>The expedition leader has assigned to you the task of keeping track of the exit points of each explorer. You are given an artifact that provides you with a map of the ziggurat&apos;s inner chamber.</p>

<h2 style="color:#f88">Switch Mechanics</h2>
<div style="width:310px;height:260px;background:#000;padding:5px"><img src="https://i.imgur.com/RHPCVqC.png"></div>
<p>Above is a representation of a switch. It exists in one of two states <code>A</code> or <code>B</code>.</p>
<ul>
    <li>If a switch is in the <code>A</code> state and and a cart enters by moving:
        <ul>
            <li><b>west</b>, they are routed north</li>
            <li><b>east</b>, they are routed south</li>
            <li><b>south</b>, they are routed east</li>
            <li><b>north</b>, they are routed west</li>
        </ul></li>
    <li>If the switch were in the <code>B</code> state, the cart would be routed in the orthogonal direction opposite to that for the <code>A</code> state.</li>
    <li>Immediately after a cart passes through a switch, the switch changes state by rotating 90 degrees.</li>
</ul>

<h2 style="color:#f88">Cart Pathing</h2>
<img src="https://i.imgur.com/UChfJkG.png">
<p>Above left is an example ziggurat with four switches in their initial states. The <code>S</code> in the green arrow represents the initial position of the explorer who enters the structure through door <code>1</code>.<br>
The switches at <code>[1,1]</code>, <code>[1,4]</code>, and <code>[4,1]</code> begin in state <code>A</code>, while the switch at <code>[4,4]</code> begins in state <code>B</code>.</p>
<ul>
    <li>The left image shows the path followed by the cart (in sequence, denoted by the white dashed arrows labeled <code>1</code>, <code>2</code>, and <code>3</code>). First it travels through the switch at <code>[1,1]</code>, then <code>[4,1]</code>, and then <code>[4,4]</code>.</li>
    <li>The right image shows the remainder of the cart&apos;s path, up to the explorer&apos;s exit (marked by the red arrow).<br>By step <code>4</code> (after exiting the switch at <code>[1,4]</code>), the state of all four switches have changed, as shown above.</li>
    <li>The end state for the switch at <code>[1,4]</code> is <code>B</code>, while the rest end in state <code>A</code>.</li>
    <li>If the next explorer in sequence were also to enter through door <code>1</code>, they would exit through the portal at <code>[5,4]</code>.</li>
</ul>

<h2 style="color:#f88">Input</h2>
<p>Your function will receive two arguments:</p>
<ul>
    <li>An <code>n</code> x <code>n</code> matrix representing the layout of the ziggurat interior.</li>
    <li>An array/list of the doors (rows) entered by each explorer in sequence. Assume each following explorer enters immediately after the preceding explorer has exited.</li>
</ul>

<h2 style="color:#f88">Output</h2>
<p>Your function should return an array of the exit points of explorers who exit through portals and <code>null</code>/<code>None</code> for those who return back outside.</p>

<h2 style="color:#f88">Test Example</h2>

<pre><code class="language-javascript"><span class="hljs-keyword">let</span> artifact = [
    <span class="hljs-string">&apos;      &apos;</span>,
    <span class="hljs-string">&apos; A  A &apos;</span>,
    <span class="hljs-string">&apos;      &apos;</span>,
    <span class="hljs-string">&apos;      &apos;</span>,
    <span class="hljs-string">&apos; A  B &apos;</span>,
    <span class="hljs-string">&apos;      &apos;</span>];
<span class="hljs-keyword">let</span> explorers = [<span class="hljs-number">1</span>,<span class="hljs-number">1</span>,<span class="hljs-number">0</span>,<span class="hljs-number">3</span>,<span class="hljs-number">4</span>,<span class="hljs-number">4</span>,<span class="hljs-number">2</span>,<span class="hljs-number">5</span>,<span class="hljs-number">1</span>,<span class="hljs-number">4</span>];
rideOfFortune(artifact,explorers); <span class="hljs-comment">//[null,[5,4],[0,5],[3,5],[0,4],[5,1],[2,5],[5,5],null,[5,1]]</span></code></pre>
<pre style="display: none;"><code class="language-python">artifact = [
    <span class="hljs-string">&apos;      &apos;</span>,
    <span class="hljs-string">&apos; A  A &apos;</span>,
    <span class="hljs-string">&apos;      &apos;</span>,
    <span class="hljs-string">&apos;      &apos;</span>,
    <span class="hljs-string">&apos; A  B &apos;</span>,
    <span class="hljs-string">&apos;      &apos;</span>]
explorers = [<span class="hljs-number">1</span>,<span class="hljs-number">1</span>,<span class="hljs-number">0</span>,<span class="hljs-number">3</span>,<span class="hljs-number">4</span>,<span class="hljs-number">4</span>,<span class="hljs-number">2</span>,<span class="hljs-number">5</span>,<span class="hljs-number">1</span>,<span class="hljs-number">4</span>]
ride_of_fortune(artifact,explorers) <span class="hljs-comment">#[None,[5,4],[0,5],[3,5],[0,4],[5,1],[2,5],[5,5],None,[5,1]]</span></code></pre>
<pre style="display: none;"><code class="language-go">artifact := []<span class="hljs-keyword">string</span>{
    <span class="hljs-string">&quot;      &quot;</span>,
    <span class="hljs-string">&quot; A  A &quot;</span>,
    <span class="hljs-string">&quot;      &quot;</span>,
    <span class="hljs-string">&quot;      &quot;</span>,
    <span class="hljs-string">&quot; A  B &quot;</span>,
    <span class="hljs-string">&quot;      &quot;</span>,
}
explorers := []<span class="hljs-keyword">int</span>{<span class="hljs-number">1</span>,<span class="hljs-number">1</span>,<span class="hljs-number">0</span>,<span class="hljs-number">3</span>,<span class="hljs-number">4</span>,<span class="hljs-number">4</span>,<span class="hljs-number">2</span>,<span class="hljs-number">5</span>,<span class="hljs-number">1</span>,<span class="hljs-number">4</span>}
RideOfFortune(artifact,explorers) <span class="hljs-comment">// [[-1 -1] [5 4] [0 5] [3 5] [0 4] [5 1] [2 5] [5 5] [-1 -1] [5 1]]</span></code></pre>
<pre style="display: none;"><code class="language-csharp"><span class="hljs-keyword">string</span>[] artifact = {
    <span class="hljs-string">&quot;      &quot;</span>,
    <span class="hljs-string">&quot; A  A &quot;</span>,
    <span class="hljs-string">&quot;      &quot;</span>,
    <span class="hljs-string">&quot;      &quot;</span>,
    <span class="hljs-string">&quot; A  B &quot;</span>,
    <span class="hljs-string">&quot;      &quot;</span>
};
<span class="hljs-keyword">int</span>[] explorers = {<span class="hljs-number">1</span>,<span class="hljs-number">1</span>,<span class="hljs-number">0</span>,<span class="hljs-number">3</span>,<span class="hljs-number">4</span>,<span class="hljs-number">4</span>,<span class="hljs-number">2</span>,<span class="hljs-number">5</span>,<span class="hljs-number">1</span>,<span class="hljs-number">4</span>};
Ziggurat.RideOfFortune(artifact,explorers); <span class="hljs-comment">// {{-1,-1}, {5,4}, {0,5}, {3,5}, {0,}] ,{5,1}, {2,5}, {5,5}, {-1,-1}, {5,1}}</span></code></pre>
<pre style="display: none;"><code class="language-java">String[] artifact = { <span class="hljs-string">&quot; &quot;</span>,
<span class="hljs-string">&quot; A A &quot;</span>,
<span class="hljs-string">&quot; &quot;</span>,
<span class="hljs-string">&quot; &quot;</span>,
<span class="hljs-string">&quot; A B &quot;</span>,
<span class="hljs-string">&quot; &quot;</span>};
<span class="hljs-keyword">int</span>[] explorers = {<span class="hljs-number">1</span>,<span class="hljs-number">1</span>,<span class="hljs-number">0</span>,<span class="hljs-number">3</span>,<span class="hljs-number">4</span>,<span class="hljs-number">4</span>,<span class="hljs-number">2</span>,<span class="hljs-number">5</span>,<span class="hljs-number">1</span>,<span class="hljs-number">4</span>};
List&lt;Point&gt; sol = Ziggurat.ride_of_fortune(artifact,explorers) <span class="hljs-comment">// [null,(5,4),(0,5),(3,5),(0,4),(5,1),(2,5),(5,5),null,(5,1)]</span></code></pre>
<h2 style="color:#f88">Technical Constraints</h2>

<ul>
<li>Ziggurat size <code>n</code> range: <code>40 &gt;= n &gt;= 6</code></li>
<li>Final Test Suite: <code>15</code> fixed tests, <code>100</code> random tests</li>
<li>JavaScript: prototypes have been frozen and <code>require</code> has been disabled</li>
<li>Inputs will always be valid</li>
</ul>
<p>If you enjoyed this kata, be sure to check out <a href="https://www.codewars.com/users/docgunthrop/authored" target="_blank">my other katas</a>.</p>

### Solution