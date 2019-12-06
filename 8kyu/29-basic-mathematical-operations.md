### Problem:
<p>Your task is to create a function that does four basic mathematical operations.</p>
<p>The function should take three arguments - operation(string/char), value1(number), value2(number).<br>The function should return result of numbers after applying the chosen operation.</p>
<h3 id="examples">Examples</h3>
<pre><code class="language-javascript">basicOp(<span class="hljs-string">&apos;+&apos;</span>, <span class="hljs-number">4</span>, <span class="hljs-number">7</span>)         <span class="hljs-comment">// Output: 11</span>
basicOp(<span class="hljs-string">&apos;-&apos;</span>, <span class="hljs-number">15</span>, <span class="hljs-number">18</span>)       <span class="hljs-comment">// Output: -3</span>
basicOp(<span class="hljs-string">&apos;*&apos;</span>, <span class="hljs-number">5</span>, <span class="hljs-number">5</span>)         <span class="hljs-comment">// Output: 25</span>
basicOp(<span class="hljs-string">&apos;/&apos;</span>, <span class="hljs-number">49</span>, <span class="hljs-number">7</span>)        <span class="hljs-comment">// Output: 7</span></code></pre>
<pre style="display: none;"><code class="language-php">basicOp(<span class="hljs-string">&apos;+&apos;</span>, <span class="hljs-number">4</span>, <span class="hljs-number">7</span>)         <span class="hljs-comment">// Output: 11</span>
basicOp(<span class="hljs-string">&apos;-&apos;</span>, <span class="hljs-number">15</span>, <span class="hljs-number">18</span>)       <span class="hljs-comment">// Output: -3</span>
basicOp(<span class="hljs-string">&apos;*&apos;</span>, <span class="hljs-number">5</span>, <span class="hljs-number">5</span>)         <span class="hljs-comment">// Output: 25</span>
basicOp(<span class="hljs-string">&apos;/&apos;</span>, <span class="hljs-number">49</span>, <span class="hljs-number">7</span>)        <span class="hljs-comment">// Output: 7</span></code></pre>
<pre style="display: none;"><code class="language-csharp">basicOp(<span class="hljs-string">&apos;+&apos;</span>, <span class="hljs-number">4</span>, <span class="hljs-number">7</span>)         <span class="hljs-comment">// Output: 11</span>
basicOp(<span class="hljs-string">&apos;-&apos;</span>, <span class="hljs-number">15</span>, <span class="hljs-number">18</span>)       <span class="hljs-comment">// Output: -3</span>
basicOp(<span class="hljs-string">&apos;*&apos;</span>, <span class="hljs-number">5</span>, <span class="hljs-number">5</span>)         <span class="hljs-comment">// Output: 25</span>
basicOp(<span class="hljs-string">&apos;/&apos;</span>, <span class="hljs-number">49</span>, <span class="hljs-number">7</span>)        <span class="hljs-comment">// Output: 7</span></code></pre>
<pre style="display: none;"><code class="language-c">basicOp(<span class="hljs-string">&apos;+&apos;</span>, <span class="hljs-number">4</span>, <span class="hljs-number">7</span>)         <span class="hljs-comment">// Output: 11</span>
basicOp(<span class="hljs-string">&apos;-&apos;</span>, <span class="hljs-number">15</span>, <span class="hljs-number">18</span>)       <span class="hljs-comment">// Output: -3</span>
basicOp(<span class="hljs-string">&apos;*&apos;</span>, <span class="hljs-number">5</span>, <span class="hljs-number">5</span>)         <span class="hljs-comment">// Output: 25</span>
basicOp(<span class="hljs-string">&apos;/&apos;</span>, <span class="hljs-number">49</span>, <span class="hljs-number">7</span>)        <span class="hljs-comment">// Output: 7</span></code></pre>
<pre style="display: none;"><code class="language-java">basicOp(<span class="hljs-string">&apos;+&apos;</span>, <span class="hljs-number">4</span>, <span class="hljs-number">7</span>)         <span class="hljs-comment">// Output: 11</span>
basicOp(<span class="hljs-string">&apos;-&apos;</span>, <span class="hljs-number">15</span>, <span class="hljs-number">18</span>)       <span class="hljs-comment">// Output: -3</span>
basicOp(<span class="hljs-string">&apos;*&apos;</span>, <span class="hljs-number">5</span>, <span class="hljs-number">5</span>)         <span class="hljs-comment">// Output: 25</span>
basicOp(<span class="hljs-string">&apos;/&apos;</span>, <span class="hljs-number">49</span>, <span class="hljs-number">7</span>)        <span class="hljs-comment">// Output: 7</span></code></pre>
<pre style="display: none;"><code class="language-haskell"><span class="hljs-title">basicOp</span> &apos;+&apos; <span class="hljs-number">4</span> <span class="hljs-number">7</span>            <span class="hljs-comment">-- Output: 11</span>
<span class="hljs-title">basicOp</span> &apos;-&apos; <span class="hljs-number">15</span> <span class="hljs-number">18</span>          <span class="hljs-comment">-- Output: -3</span>
<span class="hljs-title">basicOp</span> &apos;*&apos; <span class="hljs-number">5</span> <span class="hljs-number">5</span>            <span class="hljs-comment">-- Output: 25</span>
<span class="hljs-title">basicOp</span> &apos;/&apos; <span class="hljs-number">49</span> <span class="hljs-number">7</span>           <span class="hljs-comment">-- Output: 7</span>

<span class="hljs-title">basicOp</span> &apos;/&apos; <span class="hljs-number">50</span> <span class="hljs-number">7</span>           <span class="hljs-comment">-- Output: 7 -- because integer division</span></code></pre>
<pre style="display: none;"><code class="language-python">basic_op(<span class="hljs-string">&apos;+&apos;</span>, <span class="hljs-number">4</span>, <span class="hljs-number">7</span>)         <span class="hljs-comment"># Output: 11</span>
basic_op(<span class="hljs-string">&apos;-&apos;</span>, <span class="hljs-number">15</span>, <span class="hljs-number">18</span>)       <span class="hljs-comment"># Output: -3</span>
basic_op(<span class="hljs-string">&apos;*&apos;</span>, <span class="hljs-number">5</span>, <span class="hljs-number">5</span>)         <span class="hljs-comment"># Output: 25</span>
basic_op(<span class="hljs-string">&apos;/&apos;</span>, <span class="hljs-number">49</span>, <span class="hljs-number">7</span>)        <span class="hljs-comment"># Output: 7</span></code></pre>
<pre style="display: none;"><code class="language-ruby">basic_op(<span class="hljs-string">&apos;+&apos;</span>, <span class="hljs-number">4</span>, <span class="hljs-number">7</span>)         <span class="hljs-comment"># Output: 11</span>
basic_op(<span class="hljs-string">&apos;-&apos;</span>, <span class="hljs-number">15</span>, <span class="hljs-number">18</span>)       <span class="hljs-comment"># Output: -3</span>
basic_op(<span class="hljs-string">&apos;*&apos;</span>, <span class="hljs-number">5</span>, <span class="hljs-number">5</span>)         <span class="hljs-comment"># Output: 25</span>
basic_op(<span class="hljs-string">&apos;/&apos;</span>, <span class="hljs-number">49</span>, <span class="hljs-number">7</span>)        <span class="hljs-comment"># Output: 7</span></code></pre>
<pre style="display: none;"><code class="language-nasm"><span class="hljs-keyword">mov</span> <span class="hljs-built_in">dil</span>, <span class="hljs-string">&apos;+&apos;</span>
<span class="hljs-keyword">mov</span> <span class="hljs-built_in">rax</span>, __float64__(<span class="hljs-number">4.0</span>)
<span class="hljs-keyword">mov</span> <span class="hljs-built_in">rdx</span>, __float64__(<span class="hljs-number">7.0</span>)
<span class="hljs-keyword">movq</span> <span class="hljs-built_in">xmm0</span>, <span class="hljs-built_in">rax</span>
<span class="hljs-keyword">movq</span> <span class="hljs-built_in">xmm1</span>, <span class="hljs-built_in">rdx</span>
<span class="hljs-keyword">call</span> basic_op        <span class="hljs-comment">; XMM0 &lt;- 11.0</span>

<span class="hljs-keyword">mov</span> <span class="hljs-built_in">dil</span>, <span class="hljs-string">&apos;-&apos;</span>
<span class="hljs-keyword">mov</span> <span class="hljs-built_in">rax</span>, __float64__(<span class="hljs-number">15.0</span>)
<span class="hljs-keyword">mov</span> <span class="hljs-built_in">rdx</span>, __float64__(<span class="hljs-number">18.0</span>)
<span class="hljs-keyword">movq</span> <span class="hljs-built_in">xmm0</span>, <span class="hljs-built_in">rax</span>
<span class="hljs-keyword">movq</span> <span class="hljs-built_in">xmm1</span>, <span class="hljs-built_in">rdx</span>
<span class="hljs-keyword">call</span> basic_op        <span class="hljs-comment">; XMM0 &lt;- -3.0</span>

<span class="hljs-keyword">mov</span> <span class="hljs-built_in">dil</span>, <span class="hljs-string">&apos;*&apos;</span>
<span class="hljs-keyword">mov</span> <span class="hljs-built_in">rax</span>, __float64__(<span class="hljs-number">5.0</span>)
<span class="hljs-keyword">movq</span> <span class="hljs-built_in">xmm0</span>, <span class="hljs-built_in">rax</span>
<span class="hljs-keyword">movq</span> <span class="hljs-built_in">xmm1</span>, <span class="hljs-built_in">rax</span>
<span class="hljs-keyword">call</span> basic_op        <span class="hljs-comment">; XMM0 &lt;- 25.0</span>

<span class="hljs-keyword">mov</span> <span class="hljs-built_in">dil</span>, <span class="hljs-string">&apos;/&apos;</span>
<span class="hljs-keyword">mov</span> <span class="hljs-built_in">rax</span>, __float64__(<span class="hljs-number">49.0</span>)
<span class="hljs-keyword">mov</span> <span class="hljs-built_in">rdx</span>, __float64__(<span class="hljs-number">7.0</span>)
<span class="hljs-keyword">movq</span> <span class="hljs-built_in">xmm0</span>, <span class="hljs-built_in">rax</span>
<span class="hljs-keyword">movq</span> <span class="hljs-built_in">xmm1</span>, <span class="hljs-built_in">rdx</span>
<span class="hljs-keyword">call</span> basic_op        <span class="hljs-comment">; XMM0 &lt;- 7.0</span></code></pre>
<pre style="display: none;"><code class="language-elixir">SimpleMath.basic_op(<span class="hljs-string">&quot;+&quot;</span>, <span class="hljs-number">4</span>, <span class="hljs-number">7</span>)     <span class="hljs-comment"># Output: 11</span>
SimpleMath.basic_op(<span class="hljs-string">&quot;-&quot;</span>, <span class="hljs-number">15</span>, <span class="hljs-number">18</span>)   <span class="hljs-comment"># Output: -3</span>
SimpleMath.basic_op(<span class="hljs-string">&quot;*&quot;</span>, <span class="hljs-number">5</span>, <span class="hljs-number">5</span>)     <span class="hljs-comment"># Output: 25</span>
SimpleMath.basic_op(<span class="hljs-string">&quot;/&quot;</span>, <span class="hljs-number">49</span>, <span class="hljs-number">7</span>)    <span class="hljs-comment"># Output: 7</span></code></pre>

### Solution