### Problem:
<p>You have a positive number <code>n</code> consisting of digits. 
You can do <strong>at most</strong> one operation: 
Choosing the index of a digit in the number, remove this digit at that index and 
insert it back to another or at the same place in the number in order to find the smallest number you can get.</p>
<p>#Task:
Return an array or a tuple or a string depending on the language (see &quot;Sample Tests&quot;) 
with</p>
<ul>
<li>1) the smallest number you got</li>
<li>2) the index <code>i</code> of the digit <code>d</code> you took, <code>i</code> as small as possible</li>
<li>3) the index <code>j</code> (as small as possible) where you insert this digit <code>d</code> to have the smallest number.</li>
</ul>
<p>Example:</p>
<pre><code>smallest(261235) --&gt; [126235, 2, 0] or (126235, 2, 0) or &quot;126235, 2, 0&quot;</code></pre><p><code>126235</code> is the smallest number gotten by taking <code>1</code> at index <code>2</code> and putting it at index <code>0</code></p>
<pre><code>smallest(209917) --&gt; [29917, 0, 1] or ...

[29917, 1, 0] could be a solution too but index `i` in [29917, 1, 0] is greater than 
index `i` in [29917, 0, 1].</code></pre><p><code>29917</code> is the smallest number gotten by taking <code>2</code> at index <code>0</code> and putting it at index <code>1</code>
which gave <code>029917</code> which is the number <code>29917</code>.</p>
<pre><code>smallest(1000000) --&gt; [1, 0, 6] or ...</code></pre><h1 id="note">Note</h1>
<p>Have a look at &quot;Sample Tests&quot; to see the input and output in each language</p>

### Solution