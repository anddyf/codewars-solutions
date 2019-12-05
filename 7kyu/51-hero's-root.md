### Problem:
<p>One of the first algorithm used for approximating the integer square root of a positive integer <code>n</code> is known as &quot;Hero&apos;s method&quot;, 
named after the first-century Greek mathematician Hero of Alexandria who gave the first description
of the method. Hero&apos;s method can be obtained from Newton&apos;s method which came 16 centuries after. </p>
<p>We approximate the square root of a number <code>n</code> by taking an initial guess <code>x</code>, an error <code>e</code> and repeatedly calculating a new approximate <em>integer</em> value <code>x</code> using: <code>(x + n / x) / 2</code>; we are finished when the previous <code>x</code> and the <code>new x</code> have an absolute difference less than <code>e</code>.</p>
<p>We supply to a function (int_rac) a number <code>n</code> (positive integer) and a parameter <code>guess</code> (positive integer) which will be our initial <code>x</code>. For this kata the parameter &apos;e&apos; is set to <code>1</code>.</p>
<p>Hero&apos;s algorithm is not always going to come to an exactly correct result! For instance: if n = 25 we get 5 but for n = 26 we also get 5. Nevertheless <code>5</code> is the <em>integer</em> square root of <code>26</code>.</p>
<p>The kata is to return the count of the progression of integer approximations that the algorithm makes.</p>
<p>Reference:</p>
<p><a href="https://en.wikipedia.org/wiki/Methods_of_computing_square_roots#Babylonian_method" target="_blank">https://en.wikipedia.org/wiki/Methods_of_computing_square_roots#Babylonian_method</a></p>
<p>Some examples:</p>
<pre><code>int_rac(25,1): follows a progression of [1,13,7,5] so our function should return 4.

int_rac(125348,300): has a progression of [300,358,354] so our function should return 3.

int_rac(125348981764,356243): has a progression of [356243,354053,354046] so our function should return 3.</code></pre><p>#</p>
<p>You can use Math.floor (or similar) for each integer approximation.</p>
<p>#</p>
<p>Note for JavaScript, Coffescript, Typescript:</p>
<p>Don&apos;t use the double bitwise NOT ~~ at each iteration if you want to have the same results as in the tests and the other languages. </p>

### Solution