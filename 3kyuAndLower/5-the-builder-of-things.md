### Problem:
<p>For this kata you will be using some meta-programming magic to create a new <code>Thing</code> object. This object will allow you to define things in a descriptive <strong>sentence like format</strong>. </p>
<p>This challenge attempts to build on itself in an increasingly complex manner.</p>
<h2 id="examples-of-what-can-be-done-with-thing">Examples of what can be done with &quot;Thing&quot;:</h2>
<pre><code class="language-ruby">jane = Thing.new(<span class="hljs-string">&apos;Jane&apos;</span>)
jane.name <span class="hljs-comment"># =&gt; &apos;Jane&apos;</span>

<span class="hljs-comment"># can define boolean methods on an instance</span>
jane.is_a.person
jane.is_a.woman
jane.is_not_a.man

jane.person? <span class="hljs-comment"># =&gt; true</span>
jane.man? <span class="hljs-comment"># =&gt; false</span>

<span class="hljs-comment"># can define properties on a per instance level</span>
jane.is_the.parent_of.joe
jane.parent_of <span class="hljs-comment"># =&gt; &apos;joe&apos;</span>

<span class="hljs-comment"># can define number of child things</span>
<span class="hljs-comment"># when more than 1, an array is created</span>
jane.has(<span class="hljs-number">2</span>).legs
jane.legs.size <span class="hljs-comment"># =&gt; 2</span>
jane.legs.first.is_a?(Thing) <span class="hljs-comment"># =&gt; true</span>

<span class="hljs-comment"># can define single items</span>
jane.has(<span class="hljs-number">1</span>).head

jane.head.is_a?(Thing) <span class="hljs-comment"># =&gt; true</span>

<span class="hljs-comment"># can define number of things in a chainable and natural format</span>
jane.has(<span class="hljs-number">2</span>).arms.each { having(<span class="hljs-number">1</span>).hand.having(<span class="hljs-number">5</span>).fingers }

jane.arms.first.hand.fingers.size <span class="hljs-comment"># =&gt; 5</span>

<span class="hljs-comment"># can define properties on nested items</span>
jane.has(<span class="hljs-number">1</span>).head.having(<span class="hljs-number">2</span>).eyes.each { being_the.color.blue.with(<span class="hljs-number">1</span>).pupil.being_the.color.black }

<span class="hljs-comment"># can define methods</span>
jane.can.speak(<span class="hljs-string">&apos;spoke&apos;</span>) <span class="hljs-keyword">do</span> <span class="hljs-params">|phrase|</span>
  <span class="hljs-string">&quot;<span class="hljs-subst">#{name}</span> says: <span class="hljs-subst">#{phrase}</span>&quot;</span>
<span class="hljs-keyword">end</span>

jane.speak(<span class="hljs-string">&quot;hello&quot;</span>) <span class="hljs-comment"># =&gt; &quot;Jane says: hello&quot;</span>

<span class="hljs-comment"># if past tense was provided then method calls are tracked</span>
jane.spoke <span class="hljs-comment"># =&gt; [&quot;Jane says: hello&quot;]</span>
</code></pre>
<pre style="display: none;"><code class="language-javascript"><span class="hljs-keyword">const</span> jane = <span class="hljs-keyword">new</span> Thing(<span class="hljs-string">&apos;Jane&apos;</span>)
jane.name <span class="hljs-comment">// =&gt; &apos;Jane&apos;</span>

<span class="hljs-comment">// can define boolean methods on an instance</span>
jane.is_a.person
jane.is_a.woman
jane.is_not_a.man

jane.is_a_person <span class="hljs-comment">// =&gt; true</span>
jane.is_a_man <span class="hljs-comment">// =&gt; false</span>

<span class="hljs-comment">// can define properties on a per instance level</span>
jane.is_the.parent_of.joe
jane.parent_of <span class="hljs-comment">// =&gt; &apos;joe&apos;</span>

<span class="hljs-comment">// can define number of child things</span>
<span class="hljs-comment">// when more than 1, an array is created</span>
jane.has(<span class="hljs-number">2</span>).legs
jane.legs.length <span class="hljs-comment">// =&gt; 2</span>
jane.legs[<span class="hljs-number">0</span>] <span class="hljs-keyword">instanceof</span> Thing <span class="hljs-comment">// =&gt; true</span>

<span class="hljs-comment">// can define single items</span>
jane.has(<span class="hljs-number">1</span>).head

jane.head <span class="hljs-keyword">instanceof</span> Thing <span class="hljs-comment">// =&gt; true</span>

<span class="hljs-comment">// can define number of things in a chainable and natural format</span>
jane.has(<span class="hljs-number">2</span>).arms.each(<span class="hljs-function"><span class="hljs-params">arm</span> =&gt;</span> having(<span class="hljs-number">1</span>).hand.having(<span class="hljs-number">5</span>).fingers )

jane.arms[<span class="hljs-number">0</span>].hand.fingers.length <span class="hljs-comment">// =&gt; 5</span>

<span class="hljs-comment">// can define properties on nested items</span>
jane.has(<span class="hljs-number">1</span>).head.having(<span class="hljs-number">2</span>).eyes.each( <span class="hljs-function"><span class="hljs-params">eye</span> =&gt;</span> being_the.color.blue.with(<span class="hljs-number">1</span>).pupil.being_the.color.black )

<span class="hljs-comment">// can define methods</span>
jane.can.speak(<span class="hljs-string">&apos;spoke&apos;</span>, phrase =&gt;
  <span class="hljs-string">`<span class="hljs-subst">${name}</span> says: <span class="hljs-subst">${phrase}</span>`</span>)

jane.speak(<span class="hljs-string">&quot;hello&quot;</span>) <span class="hljs-comment">// =&gt; &quot;Jane says: hello&quot;</span>

<span class="hljs-comment">// if past tense was provided then method calls are tracked</span>
jane.spoke <span class="hljs-comment">// =&gt; [&quot;Jane says: hello&quot;]</span>
</code></pre>
<pre style="display: none;"><code class="language-coffeescript">jane = <span class="hljs-keyword">new</span> Thing <span class="hljs-string">&apos;Jane&apos;</span>
jane.name <span class="hljs-comment"># =&gt; &apos;Jane&apos;</span>

<span class="hljs-comment"># can define boolean methods on an instance</span>
jane.is_a.person
jane.is_a.woman
jane.is_not_a.man

jane.is_a_person <span class="hljs-comment"># =&gt; true</span>
jane.is_a_man <span class="hljs-comment"># =&gt; false</span>

<span class="hljs-comment"># can define properties on a per instance level</span>
jane.is_the.parent_of.joe
jane.parent_of <span class="hljs-comment"># =&gt; &apos;joe&apos;</span>

<span class="hljs-comment"># can define number of child things</span>
<span class="hljs-comment"># when more than 1, an array is created</span>
jane.has(<span class="hljs-number">2</span>).legs
jane.legs.length <span class="hljs-comment"># =&gt; 2</span>
jane.legs[<span class="hljs-number">0</span>] <span class="hljs-keyword">instanceof</span> Thing <span class="hljs-comment"># =&gt; true</span>

<span class="hljs-comment"># can define single items</span>
jane.has(<span class="hljs-number">1</span>).head

jane.head <span class="hljs-keyword">instanceof</span> Thing <span class="hljs-comment"># =&gt; true</span>

<span class="hljs-comment"># can define number of things in a chainable and natural format</span>
jane.has(<span class="hljs-number">2</span>).arms.each (arm)-&gt; having(<span class="hljs-number">1</span>).hand.having(<span class="hljs-number">5</span>).fingers

jane.arms[<span class="hljs-number">0</span>].hand.fingers.length <span class="hljs-comment"># =&gt; 5</span>

<span class="hljs-comment"># can define properties on nested items</span>
jane.has(<span class="hljs-number">1</span>).head.having(<span class="hljs-number">2</span>).eyes.each (eye) -&gt;
  being_the.color.blue.with(<span class="hljs-number">1</span>).pupil.being_the.color.black

<span class="hljs-comment"># can define methods</span>
jane.can.speak <span class="hljs-string">&apos;spoke&apos;</span>, <span class="hljs-function"><span class="hljs-params">(phrase)</span>-&gt;</span> <span class="hljs-string">&quot;<span class="hljs-subst">#{name}</span> says: <span class="hljs-subst">#{phrase}</span>&quot;</span>

jane.speak <span class="hljs-string">&apos;hello&apos;</span> <span class="hljs-comment"># =&gt; &apos;Jane says: hello&apos;</span>

<span class="hljs-comment"># if past tense was provided then method calls are tracked</span>
jane.spoke <span class="hljs-comment"># =&gt; [&apos;Jane says: hello&apos;]</span>
</code></pre>
<pre style="display: none;"><code class="language-python">jane = Thing(&apos;Jane&apos;)
jane.name # =&gt; &apos;Jane&apos;

# can define boolean methods on an instance
jane.is_a.person
jane.is_a.woman
jane.is_not_a.man

jane.is_a_person # =&gt; True
jane.is_a_man # =&gt; False

# can define properties on a per instance level
jane.is_the.parent_of.joe
jane.parent_of # =&gt; &apos;joe&apos;

# can define number of child things
# when more than 1, a tuple subclass is created
jane.has(2).legs
len(jane.legs) # =&gt; 2
isinstance(jane.legs[0], Thing) # =&gt; True

# can define single items
jane.has(1).head
isinstance(jane.head, Thing) # =&gt; True

# can define number of things in a chainable and natural format
&gt;&gt; Note: Python, unlike Ruby and Javascript, doesn&apos;t have a pretty syntax for blocks of expressions and a forEach method for iterables. So you should implement this behaviour yourself.
jane.has(2).arms.each.having(1).hand.having(5).fingers
len(jane.arms[0].hand.fingers) # =&gt; 5

# can define properties on nested items
jane.has(1).head.having(2).eyes.each.being_the.color.blue.having(1).pupil.being_the.color.black

# can define methods: thing.can.verb(method, past=&apos;&apos;)
method = lambda phrase: &quot;%s says: %s&quot; % (name, phrase)
# or 
def method(phrase):
  return &quot;%s says: %s&quot; % (name, phrase)
jane.can.speak(method, &quot;spoke&quot;)

jane.speak(&quot;hello&quot;) # =&gt; &quot;Jane says: hello&quot;

# if past tense was provided then method calls are tracked
jane.spoke # =&gt; [&quot;Jane says: hello&quot;]</code></pre>
<blockquote>
<p>Note: Most of the test cases have already been provided for you so that you can see how the Thing object is supposed to work.</p>
</blockquote>

### Solution