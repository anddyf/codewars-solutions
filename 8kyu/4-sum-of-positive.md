### Problem:
<p>You get an array of numbers, return the sum of all of the positives ones.</p>
<p>Example <code>[1,-4,7,12]</code> =&gt; <code>1 + 7 + 12 = 20</code></p>
<p>Note: if there is nothing to sum, the sum is default to <code>0</code>.</p>

### Solution
```javascript
function positiveSum(arr) {
  var total = 0;

  for (i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      total += arr[i];
    }
  }
  return total;
}
```

```javascript
function positiveSum(arr) {
   return arr.reduce((a,b)=> a + (b > 0 ? b : 0),0);
}
```

```javascript
function positiveSum (arr) {
  return arr.filter(x => x>=0).reduce((a, c) => a + c, 0);
}
```

```javascript
function positiveSum(arr) {
  var sum = 0;
  arr.forEach(function(v) {
    if(v>0){sum+=v;}
  });
  return sum;
}
```
