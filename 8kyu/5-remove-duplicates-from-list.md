### Problem:
<p>Define a function that removes duplicates from an array of numbers and returns it as a result.</p>
<p>The order of the sequence has to stay the same.</p>

### Solution
```javascript
function distinct(a) {
  return Array.from(new Set(a));
}
```

```javascript
function distinct(a) {
  return [...new Set(a)];
}
```

```javascript
function distinct(a) {
  return a.filter((item, index) => a.indexOf(item) === index);
}
```

```javascript
function distinct(a) {
  const result = [];
  a.map(item => {
    if(!result.includes(item)) {
      result.push(item);
    } 
  })
  return result
}
```

```javascript
function distinct(a) {
  return a.reduce((a, c) => a.includes(c) ? a : [...a, c], []);
}
```