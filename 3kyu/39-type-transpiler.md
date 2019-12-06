### Problem:
<p>This is the subsequent Kata of <a href="https://www.codewars.com/kata/597ccf7613d879c4cb00000f" target="_blank">this one</a>.</p>
<p>In this Kata you should convert the representation of &quot;type&quot;s, from Kotlin to Java, and <strong>you don&apos;t have to know Kotlin or Java in advance</strong> :D</p>
<p>If you successfully parsed the input, return <code>Right result</code>, otherwise give me <code>Left &quot;Hugh?&quot;</code>.</p>
<p>In Kotlin and Java, C-style identifiers are valid <code>simple type</code>s. Like, <code>_A</code>, <code>ice1000</code>, <code>Voile</code>.</p>
<p>We can have generic parameters, which are valid in both Kotlin&amp;Java: <code>List&lt;String&gt;</code>, or more than one parameters: <code>F&lt;A,B&gt;</code>.</p>
<p>We can specify the complete package name of the types, like <code>java.util.List&lt;String&gt;</code>.</p>
<p>We can also have types of nested classes: <code>List&lt;Long&gt;.Iterator&lt;Long&gt;</code>.</p>
<p>We have covariance: <code>Option&lt;out T&gt;</code> in Kotlin and <code>Option&lt;? extends T&gt;</code> in Java (be careful about the spaces, there are spaces between <code>?</code> and <code>extends</code>, <code>extends</code> and <code>T</code>).</p>
<p>Contravariance as well: <code>Maker&lt;in T&gt;</code> in Kotlin and <code>Maker&lt;? super T&gt;</code> in Java (again, spaces).</p>
<p>In Kotlin, there&apos;s something called &quot;star projection&quot; like <code>List&lt;*&gt;</code>, and you should translate it into <code>List&lt;?&gt;</code>.</p>
<p>Also, you should rename <code>Int</code>(<code>kotlin.Int</code>) into <code>Integer</code>(<code>java.lang.Integer</code>), and <code>Unit</code> into <code>Void</code>.</p>
<p>Finally, the most complex part of this Kata -- the types of lambda expressions.</p>
<p><code>(A) -&gt; B</code> in Kotlin, should be transpiled into <code>Function1&lt;A,B&gt;</code> in Java (be careful, here we don&apos;t have spaces in Java).<br><code>() -&gt; B</code> -&gt; <code>Function0&lt;B&gt;</code><br><code>(A, B) -&gt; C</code> -&gt; <code>Function2&lt;A,B,C&gt;</code></p>
<p>So let&apos;s see the strict bnf definition:</p>
<h3 id="kotlin">Kotlin</h3>
<pre><code>name           ::= &lt;valid java identifier&gt;
typeParam      ::= &quot;*&quot;
                 | &quot;in &quot; type
                 | &quot;out &quot; type
                 | type
typeParams     ::= typeParam [ &quot;,&quot; typeParams ]
simpleUserType ::= name [ &quot;&lt;&quot; typeParams &quot;&gt;&quot; ]
userType       ::= simpleUserType [ &quot;.&quot; userType ]
parameters     ::= type [ &quot;,&quot; parameters ]
functionType   ::= &quot;(&quot; [ parameters ] &quot;)&quot; &quot;-&gt;&quot; type
type           ::= functionType
                 | name
                 | userType</code></pre><h3 id="java">Java</h3>
<pre><code>name           ::= &lt;valid java identifier&gt;
typeParam      ::= type
                 | &quot;?&quot;
                 | &quot;? super &quot; type
                 | &quot;? extends &quot; type
typeParams     ::= typeParam [ &quot;,&quot; typeParams ]
simpleUserType ::= name [ &quot;&lt;&quot; params &quot;&gt;&quot; ]
userType       ::= simpleUserType [ &quot;.&quot; userType ]
parameters     ::= type [ &quot;,&quot; parameters ]
functionType   ::= &quot;Function&quot; ++ (number of parameters) &quot;&lt;&quot; [ parameters &quot;,&quot; ] type &quot;&gt;&quot;
type           ::= functionType
                 | name
                 | userType</code></pre><p>(<code>++</code> in bnf means there shouldn&apos;t be spaces there)</p>
<p>for more information please see the example tests.</p>
<p>Enjoy!</p>

### Solution