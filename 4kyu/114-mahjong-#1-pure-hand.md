### Problem:
<h3 id="mahjong-series"><strong><a href="/collections/mahjong" target="_blank">Mahjong Series</a></strong></h3>
<p><strong>Mahjong</strong> is based on draw-and-discard card games that were popular in 18th and 19th century China and some are still popular today.</p>
<p>In each deck, there are three different suits numbered <code>1</code> to <code>9</code>, which are called <strong>Simple tiles</strong>. To simplify the problem, we talk about only one suit of <em>simple tiles</em> in this kata (and that&apos;s what the term <strong>Pure Hand</strong> means). Note that there are <strong>EXACTLY</strong> 4 identical copies of each kind of tiles in a deck.</p>
<p>In each of Mahjong games, each of the 4 players around the table has 13 tiles. They take turns drawing a tile from the tile walls and then discarding one of the tiles from their hands. One wins the game if that player holds a combination of tiles as defined below:</p>
<p>A regular winning hand consists of 4 <em>Melds</em> and 1 <em>Pair</em>. Each <em>meld</em> of tiles can be 3 identical or consecutive tiles of a suit, <em>e.g.</em> <code>222</code> or <code>456</code>.</p>
<table style="width: 400px"><tbody><tr><td>

<p><img src="https://upload.wikimedia.org/wikipedia/commons/6/61/MJt2.png" alt="t2">
<img src="https://upload.wikimedia.org/wikipedia/commons/6/61/MJt2.png" alt="t2">
<img src="https://upload.wikimedia.org/wikipedia/commons/6/61/MJt2.png" alt="t2"></p>
</td><td>

<p><img src="https://upload.wikimedia.org/wikipedia/commons/7/72/MJt4.png" alt="t4">
<img src="https://upload.wikimedia.org/wikipedia/commons/5/5c/MJt5.png" alt="t5">
<img src="https://upload.wikimedia.org/wikipedia/commons/7/72/MJt6.png" alt="t6"></p>
</td></tr></tbody></table>

<p>Now let&apos;s consider a hand of <code>1113335557779</code>.</p>
<table style="width: 700px"><tbody><tr><td>

<p><img src="https://upload.wikimedia.org/wikipedia/commons/4/4a/MJt1.png" alt="t1"><img src="https://upload.wikimedia.org/wikipedia/commons/4/4a/MJt1.png" alt="t1"><img src="https://upload.wikimedia.org/wikipedia/commons/4/4a/MJt1.png" alt="t1"><img src="https://upload.wikimedia.org/wikipedia/commons/a/a4/MJt3.png" alt="t3"><img src="https://upload.wikimedia.org/wikipedia/commons/a/a4/MJt3.png" alt="t3"><img src="https://upload.wikimedia.org/wikipedia/commons/a/a4/MJt3.png" alt="t3"><img src="https://upload.wikimedia.org/wikipedia/commons/5/5c/MJt5.png" alt="t5"><img src="https://upload.wikimedia.org/wikipedia/commons/5/5c/MJt5.png" alt="t5"><img src="https://upload.wikimedia.org/wikipedia/commons/5/5c/MJt5.png" alt="t5"><img src="https://upload.wikimedia.org/wikipedia/commons/6/6f/MJt7.png" alt="t7"><img src="https://upload.wikimedia.org/wikipedia/commons/6/6f/MJt7.png" alt="t7"><img src="https://upload.wikimedia.org/wikipedia/commons/6/6f/MJt7.png" alt="t7"><img src="https://upload.wikimedia.org/wikipedia/commons/a/a1/MJt9.png" alt="t9"></p>
</td></tr></tbody></table>

<p>In this hand, there are already 4 <em>melds</em> (each of 3 identical tiles), leaving a <code>9</code> alone. So we need another <code>9</code> to form a <em>pair</em>.</p>
<table style="width: 700px">
<tbody><tr><td>

<p><img src="https://upload.wikimedia.org/wikipedia/commons/4/4a/MJt1.png" alt="t1"><img src="https://upload.wikimedia.org/wikipedia/commons/4/4a/MJt1.png" alt="t1"><img src="https://upload.wikimedia.org/wikipedia/commons/4/4a/MJt1.png" alt="t1"></p>
</td><td>

<p><img src="https://upload.wikimedia.org/wikipedia/commons/a/a4/MJt3.png" alt="t3"><img src="https://upload.wikimedia.org/wikipedia/commons/a/a4/MJt3.png" alt="t3"><img src="https://upload.wikimedia.org/wikipedia/commons/a/a4/MJt3.png" alt="t3"></p>
</td><td>

<p><img src="https://upload.wikimedia.org/wikipedia/commons/5/5c/MJt5.png" alt="t5"><img src="https://upload.wikimedia.org/wikipedia/commons/5/5c/MJt5.png" alt="t5"><img src="https://upload.wikimedia.org/wikipedia/commons/5/5c/MJt5.png" alt="t5"></p>
</td><td>

<p><img src="https://upload.wikimedia.org/wikipedia/commons/6/6f/MJt7.png" alt="t7"><img src="https://upload.wikimedia.org/wikipedia/commons/6/6f/MJt7.png" alt="t7"><img src="https://upload.wikimedia.org/wikipedia/commons/6/6f/MJt7.png" alt="t7"></p>
</td><td>

<p><img src="https://upload.wikimedia.org/wikipedia/commons/a/a1/MJt9.png" alt="t9"><img src="https://upload.wikimedia.org/wikipedia/commons/a/a1/MJt9.png" alt="t9"></p>
</td></tr></tbody></table>

<p>Additionally, there is another option. Regardless of the 3 <em>melds</em> ahead (<code>111</code>, <code>333</code>, <code>555</code>), drawing an <code>8</code> produces <code>77789</code>, which gives a <em>pair</em> of <code>7</code>&apos;s and a <em>meld</em> (<code>789</code>). Therefore, the required tiles to win with <code>1113335557779</code> are <code>8</code> and <code>9</code>.</p>
<table style="width: 700px">
<tbody><tr><td>

<p><img src="https://upload.wikimedia.org/wikipedia/commons/4/4a/MJt1.png" alt="t1"><img src="https://upload.wikimedia.org/wikipedia/commons/4/4a/MJt1.png" alt="t1"><img src="https://upload.wikimedia.org/wikipedia/commons/4/4a/MJt1.png" alt="t1"></p>
</td><td>

<p><img src="https://upload.wikimedia.org/wikipedia/commons/a/a4/MJt3.png" alt="t3"><img src="https://upload.wikimedia.org/wikipedia/commons/a/a4/MJt3.png" alt="t3"><img src="https://upload.wikimedia.org/wikipedia/commons/a/a4/MJt3.png" alt="t3"></p>
</td><td>

<p><img src="https://upload.wikimedia.org/wikipedia/commons/5/5c/MJt5.png" alt="t5"><img src="https://upload.wikimedia.org/wikipedia/commons/5/5c/MJt5.png" alt="t5"><img src="https://upload.wikimedia.org/wikipedia/commons/5/5c/MJt5.png" alt="t5"></p>
</td><td>

<p><img src="https://upload.wikimedia.org/wikipedia/commons/6/6f/MJt7.png" alt="t7"><img src="https://upload.wikimedia.org/wikipedia/commons/6/6f/MJt7.png" alt="t7"></p>
</td><td>

<p><img src="https://upload.wikimedia.org/wikipedia/commons/6/6f/MJt7.png" alt="t7"><img src="https://upload.wikimedia.org/wikipedia/commons/1/18/MJt8.png" alt="t8"><img src="https://upload.wikimedia.org/wikipedia/commons/a/a1/MJt9.png" alt="t9"></p>
</td></tr></tbody></table>

<p>Now Sakura wonders which tiles will form a hand with 13 tiles of the same suit (<strong>Pure Hand</strong>). Can you help her?</p>
<h3 id="task"><strong>Task</strong></h3>
<p>Complete a function to work out all the optional tiles to form a regular winning hand with the given tiles.</p>
<ul>
<li><strong>Input</strong><ul>
<li>A string of 13 non-zero digits in non-decreasing order, denoting different tiles of a suit.</li>
</ul>
</li>
</ul>
<ul>
<li><strong>Output</strong><ul>
<li>A string of unique non-zero digits in ascending order.</li>
</ul>
</li>
</ul>
<h3 id="examples"><strong>Examples</strong></h3>
<pre><code>&quot;1335556789999&quot; =&gt; &quot;&quot;
  (None of the tiles in a deck makes up a winning hand)
&quot;1113335557779&quot; =&gt; &quot;89&quot;
  (&quot;8&quot; =&gt; &quot;111 333 555 77 789&quot;,
   &quot;9&quot; =&gt; &quot;111 333 555 777 99&quot;)
&quot;1223334455678&quot; =&gt; &quot;258&quot;
  (&quot;2&quot; =&gt; &quot;123 22 345 345 678&quot;,
   &quot;5&quot; =&gt; &quot;123 234 345 55 678&quot;,
   &quot;8&quot; =&gt; &quot;123 234 345 678 88&quot;)</code></pre>
### Solution