### Problem:
<p>We need a system that can learn facts about family relationships, check their consistency and answer queries about them.</p>
<h1 id="the-task">The task</h1>
<p>Create a class <code>Family</code> with the following methods. All arguments are strings: names of persons. Upon the first use of a name, that name is added to the family.</p>
<ul>
<li><p><code>male(name)</code> and <code>female(name)</code> returning <code>boolean</code></p>
<p>Define the gender (corresponding to the method name) of the given person. Return <code>false</code> when these assignments cannot be made because of conflicts with earlier registered information.</p><p></p>
</li>
<li><p><code>isMale(name)</code> and <code>isFemale(name)</code> returning <code>boolean</code></p>
<p>Return <code>true</code> when the person has the said gender. When no gender was assigned, both methods should return <code>false</code></p><p></p>
</li>
<li><p><code>setParent(childName, parentName)</code> returning <code>boolean</code></p>
<p>Defines the child-parent relationship between two persons. Returns <code>false</code> when the relationship cannot be made because of conflicts with earlier registered information.</p><p></p>
</li>
<li><p><code>getParents(name)</code> and <code>getChildren(name)</code> returning <code>array</code> of <code>string</code></p>
<p>Return the names of the person&apos;s parents/children in alphabetical order</p><p></p>
</li>
</ul>
<h1 id="deducing-information">Deducing information</h1>
<p>When things can be implied from given information, it should be done.</p>
<p>For instance, a parent&apos;s gender can be determined as soon as the other parent&apos;s gender becomes known:</p>
<pre><code class="language-javascript"><span class="hljs-keyword">const</span> fam = <span class="hljs-keyword">new</span> Family();
fam.setParentOf(<span class="hljs-string">&quot;Vera&quot;</span>, <span class="hljs-string">&quot;George&quot;</span>);
fam.setParentOf(<span class="hljs-string">&quot;Vera&quot;</span>, <span class="hljs-string">&quot;Vanessa&quot;</span>);
fam.female(<span class="hljs-string">&quot;Vanessa&quot;</span>);
fam.female(<span class="hljs-string">&quot;George&quot;</span>); <span class="hljs-comment">// false, because:</span>
fam.isMale(<span class="hljs-string">&quot;George&quot;</span>); <span class="hljs-comment">// ...this is true.</span></code></pre>
<pre style="display: none;"><code class="language-java">Family fam = <span class="hljs-keyword">new</span> Family();
fam.setParentOf(<span class="hljs-string">&quot;Vera&quot;</span>, <span class="hljs-string">&quot;George&quot;</span>);
fam.setParentOf(<span class="hljs-string">&quot;Vera&quot;</span>, <span class="hljs-string">&quot;Vanessa&quot;</span>);
fam.female(<span class="hljs-string">&quot;Vanessa&quot;</span>);
fam.female(<span class="hljs-string">&quot;George&quot;</span>); <span class="hljs-comment">// false, because:</span>
fam.isMale(<span class="hljs-string">&quot;George&quot;</span>); <span class="hljs-comment">// ...this is true.</span></code></pre>
<pre style="display: none;"><code class="language-python">fam = family()
fam.set_parent_of(<span class="hljs-string">&quot;Vera&quot;</span>, <span class="hljs-string">&quot;George&quot;</span>)
fam.set_parent_of(<span class="hljs-string">&quot;Vera&quot;</span>, <span class="hljs-string">&quot;Vanessa&quot;</span>)
fam.female(<span class="hljs-string">&quot;Vanessa&quot;</span>)
fam.female(<span class="hljs-string">&quot;George&quot;</span>);  <span class="hljs-comment"># False, because:</span>
fam.is_male(<span class="hljs-string">&quot;George&quot;</span>); <span class="hljs-comment"># ...this is True.</span></code></pre>
<pre style="display: none;"><code class="language-php">$fam = <span class="hljs-keyword">new</span> Family();
$fam-&gt;setParentOf(<span class="hljs-string">&quot;Vera&quot;</span>, <span class="hljs-string">&quot;George&quot;</span>);
$fam-&gt;setParentOf(<span class="hljs-string">&quot;Vera&quot;</span>, <span class="hljs-string">&quot;Vanessa&quot;</span>);
$fam-&gt;female(<span class="hljs-string">&quot;Vanessa&quot;</span>);
$fam-&gt;female(<span class="hljs-string">&quot;George&quot;</span>); <span class="hljs-comment">// false, because:</span>
$fam-&gt;isMale(<span class="hljs-string">&quot;George&quot;</span>); <span class="hljs-comment">// ...this is true.</span></code></pre>
<p>Also <code>setParentOf</code> can return <code>false</code>. For example, if the relationship would infer that one becomes their own ancestor:</p>
<pre><code class="language-javascript">fam = <span class="hljs-keyword">new</span> Family();
fam.setParentOf(<span class="hljs-string">&quot;Vera&quot;</span>, <span class="hljs-string">&quot;George&quot;</span>);
fam.setParentOf(<span class="hljs-string">&quot;George&quot;</span>, <span class="hljs-string">&quot;Vera&quot;</span>); <span class="hljs-comment">// false</span></code></pre>
<pre style="display: none;"><code class="language-java">Family fam = <span class="hljs-keyword">new</span> Family();
fam.setParentOf(<span class="hljs-string">&quot;Vera&quot;</span>, <span class="hljs-string">&quot;George&quot;</span>);
fam.setParentOf(<span class="hljs-string">&quot;George&quot;</span>, <span class="hljs-string">&quot;Vera&quot;</span>); <span class="hljs-comment">// false</span></code></pre>
<pre style="display: none;"><code class="language-python">fam = family()
fam.set_parent_of(<span class="hljs-string">&quot;Vera&quot;</span>, <span class="hljs-string">&quot;George&quot;</span>)
fam.set_parent_of(<span class="hljs-string">&quot;George&quot;</span>, <span class="hljs-string">&quot;Vera&quot;</span>) <span class="hljs-comment"># False</span></code></pre>
<pre><code class="language-javascript">$fam = <span class="hljs-keyword">new</span> Family();
$fam-&gt;setParentOf(<span class="hljs-string">&quot;Vera&quot;</span>, <span class="hljs-string">&quot;George&quot;</span>);
$fam-&gt;setParentOf(<span class="hljs-string">&quot;George&quot;</span>, <span class="hljs-string">&quot;Vera&quot;</span>); <span class="hljs-comment">// false</span></code></pre>
<h1 id="details-rules-assumptions">Details, rules, assumptions</h1>
<p>Although the task relates to genealogy, the rules of this kata are not claimed to be realistic. Several simplifications and rules apply, which may not hold in real life: </p>
<ul>
<li>Strings are case sensitive, but there are no tests playing around with &quot;Peter&quot;, &quot;PETER&quot; and &quot;PeTeR&quot;.</li>
<li>People are uniquely identified by their name. For instance, there are no two different people called &quot;Jim&quot; in the same family.</li>
<li>Once a person has an assigned gender, it cannot be changed.</li>
<li>No gender conclusions should be made from personal names: &quot;Bob&quot; could well be a woman and &quot;Susan&quot; a man.</li>
<li>People cannot have more than one mother and one father.</li>
<li>The terms &quot;parents&quot; and &quot;children&quot; refer to the relatives in the immediate previous/next generations only, not to more remote ancestors or descendants.</li>
<li>Incest may occur, so, for example, one&apos;s parent may at the same time be their grandparent.</li>
<li>One cannot be their own ancestor.</li>
<li>Age is not accounted for. Even if some incestuous relationships would infer that one&apos;s parent is more than 5 generations older, it should be allowed.</li>
<li>In case a name&apos;s first occurrence is in a call of one of the two gender querying methods, the return value will always be false, as that new person does not have a known gender.</li>
<li>In case a name&apos;s first occurrence is in a call of one of the two relation querying methods, the return value will always be an empty array/list, as there are no relationships known yet in which that new person participates.</li>
<li>For the reasons in the preceding two bullet points it should not matter whether you actually store that name in these cases in your data structure, or not. In the latter case you would only store it at the next occasion when that name is mentioned in a call of one of the three other methods, that actually <em>add</em> information. The described interface has no way to query the difference between these two possible implementations, so you can choose freely.</li>
</ul>
<h1 id="example">Example</h1>
<p>Consider the following family graph:</p>
<style>
  .dot { height: 49px; width: 100px; background-color: #666; border-radius: 50%;
      border: #aaa 1px solid ; display: flex; align-items: center; justify-content: center; }
  table.tight { border-spacing: 0px; border-collapse: separate; width: 250px}
  table.tight td { padding: 0px; min-width: 25px; height: 25px; }
  .up { border-top: #aaa 1px solid; }
  .right { border-right: #aaa 1px solid; }
  .red { color: #ea6 }
</style>

<table class="tight">
  <tbody><tr>
    <td rowspan="2" colspan="4"><div class="dot">Dylan (m)</div></td>
    <td colspan="2"></td>
    <td rowspan="2" colspan="4"><div class="dot">Morgan&#xA0;<span class="red">(f)</span></div></td>
  </tr>
  <tr>
    <td class="up right"></td><td class="up"></td>
  </tr>
  <tr>
    <td colspan="4"></td>
    <td class="right"></td><td></td>
    <td></td><td class="right"></td>
  </tr>
  <tr>
    <td></td><td class="right"></td>
    <td colspan="3" class="up"></td><td></td>
    <td></td><td class="right"></td>
    <td colspan="5" class="up"></td><td class="up right"></td>
  </tr>
  <tr>
    <td colspan="4"><div class="dot">Frank (m)</div></td>
    <td colspan="2"></td>
    <td colspan="4"><div class="dot">July</div></td>
    <td colspan="2"></td>
    <td colspan="4"><div class="dot">Jennifer</div></td>
  </tr>
  <tr>
    <td></td><td class="right"></td>
    <td></td><td></td>
    <td></td><td></td>
    <td></td><td></td>
    <td></td><td></td>
    <td></td><td></td>
    <td></td><td></td>
    <td></td><td></td>
  </tr>
  <tr>
    <td colspan="4"><div class="dot">Joy</div></td>
  </tr>
</tbody></table>
<p>

</p><p>It could be created step by step with the following code &#x2014; the expected return value for each method call is indicated in comments:</p>
<pre><code class="language-javascript"><span class="hljs-keyword">const</span> fam = <span class="hljs-keyword">new</span> Family();
fam.setParentOf(<span class="hljs-string">&quot;Frank&quot;</span>, <span class="hljs-string">&quot;Morgan&quot;</span>);       <span class="hljs-comment">// true</span>
fam.setParentOf(<span class="hljs-string">&quot;Frank&quot;</span>, <span class="hljs-string">&quot;Dylan&quot;</span>);        <span class="hljs-comment">// true</span>
fam.male(<span class="hljs-string">&quot;Dylan&quot;</span>);                        <span class="hljs-comment">// true</span>
fam.setParentOf(<span class="hljs-string">&quot;Joy&quot;</span>, <span class="hljs-string">&quot;Frank&quot;</span>);          <span class="hljs-comment">// true</span>
fam.male(<span class="hljs-string">&quot;Frank&quot;</span>);                        <span class="hljs-comment">// true</span>
fam.male(<span class="hljs-string">&quot;Morgan&quot;</span>);                       <span class="hljs-comment">// false</span>
<span class="hljs-comment">// (Morgan is a woman because she both is Frank&apos;s parent, but not his father) </span>
fam.setParentOf(<span class="hljs-string">&quot;July&quot;</span>, <span class="hljs-string">&quot;Morgan&quot;</span>);        <span class="hljs-comment">// true</span>
<span class="hljs-comment">// (The preceding assertion was rejected, so there is no conflict)</span>
fam.isMale(<span class="hljs-string">&quot;Joy&quot;</span>) || fam.isFemale(<span class="hljs-string">&quot;Joy&quot;</span>); <span class="hljs-comment">// false</span>
<span class="hljs-comment">// (We know Joy is Frank&apos;s child, but we can&apos;t derive Joy&apos;s gender)</span>
fam.getChildrenOf(<span class="hljs-string">&quot;Morgan&quot;</span>);              <span class="hljs-comment">// [&quot;Frank&quot;, &quot;July&quot;]</span>
fam.setParentOf(<span class="hljs-string">&quot;Jennifer&quot;</span>, <span class="hljs-string">&quot;Morgan&quot;</span>);    <span class="hljs-comment">// true</span>
fam.getChildrenOf(<span class="hljs-string">&quot;Morgan&quot;</span>);              <span class="hljs-comment">// [&quot;Frank&quot;, &quot;Jennifer&quot;, &quot;July&quot;]</span>
fam.getChildrenOf(<span class="hljs-string">&quot;Dylan&quot;</span>);               <span class="hljs-comment">// [&quot;Frank&quot;]</span>
<span class="hljs-comment">// (That is all we know for sure)</span>
fam.getParentsOf(<span class="hljs-string">&quot;Frank&quot;</span>);                <span class="hljs-comment">// [&quot;Dylan&quot;, &quot;Morgan&quot;]</span>
fam.setParentOf(<span class="hljs-string">&quot;Morgan&quot;</span>, <span class="hljs-string">&quot;Frank&quot;</span>);       <span class="hljs-comment">// false</span>
<span class="hljs-comment">// (It is impossible to be the parent of your parent)</span></code></pre>
<pre style="display: none;"><code class="language-java">Family fam = <span class="hljs-keyword">new</span> Family();
fam.setParentOf(<span class="hljs-string">&quot;Frank&quot;</span>, <span class="hljs-string">&quot;Morgan&quot;</span>);       <span class="hljs-comment">// true</span>
fam.setParentOf(<span class="hljs-string">&quot;Frank&quot;</span>, <span class="hljs-string">&quot;Dylan&quot;</span>);        <span class="hljs-comment">// true</span>
fam.male(<span class="hljs-string">&quot;Dylan&quot;</span>);                        <span class="hljs-comment">// true</span>
fam.setParentOf(<span class="hljs-string">&quot;Joy&quot;</span>, <span class="hljs-string">&quot;Frank&quot;</span>);          <span class="hljs-comment">// true</span>
fam.male(<span class="hljs-string">&quot;Frank&quot;</span>);                        <span class="hljs-comment">// true</span>
fam.male(<span class="hljs-string">&quot;Morgan&quot;</span>);                       <span class="hljs-comment">// false</span>
<span class="hljs-comment">// (Morgan is a woman because she both is Frank&apos;s parent, but not his father) </span>
fam.setParentOf(<span class="hljs-string">&quot;July&quot;</span>, <span class="hljs-string">&quot;Morgan&quot;</span>);        <span class="hljs-comment">// true</span>
<span class="hljs-comment">// (The preceding assertion was rejected, so there is no conflict)</span>
fam.isMale(<span class="hljs-string">&quot;Joy&quot;</span>) || fam.isFemale(<span class="hljs-string">&quot;Joy&quot;</span>); <span class="hljs-comment">// false</span>
<span class="hljs-comment">// (We know Joy is Frank&apos;s child, but we can&apos;t derive Joy&apos;s gender)</span>
fam.getChildrenOf(<span class="hljs-string">&quot;Morgan&quot;</span>);              <span class="hljs-comment">// Arrays.asList(&quot;Frank&quot;, &quot;July&quot;)</span>
fam.setParentOf(<span class="hljs-string">&quot;Jennifer&quot;</span>, <span class="hljs-string">&quot;Morgan&quot;</span>);    <span class="hljs-comment">// true</span>
fam.getChildrenOf(<span class="hljs-string">&quot;Morgan&quot;</span>);              <span class="hljs-comment">// Arrays.asList(&quot;Frank&quot;, &quot;Jennifer&quot;, &quot;July&quot;)</span>
fam.getChildrenOf(<span class="hljs-string">&quot;Dylan&quot;</span>);               <span class="hljs-comment">// Arrays.asList(&quot;Frank&quot;)</span>
<span class="hljs-comment">// (That is all we know for sure)</span>
fam.getParentsOf(<span class="hljs-string">&quot;Frank&quot;</span>);                <span class="hljs-comment">// Arrays.asList(&quot;Dylan&quot;, &quot;Morgan&quot;)</span>
fam.setParentOf(<span class="hljs-string">&quot;Morgan&quot;</span>, <span class="hljs-string">&quot;Frank&quot;</span>);       <span class="hljs-comment">// false</span>
<span class="hljs-comment">// (It is impossible to be the parent of your parent)</span></code></pre>
<pre style="display: none;"><code class="language-python">fam = family()
fam.set_parent_of(<span class="hljs-string">&quot;Frank&quot;</span>, <span class="hljs-string">&quot;Morgan&quot;</span>)       <span class="hljs-comment"># True</span>
fam.set_parent_of(<span class="hljs-string">&quot;Frank&quot;</span>, <span class="hljs-string">&quot;Dylan&quot;</span>)        <span class="hljs-comment"># True</span>
fam.male(<span class="hljs-string">&quot;Dylan&quot;</span>)                          <span class="hljs-comment"># True</span>
fam.set_parent_of(<span class="hljs-string">&quot;Joy&quot;</span>, <span class="hljs-string">&quot;Frank&quot;</span>)          <span class="hljs-comment"># True</span>
fam.male(<span class="hljs-string">&quot;Frank&quot;</span>)                          <span class="hljs-comment"># True</span>
fam.male(<span class="hljs-string">&quot;Morgan&quot;</span>)                         <span class="hljs-comment"># False</span>
<span class="hljs-comment"># (Morgan is a woman because she both is Frank&apos;s parent, but not his father) </span>
fam.set_parent_of(<span class="hljs-string">&quot;July&quot;</span>, <span class="hljs-string">&quot;Morgan&quot;</span>)        <span class="hljs-comment"># True</span>
<span class="hljs-comment"># (The preceding assertion was rejected, so there is no conflict)</span>
fam.is_male(<span class="hljs-string">&quot;Joy&quot;</span>) <span class="hljs-keyword">or</span> fam.is_female(<span class="hljs-string">&quot;Joy&quot;</span>) <span class="hljs-comment"># False</span>
<span class="hljs-comment"># (We know Joy is Frank&apos;s child, but we can&apos;t derive Joy&apos;s gender)</span>
fam.get_children_of(<span class="hljs-string">&quot;Morgan&quot;</span>)              <span class="hljs-comment"># [&quot;Frank&quot;, &quot;July&quot;]</span>
fam.set_parent_of(<span class="hljs-string">&quot;Jennifer&quot;</span>, <span class="hljs-string">&quot;Morgan&quot;</span>)    <span class="hljs-comment"># True</span>
fam.get_children_of(<span class="hljs-string">&quot;Morgan&quot;</span>)              <span class="hljs-comment"># [&quot;Frank&quot;, &quot;Jennifer&quot;, &quot;July&quot;]</span>
fam.get_children_of(<span class="hljs-string">&quot;Dylan&quot;</span>)               <span class="hljs-comment"># [&quot;Frank&quot;]</span>
<span class="hljs-comment"># (That is all we know for sure)</span>
fam.get_parents_of(<span class="hljs-string">&quot;Frank&quot;</span>)                <span class="hljs-comment"># [&quot;Dylan&quot;, &quot;Morgan&quot;]</span>
fam.set_parent_of(<span class="hljs-string">&quot;Morgan&quot;</span>, <span class="hljs-string">&quot;Frank&quot;</span>)       <span class="hljs-comment"># False</span>
<span class="hljs-comment"># (It is impossible to be the parent of your parent)</span></code></pre>
<pre style="display: none;"><code class="language-php">$fam = <span class="hljs-keyword">new</span> Family();
$fam-&gt;setParentOf(<span class="hljs-string">&quot;Frank&quot;</span>, <span class="hljs-string">&quot;Morgan&quot;</span>);        <span class="hljs-comment">// true</span>
$fam-&gt;setParentOf(<span class="hljs-string">&quot;Frank&quot;</span>, <span class="hljs-string">&quot;Dylan&quot;</span>);         <span class="hljs-comment">// true</span>
$fam-&gt;male(<span class="hljs-string">&quot;Dylan&quot;</span>);                         <span class="hljs-comment">// true</span>
$fam-&gt;setParentOf(<span class="hljs-string">&quot;Joy&quot;</span>, <span class="hljs-string">&quot;Frank&quot;</span>);           <span class="hljs-comment">// true</span>
$fam-&gt;male(<span class="hljs-string">&quot;Frank&quot;</span>);                         <span class="hljs-comment">// true</span>
$fam-&gt;male(<span class="hljs-string">&quot;Morgan&quot;</span>);                        <span class="hljs-comment">// false</span>
<span class="hljs-comment">// (Morgan is a woman because she both is Frank&apos;s parent, but not his father) </span>
$fam-&gt;setParentOf(<span class="hljs-string">&quot;July&quot;</span>, <span class="hljs-string">&quot;Morgan&quot;</span>);         <span class="hljs-comment">// true</span>
<span class="hljs-comment">// (The preceding assertion was rejected, so there is no conflict)</span>
$fam-&gt;isMale(<span class="hljs-string">&quot;Joy&quot;</span>) || $fam.isFemale(<span class="hljs-string">&quot;Joy&quot;</span>); <span class="hljs-comment">// false</span>
<span class="hljs-comment">// (We know Joy is Frank&apos;s child, but we can&apos;t derive Joy&apos;s gender)</span>
$fam-&gt;getChildrenOf(<span class="hljs-string">&quot;Morgan&quot;</span>);               <span class="hljs-comment">// [&quot;Frank&quot;, &quot;July&quot;]</span>
$fam-&gt;setParentOf(<span class="hljs-string">&quot;Jennifer&quot;</span>, <span class="hljs-string">&quot;Morgan&quot;</span>);     <span class="hljs-comment">// true</span>
$fam-&gt;getChildrenOf(<span class="hljs-string">&quot;Morgan&quot;</span>);               <span class="hljs-comment">// [&quot;Frank&quot;, &quot;Jennifer&quot;, &quot;July&quot;]</span>
$fam-&gt;getChildrenOf(<span class="hljs-string">&quot;Dylan&quot;</span>);                <span class="hljs-comment">// [&quot;Frank&quot;]</span>
<span class="hljs-comment">// (That is all we know for sure)</span>
$fam-&gt;getParentsOf(<span class="hljs-string">&quot;Frank&quot;</span>);                 <span class="hljs-comment">// [&quot;Dylan&quot;, &quot;Morgan&quot;]</span>
$fam-&gt;setParentOf(<span class="hljs-string">&quot;Morgan&quot;</span>, <span class="hljs-string">&quot;Frank&quot;</span>);        <span class="hljs-comment">// false</span>
<span class="hljs-comment">// (It is impossible to be the parent of your parent)</span></code></pre>
<p>Have fun!</p>

### Solution