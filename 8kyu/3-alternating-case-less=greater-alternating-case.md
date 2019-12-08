### Problem:
<h1 id="alternating-case--alternating-case">altERnaTIng cAsE &lt;=&gt; ALTerNAtiNG CaSe</h1>
<p>Define <code>String.prototype.toAlternatingCase</code> (or a similar function/method <em>such as</em> <code>to_alternating_case</code>/<code>toAlternatingCase</code>/<code>ToAlternatingCase</code> in your selected language; <strong>see the initial solution for details</strong>) such that each lowercase letter becomes uppercase and each uppercase letter becomes lowercase. For example:</p>
<pre><code class="language-javascript"><span class="hljs-string">&quot;hello world&quot;</span>.toAlternatingCase() === <span class="hljs-string">&quot;HELLO WORLD&quot;</span>
<span class="hljs-string">&quot;HELLO WORLD&quot;</span>.toAlternatingCase() === <span class="hljs-string">&quot;hello world&quot;</span>
<span class="hljs-string">&quot;hello WORLD&quot;</span>.toAlternatingCase() === <span class="hljs-string">&quot;HELLO world&quot;</span>
<span class="hljs-string">&quot;HeLLo WoRLD&quot;</span>.toAlternatingCase() === <span class="hljs-string">&quot;hEllO wOrld&quot;</span>
<span class="hljs-string">&quot;12345&quot;</span>.toAlternatingCase() === <span class="hljs-string">&quot;12345&quot;</span> <span class="hljs-comment">// Non-alphabetical characters are unaffected</span>
<span class="hljs-string">&quot;1a2b3c4d5e&quot;</span>.toAlternatingCase() === <span class="hljs-string">&quot;1A2B3C4D5E&quot;</span>
<span class="hljs-string">&quot;String.prototype.toAlternatingCase&quot;</span>.toAlternatingCase() === <span class="hljs-string">&quot;sTRING.PROTOTYPE.TOaLTERNATINGcASE&quot;</span></code></pre>
<pre style="display: none;"><code class="language-ruby">&quot;hello world&quot;.to_alternating_case() === &quot;HELLO WORLD&quot;
&quot;HELLO WORLD&quot;.to_alternating_case() === &quot;hello world&quot;
&quot;hello WORLD&quot;.to_alternating_case() === &quot;HELLO world&quot;
&quot;HeLLo WoRLD&quot;.to_alternating_case() === &quot;hEllO wOrld&quot;
&quot;12345&quot;.to_alternating_case() === &quot;12345&quot; // Non-alphabetical characters are unaffected
&quot;1a2b3c4d5e&quot;.to_alternating_case() === &quot;1A2B3C4D5E&quot;
&quot;String.prototype.toAlternatingCase&quot;.to_alternating_case() === &quot;sTRING.PROTOTYPE.TOaLTERNATINGcASE&quot;</code></pre>
<pre style="display: none;"><code class="language-crystal"><span class="hljs-string">&quot;hello world&quot;</span>.to_alternating_case() === <span class="hljs-string">&quot;HELLO WORLD&quot;</span>
<span class="hljs-string">&quot;HELLO WORLD&quot;</span>.to_alternating_case() === <span class="hljs-string">&quot;hello world&quot;</span>
<span class="hljs-string">&quot;hello WORLD&quot;</span>.to_alternating_case() === <span class="hljs-string">&quot;HELLO world&quot;</span>
<span class="hljs-string">&quot;HeLLo WoRLD&quot;</span>.to_alternating_case() === <span class="hljs-string">&quot;hEllO wOrld&quot;</span>
<span class="hljs-string">&quot;12345&quot;</span>.to_alternating_case() === <span class="hljs-string">&quot;12345&quot;</span> /<span class="hljs-regexp">/ Non-alphabetical characters are unaffected
&quot;1a2b3c4d5e&quot;.to_alternating_case() === &quot;1A2B3C4D5E&quot;
&quot;String.prototype.toAlternatingCase&quot;.to_alternating_case() === &quot;sTRING.PROTOTYPE.TOaLTERNATINGcASE&quot;</span></code></pre>
<pre style="display: none;"><code class="language-java">StringUtils.toAlternativeString(<span class="hljs-string">&quot;hello world&quot;</span>) == <span class="hljs-string">&quot;HELLO WORLD&quot;</span>
StringUtils.toAlternativeString(<span class="hljs-string">&quot;HELLO WORLD&quot;</span>) == <span class="hljs-string">&quot;hello world&quot;</span>
StringUtils.toAlternativeString(<span class="hljs-string">&quot;hello WORLD&quot;</span>) == <span class="hljs-string">&quot;HELLO world&quot;</span>
StringUtils.toAlternativeString(<span class="hljs-string">&quot;HeLLo WoRLD&quot;</span>) == <span class="hljs-string">&quot;hEllO wOrld&quot;</span>
StringUtils.toAlternativeString(<span class="hljs-string">&quot;12345&quot;</span>) == <span class="hljs-string">&quot;12345&quot;</span> <span class="hljs-comment">// Non-alphabetical characters are unaffected</span>
StringUtils.toAlternativeString(<span class="hljs-string">&quot;1a2b3c4d5e&quot;</span>) == <span class="hljs-string">&quot;1A2B3C4D5E&quot;</span>
StringUtils.toAlternativeString(<span class="hljs-string">&quot;StringUtils.toAlternatingCase&quot;</span>) == <span class="hljs-string">&quot;sTRINGuTILS.TOaLTERNATINGcASE&quot;</span></code></pre>
<pre style="display: none;"><code class="language-haskell"><span class="hljs-title">toAlternatingCase</span> <span class="hljs-string">&quot;hello world&quot;</span> `shouldBe` <span class="hljs-string">&quot;HELLO WORLD&quot;</span>
<span class="hljs-title">toAlternatingCase</span> <span class="hljs-string">&quot;HELLO WORLD&quot;</span> `shouldBe` <span class="hljs-string">&quot;hello world&quot;</span>
<span class="hljs-title">toAlternatingCase</span> <span class="hljs-string">&quot;hello WORLD&quot;</span> `shouldBe` <span class="hljs-string">&quot;HELLO world&quot;</span>
<span class="hljs-title">toAlternatingCase</span> <span class="hljs-string">&quot;HeLLo WoRLD&quot;</span> `shouldBe` <span class="hljs-string">&quot;hEllO wOrld&quot;</span>
<span class="hljs-title">toAlternatingCase</span> <span class="hljs-string">&quot;12345&quot;</span>       `shouldBe` <span class="hljs-string">&quot;12345&quot;</span>
<span class="hljs-title">toAlternatingCase</span> <span class="hljs-string">&quot;1a2b3c4d5e&quot;</span>  `shouldBe` <span class="hljs-string">&quot;1A2B3C4D5E&quot;</span></code></pre>
<pre style="display: none;"><code class="language-csharp"><span class="hljs-string">&quot;hello world&quot;</span>.ToAlternatingCase() == <span class="hljs-string">&quot;HELLO WORLD&quot;</span>
<span class="hljs-string">&quot;HELLO WORLD&quot;</span>.ToAlternatingCase() == <span class="hljs-string">&quot;hello world&quot;</span>
<span class="hljs-string">&quot;hello WORLD&quot;</span>.ToAlternatingCase() == <span class="hljs-string">&quot;HELLO world&quot;</span>
<span class="hljs-string">&quot;HeLLo WoRLD&quot;</span>.ToAlternatingCase() == <span class="hljs-string">&quot;hEllO wOrld&quot;</span>
<span class="hljs-string">&quot;12345&quot;</span>.ToAlternatingCase() == <span class="hljs-string">&quot;12345&quot;</span> <span class="hljs-comment">// Non-alphabetical characters are unaffected</span>
<span class="hljs-string">&quot;1a2b3c4d5e&quot;</span>.ToAlternatingCase() == <span class="hljs-string">&quot;1A2B3C4D5E&quot;</span>
<span class="hljs-string">&quot;String.ToAlternatingCase&quot;</span>.ToAlternatingCase() == <span class="hljs-string">&quot;sTRING.tOaLTERNATINGcASE&quot;</span></code></pre>
<pre style="display: none;"><code class="language-elixir">alter_case(<span class="hljs-string">&quot;hello world&quot;</span>) == <span class="hljs-string">&quot;HELLO WORLD&quot;</span>
alter_case(<span class="hljs-string">&quot;HELLO WORLD&quot;</span>) == <span class="hljs-string">&quot;hello world&quot;</span>
alter_case(<span class="hljs-string">&quot;hello WORLD&quot;</span>) == <span class="hljs-string">&quot;HELLO world&quot;</span>
alter_case(<span class="hljs-string">&quot;HeLLo WoRLD&quot;</span>) == <span class="hljs-string">&quot;hEllO wOrld&quot;</span>
alter_case(<span class="hljs-string">&quot;12345&quot;</span>) == <span class="hljs-string">&quot;12345&quot;</span> <span class="hljs-comment"># Non-alphabetical characters are unaffected</span>
alter_case(<span class="hljs-string">&quot;1a2b3c4d5e&quot;</span>) == <span class="hljs-string">&quot;1A2B3C4D5E&quot;</span>
alter_case(<span class="hljs-string">&quot;StringUtils.toAlternatingCase&quot;</span>) == <span class="hljs-string">&quot;sTRINGuTILS.TOaLTERNATINGcASE&quot;</span></code></pre>
<pre style="display: none;"><code class="language-c">to_alternating_case(<span class="hljs-string">&quot;hello world&quot;</span>); <span class="hljs-comment">// =&gt; &quot;HELLO WORLD&quot;</span>
to_alternating_case(<span class="hljs-string">&quot;HELLO WORLD&quot;</span>); <span class="hljs-comment">// =&gt; &quot;hello world&quot;</span>
to_alternating_case(<span class="hljs-string">&quot;hello WORLD&quot;</span>); <span class="hljs-comment">// =&gt; &quot;HELLO world&quot;</span>
to_alternating_case(<span class="hljs-string">&quot;HeLLo WoRLD&quot;</span>); <span class="hljs-comment">// =&gt; &quot;hEllO wOrld&quot;</span>
to_alternating_case(<span class="hljs-string">&quot;12345&quot;</span>); <span class="hljs-comment">// =&gt; &quot;12345&quot; (Non-alphabetical characters are unaffected)</span>
to_alternating_case(<span class="hljs-string">&quot;1a2b3c4d5e&quot;</span>); <span class="hljs-comment">// =&gt; &quot;1A2B3C4D5E&quot;</span>
to_alternating_case(<span class="hljs-string">&quot;String.prototype.toAlternatingCase&quot;</span>); <span class="hljs-comment">// =&gt; &quot;sTRING.PROTOTYPE.TOaLTERNATINGcASE&quot;</span></code></pre>
<pre style="display: none;"><code class="language-C++"><span class="hljs-built_in">string</span> source = <span class="hljs-string">&quot;HeLLo WoRLD&quot;</span>;
<span class="hljs-built_in">string</span> upperCase = to_alternating_case(source);
<span class="hljs-built_in">cout</span> &lt;&lt; upperCase &lt;&lt; <span class="hljs-built_in">endl</span>; <span class="hljs-comment">// outputs: hEllO wOrld</span></code></pre>
<pre style="display: none;"><code class="language-typescript">toAlternatingCase(<span class="hljs-string">&quot;hello world&quot;</span>) === <span class="hljs-string">&quot;HELLO WORLD&quot;</span>
toAlternatingCase(<span class="hljs-string">&quot;HELLO WORLD&quot;</span>) === <span class="hljs-string">&quot;hello world&quot;</span>
toAlternatingCase(<span class="hljs-string">&quot;hello WORLD&quot;</span>) === <span class="hljs-string">&quot;HELLO world&quot;</span>
toAlternatingCase(<span class="hljs-string">&quot;HeLLo WoRLD&quot;</span>) === <span class="hljs-string">&quot;hEllO wOrld&quot;</span>
toAlternatingCase(<span class="hljs-string">&quot;12345&quot;</span>) === <span class="hljs-string">&quot;12345&quot;</span> <span class="hljs-comment">// Non-alphabetical characters are unaffected</span>
toAlternatingCase(<span class="hljs-string">&quot;1a2b3c4d5e&quot;</span>) === <span class="hljs-string">&quot;1A2B3C4D5E&quot;</span>
toAlternatingCase(<span class="hljs-string">&quot;String.prototype.toAlternatingCase&quot;</span>) === <span class="hljs-string">&quot;sTRING.PROTOTYPE.TOaLTERNATINGcASE&quot;</span></code></pre>
<p>As usual, your function/method should be pure, i.e. it should <strong>not</strong> mutate the original string.</p>

### Solution
```javascript
String.prototype.toAlternatingCase = function () {
    return this.split("").map(a => a === a.toUpperCase()? a.toLowerCase(): a.toUpperCase()).join('')
}
```

```javascript
const isLowerCase = (char) => char.toLowerCase() === char;
const swapCase = (char) => isLowerCase(char) ? char.toUpperCase() : char.toLowerCase();

String.prototype.toAlternatingCase = function() {
  return [...this].map(swapCase).join('');
};
```
**Note: ... syntax**
- Here `...` is spread operator which mostly works like split('') for string.
- It could be used for array item destructuring / spreading to a list

```javascript
String.prototype.toAlternatingCase = function () {
  new_str = "";
  for(var i = 0; i < this.length; i++) {
    if(this[i] === this[i].toUpperCase()) {
      new_str += this[i].toLowerCase();
    }
    else {
      new_str += this[i].toUpperCase();
    }
  }
  return new_str;
}
```
