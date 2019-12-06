### Problem:
<h1 id="magic-recursion-call-depth-number">&apos;Magic&apos; recursion call depth number</h1>
<p>This Kata was designed as a Fork to the one from donaldsebleung Roboscript series with a reference to:</p>
<p><a href="https://www.codewars.com/collections/roboscript" target="_blank">https://www.codewars.com/collections/roboscript</a></p>
<p>It is not more than an extension of Roboscript infinite &quot;single-&quot; mutual recursion handling to a &quot;multiple-&quot; case.</p>
<p>One can suppose that you have a machine that works through a specific language. It uses the script, which consists of 3 major commands:</p>
<ul>
<li><p><code>F</code> - Move forward by 1 step in the direction that it is currently pointing.</p>
</li>
<li><p><code>L</code> - Turn &quot;left&quot; (i.e. rotate 90 degrees anticlockwise).</p>
</li>
<li><p><code>R</code> - Turn &quot;right&quot; (i.e. rotate 90 degrees clockwise).</p>
</li>
</ul>
<p>The number n afterwards enforces the command to execute n times.</p>
<p>To improve its efficiency machine language is enriched by patterns that are containers to pack and unpack the script.</p>
<p>The basic syntax for defining a pattern is as follows:</p>
<p><code>pn&lt;CODE_HERE&gt;q</code></p>
<p>Where:</p>
<ul>
<li><p><code>p</code> is a &quot;keyword&quot; that declares the beginning of a pattern definition </p>
</li>
<li><p><code>n</code> is a non-negative integer, which acts as a unique identifier for the pattern (pay attention, it may contain several digits).</p>
</li>
<li><p><code>&lt;CODE_HERE&gt;</code> is a valid RoboScript code (without the angled brackets)</p>
</li>
<li><p><code>q</code> is a &quot;keyword&quot; that marks the end of a pattern definition </p>
</li>
</ul>
<p>For example, if you want to define <code>F2LF2</code> as a pattern and reuse it later:</p>
<pre><code>p333F2LF2q</code></pre><p>To invoke a pattern, a capital <code>P</code> followed by the pattern identifier <code>(n)</code> is used:</p>
<pre><code>P333</code></pre><p>It doesn&apos;t matter whether the invocation of the pattern or the pattern definition comes first. Pattern definitions should always be parsed first.</p>
<pre><code>P333p333P11F2LF2qP333p11FR5Lq</code></pre><br>

<h1 id="infinite-recursion"><strong><em>Infinite recursion</em></strong></h1>
<p>As we don&apos;t want a robot to be damaged or damaging someone else by becoming uncontrolable when stuck in an infinite loop, it&apos;s good to considere this possibility in the programs and to build a compiler that can detect such potential troubles before they actually happen.</p>
<ul>
<li><h3 id="single-pattern-recursion-infinite-loop">Single pattern recursion infinite loop</h3>
</li>
</ul>
<p>This is the simplest case, that occurs when the pattern is invoked inside its definition:</p>
<pre><code>p333P333qP333 =&gt; depth = 1: P333 -&gt; (P333)</code></pre><ul>
<li><h3 id="single-mutual-recursion-infinite-loop">Single mutual recursion infinite loop</h3>
</li>
</ul>
<p>Occurs when a pattern calls to unpack the mutual one, which contains a callback to the first:</p>
<pre><code>p1P2qp2P1qP2  =&gt; depth = 2: P2 -&gt; P1 -&gt; (P2)</code></pre><ul>
<li><h3 id="multiple-mutual-recursion-infinite-loop">Multiple mutual recursion infinite loop</h3>
</li>
</ul>
<p>Occurs within the combo set of mutual callbacks without termination: </p>
<pre><code>p1P2qp2P3qp3P1qP3 =&gt; depth = 3: P3 -&gt; P1 -&gt; P2 -&gt; (P3)</code></pre><ul>
<li><h3 id="no-infinite-recursion-terminating-branch">No infinite recursion: terminating branch</h3>
</li>
</ul>
<p>This happens when the program can finish without encountering an infinite loop. Meaning the depth will be considered 0. Some examples below:</p>
<pre><code>P4p4FLRq      =&gt; depth = 0
p1P2qp2R5qP1  =&gt; depth = 0
p1P2qp2P1q    =&gt; depth = 0 (no call)</code></pre><br>

<h1 id="task">Task</h1>
<p>Your interpreter should be able to analyse infinite recursion profiles in the input program, including multi-mutual cases.</p>
<p>Though, rather than to analyse only the first encountered infinite loop and get stuck in it like the robot would be, your code will have continue deeper in the calls to find the depth of any infinite recursion or terminating call. Then it should return the minimal and the maximal depths encountered, as an array <code>[min, max]</code>.</p>
<h3 id="about-the-exploration-of-the-different-possible-branches-of-the-program">About the exploration of the different possible branches of the program:</h3>
<ul>
<li>Consider only patterns that are to be executed:</li>
</ul>
<pre><code>p1P1q                 =&gt; should return [0, 0], there is no execution
p1P2P3qp2P1qp3P1q     =&gt; similarly [0, 0]
p1P1qP1               =&gt; returns [1, 1]</code></pre><ul>
<li>All patterns need to be executed, strictly left to right. Meaning that you may encounter several branches:</li>
</ul>
<pre><code>p1P2P3qp2P1qp3P1qP3   =&gt; should return [2, 3]

P3 -&gt; P1 -&gt; P2 -&gt; (P1)    depth = 3 (max)
        \-&gt; (P3)          depth = 2 (min)</code></pre><br>

<h1 id="input">Input</h1>
<ul>
<li>A valid RoboScript program, as string.</li>
<li>Nested definitions of patterns, such as <code>p1...p2***q...q</code> will not be tested, even if that could be of interest as a Roboscript improvement.</li>
<li>All patterns will have a unique identifier.</li>
<li>Since the program is valid, you won&apos;t encounter calls to undefined pattern either.</li>
</ul>
<h1 id="output">Output</h1>
<ul>
<li>An array <code>[min, max]</code>, giving what are the minimal and the maximal recursion depths encountered.</li>
</ul>
<h3 id="examples">Examples</h3>
<pre><code>p1F2RF2LqP1         =&gt;  should return [0, 0], no infinite recursion detected

p1F2RP1F2LqP1       =&gt;  should return [1, 1], infinite recursion detection case

P2p1P2qp2P1q        =&gt;  should return [2, 2], single mutual infinite recursion case

p1P2qP3p2P3qp3P1q   =&gt;  should return [3, 3], twice mutual infinite recursion case

p1P2P1qp2P3qp3P1qP1 =&gt;  should return [1, 3], mixed infinite recursion case</code></pre>
### Solution