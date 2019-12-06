### Problem:
<p>A product-sum number is a natural number N which can be expressed as both the product and the sum of the same set of numbers.</p>
<p>N = a1 &#xD7; a2 &#xD7; ... &#xD7; ak = a1 + a2 + ... + ak</p>
<p>For example, 6 = 1 &#xD7; 2 &#xD7; 3 = 1 + 2 + 3.</p>
<p>For a given set of size, k, we shall call the smallest N with this property a minimal product-sum number. The minimal product-sum numbers for sets of size, k = 2, 3, 4, 5, and 6 are as follows.</p>
<pre><code>k=2: 4 = 2 &#xD7; 2 = 2 + 2
k=3: 6 = 1 &#xD7; 2 &#xD7; 3 = 1 + 2 + 3
k=4: 8 = 1 &#xD7; 1 &#xD7; 2 &#xD7; 4 = 1 + 1 + 2 + 4
k=5: 8 = 1 &#xD7; 1 &#xD7; 2 &#xD7; 2 &#xD7; 2 = 1 + 1 + 2 + 2 + 2
k=6: 12 = 1 &#xD7; 1 &#xD7; 1 &#xD7; 1 &#xD7; 2 &#xD7; 6 = 1 + 1 + 1 + 1 + 2 + 6</code></pre><p>Hence for 2 &#x2264; k &#x2264; 6, the sum of all the minimal product-sum numbers is 4+6+8+12 = 30; note that 8 is only counted once in the sum.</p>
<p>Your task is to write an algorithm to compute the sum of all minimal product-sum numbers where 2 &#x2264; k &#x2264; n.</p>
<p>Courtesy of ProjectEuler.net</p>

### Solution