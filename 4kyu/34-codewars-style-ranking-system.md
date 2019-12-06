### Problem:
<p>Write a class called User that is used to calculate the amount that a user will progress through a ranking system similar to the one Codewars uses.  </p>
<h5 id="business-rules">Business Rules:</h5>
<ul>
<li>A user starts at rank -8 and can progress all the way to 8.</li>
<li>There is no 0 (zero) rank. The next rank after -1 is 1.</li>
<li>Users will complete activities. These activities also have ranks.</li>
<li>Each time the user completes a ranked activity the users rank progress is updated based off of the activity&apos;s rank</li>
<li>The progress earned from the completed activity is relative to what the user&apos;s current rank is compared to the rank of the activity</li>
<li>A user&apos;s rank progress starts off at zero, each time the progress reaches 100 the user&apos;s rank is upgraded to the next level</li>
<li>Any remaining progress earned while in the previous rank will be applied towards the next rank&apos;s progress (we don&apos;t throw any progress away). The exception is if there is no other rank left to progress towards (Once you reach rank 8 there is no more progression). </li>
<li>A user cannot progress beyond rank 8. </li>
<li>The only acceptable range of rank values is -8,-7,-6,-5,-4,-3,-2,-1,1,2,3,4,5,6,7,8. Any other value should raise an error. </li>
</ul>
<p>The progress is scored like so:</p>
<ul>
<li>Completing an activity that is ranked the same as that of the user&apos;s will be worth 3 points</li>
<li>Completing an activity that is ranked one ranking lower than the user&apos;s will be worth 1 point</li>
<li>Any activities completed that are ranking 2 levels or more lower than the user&apos;s ranking will be ignored</li>
<li>Completing an activity ranked higher than the current user&apos;s rank will accelerate the rank progression. The greater the difference between rankings the more the progression will be increased. The formula is <code>10 * d * d</code> where <code>d</code> equals the difference in ranking between the activity and the user.  </li>
</ul>
<h5 id="logic-examples">Logic Examples:</h5>
<ul>
<li>If a user ranked -8 completes an activity ranked -7 they will receive 10 progress</li>
<li>If a user ranked -8 completes an activity ranked -6 they will receive 40 progress</li>
<li>If a user ranked -8 completes an activity ranked -5 they will receive 90 progress</li>
<li>If a user ranked -8 completes an activity ranked -4 they will receive 160 progress, resulting in the user being upgraded to rank -7 and having earned 60 progress towards their next rank</li>
<li>If a user ranked -1 completes an activity ranked 1 they will receive 10 progress (remember, zero rank is ignored)</li>
</ul>
<h5 id="code-usage-examples">Code Usage Examples:</h5>
<pre style="display: none;"><code class="language-javascript">var user = new User()
user.rank // =&gt; -8
user.progress // =&gt; 0
user.incProgress(-7)
user.progress // =&gt; 10
user.incProgress(-5) // will add 90 progress
user.progress # =&gt; 0 // progress is now zero
user.rank # =&gt; -7 // rank was upgraded to -7</code></pre>
<pre style="display: none;"><code class="language-coffeescript">user = <span class="hljs-keyword">new</span> User()
user.rank <span class="hljs-comment"># =&gt; -8</span>
user.progress <span class="hljs-comment"># =&gt; 0</span>
user.incProgress(<span class="hljs-number">-7</span>)
user.progress <span class="hljs-comment"># =&gt; 10</span>
user.incProgress(<span class="hljs-number">-5</span>) <span class="hljs-comment"># will add 90 progress</span>
user.progress <span class="hljs-comment"># =&gt; 0 # progress is now zero</span>
user.rank <span class="hljs-comment"># =&gt; -7 # rank was upgraded to -7</span></code></pre>
<pre><code class="language-ruby">user = User.new
user.rank <span class="hljs-comment"># =&gt; -8</span>
user.progress <span class="hljs-comment"># =&gt; 0</span>
user.inc_progress(-<span class="hljs-number">7</span>)
user.progress <span class="hljs-comment"># =&gt; 10</span>
user.inc_progress(-<span class="hljs-number">5</span>) <span class="hljs-comment"># will add 90 progress</span>
user.progress <span class="hljs-comment"># =&gt; 0 # progress is now zero</span>
user.rank <span class="hljs-comment"># =&gt; -7 # rank was upgraded to -7</span></code></pre>
<pre style="display: none;"><code class="language-python">user = User()
user.rank <span class="hljs-comment"># =&gt; -8</span>
user.progress <span class="hljs-comment"># =&gt; 0</span>
user.inc_progress(<span class="hljs-number">-7</span>)
user.progress <span class="hljs-comment"># =&gt; 10</span>
user.inc_progress(<span class="hljs-number">-5</span>) <span class="hljs-comment"># will add 90 progress</span>
user.progress <span class="hljs-comment"># =&gt; 0 # progress is now zero</span>
user.rank <span class="hljs-comment"># =&gt; -7 # rank was upgraded to -7</span></code></pre>
<pre style="display: none;"><code class="language-java">User user = <span class="hljs-keyword">new</span> User();
user.rank; <span class="hljs-comment">// =&gt; -8</span>
user.progress; <span class="hljs-comment">// =&gt; 0</span>
user.incProgress(-<span class="hljs-number">7</span>);
user.progress; <span class="hljs-comment">// =&gt; 10</span>
user.incProgress(-<span class="hljs-number">5</span>); <span class="hljs-comment">// will add 90 progress</span>
user.progress; <span class="hljs-comment">// =&gt; 0 // progress is now zero</span>
user.rank; <span class="hljs-comment">// =&gt; -7 // rank was upgraded to -7</span></code></pre>
<pre style="display: none;"><code class="language-haskell"><span class="hljs-title">rank</span> newUser <span class="hljs-comment">-- =&gt; -8</span>
<span class="hljs-title">progress</span> newUser <span class="hljs-comment">-- =&gt; 0</span>
<span class="hljs-title">let</span> u2 = incProgress (<span class="hljs-number">-7</span>) newUser
<span class="hljs-title">progress</span> u2 <span class="hljs-comment">-- =&gt;  10</span>
<span class="hljs-title">let</span> u3 = incProgress (<span class="hljs-number">-5</span>) u2 <span class="hljs-comment">-- will add 90 progress</span>
<span class="hljs-title">progress</span> u3 <span class="hljs-comment">-- =&gt; 0 -- progress is now zero</span>
<span class="hljs-title">rank</span> u3 <span class="hljs-comment">-- =&gt; -7 -- rank was upgraded to -7</span></code></pre>
<pre style="display: none;"><code class="language-csharp">User user = <span class="hljs-keyword">new</span> User();
user.rank; <span class="hljs-comment">// =&gt; -8</span>
user.progress; <span class="hljs-comment">// =&gt; 0</span>
user.incProgress(<span class="hljs-number">-7</span>);
user.progress; <span class="hljs-comment">// =&gt; 10</span>
user.incProgress(<span class="hljs-number">-5</span>); <span class="hljs-comment">// will add 90 progress</span>
user.progress; <span class="hljs-comment">// =&gt; 0 // progress is now zero</span>
user.rank; <span class="hljs-comment">// =&gt; -7 // rank was upgraded to -7</span></code></pre>
<p><strong>Note</strong>: Codewars no longer uses this algorithm for its own ranking system. It uses a pure Math based solution that gives consistent results no matter what order a set of ranked activities are completed at. </p>

### Solution