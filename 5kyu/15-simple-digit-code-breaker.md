### Problem:
<p>In this kata, you have to break a code of 3 digits. The tryCode() function is called in loop with a max of 10 attempts. It have to return an array of 3 digits.</p>
<p>During the first call, the &quot;indications&quot; parameter is null, then it is the result array of the confrontation between last proposition and solution. You may have 3 different values: </p>
<ul>
<li><p>0 means the proposed digit is correct</p>
</li>
<li><p>1 means the proposed digit is lower than the correct one</p>
</li>
<li><p>-1 means the proposed digit is higher than the correct one</p>
</li>
</ul>
<p>Pseudo-algorithm example :</p>
<ul>
<li><p>solution is randomly created, in this example this [1,2,3]</p>
</li>
<li><p>tryCode(null) =&gt; [0, 2, 4] // for the first call, indications is null, we assume that it returns [0,2,4]</p>
</li>
<li><p>tryCode([1, 0, -1]) // [0, 2, 4] isn&apos;t the solution, so tryCode() is called again, with the indications [1, 0, -1] as explained above : 0 below 1 =&gt; 1 ; 2 == 2 =&gt; 0 ; 4 above 3 =&gt; -1</p>
</li>
<li><p>...so on, until tryCode() returns the solution or it is called up to 10 times (to avoid a brute force)</p>
</li>
</ul>

### Solution