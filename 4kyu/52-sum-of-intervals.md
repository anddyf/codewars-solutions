### Problem:
<p>Write a function called <code>sumIntervals</code>/<code>sum_intervals()</code> that accepts an array of intervals, and returns the sum of all the interval lengths. Overlapping intervals should only be counted once.</p>
<h3 id="intervals">Intervals</h3>
<p>Intervals are represented by a pair of integers in the form of an array. The first value of the interval will always be less than the second value. Interval example: <code>[1, 5]</code> is an interval from 1 to 5. The length of this interval is 4.</p>
<h3 id="overlapping-intervals">Overlapping Intervals</h3>
<p>List containing overlapping intervals:</p>
<pre><code>[
   [1,4],
   [7, 10],
   [3, 5]
]</code></pre><p>The sum of the lengths of these intervals is 7. Since [1, 4] and [3, 5] overlap, we can treat the interval as [1, 5], which has a length of 4.</p>
<h3 id="examples">Examples:</h3>
<pre><code class="language-javascript">sumIntervals( [
   [<span class="hljs-number">1</span>,<span class="hljs-number">2</span>],
   [<span class="hljs-number">6</span>, <span class="hljs-number">10</span>],
   [<span class="hljs-number">11</span>, <span class="hljs-number">15</span>]
] ); <span class="hljs-comment">// =&gt; 9</span>

sumIntervals( [
   [<span class="hljs-number">1</span>,<span class="hljs-number">4</span>],
   [<span class="hljs-number">7</span>, <span class="hljs-number">10</span>],
   [<span class="hljs-number">3</span>, <span class="hljs-number">5</span>]
] ); <span class="hljs-comment">// =&gt; 7</span>

sumIntervals( [
   [<span class="hljs-number">1</span>,<span class="hljs-number">5</span>],
   [<span class="hljs-number">10</span>, <span class="hljs-number">20</span>],
   [<span class="hljs-number">1</span>, <span class="hljs-number">6</span>],
   [<span class="hljs-number">16</span>, <span class="hljs-number">19</span>],
   [<span class="hljs-number">5</span>, <span class="hljs-number">11</span>]
] ); <span class="hljs-comment">// =&gt; 19</span>
</code></pre>
<pre style="display: none;"><code class="language-java"><span class="hljs-comment">// null argument</span>
Interval.sumIntervals(<span class="hljs-keyword">null</span>);  <span class="hljs-comment">// =&gt; 0</span>

<span class="hljs-comment">// empty intervals</span>
Interval.sumIntervals(<span class="hljs-keyword">new</span> <span class="hljs-keyword">int</span>[][]{});  <span class="hljs-comment">// =&gt; 0</span>
Interval.sumIntervals(<span class="hljs-keyword">new</span> <span class="hljs-keyword">int</span>[][]{<span class="hljs-number">2</span>,<span class="hljs-number">2</span>}, {<span class="hljs-number">5</span>,<span class="hljs-number">5</span>});  <span class="hljs-comment">// =&gt; 0</span>

<span class="hljs-comment">// disjoined intervals</span>
Interval.sumIntervals(<span class="hljs-keyword">new</span> <span class="hljs-keyword">int</span>[][]{
  {<span class="hljs-number">1</span>,<span class="hljs-number">2</span>},{<span class="hljs-number">3</span>,<span class="hljs-number">5</span>}
});  <span class="hljs-comment">// =&gt; (2-1) + (5-3) = 3</span>

<span class="hljs-comment">// overlapping intervals</span>
Interval.sumIntervals(<span class="hljs-keyword">new</span> <span class="hljs-keyword">int</span>[][]{
  {<span class="hljs-number">1</span>,<span class="hljs-number">4</span>},{<span class="hljs-number">3</span>,<span class="hljs-number">6</span>},{<span class="hljs-number">2</span>,<span class="hljs-number">8</span>}
});  <span class="hljs-comment">// [1,8] =&gt; 7</span></code></pre>
<pre style="display: none;"><code class="language-C#"><span class="hljs-comment">// empty intervals</span>
Intervals.SumIntervals(<span class="hljs-keyword">new</span> (<span class="hljs-keyword">int</span>, <span class="hljs-keyword">int</span>)[]{ });  <span class="hljs-comment">// =&gt; 0</span>
Intervals.SumIntervals(<span class="hljs-keyword">new</span> (<span class="hljs-keyword">int</span>, <span class="hljs-keyword">int</span>)[]{ (<span class="hljs-number">2</span>, <span class="hljs-number">2</span>), (<span class="hljs-number">5</span>, <span class="hljs-number">5</span>)});  <span class="hljs-comment">// =&gt; 0</span>

<span class="hljs-comment">// disjoined intervals</span>
Intervals.SumIntervals(<span class="hljs-keyword">new</span> (<span class="hljs-keyword">int</span>, <span class="hljs-keyword">int</span>)[]{
  (<span class="hljs-number">1</span>, <span class="hljs-number">2</span>), (<span class="hljs-number">3</span>, <span class="hljs-number">5</span>)
});  <span class="hljs-comment">// =&gt; (2-1) + (5-3) = 3</span>

<span class="hljs-comment">// overlapping intervals</span>
Intervals.SumIntervals(<span class="hljs-keyword">new</span> (<span class="hljs-keyword">int</span>, <span class="hljs-keyword">int</span>)[]{
  (<span class="hljs-number">1</span>, <span class="hljs-number">4</span>), (<span class="hljs-number">3</span>, <span class="hljs-number">6</span>), (<span class="hljs-number">2</span>, <span class="hljs-number">8</span>)
});  <span class="hljs-comment">// (1,8) =&gt; 7</span></code></pre>
<pre style="display: none;"><code class="language-cpp">sum_intervals( {
   {<span class="hljs-number">1</span>,<span class="hljs-number">2</span>},
   {<span class="hljs-number">6</span>, <span class="hljs-number">10</span>},
   {<span class="hljs-number">11</span>, <span class="hljs-number">15</span>}
} ); <span class="hljs-comment">// =&gt; 9</span>

sum_intervals( {
   {<span class="hljs-number">1</span>,<span class="hljs-number">4</span>},
   {<span class="hljs-number">7</span>, <span class="hljs-number">10</span>},
   {<span class="hljs-number">3</span>, <span class="hljs-number">5</span>}
} ); <span class="hljs-comment">// =&gt; 7</span>

sum_intervals( {
   {<span class="hljs-number">1</span>,<span class="hljs-number">5</span>},
   {<span class="hljs-number">10</span>, <span class="hljs-number">20</span>},
   {<span class="hljs-number">1</span>, <span class="hljs-number">6</span>},
   {<span class="hljs-number">16</span>, <span class="hljs-number">19</span>},
   {<span class="hljs-number">5</span>, <span class="hljs-number">11</span>}
} ); <span class="hljs-comment">// =&gt; 19</span></code></pre>
<pre style="display: none;"><code class="language-c">sum_intervals((<span class="hljs-keyword">const</span> struct interval[]){
   {<span class="hljs-number">1</span>,<span class="hljs-number">2</span>},
   {<span class="hljs-number">6</span>, <span class="hljs-number">10</span>},
   {<span class="hljs-number">11</span>, <span class="hljs-number">15</span>}
}, <span class="hljs-number">3</span>); <span class="hljs-comment">/* =&gt; 9 */</span>

sum_intervals((<span class="hljs-keyword">const</span> struct interval[]){
   {<span class="hljs-number">1</span>,<span class="hljs-number">4</span>},
   {<span class="hljs-number">7</span>, <span class="hljs-number">10</span>},
   {<span class="hljs-number">3</span>, <span class="hljs-number">5</span>}
}, <span class="hljs-number">3</span>); <span class="hljs-comment">/* =&gt; 7 */</span>

sum_intervals((<span class="hljs-keyword">const</span> struct interval[]){
   {<span class="hljs-number">1</span>,<span class="hljs-number">5</span>},
   {<span class="hljs-number">10</span>, <span class="hljs-number">20</span>},
   {<span class="hljs-number">1</span>, <span class="hljs-number">6</span>},
   {<span class="hljs-number">16</span>, <span class="hljs-number">19</span>},
   {<span class="hljs-number">5</span>, <span class="hljs-number">11</span>}
}, <span class="hljs-number">5</span>); <span class="hljs-comment">/* =&gt; 19 */</span></code></pre>
<pre style="display: none;"><code class="language-nasm"><span class="hljs-symbol">v1:</span>
    <span class="hljs-built_in">dd</span>    <span class="hljs-number">1</span>,<span class="hljs-number">2</span>, \
          <span class="hljs-number">6</span>,<span class="hljs-number">10</span>, \
          <span class="hljs-number">11</span>,<span class="hljs-number">15</span>
<span class="hljs-symbol">v2:</span>
    <span class="hljs-built_in">dd</span>    <span class="hljs-number">1</span>,<span class="hljs-number">4</span>
    <span class="hljs-built_in">dd</span>    <span class="hljs-number">7</span>,<span class="hljs-number">10</span>
    <span class="hljs-built_in">dd</span>    <span class="hljs-number">3</span>,<span class="hljs-number">5</span>
<span class="hljs-symbol">v3:</span>
    <span class="hljs-built_in">dd</span>    <span class="hljs-number">1</span>,<span class="hljs-number">5</span>, <span class="hljs-number">10</span>,<span class="hljs-number">20</span>, <span class="hljs-number">1</span>,<span class="hljs-number">6</span>, <span class="hljs-number">16</span>,<span class="hljs-number">19</span>, <span class="hljs-number">5</span>,<span class="hljs-number">11</span>

    <span class="hljs-keyword">mov</span> <span class="hljs-built_in">rdi</span>, v1
    <span class="hljs-keyword">mov</span> <span class="hljs-built_in">rsi</span>, <span class="hljs-number">3</span>
    <span class="hljs-keyword">call</span> sumintvls    <span class="hljs-comment">; EAX &lt;- 9</span>

    <span class="hljs-keyword">mov</span> <span class="hljs-built_in">rdi</span>, v2
    <span class="hljs-keyword">mov</span> <span class="hljs-built_in">rsi</span>, <span class="hljs-number">3</span>
    <span class="hljs-keyword">call</span> sumintvls    <span class="hljs-comment">; EAX &lt;- 7</span>

    <span class="hljs-keyword">mov</span> <span class="hljs-built_in">rdi</span>, v3
    <span class="hljs-keyword">mov</span> <span class="hljs-built_in">rsi</span>, <span class="hljs-number">5</span>
    <span class="hljs-keyword">call</span> sumintvls    <span class="hljs-comment">; EAX &lt;- 19</span></code></pre>
<pre style="display: none;"><code class="language-clojure">(<span class="hljs-name">sum-intervals</span> [ [<span class="hljs-number">1</span> <span class="hljs-number">5</span>] [<span class="hljs-number">10</span> <span class="hljs-number">15</span>] [<span class="hljs-number">-1</span> <span class="hljs-number">3</span>] ]) <span class="hljs-comment">; =&gt; 11</span>

(<span class="hljs-name">sum-intervals</span> [ [<span class="hljs-number">1</span> <span class="hljs-number">5</span>] ]) <span class="hljs-comment">; =&gt; 4 </span></code></pre>
<pre style="display: none;"><code class="language-typescript">sumOfIntervals([[<span class="hljs-number">1</span>, <span class="hljs-number">5</span>], [<span class="hljs-number">10</span>, <span class="hljs-number">15</span>], [<span class="hljs-number">-1</span>, <span class="hljs-number">3</span>]]) <span class="hljs-comment">// =&gt; 11</span>

sumOfIntervals([[<span class="hljs-number">1</span>, <span class="hljs-number">5</span>]]) <span class="hljs-comment">// =&gt; 4 </span></code></pre>
<pre style="display: none;"><code class="language-crystal">sum_of_intervals([{<span class="hljs-number">1</span>, <span class="hljs-number">5</span>}, {<span class="hljs-number">10</span>, <span class="hljs-number">15</span>}, {-<span class="hljs-number">1</span>, <span class="hljs-number">3</span>}]) <span class="hljs-comment"># =&gt; 11</span>

sum_of_intervals([{<span class="hljs-number">1</span>, <span class="hljs-number">5</span>}]) <span class="hljs-comment"># =&gt; 4 </span></code></pre>
<pre style="display: none;"><code class="language-elixir">sum_of_intervals([{<span class="hljs-number">1</span>, <span class="hljs-number">5</span>}, {<span class="hljs-number">10</span>, <span class="hljs-number">15</span>}, {<span class="hljs-number">-1</span>, <span class="hljs-number">3</span>}]) <span class="hljs-comment"># =&gt; 11</span>

sum_of_intervals([{<span class="hljs-number">1</span>, <span class="hljs-number">5</span>}]) <span class="hljs-comment"># =&gt; 4 </span></code></pre>
<pre style="display: none;"><code class="language-haskell"><span class="hljs-title">sumOfIntervals</span>([(<span class="hljs-number">1</span>, <span class="hljs-number">5</span>}, (<span class="hljs-number">10</span>, <span class="hljs-number">15</span>}, (<span class="hljs-number">-1</span>, <span class="hljs-number">3</span>)]) <span class="hljs-comment">-- =&gt; 11</span>

<span class="hljs-title">sumOfIntervals</span>([(<span class="hljs-number">1</span>, <span class="hljs-number">5</span>)]) <span class="hljs-comment">-- =&gt; 4 </span></code></pre>
<pre style="display: none;"><code class="language-julia">sumofintervals([(<span class="hljs-number">1</span>, <span class="hljs-number">5</span>}, (<span class="hljs-number">10</span>, <span class="hljs-number">15</span>}, (-<span class="hljs-number">1</span>, <span class="hljs-number">3</span>)]) <span class="hljs-comment"># =&gt; 11</span>

sumofintervals([(<span class="hljs-number">1</span>, <span class="hljs-number">5</span>)]) <span class="hljs-comment"># =&gt; 4 </span></code></pre>
<pre style="display: none;"><code class="language-dart">sumOfIntervals([[<span class="hljs-number">1</span>, <span class="hljs-number">5</span>], [<span class="hljs-number">10</span>, <span class="hljs-number">15</span>], [<span class="hljs-number">-1</span>, <span class="hljs-number">3</span>]]) <span class="hljs-comment">// =&gt; 11</span>

sumOfIntervals([[<span class="hljs-number">1</span>, <span class="hljs-number">5</span>]]) <span class="hljs-comment">// =&gt; 4 </span></code></pre>
<pre style="display: none;"><code class="language-racket">(<span class="hljs-name">sum-intervals</span> (<span class="hljs-name"><span class="hljs-builtin-name">list</span></span> (<span class="hljs-name"><span class="hljs-builtin-name">list</span></span> <span class="hljs-number">-1</span> <span class="hljs-number">21</span>) (<span class="hljs-name"><span class="hljs-builtin-name">list</span></span> <span class="hljs-number">-59</span> <span class="hljs-number">-45</span>))) <span class="hljs-comment">;; 36</span>
(<span class="hljs-name">sum-intervals</span> (<span class="hljs-name"><span class="hljs-builtin-name">list</span></span> (<span class="hljs-name"><span class="hljs-builtin-name">list</span></span> <span class="hljs-number">1</span> <span class="hljs-number">5</span>) (<span class="hljs-name"><span class="hljs-builtin-name">list</span></span> <span class="hljs-number">10</span> <span class="hljs-number">15</span>) (<span class="hljs-name"><span class="hljs-builtin-name">list</span></span> <span class="hljs-number">-1</span> <span class="hljs-number">3</span>))) <span class="hljs-comment">;; 11</span>
(<span class="hljs-name">sum-intervals</span> (<span class="hljs-name"><span class="hljs-builtin-name">list</span></span> (<span class="hljs-name"><span class="hljs-builtin-name">list</span></span> <span class="hljs-number">1</span> <span class="hljs-number">2</span>) (<span class="hljs-name"><span class="hljs-builtin-name">list</span></span> <span class="hljs-number">6</span> <span class="hljs-number">10</span>) (<span class="hljs-name"><span class="hljs-builtin-name">list</span></span> <span class="hljs-number">11</span> <span class="hljs-number">15</span>))) <span class="hljs-comment">;; 36</span></code></pre>

### Solution