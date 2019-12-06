### Problem:
<h1 id="task">Task</h1>
<p>Given a person, trace their ancestory and create a <a href="https://en.wikipedia.org/wiki/Pedigree_chart" target="_blank">Pedigree Chart</a></p>
<p>Return the chart as a string.</p>
<h1 id="example">Example</h1>
<p>Pedigree Chart for: XXXXX</p>
<pre><code>                                           |16 _______  
                                |08 _______
                                |          |17 _______
                     |04 _______      
                     |          |          |18 _______
                     |          |09 _______
                     |                     |19 _______
          |02 _______       
          |          |                     |20 _______
          |          |          |10 _______
          |          |          |          |21 _______
          |          |05 _______
          |                     |          |22 _______
          |                     |11 _______
          |                                |23 _______
01 XXXXX
          |                                |24 _______
          |                     |12 _______
          |                     |          |25 _______
          |          |06 _______      
          |          |          |          |26 _______
          |          |          |13 _______
          |          |                     |27 _______
          |03 _______           
                     |                     |28 _______
                     |          |14 _______
                     |          |          |29 _______
                     |07 _______
                                |          |30 _______
                                |15 _______
                                           |31 _______</code></pre><h1 id="data">Data</h1>
<p>There is a pre-loaded population of related and/or unrelated people. 
Useful attributes of each <code>Person</code> are exposed by  methods:</p>
<p><em>Pseudo-code</em></p>
<pre><code class="language-java"><span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">Person</span> </span>{
    <span class="hljs-function">String <span class="hljs-title">sex</span><span class="hljs-params">()</span> <span class="hljs-comment">// &quot;M&quot; or &quot;F&quot;</span>
    String <span class="hljs-title">name</span><span class="hljs-params">()</span>
    List&lt;Person&gt; <span class="hljs-title">parents</span><span class="hljs-params">()</span>
}</span></code></pre>
<pre style="display: none;"><code class="language-python">class Person {
    String sex() // &quot;M&quot; or &quot;F&quot;
    String name()
    List&lt;Person&gt; parents()
}</code></pre>
<pre style="display: none;"><code class="language-csharp"><span class="hljs-keyword">class</span> <span class="hljs-title">Person</span> 
{
    <span class="hljs-function"><span class="hljs-keyword">string</span> <span class="hljs-title">Sex</span>(<span class="hljs-params"></span>) <span class="hljs-comment">// &quot;M&quot; or &quot;F&quot;</span>
    <span class="hljs-keyword">string</span> <span class="hljs-title">Name</span>(<span class="hljs-params"></span>)
    ImmutableList&lt;Person&gt; <span class="hljs-title">Parents</span>(<span class="hljs-params"></span>)
}</span></code></pre>
<h1 id="notes">Notes</h1>
<ul>
<li>Always create a chart of 31 people. If you are unable to fill in a name then write underscores <code>_______</code> instead, as shown in the example</li>
</ul>
<ul>
<li>Only go 4 generations deep. This Kata is only making a single chart.</li>
</ul>
<ul>
<li>With the exception of Person 01 all chart <em>even numbers are male</em> and all chart <em>odd numbers are female</em>. e.g. 06/07 are father/mother of 03.</li>
</ul>
<ul>
<li>The chart returned must be a <code>\n</code> separated string, with no trailing spaces on each line. Please refer to test example for guidance.</li>
</ul>

### Solution