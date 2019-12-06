### Problem:
<p>Write a function, <code>persistence</code>, that takes in a positive parameter <code>num</code> and returns its multiplicative persistence, which is the number of times you must multiply the digits in <code>num</code> until you reach a single digit.</p>
<p>For example:</p>
<pre style="display: none;"><code class="language-swift"> persistence(<span class="hljs-keyword">for</span>: <span class="hljs-number">39</span>) === <span class="hljs-number">3</span> <span class="hljs-comment">// because 3*9 = 27, 2*7 = 14, 1*4=4</span>
                       <span class="hljs-comment">// and 4 has only one digit</span>

 persistence(<span class="hljs-keyword">for</span>: <span class="hljs-number">999</span>) === <span class="hljs-number">4</span> <span class="hljs-comment">// because 9*9*9 = 729, 7*2*9 = 126,</span>
                        <span class="hljs-comment">// 1*2*6 = 12, and finally 1*2 = 2</span>

 persistence(<span class="hljs-keyword">for</span>: <span class="hljs-number">4</span>) === <span class="hljs-number">0</span> <span class="hljs-comment">// because 4 is already a one-digit number</span></code></pre>
<pre><code class="language-javascript"> persistence(<span class="hljs-number">39</span>) === <span class="hljs-number">3</span> <span class="hljs-comment">// because 3*9 = 27, 2*7 = 14, 1*4=4</span>
                       <span class="hljs-comment">// and 4 has only one digit</span>

 persistence(<span class="hljs-number">999</span>) === <span class="hljs-number">4</span> <span class="hljs-comment">// because 9*9*9 = 729, 7*2*9 = 126,</span>
                        <span class="hljs-comment">// 1*2*6 = 12, and finally 1*2 = 2</span>

 persistence(<span class="hljs-number">4</span>) === <span class="hljs-number">0</span> <span class="hljs-comment">// because 4 is already a one-digit number</span></code></pre>
<pre style="display: none;"><code class="language-php">persistence(<span class="hljs-number">39</span>) === <span class="hljs-number">3</span>; <span class="hljs-comment">// because 3 * 9 = 27, 2 * 7 = 14, 1 * 4 = 4 and 4 has only one digit</span>
persistence(<span class="hljs-number">999</span>) === <span class="hljs-number">4</span>; <span class="hljs-comment">// because 9 * 9 * 9 = 729, 7 * 2 * 9 = 126, 1 * 2 * 6 = 12, and finally 1 * 2 = 2</span>
persistence(<span class="hljs-number">4</span>) === <span class="hljs-number">0</span>; <span class="hljs-comment">// because 4 is already a one-digit number</span></code></pre>
<pre style="display: none;"><code class="language-coffeescript"> persistence(<span class="hljs-number">39</span>) === <span class="hljs-number">3</span> // because <span class="hljs-number">3</span>*<span class="hljs-number">9</span> = <span class="hljs-number">27</span>, <span class="hljs-number">2</span>*<span class="hljs-number">7</span> = <span class="hljs-number">14</span>, <span class="hljs-number">1</span>*<span class="hljs-number">4</span>=<span class="hljs-number">4</span>
                       // <span class="hljs-keyword">and</span> <span class="hljs-number">4</span> has only one digit

 persistence(<span class="hljs-number">999</span>) === <span class="hljs-number">4</span> // because <span class="hljs-number">9</span>*<span class="hljs-number">9</span>*<span class="hljs-number">9</span> = <span class="hljs-number">729</span>, <span class="hljs-number">7</span>*<span class="hljs-number">2</span>*<span class="hljs-number">9</span> = <span class="hljs-number">126</span>,
                        <span class="hljs-regexp">//</span> <span class="hljs-number">1</span>*<span class="hljs-number">2</span>*<span class="hljs-number">6</span> = <span class="hljs-number">12</span>, <span class="hljs-keyword">and</span> <span class="hljs-keyword">finally</span> <span class="hljs-number">1</span>*<span class="hljs-number">2</span> = <span class="hljs-number">2</span>

 persistence(<span class="hljs-number">4</span>) === <span class="hljs-number">0</span> // because <span class="hljs-number">4</span> <span class="hljs-keyword">is</span> already a one-digit number</code></pre>
<pre style="display: none;"><code class="language-csharp"> persistence(<span class="hljs-number">39</span>) == <span class="hljs-number">3</span> <span class="hljs-comment">// because 3*9 = 27, 2*7 = 14, 1*4=4</span>
                      <span class="hljs-comment">// and 4 has only one digit</span>

 persistence(<span class="hljs-number">999</span>) == <span class="hljs-number">4</span> <span class="hljs-comment">// because 9*9*9 = 729, 7*2*9 = 126,</span>
                       <span class="hljs-comment">// 1*2*6 = 12, and finally 1*2 = 2</span>

 persistence(<span class="hljs-number">4</span>) == <span class="hljs-number">0</span> <span class="hljs-comment">// because 4 is already a one-digit number</span></code></pre>
<pre style="display: none;"><code class="language-fsharp">persistence <span class="hljs-number">39</span> = <span class="hljs-number">3</span>  <span class="hljs-comment">// because 3*9 = 27, 2*7 = 14, 1*4=4</span>
                    <span class="hljs-comment">// and 4 has only one digit</span>

persistence <span class="hljs-number">999</span> = <span class="hljs-number">4</span> <span class="hljs-comment">// because 9*9*9 = 729, 7*2*9 = 126,</span>
                    <span class="hljs-comment">// 1*2*6 = 12, and finally 1*2 = 2</span>

persistence <span class="hljs-number">4</span> = <span class="hljs-number">0</span>   <span class="hljs-comment">// because 4 is already a one-digit number</span></code></pre>
<pre style="display: none;"><code class="language-java"> persistence(<span class="hljs-number">39</span>) == <span class="hljs-number">3</span> <span class="hljs-comment">// because 3*9 = 27, 2*7 = 14, 1*4=4</span>
                      <span class="hljs-comment">// and 4 has only one digit</span>

 persistence(<span class="hljs-number">999</span>) == <span class="hljs-number">4</span> <span class="hljs-comment">// because 9*9*9 = 729, 7*2*9 = 126,</span>
                       <span class="hljs-comment">// 1*2*6 = 12, and finally 1*2 = 2</span>

 persistence(<span class="hljs-number">4</span>) == <span class="hljs-number">0</span> <span class="hljs-comment">// because 4 is already a one-digit number</span></code></pre>
<pre style="display: none;"><code class="language-clojure"> (<span class="hljs-name">persistence</span> <span class="hljs-number">39</span>) <span class="hljs-comment">; returns 3, because 3*9=27, 2*7=14, 1*4=4</span>
                  <span class="hljs-comment">; and 4 has only one digit</span>

 (<span class="hljs-name">persistence</span> <span class="hljs-number">999</span>) <span class="hljs-comment">; returns 4, because 9*9*9=729, 7*2*9=126,</span>
                   <span class="hljs-comment">; 1*2*6=12, and finally 1*2=2</span>

 (<span class="hljs-name">persistence</span> <span class="hljs-number">4</span>) <span class="hljs-comment">; returns 0, because 4 is already a one-digit number</span></code></pre>
<pre style="display: none;"><code class="language-python"> persistence(39) =&gt; 3  # Because 3*9 = 27, 2*7 = 14, 1*4=4
                       # and 4 has only one digit.

 persistence(999) =&gt; 4 # Because 9*9*9 = 729, 7*2*9 = 126,
                       # 1*2*6 = 12, and finally 1*2 = 2.

 persistence(4) =&gt; 0   # Because 4 is already a one-digit number.</code></pre>
<pre style="display: none;"><code class="language-haskell"> persistence <span class="hljs-number">39</span> <span class="hljs-comment">-- returns 3, because 3*9=27, 2*7=14, 1*4=4</span>
                <span class="hljs-comment">-- and 4 has only one digit</span>

 persistence <span class="hljs-number">999</span> <span class="hljs-comment">-- returns 4, because 9*9*9=729, 7*2*9=126,</span>
                 <span class="hljs-comment">-- 1*2*6=12, and finally 1*2=2</span>

 persistence <span class="hljs-number">4</span> <span class="hljs-comment">-- returns 0, because 4 is already a one-digit number</span></code></pre>
<pre style="display: none;"><code class="language-ruby"> persistence(<span class="hljs-number">39</span>) <span class="hljs-comment"># returns 3, because 3*9=27, 2*7=14, 1*4=4</span>
                 <span class="hljs-comment"># and 4 has only one digit</span>

 persistence(<span class="hljs-number">999</span>) <span class="hljs-comment"># returns 4, because 9*9*9=729, 7*2*9=126,</span>
                  <span class="hljs-comment"># 1*2*6=12, and finally 1*2=2</span>

 persistence(<span class="hljs-number">4</span>) <span class="hljs-comment"># returns 0, because 4 is already a one-digit number</span></code></pre>
<pre style="display: none;"><code class="language-python"> persistence(<span class="hljs-number">39</span>) <span class="hljs-comment"># returns 3, because 3*9=27, 2*7=14, 1*4=4</span>
                 <span class="hljs-comment"># and 4 has only one digit</span>

 persistence(<span class="hljs-number">999</span>) <span class="hljs-comment"># returns 4, because 9*9*9=729, 7*2*9=126,</span>
                  <span class="hljs-comment"># 1*2*6=12, and finally 1*2=2</span>

 persistence(<span class="hljs-number">4</span>) <span class="hljs-comment"># returns 0, because 4 is already a one-digit number</span></code></pre>
<pre style="display: none;"><code class="language-coffeescript"> persistence(<span class="hljs-number">39</span>) <span class="hljs-comment"># returns 3, because 3*9=27, 2*7=14, 1*4=4</span>
                 <span class="hljs-comment"># and 4 has only one digit</span>

 persistence(<span class="hljs-number">999</span>) <span class="hljs-comment"># returns 4, because 9*9*9=729, 7*2*9=126,</span>
                  <span class="hljs-comment"># 1*2*6=12, and finally 1*2=2</span>

 persistence(<span class="hljs-number">4</span>) <span class="hljs-comment"># returns 0, because 4 is already a one-digit number</span></code></pre>
<pre style="display: none;"><code class="language-elixir"> persistence(<span class="hljs-number">39</span>) <span class="hljs-comment"># returns 3, because 3*9=27, 2*7=14, 1*4=4</span>
                 <span class="hljs-comment"># and 4 has only one digit</span>

 persistence(<span class="hljs-number">999</span>) <span class="hljs-comment"># returns 4, because 9*9*9=729, 7*2*9=126,</span>
                  <span class="hljs-comment"># 1*2*6=12, and finally 1*2=2</span>

 persistence(<span class="hljs-number">4</span>) <span class="hljs-comment"># returns 0, because 4 is already a one-digit number</span></code></pre>
<pre style="display: none;"><code class="language-kotlin"> persistence(<span class="hljs-number">39</span>) == <span class="hljs-number">3</span> <span class="hljs-comment">// because 3*9 = 27, 2*7 = 14, 1*4=4</span>
                       <span class="hljs-comment">// and 4 has only one digit</span>

 persistence(<span class="hljs-number">999</span>) == <span class="hljs-number">4</span> <span class="hljs-comment">// because 9*9*9 = 729, 7*2*9 = 126,</span>
                        <span class="hljs-comment">// 1*2*6 = 12, and finally 1*2 = 2</span>

 persistence(<span class="hljs-number">4</span>) == <span class="hljs-number">0</span> <span class="hljs-comment">// because 4 is already a one-digit number</span></code></pre>
<pre style="display: none;"><code class="language-scala"> <span class="hljs-comment">// because 3*9 = 27, 2*7 = 14, 1*4=4 and 4 has only one digit:</span>
 persistence(<span class="hljs-number">39</span>) == <span class="hljs-number">3</span>

 <span class="hljs-comment">// because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2</span>
 persistence(<span class="hljs-number">999</span>) == <span class="hljs-number">4</span>

 <span class="hljs-comment">// because 4 is already a one-digit number:</span>
 persistence(<span class="hljs-number">4</span>) == <span class="hljs-number">0</span></code></pre>
<pre style="display: none;"><code class="language-julia">persistence(<span class="hljs-number">39</span>) <span class="hljs-comment"># returns 3, because 3*9=27, 2*7=14, 1*4=4</span>
                <span class="hljs-comment"># and 4 has only one digit</span>

persistence(<span class="hljs-number">999</span>) <span class="hljs-comment"># returns 4, because 9*9*9=729, 7*2*9=126,</span>
                 <span class="hljs-comment"># 1*2*6=12, and finally 1*2=2</span>

persistence(<span class="hljs-number">4</span>) <span class="hljs-comment"># returns 0, because 4 is already a one-digit number</span></code></pre>
<pre style="display: none;"><code class="language-rust">persistence(<span class="hljs-number">39</span>) <span class="hljs-comment">// returns 3, because 3*9=27, 2*7=14, 1*4=4</span>
                <span class="hljs-comment">// and 4 has only one digit</span>

persistence(<span class="hljs-number">999</span>) <span class="hljs-comment">// returns 4, because 9*9*9=729, 7*2*9=126,</span>
                 <span class="hljs-comment">// 1*2*6=12, and finally 1*2=2</span>

persistence(<span class="hljs-number">4</span>) <span class="hljs-comment">// returns 0, because 4 is already a one-digit number</span></code></pre>

### Solution