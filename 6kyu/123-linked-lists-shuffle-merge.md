### Problem:
<p>Linked Lists - Shuffle Merge</p>
<p>Write a ShuffleMerge() function that takes two lists and merges their nodes together to make one list, taking nodes alternately between the two lists. So ShuffleMerge() with <code>1 -&gt; 2 -&gt; 3 -&gt; null</code> and <code>7 -&gt; 13 -&gt; 1 -&gt; null</code> should yield <code>1 -&gt; 7 -&gt; 2 -&gt; 13 -&gt; 3 -&gt; 1 -&gt; null</code>. If either list runs out, all the nodes should be taken from the other list. ShuffleMerge() should return the new list. The solution depends on being able to move nodes to the end of a list.</p>
<pre><code class="language-javascript"><span class="hljs-keyword">var</span> first = <span class="hljs-number">3</span> -&gt; <span class="hljs-number">2</span> -&gt; <span class="hljs-number">8</span> -&gt; <span class="hljs-literal">null</span>
<span class="hljs-keyword">var</span> second = <span class="hljs-number">5</span> -&gt; <span class="hljs-number">6</span> -&gt; <span class="hljs-number">1</span> -&gt; <span class="hljs-number">9</span> -&gt; <span class="hljs-number">11</span> -&gt; <span class="hljs-literal">null</span>
shuffleMerge(first, second) === <span class="hljs-number">3</span> -&gt; <span class="hljs-number">5</span> -&gt; <span class="hljs-number">2</span> -&gt; <span class="hljs-number">6</span> -&gt; <span class="hljs-number">8</span> -&gt; <span class="hljs-number">1</span> -&gt; <span class="hljs-number">9</span> -&gt; <span class="hljs-number">11</span> -&gt; <span class="hljs-literal">null</span></code></pre>
<p>If one of the argument lists is null, the returned list should be the other linked list (even if it is also null). No errors need to be thrown in ShuffleMerge().</p>
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