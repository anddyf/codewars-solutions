### Problem:
<h3 id="happy-holidays-fellow-code-warriors">Happy Holidays fellow Code Warriors!</h3>
<p>It&apos;s almost Christmas Eve, so we need to prepare some milk and cookies for Santa! Wait... when exactly do we need to do that?</p>
<h3 id="time-for-milk-and-cookies">Time for Milk and Cookies</h3>
<p>Complete the function function that accepts a <code>Date</code> object, and returns <code>true</code> if it&apos;s Christmas Eve (December 24th), <code>false</code> otherwise.</p>
<h3 id="examples">Examples</h3>
<pre><code class="language-js">timeForMilkAndCookies(<span class="hljs-keyword">new</span> <span class="hljs-built_in">Date</span>(<span class="hljs-number">2013</span>, <span class="hljs-number">11</span>, <span class="hljs-number">24</span>))  <span class="hljs-comment">// true</span>
timeForMilkAndCookies(<span class="hljs-keyword">new</span> <span class="hljs-built_in">Date</span>(<span class="hljs-number">2013</span>, <span class="hljs-number">0</span>, <span class="hljs-number">23</span>))   <span class="hljs-comment">// false</span>
timeForMilkAndCookies(<span class="hljs-keyword">new</span> <span class="hljs-built_in">Date</span>(<span class="hljs-number">3000</span>, <span class="hljs-number">11</span>, <span class="hljs-number">24</span>))  <span class="hljs-comment">// true</span></code></pre>
<pre style="display: none;"><code class="language-coffee">timeForMilkAndCookies(<span class="hljs-keyword">new</span> Date(<span class="hljs-number">2013</span>, <span class="hljs-number">11</span>, <span class="hljs-number">24</span>))  <span class="hljs-regexp">//</span> <span class="hljs-literal">true</span>
timeForMilkAndCookies(<span class="hljs-keyword">new</span> Date(<span class="hljs-number">2013</span>, <span class="hljs-number">0</span>, <span class="hljs-number">23</span>))   <span class="hljs-regexp">//</span> <span class="hljs-literal">false</span>
timeForMilkAndCookies(<span class="hljs-keyword">new</span> Date(<span class="hljs-number">3000</span>, <span class="hljs-number">11</span>, <span class="hljs-number">24</span>))  <span class="hljs-regexp">//</span> <span class="hljs-literal">true</span></code></pre>
<pre style="display: none;"><code class="language-ruby">time_for_milk_and_cookies(Date.new(<span class="hljs-number">2013</span>, <span class="hljs-number">12</span>, <span class="hljs-number">24</span>))  <span class="hljs-comment"># true</span>
time_for_milk_and_cookies(Date.new(<span class="hljs-number">2013</span>, <span class="hljs-number">1</span>, <span class="hljs-number">23</span>))   <span class="hljs-comment"># false</span>
time_for_milk_and_cookies(Date.new(<span class="hljs-number">3000</span>, <span class="hljs-number">12</span>, <span class="hljs-number">24</span>))  <span class="hljs-comment"># true</span></code></pre>
<pre style="display: none;"><code class="language-python">time_for_milk_and_cookies(date(<span class="hljs-number">2013</span>, <span class="hljs-number">12</span>, <span class="hljs-number">24</span>))  <span class="hljs-comment"># True</span>
time_for_milk_and_cookies(date(<span class="hljs-number">2013</span>, <span class="hljs-number">1</span>, <span class="hljs-number">23</span>))   <span class="hljs-comment"># False</span>
time_for_milk_and_cookies(date(<span class="hljs-number">3000</span>, <span class="hljs-number">12</span>, <span class="hljs-number">24</span>))  <span class="hljs-comment"># True</span></code></pre>

### Solution