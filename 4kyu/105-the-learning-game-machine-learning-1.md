### Problem:
<h1 id="the-learning-game---machine-learning-1">The learning game - Machine Learning #1</h1>
<p>Growing up you would have learnt a lot of things like not to stand in fire, to drink food and eat water and not to jump off very tall things But Machines have it difficult they cannot learn for themselves we have to tell them what to do, why don&apos;t we give them a chance to learn it for themselves?</p>
<h3 id="task">Task</h3>
<p>Your task is to finish the Machine object. What the machine object must do is learn from its mistakes! The Machine will be given a command and a number you will return a random action. After the command has returned you will be given a response (true/false) if the response is true then you have done good, if the response is false then the action was a bad one. You must program the machine to learn to apply an action to a given command using the reponse given. Note: It must take no more than 20 times to teach an action to a command also different commands can have the same action.</p>
<h3 id="info">Info</h3>
<ul>
<li>In the preloaded section there is a constant called <code>ACTIONS</code> it is a function that returns the 5 possible actions.</li>
<li>In Java, this a constant <code>Actions.FUNCTIONS</code> of type <code>List&lt;Function&lt;Integer, Integer&gt;&gt;</code>. </li>
<li>In C++, the actions can be accessed by <code>get_action(i)(unsigned int num)</code> where i chooses the function (and therefore can range from 0 to 4) and num is its argument.</li>
<li>In python <code>ACTIONS()</code> returns a list of lambdas.</li>
<li>In Golang <code>Actions()</code> retruns a function slice <code>[]func(int) int</code></li>
</ul>

### Solution