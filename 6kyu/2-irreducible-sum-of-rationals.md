### Problem:
<p>You will have a list of rationals in the form</p>
<pre><code>lst = [ [numer_1, denom_1] , ... , [numer_n, denom_n] ]</code></pre><p>or</p>
<pre><code>lst = [ (numer_1, denom_1) , ... , (numer_n, denom_n) ]</code></pre><p>where all numbers are positive integers. You have to produce their sum <code>N / D</code> in an irreducible form: this means that <code>N</code> and <code>D</code> have only <code>1</code> as a common divisor.</p>
<p>Return the result in the form:</p>
<ul>
<li><code>[N, D]</code> in Ruby, Crystal, Python, Clojure, JS, CS, PHP, Julia</li>
<li><code>Just &quot;N D&quot;</code> in Haskell, PureScript</li>
<li><code>&quot;[N, D]&quot;</code> in Java, CSharp, TS, Scala, PowerShell, Kotlin</li>
<li><code>&quot;N/D&quot;</code> in Go, Nim</li>
<li><code>{N, D}</code> in C++, Elixir</li>
<li><code>&quot;{N, D}&quot;</code> in C</li>
<li><code>Some((N, D))</code> in Rust</li>
<li><code>Some &quot;N D&quot;</code> in F#, Ocaml</li>
<li><code>c(N, D)</code> in R</li>
<li><code>(N, D)</code> in Swift</li>
<li><code>&apos;(N D)</code> in Racket</li>
</ul>
<p>If the result is an integer (<code>D</code> evenly divides <code>N</code>) return:</p>
<ul>
<li>an integer in Ruby, Crystal, Elixir, Clojure, Python, JS, CS, PHP, R, Julia</li>
<li><code>Just &quot;n&quot;</code> (Haskell, PureScript)</li>
<li><code>&quot;n&quot;</code> Java, CSharp, TS, Scala, PowerShell, Go, Nim, Kotlin</li>
<li><code>{n, 1}</code> in C++</li>
<li><code>&quot;{n, 1}&quot;</code> in C</li>
<li><code>Some((n, 1))</code> in Rust</li>
<li><code>Some &quot;n&quot;</code> in F#, Ocaml,</li>
<li><code>(n, 1)</code> in Swift</li>
<li><code>n</code> in Racket </li>
</ul>
<p>If the input list is empty, return </p>
<ul>
<li><code>nil/None/null/Nothing</code> </li>
<li><code>{0, 1}</code> in C++</li>
<li><code>&quot;{0, 1}&quot;</code> in C</li>
<li><code>&quot;0&quot;</code> in Scala, PowerShell, Go, Nim</li>
<li><code>O</code> in Racket</li>
<li><code>&quot;&quot;</code> in Kotlin</li>
</ul>
<h3 id="example">Example:</h3>
<pre><code>[ [1, 2], [1, 3], [1, 4] ]  --&gt;  [13, 12]

    1/2  +  1/3  +  1/4     =      13/12</code></pre><h3 id="note">Note</h3>
<p>See sample tests for more examples and the form of results.</p>

### Solution