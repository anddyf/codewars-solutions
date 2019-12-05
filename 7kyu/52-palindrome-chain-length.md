### Problem:
<p>Number is a palindrome if it is equal to the number with digits in reversed order.
For example, 5, 44, 171, 4884 are palindromes and 43, 194, 4773 are not palindromes.</p>
<p>Write a method <code>palindrome_chain_length</code> which takes a positive number and returns the number of special steps needed to obtain a palindrome. The special step is: &quot;reverse the digits, and add to the original number&quot;. If the resulting number is not a  palindrome, repeat the procedure with the sum until the resulting number is a palindrome.</p>
<p>If the input number is already a palindrome, the number of steps is 0.</p>
<p>Input will always be a positive integer.</p>
<p>For example, start with 87:</p>
<p>87 + 78 = 165;
165 + 561 = 726;
 726 + 627 = 1353;
1353 + 3531 = 4884</p>
<p>4884 is a palindrome and we needed 4 steps to obtain it, so <code>palindrome_chain_length(87) == 4</code></p>

### Solution