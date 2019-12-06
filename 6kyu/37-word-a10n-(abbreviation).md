### Problem:
<p>The word <code>i18n</code> is a common abbreviation of <code>internationalization</code> in the developer community, used instead of typing the whole word and trying to spell it correctly. Similarly, <code>a11y</code> is an abbreviation of <code>accessibility</code>.</p>
<p>Write a function that takes a string and turns any and all &quot;words&quot; (see below) within that string of <strong>length 4 or greater</strong> into an abbreviation, following these rules:</p>
<ul>
<li>A &quot;word&quot; is a sequence of alphabetical characters. By this definition, any other character like a space or hyphen (eg. &quot;elephant-ride&quot;) will split up a series of letters into two words (eg. &quot;elephant&quot; and &quot;ride&quot;).</li>
<li>The abbreviated version of the word should have the first letter, then the number of removed characters, then the last letter (eg. &quot;elephant ride&quot; =&gt; &quot;e6t r2e&quot;).</li>
</ul>
<h2 id="example">Example</h2>
<pre><code class="language-js">abbreviate(<span class="hljs-string">&quot;elephant-rides are really fun!&quot;</span>)
<span class="hljs-comment">//          ^^^^^^^^*^^^^^*^^^*^^^^^^*^^^*</span>
<span class="hljs-comment">// words (^):   &quot;elephant&quot; &quot;rides&quot; &quot;are&quot; &quot;really&quot; &quot;fun&quot;</span>
<span class="hljs-comment">//                123456     123     1     1234     1</span>
<span class="hljs-comment">// ignore short words:               X              X</span>

<span class="hljs-comment">// abbreviate:    &quot;e6t&quot;     &quot;r3s&quot;  &quot;are&quot;  &quot;r4y&quot;   &quot;fun&quot;</span>
<span class="hljs-comment">// all non-word characters (*) remain in place</span>
<span class="hljs-comment">//                     &quot;-&quot;      &quot; &quot;    &quot; &quot;     &quot; &quot;     &quot;!&quot;</span>
=== <span class="hljs-string">&quot;e6t-r3s are r4y fun!&quot;</span></code></pre>

### Solution