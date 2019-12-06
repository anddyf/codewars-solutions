### Problem:
<p>There are 8 balls numbered from 0 to 7. 
Seven of them have the same weight. One is heavier. Your task is to find its number.</p>
<p>Your function <code>findBall</code> will receive single argument - <code>scales</code> object. The <code>scales</code> object contains an internally stored array of 8 elements (indexes 0-7), each having the same value except one, which is greater. It also has a public method named <code>getWeight(left, right)</code> which takes two arrays of indexes and returns -1, 0, or 1 based on the accumulation of the values found at the indexes passed are heavier, equal, or lighter.</p>
<p><code>getWeight</code> returns:</p>
<p><code>-1</code> if <strong>left</strong> pan is heavier</p>
<p><code>1</code> if <strong>right</strong> pan is heavier</p>
<p><code>0</code> if both pans weight the same</p>
<p>Examples of <code>scales.getWeight()</code> usage:</p>
<p><code>scales.getWeight([3], [7])</code> returns <code>-1</code> if ball 3 is heavier than ball 7, <code>1</code> if ball 7 is heavier, or <code>0</code> i these balls have the same weight.</p>
<p><code>scales.getWeight([3, 4], [5, 2])</code> returns <code>-1</code> if weight of balls 3 and 4 is heavier than weight of balls 5 and 2 etc.</p>
<p>So where&apos;s the catch, you may ask. Well - the scales is very old. You can use it only <strong>4 TIMES</strong> before the scale breaks.</p>
<p>Too easy? Try higher levels:</p>
<ul>
<li><a href="http://www.codewars.com/kata/54404a06cf36258b08000364" target="_blank">conqueror</a></li>
<li><a href="http://www.codewars.com/kata/544034f426bc6adda200000e" target="_blank">master</a></li>
</ul>

### Solution