### Problem:
<img src="https://media.giphy.com/media/13AN8X7jBIm15m/giphy.gif" style="width:463px;height:200px;">

<p>Every budding hacker needs an alias! <code>The Phantom Phreak</code>, <code>Acid Burn</code>, <code>Zero Cool</code> and <code>Crash Override</code> are some notable examples from the film <code>Hackers</code>.</p>
<p>Your task is to create a function that, given a proper first and last name, will return the correct alias.</p>
<ul>
<li><p>I have created two objects that return a one word name in response to the first letter of your first name and one for the first letter of your surname.</p>
</li>
<li><p>If the first character of either of the names given to the function is not a letter from <code>A - Z</code>, you should return <code>&quot;Your name must start with a letter from A - Z.&quot;</code></p>
</li>
<li><p>Sometimes people might forget to capitalize the first letter of their name so your function should accommodate for these grammatical errors.</p>
</li>
</ul>
<hr>
<pre><code class="language-javascript"><span class="hljs-keyword">var</span> firstName = {<span class="hljs-attr">A</span>: <span class="hljs-string">&apos;Alpha&apos;</span>, <span class="hljs-attr">B</span>: <span class="hljs-string">&apos;Beta&apos;</span>, <span class="hljs-attr">C</span>: <span class="hljs-string">&apos;Cache&apos;</span> ...}
<span class="hljs-keyword">var</span> surname = {<span class="hljs-attr">A</span>: <span class="hljs-string">&apos;Analogue&apos;</span>, <span class="hljs-attr">B</span>: <span class="hljs-string">&apos;Bomb&apos;</span>, <span class="hljs-attr">C</span>: <span class="hljs-string">&apos;Catalyst&apos;</span> ...}

aliasGen(<span class="hljs-string">&apos;Larry&apos;</span>, <span class="hljs-string">&apos;Brentwood&apos;</span>) === <span class="hljs-string">&apos;Logic Bomb&apos;</span>
aliasGen(<span class="hljs-string">&apos;123abc&apos;</span>, <span class="hljs-string">&apos;Petrovic&apos;</span>) === <span class="hljs-string">&apos;Your name must start with a letter from A - Z.&apos;</span></code></pre>
<pre style="display: none;"><code class="language-python">FIRST_NAME = {<span class="hljs-string">&apos;A&apos;</span>: <span class="hljs-string">&apos;Alpha&apos;</span>, <span class="hljs-string">&apos;B&apos;</span>: <span class="hljs-string">&apos;Beta&apos;</span>, <span class="hljs-string">&apos;C&apos;</span>: <span class="hljs-string">&apos;Cache&apos;</span>, ...}
SURNAME = {<span class="hljs-string">&apos;A&apos;</span>: <span class="hljs-string">&apos;Analogue&apos;</span>, <span class="hljs-string">&apos;B&apos;</span>: <span class="hljs-string">&apos;Bomb&apos;</span>, <span class="hljs-string">&apos;C&apos;</span>: <span class="hljs-string">&apos;Catalyst&apos;</span> ...}

alias_gen(<span class="hljs-string">&apos;Larry&apos;</span>, <span class="hljs-string">&apos;Brentwood&apos;</span>) == <span class="hljs-string">&apos;Logic Bomb&apos;</span>
alias_gen(<span class="hljs-string">&apos;123abc&apos;</span>, <span class="hljs-string">&apos;Petrovic&apos;</span>) == <span class="hljs-string">&apos;Your name must start with a letter from A - Z.&apos;</span></code></pre>
<pre style="display: none;"><code class="language-ruby">FIRST_NAME = {<span class="hljs-string">&apos;A&apos;</span>: <span class="hljs-string">&apos;Alpha&apos;</span>, <span class="hljs-string">&apos;B&apos;</span>: <span class="hljs-string">&apos;Beta&apos;</span>, <span class="hljs-string">&apos;C&apos;</span>: <span class="hljs-string">&apos;Cache&apos;</span>, ...}
SURNAME = {<span class="hljs-string">&apos;A&apos;</span>: <span class="hljs-string">&apos;Analogue&apos;</span>, <span class="hljs-string">&apos;B&apos;</span>: <span class="hljs-string">&apos;Bomb&apos;</span>, <span class="hljs-string">&apos;C&apos;</span>: <span class="hljs-string">&apos;Catalyst&apos;</span> ...}

alias_gen(<span class="hljs-string">&apos;Larry&apos;</span>, <span class="hljs-string">&apos;Brentwood&apos;</span>) == <span class="hljs-string">&apos;Logic Bomb&apos;</span>
alias_gen(<span class="hljs-string">&apos;123abc&apos;</span>, <span class="hljs-string">&apos;Petrovic&apos;</span>) == <span class="hljs-string">&apos;Your name must start with a letter from A - Z.&apos;</span></code></pre>
<pre style="display: none;"><code class="language-csharp">FirstName = {{<span class="hljs-string">&quot;A&quot;</span>, <span class="hljs-string">&quot;Alpha&quot;</span>}, {<span class="hljs-string">&quot;B&quot;</span>, <span class="hljs-string">&quot;Beta&quot;</span>}, {<span class="hljs-string">&quot;C&quot;</span>, <span class="hljs-string">&quot;Cache&quot;</span>}, ...}
Surname = {{<span class="hljs-string">&quot;A&quot;</span>, <span class="hljs-string">&quot;Analogue&quot;</span>}, {<span class="hljs-string">&quot;B&quot;</span>, <span class="hljs-string">&quot;Bomb&quot;</span>}, {<span class="hljs-string">&quot;C&quot;</span>, <span class="hljs-string">&quot;Catalyst&quot;</span>} ...}

<span class="hljs-comment">// These dictionaries are defined on other partial Kata class</span>

AliasGen(<span class="hljs-string">&apos;Larry&apos;</span>, <span class="hljs-string">&apos;Brentwood&apos;</span>) == <span class="hljs-string">&apos;Logic Bomb&apos;</span>
AliasGen(<span class="hljs-string">&apos;123abc&apos;</span>, <span class="hljs-string">&apos;Petrovic&apos;</span>) == <span class="hljs-string">&apos;Your name must start with a letter from A - Z.&apos;</span></code></pre>
<p>Happy hacking!</p>

### Solution