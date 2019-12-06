### Problem:
<h1 id="story">Story</h1>
<p>Before we dive into the exercise, I would like to show you why this numbers are so important in computer programing today.</p>
<p>It all goes back to the time of 19th century. Where computers we know today were non-existing. The first ever <b>computer program</b> was for the Analytical Engine to compute <b>Bernoulli numbers</b>. A woman named Ada Lovelace wrote the very first program. The sad part is the engine was never fully build so her code was never tested. She also predicted the start of <b>AI</b> (artificial intelligence).</p>
<p>Computers will be able to compose music by themselves, solve problems (not only numbers) ... So in her honor reproduce what was done back in 1842. The Bernoulli numbers are a sequence of rational numbers with deep connections to number theory. The Swiss mathematician Jakob Bernoulli and the Japanese mathematician Seki Kowa discovered the numbers around the same time at the start of the 18th Century. If you want to read more about her or Bernoulli numbers follow these links:</p>
<p><a href="https://en.wikipedia.org/wiki/Ada_Lovelace" target="_blank">https://en.wikipedia.org/wiki/Ada_Lovelace</a></p>
<p><a href="https://en.wikipedia.org/wiki/Bernoulli_number" target="_blank">https://en.wikipedia.org/wiki/Bernoulli_number</a></p>
<p><a href="http://mathworld.wolfram.com/BernoulliNumber.html" target="_blank">http://mathworld.wolfram.com/BernoulliNumber.html</a></p>
<h1 id="exercise">Exercise</h1>
<p>Your job is to write a function bernoulli_number(n) which outputs the n-th Bernoulli number. The input will always be positive integer so you do not need to worry about exceptions. How you will solve the problem is none of my business but here are some guidelines.
You can make pascal triangle and then with the basic formula generate all Bernoulli numbers. Look example below.</p>
<p>For the sake of floating numbers, just use Fractions so there will be less problems with rounding.</p>
<p>0 = 1 + 2b<font size="1">1</font> ............................................................... 
  b<font size="1">1</font> = - 1/2</p>
<p>0 = 1 + 3b<font size="1">1</font> + 3b<font size="1">2</font> ...................................................    b<font size="1">2</font>        = 1/6</p>
<p>0 = 1 + 4b<font size="1">1</font> + 6b<font size="1">2</font> + 4b<font size="1">3</font> .......................................  b<font size="1">3</font> = 0</p>
<p>0 = 1 + 5b<font size="1">1</font> + 10b<font size="1">2</font> + 10b<font size="1">3</font> + 5b<font size="1">4</font> ...................... b<font size="1">4</font> = - 1/30</p>
<p>... and so on</p>
<pre><code>bernoulli_number(0) # return 1
bernoulli_number(1) # return Fraction(-1,2) or Rational(-1,2) or &quot;1/2&quot;
bernoulli_number(6) # return Fraction(1,42) or ...
bernoulli_number(42) # return Fraction(1520097643918070802691,1806) or ...
bernoulli_number(22) # return Fraction(854513,138) or ... &quot;854513/138&quot;
</code></pre><h1 id="note">Note</h1>
<p>See &quot;Sample Tests&quot; to see the return of each language.</p>
<p>Good luck and happy coding! </p>
<p>PS: be careful some numbers might exceed 1000.
If this kata is too hard for you try to solve pascal triangle and something similar to this and then come back :).</p>

### Solution