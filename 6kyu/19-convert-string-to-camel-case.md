### Problem:
<p>Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized <strong>only</strong> if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). </p>
<h2 id="examples">Examples</h2>
<pre style="display: none;"><code class="language-php">toCamelCase(<span class="hljs-string">&quot;the-stealth-warrior&quot;</span>); <span class="hljs-comment">// returns &quot;theStealthWarrior&quot;</span>

toCamelCase(<span class="hljs-string">&quot;The_Stealth_Warrior&quot;</span>); <span class="hljs-comment">// returns &quot;TheStealthWarrior&quot;</span></code></pre>
<pre style="display: none;"><code class="language-objc">toCamelCase(<span class="hljs-string">@&quot;the-stealth-warrior&quot;</span>); <span class="hljs-comment">// =&gt; @&quot;theStealthWarrior&quot;</span>

toCamelCase(<span class="hljs-string">@&quot;The_Stealth_Warrior&quot;</span>); <span class="hljs-comment">// =&gt; @&quot;TheStealthWarrior&quot;</span></code></pre>
<pre><code class="language-javascript">toCamelCase(<span class="hljs-string">&quot;the-stealth-warrior&quot;</span>) <span class="hljs-comment">// returns &quot;theStealthWarrior&quot;</span>

toCamelCase(<span class="hljs-string">&quot;The_Stealth_Warrior&quot;</span>) <span class="hljs-comment">// returns &quot;TheStealthWarrior&quot;</span></code></pre>
<pre style="display: none;"><code class="language-coffeescript">toCamelCase(<span class="hljs-string">&quot;the-stealth-warrior&quot;</span>) <span class="hljs-comment"># returns &quot;theStealthWarrior&quot;</span>

toCamelCase(<span class="hljs-string">&quot;The_Stealth_Warrior&quot;</span>) <span class="hljs-comment"># returns &quot;TheStealthWarrior&quot;</span></code></pre>
<pre style="display: none;"><code class="language-ruby">to_camel_case(<span class="hljs-string">&quot;the-stealth-warrior&quot;</span>) <span class="hljs-comment"># returns &quot;theStealthWarrior&quot;</span>

to_camel_case(<span class="hljs-string">&quot;The_Stealth_Warrior&quot;</span>) <span class="hljs-comment"># returns &quot;TheStealthWarrior&quot;</span></code></pre>
<pre style="display: none;"><code class="language-python">to_camel_case(<span class="hljs-string">&quot;the-stealth-warrior&quot;</span>) <span class="hljs-comment"># returns &quot;theStealthWarrior&quot;</span>

to_camel_case(<span class="hljs-string">&quot;The_Stealth_Warrior&quot;</span>) <span class="hljs-comment"># returns &quot;TheStealthWarrior&quot;</span></code></pre>
<pre style="display: none;"><code class="language-elixir">to_camel_case(<span class="hljs-string">&quot;the-stealth-warrior&quot;</span>) <span class="hljs-comment"># returns &quot;theStealthWarrior&quot;</span>

to_camel_case(<span class="hljs-string">&quot;The_Stealth_Warrior&quot;</span>) <span class="hljs-comment"># returns &quot;TheStealthWarrior&quot;</span></code></pre>
<pre style="display: none;"><code class="language-haskell"><span class="hljs-title">toCamelCase</span> <span class="hljs-string">&quot;the-stealth-warrior&quot;</span> <span class="hljs-comment">-- returns &quot;theStealthWarrior&quot;</span>

<span class="hljs-title">toCamelCase</span> <span class="hljs-string">&quot;The_Stealth_Warrior&quot;</span> <span class="hljs-comment">-- returns &quot;TheStealthWarrior&quot;</span></code></pre>
<pre style="display: none;"><code class="language-csharp">Kata.ToCamelCase(<span class="hljs-string">&quot;the-stealth-warrior&quot;</span>) <span class="hljs-comment">// returns &quot;theStealthWarrior&quot;</span>

Kata.ToCamelCase(<span class="hljs-string">&quot;The_Stealth_Warrior&quot;</span>) <span class="hljs-comment">// returns &quot;TheStealthWarrior&quot;</span></code></pre>
<pre style="display: none;"><code class="language-cpp">to_camel_case(<span class="hljs-string">&quot;the-stealth-warrior&quot;</span>) <span class="hljs-comment">// returns &quot;theStealthWarrior&quot;</span>

to_camel_case(<span class="hljs-string">&quot;The_Stealth_Warrior&quot;</span>) <span class="hljs-comment">// returns &quot;TheStealthWarrior&quot;</span></code></pre>
<pre style="display: none;"><code class="language-r">to_camel_case(<span class="hljs-string">&quot;the-stealth-warrior&quot;</span>) <span class="hljs-comment"># returns &quot;theStealthWarrior&quot;</span>

to_camel_case(<span class="hljs-string">&quot;The_Stealth_Warrior&quot;</span>) <span class="hljs-comment"># returns &quot;TheStealthWarrior&quot;</span>

to_camel_case(<span class="hljs-string">&quot;mixed-separator_example&quot;</span>) <span class="hljs-comment"># returns &quot;mixedSeparatorExample&quot;</span></code></pre>
<pre style="display: none;"><code class="language-go">ToCamelCase(<span class="hljs-string">&quot;the-stealth-warrior&quot;</span>); <span class="hljs-comment">// returns &quot;theStealthWarrior&quot;</span>

ToCamelCase(<span class="hljs-string">&quot;The_Stealth_Warrior&quot;</span>); <span class="hljs-comment">// returns &quot;TheStealthWarrior&quot;</span></code></pre>
<pre style="display: none;"><code class="language-julia">tocamelcase(<span class="hljs-string">&quot;the-stealth-warrior&quot;</span>) <span class="hljs-comment"># returns &quot;theStealthWarrior&quot;</span>
tocamelcase(<span class="hljs-string">&quot;The_Stealth_Warrior&quot;</span>) <span class="hljs-comment"># returns &quot;TheStealthWarrior&quot;</span></code></pre>
<pre style="display: none;"><code class="language-scala">toCamelCase(<span class="hljs-string">&quot;the-stealth-warrior&quot;</span>) <span class="hljs-comment">// returns &quot;theStealthWarrior&quot;</span>

toCamelCase(<span class="hljs-string">&quot;The_Stealth_Warrior&quot;</span>) <span class="hljs-comment">// returns &quot;TheStealthWarrior&quot;</span></code></pre>

### Solution