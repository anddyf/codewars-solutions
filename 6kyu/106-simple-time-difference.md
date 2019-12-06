### Problem:
<p>In this Kata, you will be given a series of times at which an alarm goes off. Your task will be to determine the maximum time interval between alarms. Each alarm starts ringing at the beginning of the corresponding minute and rings for exactly one minute. The times in the array are not in chronological order. Ignore duplicate times, if any.</p>
<pre><code class="language-Haskell"><span class="hljs-type">For</span> example:
<span class="hljs-title">solve</span>([<span class="hljs-string">&quot;14:51&quot;</span>]) = <span class="hljs-string">&quot;23:59&quot;</span>. <span class="hljs-type">If</span> the alarm goes off now, it will not go off for another <span class="hljs-number">23</span> hours and <span class="hljs-number">59</span> minutes.
<span class="hljs-title">solve</span>([<span class="hljs-string">&quot;23:00&quot;</span>,<span class="hljs-string">&quot;04:22&quot;</span>,<span class="hljs-string">&quot;18:05&quot;</span>,<span class="hljs-string">&quot;06:24&quot;</span>]) == <span class="hljs-string">&quot;11:40&quot;</span>. <span class="hljs-type">The</span> max interval that the alarm will not go off is <span class="hljs-number">11</span> hours and <span class="hljs-number">40</span> minutes.</code></pre>
<p>In the second example, the alarm goes off <code>4</code> times in a day.</p>
<p>More examples in test cases. Good luck!</p>

### Solution