### Problem:
<p>In this kata, you must create a <code>digital root</code> function.</p>
<p>A digital root is the <em>recursive sum of all the digits in a number.</em> Given <em>n</em>, take the sum of the digits of <em>n</em>. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. This is only applicable to the natural numbers.</p>
<p>Here&apos;s how it works:</p>
<pre><code class="language-ruby">digital_root(<span class="hljs-number">16</span>)
=&gt; <span class="hljs-number">1</span> + <span class="hljs-number">6</span>
=&gt; <span class="hljs-number">7</span>

digital_root(<span class="hljs-number">942</span>)
=&gt; <span class="hljs-number">9</span> + <span class="hljs-number">4</span> + <span class="hljs-number">2</span>
=&gt; <span class="hljs-number">15</span> ...
=&gt; <span class="hljs-number">1</span> + <span class="hljs-number">5</span>
=&gt; <span class="hljs-number">6</span>

digital_root(<span class="hljs-number">132189</span>)
=&gt; <span class="hljs-number">1</span> + <span class="hljs-number">3</span> + <span class="hljs-number">2</span> + <span class="hljs-number">1</span> + <span class="hljs-number">8</span> + <span class="hljs-number">9</span>
=&gt; <span class="hljs-number">24</span> ...
=&gt; <span class="hljs-number">2</span> + <span class="hljs-number">4</span>
=&gt; <span class="hljs-number">6</span>

digital_root(<span class="hljs-number">493193</span>)
=&gt; <span class="hljs-number">4</span> + <span class="hljs-number">9</span> + <span class="hljs-number">3</span> + <span class="hljs-number">1</span> + <span class="hljs-number">9</span> + <span class="hljs-number">3</span>
=&gt; <span class="hljs-number">29</span> ...
=&gt; <span class="hljs-number">2</span> + <span class="hljs-number">9</span>
=&gt; <span class="hljs-number">11</span> ...
=&gt; <span class="hljs-number">1</span> + <span class="hljs-number">1</span>
=&gt; <span class="hljs-number">2</span></code></pre>
<pre style="display: none;"><code class="language-typescript">digitalRoot(<span class="hljs-number">16</span>)
=&gt; <span class="hljs-number">1</span> + <span class="hljs-number">6</span>
=&gt; <span class="hljs-number">7</span>

digitalRoot(<span class="hljs-number">942</span>)
=&gt; <span class="hljs-number">9</span> + <span class="hljs-number">4</span> + <span class="hljs-number">2</span>
=&gt; <span class="hljs-number">15</span> ...
=&gt; <span class="hljs-number">1</span> + <span class="hljs-number">5</span>
=&gt; <span class="hljs-number">6</span>

digitalRoot(<span class="hljs-number">132189</span>)
=&gt; <span class="hljs-number">1</span> + <span class="hljs-number">3</span> + <span class="hljs-number">2</span> + <span class="hljs-number">1</span> + <span class="hljs-number">8</span> + <span class="hljs-number">9</span>
=&gt; <span class="hljs-number">24</span> ...
=&gt; <span class="hljs-number">2</span> + <span class="hljs-number">4</span>
=&gt; <span class="hljs-number">6</span>

digitalRoot(<span class="hljs-number">493193</span>)
=&gt; <span class="hljs-number">4</span> + <span class="hljs-number">9</span> + <span class="hljs-number">3</span> + <span class="hljs-number">1</span> + <span class="hljs-number">9</span> + <span class="hljs-number">3</span>
=&gt; <span class="hljs-number">29</span> ...
=&gt; <span class="hljs-number">2</span> + <span class="hljs-number">9</span>
=&gt; <span class="hljs-number">11</span> ...
=&gt; <span class="hljs-number">1</span> + <span class="hljs-number">1</span>
=&gt; <span class="hljs-number">2</span></code></pre>
<pre style="display: none;"><code class="language-ocaml">digital_root <span class="hljs-number">16</span>
=&gt; <span class="hljs-number">1</span> + <span class="hljs-number">6</span>
=&gt; <span class="hljs-number">7</span>

digital_root <span class="hljs-number">942</span>
=&gt; <span class="hljs-number">9</span> + <span class="hljs-number">4</span> + <span class="hljs-number">2</span>
=&gt; <span class="hljs-number">15</span> ...
=&gt; <span class="hljs-number">1</span> + <span class="hljs-number">5</span>
=&gt; <span class="hljs-number">6</span>

digital_root <span class="hljs-number">132189</span>
=&gt; <span class="hljs-number">1</span> + <span class="hljs-number">3</span> + <span class="hljs-number">2</span> + <span class="hljs-number">1</span> + <span class="hljs-number">8</span> + <span class="hljs-number">9</span>
=&gt; <span class="hljs-number">24</span> ...
=&gt; <span class="hljs-number">2</span> + <span class="hljs-number">4</span>
=&gt; <span class="hljs-number">6</span>

digital_root <span class="hljs-number">493193</span>
=&gt; <span class="hljs-number">4</span> + <span class="hljs-number">9</span> + <span class="hljs-number">3</span> + <span class="hljs-number">1</span> + <span class="hljs-number">9</span> + <span class="hljs-number">3</span>
=&gt; <span class="hljs-number">29</span> ...
=&gt; <span class="hljs-number">2</span> + <span class="hljs-number">9</span>
=&gt; <span class="hljs-number">11</span> ...
=&gt; <span class="hljs-number">1</span> + <span class="hljs-number">1</span>
=&gt; <span class="hljs-number">2</span></code></pre>
<pre style="display: none;"><code class="language-golang">DigitalRoot(<span class="hljs-number">16</span>)
=&gt; <span class="hljs-number">1</span> + <span class="hljs-number">6</span>
=&gt; <span class="hljs-number">7</span>

DigitalRoot(<span class="hljs-number">942</span>)
=&gt; <span class="hljs-number">9</span> + <span class="hljs-number">4</span> + <span class="hljs-number">2</span>
=&gt; <span class="hljs-number">15</span> ...
=&gt; <span class="hljs-number">1</span> + <span class="hljs-number">5</span>
=&gt; <span class="hljs-number">6</span>

DigitalRoot(<span class="hljs-number">132189</span>)
=&gt; <span class="hljs-number">1</span> + <span class="hljs-number">3</span> + <span class="hljs-number">2</span> + <span class="hljs-number">1</span> + <span class="hljs-number">8</span> + <span class="hljs-number">9</span>
=&gt; <span class="hljs-number">24</span> ...
=&gt; <span class="hljs-number">2</span> + <span class="hljs-number">4</span>
=&gt; <span class="hljs-number">6</span>

DigitalRoot(<span class="hljs-number">493193</span>)
=&gt; <span class="hljs-number">4</span> + <span class="hljs-number">9</span> + <span class="hljs-number">3</span> + <span class="hljs-number">1</span> + <span class="hljs-number">9</span> + <span class="hljs-number">3</span>
=&gt; <span class="hljs-number">29</span> ...
=&gt; <span class="hljs-number">2</span> + <span class="hljs-number">9</span>
=&gt; <span class="hljs-number">11</span> ...
=&gt; <span class="hljs-number">1</span> + <span class="hljs-number">1</span>
=&gt; <span class="hljs-number">2</span></code></pre>

### Solution