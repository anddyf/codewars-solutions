### Problem:
<p>Linked Lists - Remove Duplicates</p>
<p>Write a RemoveDuplicates() function which takes a list sorted in increasing order and
deletes any duplicate nodes from the list. Ideally, the list should only be traversed once. The head of the resulting list should be returned.</p>
<pre><code class="language-javascript"><span class="hljs-keyword">var</span> list = <span class="hljs-number">1</span> -&gt; <span class="hljs-number">2</span> -&gt; <span class="hljs-number">3</span> -&gt; <span class="hljs-number">3</span> -&gt; <span class="hljs-number">4</span> -&gt; <span class="hljs-number">4</span> -&gt; <span class="hljs-number">5</span> -&gt; <span class="hljs-literal">null</span>
removeDuplicates(list) === <span class="hljs-number">1</span> -&gt; <span class="hljs-number">2</span> -&gt; <span class="hljs-number">3</span> -&gt; <span class="hljs-number">4</span> -&gt; <span class="hljs-number">5</span> -&gt; <span class="hljs-literal">null</span></code></pre>
<p>If the passed in list is null/None/nil, simply return null.</p>
<p>Note: Your solution is expected to work on long lists. Recursive solutions may fail due to stack size limitations.</p>
<p>The push() and buildOneTwoThree() functions need not be redefined.</p>
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