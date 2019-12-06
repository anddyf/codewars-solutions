### Problem:
<p align="center"><font size="5"><b>Training JS #32:<br> methods of Math---round() ceil() and floor()<br><font size="3"></font></b></font></p><font size="5">

<p>From this lesson, we learn about JS static object: <code>Math</code>. It mainly helps us to carry out mathematical calculations. It has a lot of properties and methods. Some of the properties and methods we rarely used. So we only learn some common methods.</p>
<p>The properties of the Math object are some constants, such as PI, on behalf of the approximate value of pi. The usage is <code>Math.PI</code>. I will no longer introduce one by one, please refer to the manual:</p>
<ul>
<li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math" target="_blank">Math Object</a></li>
</ul>
<p>In this lesson we learn three methods to turn a number into an integer: <code>round()</code>, <code>ceil()</code> and <code>floor()</code>. </p>
<p>Their definitions and detailed information:</p>
<ul>
<li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/round" target="_blank">Math.round()</a></li>
<li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/ceil" target="_blank">Math.ceil()</a></li>
<li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor" target="_blank">Math.floor()</a></li>
</ul>
<p>First of all, we have to understand the first thing, all the methods of the Math object are static methods. It means that you need to use the Math method like this: <code>Math.round(1.23)</code>. Not like this: <code>(1.23).round()</code>.</p>
<p>Here we use some examples to understand their usage:</p>
<pre><code class="language-javascript"><span class="hljs-built_in">console</span>.log(<span class="hljs-built_in">Math</span>.round(<span class="hljs-number">1.45</span>)); <span class="hljs-comment">//output:1</span>
<span class="hljs-built_in">console</span>.log(<span class="hljs-built_in">Math</span>.ceil(<span class="hljs-number">1.45</span>));  <span class="hljs-comment">//output:2</span>
<span class="hljs-built_in">console</span>.log(<span class="hljs-built_in">Math</span>.floor(<span class="hljs-number">1.45</span>)); <span class="hljs-comment">//output:1</span>
<span class="hljs-built_in">console</span>.log(<span class="hljs-built_in">Math</span>.round(<span class="hljs-number">1.55</span>)); <span class="hljs-comment">//output:2</span>
<span class="hljs-built_in">console</span>.log(<span class="hljs-built_in">Math</span>.ceil(<span class="hljs-number">1.55</span>));  <span class="hljs-comment">//output:2</span>
<span class="hljs-built_in">console</span>.log(<span class="hljs-built_in">Math</span>.floor(<span class="hljs-number">1.55</span>)); <span class="hljs-comment">//output:1</span></code></pre>
<p>We can see, <code>ceil()</code> always rounding up to get a large integer; <code>floor()</code> always rounding down to get a small integer; <code>round()</code> according to the fractional part and round it to integer.</p>
<p>When the parameter is negative, they still works:</p>
<pre><code class="language-javascript"><span class="hljs-built_in">console</span>.log(<span class="hljs-built_in">Math</span>.round(<span class="hljs-number">-1.45</span>)); <span class="hljs-comment">//output:-1</span>
<span class="hljs-built_in">console</span>.log(<span class="hljs-built_in">Math</span>.ceil(<span class="hljs-number">-1.45</span>));  <span class="hljs-comment">//output:-1</span>
<span class="hljs-built_in">console</span>.log(<span class="hljs-built_in">Math</span>.floor(<span class="hljs-number">-1.45</span>)); <span class="hljs-comment">//output:-2</span>
<span class="hljs-built_in">console</span>.log(<span class="hljs-built_in">Math</span>.round(<span class="hljs-number">-1.55</span>)); <span class="hljs-comment">//output:-2</span>
<span class="hljs-built_in">console</span>.log(<span class="hljs-built_in">Math</span>.ceil(<span class="hljs-number">-1.55</span>));  <span class="hljs-comment">//output:-1</span>
<span class="hljs-built_in">console</span>.log(<span class="hljs-built_in">Math</span>.floor(<span class="hljs-number">-1.55</span>)); <span class="hljs-comment">//output:-2</span></code></pre>
<p>It should be noted that they are not working on the fractional part. If you want to keep two decimal places or otherwise, you should use <a href="http://www.codewars.com/kata/57256064856584bc47000611" target="_blank">Methods of Number object--toFixed(), toExponential() and toPrecision()</a>, or use the following techniques:</p>
<pre><code class="language-javascript"><span class="hljs-keyword">var</span> n=<span class="hljs-number">1.23456</span>
<span class="hljs-keyword">var</span> a=<span class="hljs-built_in">Math</span>.round(n*<span class="hljs-number">100</span>)/<span class="hljs-number">100</span>
<span class="hljs-keyword">var</span> b=<span class="hljs-built_in">Math</span>.ceil(n*<span class="hljs-number">100</span>)/<span class="hljs-number">100</span>
<span class="hljs-keyword">var</span> c=<span class="hljs-built_in">Math</span>.floor(n*<span class="hljs-number">100</span>)/<span class="hljs-number">100</span>
<span class="hljs-built_in">console</span>.log(a,b,c);  <span class="hljs-comment">//output: 1.23 1.24 1.23</span></code></pre>
<p>In the example above, we first multiply the number by 100, and then round it. the final result is to retain two decimal places.</p>
<p>Ok, lesson is over. let&apos;s us do some task.</p>
<h1 id="task">Task</h1>
<p>Coding in function <code>roundIt</code>. function accept 1 parameter <code>n</code>. It&apos;s a number with a decimal point. Please use different methods based on the location of the decimal point, turn the number into an integer.</p>
<p>If the decimal point is on the left side of the number (that is, the count of digits on the left of the decimal point is less than that on the right), Using <code>ceil()</code> method.</p>
<pre><code>roundIt(3.45) should return 4</code></pre><p>If the decimal point is on the right side of the number (that is, the count of digits on the left of the decimal point is more than that on the right), Using <code>floor()</code> method.</p>
<pre><code>roundIt(34.5) should return 34</code></pre><p>If the decimal point is on the middle of the number (that is, the count of digits  on the left of the decimal point is equals that on the right), Using <code>round()</code> method.</p>
<pre><code>roundIt(34.56) should return 35</code></pre><p>##<a href="http://github.com/myjinxin2015/Katas-list-of-Training-JS-series" target="_blank">Series</a>:</p>
<p>( &#x2191;&#x2191;&#x2191; Click the link above can get my newest kata list, Please add it to your favorites)</p>
<ul>
<li><a href="http://www.codewars.com/kata/571ec274b1c8d4a61c0000c8" target="_blank">#1: create your first JS function helloWorld</a></li>
<li><a href="http://www.codewars.com/kata/571edd157e8954bab500032d" target="_blank">#2: Basic data types--Number</a></li>
<li><a href="http://www.codewars.com/kata/571edea4b625edcb51000d8e" target="_blank">#3:  Basic data types--String</a></li>
<li><a href="http://www.codewars.com/kata/571effabb625ed9b0600107a" target="_blank">#4:  Basic data types--Array</a></li>
<li><a href="http://www.codewars.com/kata/571f1eb77e8954a812000837" target="_blank">#5:  Basic data types--Object</a></li>
<li><a href="http://www.codewars.com/kata/571f832f07363d295d001ba8" target="_blank">#6:  Basic data types--Boolean and conditional statements if..else</a></li>
<li><a href="http://www.codewars.com/kata/57202aefe8d6c514300001fd" target="_blank">#7:  if..else and ternary operator</a></li>
<li><a href="http://www.codewars.com/kata/572059afc2f4612825000d8a" target="_blank">#8: Conditional statement--switch</a></li>
<li><a href="http://www.codewars.com/kata/57216d4bcdd71175d6000560" target="_blank">#9: loop statement --while and do..while</a></li>
<li><a href="http://www.codewars.com/kata/5721a78c283129e416000999" target="_blank">#10: loop statement --for</a></li>
<li><a href="http://www.codewars.com/kata/5721c189cdd71194c1000b9b" target="_blank">#11: loop statement --break,continue</a></li>
<li><a href="http://www.codewars.com/kata/5722b3f0bd5583cf44001000" target="_blank">#12: loop statement --for..in and for..of</a></li>
<li><a href="http://www.codewars.com/kata/5722fd3ab7162a3a4500031f" target="_blank">#13: Number object and  its properties</a></li>
<li><a href="http://www.codewars.com/kata/57238ceaef9008adc7000603" target="_blank">#14: Methods of Number object--toString() and toLocaleString()</a></li>
<li><a href="http://www.codewars.com/kata/57256064856584bc47000611" target="_blank">#15: Methods of Number object--toFixed(), toExponential() and toPrecision()</a></li>
<li><a href="http://www.codewars.com/kata/57274562c8dcebe77e001012" target="_blank">#16: Methods of String object--slice(), substring() and substr()</a></li>
<li><a href="http://www.codewars.com/kata/57277a31e5e51450a4000010" target="_blank">#17: Methods of String object--indexOf(), lastIndexOf() and search()</a></li>
<li><a href="http://www.codewars.com/kata/57280481e8118511f7000ffa" target="_blank">#18: Methods of String object--concat() split() and its good friend join()</a></li>
<li><a href="http://www.codewars.com/kata/5728203b7fc662a4c4000ef3" target="_blank">#19: Methods of String object--toUpperCase() toLowerCase() and replace()</a></li>
<li><a href="http://www.codewars.com/kata/57284d23e81185ae6200162a" target="_blank">#20: Methods of String object--charAt() charCodeAt() and fromCharCode()</a></li>
<li><a href="http://www.codewars.com/kata/5729b103dd8bac11a900119e" target="_blank">#21: Methods of String object--trim() and the string template</a></li>
<li><a href="http://www.codewars.com/kata/572ab0cfa3af384df7000ff8" target="_blank">#22: Unlock new skills--Arrow function,spread operator and deconstruction</a></li>
<li><a href="http://www.codewars.com/kata/572af273a3af3836660014a1" target="_blank">#23: methods of arrayObject---push(), pop(), shift() and unshift()</a></li>
<li><a href="http://www.codewars.com/kata/572cb264362806af46000793" target="_blank">#24: methods of arrayObject---splice() and slice()</a></li>
<li><a href="http://www.codewars.com/kata/572df796914b5ba27c000c90" target="_blank">#25: methods of arrayObject---reverse() and sort()</a></li>
<li><a href="http://www.codewars.com/kata/572fdeb4380bb703fc00002c" target="_blank">#26: methods of arrayObject---map()</a></li>
<li><a href="http://www.codewars.com/kata/573023c81add650b84000429" target="_blank">#27: methods of arrayObject---filter()</a></li>
<li><a href="http://www.codewars.com/kata/57308546bd9f0987c2000d07" target="_blank">#28: methods of arrayObject---every() and some()</a></li>
<li><a href="http://www.codewars.com/kata/5731861d05d14d6f50000626" target="_blank">#29: methods of arrayObject---concat() and join()</a></li>
<li><a href="http://www.codewars.com/kata/573156709a231dcec9000ee8" target="_blank">#30: methods of arrayObject---reduce() and reduceRight()</a></li>
<li><a href="http://www.codewars.com/kata/5732b0351eb838d03300101d" target="_blank">#31: methods of arrayObject---isArray() indexOf() and toString()</a></li>
<li><a href="http://www.codewars.com/kata/5732d3c9791aafb0e4001236" target="_blank">#32: methods of Math---round() ceil() and floor()</a></li>
<li><a href="http://www.codewars.com/kata/5733d6c2d780e20173000baa" target="_blank">#33: methods of Math---max() min() and abs()</a></li>
<li><a href="http://www.codewars.com/kata/5733f948d780e27df6000e33" target="_blank">#34: methods of Math---pow() sqrt() and cbrt()</a></li>
<li><a href="http://www.codewars.com/kata/57353de879ccaeb9f8000564" target="_blank">#35: methods of Math---log() and its family</a></li>
<li><a href="http://www.codewars.com/kata/5735956413c2054a680009ec" target="_blank">#36: methods of Math---kata author&apos;s lover:random()</a></li>
<li><a href="http://www.codewars.com/kata/5735e39313c205fe39001173" target="_blank">#37: Unlock new weapon---RegExp Object</a></li>
<li><a href="http://www.codewars.com/kata/573975d3ac3eec695b0013e0" target="_blank">#38: Regular Expression--&quot;^&quot;,&quot;$&quot;, &quot;.&quot; and test()</a></li>
<li><a href="http://www.codewars.com/kata/573bca07dffc1aa693000139" target="_blank">#39: Regular Expression--&quot;?&quot;, &quot;*&quot;, &quot;+&quot; and &quot;{}&quot;</a></li>
<li><a href="http://www.codewars.com/kata/573d11c48b97c0ad970002d4" target="_blank">#40: Regular Expression--&quot;|&quot;, &quot;[]&quot; and &quot;()&quot;</a></li>
<li><a href="http://www.codewars.com/kata/573e6831e3201f6a9b000971" target="_blank">#41: Regular Expression--&quot;&quot;</a></li>
<li><a href="http://www.codewars.com/kata/573fb9223f9793e485000453" target="_blank">#42: Regular Expression--(?:), (?=) and (?!)</a></li>
</ul>
</font>
### Solution