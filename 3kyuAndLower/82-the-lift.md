### Problem:
<img src="https://i.imgur.com/ta6gv1i.png?1" title="weekly coding challenge">


<p><em>I bet you won&apos;t ever catch a Lift (a.k.a. elevator) again without thinking of this Kata !</em></p>
<hr>

<h1 id="synopsis">Synopsis</h1>
<p>A multi-floor building has a Lift in it.</p>
<p>People are queued on different floors waiting for the Lift.</p>
<p>Some people want to go up. Some people want to go down. </p>
<p>The floor they want to go to is represented by a number (i.e. when they enter the Lift this is the button they will press)</p>
<pre><code>BEFORE (people waiting in queues)               AFTER (people at their destinations)
                   +--+                                          +--+ 
  /----------------|  |----------------\        /----------------|  |----------------\
10|                |  | 1,4,3,2        |      10|             10 |  |                |
  |----------------|  |----------------|        |----------------|  |----------------|
 9|                |  | 1,10,2         |       9|                |  |                |
  |----------------|  |----------------|        |----------------|  |----------------|
 8|                |  |                |       8|                |  |                |
  |----------------|  |----------------|        |----------------|  |----------------|
 7|                |  | 3,6,4,5,6      |       7|                |  |                |
  |----------------|  |----------------|        |----------------|  |----------------|
 6|                |  |                |       6|          6,6,6 |  |                |
  |----------------|  |----------------|        |----------------|  |----------------|
 5|                |  |                |       5|            5,5 |  |                |
  |----------------|  |----------------|        |----------------|  |----------------|
 4|                |  | 0,0,0          |       4|          4,4,4 |  |                |
  |----------------|  |----------------|        |----------------|  |----------------|
 3|                |  |                |       3|            3,3 |  |                |
  |----------------|  |----------------|        |----------------|  |----------------|
 2|                |  | 4              |       2|          2,2,2 |  |                |
  |----------------|  |----------------|        |----------------|  |----------------|
 1|                |  | 6,5,2          |       1|            1,1 |  |                |
  |----------------|  |----------------|        |----------------|  |----------------|
 G|                |  |                |       G|          0,0,0 |  |                |
  |====================================|        |====================================|</code></pre><hr>

<h1 id="rules">Rules</h1>
<h4 id="lift-rules">Lift Rules</h4>
<ul>
<li>The Lift only goes up or down!</li>
<li>Each floor has both UP and DOWN Lift-call buttons (except top and ground floors which have only DOWN and UP respectively)</li>
<li>The Lift never changes direction until there are no more people wanting to get on/off in the direction it is already travelling</li>
<li>When empty the Lift tries to be smart. For example,<ul>
<li>If it was going up then it may continue up to collect the highest floor person wanting to go down</li>
<li>If it was going down then it may continue down to collect the lowest floor person wanting to go up</li>
</ul>
</li>
<li>The Lift has a maximum capacity of people </li>
<li>When called, the Lift will stop at a floor <strong>even if it is full</strong>, although unless somebody gets off nobody else can get on!</li>
<li>If the lift is empty, and no people are waiting, then it will return to the ground floor</li>
</ul>
<h4 id="people-rules">People Rules</h4>
<ul>
<li>People are in <strong>&quot;queues&quot;</strong> that represent their order of arrival to wait for the Lift</li>
<li>All people can press the UP/DOWN Lift-call buttons</li>
<li>Only people going the <strong>same direction</strong> as the Lift may enter it</li>
<li>Entry is according to the <strong>&quot;queue&quot; order</strong>, but those unable to enter do not block those behind them that can</li>
<li>If a person is unable to enter a full Lift, they will press the UP/DOWN Lift-call button again after it has departed without them</li>
</ul>
<hr> 

<h1 id="kata-task">Kata Task</h1>
<ul>
<li>Get all the people to the floors they want to go to while obeying the <strong>Lift rules</strong> and the <strong>People rules</strong></li>
<li>Return a list of all floors that the Lift stopped at (in the order visited!)</li>
</ul>
<p>NOTE: The Lift always starts on the ground floor (and people waiting on the ground floor may enter immediately)</p>
<hr>

<h1 id="io">I/O</h1>
<h4 id="input">Input</h4>
<ul>
<li><code>queues</code> a list of queues of people for all floors of the building. <ul>
<li>The height of the building varies</li>
<li>0 = the ground floor</li>
<li>Not all floors have queues</li>
<li>Queue index [0] is the &quot;head&quot; of the queue</li>
<li>Numbers indicate which floor the person wants go to</li>
</ul>
</li>
<li><code>capacity</code> maximum number of people allowed in the lift</li>
</ul>
<p><em>Parameter validation</em> - All input parameters can be assumed OK. No need to check for things like:</p>
<ul>
<li>People wanting to go to floors that do not exist</li>
<li>People wanting to take the Lift to the floor they are already on</li>
<li>Buildings with &lt; 2 floors</li>
<li>Basements</li>
</ul>
<h4 id="output">Output</h4>
<ul>
<li>A list of all floors that the Lift stopped at (in the order visited!)</li>
</ul>
<hr>

<h1 id="example">Example</h1>
<p>Refer to the example test cases.</p>
<hr>

<h1 id="language-notes">Language Notes</h1>
<ul>
<li>Python : The object will be initialized for you in the tests</li>
</ul>
<hr>
<span style="color:red">
Good Luck -

<p>DM</p>
</span>






### Solution