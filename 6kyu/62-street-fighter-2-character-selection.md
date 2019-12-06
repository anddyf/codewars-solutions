### Problem:
<p>** Short Intro**</p>
<p>Some of you might remember spending afternoons playing Street Fighter 2 in some Arcade back in the 90s or emulating it nowadays with the numerous emulators for retro consoles.</p>
<p>Can you solve this kata? Suuure-You-Can!</p>
<p>UPDATE: a new kata&apos;s harder version is available <a href="https://www.codewars.com/kata/street-fighter-2-character-selection-part-2/python" target="_blank">here</a>.</p>
<p>** The Kata **</p>
<p>You&apos;ll have to simulate the video game&apos;s character selection screen behaviour, more specifically the selection grid.
Such screen looks like this:</p>
<p>![alt text][screen]
[screen]: <a href="https://images.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.fightersgeneration.com%2Fnp5%2Fgm%2Fsf2ce-s2.jpg&amp;f=1" target="_blank">https://images.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.fightersgeneration.com%2Fnp5%2Fgm%2Fsf2ce-s2.jpg&amp;f=1</a> &quot;Character Selection Screen for Street Fighter 2&quot;</p>
<p>Selection Grid Layout in text:</p>
<pre><code>| Ryu  | E.Honda | Blanka  | Guile   | Balrog | Vega    |
| Ken  | Chun Li | Zangief | Dhalsim | Sagat  | M.Bison |</code></pre><p>** Input **</p>
<ul>
<li>the list of game characters in a 2x6 grid;</li>
<li>the initial position of the selection cursor (top-left is <code>(0,0)</code>);</li>
<li>a list of moves of the selection cursor (which are <code>up</code>, <code>down</code>, <code>left</code>, <code>right</code>);</li>
</ul>
<p>** Output **</p>
<ul>
<li>the list of characters who have been hovered by the selection cursor after all the moves (ordered and with repetition, all the ones after a move, wether successful or not, see tests);</li>
</ul>
<p>** Rules **</p>
<p>Selection cursor is circular <em>horizontally</em> but <em>not vertically</em>!</p>
<p>As you might remember from the game, the selection cursor rotates horizontally but not vertically; that means that if I&apos;m in the leftmost and I try to go left again I&apos;ll get to the rightmost (examples: from Ryu to Vega, from Ken to M.Bison) and vice versa from rightmost to leftmost.</p>
<p>Instead, if I try to go further up from the upmost or further down from the downmost, I&apos;ll just stay where I am located (examples: you can&apos;t go lower than lowest row: Ken, Chun Li, Zangief, Dhalsim, Sagat and M.Bison in the above image; you can&apos;t go upper than highest row: Ryu, E.Honda, Blanka, Guile, Balrog and Vega in the above image).</p>
<p>** Test **</p>
<p>For this easy version the fighters grid layout and the initial position will always be the same in all tests, only the list of moves change.</p>
<p>** Notice **: changing some of the input data might not help you.</p>
<p>** Examples **</p>
<p>1.</p>
<pre><code>fighters = [
    [&quot;Ryu&quot;, &quot;E.Honda&quot;, &quot;Blanka&quot;, &quot;Guile&quot;, &quot;Balrog&quot;, &quot;Vega&quot;],
    [&quot;Ken&quot;, &quot;Chun Li&quot;, &quot;Zangief&quot;, &quot;Dhalsim&quot;, &quot;Sagat&quot;, &quot;M.Bison&quot;]
]
initial_position = (0,0)
moves = [&apos;up&apos;, &apos;left&apos;, &apos;right&apos;, &apos;left&apos;, &apos;left&apos;]</code></pre><p>then I should get:</p>
<pre><code>[&apos;Ryu&apos;, &apos;Vega&apos;, &apos;Ryu&apos;, &apos;Vega&apos;, &apos;Balrog&apos;]</code></pre><p>as the characters I&apos;ve been hovering with the selection cursor during my moves.
Notice: Ryu is the first just because it &quot;fails&quot; the first <code>up</code>
See test cases for more examples.</p>
<p>2.</p>
<pre><code>fighters = [
    [&quot;Ryu&quot;, &quot;E.Honda&quot;, &quot;Blanka&quot;, &quot;Guile&quot;, &quot;Balrog&quot;, &quot;Vega&quot;],
    [&quot;Ken&quot;, &quot;Chun Li&quot;, &quot;Zangief&quot;, &quot;Dhalsim&quot;, &quot;Sagat&quot;, &quot;M.Bison&quot;]
]
initial_position = (0,0)
moves = [&apos;right&apos;, &apos;down&apos;, &apos;left&apos;, &apos;left&apos;, &apos;left&apos;, &apos;left&apos;, &apos;right&apos;]</code></pre><p>Result:</p>
<pre><code>[&apos;E.Honda&apos;, &apos;Chun Li&apos;, &apos;Ken&apos;, &apos;M.Bison&apos;, &apos;Sagat&apos;, &apos;Dhalsim&apos;, &apos;Sagat&apos;]</code></pre><p>** OFF-TOPIC **</p>
<p>Some music to get in the mood for this kata :</p>
<p><a href="https://www.youtube.com/watch?v=GR3d9FMBkC8" target="_blank">Street Fighter 2 - selection theme</a></p>

### Solution