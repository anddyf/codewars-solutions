### Problem:
<!--Blobservation-->
<p>Blobs of various sizes are situated in a room. Each blob will move toward the nearest smaller blob until it reaches it and engulfs it. After consumption, the larger blob grows in size.</p>
<p>Your task is to create a class <code>Blobservation</code> (a portmanteau of blob and observation) and methods that give information about each blob after an arbitrary number of moves.</p>

<h2 style="color:#f88">Class Details</h2>
<p>A <code>Blobservation</code> class instance is instantiated with two integer values, <code>h</code> and <code>w</code>, that represent the dimensions of the room. The instance methods are as follows:</p>
<h3 style="color:#8df">populate</h3>
<p>The <code>populate</code> method is called with an array/list representing a list of blobs.</p>
<ul>
    <li>Each element is an object/dict (<code>Map&lt;String,Integer&gt;</code> in Java) with the following properties:<br>
    <ul>
        <li><code>x</code>: vertical position</li>
        <li><code>y</code>: horizontal position</li>
        <li><code>size</code>: size of the blob</li>
    </ul></li>
    <li>This method may be called multiple times on the same class instance</li>
    <li>If a new blob&apos;s position is already occupied by an existing blob, the two fuse into a single blob</li>
    <li>If the list input contains any invalid values, discard it entirely and throw an error (do not update/modify the instance)</li>
</ul>

<h3 style="color:#8df">move</h3>
<p>The <code>move</code> method may be called with up to one argument &#x2014; a positive integer representing the number of move iterations (ie. turns) to process. If no argument is given, the integer value defaults to <code>1</code>.</p>

<h3 style="color:#8df">print_state</h3>
<p>The <code>print_state</code> method is a nullary function that returns an array of the positions and sizes of each blob at the current state, sorted in ascending order by <code>x</code> position, then by <code>y</code>. If there are no blobs, return an empty array.</p>

<h2 style="color:#f88">Blob Movement Behavior</h2>
<p>With each turn, every blob whose <code>size</code> is larger than the smallest blob <code>size</code> value will move to one of the 8 spaces immediately surrounding it (<a href="https://en.wikipedia.org/wiki/Moore_neighborhood" style="color:#9f9;text-decoration:none" target="_blank">Moore neighborhood</a>) in the direction of the nearest target blob with a lower relative <code>size</code>.</p>
<ul>
    <li>If a target&apos;s coordinates differ on both axes, the predatory blob will move diagonally. Otherwise, it will move in the cardinal direction of its target</li>
    <li>If multiple targets are at the same movement distance, the blob with the largest <code>size</code> is focused</li>
    <li>If there are multiple targets that have both the largest <code>size</code> and shortest movement distance, priority is set in clockwise rotation, starting from the <code>12</code> position</li>
    <li>If two blobs pass each other (e.g. swap positions as a result of their movement), they will not fuse</li>
    <li>Blobs of the smallest size remain stationary</li>
</ul>

<h2 style="color:#f88">Additional Technical Details</h2>
<ul>
    <li>A blob&apos;s initial <code>size</code> will range between <code>1</code> and <code>20</code></li>
    <li>Multiple blobs occupying the same space will automatically fuse into one</li>
    <li>When a blob consumes another blob, or when two blobs fuse, the remaining blob&apos;s <code>size</code> becomes the sum of the two</li>
    <li>The 2nd argument for the class constructor is optional; if omitted, the room defaults to a square, where <code>w == h</code>.</li>
    <li>Room dimensions (<code>h</code> and <code>w</code>) will range between <code>8</code> and <code>50</code></li>
    <li>Class instances will always be instantiated with valid arguments</li>
    <li>Methods should throw an error if called with invalid arguments</li>
    <li>Boolean values are not to be regarded as valid integers</li>
    <li>Python translation: Use Python 3 only</li>
</ul>

<h2 style="color:#f88">Test Example</h2>
<img src="https://i.imgur.com/4Moyo7t.png">
<p>The image above shows the state at turn 0 (the initial state), turn 1, and turn 2.</p>
<ul>
    <li>At <code>T:0</code>, the orange blob at <code>[4,3]</code> with a size of <code>4</code> has four different targets of equal movement distance &#x2014; the blobs occupying the green, yellow, and red spaces. The adjacent matching-color spaces are the positions it would initially move to in pursuit of each respective target. Here it targets the size <code>3</code> blob at <code>[7,0]</code>.</li>
    <li>At <code>T:1</code>, the size <code>2</code> blob that was in the yellow space has consumed the size <code>1</code> blob at <code>[6,7]</code> and now has a size of <code>3</code></li>
    <li>At <code>T:2</code>, the size <code>3</code> blob in the green space has consumed the size <code>1</code> blob to become the size <code>4</code> blob at <code>[7,2]</code>. At this point, the two orange blobs will both target the green blob at <code>[4,2]</code> and all size <code>2</code> blobs will remain stationary</li>
</ul>
<p></p>

<pre><code class="language-javascript"><span class="hljs-keyword">const</span> generation0 = [
    {<span class="hljs-attr">x</span>:<span class="hljs-number">0</span>,<span class="hljs-attr">y</span>:<span class="hljs-number">4</span>,<span class="hljs-attr">size</span>:<span class="hljs-number">3</span>},
    {<span class="hljs-attr">x</span>:<span class="hljs-number">0</span>,<span class="hljs-attr">y</span>:<span class="hljs-number">7</span>,<span class="hljs-attr">size</span>:<span class="hljs-number">5</span>},
    {<span class="hljs-attr">x</span>:<span class="hljs-number">2</span>,<span class="hljs-attr">y</span>:<span class="hljs-number">0</span>,<span class="hljs-attr">size</span>:<span class="hljs-number">2</span>},
    {<span class="hljs-attr">x</span>:<span class="hljs-number">3</span>,<span class="hljs-attr">y</span>:<span class="hljs-number">7</span>,<span class="hljs-attr">size</span>:<span class="hljs-number">2</span>},
    {<span class="hljs-attr">x</span>:<span class="hljs-number">4</span>,<span class="hljs-attr">y</span>:<span class="hljs-number">3</span>,<span class="hljs-attr">size</span>:<span class="hljs-number">4</span>},
    {<span class="hljs-attr">x</span>:<span class="hljs-number">5</span>,<span class="hljs-attr">y</span>:<span class="hljs-number">6</span>,<span class="hljs-attr">size</span>:<span class="hljs-number">2</span>},
    {<span class="hljs-attr">x</span>:<span class="hljs-number">6</span>,<span class="hljs-attr">y</span>:<span class="hljs-number">7</span>,<span class="hljs-attr">size</span>:<span class="hljs-number">1</span>},
    {<span class="hljs-attr">x</span>:<span class="hljs-number">7</span>,<span class="hljs-attr">y</span>:<span class="hljs-number">0</span>,<span class="hljs-attr">size</span>:<span class="hljs-number">3</span>},
    {<span class="hljs-attr">x</span>:<span class="hljs-number">7</span>,<span class="hljs-attr">y</span>:<span class="hljs-number">2</span>,<span class="hljs-attr">size</span>:<span class="hljs-number">1</span>}
];
<span class="hljs-keyword">const</span> blobs = <span class="hljs-keyword">new</span> Blobservation(<span class="hljs-number">8</span>);
blobs.populate(generation0);
blobs.move();
blobs.print_state(); <span class="hljs-comment">//[[0,6,5],[1,5,3],[3,1,2],[4,7,2],[5,2,4],[6,7,3],[7,1,3],[7,2,1]]</span>
blobs.move();
blobs.print_state(); <span class="hljs-comment">//[[1,5,5],[2,6,3],[4,2,2],[5,6,2],[5,7,3],[6,1,4],[7,2,4]]</span>
blobs.move(<span class="hljs-number">1000</span>);
blobs.print_state(); <span class="hljs-comment">//[[4,3,23]]</span></code></pre>
<pre style="display: none;"><code class="language-python">generation0 = [
    {<span class="hljs-string">&apos;x&apos;</span>:<span class="hljs-number">0</span>,<span class="hljs-string">&apos;y&apos;</span>:<span class="hljs-number">4</span>,<span class="hljs-string">&apos;size&apos;</span>:<span class="hljs-number">3</span>},
    {<span class="hljs-string">&apos;x&apos;</span>:<span class="hljs-number">0</span>,<span class="hljs-string">&apos;y&apos;</span>:<span class="hljs-number">7</span>,<span class="hljs-string">&apos;size&apos;</span>:<span class="hljs-number">5</span>},
    {<span class="hljs-string">&apos;x&apos;</span>:<span class="hljs-number">2</span>,<span class="hljs-string">&apos;y&apos;</span>:<span class="hljs-number">0</span>,<span class="hljs-string">&apos;size&apos;</span>:<span class="hljs-number">2</span>},
    {<span class="hljs-string">&apos;x&apos;</span>:<span class="hljs-number">3</span>,<span class="hljs-string">&apos;y&apos;</span>:<span class="hljs-number">7</span>,<span class="hljs-string">&apos;size&apos;</span>:<span class="hljs-number">2</span>},
    {<span class="hljs-string">&apos;x&apos;</span>:<span class="hljs-number">4</span>,<span class="hljs-string">&apos;y&apos;</span>:<span class="hljs-number">3</span>,<span class="hljs-string">&apos;size&apos;</span>:<span class="hljs-number">4</span>},
    {<span class="hljs-string">&apos;x&apos;</span>:<span class="hljs-number">5</span>,<span class="hljs-string">&apos;y&apos;</span>:<span class="hljs-number">6</span>,<span class="hljs-string">&apos;size&apos;</span>:<span class="hljs-number">2</span>},
    {<span class="hljs-string">&apos;x&apos;</span>:<span class="hljs-number">6</span>,<span class="hljs-string">&apos;y&apos;</span>:<span class="hljs-number">7</span>,<span class="hljs-string">&apos;size&apos;</span>:<span class="hljs-number">1</span>},
    {<span class="hljs-string">&apos;x&apos;</span>:<span class="hljs-number">7</span>,<span class="hljs-string">&apos;y&apos;</span>:<span class="hljs-number">0</span>,<span class="hljs-string">&apos;size&apos;</span>:<span class="hljs-number">3</span>},
    {<span class="hljs-string">&apos;x&apos;</span>:<span class="hljs-number">7</span>,<span class="hljs-string">&apos;y&apos;</span>:<span class="hljs-number">2</span>,<span class="hljs-string">&apos;size&apos;</span>:<span class="hljs-number">1</span>}
]
blobs = new Blobservation(<span class="hljs-number">8</span>)
blobs.populate(generation0)
blobs.move()
blobs.print_state() <span class="hljs-comment">#[[0,6,5],[1,5,3],[3,1,2],[4,7,2],[5,2,4],[6,7,3],[7,1,3],[7,2,1]]</span>
blobs.move()
blobs.print_state() <span class="hljs-comment">#[[1,5,5],[2,6,3],[4,2,2],[5,6,2],[5,7,3],[6,1,4],[7,2,4]]</span>
blobs.move(<span class="hljs-number">1000</span>)
blobs.print_state() <span class="hljs-comment">#[[4,3,23]]</span></code></pre>
<pre style="display: none;"><code class="language-java">List&lt;Map&lt;String,Integer&gt;&gt; generation0 = Arrays.asList(
<span class="hljs-keyword">new</span> HashMap&lt;String,Integer&gt;() {{ put(<span class="hljs-string">&quot;x&quot;</span>, <span class="hljs-number">0</span>); put(<span class="hljs-string">&quot;y&quot;</span>, <span class="hljs-number">4</span>); put(<span class="hljs-string">&quot;size&quot;</span>, <span class="hljs-number">3</span>); }},
<span class="hljs-keyword">new</span> HashMap&lt;String,Integer&gt;() {{ put(<span class="hljs-string">&quot;x&quot;</span>, <span class="hljs-number">0</span>); put(<span class="hljs-string">&quot;y&quot;</span>, <span class="hljs-number">7</span>); put(<span class="hljs-string">&quot;size&quot;</span>, <span class="hljs-number">5</span>); }},
<span class="hljs-keyword">new</span> HashMap&lt;String,Integer&gt;() {{ put(<span class="hljs-string">&quot;x&quot;</span>, <span class="hljs-number">2</span>); put(<span class="hljs-string">&quot;y&quot;</span>, <span class="hljs-number">0</span>); put(<span class="hljs-string">&quot;size&quot;</span>, <span class="hljs-number">2</span>); }},
<span class="hljs-keyword">new</span> HashMap&lt;String,Integer&gt;() {{ put(<span class="hljs-string">&quot;x&quot;</span>, <span class="hljs-number">3</span>); put(<span class="hljs-string">&quot;y&quot;</span>, <span class="hljs-number">7</span>); put(<span class="hljs-string">&quot;size&quot;</span>, <span class="hljs-number">2</span>); }},
<span class="hljs-keyword">new</span> HashMap&lt;String,Integer&gt;() {{ put(<span class="hljs-string">&quot;x&quot;</span>, <span class="hljs-number">4</span>); put(<span class="hljs-string">&quot;y&quot;</span>, <span class="hljs-number">3</span>); put(<span class="hljs-string">&quot;size&quot;</span>, <span class="hljs-number">4</span>); }},
<span class="hljs-keyword">new</span> HashMap&lt;String,Integer&gt;() {{ put(<span class="hljs-string">&quot;x&quot;</span>, <span class="hljs-number">5</span>); put(<span class="hljs-string">&quot;y&quot;</span>, <span class="hljs-number">6</span>); put(<span class="hljs-string">&quot;size&quot;</span>, <span class="hljs-number">2</span>); }},
<span class="hljs-keyword">new</span> HashMap&lt;String,Integer&gt;() {{ put(<span class="hljs-string">&quot;x&quot;</span>, <span class="hljs-number">6</span>); put(<span class="hljs-string">&quot;y&quot;</span>, <span class="hljs-number">7</span>); put(<span class="hljs-string">&quot;size&quot;</span>, <span class="hljs-number">1</span>); }},
<span class="hljs-keyword">new</span> HashMap&lt;String,Integer&gt;() {{ put(<span class="hljs-string">&quot;x&quot;</span>, <span class="hljs-number">7</span>); put(<span class="hljs-string">&quot;y&quot;</span>, <span class="hljs-number">0</span>); put(<span class="hljs-string">&quot;size&quot;</span>, <span class="hljs-number">3</span>); }},
<span class="hljs-keyword">new</span> HashMap&lt;String,Integer&gt;() {{ put(<span class="hljs-string">&quot;x&quot;</span>, <span class="hljs-number">7</span>); put(<span class="hljs-string">&quot;y&quot;</span>, <span class="hljs-number">2</span>); put(<span class="hljs-string">&quot;size&quot;</span>, <span class="hljs-number">1</span>); }}
);

Blobservation blobs = <span class="hljs-keyword">new</span> Blobservation(<span class="hljs-number">8</span>);
blobs.populate(generation0);

blobs.move();
blobs.printState(); <span class="hljs-comment">// [[0,6,5],[1,5,3],[3,1,2],[4,7,2],[5,2,4],[6,7,3],[7,1,3],[7,2,1]]</span>
blobs.move();
blobs.printState(); <span class="hljs-comment">// [[1,5,5],[2,6,3],[4,2,2],[5,6,2],[5,7,3],[6,1,4],[7,2,4]]</span>
blobs.move(<span class="hljs-number">1000</span>);
blobs.printState(); <span class="hljs-comment">// [[4,3,23]]</span></code></pre>
<p>If you enjoyed this kata, be sure to check out <a href="https://www.codewars.com/users/docgunthrop/authored" style="color:#9f9;text-decoration:none" target="_blank">my other katas</a></p>
### Solution