### Problem:
<blockquote>
<p>When no more interesting kata can be resolved, I just choose to create the new kata, to solve their own, to enjoy the process  --myjinxin2015 said</p>
</blockquote>
<h1 id="description">Description:</h1>
<p> Given two array of integers(<code>arr1</code>,<code>arr2</code>). Your task is going to find a pair of numbers(an element in arr1, and another element in arr2), their difference is as big as possible(absolute value); Again, you should to find a pair of numbers, their difference is as small as possible. Return the maximum and minimum difference values by an array: <code>[  max difference,  min difference  ]</code></p>
<p> For example:</p>
<pre><code> Given arr1 = [3,10,5], arr2 = [20,7,15,8]
 should return [17,2] because 20 - 3 = 17, 10 - 8 = 2</code></pre><h1 id="note">Note:</h1>
<ul>
<li>arr1 and arr2 contains only integers(positive, negative or 0);</li>
<li>arr1 and arr2 may have different lengths, they always has at least one element;</li>
<li>All inputs are valid.</li>
<li>This is a simple version, if you want some challenges, <a href="https://www.codewars.com/kata/583c592928a0c0449d000099" target="_blank">try the challenge version</a>.</li>
</ul>
<h1 id="some-examples">Some Examples</h1>
<pre><code> maxAndMin([3,10,5],[20,7,15,8]) === [17,2]
 maxAndMin([3],[20]) === [17,17]
 maxAndMin([3,10,5],[3,10,5]) === [7,0]
 maxAndMin([1,2,3,4,5],[6,7,8,9,10]) === [9,1]</code></pre>
### Solution