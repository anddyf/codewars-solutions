### Problem:
<p>Implement a function which 
creates a <strong><a href="https://en.wikipedia.org/wiki/Radix_tree" target="_blank">radix tree</a></strong> (a space-optimized trie [prefix tree]) 
in which each node that is the only child is merged with its parent [unless a word from the input ends there]) 
from a given list of words 
using dictionaries (aka hash maps or hash tables) where:</p>
<ol>
<li>The dictionary keys are the nodes.</li>
<li>Leaf nodes are empty dictionaries.</li>
<li>The value for empty input is an empty dictionary.</li>
<li>Words are all lowercase or empty strings.</li>
<li>Words can contain duplicates.</li>
</ol>
<h3 id="examples">Examples:</h3>
<pre><code class="language-python"><span class="hljs-meta">&gt;&gt;&gt; </span>radix_tree()
{}

<span class="hljs-meta">&gt;&gt;&gt; </span>radix_tree(<span class="hljs-string">&quot;&quot;</span>)
{}

<span class="hljs-meta">&gt;&gt;&gt; </span>radix_tree(<span class="hljs-string">&quot;&quot;</span>, <span class="hljs-string">&quot;&quot;</span>)
{}

<span class="hljs-meta">&gt;&gt;&gt; </span>radix_tree(<span class="hljs-string">&quot;radix&quot;</span>, <span class="hljs-string">&quot;tree&quot;</span>)
{<span class="hljs-string">&quot;radix&quot;</span>: {}, <span class="hljs-string">&quot;tree&quot;</span>: {}}

<span class="hljs-meta">&gt;&gt;&gt; </span>radix_tree(<span class="hljs-string">&quot;ape&quot;</span>, <span class="hljs-string">&quot;apple&quot;</span>)
{<span class="hljs-string">&quot;ap&quot;</span>: {<span class="hljs-string">&quot;e&quot;</span>: {}, <span class="hljs-string">&quot;ple&quot;</span>: {}}}

<span class="hljs-meta">&gt;&gt;&gt; </span>radix_tree(<span class="hljs-string">&quot;apple&quot;</span>, <span class="hljs-string">&quot;applet&quot;</span>, <span class="hljs-string">&quot;apple&quot;</span>, <span class="hljs-string">&quot;ape&quot;</span>)
{<span class="hljs-string">&quot;ap&quot;</span>: {<span class="hljs-string">&quot;ple&quot;</span>: {<span class="hljs-string">&quot;t&quot;</span>: {}}, <span class="hljs-string">&quot;e&quot;</span>: {}}}

<span class="hljs-meta">&gt;&gt;&gt; </span>radix_tree(<span class="hljs-string">&quot;romane&quot;</span>, <span class="hljs-string">&quot;romanus&quot;</span>, <span class="hljs-string">&quot;romulus&quot;</span>, <span class="hljs-string">&quot;rubens&quot;</span>, <span class="hljs-string">&quot;rubicon&quot;</span>, <span class="hljs-string">&quot;rubicundus&quot;</span>)
{<span class="hljs-string">&quot;r&quot;</span>: {<span class="hljs-string">&quot;om&quot;</span>: {<span class="hljs-string">&quot;an&quot;</span>: {<span class="hljs-string">&quot;e&quot;</span>: {}, <span class="hljs-string">&quot;us&quot;</span>: {}}, <span class="hljs-string">&quot;ulus&quot;</span>: {}},
       <span class="hljs-string">&quot;ub&quot;</span>: {<span class="hljs-string">&quot;ens&quot;</span>: {}, <span class="hljs-string">&quot;ic&quot;</span>: {<span class="hljs-string">&quot;on&quot;</span>: {}, <span class="hljs-string">&quot;undus&quot;</span>: {}}}}}

<span class="hljs-meta">&gt;&gt;&gt; </span>radix_tree(<span class="hljs-string">&quot;appleabcd&quot;</span>, <span class="hljs-string">&quot;apple&quot;</span>)
{<span class="hljs-string">&quot;apple&quot;</span>: {<span class="hljs-string">&quot;abcd&quot;</span>: {}}}</code></pre>
<pre style="display: none;"><code class="language-javascript">&gt;&gt;&gt; radixTree()
{}

&gt;&gt;&gt; radixTree(<span class="hljs-string">&quot;&quot;</span>)
{}

&gt;&gt;&gt; radixTree(<span class="hljs-string">&quot;&quot;</span>, <span class="hljs-string">&quot;&quot;</span>)
{}

&gt;&gt;&gt; radixTree(<span class="hljs-string">&quot;radix&quot;</span>, <span class="hljs-string">&quot;tree&quot;</span>)
{ <span class="hljs-attr">radix</span>: {}, <span class="hljs-attr">tree</span>: {} }

&gt;&gt;&gt; radixTree(<span class="hljs-string">&quot;ape&quot;</span>, <span class="hljs-string">&quot;apple&quot;</span>)
{ <span class="hljs-attr">ap</span>: { <span class="hljs-attr">e</span>: {}, <span class="hljs-attr">ple</span>: {} } }

&gt;&gt;&gt; radixTree(<span class="hljs-string">&quot;apple&quot;</span>, <span class="hljs-string">&quot;applet&quot;</span>, <span class="hljs-string">&quot;apple&quot;</span>, <span class="hljs-string">&quot;ape&quot;</span>)
{ <span class="hljs-attr">ap</span>: { <span class="hljs-attr">ple</span>: { <span class="hljs-attr">t</span>: {} }, <span class="hljs-attr">e</span>: {} } }

&gt;&gt;&gt; radixTree(<span class="hljs-string">&quot;romane&quot;</span>, <span class="hljs-string">&quot;romanus&quot;</span>, <span class="hljs-string">&quot;romulus&quot;</span>, <span class="hljs-string">&quot;rubens&quot;</span>, <span class="hljs-string">&quot;rubicon&quot;</span>, <span class="hljs-string">&quot;rubicundus&quot;</span>)
{ <span class="hljs-attr">r</span>: { <span class="hljs-attr">om</span>: { <span class="hljs-attr">an</span>: { <span class="hljs-attr">e</span>: {}, <span class="hljs-attr">us</span>: {} }, <span class="hljs-attr">ulus</span>: {} }
     , <span class="hljs-attr">ub</span>: { <span class="hljs-attr">ens</span>: {}, <span class="hljs-attr">ic</span>: { <span class="hljs-attr">on</span>: {}, <span class="hljs-attr">undus</span>: {} } }
}    }

&gt;&gt;&gt; radixTree(<span class="hljs-string">&quot;appleabcd&quot;</span>, <span class="hljs-string">&quot;apple&quot;</span>)
{ <span class="hljs-attr">apple</span>: { <span class="hljs-attr">abcd</span>: {} } }</code></pre>

### Solution