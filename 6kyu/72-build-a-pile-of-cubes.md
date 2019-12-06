### Problem:
<p>Your task is to construct a building which will be a pile of n cubes.
The cube at the bottom will have a volume of n^3, the cube above 
will have  volume of (n-1)^3 and so on until the top which will have a volume of 1^3.</p>
<p>You are given the total volume m of the building.
Being given m can you find the number n of cubes you will have to build?</p>
<p>The parameter of the function findNb <code>(find_nb, find-nb, findNb)</code> will be an integer m
and you have to return the integer n such as
n^3 + (n-1)^3 + ... + 1^3 = m
if such a n exists or -1 if there is no such n.</p>
<h2 id="examples">Examples:</h2>
<pre><code>findNb(1071225) --&gt; 45
findNb(91716553919377) --&gt; -1</code></pre><pre><code class="language-nasm"><span class="hljs-keyword">mov</span> <span class="hljs-built_in">rdi</span>, <span class="hljs-number">1071225</span>
<span class="hljs-keyword">call</span> find_nb            <span class="hljs-comment">; rax &lt;-- 45</span>

<span class="hljs-keyword">mov</span> <span class="hljs-built_in">rdi</span>, <span class="hljs-number">91716553919377</span>
<span class="hljs-keyword">call</span> find_nb            <span class="hljs-comment">; rax &lt;-- -1</span></code></pre>

### Solution