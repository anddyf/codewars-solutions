### Problem:
<p>Create a method <strong>partition</strong> that accepts a list and a method/block. It should return two arrays: the first, with all the elements for which the given block returned true, and the second for the remaining elements.</p>
<p>Here&apos;s a simple Ruby example:</p>
<pre><code>animals = [&quot;cat&quot;, &quot;dog&quot;, &quot;duck&quot;, &quot;cow&quot;, &quot;donkey&quot;]
partition(animals){|animal| animal.size == 3}
    #=&gt; [[&quot;cat&quot;, &quot;dog&quot;, &quot;cow&quot;], [&quot;duck&quot;, &quot;donkey&quot;]]</code></pre><p>The equivalent in Python would be:</p>
<pre><code>animals = [&apos;cat&apos;, &apos;dog&apos;, &apos;duck&apos;, &apos;cow&apos;, &apos;donkey&apos;]
partition(animals, lambda x: len(x) == 3)
    # ([&apos;cat&apos;, &apos;dog&apos;, &apos;cow&apos;], [&apos;duck&apos;, &apos;donkey&apos;])</code></pre><p>If you need help, here&apos;s a reference:</p>
<p><a href="http://www.rubycuts.com/enum-partition" target="_blank">http://www.rubycuts.com/enum-partition</a></p>

### Solution