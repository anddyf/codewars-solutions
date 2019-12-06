### Problem:
<p>This series of katas will introduce you to basics of doing geometry with computers.</p>
<p>Write the function <code>circleArea</code>/<code>CircleArea</code> which takes in a <code>Circle</code> object and calculates the area of that circle.<br>
The <code>Circle</code> class can be seen below:</p>
<pre style="display: none;"><code class="language-javascript"><span class="hljs-comment">// Represents a Circle where center is a Point and radius is a Number</span>
<span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">Circle</span> </span>{
  <span class="hljs-keyword">constructor</span>(center, radius) { 
    <span class="hljs-keyword">this</span>.center = center; 
    <span class="hljs-keyword">this</span>.radius = radius;
  }
}</code></pre>
<pre style="display: none;"><code class="language-csharp"><span class="hljs-keyword">public</span> <span class="hljs-keyword">class</span> <span class="hljs-title">Circle</span>
{
  <span class="hljs-keyword">public</span> Point Center { <span class="hljs-keyword">get</span>; <span class="hljs-keyword">private</span> <span class="hljs-keyword">set</span>; }
  <span class="hljs-keyword">public</span> <span class="hljs-keyword">double</span> Radius { <span class="hljs-keyword">get</span>; <span class="hljs-keyword">private</span> <span class="hljs-keyword">set</span>; }

  <span class="hljs-function"><span class="hljs-keyword">public</span> <span class="hljs-title">Circle</span>(<span class="hljs-params">Point center, <span class="hljs-keyword">double</span> radius</span>)</span>
  {
    <span class="hljs-keyword">this</span>.Center = center;
    <span class="hljs-keyword">this</span>.Radius = radius;
  }
}</code></pre>
<pre><code class="language-ruby"><span class="hljs-comment"># Represents a Circle where center is a Point and radius is a Number</span>
<span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">Circle</span></span>
  <span class="hljs-keyword">attr_accessor</span> <span class="hljs-symbol">:center</span>, <span class="hljs-symbol">:radius</span>
  <span class="hljs-function"><span class="hljs-keyword">def</span> <span class="hljs-title">initialize</span><span class="hljs-params">(center, radius)</span></span> 
    @center = center 
    @radius = radius
  <span class="hljs-keyword">end</span>
<span class="hljs-keyword">end</span></code></pre>
<p>And the <code>Point</code> class can be seen below:</p>
<pre style="display: none;"><code class="language-javascript"><span class="hljs-comment">// Represents a Point where x and y are Numbers</span>
<span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">Point</span> </span>{
  <span class="hljs-keyword">constructor</span> (x,y) { 
    <span class="hljs-keyword">this</span>.x = x;
    <span class="hljs-keyword">this</span>.y = y; 
  }
}</code></pre>
<pre style="display: none;"><code class="language-csharp"><span class="hljs-keyword">public</span> <span class="hljs-keyword">class</span> <span class="hljs-title">Point</span>
{
  <span class="hljs-keyword">public</span> <span class="hljs-keyword">double</span> X { <span class="hljs-keyword">get</span>; <span class="hljs-keyword">private</span> <span class="hljs-keyword">set</span>; }
  <span class="hljs-keyword">public</span> <span class="hljs-keyword">double</span> Y { <span class="hljs-keyword">get</span>; <span class="hljs-keyword">private</span> <span class="hljs-keyword">set</span>; }

  <span class="hljs-function"><span class="hljs-keyword">public</span> <span class="hljs-title">Point</span>(<span class="hljs-params"><span class="hljs-keyword">double</span> x, <span class="hljs-keyword">double</span> y</span>)</span>
  {
    <span class="hljs-keyword">this</span>.X = x;
    <span class="hljs-keyword">this</span>.Y = y;
  }
}</code></pre>
<pre><code class="language-ruby"><span class="hljs-comment"># Represents a Point where x and y are Numbers</span>
<span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">Point</span></span>
  <span class="hljs-keyword">attr_accessor</span> <span class="hljs-symbol">:x</span>, <span class="hljs-symbol">:y</span>
  <span class="hljs-function"><span class="hljs-keyword">def</span> <span class="hljs-title">initialize</span><span class="hljs-params">(x, y)</span></span>
    @x = x
    @y = y 
  <span class="hljs-keyword">end</span>
<span class="hljs-keyword">end</span></code></pre>
<!-- C# documentation -->
<!-- end C# documentation -->

<p>Tests round answers to 6 decimal places.</p>

### Solution