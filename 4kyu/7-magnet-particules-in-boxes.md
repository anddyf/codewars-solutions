### Problem:
<p>Professor Chambouliard hast just discovered a new type of magnet material. He put particles of this material in a box made of small boxes arranged 
in K rows and N columns as a kind of <strong>2D matrix</strong> <code>K x N</code> where <code>K</code> and <code>N</code> are postive integers.
He thinks that his calculations show that the force exerted by the particle in the small box <code>(k, n)</code> is:</p>
<p><a href="http://www.codecogs.com/eqnedit.php?latex=\bg_green&amp;space;v(k,&amp;space;n)&amp;space;=&amp;space;\frac{1}{k(n+1)^{2k}}" target="_blank"><img src="http://latex.codecogs.com/gif.latex?\bg_green&amp;space;v(k,&amp;space;n)&amp;space;=&amp;space;\frac{1}{k(n+1)^{2k}}" title="v(k, n) = \frac{1}{k(n+1)^{2k}}"></a></p>
<p>The total force exerted by the first row with k = 1 is:</p>
<p><a href="http://www.codecogs.com/eqnedit.php?latex=\bg_green&amp;space;u(1,&amp;space;N)&amp;space;=&amp;space;\sum_{n=1}^{n=N}v(1,&amp;space;n)&amp;space;=&amp;space;\frac{1}{1.2^2}&amp;space;+&amp;space;\frac{1}{1.3^2}+...+\frac{1}{1.(N+1)^2}" target="_blank"><img src="http://latex.codecogs.com/gif.latex?\bg_green&amp;space;u(1,&amp;space;N)&amp;space;=&amp;space;\sum_{n=1}^{n=N}v(1,&amp;space;n)&amp;space;=&amp;space;\frac{1}{1.2^2}&amp;space;+&amp;space;\frac{1}{1.3^2}+...+\frac{1}{1.(N+1)^2}" title="u(1, N) = \sum_{n=1}^{n=N}v(1, n) = \frac{1}{1.2^2} + \frac{1}{1.3^2}+...+\frac{1}{1.(N+1)^2}"></a></p>
<p>We can go on with <code>k = 2</code> and then <code>k = 3</code> etc ... and consider:</p>
<p><a href="http://www.codecogs.com/eqnedit.php?latex=\bg_green&amp;space;S(K,&amp;space;N)&amp;space;=&amp;space;\sum_{k=1}^{k=K}u(k,&amp;space;N)&amp;space;=&amp;space;\sum_{k=1}^{k=K}(\sum_{n=1}^{n=N}v(k,&amp;space;n))&amp;space;\rightarrow&amp;space;(doubles(maxk,&amp;space;maxn))" target="_blank"><img src="http://latex.codecogs.com/gif.latex?\bg_green&amp;space;S(K,&amp;space;N)&amp;space;=&amp;space;\sum_{k=1}^{k=K}u(k,&amp;space;N)&amp;space;=&amp;space;\sum_{k=1}^{k=K}(\sum_{n=1}^{n=N}v(k,&amp;space;n))&amp;space;\rightarrow&amp;space;(doubles(maxk,&amp;space;maxn))" title="S(K, N) = \sum_{k=1}^{k=K}u(k, N) = \sum_{k=1}^{k=K}(\sum_{n=1}^{n=N}v(k, n)) \rightarrow (doubles(maxk, maxn))"></a></p>
<h1 id="task">Task:</h1>
<p>To help Professor Chambouliard can we calculate the function <code>doubles</code> that will take as parameter <code>maxk</code> and <code>maxn</code> such that <code>doubles(maxk, maxn) = S(maxk, maxn)</code>?
Experiences seems to show that this could be something around <code>0.7</code> when <code>maxk</code> and <code>maxn</code> are big enough.</p>
<h1 id="examples">Examples:</h1>
<pre><code>doubles(1, 3)  =&gt; 0.4236111111111111
doubles(1, 10) =&gt; 0.5580321939764581
doubles(10, 100) =&gt; 0.6832948559787737</code></pre><h1 id="notes">Notes:</h1>
<ul>
<li><p>In <code>u(1, N)</code> the dot is the <em>multiplication operator</em>.</p>
</li>
<li><p>Don&apos;t truncate or round: 
Have a look in &quot;RUN EXAMPLES&quot; at &quot;assertFuzzyEquals&quot;.</p>
</li>
<li><p><a href="https://en.wikipedia.org/wiki/Summation" target="_blank">link to symbol Sigma</a></p>
</li>
</ul>

### Solution