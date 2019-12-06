### Problem:
<hr>
<h2 id="sum-of-pairs">Sum of Pairs</h2>
<p>Given a list of integers and a single sum value, return the first two values (parse from the left please) in order of appearance that add up to form the sum.</p>
<pre><code class="language-python">sum_pairs([<span class="hljs-number">11</span>, <span class="hljs-number">3</span>, <span class="hljs-number">7</span>, <span class="hljs-number">5</span>],         <span class="hljs-number">10</span>)
<span class="hljs-comment">#              ^--^      3 + 7 = 10</span>
== [<span class="hljs-number">3</span>, <span class="hljs-number">7</span>]

sum_pairs([<span class="hljs-number">4</span>, <span class="hljs-number">3</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>, <span class="hljs-number">4</span>],         <span class="hljs-number">6</span>)
<span class="hljs-comment">#          ^-----^         4 + 2 = 6, indices: 0, 2 *</span>
<span class="hljs-comment">#             ^-----^      3 + 3 = 6, indices: 1, 3</span>
<span class="hljs-comment">#                ^-----^   2 + 4 = 6, indices: 2, 4</span>
<span class="hljs-comment">#  * entire pair is earlier, and therefore is the correct answer</span>
== [<span class="hljs-number">4</span>, <span class="hljs-number">2</span>]

sum_pairs([<span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">-2</span>, <span class="hljs-number">3</span>], <span class="hljs-number">2</span>)
<span class="hljs-comment">#  there are no pairs of values that can be added to produce 2.</span>
== <span class="hljs-literal">None</span>/nil/undefined (Based on the language)

sum_pairs([<span class="hljs-number">10</span>, <span class="hljs-number">5</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>, <span class="hljs-number">7</span>, <span class="hljs-number">5</span>],         <span class="hljs-number">10</span>)
<span class="hljs-comment">#              ^-----------^   5 + 5 = 10, indices: 1, 5</span>
<span class="hljs-comment">#                    ^--^      3 + 7 = 10, indices: 3, 4 *</span>
<span class="hljs-comment">#  * entire pair is earlier, and therefore is the correct answer</span>
== [<span class="hljs-number">3</span>, <span class="hljs-number">7</span>]</code></pre>
<p>Negative numbers and duplicate numbers can and will appear.</p>
<p><strong>NOTE:</strong> There will also be lists tested of lengths upwards of 10,000,000 elements. Be sure your code doesn&apos;t time out.</p>

### Solution