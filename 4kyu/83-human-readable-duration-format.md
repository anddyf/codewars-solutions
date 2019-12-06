### Problem:
<p>Your task in order to complete this Kata is to write a function which formats a duration, given as a number of seconds, in a human-friendly way.</p>
<p>The function must accept a non-negative integer. If it is zero, it just returns <code>&quot;now&quot;</code>. Otherwise,  the duration is expressed as a combination of <code>years</code>, <code>days</code>, <code>hours</code>, <code>minutes</code> and <code>seconds</code>.</p>
<p>It is much easier to understand with an example:</p>
<pre style="display: none;"><code class="language-c">formatDuration (<span class="hljs-number">62</span>)    <span class="hljs-comment">// returns &quot;1 minute and 2 seconds&quot;</span>
formatDuration (<span class="hljs-number">3662</span>)  <span class="hljs-comment">// returns &quot;1 hour, 1 minute and 2 seconds&quot;</span></code></pre>
<pre style="display: none;"><code class="language-nasm"><span class="hljs-keyword">mov</span> <span class="hljs-built_in">edi</span>, <span class="hljs-number">62</span>
<span class="hljs-keyword">call</span> fmtduration      <span class="hljs-comment">; RAX &lt;- `1 minute and 2 seconds\0`</span>

<span class="hljs-keyword">mov</span> <span class="hljs-built_in">edi</span>, <span class="hljs-number">3662</span>
<span class="hljs-keyword">call</span> fmtduration      <span class="hljs-comment">; RAX &lt;- `1 hour, 1 minute and 2 seconds\0`</span></code></pre>
<pre style="display: none;"><code class="language-cpp">format_duration(<span class="hljs-number">62</span>)    <span class="hljs-comment">// returns &quot;1 minute and 2 seconds&quot;</span>
format_duration(<span class="hljs-number">3662</span>)  <span class="hljs-comment">// returns &quot;1 hour, 1 minute and 2 seconds&quot;</span></code></pre>
<pre><code class="language-javascript">formatDuration(<span class="hljs-number">62</span>)    <span class="hljs-comment">// returns &quot;1 minute and 2 seconds&quot;</span>
formatDuration(<span class="hljs-number">3662</span>)  <span class="hljs-comment">// returns &quot;1 hour, 1 minute and 2 seconds&quot;</span></code></pre>
<pre style="display: none;"><code class="language-python">format_duration(<span class="hljs-number">62</span>)    <span class="hljs-comment"># returns &quot;1 minute and 2 seconds&quot;</span>
format_duration(<span class="hljs-number">3662</span>)  <span class="hljs-comment"># returns &quot;1 hour, 1 minute and 2 seconds&quot;</span></code></pre>
<pre style="display: none;"><code class="language-ruby">format_duration(<span class="hljs-number">62</span>)    <span class="hljs-comment"># returns &quot;1 minute and 2 seconds&quot;</span>
format_duration(<span class="hljs-number">3662</span>)  <span class="hljs-comment"># returns &quot;1 hour, 1 minute and 2 seconds&quot;</span></code></pre>
<pre style="display: none;"><code class="language-elixir">format_duration(<span class="hljs-number">62</span>)    <span class="hljs-comment"># returns &quot;1 minute and 2 seconds&quot;</span>
format_duration(<span class="hljs-number">3662</span>)  <span class="hljs-comment"># returns &quot;1 hour, 1 minute and 2 seconds&quot;</span></code></pre>
<pre style="display: none;"><code class="language-php">format_duration(<span class="hljs-number">62</span>)    <span class="hljs-comment"># returns &quot;1 minute and 2 seconds&quot;</span>
format_duration(<span class="hljs-number">3662</span>)  <span class="hljs-comment"># returns &quot;1 hour, 1 minute and 2 seconds&quot;</span></code></pre>
<pre style="display: none;"><code class="language-haskell"><span class="hljs-title">formatDuration</span> <span class="hljs-number">62</span>     <span class="hljs-comment">-- returns &quot;1 minute and 2 seconds&quot;</span>
<span class="hljs-title">formatDuration</span> <span class="hljs-number">3662</span>   <span class="hljs-comment">-- returns &quot;1 hour, 1 minute and 2 seconds&quot;</span></code></pre>
<pre style="display: none;"><code class="language-java">TimeFormatter.formatDuration(<span class="hljs-number">62</span>)   <span class="hljs-comment">//returns &quot;1 minute and 2 seconds&quot;</span>
TimeFormatter.formatDuration(<span class="hljs-number">3662</span>) <span class="hljs-comment">//returns &quot;1 hour, 1 minute and 2 seconds&quot;</span></code></pre>
<pre style="display: none;"><code class="language-groovy">Kata.formatDuration(<span class="hljs-number">62</span>)   <span class="hljs-comment">//returns &quot;1 minute and 2 seconds&quot;</span>
Kata.formatDuration(<span class="hljs-number">3662</span>) <span class="hljs-comment">//returns &quot;1 hour, 1 minute and 2 seconds&quot;</span></code></pre>
<pre style="display: none;"><code class="language-shell">duration 62            # echos &quot;1 minute and 2 seconds&quot;
duration 3662          # echos &quot;1 hour, 1 minute and 2 seconds&quot;</code></pre>
<pre style="display: none;"><code class="language-julia">formatduration(<span class="hljs-number">62</span>)    <span class="hljs-comment"># returns &quot;1 minute and 2 seconds&quot;</span>
formatduration(<span class="hljs-number">3662</span>)  <span class="hljs-comment"># returns &quot;1 hour, 1 minute and 2 seconds&quot;</span></code></pre>
<pre style="display: none;"><code class="language-racket">(<span class="hljs-name">format-duration</span> <span class="hljs-number">62</span>)    <span class="hljs-comment">; returns &quot;1 minute and 2 seconds&quot;</span>
(<span class="hljs-name">format-duration</span> <span class="hljs-number">3662</span>)  <span class="hljs-comment">; returns &quot;1 hour, 1 minute and 2 seconds&quot;</span></code></pre>
<p><strong>For the purpose of this Kata, a year is 365 days and a day is 24 hours.</strong></p>
<p>Note that spaces are important.</p>
<h3 id="detailed-rules">Detailed rules</h3>
<p>The resulting expression is made of components like <code>4 seconds</code>, <code>1 year</code>, etc.  In general, a positive integer and one of the valid units of time, separated by a space. The unit of time is used in plural if the integer is greater than 1.</p>
<p>The components are separated by a comma and a space (<code>&quot;, &quot;</code>). Except the last component, which is separated by <code>&quot; and &quot;</code>, just like it would be written in English. </p>
<p>A more significant units of time will occur before than a least significant one. Therefore, <code>1 second and 1 year</code> is not correct, but <code>1 year and 1 second</code> is.</p>
<p>Different components have different unit of times. So there is not repeated units like in <code>5 seconds and 1 second</code>.</p>
<p>A component will not appear at all if its value happens to be zero.  Hence, <code>1 minute and 0 seconds</code> is not valid, but it should be just <code>1 minute</code>.</p>
<p> A unit of time must be used &quot;as much as possible&quot;. It means that the function should not return <code>61 seconds</code>, but <code>1 minute and 1 second</code> instead.  Formally, the duration specified by  of a component must not be greater than any valid more significant unit of time.</p>

### Solution