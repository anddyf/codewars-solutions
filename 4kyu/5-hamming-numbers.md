### Problem:
<p>A *<a href="https://en.wikipedia.org/wiki/Regular_number" target="_blank">Hamming number</a>* is a positive integer of the form 2<sup><em>i</em></sup>3<sup><em>j</em></sup>5<sup><em>k</em></sup>, for some non-negative integers <em>i</em>, <em>j</em>, and <em>k</em>.</p>
<p>Write a function that computes the <em>n</em>th smallest Hamming number. </p>
<p>Specifically:</p>
<ul>
<li>The first smallest Hamming number is 1 = 2<sup>0</sup>3<sup>0</sup>5<sup>0</sup></li>
<li>The second smallest Hamming number is 2 = 2<sup>1</sup>3<sup>0</sup>5<sup>0</sup></li>
<li>The third smallest Hamming number is 3 = 2<sup>0</sup>3<sup>1</sup>5<sup>0</sup></li>
<li>The fourth smallest Hamming number is 4 = 2<sup>2</sup>3<sup>0</sup>5<sup>0</sup></li>
<li>The fifth smallest Hamming number is 5 = 2<sup>0</sup>3<sup>0</sup>5<sup>1</sup></li>
</ul>
<p>The 20 smallest Hamming numbers are given in example test fixture.</p>
<p>Your code should be able to compute all of the smallest 5,000 (Clojure: 2000) Hamming numbers without timing out.</p>

### Solution