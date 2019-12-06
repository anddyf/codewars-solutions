### Problem:
<p>In English and programming, groups can be made using symbols such as <code>()</code> and <code>{}</code> that change meaning. However, these groups must be closed in the correct order to maintain correct syntax.</p>
<p>Your job in this kata will be to make a program that checks a string for correct grouping. For instance, the following groups are done correctly:</p>
<pre><code>({})
[[]()]
[{()}]</code></pre><p>The next are done incorrectly:</p>
<pre><code>{(})
([]
[])</code></pre><p>A correct string cannot close groups in the wrong order, open a group but fail to close it, or close a group before it is opened.</p>
<p>Your function will take an input string that may contain any of the symbols <code>()</code>, <code>{}</code> or <code>[]</code> to create groups.</p>
<p>It should return <code>True</code> if the string is empty or otherwise grouped correctly, or <code>False</code> if it is grouped incorrectly.</p>

### Solution