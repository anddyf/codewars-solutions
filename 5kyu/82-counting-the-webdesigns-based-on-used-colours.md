### Problem:
<p>In the web we have many available colours that we may use with html. The different variations or arrangements, for a design in the web may climb up if we increase the amount of used colours, specially because the order matters for the different designs.</p>
<p>An &quot;expert&quot; uses a formula that relates the amount of designs with the number of colours, and even though he has a developed intiution, his results are not exact.
We explain the problem to you and see if you can help.</p>
<p>Let&apos;s see the amount of arrangements of colours that we may produce with the set: <i><font color="red">red, <font color="yellow">yellow, <font color="DodgerBlue">blue<font></font></font></font></font></i></p><font color="red"><font color="yellow"><font color="DodgerBlue"><font>
<p><i><font color="red">red<font></font></font></i><font color="red"><font><br><i><font color="yellow">yellow<font></font></font></i><font color="yellow"><font><br><i><font color="DodgerBlue">blue<font></font></font></i></font></font></font></font></p><font color="red"><font><font color="yellow"><font><font color="DodgerBlue"><font>
<p><i><font color="red">red<font></font></font></i><font color="red"><font><i><font color="yellow">yellow<font></font></font></i></font></font></p><font color="red"><font><font color="yellow"><font>
<p><i><font color="yellow">yellow<font></font></font></i><font color="yellow"><font><i><font color="red">red<font></font></font></i></font></font></p><font color="yellow"><font><font color="red"><font>
<p><i><font color="red">red<font></font></font></i><font color="red"><font><i><font color="DodgerBlue">blue<font></font></font></i></font></font></p><font color="red"><font><font color="DodgerBlue"><font>
<p><i><font color="DodgerBlue">blue<font></font></font></i><font color="DodgerBlue"><font><i><font color="red">red<font></font></font></i><font color="red"><font>  </font></font></font></font></p><font color="DodgerBlue"><font><font color="red"><font>
<p><i><font color="yellow">yellow<font></font></font></i><font color="yellow"><font><i><font color="DodgerBlue">blue<font></font></font></i><font color="DodgerBlue"><font> </font></font></font></font></p><font color="yellow"><font><font color="DodgerBlue"><font>
<p><i><font color="DodgerBlue">blue<font></font></font></i><font color="DodgerBlue"><font><i><font color="yellow">yellow<font></font></font></i><font color="yellow"><font>   </font></font></font></font></p><font color="DodgerBlue"><font><font color="yellow"><font>
<p><i><font color="red">red<font></font></font></i><font color="red"><font><i><font color="yellow">yellow<font></font></font></i><font color="yellow"><font><i><font color="DodgerBlue">blue<font></font></font></i><font color="DodgerBlue"><font><i></i></font></font></font></font></font></font></p><font color="red"><font><font color="yellow"><font><font color="DodgerBlue"><font><i>
<p><i><font color="red">red<font></font></font></i><font color="red"><font><i><font color="DodgerBlue">blue<font></font></font></i><font color="DodgerBlue"><font><i><font color="yellow">yellow<font></font></font></i><font color="yellow"><font> </font></font></font></font></font></font></p><font color="red"><font><font color="DodgerBlue"><font><font color="yellow"><font>
<p><i><font color="yellow">yellow<font></font></font></i><font color="yellow"><font><i><font color="red">red<font></font></font></i><font color="red"><font><i><font color="DodgerBlue">blue<font></font></font></i><font color="DodgerBlue"><font> </font></font></font></font></font></font></p><font color="yellow"><font><font color="red"><font><font color="DodgerBlue"><font>
<p><i><font color="yellow">yellow<font></font></font></i><font color="yellow"><font><i><font color="DodgerBlue">blue<font></font></font></i><font color="DodgerBlue"><font><i><font color="red">red<font></font></font></i><font color="red"><font>     </font></font></font></font></font></font></p><font color="yellow"><font><font color="DodgerBlue"><font><font color="red"><font>
<p><i><font color="DodgerBlue">blue<font></font></font></i><font color="DodgerBlue"><font><i><font color="red">red<font></font></font></i><font color="red"><font><i><font color="yellow">yellow<font></font></font></i><font color="yellow"><font>   </font></font></font></font></font></font></p><font color="DodgerBlue"><font><font color="red"><font><font color="yellow"><font>
<p><i><font color="DodgerBlue">blue<font></font></font></i><font color="DodgerBlue"><font><i><font color="yellow">yellow<font></font></font></i><font color="yellow"><font><i><font color="red">red<font></font></font></i><font color="red"><font>   </font></font></font></font></font></font></p><font color="DodgerBlue"><font><font color="yellow"><font><font color="red"><font>
<p><font color="white">We have a total of 15 arrangements. Six, will be the minimum value for the unique colours set size that surpasses the amount of <strong>1.000</strong> arrangements or variations.</font></p><font color="white">
<p>Given an integer, <code>limit</code>, and an array with different and unique colours, <code>cols</code>, make a code that may calculate:</p>
<ul>
<li><p>the minimum size the set should have so that it generates more arrangements than the limit value,     <code>limit</code></p>
</li>
<li><p>the number of variations that we may obtain with the current set, <code>cols</code>.</p>
</li>
</ul>
<p>This pair of values should output in an array.</p>
<p>See sample cases in the examples box.
Features of the random tests:</p>
<p>0 &lt;= limit &lt;= 10<sup>150</sup></p>
<p>0 &lt;= amount_of_colours &lt; 100</p>
<p>Number of random tests = 90</p>
<p>Have a good and productive time!
(Performance matters)</p>
</font></font></font></font></font></font></font></font></font></font></font></font></font></font></font></font></font></font></font></font></font></font></font></font></font></font></font></font></font></font></font></i></font></font></font></font></font></font></font></font></font></font></font></font></font></font></font></font></font></font></font></font></font></font></font></font></font></font></font></font></font></font></font></font></font></font></font></font></font></font></font></font>
### Solution