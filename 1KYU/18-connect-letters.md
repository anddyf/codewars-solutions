### Problem:
<p>You have a string which contains only letters A, B, X and Y (eg. BXABAYBA).
<br>
You can connect individual letters but you can only connect A and B or X and Y.
<br>
Each letter can only be connected once (to one other letter). You can not connect same letters (eg. A with A).
<br>
Connections must NOT cross.
<br>
Bounds: 0 &lt; length of string &lt; 1000
<br>
Your task is to write a program which calculates maximum number of such connections.
<br><br>
Example (in both cases, maximum is 3)<br><br></p>
<pre><code>B X A B A Y B A
  | |_|   | |_|
  |_______|</code></pre><p>or</p>
<pre><code>B X A B A Y B A
|   |_| |   |_|
|_______|</code></pre>
### Solution