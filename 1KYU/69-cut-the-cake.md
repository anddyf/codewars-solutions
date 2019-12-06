### Problem:
<blockquote>
<p>When no more interesting kata can be resolved, I just choose to create the new kata, to solve their own, to enjoy the process  --myjinxin2015 said</p>
</blockquote>
<h1 id="task">Task</h1>
<p>We have a rectangular cake with some raisins on it:</p>
<pre><code>cake = 
  ........
  ..o.....
  ...o....
  ........
// o is the raisins</code></pre><p>We need to cut the cake evenly into <code>n</code> small rectangular pieces, so that each small cake has <code>1</code> raisin. <code>n</code> is not an argument, it is the number of raisins contained inside the cake:</p>
<pre><code>cake = 
  ........
  ..o.....
  ...o....
  ........

result should be an array:
  [
     ........
     ..o.....
  ,
     ...o....
     ........
  ]
// In order to clearly show, we omit the quotes and &quot;\n&quot;</code></pre><p>If there is no solution, return an empty array <code>[]</code></p>
<h1 id="note">Note</h1>
<ul>
<li>The number of raisins is always more than 1 and less than 10.</li>
<li>If there are multiple solutions, select the one with the largest width of the first element of the array. (See also the examples below.)</li>
<li>Evenly cut into <code>n</code> pieces, meaning the same area. But their shapes can be different. (See also the examples below.)</li>
<li>In the result array, the order of pieces is from top to bottom and from left to right (according to the location of the upper left corner).</li>
<li>Each piece of cake should be rectangular.</li>
</ul>
<h1 id="examples">Examples</h1>
<ul>
<li>An example of multiple solutions:</li>
</ul>
<pre><code>cake = 
  .o......
  ......o.
  ....o...
  ..o.....

In this test case, we can found three solution:
solution 1 (horizontal cutting):
  [
    .o......  //piece 1
  ,
    ......o.  //piece 2
  ,
    ....o...  //piece 3
  ,
    ..o.....  //piece 4
  ]

solution 2 (vertical cutting):
  [
    .o  //piece 1
    ..
    ..
    ..
  ,
    ..  //piece 2
    ..
    ..
    o.
  ,
    ..  //piece 3
    ..
    o.
    ..
  ,
    ..  //piece 4
    o.
    ..
    ..
  ]

solution 3 (cross cutting):
  [
    .o..  //piece 1
    ....
  ,
    ....  //piece 2
    ..o.
  ,
    ....  //piece 3
    ..o.
  ,
    o...  //piece 4
    ....   
  ]

we need choose solution 1 as result</code></pre><ul>
<li>An example of different shapes:</li>
</ul>
<pre><code>cake = 
  .o.o....
  ........
  ....o...
  ........
  .....o..
  ........

the result should be:
  [
    .o      //pieces 1
    ..
    ..
    ..
    ..
    ..
  ,
    .o....  //pieces 2
    ......
  ,
    ..o...  //pieces 3
    ......
  ,
    ...o..  //pieces 4
    ......   
  ]
Although they have different shapes, 
they have the same area(2 x 6 = 12 and 6 x 2 = 12).</code></pre><ul>
<li>An example of no solution case:</li>
</ul>
<pre><code>cake = 
  .o.o....
  .o.o....
  ........
  ........
  ........
  ........
the result should be []</code></pre><p>Kata may contains bug, please help me to test it, thanks ;-)</p>

### Solution