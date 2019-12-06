### Problem:
<img src="https://static1.squarespace.com/static/56a1a14b05caa7ee9f26f47d/t/5719c5d91d07c0bcdda31d01/1464935309584/ant_bridge_TS.jpg">

<h1 id="background">Background</h1>
<p>My pet bridge-maker ants are marching across a terrain from left to right.</p>
<p>If they encounter a gap, the first one stops and then next one climbs over him, then the next, and the next, until a bridge is formed across the gap. </p>
<p>What clever little things they are!</p>
<p>Now all the other ants can walk over the ant-bridge.</p>
<p>When the last ant is across, the ant-bridge dismantles itself similar to how it was constructed.</p>
<p>This process repeats as many times as necessary (there may be more than one gap to cross) until all the ants reach the right hand side.</p>
<h1 id="kata-task">Kata Task</h1>
<p>My little ants are marching across the terrain from left-to-right in the order <code>A</code> then <code>B</code> then <code>C</code>...</p>
<p>What order do they exit on the right hand side?</p>
<h1 id="notes">Notes</h1>
<ul>
<li><code>-</code> = solid ground</li>
<li><code>.</code> = a gap</li>
<li>The number of ants may differ but there are always enough ants to bridge the gaps</li>
<li>The terrain never starts or ends with a gap</li>
<li>Ants cannot pass other ants except by going over ant-bridges</li>
<li>If there is ever ambiguity which ant should move, then the ant at the <strong>back</strong> moves first</li>
</ul>
<h1 id="example">Example</h1>
<h2 id="input">Input</h2>
<ul>
<li>ants = <code>GFEDCBA</code></li>
<li>terrain = <code>------------...-----------</code></li>
</ul>
<h2 id="output">Output</h2>
<ul>
<li>result = <code>EDCBAGF</code></li>
</ul>
<h2 id="details">Details</h2>
<table>
<tbody><tr><td>Ants moving left to right.</td><td><pre>GFEDCBA
------------...-----------
</pre>
</td></tr><tr><td>The first one arrives at a gap.</td><td><pre>GFEDCB     A
------------...-----------
</pre>
</td></tr><tr><td>They start to bridge over the gap...</td><td><pre>GFED       ABC
------------...-----------
</pre>
</td></tr><tr><td>...until the ant-bridge is completed!</td><td><pre>GF         ABCDE
------------...-----------
</pre>
</td></tr><tr><td>And then the remaining ants can walk across the bridge.</td><td><pre>               F
G          ABCDE
------------...-----------
</pre>
</td></tr><tr><td>And when no more ants need to cross...</td><td><pre><pre><code>       ABCDE        GF</code></pre><p>------------...-----------
</p></pre><p></p>
</td></tr><tr><td>... the bridge dismantles itself one ant at a time....</td><td><pre><pre><code>         CDE      BAGF</code></pre><p>------------...-----------
</p></pre><p></p>
</td></tr><tr><td>...until all ants get to the other side</td><td><pre><pre><code>               EDCBAGF</code></pre><p>------------...-----------
</p></pre><p></p>
</td></tr><tr><td></td><td>
</td></tr></tbody></table>


### Solution