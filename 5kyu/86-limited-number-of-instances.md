### Problem:
<h1 id="story">Story</h1>
<p>OOP is a very useful paradigm which allows creating infinite amount of similar objects. On the contrary, &quot;singleton pattern&quot; limits it, so only 1 instance of a class can be created, and any future attempt to instantiate a new object returns the already existing one. But what if we want something in between?</p>
<hr>
<h1 id="task">Task</h1>
<p>Implement a decorator which limits the number of instances of a class which can exist at the same time.</p>
<p>It will take 3 values: <code>limit</code>, <code>unique</code>, <code>lookup</code>.<br>1) <code>Limit</code> specifies the number of instances which can exist at the same time.<br>2) <code>Unique</code> specifies which attribute will serve as a unique identifier in this class. If another object with the same value of <code>unique</code> attribute was created eariler, older instance should be returned.<br>3) <code>Lookup</code> specifies which object should be returned if the instance limit has been hit, and the value of <code>unique</code> attribute was not used earlier. <code>Lookup</code> may equal to 3 values: <code>&quot;FIRST&quot;</code> (the oldest object is returned), <code>&quot;LAST&quot;</code> (the newest object is returned), or <code>&quot;RECENT&quot;</code> (the object which was returned during the previous instantiation attempt is returned again).</p>
<hr>
<h2 id="examples">Examples:</h2>
<pre><code>@limiter(2, &quot;ID&quot;, &quot;FIRST&quot;)
class ExampleClass:
    def __init__(self, ID, value): self.ID, self.value = ID, value

a = ExampleClass(1, 5)  # unique ID=1
b = ExampleClass(2, 8)  # unique ID=2

ExampleClass(1, 20).value == 5  # there&apos;s an instance with unique ID=1 memorized

ExampleClass(3, 0).value  == 5  # no instance with ID=3, no more instances to remember, lookup type is
                                # &quot;FIRST&quot;, so we should return the first object that was memorized - 
                                # ExampleClass(1, 5)



@limiter(2, &quot;ID&quot;, &quot;LAST&quot;)
class ExampleClass:
    def __init__(self, ID, value): self.ID, self.value = ID, value

a = ExampleClass(1, 5)
b = ExampleClass(2, 8)

ExampleClass(1, 20).value == 5  # there&apos;s an instance with unique ID=1 memorized

ExampleClass(3, 0).value  == 8  # no instance with ID=3, no more instances to remember, lookup type is
                                # &quot;LAST&quot;, so we should return the last object that was memorized - 
                                # ExampleClass(2, 8)



@limiter(2, &quot;value&quot;, &quot;RECENT&quot;)
class ExampleClass:
    def __init__(self, ID, value): self.ID, self.value = ID, value

a = ExampleClass(1, 5)
b = ExampleClass(2, 8)

ExampleClass(4, 5).ID   == 1  # this time &quot;value&quot; attribute is unique among the instances, which is why
                              # we return ExampleClass(1, 5) - it has value=5

RecentInstance(1, 0).ID == 1  # no instance with value=0, no more instances to remember, lookup type is
                              # &quot;RECENT&quot;, so we should return the last object that we accessed again -
                              # ExampleClass(1, 5)</code></pre>
### Solution