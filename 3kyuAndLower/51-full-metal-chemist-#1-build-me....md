### Problem:
<h1 id="overview">Overview:</h1>
<p>The idea of this kata is to create two classes, <code>Molecule</code> and <code>Atom</code>, that will allow you to build numerical equivalents of organic compounds using a set of methods, and to restitute some of their simplest properties (molecular weight and raw formula, for instance). You will need to implement some Exception classes in the process (<em>note for Java users: all exceptions will be unchecked and extend</em> <code>RuntimeException</code> / note for JS users: use classes extending <code>Error</code>)</p>
<p><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Biotin-3D-balls.png/1024px-Biotin-3D-balls.png" alt="3D Balls"></p>
<p>(Biotin. Source: <a href="https://commons.wikimedia.org/wiki/File:Biotin-3D-balls.png" target="_blank">wikipedia</a>)</p>
<p><em>Molecules are beautiful things. Especially organic ones...</em></p>
<br>
<hr>
<br>

<h1 id="the-molecule-class">The Molecule class</h1>
<p>This is the main object, the &quot;builder of things&quot; ( ;p ), representing the whole molecule, its properties and atoms, and holding all the related methods to build and modify the molecule object.</p>
<h2 id="required-propertiesgetters">Required properties/getters:</h2>
<pre><code class="language-python">self.formula</code></pre>
<pre style="display: none;"><code class="language-ruby"><span class="hljs-keyword">self</span>.formula</code></pre>
<pre style="display: none;"><code class="language-java"><span class="hljs-function">String <span class="hljs-title">getFormula</span><span class="hljs-params">()</span></span></code></pre>
<pre style="display: none;"><code class="language-javascript"><span class="hljs-keyword">this</span>.formula</code></pre>
<p>Gives the raw formula of the final molecule as a string (ex: &quot;C4H10&quot;, &quot;C5H10O2BrClS&quot;, ...; see detailed behaviors and additional information below)<br>
<br></p>
<pre><code class="language-python">self.molecular_weight</code></pre>
<pre style="display: none;"><code class="language-ruby"><span class="hljs-keyword">self</span>.molecular_weight</code></pre>
<pre style="display: none;"><code class="language-java"><span class="hljs-function"><span class="hljs-keyword">double</span> <span class="hljs-title">getMolecularWeight</span><span class="hljs-params">()</span></span></code></pre>
<pre style="display: none;"><code class="language-javascript"><span class="hljs-keyword">this</span>.molecularWeight</code></pre>
<p>The value of the molecular weight of the final molecule in g/mol, as a double value (see detailed behaviors and additional information below).<br>
<br></p>
<pre><code class="language-python">self.atoms</code></pre>
<pre style="display: none;"><code class="language-ruby"><span class="hljs-keyword">self</span>.atoms</code></pre>
<pre style="display: none;"><code class="language-java"><span class="hljs-function">List&lt;Atom&gt; <span class="hljs-title">getAtoms</span><span class="hljs-params">()</span></span></code></pre>
<pre style="display: none;"><code class="language-javascript"><span class="hljs-keyword">this</span>.atoms</code></pre>
<p>A list of Atom objects. Atoms are appended to the list in the order of their creation.<br>
<br></p>
<pre><code class="language-python">self.name</code></pre>
<pre style="display: none;"><code class="language-ruby"><span class="hljs-keyword">self</span>.name</code></pre>
<pre style="display: none;"><code class="language-java"><span class="hljs-function">String <span class="hljs-title">getName</span><span class="hljs-params">()</span></span></code></pre>
<pre style="display: none;"><code class="language-javascript"><span class="hljs-keyword">this</span>.name</code></pre>
<p>The name of the molecule, as a string of course (provided or not in the constructor. Default will be the empty string).</p>
<br>

<h2 id="required-methods">Required methods:</h2>
<br>

<pre><code class="language-python">m = Molecule(name)</code></pre>
<pre style="display: none;"><code class="language-ruby">m = Molecule.new(name)</code></pre>
<pre style="display: none;"><code class="language-java">Molecule m = <span class="hljs-keyword">new</span> Molecule()
Molecule m = <span class="hljs-keyword">new</span> Molecule(String name)</code></pre>
<pre style="display: none;"><code class="language-javascript"><span class="hljs-keyword">var</span> m = <span class="hljs-keyword">new</span> Molecule(name)</code></pre>
<p>Constructor(s), with or without the name of the molecule as argument (as a string)<br></p>
<br>

<pre><code class="language-python">m.brancher(x, y, z, ...)</code></pre>
<pre style="display: none;"><code class="language-ruby">m.brancher(x, y, z, ...)</code></pre>
<pre style="display: none;"><code class="language-java">m.brancher(x, y, z, ...)</code></pre>
<pre style="display: none;"><code class="language-javascript">m.brancher(x, y, z, ...)</code></pre>
<ul>
<li>Add new &quot;branches&quot; of carbons, to the current molecule. All carbons of one branch are bonded together (chained).</li>
<li>Each argument gives the number of carbons of one branch.</li>
<li>There can be any number of arguments.</li>
<li>All branches have to be created in the provided order.<br></li>
</ul>
<br>

<pre><code class="language-python">m.bounder((c1,b1,c2,b2), ...)</code></pre>
<pre style="display: none;"><code class="language-ruby">m.bounder([c1,b1,c2,b2], ...)</code></pre>
<pre style="display: none;"><code class="language-java">m.bounder( T(c1,b1,c2,b2), ...)        (about the T object, see at the end of the description)</code></pre>
<pre style="display: none;"><code class="language-javascript">m.bounder([c1,b1,c2,b2], ...)</code></pre>
<ul>
<li>Create new bonds between two atoms of already existing branches.</li>
<li>Each argument is a tuple (python) / <code>T</code> object (java) of four integers giving:<ul>
<li><code>c1</code> &amp; <code>b1</code>: carbon and branch number of the first atom</li>
<li><code>c2</code> &amp; <code>b2</code>: carbon and branch number of the second atom</li>
</ul>
</li>
<li>All numbers are 1-indexed, meaning (1,1,5,3) will bond the first carbon of the first branch with the fifth of the third branch.</li>
<li>Only positive numbers will be used.<br></li>
</ul>
<br>

<pre><code class="language-python">m.mutate((nc,nb,elt), ...)</code></pre>
<pre style="display: none;"><code class="language-ruby">m.mutate([nc,nb,elt], ...)</code></pre>
<pre style="display: none;"><code class="language-java">m.mutate( T(nc,nb,elt), ...)           (about the T object, see at the end of the description)</code></pre>
<pre style="display: none;"><code class="language-javascript">m.mutate([nc,nb,elt], ...)</code></pre>
<p>Mutate the carbon number <code>nc</code> in the branch <code>nb</code> (reminder: both 1-indexed) to the chemical element <code>elt</code>, as a string (this is mutation, the <code>id</code> number of the instance stays the same. See the <code>Atom</code> class specs about that).<br></p>
<br>

<pre><code class="language-python">m.add((nc,nb,elt), ...)</code></pre>
<pre style="display: none;"><code class="language-ruby">m.add([nc,nb,elt], ...)</code></pre>
<pre style="display: none;"><code class="language-java">m.add( T(nc,nb,elt), ...)              (about the T object, see at the end of the description)</code></pre>
<pre style="display: none;"><code class="language-javascript">m.add([nc,nb,elt], ...)</code></pre>
<p>Add a new Atom of kind <code>elt</code> (string) on the carbon number <code>nc</code> in the branch <code>nb</code>. Atoms added this way are not considered as being part of the branch they are bonded to.</p>
<br>

<pre><code class="language-python">m.add_chaining(nc, nb, elt1, elt2, ...)</code></pre>
<pre style="display: none;"><code class="language-ruby">m.add_chaining(nc, nb, elt1, elt2, ...)</code></pre>
<pre style="display: none;"><code class="language-java">m.addChaining(nc, nb, elt1, elt2, ...)</code></pre>
<pre style="display: none;"><code class="language-javascript">m.addChaining(nc, nb, elt1, elt2, ...)</code></pre>
<p>Starting from the carbon <code>nc</code> in the branch <code>nb</code>, add successively all the elements provided as arguments, following themselves. Meaning: <code>m.add_chaining(2, 5, &quot;C&quot;, &quot;C&quot;, &quot;C&quot;, &quot;Mg&quot;, &quot;Br&quot;)</code> will add the chain <code>...-C-C-C-Mg-Br</code> to the atom number 2 in the branch 5. As for the <code>add</code> method, this chain is not considered as a new branch of the molecule.<br></p>
<br>

<pre><code class="language-python">m.closer()</code></pre>
<pre style="display: none;"><code class="language-ruby">m.closer</code></pre>
<pre style="display: none;"><code class="language-java">m.closer()</code></pre>
<pre style="display: none;"><code class="language-javascript">m.closer()</code></pre>
<p>Finalize the molecule instance, adding missing hydrogens everywhere and locking the object (see <em>&quot;behaviors&quot;</em> part below).</p>
<br>

<pre><code class="language-python">m.unlock()</code></pre>
<pre style="display: none;"><code class="language-ruby">m.unlock</code></pre>
<pre style="display: none;"><code class="language-java">m.unlock()</code></pre>
<pre style="display: none;"><code class="language-javascript">m.unlock()</code></pre>
<p>Make the molecule modifiable again. Hydrogens should be removed (<code>id</code> numbers of the remaining atoms should be continuous, beginning at 1), as well as any empty branch you might encounter during the operation (see the related behaviors below for additional information).</p>
<br>

<h2 id="related-behaviors">Related behaviors:</h2>
<ul>
<li>Methods that involve building or doing modifications to the molecule object have to be chainable (ex: <code>molec = Molecule(&quot;octane&quot;).brancher(8).closer()</code>).</li>
<li>Building a molecule consists in mutating the original object at each method call.</li>
<li>An <code>InvalidBond</code> exception should be thrown each tiem you encounter a case where an atom exceed it&apos;s valence number or is bounded to itself (<em>about the valence number, see additional information below</em>).</li>
<li>When a method throws an exception while it has several arguments/atoms to handle, the modifications resulting from the valid previous operations must be kept but all the arguments after the error are ignored.</li>
<li>Special case with <code>add_chaining</code>: if an error occurs at any point during the building of the chain, all its atoms have to be removed from the molecule (even the valid ones).</li>
<li>The whole molecule integrity should hold against any error, meaning that it has to be possible to correctly build the molecule object even after an exception has been thrown.</li>
<li>The fields <code>formula</code> and <code>molecular_weight</code> (python) or the associated getters (java) should throw an <code>UnlockedMolecule</code> exception if access to them is attempted while the molecule isn&apos;t locked (because we do not want the user able to catch incomplete/invalid information).</li>
<li>In the same manner, attempts of modification of a molecule object after it has been locked should throw a <code>LockedMolecule</code> exception (the <code>closer</code> method follows this behavior too).</li>
<li>While unlocking a molecule, if by any (bad...) chance you end up with a molecule that does not have any branch left after unlocking, throw an <code>EmptyMolecule</code> exception.</li>
<li>Once unlocked, the molecule has to be modifiable again, in any way.</li>
</ul>
<br>

<h2 id="additional-information">Additional information:</h2>
<ul>
<li><h3 id="raw-formula-of-organic-compounds">Raw formula of organic compounds:</h3>
</li>
</ul>
<p>The raw formula indicates the number of each kind of chemical element in the molecule. There are several possible rules about the order of the atoms, here, we will use the following: <code>C, H, O, ... other elements in alphabetic order</code>.<br>Example: <code>&quot;C4H10&quot;</code> for C<sub>4</sub>H<sub>10</sub>, <code>&quot;C5H10O2BrClS&quot;</code>, ... Note that ones are not displayed.</p>
<ul>
<li><h3 id="valence-number-of-an-atom">Valence number of an atom:</h3>
</li>
</ul>
<p>The valence number of an atom is the number of bonds it can hold. No less, no more.<br><font size="2" color="gray">(<em>Note for the chemists: we will use all atoms at their lowest valence when several are possible. Meaning the valence number will be 2 for S, 3 for P, ... In the same manner, impossible bonds due to geometrical criteria such as a quadruple bond between two carbons will be allowed</em>)</font></p>
<ul>
<li><h3 id="molecular-weight">Molecular weight:</h3>
</li>
</ul>
<p>The molecular weight of a molecule is the sum of the atomic weight of all its atoms.</p>
<p>You may find below all the data needed in the kata (symbols, valence numbers, and related atomic weights):</p>
<pre><code>Symbol:           H     B     C     N     O     F    Mg     P     S    Cl    Br
Valence number:   1     3     4     3     2     1     2     3     2     1     1
Atomic weight:  1.0  10.8  12.0  14.0  16.0  19.0  24.3  31.0  32.1  35.5  80.0  (in g/mol)</code></pre><br>

<hr>
<br>

<h1 id="the-atom-class">The Atom class</h1>
<p>Instances of this class represent atoms in a specific Molecule instance and the bonds they hold with other Atom instances.</p>
<h2 id="required-properties">Required properties:</h2>
<pre><code class="language-python">self.element</code></pre>
<pre style="display: none;"><code class="language-ruby"><span class="hljs-keyword">self</span>.element</code></pre>
<pre style="display: none;"><code class="language-java"><span class="hljs-keyword">public</span> String element</code></pre>
<pre style="display: none;"><code class="language-javascript"><span class="hljs-keyword">this</span>.element</code></pre>
<p>This is the chemical symbol as a string (&quot;C&quot;, &quot;Br&quot;, &quot;O&quot;, ...)<br></p>
<pre><code class="language-python">self.id</code></pre>
<pre style="display: none;"><code class="language-ruby"><span class="hljs-keyword">self</span>.id</code></pre>
<pre style="display: none;"><code class="language-java"><span class="hljs-keyword">public</span> <span class="hljs-keyword">int</span> id</code></pre>
<pre style="display: none;"><code class="language-javascript"><span class="hljs-keyword">this</span>.id</code></pre>
<p>An integer that allows to keep track of all the atoms of the same molecule, beginning with <code>1</code> (step of one for any new Atom instance).</p>
<h2 id="required-methods-1">Required methods:</h2>
<pre><code class="language-python">__hash__  <span class="hljs-comment"># Provided. Do not modify this method</span>
__eq__    <span class="hljs-comment"># Provided. Do not modify this method</span></code></pre>
<pre style="display: none;"><code class="language-ruby">hash  <span class="hljs-comment"># Provided. Do not modify this method</span>
==    <span class="hljs-comment"># Provided. Do not modify this method</span>
eql?  <span class="hljs-comment"># Provided. Do not modify this method</span></code></pre>
<pre style="display: none;"><code class="language-java">hashCode      <span class="hljs-comment">// Provided. Do not modify this method</span>
equals        <span class="hljs-comment">// Provided. Do not modify this method</span></code></pre>
<pre style="display: none;"><code class="language-javascript">There are not provided methods <span class="hljs-keyword">in</span> JS.</code></pre>
<p>As you will see with the implementations of these two methods, all atoms are considered different from each others in a Molecule instance.<br></p>
<pre><code class="language-python">__str__</code></pre>
<pre style="display: none;"><code class="language-ruby">to_s</code></pre>
<pre style="display: none;"><code class="language-java">toString</code></pre>
<pre style="display: none;"><code class="language-javascript">toString</code></pre>
<p>Return a string formatted like the following: <code>&quot;Atom(element.id: element1id,element2id,element3id...)&quot;</code>.  </p>
<ul>
<li><code>element</code>:    symbol of the current Atom instance</li>
<li><code>id</code>:         id of the current element (beginning at 1 for each Molecule instance)</li>
<li><code>element1id</code>: element1, bonded to the current Atom and its id number. If the bonded atom is a hydrogen, do not display its <code>id</code> number, to increase readability.</li>
</ul>
<p>The elements bonded to the current atom must be sorted in the same order than for
the raw formula, except that the hydrogens will go to the end, again for better readability. Same kind of atoms 
are sorted by increasing value of their <code>id</code> number.</p>
<p>Examples:  <code>&quot;Atom(C.2: C3,C14,O6,H)&quot;</code> or <code>&quot;Atom(C.24: C1,O6,N2,H)&quot;</code></p>
<br>
<hr>
<br>

<h1 id="final-notes">Final notes:</h1>
<ul>
<li>You can add any method or field you&apos;d like to the two objects and organize/design the whole thing as you&apos;d prefer as long as the objects comply with the contracts above.</li>
<li>The tests will only call for properties/methods described in the present contracts.</li>
<li>Methods will always receive valid arguments, considering carbons or branches numbers, or chemical elements symbols.</li>
<li>Atom instances will never be modified directly during the tests, all is done through the Molecule class.</li>
<li>About the required exceptions classes, you can implement subclasses if you want, but their names will have to contain the name of the one originally expected.</li>
</ul>
<br>

<p><em>Enjoy!</em></p>
<p><br><br></p>
<hr>
<br>

<p><a href="https://www.codewars.com/collections/full-metal-chemist-collection" target="_blank"><em>The Full Metal Chemist collection</em></a>...</p>
<p><br></p>

### Solution