### Problem:
<p>Usually when you buy something, you&apos;re asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don&apos;t want that shown on your screen. Instead, we mask it.</p>
<p>Your task is to write a function <code>maskify</code>, which changes all but the last four characters into <code>&apos;#&apos;</code>.</p>
<h2 id="examples">Examples</h2>
<pre><code class="language-javascript">maskify(<span class="hljs-string">&quot;4556364607935616&quot;</span>) == <span class="hljs-string">&quot;############5616&quot;</span>
maskify(     <span class="hljs-string">&quot;64607935616&quot;</span>) ==      <span class="hljs-string">&quot;#######5616&quot;</span>
maskify(               <span class="hljs-string">&quot;1&quot;</span>) ==                <span class="hljs-string">&quot;1&quot;</span>
maskify(                <span class="hljs-string">&quot;&quot;</span>) ==                 <span class="hljs-string">&quot;&quot;</span>

<span class="hljs-comment">// &quot;What was the name of your first pet?&quot;</span>
maskify(<span class="hljs-string">&quot;Skippy&quot;</span>)                                   == <span class="hljs-string">&quot;##ippy&quot;</span>
maskify(<span class="hljs-string">&quot;Nananananananananananananananana Batman!&quot;</span>) == <span class="hljs-string">&quot;####################################man!&quot;</span></code></pre>
<pre style="display: none;"><code class="language-coffeescript">maskify(<span class="hljs-string">&quot;4556364607935616&quot;</span>) == <span class="hljs-string">&quot;############5616&quot;</span>
maskify(     <span class="hljs-string">&quot;64607935616&quot;</span>) ==      <span class="hljs-string">&quot;#######5616&quot;</span>
maskify(               <span class="hljs-string">&quot;1&quot;</span>) ==                <span class="hljs-string">&quot;1&quot;</span>
maskify(                <span class="hljs-string">&quot;&quot;</span>) ==                 <span class="hljs-string">&quot;&quot;</span>

<span class="hljs-comment"># &quot;What was the name of your first pet?&quot;</span>
maskify(<span class="hljs-string">&quot;Skippy&quot;</span>)                                   == <span class="hljs-string">&quot;##ippy&quot;</span>
maskify(<span class="hljs-string">&quot;Nananananananananananananananana Batman!&quot;</span>) == <span class="hljs-string">&quot;####################################man!&quot;</span></code></pre>
<pre style="display: none;"><code class="language-python">maskify(<span class="hljs-string">&quot;4556364607935616&quot;</span>) == <span class="hljs-string">&quot;############5616&quot;</span>
maskify(     <span class="hljs-string">&quot;64607935616&quot;</span>) ==      <span class="hljs-string">&quot;#######5616&quot;</span>
maskify(               <span class="hljs-string">&quot;1&quot;</span>) ==                <span class="hljs-string">&quot;1&quot;</span>
maskify(                <span class="hljs-string">&quot;&quot;</span>) ==                 <span class="hljs-string">&quot;&quot;</span>

<span class="hljs-comment"># &quot;What was the name of your first pet?&quot;</span>
maskify(<span class="hljs-string">&quot;Skippy&quot;</span>)                                   == <span class="hljs-string">&quot;##ippy&quot;</span>
maskify(<span class="hljs-string">&quot;Nananananananananananananananana Batman!&quot;</span>) == <span class="hljs-string">&quot;####################################man!&quot;</span></code></pre>
<pre style="display: none;"><code class="language-haskell"><span class="hljs-title">maskify</span> <span class="hljs-string">&quot;4556364607935616&quot;</span> == <span class="hljs-string">&quot;############5616&quot;</span>
<span class="hljs-title">maskify</span>      <span class="hljs-string">&quot;64607935616&quot;</span> ==      <span class="hljs-string">&quot;#######5616&quot;</span>
<span class="hljs-title">maskify</span>                <span class="hljs-string">&quot;1&quot;</span> ==                <span class="hljs-string">&quot;1&quot;</span>
<span class="hljs-title">maskify</span>                 <span class="hljs-string">&quot;&quot;</span> ==                 <span class="hljs-string">&quot;&quot;</span>

<span class="hljs-comment">-- &quot;What was the name of your first pet?&quot;</span>
<span class="hljs-title">maskify</span> <span class="hljs-string">&quot;Skippy&quot;</span> == <span class="hljs-string">&quot;##ippy&quot;</span>
<span class="hljs-title">maskify</span> <span class="hljs-string">&quot;Nananananananananananananananana Batman!&quot;</span>
     <span class="hljs-comment">-- &quot;####################################man!&quot;</span></code></pre>
<pre style="display: none;"><code class="language-ruby">maskify(<span class="hljs-string">&apos;4556364607935616&apos;</span>) <span class="hljs-comment"># should return &apos;############5616&apos;</span>
maskify(<span class="hljs-string">&apos;64607935616&apos;</span>)      <span class="hljs-comment"># should return &apos;#######5616&apos;</span>
maskify(<span class="hljs-string">&apos;1&apos;</span>)                <span class="hljs-comment"># should return &apos;1&apos;</span>
maskify(<span class="hljs-string">&apos;&apos;</span>)                 <span class="hljs-comment"># should return &apos;&apos;</span>

<span class="hljs-comment"># &quot;What was the name of your first pet?&quot;</span>
maskify(<span class="hljs-string">&apos;Skippy&apos;</span>)                                   <span class="hljs-comment"># should return &apos;##ippy&apos;</span>
maskify(<span class="hljs-string">&apos;Nananananananananananananananana Batman!&apos;</span>) <span class="hljs-comment"># should return &apos;####################################man!&apos;</span></code></pre>
<pre style="display: none;"><code class="language-csharp">Kata.Maskify(<span class="hljs-string">&apos;4556364607935616&apos;</span>); <span class="hljs-comment">// should return &quot;############5616&quot;</span>
Kata.Maskify(<span class="hljs-string">&apos;64607935616&apos;</span>);      <span class="hljs-comment">// should return &quot;#######5616&quot;</span>
Kata.Maskify(<span class="hljs-string">&apos;1&apos;</span>);                <span class="hljs-comment">// should return &quot;1&quot;</span>
Kata.Maskify(<span class="hljs-string">&apos;&apos;</span>);                 <span class="hljs-comment">// should return &quot;&quot;</span>

<span class="hljs-comment">// &quot;What was the name of your first pet?&quot;</span>
Kata.Maskify(<span class="hljs-string">&apos;Skippy&apos;</span>);                                   <span class="hljs-comment">// should return &quot;##ippy&quot;</span>
Kata.Maskify(<span class="hljs-string">&apos;Nananananananananananananananana Batman!&apos;</span>); <span class="hljs-comment">// should return &quot;####################################man!&quot;</span></code></pre>
<pre style="display: none;"><code class="language-java">Maskify.Maskify(<span class="hljs-string">&quot;4556364607935616&quot;</span>); <span class="hljs-comment">// should return &quot;############5616&quot;</span>
Maskify.Maskify(<span class="hljs-string">&quot;64607935616&quot;</span>);      <span class="hljs-comment">// should return &quot;#######5616&quot;</span>
Maskify.Maskify(<span class="hljs-string">&quot;1&quot;</span>);                <span class="hljs-comment">// should return &quot;1&quot;</span>
Maskify.Maskify(<span class="hljs-string">&quot;&quot;</span>);                 <span class="hljs-comment">// should return &quot;&quot;</span>

<span class="hljs-comment">// &quot;What was the name of your first pet?&quot;</span>
Maskify.Maskify(<span class="hljs-string">&quot;Skippy&quot;</span>);                                   <span class="hljs-comment">// should return &quot;##ippy&quot;</span>
Maskify.Maskify(<span class="hljs-string">&quot;Nananananananananananananananana Batman!&quot;</span>); <span class="hljs-comment">// should return &quot;####################################man!&quot;</span></code></pre>

### Solution