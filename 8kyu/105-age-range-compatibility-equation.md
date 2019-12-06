### Problem:
<p>Everybody knows the classic <a href="https://en.wikipedia.org/wiki/Age_disparity_in_sexual_relationships#The_.22half-your-age-plus-seven.22_rule" target="_blank">&quot;half your age plus seven&quot;</a> dating rule that a lot of people follow (including myself). It&apos;s the &apos;recommended&apos; age range in which to date someone. </p>
<img src="http://weknowmemes.com/wp-content/uploads/2014/08/age-range-compatibility-equation.jpg" style="width: 400px;">

<p><code>minimum age &lt;= your age &lt;= maximum age</code></p>
<p>#Task</p>
<p>Given an integer (1 &lt;= n &lt;= 100) representing a person&apos;s age, return their minimum and maximum age range.</p>
<p>This equation doesn&apos;t work when the age &lt;= 14, so use this equation instead:</p>
<pre><code>min = age - 0.10 * age
max = age + 0.10 * age</code></pre><p>You should floor all your answers so that an integer is given instead of a float (which doesn&apos;t represent age). <code>Return your answer in the form [min]-[max]</code></p>
<p>##Examples:</p>
<pre><code>age = 27   =&gt;   20-40
age = 5    =&gt;   4-5
age = 17   =&gt;   15-20</code></pre>
### Solution