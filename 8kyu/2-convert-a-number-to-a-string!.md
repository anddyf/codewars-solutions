### Problem:
<p>We need a function that can transform a number into a string.</p>
<p>What ways of achieving this do you know?</p>
<h4 id="examples">Examples:</h4>
<pre><code class="language-php">numberToString(<span class="hljs-number">123</span>); <span class="hljs-comment">// returns &apos;123&apos;;`   </span>
numberToString(<span class="hljs-number">999</span>); <span class="hljs-comment">// returns &apos;999&apos;;`</span></code></pre>

### Solution
```javascript
function numberToString(num) {
  return num.toString();
}
```

```javascript
function numberToString(num) {
  return String(num);
}
```

**Note: String(value) vs value.toString()**
- `value.ToString()` will cause error if value is `null` or `undefined`
- `String(value)` mostly works like `value + ''`

```javascript
function numberToString(num) {
  return num + '';
}
```

```javascript
function numberToString(num) {
  return '' + num;
}
```

**Note: concatenation**
- Aything concatenated with string will coerced to string

```javascript
const numberToString = num => `${num}`;
```
