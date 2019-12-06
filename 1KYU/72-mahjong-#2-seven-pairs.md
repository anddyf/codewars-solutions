### Problem:
<h3 id="mahjong-series"><strong><a href="/collections/mahjong" target="_blank">Mahjong Series</a></strong></h3>
<p><strong>Mahjong</strong> is based on draw-and-discard card games that were popular in 18th and 19th century China and some are still popular today.</p>
<p>In each deck, there are three different suits numbered 1 to 9, which are called <strong>Simple tiles</strong>. They are <em>Circles</em> (denoted by <code>[1-9]p</code>), <em>Bamboo</em> (denoted by <code>[1-9]s</code>), and <em>Characters</em> (denoted by <code>[1-9]m</code>).</p>
<table style="width: 500px">
<tbody><tr>
<td>Circles:</td><td>

<p><img src="https://upload.wikimedia.org/wikipedia/commons/4/4a/MJt1.png" alt="1p"><img src="https://upload.wikimedia.org/wikipedia/commons/6/61/MJt2.png" alt="2p"><img src="https://upload.wikimedia.org/wikipedia/commons/a/a4/MJt3.png" alt="3p"><img src="https://upload.wikimedia.org/wikipedia/commons/7/72/MJt4.png" alt="4p"><img src="https://upload.wikimedia.org/wikipedia/commons/5/5c/MJt5.png" alt="5p"><img src="https://upload.wikimedia.org/wikipedia/commons/7/72/MJt6.png" alt="6p"><img src="https://upload.wikimedia.org/wikipedia/commons/6/6f/MJt7.png" alt="7p"><img src="https://upload.wikimedia.org/wikipedia/commons/1/18/MJt8.png" alt="8p"><img src="https://upload.wikimedia.org/wikipedia/commons/a/a1/MJt9.png" alt="9p"></p>
</td>
</tr>
<tr>
<td>Bamboo:</td><td>

<p><img src="https://upload.wikimedia.org/wikipedia/commons/3/37/MJs1.png" alt="1s"><img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/MJs2.png" alt="2s"><img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/MJs3.png" alt="3s"><img src="https://upload.wikimedia.org/wikipedia/commons/d/df/MJs4.png" alt="4s"><img src="https://upload.wikimedia.org/wikipedia/commons/b/bf/MJs5.png" alt="5s"><img src="https://upload.wikimedia.org/wikipedia/commons/c/cb/MJs6.png" alt="6s"><img src="https://upload.wikimedia.org/wikipedia/commons/e/ea/MJs7.png" alt="7s"><img src="https://upload.wikimedia.org/wikipedia/commons/9/99/MJs8.png" alt="8s"><img src="https://upload.wikimedia.org/wikipedia/commons/8/80/MJs9.png" alt="9s"></p>
</td>
</tr>
<tr>
<td>Characters: </td><td>

<p><img src="https://upload.wikimedia.org/wikipedia/commons/1/1c/MJw1.png" alt="1m"><img src="https://upload.wikimedia.org/wikipedia/commons/c/c3/MJw2.png" alt="2m"><img src="https://upload.wikimedia.org/wikipedia/commons/9/9e/MJw3.png" alt="3m"><img src="https://upload.wikimedia.org/wikipedia/commons/e/e8/MJw4.png" alt="4m"><img src="https://upload.wikimedia.org/wikipedia/commons/e/ed/MJw5.png" alt="5m"><img src="https://upload.wikimedia.org/wikipedia/commons/5/58/MJw6.png" alt="6m"><img src="https://upload.wikimedia.org/wikipedia/commons/8/8b/MJw7.png" alt="7m"><img src="https://upload.wikimedia.org/wikipedia/commons/e/e1/MJw8.png" alt="8m"><img src="https://upload.wikimedia.org/wikipedia/commons/f/f3/MJw9.png" alt="9m"></p>
</td>
</tr></tbody></table>

<p>Moreover, there is another suit named <strong>Honor tiles</strong>. It includes <em>Wind tiles</em> (namely East, South, West, North, denoted by <code>[1-4]z</code>) and <em>Dragon tiles</em> (namely Red, Green, White, denoted by <code>[5-7]z</code>).</p>
<table style="width: 400px">
<tbody><tr><td>East Wind</td><td>South Wind</td><td>West Wind</td><td>North Wind</td><td>Red Dragon</td><td>Green Dragon</td><td>White Dragon</td></tr>
<tr><td>

<p><img src="https://upload.wikimedia.org/wikipedia/commons/7/74/MJf1.png" alt="1z"></p>
</td><td>

<p><img src="https://upload.wikimedia.org/wikipedia/commons/0/08/MJf2.png" alt="2z"></p>
</td><td>

<p><img src="https://upload.wikimedia.org/wikipedia/commons/d/dc/MJf3.png" alt="3z"></p>
</td><td>

<p><img src="https://upload.wikimedia.org/wikipedia/commons/9/96/MJf4.png" alt="4z"></p>
</td><td>

<p><img src="https://upload.wikimedia.org/wikipedia/commons/1/1b/MJd1.png" alt="5z"></p>
</td><td>

<p><img src="https://upload.wikimedia.org/wikipedia/commons/c/c4/MJd2.png" alt="6z"></p>
</td><td>

<p><img src="https://upload.wikimedia.org/wikipedia/commons/5/5a/MJd3.png" alt="7z"></p>
</td></tr>
</tbody></table>

<p>Note that there are <strong>EXACTLY</strong> 4 identical copies of each kind of tiles in a deck.</p>
<p>In each of Mahjong games, each of the 4 players around the table has 13 tiles. They take turns drawing a tile from the tile walls and then discarding one of the tiles from their hands. One wins the game if that player holds a defined combination of tiles.</p>
<p>A regular winning hand consists of 4 <em>Melds</em> and 1 <em>Pair</em>. Each <em>meld</em> of tiles can be 3 identical copies of a tile (<em>e.g.</em> <code>1p 1p 1p</code>, <code>2d 2d 2d</code>) or 3 consecutive tiles of a <strong>Simple</strong> suit (<em>e.g.</em> <code>6m 7m 8m</code> or <code>4s 5s 6s</code>).</p>
<table style="width: 300px">
<tbody><tr>
<td>

<p><img src="https://upload.wikimedia.org/wikipedia/commons/4/4a/MJt1.png" alt="1p"><img src="https://upload.wikimedia.org/wikipedia/commons/4/4a/MJt1.png" alt="1p"><img src="https://upload.wikimedia.org/wikipedia/commons/4/4a/MJt1.png" alt="1p"></p>
</td>
<td>

<p><img src="https://upload.wikimedia.org/wikipedia/commons/c/c4/MJd2.png" alt="2d"><img src="https://upload.wikimedia.org/wikipedia/commons/c/c4/MJd2.png" alt="2d"><img src="https://upload.wikimedia.org/wikipedia/commons/c/c4/MJd2.png" alt="2d"></p>
</td>
</tr>
<tr>
<td>

<p><img src="https://upload.wikimedia.org/wikipedia/commons/5/58/MJw6.png" alt="6m"><img src="https://upload.wikimedia.org/wikipedia/commons/8/8b/MJw7.png" alt="7m"><img src="https://upload.wikimedia.org/wikipedia/commons/e/e1/MJw8.png" alt="8m"></p>
</td>
<td>

<p><img src="https://upload.wikimedia.org/wikipedia/commons/d/df/MJs4.png" alt="4s"><img src="https://upload.wikimedia.org/wikipedia/commons/b/bf/MJs5.png" alt="5s"><img src="https://upload.wikimedia.org/wikipedia/commons/c/cb/MJs6.png" alt="6s"></p>
</td>
</tr>
</tbody></table>

<p>Here is an example of regular winning hands.</p>
<table style="width: 700px">
<tbody><tr><td>

<p><img src="https://upload.wikimedia.org/wikipedia/commons/a/a4/MJt3.png" alt="3p"><img src="https://upload.wikimedia.org/wikipedia/commons/7/72/MJt4.png" alt="4p"><img src="https://upload.wikimedia.org/wikipedia/commons/7/72/MJt4.png" alt="4p"><img src="https://upload.wikimedia.org/wikipedia/commons/5/5c/MJt5.png" alt="5p"><img src="https://upload.wikimedia.org/wikipedia/commons/5/5c/MJt5.png" alt="5p"><img src="https://upload.wikimedia.org/wikipedia/commons/7/72/MJt6.png" alt="6p"><img src="https://upload.wikimedia.org/wikipedia/commons/6/6f/MJt7.png" alt="7p"><img src="https://upload.wikimedia.org/wikipedia/commons/6/6f/MJt7.png" alt="7p"><img src="https://upload.wikimedia.org/wikipedia/commons/6/6f/MJt7.png" alt="7p"><img src="https://upload.wikimedia.org/wikipedia/commons/a/a1/MJt9.png" alt="9p"><img src="https://upload.wikimedia.org/wikipedia/commons/a/a1/MJt9.png" alt="9p"><img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/MJs2.png" alt="2s"><img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/MJs3.png" alt="3s"><img src="https://upload.wikimedia.org/wikipedia/commons/d/df/MJs4.png" alt="4s"></p>
</td></tr></tbody></table>

<p>There are some special combinations of tiles that also win you the game. One of them is called <strong>Seven-pairs</strong>. As the name suggests, it consists of 7 pairs, each consisting of 2 tiles with identical patterns. One of winning hands with <em>Seven-pairs</em> is like the one shown below. For the current task, we&apos;ll use MCR rules, so two pairs formed with the same 4 tiles are allowed (meaning: <code>4 * 2s == 2 pairs</code> for example).</p>
<table style="width: 700px">
<tbody><tr><td>

<p><img src="https://upload.wikimedia.org/wikipedia/commons/6/61/MJt2.png" alt="2p"><img src="https://upload.wikimedia.org/wikipedia/commons/6/61/MJt2.png" alt="2p"><img src="https://upload.wikimedia.org/wikipedia/commons/6/6f/MJt7.png" alt="7p"><img src="https://upload.wikimedia.org/wikipedia/commons/6/6f/MJt7.png" alt="7p"><img src="https://upload.wikimedia.org/wikipedia/commons/3/37/MJs1.png" alt="1s"><img src="https://upload.wikimedia.org/wikipedia/commons/3/37/MJs1.png" alt="1s"><img src="https://upload.wikimedia.org/wikipedia/commons/e/e8/MJw4.png" alt="4m"><img src="https://upload.wikimedia.org/wikipedia/commons/e/e8/MJw4.png" alt="4m"><img src="https://upload.wikimedia.org/wikipedia/commons/8/8b/MJw7.png" alt="7m"><img src="https://upload.wikimedia.org/wikipedia/commons/8/8b/MJw7.png" alt="7m"><img src="https://upload.wikimedia.org/wikipedia/commons/0/08/MJf2.png" alt="2w"><img src="https://upload.wikimedia.org/wikipedia/commons/0/08/MJf2.png" alt="2w"><img src="https://upload.wikimedia.org/wikipedia/commons/5/5a/MJd3.png" alt="3d"><img src="https://upload.wikimedia.org/wikipedia/commons/5/5a/MJd3.png" alt="3d"></p>
</td></tr></tbody></table>

<h3 id="task"><strong>Task</strong></h3>
<p>Work out all tiles that can make up a winning hand with the given 13 tiles. Remember that a winning hand may be regular or in a form of <strong>Seven-pairs</strong>.</p>
<ul>
<li><strong>Input</strong><ul>
<li>A string denoting 13 tiles to be computed, in the order of <em>Circles</em> (<code>[1-9]p</code>), <em>Bamboo</em> (<code>[1-9]s</code>), <em>Characters</em> (<code>[1-9]m</code>), and <em>Honors</em> (<code>[1-7]z</code>). The tiles are space-separated.</li>
</ul>
</li>
</ul>
<ul>
<li><strong>Output</strong><ul>
<li>A string consisting of the tiles that can form a winning hand with given ones, in the order of <em>Circles</em> (<code>[1-9]p</code>), <em>Bamboo</em> (<code>[1-9]s</code>), <em>Characters</em> (<code>[1-9]m</code>), and <em>Honors</em> (<code>[1-7]z</code>).</li>
</ul>
</li>
</ul>
<h3 id="example"><strong>Example</strong></h3>
<pre><code>&quot;2p 2p 3p 3p 4p 4p 5p 5p 7m 7m 8m 8m 8m&quot; =&gt; &quot;2p 5p 7m 8m&quot;
  (2p =&gt; (2p 2p 2p) (3p 4p 5p) (3p 4p 5p) (7m 7m) (8m 8m 8m),
   5p =&gt; (2p 3p 4p) (2p 3p 4p) (5p 5p 5p) (7m 7m) (8m 8m 8m),
   7m =&gt; (2p 2p) (3p 4p 5p) (3p 4p 5p) (7m 7m 7m) (8m 8m 8m),
   8m =&gt; (2p 2p) (3p 3p) (4p 4p) (5p 5p) (7m 7m) (8m 8m) (8m 8m) )</code></pre>
### Solution