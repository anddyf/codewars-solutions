### Problem:
<p>You will be given an array of objects representing data about developers who have signed up to attend the next coding meetup that you are organising.</p>
<p>Given the following input array:</p>
<pre><code class="language-javascript"><span class="hljs-keyword">var</span> list1 = [
  { <span class="hljs-attr">firstName</span>: <span class="hljs-string">&apos;Aba&apos;</span>, <span class="hljs-attr">lastName</span>: <span class="hljs-string">&apos;N.&apos;</span>, <span class="hljs-attr">country</span>: <span class="hljs-string">&apos;Ghana&apos;</span>, <span class="hljs-attr">continent</span>: <span class="hljs-string">&apos;Africa&apos;</span>, <span class="hljs-attr">age</span>: <span class="hljs-number">21</span>, <span class="hljs-attr">language</span>: <span class="hljs-string">&apos;Python&apos;</span> },
  { <span class="hljs-attr">firstName</span>: <span class="hljs-string">&apos;Abb&apos;</span>, <span class="hljs-attr">lastName</span>: <span class="hljs-string">&apos;O.&apos;</span>, <span class="hljs-attr">country</span>: <span class="hljs-string">&apos;Israel&apos;</span>, <span class="hljs-attr">continent</span>: <span class="hljs-string">&apos;Asia&apos;</span>, <span class="hljs-attr">age</span>: <span class="hljs-number">39</span>, <span class="hljs-attr">language</span>: <span class="hljs-string">&apos;Java&apos;</span> }
];</code></pre>
<p>write a function that when executed as <code>findOddNames(list1)</code> returns only the developers where <strong>if you add the ASCII representation of all characters in their first names, the result will be an odd number</strong>:</p>
<pre><code class="language-javascript">[
  { <span class="hljs-attr">firstName</span>: <span class="hljs-string">&apos;Abb&apos;</span>, <span class="hljs-attr">lastName</span>: <span class="hljs-string">&apos;O.&apos;</span>, <span class="hljs-attr">country</span>: <span class="hljs-string">&apos;Israel&apos;</span>, <span class="hljs-attr">continent</span>: <span class="hljs-string">&apos;Asia&apos;</span>, <span class="hljs-attr">age</span>: <span class="hljs-number">39</span>, <span class="hljs-attr">language</span>: <span class="hljs-string">&apos;Java&apos;</span> }
]</code></pre>
<p>Explanation of the above:</p>
<ul>
<li>Sum of ASCII codes of letters in <code>&apos;Aba&apos;</code> is: <code>65 + 98 + 97 = 260</code> which is an even number</li>
<li>Sum of ASCII codes of letters in <code>&apos;Abb&apos;</code> is: <code>65 + 98 + 98 = 261</code> which is an <strong>odd number</strong></li>
</ul>
<p>Notes:</p>
<ul>
<li>Preserve the order of the original list.</li>
<li>Return an empty array <code>[]</code> if there is no developer with an &quot;odd&quot; name.</li>
<li>The input array and first names will always be valid and formatted as in the example above.<br>
<br>
<br>
<br>
<br>

</li>
</ul>
<p>This kata is part of the <strong>Coding Meetup</strong> series which includes a number of short and easy to follow katas which have been designed to allow mastering the use of higher-order functions. In JavaScript this includes methods like: <code>forEach, filter, map, reduce, some, every, find, findIndex</code>. Other approaches to solving the katas are of course possible.</p>
<p>Here is the full list of the katas in the <strong>Coding Meetup</strong> series:</p>
<p><a href="http://www.codewars.com/kata/coding-meetup-number-1-higher-order-functions-series-count-the-number-of-javascript-developers-coming-from-europe" target="_blank">Coding Meetup #1 - Higher-Order Functions Series - Count the number of JavaScript developers coming from Europe</a></p>
<p><a href="https://www.codewars.com/kata/coding-meetup-number-2-higher-order-functions-series-greet-developers" target="_blank">Coding Meetup #2 - Higher-Order Functions Series - Greet developers</a></p>
<p><a href="https://www.codewars.com/kata/coding-meetup-number-3-higher-order-functions-series-is-ruby-coming" target="_blank">Coding Meetup #3 - Higher-Order Functions Series - Is Ruby coming?</a></p>
<p><a href="https://www.codewars.com/kata/coding-meetup-number-4-higher-order-functions-series-find-the-first-python-developer" target="_blank">Coding Meetup #4 - Higher-Order Functions Series - Find the first Python developer</a></p>
<p><a href="https://www.codewars.com/kata/coding-meetup-number-5-higher-order-functions-series-prepare-the-count-of-languages" target="_blank">Coding Meetup #5 - Higher-Order Functions Series - Prepare the count of languages</a></p>
<p><a href="https://www.codewars.com/kata/coding-meetup-number-6-higher-order-functions-series-can-they-code-in-the-same-language" target="_blank">Coding Meetup #6 - Higher-Order Functions Series - Can they code in the same language?</a></p>
<p><a href="http://www.codewars.com/kata/coding-meetup-number-7-higher-order-functions-series-find-the-most-senior-developer" target="_blank">Coding Meetup #7 - Higher-Order Functions Series - Find the most senior developer</a></p>
<p><a href="https://www.codewars.com/kata/coding-meetup-number-8-higher-order-functions-series-will-all-continents-be-represented" target="_blank">Coding Meetup #8 - Higher-Order Functions Series - Will all continents be represented?</a></p>
<p><a href="https://www.codewars.com/kata/coding-meetup-number-9-higher-order-functions-series-is-the-meetup-age-diverse" target="_blank">Coding Meetup #9 - Higher-Order Functions Series - Is the meetup age-diverse?</a></p>
<p><a href="https://www.codewars.com/kata/coding-meetup-number-10-higher-order-functions-series-create-usernames" target="_blank">Coding Meetup #10 - Higher-Order Functions Series - Create usernames</a></p>
<p><a href="https://www.codewars.com/kata/coding-meetup-number-11-higher-order-functions-series-find-the-average-age" target="_blank">Coding Meetup #11 - Higher-Order Functions Series - Find the average age</a></p>
<p><a href="https://www.codewars.com/kata/coding-meetup-number-12-higher-order-functions-series-find-github-admins" target="_blank">Coding Meetup #12 - Higher-Order Functions Series - Find GitHub admins</a></p>
<p><a href="https://www.codewars.com/kata/coding-meetup-number-13-higher-order-functions-series-is-the-meetup-language-diverse" target="_blank">Coding Meetup #13 - Higher-Order Functions Series - Is the meetup language-diverse?</a></p>
<p><a href="https://www.codewars.com/kata/coding-meetup-number-14-higher-order-functions-series-order-the-food" target="_blank">Coding Meetup #14 - Higher-Order Functions Series - Order the food</a></p>
<p><a href="https://www.codewars.com/kata/coding-meetup-number-15-higher-order-functions-series-find-the-odd-names" target="_blank">Coding Meetup #15 - Higher-Order Functions Series - Find the odd names</a></p>
<p><a href="https://www.codewars.com/kata/coding-meetup-number-16-higher-order-functions-series-ask-for-missing-details" target="_blank">Coding Meetup #16 - Higher-Order Functions Series - Ask for missing details</a></p>
<p><a href="https://www.codewars.com/kata/coding-meetup-number-17-higher-order-functions-series-sort-by-programming-language" target="_blank">Coding Meetup #17 - Higher-Order Functions Series - Sort by programming language</a></p>

### Solution