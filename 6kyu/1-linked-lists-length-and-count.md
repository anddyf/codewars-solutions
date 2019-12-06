### Problem:
<p>Linked Lists - Length &amp; Count</p>
<p>Implement Length() to count the number of nodes in a linked list.<br></p>
<pre><code class="language-javascript">length(<span class="hljs-literal">null</span>) =&gt; <span class="hljs-number">0</span>
length(<span class="hljs-number">1</span> -&gt; <span class="hljs-number">2</span> -&gt; <span class="hljs-number">3</span> -&gt; <span class="hljs-literal">null</span>) =&gt; <span class="hljs-number">3</span></code></pre>
<pre style="display: none;"><code class="language-csharp">Node.Length(nullptr) =&gt; <span class="hljs-number">0</span>
Node.Length(<span class="hljs-number">1</span> -&gt; <span class="hljs-number">2</span> -&gt; <span class="hljs-number">3</span> -&gt; nullptr) =&gt; <span class="hljs-number">3</span></code></pre>
<pre style="display: none;"><code class="language-c++">length(null) =&gt; <span class="hljs-number">0</span>
length(<span class="hljs-number">1</span> -&gt; <span class="hljs-number">2</span> -&gt; <span class="hljs-number">3</span> -&gt; null) =&gt; <span class="hljs-number">3</span></code></pre>
<p>Implement Count() to count the occurrences of an integer in a linked list.</p>
<pre><code class="language-javascript">count(<span class="hljs-literal">null</span>, <span class="hljs-number">1</span>) =&gt; <span class="hljs-number">0</span>
count(<span class="hljs-number">1</span> -&gt; <span class="hljs-number">2</span> -&gt; <span class="hljs-number">3</span> -&gt; <span class="hljs-literal">null</span>, <span class="hljs-number">1</span>) =&gt; <span class="hljs-number">1</span>
count(<span class="hljs-number">1</span> -&gt; <span class="hljs-number">1</span> -&gt; <span class="hljs-number">1</span> -&gt; <span class="hljs-number">2</span> -&gt; <span class="hljs-number">2</span> -&gt; <span class="hljs-number">2</span> -&gt; <span class="hljs-number">2</span> -&gt; <span class="hljs-number">3</span> -&gt; <span class="hljs-number">3</span> -&gt; <span class="hljs-literal">null</span>, <span class="hljs-number">2</span>) =&gt; <span class="hljs-number">4</span></code></pre>
<pre style="display: none;"><code class="language-csharp">Node.Count(<span class="hljs-literal">null</span>, <span class="hljs-keyword">value</span> =&gt; <span class="hljs-keyword">value</span> == <span class="hljs-number">1</span>) =&gt; <span class="hljs-number">0</span>
Node.Count(<span class="hljs-number">1</span> -&gt; <span class="hljs-number">3</span> -&gt; <span class="hljs-number">5</span> -&gt; <span class="hljs-number">6</span>, <span class="hljs-keyword">value</span> =&gt; <span class="hljs-keyword">value</span> % <span class="hljs-number">2</span> != <span class="hljs-number">0</span>) =&gt; <span class="hljs-number">3</span></code></pre>
<pre style="display: none;"><code class="language-c++">count(null, <span class="hljs-number">1</span>) =&gt; <span class="hljs-number">0</span>
count(<span class="hljs-number">1</span> -&gt; <span class="hljs-number">2</span> -&gt; <span class="hljs-number">3</span> -&gt; <span class="hljs-literal">nullptr</span>, <span class="hljs-number">1</span>) =&gt; <span class="hljs-number">1</span>
count(<span class="hljs-number">1</span> -&gt; <span class="hljs-number">1</span> -&gt; <span class="hljs-number">1</span> -&gt; <span class="hljs-number">2</span> -&gt; <span class="hljs-number">2</span> -&gt; <span class="hljs-number">2</span> -&gt; <span class="hljs-number">2</span> -&gt; <span class="hljs-number">3</span> -&gt; <span class="hljs-number">3</span> -&gt; <span class="hljs-literal">nullptr</span>, <span class="hljs-number">2</span>) =&gt; <span class="hljs-number">4</span></code></pre>
<p>I&apos;ve decided to bundle these two functions within the same Kata since they are both very similar.</p>
<p>The <code>push()</code>/<code>Push()</code> and <code>buildOneTwoThree()</code>/<code>BuildOneTwoThree()</code> functions do not need to be redefined.</p>
<p>Related Kata in order of expected completion (increasing difficulty):<br>
 <a href="http://www.codewars.com/kata/linked-lists-push-and-buildonetwothree" target="_blank">Linked Lists - Push &amp; BuildOneTwoThree</a><br>
 <a href="http://www.codewars.com/kata/linked-lists-length-and-count" target="_blank">Linked Lists - Length &amp; Count</a><br>
 <a href="http://www.codewars.com/kata/linked-lists-get-nth-node" target="_blank">Linked Lists - Get Nth Node</a><br>
<a href="http://www.codewars.com/kata/linked-lists-insert-nth-node" target="_blank">Linked Lists - Insert Nth Node</a><br>
<a href="http://www.codewars.com/kata/linked-lists-sorted-insert" target="_blank">Linked Lists - Sorted Insert</a><br>
<a href="http://www.codewars.com/kata/linked-lists-insert-sort" target="_blank">Linked Lists - Insert Sort</a><br>
<a href="http://www.codewars.com/kata/linked-lists-append" target="_blank">Linked Lists - Append</a><br>
<a href="http://www.codewars.com/kata/linked-lists-remove-duplicates" target="_blank">Linked Lists - Remove Duplicates</a><br>
<a href="http://www.codewars.com/kata/linked-lists-move-node" target="_blank">Linked Lists - Move Node</a><br>
<a href="http://www.codewars.com/kata/linked-lists-move-node-in-place" target="_blank">Linked Lists - Move Node In-place</a><br>
<a href="http://www.codewars.com/kata/linked-lists-alternating-split" target="_blank">Linked Lists - Alternating Split</a><br>
<a href="http://www.codewars.com/kata/linked-lists-front-back-split" target="_blank">Linked Lists - Front Back Split</a><br>
<a href="http://www.codewars.com/kata/linked-lists-shuffle-merge" target="_blank">Linked Lists - Shuffle Merge</a><br>
<a href="http://www.codewars.com/kata/linked-lists-sorted-merge" target="_blank">Linked Lists - Sorted Merge</a><br>
<a href="http://www.codewars.com/kata/linked-lists-merge-sort" target="_blank">Linked Lists - Merge Sort</a><br>
<a href="http://www.codewars.com/kata/linked-lists-sorted-intersect" target="_blank">Linked Lists - Sorted Intersect</a><br>
<a href="http://www.codewars.com/kata/linked-lists-iterative-reverse" target="_blank">Linked Lists - Iterative Reverse</a><br>
<a href="http://www.codewars.com/kata/linked-lists-recursive-reverse" target="_blank">Linked Lists - Recursive Reverse</a><br></p>
<p>Inspired by Stanford Professor Nick Parlante&apos;s excellent <a href="http://cslibrary.stanford.edu/103/LinkedListBasics.pdf" target="_blank">Linked List teachings.</a></p>

### Solution