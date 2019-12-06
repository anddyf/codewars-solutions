### Problem:
<p>#Fold an array</p>
<p>In this kata you have to write a method that folds a given array of integers by the middle x-times.</p>
<p>An example says more than thousand words:</p>
<pre><code>Fold 1-times:
[1,2,3,4,5] -&gt; [6,6,3]

A little visualization (NOT for the algorithm but for the idea of folding):

 Step 1         Step 2        Step 3       Step 4       Step5
                     5/           5|         5\          
                    4/            4|          4\      
1 2 3 4 5      1 2 3/         1 2 3|       1 2 3\       6 6 3
----*----      ----*          ----*        ----*        ----*


Fold 2-times:
[1,2,3,4,5] -&gt; [9,6]</code></pre><p>As you see, if the count of numbers is odd, the middle number will stay. Otherwise the fold-point is between the middle-numbers, so all numbers would be added in a way.</p>
<p>The array will always contain numbers and will never be null. The parameter runs will always be a positive integer greater than 0 and says how many runs of folding your method has to do.</p>
<p>If an array with one element is folded, it stays as the same array.</p>
<p>The input array should not be modified!</p>
<p>Have fun coding it and please don&apos;t forget to vote and rank this kata! :-) </p>
<p>I have created other katas. Have a look if you like coding and challenges.</p>

### Solution