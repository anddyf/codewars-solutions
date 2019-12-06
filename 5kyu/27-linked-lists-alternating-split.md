### Problem:
<p>Linked Lists - Alternating Split</p>
<p>Write an AlternatingSplit() function that takes one list and divides up its nodes to make two smaller lists. The sublists should be made from alternating elements in the original list. So if the original list is <code>a -&gt; b -&gt; a -&gt; b -&gt; a -&gt; null</code> then one sublist should be <code>a -&gt; a -&gt; a -&gt; null</code> and the other should be <code>b -&gt; b -&gt; null</code>.</p>
<p>###JavaScript</p>
<pre><code class="language-javascript"><span class="hljs-keyword">var</span> list = <span class="hljs-number">1</span> -&gt; <span class="hljs-number">2</span> -&gt; <span class="hljs-number">3</span> -&gt; <span class="hljs-number">4</span> -&gt; <span class="hljs-number">5</span> -&gt; <span class="hljs-literal">null</span>
alternatingSplit(list).first === <span class="hljs-number">1</span> -&gt; <span class="hljs-number">3</span> -&gt; <span class="hljs-number">5</span> -&gt; <span class="hljs-literal">null</span>
alternatingSplit(list).second === <span class="hljs-number">2</span> -&gt; <span class="hljs-number">4</span> -&gt; <span class="hljs-literal">null</span></code></pre>
<p>###Python</p>
<pre><code class="language-python">list = 1 -&gt; 2 -&gt; 3 -&gt; 4 -&gt; 5 -&gt; None
alternating_split(list).first == 1 -&gt; 3 -&gt; 5 -&gt; None
alternating_split(list).second == 2 -&gt; 4 -&gt; None</code></pre>
<p>###Ruby</p>
<pre><code class="language-ruby">list = <span class="hljs-number">1</span> -&gt; <span class="hljs-number">2</span> -&gt; <span class="hljs-number">3</span> -&gt; <span class="hljs-number">4</span> -&gt; <span class="hljs-number">5</span> -&gt; <span class="hljs-literal">nil</span>
alternating_split(list).first == <span class="hljs-number">1</span> -&gt; <span class="hljs-number">3</span> -&gt; <span class="hljs-number">5</span> -&gt; <span class="hljs-literal">nil</span>
alternating_split(list).second == <span class="hljs-number">2</span> -&gt; <span class="hljs-number">4</span> -&gt; <span class="hljs-literal">nil</span></code></pre>
<p>For simplicity, we use a Context object to store and return the state of the two linked lists. A Context object containing the two mutated lists should be returned by AlternatingSplit().</p>
<p>If the passed in head node is null/None/nil or a single node, throw an error.</p>
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