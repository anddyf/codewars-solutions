### Problem:
<p>Linked Lists - Sorted Merge</p>
<p>Write a SortedMerge() function that takes two lists, each of which is sorted in increasing order, and merges the two together into one list which is in increasing order. SortedMerge() should return the new list. The new list should be made by splicing together the nodes of the first two lists. Ideally, SortedMerge() should only make one pass through each list. SortedMerge() is tricky to get right and it may be solved iteratively or recursively.</p>
<pre><code class="language-javascript"><span class="hljs-keyword">var</span> first = <span class="hljs-number">2</span> -&gt; <span class="hljs-number">4</span> -&gt; <span class="hljs-number">6</span> -&gt; <span class="hljs-number">7</span> -&gt; <span class="hljs-literal">null</span>
<span class="hljs-keyword">var</span> second = <span class="hljs-number">1</span> -&gt; <span class="hljs-number">3</span> -&gt; <span class="hljs-number">5</span> -&gt; <span class="hljs-number">6</span> -&gt; <span class="hljs-number">8</span> -&gt; <span class="hljs-literal">null</span>
sortedMerge(first, second) === <span class="hljs-number">1</span> -&gt; <span class="hljs-number">2</span> -&gt; <span class="hljs-number">3</span> -&gt; <span class="hljs-number">4</span> -&gt; <span class="hljs-number">5</span> -&gt; <span class="hljs-number">6</span> -&gt; <span class="hljs-number">6</span> -&gt; <span class="hljs-number">7</span> -&gt; <span class="hljs-number">8</span> -&gt; <span class="hljs-literal">null</span></code></pre>
<p>There are many cases to deal with: either &apos;first&apos; or &apos;second&apos; may be null/None/nil, during processing either &apos;first&apos; or &apos;second&apos; may run out first, and finally there&apos;s the problem of starting the result list empty, and building it up while going through &apos;first&apos; and &apos;second&apos;.</p>
<p>If one of the argument lists is null, the returned list should be the other linked list (even if it is also null). No errors need to be thrown in SortedMerge().</p>
<p>Try doing <a href="http://www.codewars.com/kata/linked-lists-shuffle-merge" target="_blank">Linked Lists - Shuffle Merge</a> before attempting this problem.</p>
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