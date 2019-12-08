### Problem:
<p>It&apos;s bonus time in the big city! The fatcats are rubbing their paws in anticipation... but who is going to make the most money? </p>
<p>Build a function that takes in two arguments (salary, bonus). Salary will be an integer, and bonus a boolean.</p>
<p>If bonus is true, the salary should be multiplied by 10. If bonus is false, the fatcat did not make enough money and must receive only his stated salary.</p>
<p>Return the total figure the individual will receive as a string prefixed with &quot;&#xA3;&quot; (= <code>&quot;\u00A3&quot;</code>, JS, Go, and Java), &quot;$&quot; (C#, C++, Ruby, Clojure, Elixir, PHP and Python, Haskell, Lua) or &quot;&#xA5;&quot; (Rust).</p>

### Solution

```javascript
function bonusTime(salary, bonus) {
  return bonus ? `£${10 * salary}` : `£${salary}`;
}
```

```javascript
function bonusTime(salary, bonus) {
  return '£' + salary * (bonus ? 10 : 1);
}
```
```javascript
function bonusTime(salary, bonus) {
 return '£' + (bonus ? salary * 10 : salary)
}
```
