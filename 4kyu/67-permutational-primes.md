### Problem:
<p>The prime <code>149</code> has 3 permutations which are also primes: <code>419</code>, <code>491</code> and <code>941</code>.</p>
<p>There are 3 primes below <code>1000</code> with three prime permutations:</p>
<pre><code class="language-python">149 ==&gt; 419 ==&gt; 491 ==&gt; 941
179 ==&gt; 197 ==&gt; 719 ==&gt; 971
379 ==&gt; 397 ==&gt; 739 ==&gt; 937</code></pre>
<pre style="display: none;"><code class="language-javascript"><span class="hljs-number">149</span> ==&gt; <span class="hljs-number">419</span> ==&gt; <span class="hljs-number">491</span> ==&gt; <span class="hljs-number">941</span>
<span class="hljs-number">179</span> ==&gt; <span class="hljs-number">197</span> ==&gt; <span class="hljs-number">719</span> ==&gt; <span class="hljs-number">971</span>
<span class="hljs-number">379</span> ==&gt; <span class="hljs-number">397</span> ==&gt; <span class="hljs-number">739</span> ==&gt; <span class="hljs-number">937</span></code></pre>
<p>But there are 9 primes below <code>1000</code> with two prime permutations:</p>
<pre><code class="language-python">113 ==&gt; 131 ==&gt; 311
137 ==&gt; 173 ==&gt; 317
157 ==&gt; 571 ==&gt; 751
163 ==&gt; 613 ==&gt; 631
167 ==&gt; 617 ==&gt; 761
199 ==&gt; 919 ==&gt; 991
337 ==&gt; 373 ==&gt; 733
359 ==&gt; 593 ==&gt; 953
389 ==&gt; 839 ==&gt; 983</code></pre>
<pre style="display: none;"><code class="language-javascript"><span class="hljs-number">113</span> ==&gt; <span class="hljs-number">131</span> ==&gt; <span class="hljs-number">311</span>
<span class="hljs-number">137</span> ==&gt; <span class="hljs-number">173</span> ==&gt; <span class="hljs-number">317</span>
<span class="hljs-number">157</span> ==&gt; <span class="hljs-number">571</span> ==&gt; <span class="hljs-number">751</span>
<span class="hljs-number">163</span> ==&gt; <span class="hljs-number">613</span> ==&gt; <span class="hljs-number">631</span>
<span class="hljs-number">167</span> ==&gt; <span class="hljs-number">617</span> ==&gt; <span class="hljs-number">761</span>
<span class="hljs-number">199</span> ==&gt; <span class="hljs-number">919</span> ==&gt; <span class="hljs-number">991</span>
<span class="hljs-number">337</span> ==&gt; <span class="hljs-number">373</span> ==&gt; <span class="hljs-number">733</span>
<span class="hljs-number">359</span> ==&gt; <span class="hljs-number">593</span> ==&gt; <span class="hljs-number">953</span>
<span class="hljs-number">389</span> ==&gt; <span class="hljs-number">839</span> ==&gt; <span class="hljs-number">983</span></code></pre>
<p>Finally, we can find 34 primes below <code>1000</code> with only one prime permutation: </p>
<pre><code class="language-python">[<span class="hljs-number">13</span>, <span class="hljs-number">17</span>, <span class="hljs-number">37</span>, <span class="hljs-number">79</span>, <span class="hljs-number">107</span>, <span class="hljs-number">127</span>, <span class="hljs-number">139</span>, <span class="hljs-number">181</span>, <span class="hljs-number">191</span>, <span class="hljs-number">239</span>, <span class="hljs-number">241</span>, <span class="hljs-number">251</span>, <span class="hljs-number">277</span>, <span class="hljs-number">281</span>, <span class="hljs-number">283</span>, <span class="hljs-number">313</span>, <span class="hljs-number">347</span>, <span class="hljs-number">349</span>, <span class="hljs-number">367</span>, <span class="hljs-number">457</span>, <span class="hljs-number">461</span>, <span class="hljs-number">463</span>, <span class="hljs-number">467</span>, <span class="hljs-number">479</span>, <span class="hljs-number">563</span>, <span class="hljs-number">569</span>, <span class="hljs-number">577</span>, <span class="hljs-number">587</span>, <span class="hljs-number">619</span>, <span class="hljs-number">683</span>, <span class="hljs-number">709</span>, <span class="hljs-number">769</span>, <span class="hljs-number">787</span>, <span class="hljs-number">797</span>]</code></pre>
<pre style="display: none;"><code class="language-javascript">[<span class="hljs-number">13</span>, <span class="hljs-number">17</span>, <span class="hljs-number">37</span>, <span class="hljs-number">79</span>, <span class="hljs-number">107</span>, <span class="hljs-number">127</span>, <span class="hljs-number">139</span>, <span class="hljs-number">181</span>, <span class="hljs-number">191</span>, <span class="hljs-number">239</span>, <span class="hljs-number">241</span>, <span class="hljs-number">251</span>, <span class="hljs-number">277</span>, <span class="hljs-number">281</span>, <span class="hljs-number">283</span>, <span class="hljs-number">313</span>, <span class="hljs-number">347</span>, <span class="hljs-number">349</span>, <span class="hljs-number">367</span>, <span class="hljs-number">457</span>, <span class="hljs-number">461</span>, <span class="hljs-number">463</span>, <span class="hljs-number">467</span>, <span class="hljs-number">479</span>, <span class="hljs-number">563</span>, <span class="hljs-number">569</span>, <span class="hljs-number">577</span>, <span class="hljs-number">587</span>, <span class="hljs-number">619</span>, <span class="hljs-number">683</span>, <span class="hljs-number">709</span>, <span class="hljs-number">769</span>, <span class="hljs-number">787</span>, <span class="hljs-number">797</span>]</code></pre>
<p>Each set of permuted primes are represented by its smallest value, for example the set <code>149, 419, 491, 941</code> is represented by <code>149</code>, and the set has 3 permutations.</p>
<p><strong>Notes</strong></p>
<ul>
<li>the original number (<code>149</code> in the above example) is <strong>not</strong> counted as a permutation;</li>
<li>permutations with leading zeros are <strong>not valid</strong></li>
</ul>
<h2 id="your-task">Your Task</h2>
<p>Your task is to create a function that takes two arguments:</p>
<ul>
<li>an upper limit (<code>n_max</code>) and</li>
<li>the number of prime permutations (<code>k_perms</code>) that the primes should generate <strong>below</strong> <code>n_max</code></li>
</ul>
<p>The function should return the following three values as a list:</p>
<ul>
<li>the number of permutational primes below the given limit,</li>
<li>the smallest prime such prime,</li>
<li>and the largest such prime</li>
</ul>
<p>If no eligible primes were found below the limit, the output should be <code>[0, 0, 0]</code></p>
<h2 id="examples">Examples</h2>
<p>Let&apos;s see how it would be with the previous cases:</p>
<pre><code class="language-python">permutational_primes(1000, 3) ==&gt; [3, 149, 379]
&apos;&apos;&apos; 3 primes with 3 permutations below 1000, smallest: 149, largest: 379 &apos;&apos;&apos;

permutational_primes(1000, 2) ==&gt; [9, 113, 389]
&apos;&apos;&apos; 9 primes with 2 permutations below 1000, smallest: 113, largest: 389 &apos;&apos;&apos;

permutational_primes(1000, 1) ==&gt; [34, 13, 797]
&apos;&apos;&apos; 34 primes with 1 permutation below 1000, smallest: 13, largest: 797 &apos;&apos;&apos;</code></pre>
<pre style="display: none;"><code class="language-javascript">permutational_primes(<span class="hljs-number">1000</span>, <span class="hljs-number">3</span>)  ==&gt; [<span class="hljs-number">3</span>, <span class="hljs-number">149</span>, <span class="hljs-number">379</span>]
<span class="hljs-comment">// 3 primes with 3 permutations below 1000, smallest: 149, largest: 379</span>

permutational_primes(<span class="hljs-number">1000</span>, <span class="hljs-number">2</span>)  ==&gt; [<span class="hljs-number">9</span>, <span class="hljs-number">113</span>, <span class="hljs-number">389</span>]
<span class="hljs-comment">// 9 primes with 2 permutations below 1000, smallest: 113, largest: 389</span>

permutational_primes(<span class="hljs-number">1000</span>, <span class="hljs-number">1</span>)  ==&gt; [<span class="hljs-number">34</span>, <span class="hljs-number">13</span>, <span class="hljs-number">797</span>]
<span class="hljs-comment">// 34 primes with 1 permutation below 1000, smallest: 13, largest: 797</span></code></pre>
<p>Happy coding!!</p>

### Solution