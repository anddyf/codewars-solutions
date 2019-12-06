### Problem:
<p><video controls autoplay="autoplay" loop="loop"><source src="https://thumbs.gfycat.com/PaleQuestionableGoldeneye-mobile.mp4" type="video/mp4"></video></p>
<p><sub><b>Above:</b> <a href="https://thumbs.gfycat.com/PaleQuestionableGoldeneye-mobile.mp4" target="_blank">Game footage from Bloxorz online game</a></sub></p>
<p>This kata is inspired by <a href="http://miniclip.wikia.com/wiki/Bloxorz" target="_blank"><strong>Bloxorz</strong></a>, a flash-based 3D puzzle game where the objective is to maneuver a block to have it fall through a square hole.</p>
<h1 id="objective">Objective</h1>
<p>Your goal is to maneuver a <a href="https://en.wikipedia.org/wiki/Cuboid" target="_blank">rectangular cuboid</a> with dimensions <code>1 x 1 x 2</code> on a 2-dimensional grid made up of <code>1 x 1</code> square tiles. While moving the cuboid around, your block must never, at any point, have any part of its bottom-facing surface exposed to open air.</p>
<h2 id="input">Input</h2>
<p>Your function will receive an array of strings describing the layout of the grid to be traversed. A <code>1</code> represents solid ground (tiles), a <code>0</code> represents open air, a <code>B</code> represents your starting position, and an <code>X</code> represents the square hole (destination).</p>
<h2 id="output">Output</h2>
<p>Your function must return a string representing the minimum sequence of moves required to get the block into the square hole. It will consist of a combination of the following characters: <code>U</code> (up), <code>D</code> (down), <code>L</code> (left), <code>R</code> (right).</p>
<h2 id="block-movement">Block Movement</h2>
<p><img src="https://i.imgur.com/6k4Oufb.png" alt></p>
<p>The block can cover either one or two tiles with each movement, depending on whether it is standing upright or on its long end. The image above shows an overhead view; the yellow squares represent the tiles occupied by the block and the green squares represent the tiles occupied when moved toward a given cardinal direction.</p>
<p>In Fig. 1, the block&apos;s position is standing upright, and in Fig. 2, the block is on its long end.</p>
<h2 id="test-example">Test Example</h2>
<pre><code class="language-javascript"><span class="hljs-keyword">let</span> level1 = [<span class="hljs-string">&apos;1110000000&apos;</span>,
              <span class="hljs-string">&apos;1B11110000&apos;</span>,
              <span class="hljs-string">&apos;1111111110&apos;</span>,
              <span class="hljs-string">&apos;0111111111&apos;</span>,
              <span class="hljs-string">&apos;0000011X11&apos;</span>,
              <span class="hljs-string">&apos;0000001110&apos;</span>];

bloxSolver(level1); <span class="hljs-comment">//&apos;RRDRRRD&apos; or &apos;RDDRRDR&apos;</span></code></pre>
<pre style="display: none;"><code class="language-python">level1 = [
    <span class="hljs-string">&apos;1110000000&apos;</span>,
    <span class="hljs-string">&apos;1B11110000&apos;</span>,
    <span class="hljs-string">&apos;1111111110&apos;</span>,
    <span class="hljs-string">&apos;0111111111&apos;</span>,
    <span class="hljs-string">&apos;0000011X11&apos;</span>,
    <span class="hljs-string">&apos;0000001110&apos;</span>
]

blox_solver(level1) <span class="hljs-comment">#&apos;RRDRRRD&apos; or &apos;RDDRRDR&apos;</span></code></pre>
<p>An overhead view of the game grid for the example <code>level1</code> is shown below, with a green square representing the starting position of the block, the red square representing the square hole, the light grey squares representing the platform tiles, and the dark grey areas representing open air:</p>
<p><img src="https://i.imgur.com/41dECqx.png" alt="grid layout of level1"></p>
<p>Below is the sequence of moves to solve this map, numbered and highlighted in blue.</p>
<p><img src="https://i.imgur.com/U48beYb.png" alt="sequence of moves for level1"></p>
<p>and another possible solution:</p>
<p><img src="https://i.imgur.com/BBZtM4w.png" alt="alternative sequence of moves for level1"></p>
<h2 id="technical-details">Technical Details</h2>
<ul>
<li>Input will always be valid and there will always be a solution.</li>
<li>The block always begins in an upright position.</li>
<li>The maximum grid size will be <code>15 x 20</code> (rows x colums)</li>
</ul>
<p>If you enjoyed this kata, be sure to check out <a href="https://www.codewars.com/users/docgunthrop/authored" target="_blank">my other katas</a>.</p>

### Solution