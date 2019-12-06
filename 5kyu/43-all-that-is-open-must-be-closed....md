### Problem:
<h3 id="background">Background</h3>
<p>We <strong>all</strong> know about &quot;balancing parentheses&quot; (plus brackets, braces and chevrons) and even balancing characters that are identical.  </p>
<p>Read that last sentence again, I balanced different characters and identical characters twice and you didn&apos;t even notice... :)</p>
<h3 id="kata">Kata</h3>
<p>Your challenge in this kata is to write a piece of code to validate that a supplied string is balanced.</p>
<p>You must determine if all that is open is then closed, and nothing is closed which is not already open!</p>
<p>You will be given a string to validate, and a second string, where each pair of characters defines an opening and closing sequence that needs balancing.</p>
<p>You may assume that the second string always has an even number of characters.</p>
<h3 id="example">Example</h3>
<pre><code class="language-python"><span class="hljs-comment"># In this case &apos;(&apos; opens a section, and &apos;)&apos; closes a section</span>
is_balanced(<span class="hljs-string">&quot;(Sensei says yes!)&quot;</span>, <span class="hljs-string">&quot;()&quot;</span>)       <span class="hljs-comment"># =&gt; True</span>
is_balanced(<span class="hljs-string">&quot;(Sensei says no!&quot;</span>, <span class="hljs-string">&quot;()&quot;</span>)         <span class="hljs-comment"># =&gt; False</span>

<span class="hljs-comment"># In this case &apos;(&apos; and &apos;[&apos; open a section, while &apos;)&apos; and &apos;]&apos; close a section</span>
is_balanced(<span class="hljs-string">&quot;(Sensei [says] yes!)&quot;</span>, <span class="hljs-string">&quot;()[]&quot;</span>)   <span class="hljs-comment"># =&gt; True</span>
is_balanced(<span class="hljs-string">&quot;(Sensei [says) no!]&quot;</span>, <span class="hljs-string">&quot;()[]&quot;</span>)    <span class="hljs-comment"># =&gt; False</span>

<span class="hljs-comment"># In this case a single quote (&apos;) both opens and closes a section</span>
is_balanced(<span class="hljs-string">&quot;Sensei says &apos;yes&apos;!&quot;</span>, <span class="hljs-string">&quot;&apos;&apos;&quot;</span>)       <span class="hljs-comment"># =&gt; True</span>
is_balanced(<span class="hljs-string">&quot;Sensei say&apos;s no!&quot;</span>, <span class="hljs-string">&quot;&apos;&apos;&quot;</span>)         <span class="hljs-comment"># =&gt; False</span></code></pre>
<pre style="display: none;"><code class="language-javascript"><span class="hljs-comment">// In this case &apos;(&apos; opens a section, and &apos;)&apos; closes a section</span>
isBalanced(<span class="hljs-string">&quot;(Sensei says yes!)&quot;</span>, <span class="hljs-string">&quot;()&quot;</span>)       <span class="hljs-comment">// =&gt; True</span>
isBalanced(<span class="hljs-string">&quot;(Sensei says no!&quot;</span>, <span class="hljs-string">&quot;()&quot;</span>)         <span class="hljs-comment">// =&gt; False</span>

<span class="hljs-comment">// In this case &apos;(&apos; and &apos;[&apos; open a section, while &apos;)&apos; and &apos;]&apos; close a section</span>
isBalanced(<span class="hljs-string">&quot;(Sensei [says] yes!)&quot;</span>, <span class="hljs-string">&quot;()[]&quot;</span>)   <span class="hljs-comment">// =&gt; True</span>
isBalanced(<span class="hljs-string">&quot;(Sensei [says) no!]&quot;</span>, <span class="hljs-string">&quot;()[]&quot;</span>)    <span class="hljs-comment">// =&gt; False</span>

<span class="hljs-comment">// In this case a single quote (&apos;) both opens and closes a section</span>
isBalanced(<span class="hljs-string">&quot;Sensei says &apos;yes&apos;!&quot;</span>, <span class="hljs-string">&quot;&apos;&apos;&quot;</span>)       <span class="hljs-comment">// =&gt; True</span>
isBalanced(<span class="hljs-string">&quot;Sensei say&apos;s no!&quot;</span>, <span class="hljs-string">&quot;&apos;&apos;&quot;</span>)         <span class="hljs-comment">// =&gt; False</span></code></pre>
<pre style="display: none;"><code class="language-csharp"><span class="hljs-comment">// In this case &apos;(&apos; opens a section, and &apos;)&apos; closes a section</span>
Kata.IsBalanced(<span class="hljs-string">&quot;(Sensei says yes!)&quot;</span>, <span class="hljs-string">&quot;()&quot;</span>);       <span class="hljs-comment">// =&gt; True</span>
Kata.IsBalanced(<span class="hljs-string">&quot;(Sensei says no!&quot;</span>, <span class="hljs-string">&quot;()&quot;</span>);         <span class="hljs-comment">// =&gt; False</span>

<span class="hljs-comment">// In this case &apos;(&apos; and &apos;[&apos; open a section, while &apos;)&apos; and &apos;]&apos; close a section</span>
Kata.IsBalanced(<span class="hljs-string">&quot;(Sensei [says] yes!)&quot;</span>, <span class="hljs-string">&quot;()[]&quot;</span>);   <span class="hljs-comment">// =&gt; True</span>
Kata.IsBalanced(<span class="hljs-string">&quot;(Sensei [says) no!]&quot;</span>, <span class="hljs-string">&quot;()[]&quot;</span>);    <span class="hljs-comment">// =&gt; False</span>

<span class="hljs-comment">// In this case a single quote (&apos;) both opens and closes a section</span>
Kata.IsBalanced(<span class="hljs-string">&quot;Sensei says &apos;yes&apos;!&quot;</span>, <span class="hljs-string">&quot;&apos;&apos;&quot;</span>);       <span class="hljs-comment">// =&gt; True</span>
Kata.IsBalanced(<span class="hljs-string">&quot;Sensei say&apos;s no!&quot;</span>, <span class="hljs-string">&quot;&apos;&apos;&quot;</span>);         <span class="hljs-comment">// =&gt; False</span></code></pre>
<pre style="display: none;"><code class="language-coffeescript"><span class="hljs-comment"># In this case &apos;(&apos; opens a section, and &apos;)&apos; closes a section</span>
isBalanced(<span class="hljs-string">&quot;(Sensei says yes!)&quot;</span>, <span class="hljs-string">&quot;()&quot;</span>)       <span class="hljs-comment"># =&gt; True</span>
isBalanced(<span class="hljs-string">&quot;(Sensei says no!&quot;</span>, <span class="hljs-string">&quot;()&quot;</span>)         <span class="hljs-comment"># =&gt; False</span>

<span class="hljs-comment"># In this case &apos;(&apos; and &apos;[&apos; open a section, while &apos;)&apos; and &apos;]&apos; close a section</span>
isBalanced(<span class="hljs-string">&quot;(Sensei [says] yes!)&quot;</span>, <span class="hljs-string">&quot;()[]&quot;</span>)   <span class="hljs-comment"># =&gt; True</span>
isBalanced(<span class="hljs-string">&quot;(Sensei [says) no!]&quot;</span>, <span class="hljs-string">&quot;()[]&quot;</span>)    <span class="hljs-comment"># =&gt; False</span>

<span class="hljs-comment"># In this case a single quote (&apos;) both opens and closes a section</span>
isBalanced(<span class="hljs-string">&quot;Sensei says &apos;yes&apos;!&quot;</span>, <span class="hljs-string">&quot;&apos;&apos;&quot;</span>)       <span class="hljs-comment"># =&gt; True</span>
isBalanced(<span class="hljs-string">&quot;Sensei say&apos;s no!&quot;</span>, <span class="hljs-string">&quot;&apos;&apos;&quot;</span>)         <span class="hljs-comment"># =&gt; False</span></code></pre>

### Solution