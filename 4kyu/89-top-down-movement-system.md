### Problem:
<h1>Task</h1>

<p>Create a top-down movement system that would feel highly responsive to the player. In your Update method you have to check for the keys that are currently being pressed, the keys correspond to the enum Direction shown below, based on which key is pressed or released your method should behave this way:</p>
<p>1) When a key is first pressed, the player has to change his direction to that of the current key, without moving</p>
<p>2) If the key is still being pressed during the next Update, the player will move towards his current direction using these vectors: (Up = { 0, +1 } , Down = { 0, -1 }, Left = { -1, 0 }, Right = { +1, 0 })</p>
<p>3) If a new key is pressed, it will gain precedence over the previous key and the player will act as per 1)</p>
<p>4-A) If the current key (A) is released, then the precedence will go back to the previous key (B) (or the one before it, if (B) is not pressed anymore, and so on), then the player will behave as per 1).</p>
<p>4-B) If the current key is released, and no other keys are being pressed, the player will stand still</p>
<p>5) If all keys are released at once, the player will not move nor change direction</p>
<p>6) If multiple keys are pressed at once, the order of precedence will be the following { Up, Down, Left, Right } </p>
<h1>Examples</h1>

<pre><code>(n = pressed key, [n] = current key, p() = press, r() = release, (8,2,4,6 = up, down, left, right)):

[] , p(8) -&gt; [8] , p(4,6) -&gt; 86[4] , r(6) -&gt; 8[4] , r(4) -&gt; [8] , r(8) -&gt; []

[] , p(2486) -&gt; 642[8] , r(2,8) -&gt; 6[4] , r(4,6) -&gt; []</code></pre><p>This is what you&apos;ll need to use in your code (NB: the tile coordinates cannot be changed, you&apos;ll need to assign a new Tile each time the player moves):</p>
<pre><code class="language-csharp">  <span class="hljs-keyword">public</span> <span class="hljs-keyword">enum</span> Direction { Up = <span class="hljs-number">8</span>, Down = <span class="hljs-number">2</span>, Left = <span class="hljs-number">4</span>, Right = <span class="hljs-number">6</span> }

  <span class="hljs-keyword">public</span> <span class="hljs-keyword">struct</span> Tile
  {
      <span class="hljs-keyword">public</span> <span class="hljs-keyword">int</span> X { <span class="hljs-keyword">get</span>; }
      <span class="hljs-keyword">public</span> <span class="hljs-keyword">int</span> Y { <span class="hljs-keyword">get</span>; }

      <span class="hljs-function"><span class="hljs-keyword">public</span> <span class="hljs-title">Tile</span>(<span class="hljs-params"><span class="hljs-keyword">int</span> x, <span class="hljs-keyword">int</span> y</span>)</span>;
  }

  <span class="hljs-keyword">public</span> <span class="hljs-keyword">static</span> <span class="hljs-keyword">class</span> <span class="hljs-title">Input</span>
  {
      <span class="hljs-comment">// pressed = true, released = false</span>
      <span class="hljs-function"><span class="hljs-keyword">public</span> <span class="hljs-keyword">static</span> <span class="hljs-keyword">bool</span> <span class="hljs-title">GetState</span>(<span class="hljs-params">Direction direction</span>)</span>;
  }</code></pre>
<pre style="display: none;"><code class="language-python"><span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">Tile</span>:</span>

<span class="hljs-meta">    @property</span>
    <span class="hljs-function"><span class="hljs-keyword">def</span> <span class="hljs-title">x</span><span class="hljs-params">(self)</span>:</span>
        <span class="hljs-keyword">return</span> self._x

<span class="hljs-meta">    @property</span>
    <span class="hljs-function"><span class="hljs-keyword">def</span> <span class="hljs-title">y</span><span class="hljs-params">(self)</span>:</span>
        <span class="hljs-keyword">return</span> self._y

    <span class="hljs-function"><span class="hljs-keyword">def</span> <span class="hljs-title">__str__</span><span class="hljs-params">(self)</span>:</span>
        <span class="hljs-keyword">return</span> <span class="hljs-string">&quot;({},{})&quot;</span>.format(self._x, self._y)

<span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">Input</span>:</span>

<span class="hljs-meta">    @staticmethod</span>
    <span class="hljs-function"><span class="hljs-keyword">def</span> <span class="hljs-title">get_state</span><span class="hljs-params">(direction)</span>:</span> <span class="hljs-comment"># 2, 4, 6, 8</span>
        <span class="hljs-keyword">return</span> Input.STATES[direction] <span class="hljs-comment"># pressed = true, released = false</span></code></pre>
<pre style="display: none;"><code class="language-java"><span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">Tile</span> </span>{
    <span class="hljs-function"><span class="hljs-keyword">public</span> <span class="hljs-title">Tile</span><span class="hljs-params">(<span class="hljs-keyword">int</span> x, <span class="hljs-keyword">int</span> y)</span>
    <span class="hljs-keyword">public</span> <span class="hljs-keyword">int</span> <span class="hljs-title">x</span><span class="hljs-params">()</span>                                   <span class="hljs-comment">// getter</span>
    <span class="hljs-keyword">public</span> <span class="hljs-keyword">int</span> <span class="hljs-title">y</span><span class="hljs-params">()</span>                                   <span class="hljs-comment">// getter</span>

    @Override <span class="hljs-keyword">public</span> String  <span class="hljs-title">toString</span><span class="hljs-params">()</span>              <span class="hljs-comment">// formated as: &quot;(x,y)&quot;</span>
    @Override <span class="hljs-keyword">public</span> <span class="hljs-keyword">int</span>     <span class="hljs-title">hashCode</span><span class="hljs-params">()</span> 
    @Override <span class="hljs-keyword">public</span> <span class="hljs-keyword">boolean</span> <span class="hljs-title">equals</span><span class="hljs-params">(Object other)</span>
}

class Input </span>{
    <span class="hljs-function"><span class="hljs-keyword">public</span> <span class="hljs-keyword">static</span> <span class="hljs-keyword">boolean</span> <span class="hljs-title">getState</span><span class="hljs-params">(<span class="hljs-keyword">int</span> direction)</span>    <span class="hljs-comment">// pressed = true, released = false</span>
}</span></code></pre>

### Solution