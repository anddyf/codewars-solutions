### Problem:
<h1 id="disclaimer">Disclaimer</h1>
<p>This Kata is an insane step-up from <a href="https://www.codewars.com/kata/599266b417bc9785f2000001" target="_blank">my previous Kata</a>,
so I recommend to solve it first before trying this one.</p>
<h1 id="problem-description">Problem Description</h1>
<p>You have a row of <code>n</code> square tiles, which are colored black and the side length is 1.
You also have infinite supplies of three kinds of rectangular tiles:</p>
<ul>
<li>Red tiles of Length <code>r</code></li>
<li>Green tiles of Length <code>g</code></li>
<li>Blue tiles of Length <code>b</code></li>
</ul>
<p>All tiles have integer lengths and share the same height of 1.</p>
<p>Now, you want to replace some black square tiles with your colored tiles.
However, you are quite picky, and you want to use <em>exactly two types of colored tiles</em> (RGB).
You can leave black gaps as much as you want.</p>
<p>In how many ways can you replace black tiles with your colored tiles?
Since your answer will be very large, please give your answer <strong>modulo 12345787</strong>.</p>
<h1 id="example">Example</h1>
<p>For <code>n = 6</code> and <code>(r, g, b) = (2, 3, 4)</code>, these are the eight possible arrangements
using exactly two colors
(R, G, B denote red, green, blue tiles respectively, and a dot is a black tile):</p>
<pre><code>RRGGG.

RR.GGG

.RRGGG

GGGRR.

GGG.RR

.GGGRR

RRBBBB

BBBBRR</code></pre><h1 id="constraints">Constraints</h1>
<p><code>5 &lt;= n &lt;= 10 ** 9</code></p>
<p><strong>Note the size of n!</strong>
Most solutions that solve the easier one will timeout with large inputs.</p>
<p><code>2 &lt;= r, g, b &lt;= 5</code></p>
<p>Some of the values of <code>r</code>, <code>g</code>, or <code>b</code> may be the same.</p>
<p>The inputs will be always valid integers.</p>
<h1 id="more-examples">More Examples</h1>
<pre><code class="language-python"><span class="hljs-comment"># One Red (length 2) and one Green (length 3): two arrangements</span>
insane_tri_bicolor_tiling(<span class="hljs-number">5</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>, <span class="hljs-number">4</span>) == <span class="hljs-number">2</span>

<span class="hljs-comment"># One Red (length 2) and one Green (length 3): 6 arrangements</span>
<span class="hljs-comment"># One Red (length 2) and one Blue (length 4): 2 arrangements</span>
insane_tri_bicolor_tiling(<span class="hljs-number">6</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>, <span class="hljs-number">4</span>) == <span class="hljs-number">8</span>

insane_tri_bicolor_tiling(<span class="hljs-number">10</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>, <span class="hljs-number">4</span>) == <span class="hljs-number">248</span>

<span class="hljs-comment"># For these cases, think about tiling with dominos first</span>
<span class="hljs-comment"># and then coloring them with two colors.</span>
insane_tri_bicolor_tiling(<span class="hljs-number">5</span>, <span class="hljs-number">2</span>, <span class="hljs-number">2</span>, <span class="hljs-number">2</span>) == <span class="hljs-number">18</span>
insane_tri_bicolor_tiling(<span class="hljs-number">6</span>, <span class="hljs-number">2</span>, <span class="hljs-number">2</span>, <span class="hljs-number">2</span>) == <span class="hljs-number">54</span></code></pre>
<pre style="display: none;"><code class="language-javascript"><span class="hljs-comment">// One Red (length 2) and one Green (length 3): two arrangements</span>
insaneTriBicolorTiling(<span class="hljs-number">5</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>, <span class="hljs-number">4</span>) == <span class="hljs-number">2</span>

<span class="hljs-comment">// One Red (length 2) and one Green (length 3): 6 arrangements</span>
<span class="hljs-comment">// One Red (length 2) and one Blue (length 4): 2 arrangements</span>
insaneTriBicolorTiling(<span class="hljs-number">6</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>, <span class="hljs-number">4</span>) == <span class="hljs-number">8</span>

insaneTriBicolorTiling(<span class="hljs-number">10</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>, <span class="hljs-number">4</span>) == <span class="hljs-number">248</span>

<span class="hljs-comment">// For these cases, think about tiling with dominos first</span>
<span class="hljs-comment">// and then coloring them with two colors.</span>
insaneTriBicolorTiling(<span class="hljs-number">5</span>, <span class="hljs-number">2</span>, <span class="hljs-number">2</span>, <span class="hljs-number">2</span>) == <span class="hljs-number">18</span>
insaneTriBicolorTiling(<span class="hljs-number">6</span>, <span class="hljs-number">2</span>, <span class="hljs-number">2</span>, <span class="hljs-number">2</span>) == <span class="hljs-number">54</span></code></pre>
<h1 id="acknowledgement">Acknowledgement</h1>
<p>This problem was inspired by <a href="https://projecteuler.net/problem=116" target="_blank">Project Euler #116: Red, Green, or Blue Tiles</a> and <a href="https://projecteuler.net/problem=117" target="_blank">Project Euler #117: Red, Green, and Blue Tiles</a>.</p>
<p>If you enjoyed this Kata, please also have a look at <a href="https://www.codewars.com/users/Bubbler/authored" target="_blank">my other Katas</a>!</p>

### Solution