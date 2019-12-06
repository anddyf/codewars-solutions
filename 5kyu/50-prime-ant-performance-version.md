### Problem:
<h2 id="preface">Preface</h2>
<p>This is the performance version of the <a href="https://www.codewars.com/kata/prime-ant" target="_blank">Prime Ant</a> kata. If you did not complete it yet, you should begin there.</p>
<h2 id="description">Description</h2>
<p>The &quot;prime ant&quot; is an obstinate animal that navigates the integers and divides them until there are only primes left!</p>
<p>Initially, we have an infinite array <code>A</code> containing all the integers &gt;= 2 : <code>[2, 3, 4, 5, 6, ... ]</code></p>
<p>Let <code>p</code> be the position of the ant on the array. Initially, <code>p = 0</code> (the array is 0-indexed)</p>
<p>Each turn, the ant will move as follows:</p>
<ul>
<li>if <code>A[p]</code> is prime, the ant moves to the next position : <code>p += 1</code></li>
<li>else, if <code>A[p]</code> is a composite number, let <code>q</code> be its smallest divisor &gt; 1. We divide <code>A[p]</code> by <code>q</code>, and we add <code>q</code> to <code>A[p-1]</code>. The ant moves to the previous position: <code>p -= 1</code></li>
</ul>
<p>Here are the first moves for the ant:</p>
<pre><code>2  3  4  5  6  7  8  9  ...    # 2 is prime: go on
^
2  3  4  5  6  7  8  9  ...    # 3 is prime: go on
   ^
2  3  4  5  6  7  8  9  ...    # 4 is composite: go back and update
      ^
2  5  2  5  6  7  8  9  ...    # 5 is prime: go on
   ^
2  5  2  5  6  7  8  9  ...    # 2 is prime: go on
      ^
2  5  2  5  6  7  8  9  ...    # 5 is prime: go on
         ^
etc.</code></pre><h2 id="your-task">Your task</h2>
<p>Your function should return the list of integers up to (and including) the ant&apos;s position after <code>n</code> moves (that is <code>A[0:p+1]</code>)</p>
<h2 id="examples">Examples</h2>
<pre><code>0        =&gt; [2]                                        # list size = 1
10       =&gt; [2, 5, 2, 7, 3, 7, 8]                      # size = 7
100      =&gt; [2, 5, 5, 5, 3, 3, 2, 3, 5, 3, 3, 5, 2, 7, 2, 13, 6]  # size = 17
1000     =&gt; [..., 5, 5, 2, 5, 3, 2, 7, 5, 3, 3]        # size = 83
10000    =&gt; [..., 7, 2, 7, 2, 5, 2, 3, 5, 5, 72]       # size = 513
100000   =&gt; [..., 2, 2, 7, 5, 3, 7, 7, 3, 5, 932]      # size = 3675
1000000  =&gt; [..., 2, 3, 5, 2, 5, 5, 7, 13, 113, 7161]  # size = 28643
10000000 =&gt; [..., 2, 2, 2, 7, 2, 3, 2, 7, 2, 4]        # size = 233369</code></pre><h2 id="tests">Tests</h2>
<p>As this is a performance kata, the tests start where the other kata stopped: <code>10000 &lt; n &lt; 1000000</code>.</p>
<p>There are 200 random tests in the 10<sup>4</sup> - 10<sup>5</sup> range, and another 20 tests in the 10<sup>5</sup> - 10<sup>6</sup> range.</p>
<h2 id="epilogoue">Epilogoue</h2>
<p>If you&apos;re up to the challenge, try the advanced version of this kata: <a href="https://www.codewars.com/kata/prime-ant-crazy-version/" target="_blank">Prime Ant - Crazy Version</a></p>
<hr>
<h2 id="my-other-katas">My other katas</h2>
<p>If you enjoyed this kata then please try <a href="https://www.codewars.com/collections/katas-created-by-anter69" target="_blank">my other katas</a>! :-)</p>
<h4 id="translations-are-welcome"><em>Translations are welcome!</em></h4>

### Solution