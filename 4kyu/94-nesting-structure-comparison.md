### Problem:
<p>Complete the function/method (depending on the language) to return <code>true</code>/<code>True</code> when its argument is an array that has the same nesting structure as the first array.</p>
<p>For example:</p>
<pre><code class="language-javascript"> <span class="hljs-comment">// should return true</span>
[ <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span> ].sameStructureAs( [ <span class="hljs-number">2</span>, <span class="hljs-number">2</span>, <span class="hljs-number">2</span> ] );          
[ <span class="hljs-number">1</span>, [ <span class="hljs-number">1</span>, <span class="hljs-number">1</span> ] ].sameStructureAs( [ <span class="hljs-number">2</span>, [ <span class="hljs-number">2</span>, <span class="hljs-number">2</span> ] ] );  

 <span class="hljs-comment">// should return false </span>
[ <span class="hljs-number">1</span>, [ <span class="hljs-number">1</span>, <span class="hljs-number">1</span> ] ].sameStructureAs( [ [ <span class="hljs-number">2</span>, <span class="hljs-number">2</span> ], <span class="hljs-number">2</span> ] );  
[ <span class="hljs-number">1</span>, [ <span class="hljs-number">1</span>, <span class="hljs-number">1</span> ] ].sameStructureAs( [ [ <span class="hljs-number">2</span> ], <span class="hljs-number">2</span> ] );  

<span class="hljs-comment">// should return true</span>
[ [ [ ], [ ] ] ].sameStructureAs( [ [ [ ], [ ] ] ] ); 

<span class="hljs-comment">// should return false</span>
[ [ [ ], [ ] ] ].sameStructureAs( [ [ <span class="hljs-number">1</span>, <span class="hljs-number">1</span> ] ] );     </code></pre>
<pre style="display: none;"><code class="language-php">same_structure_as([<span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>], [<span class="hljs-number">2</span>, <span class="hljs-number">2</span>, <span class="hljs-number">2</span>]); <span class="hljs-comment">// =&gt; true</span>
same_structure_as([<span class="hljs-number">1</span>, [<span class="hljs-number">1</span>, <span class="hljs-number">1</span>]], [<span class="hljs-number">2</span>, [<span class="hljs-number">2</span>, <span class="hljs-number">2</span>]]); <span class="hljs-comment">// =&gt; true</span>
same_structure_as([<span class="hljs-number">1</span>, [<span class="hljs-number">1</span>, <span class="hljs-number">1</span>]], [[<span class="hljs-number">2</span>, <span class="hljs-number">2</span>], <span class="hljs-number">2</span>]); <span class="hljs-comment">// =&gt; false</span>
same_structure_as([<span class="hljs-number">1</span>, [<span class="hljs-number">1</span>, <span class="hljs-number">1</span>]], [[<span class="hljs-number">2</span>], <span class="hljs-number">2</span>]); <span class="hljs-comment">// =&gt; false</span>
same_structure_as([[[], []]], [[[], []]]); <span class="hljs-comment">// =&gt; true</span>
same_structure_as([[[], []]], [[<span class="hljs-number">1</span>, <span class="hljs-number">1</span>]]); <span class="hljs-comment">// =&gt; false</span></code></pre>
<pre style="display: none;"><code class="language-ruby"><span class="hljs-comment"># should return true</span>
[ <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span> ].same_structure_as( [ <span class="hljs-number">2</span>, <span class="hljs-number">2</span>, <span class="hljs-number">2</span> ] )
[ <span class="hljs-number">1</span>, [ <span class="hljs-number">1</span>, <span class="hljs-number">1</span> ] ].same_structure_as( [ <span class="hljs-number">2</span>, [ <span class="hljs-number">2</span>, <span class="hljs-number">2</span> ] ] )

<span class="hljs-comment"># should return false </span>
[ <span class="hljs-number">1</span>, [ <span class="hljs-number">1</span>, <span class="hljs-number">1</span> ] ].same_structure_as( [ [ <span class="hljs-number">2</span>, <span class="hljs-number">2</span> ], <span class="hljs-number">2</span> ] )
[ <span class="hljs-number">1</span>, [ <span class="hljs-number">1</span>, <span class="hljs-number">1</span> ] ].same_structure_as( [ [ <span class="hljs-number">2</span> ], <span class="hljs-number">2</span> ] )

<span class="hljs-comment"># should return true</span>
[ [ [ ], [ ] ] ].same_structure_as( [ [ [ ], [ ] ] ] ); 

<span class="hljs-comment"># should return false</span>
[ [ [ ], [ ] ] ].same_structure_as( [ [ <span class="hljs-number">1</span>, <span class="hljs-number">1</span> ] ] )   </code></pre>
<pre style="display: none;"><code class="language-python"><span class="hljs-comment"># should return True</span>
same_structure_as([ <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span> ], [ <span class="hljs-number">2</span>, <span class="hljs-number">2</span>, <span class="hljs-number">2</span> ] )
same_structure_as([ <span class="hljs-number">1</span>, [ <span class="hljs-number">1</span>, <span class="hljs-number">1</span> ] ], [ <span class="hljs-number">2</span>, [ <span class="hljs-number">2</span>, <span class="hljs-number">2</span> ] ] )

<span class="hljs-comment"># should return False </span>
same_structure_as([ <span class="hljs-number">1</span>, [ <span class="hljs-number">1</span>, <span class="hljs-number">1</span> ] ], [ [ <span class="hljs-number">2</span>, <span class="hljs-number">2</span> ], <span class="hljs-number">2</span> ] )
same_structure_as([ <span class="hljs-number">1</span>, [ <span class="hljs-number">1</span>, <span class="hljs-number">1</span> ] ], [ [ <span class="hljs-number">2</span> ], <span class="hljs-number">2</span> ] )

<span class="hljs-comment"># should return True</span>
same_structure_as([ [ [ ], [ ] ] ], [ [ [ ], [ ] ] ] )

<span class="hljs-comment"># should return False</span>
same_structure_as([ [ [ ], [ ] ] ], [ [ <span class="hljs-number">1</span>, <span class="hljs-number">1</span> ] ] )</code></pre>
<p>For your convenience, there is already a function &apos;isArray(o)&apos; declared and defined that returns true if its argument is an array, false otherwise.</p>

### Solution