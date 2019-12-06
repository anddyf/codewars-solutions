### Problem:
<p>Consider the set of all natural numbers that are multiples of 3.  A straightforward inductive definition of this set is as follows:</p>
<ul>
<li>0 is a multiple of 3</li>
<li>For every natural number n that is a multiple of 3, 3 + n is also a multiple of 3</li>
</ul>
<p>Another possible but rather clumsy inductive definition of the same set is as follows:</p>
<ul>
<li>30 is a multiple of 3</li>
<li>21 is a multiple of 3</li>
<li>For every pair of natural numbers (n, m) that are both multiples of 3, n + m is also a multiple of 3</li>
<li>For every ordered triple of natural numbers (l, n, m) where n, m are multiples of 3 and l + n = m, l is also a multiple of 3</li>
</ul>
<p>Prove that both inductive definitions do indeed define the same set.</p>
<h3 id="preloadedv">Preloaded.v</h3>
<pre><code class="language-coq"><span class="hljs-keyword">Inductive</span> multiple_of_3 : nat -&gt; <span class="hljs-keyword">Prop</span> :=
  | <span class="hljs-type">O_multiple</span> : multiple_of_3 O
  | <span class="hljs-type">SSS_multiple</span> n (H : multiple_of_3 n) : multiple_of_3 (S (S (S n))).

<span class="hljs-keyword">Inductive</span> multiple_of_3&apos; : nat -&gt; <span class="hljs-keyword">Prop</span> :=
  | <span class="hljs-type">thirty_multiple</span> : multiple_of_3&apos; <span class="hljs-number">30</span>
  | <span class="hljs-type">twenty_one_multiple</span> : multiple_of_3&apos; <span class="hljs-number">21</span>
  | <span class="hljs-type">sum_multiple</span> n m (H : multiple_of_3&apos; n) (H&apos; : multiple_of_3&apos; m) : multiple_of_3&apos; (n + m)
  | <span class="hljs-type">difference_multiple</span> l n m (H : multiple_of_3&apos; n) (H&apos; : multiple_of_3&apos; m) (H&apos;&apos; : l + n = m) : multiple_of_3&apos; l.</code></pre>
<h3 id="prerequisites">Prerequisites</h3>
<p>A good command of a range of basic tactics and proof techniques in Coq.  Make sure you can complete most of the exercises in <a href="https://softwarefoundations.cis.upenn.edu/lf-current/index.html" target="_blank">Logical Foundations</a> up to and including &quot;Inductively Defined Propositions&quot; before attempting this Kata.</p>
<h3 id="general-guidelines">General Guidelines</h3>
<p>If in doubt, consult the <a href="https://coq.inria.fr/library/" target="_blank">Coq standard library</a> for key definitions and useful lemmas.</p>
<h3 id="too-difficult">Too difficult?</h3>
<p>You may want to try your hand at <a href="https://www.codewars.com/kata/5cb9dc6f98b230001cbe2cea" target="_blank">A random fact about filtering</a> instead which only requires knowledge up to and including &quot;More Basic Tactics&quot; in Logical Foundations.</p>
<h3 id="too-easy">Too easy?</h3>
<p>Errr ... I&apos;ll try authoring more challenging Coq Kata in the near future ;)</p>

### Solution