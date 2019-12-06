### Problem:
<p>Triangular numbers are so called because of the equilateral triangular shape that they occupy when laid out as dots. i.e.</p>
<pre><code>1st (1)   2nd (3)    3rd (6)
*          **        ***
           *         **
                     *</code></pre><p>You need to return the nth triangular number. You should return 0 for out of range values:</p>
<pre style="display: none;"><code class="language-haskell"><span class="hljs-title">all</span> [
  triangular <span class="hljs-number">0</span>     == <span class="hljs-number">0</span>,
  triangular <span class="hljs-number">2</span>     == <span class="hljs-number">3</span>,
  triangular <span class="hljs-number">3</span>     == <span class="hljs-number">6</span>,
  triangular (<span class="hljs-number">-10</span>) == <span class="hljs-number">0</span>
] <span class="hljs-comment">-- True</span></code></pre>
<pre style="display: none;"><code class="language-javascript">  triangular(<span class="hljs-number">0</span>)==<span class="hljs-number">0</span>,
  triangular(<span class="hljs-number">2</span>)==<span class="hljs-number">3</span>,
  triangular(<span class="hljs-number">3</span>)==<span class="hljs-number">6</span>,
  triangular(<span class="hljs-number">-10</span>)==<span class="hljs-number">0</span></code></pre>
<pre><code class="language-ruby">  triangular(<span class="hljs-number">0</span>)==<span class="hljs-number">0</span>,
  triangular(<span class="hljs-number">2</span>)==<span class="hljs-number">3</span>,
  triangular(<span class="hljs-number">3</span>)==<span class="hljs-number">6</span>,
  triangular(-<span class="hljs-number">10</span>)==<span class="hljs-number">0</span></code></pre>
<pre style="display: none;"><code class="language-python">  triangular(<span class="hljs-number">0</span>)==<span class="hljs-number">0</span>,
  triangular(<span class="hljs-number">2</span>)==<span class="hljs-number">3</span>,
  triangular(<span class="hljs-number">3</span>)==<span class="hljs-number">6</span>,
  triangular(<span class="hljs-number">-10</span>)==<span class="hljs-number">0</span></code></pre>
<pre style="display: none;"><code class="language-dart">  triangular(<span class="hljs-number">0</span>)==<span class="hljs-number">0</span>,
  triangular(<span class="hljs-number">2</span>)==<span class="hljs-number">3</span>,
  triangular(<span class="hljs-number">3</span>)==<span class="hljs-number">6</span>,
  triangular(<span class="hljs-number">-10</span>)==<span class="hljs-number">0</span></code></pre>
<pre style="display: none;"><code class="language-swift">  triangular(<span class="hljs-number">0</span>)==<span class="hljs-number">0</span>
  triangular(<span class="hljs-number">2</span>)==<span class="hljs-number">3</span>
  triangular(<span class="hljs-number">3</span>)==<span class="hljs-number">6</span>
  triangular(-<span class="hljs-number">10</span>)==<span class="hljs-number">0</span></code></pre>
<pre style="display: none;"><code class="language-c">  triangular(<span class="hljs-number">0</span>);   <span class="hljs-comment">// returns 0</span>
  triangular(<span class="hljs-number">2</span>);   <span class="hljs-comment">// returns 3</span>
  triangular(<span class="hljs-number">3</span>);   <span class="hljs-comment">// returns 6</span>
  triangular(<span class="hljs-number">-10</span>); <span class="hljs-comment">// returns 0</span></code></pre>

### Solution