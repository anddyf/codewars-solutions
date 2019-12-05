### Problem:
<p>Your task is to make function, which returns the sum of a sequence of integers.</p>
<p>The sequence is defined by 3 non-negative values: <strong>begin</strong>, <strong>end</strong>, <strong>step</strong>.</p>
<p>If <strong>begin</strong> value is greater than the <strong>end</strong>, function should returns <strong>0</strong></p>
<p><em>Examples</em></p>
<pre><code class="language-javascript">sequenceSum(<span class="hljs-number">2</span>,<span class="hljs-number">2</span>,<span class="hljs-number">2</span>) === <span class="hljs-number">2</span>
sequenceSum(<span class="hljs-number">2</span>,<span class="hljs-number">6</span>,<span class="hljs-number">2</span>) === <span class="hljs-number">12</span> <span class="hljs-comment">// 2 + 4 + 6</span>
sequenceSum(<span class="hljs-number">1</span>,<span class="hljs-number">5</span>,<span class="hljs-number">1</span>) === <span class="hljs-number">15</span> <span class="hljs-comment">// 1 + 2 + 3 + 4 + 5</span>
sequenceSum(<span class="hljs-number">1</span>,<span class="hljs-number">5</span>,<span class="hljs-number">3</span>) === <span class="hljs-number">5</span> <span class="hljs-comment">// 1 + 4</span></code></pre>
<pre style="display: none;"><code class="language-php">sequence_sum(<span class="hljs-number">2</span>, <span class="hljs-number">2</span>, <span class="hljs-number">2</span>); <span class="hljs-comment">// =&gt; 2</span>
sequence_sum(<span class="hljs-number">2</span>, <span class="hljs-number">6</span>, <span class="hljs-number">2</span>); <span class="hljs-comment">// =&gt; 12 (= 2 + 4 + 6)</span>
sequence_sum(<span class="hljs-number">1</span>, <span class="hljs-number">5</span>, <span class="hljs-number">1</span>); <span class="hljs-comment">// =&gt; 15 (= 1 + 2 + 3 + 4 + 5)</span>
sequence_sum(<span class="hljs-number">1</span>, <span class="hljs-number">5</span>, <span class="hljs-number">3</span>); <span class="hljs-comment">// =&gt; 5 (= 1 + 4)</span></code></pre>
<pre style="display: none;"><code class="language-haskell"><span class="hljs-title">sequenceSum</span> (<span class="hljs-number">2</span>,<span class="hljs-number">2</span>,<span class="hljs-number">2</span>) = <span class="hljs-number">2</span>
<span class="hljs-title">sequenceSum</span> (<span class="hljs-number">2</span>,<span class="hljs-number">6</span>,<span class="hljs-number">2</span>) = <span class="hljs-number">12</span> <span class="hljs-comment">-- 2 + 4 + 6</span>
<span class="hljs-title">sequenceSum</span> (<span class="hljs-number">1</span>,<span class="hljs-number">5</span>,<span class="hljs-number">1</span>) = <span class="hljs-number">15</span> <span class="hljs-comment">-- 1 + 2 + 3 + 4 + 5</span>
<span class="hljs-title">sequenceSum</span> (<span class="hljs-number">1</span>,<span class="hljs-number">5</span>,<span class="hljs-number">3</span>) = <span class="hljs-number">5</span>  <span class="hljs-comment">-- 1 + 4</span></code></pre>
<pre style="display: none;"><code class="language-csharp">SequenceSum (<span class="hljs-number">2</span>,<span class="hljs-number">2</span>,<span class="hljs-number">2</span>); <span class="hljs-comment">// =&gt; 2</span>
SequenceSum (<span class="hljs-number">2</span>,<span class="hljs-number">6</span>,<span class="hljs-number">2</span>); <span class="hljs-comment">// =&gt; 12 -&gt; 2 + 4 + 6</span>
SequenceSum (<span class="hljs-number">1</span>,<span class="hljs-number">5</span>,<span class="hljs-number">1</span>); <span class="hljs-comment">// =&gt; 15 -&gt; 1 + 2 + 3 + 4 + 5</span>
SequenceSum (<span class="hljs-number">1</span>,<span class="hljs-number">5</span>,<span class="hljs-number">3</span>); <span class="hljs-comment">// =&gt; 5 -&gt; 1 + 4</span></code></pre>
<pre style="display: none;"><code class="language-cpp">sequenceSum (<span class="hljs-number">2</span>,<span class="hljs-number">2</span>,<span class="hljs-number">2</span>); <span class="hljs-comment">// =&gt; 2</span>
sequenceSum (<span class="hljs-number">2</span>,<span class="hljs-number">6</span>,<span class="hljs-number">2</span>); <span class="hljs-comment">// =&gt; 12 -&gt; 2 + 4 + 6</span>
sequenceSum (<span class="hljs-number">1</span>,<span class="hljs-number">5</span>,<span class="hljs-number">1</span>); <span class="hljs-comment">// =&gt; 15 -&gt; 1 + 2 + 3 + 4 + 5</span>
sequenceSum (<span class="hljs-number">1</span>,<span class="hljs-number">5</span>,<span class="hljs-number">3</span>); <span class="hljs-comment">// =&gt; 5 -&gt; 1 + 4</span></code></pre>
<pre style="display: none;"><code class="language-c">sequence_sum (<span class="hljs-number">2</span>,<span class="hljs-number">2</span>,<span class="hljs-number">2</span>); <span class="hljs-comment">/* =&gt; 2   */</span>
sequence_sum (<span class="hljs-number">2</span>,<span class="hljs-number">6</span>,<span class="hljs-number">2</span>); <span class="hljs-comment">/* =&gt; 12 -&gt; 2 + 4 + 6   */</span>
sequence_sum (<span class="hljs-number">1</span>,<span class="hljs-number">5</span>,<span class="hljs-number">1</span>); <span class="hljs-comment">/* =&gt; 15 -&gt; 1 + 2 + 3 + 4 + 5   */</span>
sequence_sum (<span class="hljs-number">1</span>,<span class="hljs-number">5</span>,<span class="hljs-number">3</span>); <span class="hljs-comment">/* =&gt; 5 -&gt; 1 + 4   */</span></code></pre>
<pre style="display: none;"><code class="language-nasm"><span class="hljs-keyword">mov</span> <span class="hljs-built_in">edi</span>, <span class="hljs-number">2</span>
<span class="hljs-keyword">mov</span> <span class="hljs-built_in">esi</span>, <span class="hljs-number">2</span>
<span class="hljs-keyword">mov</span> <span class="hljs-built_in">edx</span>, <span class="hljs-number">2</span>
<span class="hljs-keyword">call</span> sequence_sum    <span class="hljs-comment">; EAX &lt;- 2</span>

<span class="hljs-keyword">mov</span> <span class="hljs-built_in">edi</span>, <span class="hljs-number">2</span>
<span class="hljs-keyword">mov</span> <span class="hljs-built_in">esi</span>, <span class="hljs-number">6</span>
<span class="hljs-keyword">mov</span> <span class="hljs-built_in">edx</span>, <span class="hljs-number">2</span>
<span class="hljs-keyword">call</span> sequence_sum    <span class="hljs-comment">; EAX &lt;- 12 = 2 + 4 + 6</span>

<span class="hljs-keyword">mov</span> <span class="hljs-built_in">edi</span>, <span class="hljs-number">1</span>
<span class="hljs-keyword">mov</span> <span class="hljs-built_in">esi</span>, <span class="hljs-number">5</span>
<span class="hljs-keyword">mov</span> <span class="hljs-built_in">edx</span>, <span class="hljs-number">1</span>
<span class="hljs-keyword">call</span> sequence_sum    <span class="hljs-comment">; EAX &lt;- 15 = 1 + 2 + 3 + 4 + 5</span>

<span class="hljs-keyword">mov</span> <span class="hljs-built_in">edi</span>, <span class="hljs-number">1</span>
<span class="hljs-keyword">mov</span> <span class="hljs-built_in">esi</span>, <span class="hljs-number">5</span>
<span class="hljs-keyword">mov</span> <span class="hljs-built_in">edx</span>, <span class="hljs-number">3</span>
<span class="hljs-keyword">call</span> sequence_sum    <span class="hljs-comment">; EAX &lt;- 5 = 1 + 4</span></code></pre>
<p>This is the first kata in the series:</p>
<p>1) Sum of a sequence (this kata)<br>2) <a href="https://www.codewars.com/kata/sum-of-a-sequence-hard-core-version/javascript" target="_blank">Sum of a Sequence [Hard-Core Version]</a></p>

### Solution