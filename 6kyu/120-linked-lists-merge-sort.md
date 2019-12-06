### Problem:
<p>Linked Lists - Merge Sort</p>
<p>Write a MergeSort() function which recursively sorts a list in ascending order. Note that this problem requires recursion. Given FrontBackSplit() and SortedMerge(), you can write a classic recursive MergeSort(). Split the list into two smaller lists, recursively sort those lists, and finally merge the two sorted lists together into a single sorted list. Return the list.</p>
<pre><code class="language-javascript"><span class="hljs-keyword">var</span> list = <span class="hljs-number">4</span> -&gt; <span class="hljs-number">2</span> -&gt; <span class="hljs-number">1</span> -&gt; <span class="hljs-number">3</span> -&gt; <span class="hljs-number">8</span> -&gt; <span class="hljs-number">9</span> -&gt; <span class="hljs-literal">null</span>
mergeSort(list) === <span class="hljs-number">1</span> -&gt; <span class="hljs-number">2</span> -&gt; <span class="hljs-number">3</span> -&gt; <span class="hljs-number">4</span> -&gt; <span class="hljs-number">8</span> -&gt; <span class="hljs-number">9</span> -&gt; <span class="hljs-literal">null</span></code></pre>
<p><a href="http://www.codewars.com/kata/linked-lists-front-back-split" target="_blank">FrontBackSplit()</a> and <a href="http://www.codewars.com/kata/linked-lists-sorted-merge" target="_blank">SortedMerge()</a> need not be redefined. You may call these functions in your solution.</p>
<p>These function names will depend on the accepted naming conventions of language you are using. In Python, FrontBackSplit() is actually front_back_split(). In JavaScript, it is frontBackSplit(), etc.</p>
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