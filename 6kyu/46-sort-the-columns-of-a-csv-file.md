### Problem:
<p>#Sort the columns of a csv-file</p>
<p>You get a string with the content of a csv-file. The columns are separated by semicolons.<br>
The first line contains the names of the columns.<br>
Write a method that sorts the columns by the names of the columns alphabetically and incasesensitive. </p>
<p>An example:</p>
<pre><code>Before sorting:
As table (only visualization):
|myjinxin2015|raulbc777|smile67|Dentzil|SteffenVogel_79|
|17945       |10091    |10088  |3907   |10132          |
|2           |12       |13     |48     |11             |

The csv-file:
myjinxin2015;raulbc777;smile67;Dentzil;SteffenVogel_79\n
17945;10091;10088;3907;10132\n
2;12;13;48;11

----------------------------------

After sorting:
As table (only visualization):
|Dentzil|myjinxin2015|raulbc777|smile67|SteffenVogel_79|
|3907   |17945       |10091    |10088  |10132          |
|48     |2           |12       |13     |11             |

The csv-file:
Dentzil;myjinxin2015;raulbc777;smile67;SteffenVogel_79\n
3907;17945;10091;10088;10132\n
48;2;12;13;11</code></pre><p>There is no need for prechecks. You will always get a correct string with more than 1 line und more than 1 row. All columns will have different names.</p>
<p>Have fun coding it and please don&apos;t forget to vote and rank this kata! :-) </p>
<p>I have created other katas. Have a look if you like coding and challenges.</p>

### Solution