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
