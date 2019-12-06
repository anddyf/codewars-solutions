### Problem:
<p>A famous casino is suddenly faced with a sharp decline of their revenues. They decide to offer Texas hold&apos;em also online. Can you help them by writing an algorithm that can rank poker hands? </p>
<h2 id="task">Task</h2>
<p>Create a poker hand that has a method to compare itself to another poker hand:</p>
<pre><code class="language-csharp">Result PokerHand.CompareWith(PokerHand hand);</code></pre>
<pre style="display: none;"><code class="language-fsharp">PokerHand.compareWith: hand: PokerHand -&gt; Result</code></pre>
<pre style="display: none;"><code class="language-java">Result PokerHand.compareWith(PokerHand hand);</code></pre>
<pre style="display: none;"><code class="language-javascript">PokerHand.prototype.compareWith = <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params">hand</span>)</span>{...};</code></pre>
<pre style="display: none;"><code class="language-c"><span class="hljs-function">Result <span class="hljs-title">compare</span> <span class="hljs-params">(Hand* player, Hand* opponent)</span></span>;</code></pre>
<pre style="display: none;"><code class="language-cpp"><span class="hljs-function">Result <span class="hljs-title">compare</span> <span class="hljs-params">(<span class="hljs-keyword">const</span> PokerHand &amp;player, <span class="hljs-keyword">const</span> PokerHand &amp;opponent)</span></span>;</code></pre>
<pre style="display: none;"><code class="language-python">compare_with(self, other_hand)</code></pre>
<pre style="display: none;"><code class="language-ruby">compare_with(other_hand)</code></pre>
<pre style="display: none;"><code class="language-elixir">PokerHand.compare(String player, String opponent)</code></pre>
<p>A poker hand has a constructor that accepts a string containing 5 cards:</p>
<pre><code class="language-csharp">PokerHand hand = <span class="hljs-keyword">new</span> PokerHand(<span class="hljs-string">&quot;KS 2H 5C JD TD&quot;</span>);</code></pre>
<pre style="display: none;"><code class="language-fsharp"><span class="hljs-keyword">let</span> hand = PokerHand(<span class="hljs-string">&quot;KS 2H 5C JD TD&quot;</span>)</code></pre>
<pre style="display: none;"><code class="language-java">PokerHand hand = <span class="hljs-keyword">new</span> PokerHand(<span class="hljs-string">&quot;KS 2H 5C JD TD&quot;</span>);</code></pre>
<pre style="display: none;"><code class="language-javascript"><span class="hljs-keyword">var</span> hand = <span class="hljs-keyword">new</span> PokerHand(<span class="hljs-string">&quot;KS 2H 5C JD TD&quot;</span>);</code></pre>
<pre style="display: none;"><code class="language-c">Hand *hand = PokerHand (<span class="hljs-string">&quot;KS 2H 5C JD TD&quot;</span>);</code></pre>
<pre style="display: none;"><code class="language-cpp"><span class="hljs-function">PokerHand <span class="hljs-title">hand</span> <span class="hljs-params">(<span class="hljs-string">&quot;KS 2H 5C JD TD&quot;</span>)</span></span>;</code></pre>
<pre style="display: none;"><code class="language-python">PokerHand(<span class="hljs-string">&quot;KS 2H 5C JD TD&quot;</span>)</code></pre>
<pre style="display: none;"><code class="language-ruby">PokerHand.new(<span class="hljs-string">&quot;KS 2H 5C JD TD&quot;</span>)</code></pre>
<pre style="display: none;"><code class="language-elixir"><span class="hljs-comment"># no constructor in elixir, pass the string into the compare</span>
<span class="hljs-string">&quot;KS 2H 5C JD TD&quot;</span></code></pre>
<p>The characteristics of the string of cards are:</p>
<ul>
<li>Each card consists of two characters, where<ul>
<li>The first character is the value of the card: <code>2, 3, 4, 5, 6, 7, 8, 9, T(en), J(ack), Q(ueen), K(ing), A(ce)</code></li>
<li>The second character represents the suit: <code>S(pades), H(earts), D(iamonds), C(lubs)</code></li>
</ul>
</li>
<li>A space is used as card separator between cards</li>
</ul>
<p>The result of your poker hand compare can be one of these 3 options:</p>
<pre><code class="language-csharp"><span class="hljs-keyword">public</span> <span class="hljs-keyword">enum</span> Result 
{ 
    Win, 
    Loss, 
    Tie 
}</code></pre>
<pre style="display: none;"><code class="language-fsharp"><span class="hljs-class"><span class="hljs-keyword">type</span> <span class="hljs-title">Result</span> </span>=
| Win = <span class="hljs-number">0</span> 
| Loss = <span class="hljs-number">1</span>
| Tie = <span class="hljs-number">2</span></code></pre>
<pre style="display: none;"><code class="language-java"><span class="hljs-keyword">public</span> <span class="hljs-keyword">enum</span> Result
{
    WIN,
    LOSS,
    TIE
}</code></pre>
<pre style="display: none;"><code class="language-javascript"><span class="hljs-keyword">var</span> Result = 
{
    <span class="hljs-string">&quot;win&quot;</span>: <span class="hljs-number">1</span>,
    <span class="hljs-string">&quot;loss&quot;</span>: <span class="hljs-number">2</span>,
    <span class="hljs-string">&quot;tie&quot;</span>: <span class="hljs-number">3</span>
}</code></pre>
<pre style="display: none;"><code class="language-c"><span class="hljs-keyword">typedef</span> <span class="hljs-keyword">enum</span> { Win, Loss, Tie } Result;</code></pre>
<pre style="display: none;"><code class="language-cpp"><span class="hljs-keyword">enum</span> <span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">Result</span> {</span> Win, Loss, Tie };</code></pre>
<pre style="display: none;"><code class="language-python">[ <span class="hljs-string">&quot;Win&quot;</span>, <span class="hljs-string">&quot;Tie&quot;</span>, <span class="hljs-string">&quot;Loss&quot;</span> ]</code></pre>
<pre style="display: none;"><code class="language-ruby">[ <span class="hljs-string">&quot;Win&quot;</span>, <span class="hljs-string">&quot;Tie&quot;</span>, <span class="hljs-string">&quot;Loss&quot;</span> ]</code></pre>
<pre style="display: none;"><code class="language-elixir"><span class="hljs-variable">@result</span> %{<span class="hljs-symbol">win:</span> <span class="hljs-number">1</span>, <span class="hljs-symbol">loss:</span> <span class="hljs-number">2</span>, <span class="hljs-symbol">tie:</span> <span class="hljs-number">3</span>}</code></pre>
<h2 id="notes">Notes</h2>
<ul>
<li>Apply the <a href="https://en.wikipedia.org/wiki/Texas_hold_%27em" target="_blank">Texas Hold&apos;em</a> rules for ranking the cards.</li>
<li>Low aces are <strong>NOT</strong> valid in this kata.</li>
<li>There is no ranking for the suits.</li>
</ul>
<p>If you finished this kata, you might want to continue with <a href="https://www.codewars.com/kata/sortable-poker-hands" target="_blank">Sortable Poker Hands</a></p>

### Solution