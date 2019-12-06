### Problem:
<p>A famous casino is suddenly faced with a sharp decline of their revenues. They decide to offer Texas hold&apos;em also online. Can you help them by writing an algorithm that can rank poker hands? </p>
<p><b style="font-size:16px">Task:</b></p>
<ul>

<li>Create a poker hand that has a constructor that accepts a string containing 5 cards:</li>

<pre style="display: none;"><code class="language-csharp">PokerHand hand = <span class="hljs-keyword">new</span> PokerHand(<span class="hljs-string">&quot;KS 2H 5C JD TD&quot;</span>);</code></pre>
<pre style="display: none;"><code class="language-fsharp"><span class="hljs-keyword">let</span> hand = PokerHand(<span class="hljs-string">&quot;KS 2H 5C JD TD&quot;</span>)</code></pre>
<pre><code class="language-java">PokerHand hand = <span class="hljs-keyword">new</span> PokerHand(<span class="hljs-string">&quot;KS 2H 5C JD TD&quot;</span>);</code></pre>
<pre style="display: none;"><code class="language-python">hand = PokerHand(<span class="hljs-string">&quot;KS 2H 5C JD TD&quot;</span>)</code></pre>
<li>The characteristics of the string of cards are:
<ul>
<li>A space is used as card seperator</li>
<li>Each card consists of two characters</li>
<li>The first character is the value of the card, valid characters are:
<br>`2, 3, 4, 5, 6, 7, 8, 9, T(en), J(ack), Q(ueen), K(ing), A(ce)`</li>
<li>The second character represents the suit, valid characters are: 
<br>`S(pades), H(earts), D(iamonds), C(lubs)`</li>
</ul>
</li>
<br>
<li>The poker hands must be sortable by rank, the highest rank first:</li>

<pre style="display: none;"><code class="language-csharp"><span class="hljs-keyword">var</span> hands = <span class="hljs-keyword">new</span> List&lt;PokerHand&gt; 
{ 
    <span class="hljs-keyword">new</span> PokerHand(<span class="hljs-string">&quot;KS 2H 5C JD TD&quot;</span>),
    <span class="hljs-keyword">new</span> PokerHand(<span class="hljs-string">&quot;2C 3C AC 4C 5C&quot;</span>)
};
hands.Sort();</code></pre>
<pre style="display: none;"><code class="language-fsharp"><span class="hljs-keyword">let</span> hands = [ PokerHand(<span class="hljs-string">&quot;KS 2H 5C JD TD&quot;</span>);  
              PokerHand(<span class="hljs-string">&quot;2C 3C AC 4C 5C&quot;</span>) ]
<span class="hljs-keyword">let</span> sortedHands = Seq.sort hands         </code></pre>
<pre><code class="language-java">ArrayList&lt;PokerHand&gt; hands = <span class="hljs-keyword">new</span> ArrayList&lt;PokerHand&gt;();
hands.add(<span class="hljs-keyword">new</span> PokerHand(<span class="hljs-string">&quot;KS 2H 5C JD TD&quot;</span>));
hands.add(<span class="hljs-keyword">new</span> PokerHand(<span class="hljs-string">&quot;2C 3C AC 4C 5C&quot;</span>));
Collections.sort(hands);</code></pre>
<pre style="display: none;"><code class="language-python">hands = []
hands.append(PokerHand(<span class="hljs-string">&quot;KS 2H 5C JD TD&quot;</span>))
hands.append(PokerHand(<span class="hljs-string">&quot;2C 3C AC 4C 5C&quot;</span>))
hands.sort() (<span class="hljs-keyword">or</span> sorted(hands))</code></pre>
<li>Apply the <a href="https://en.wikipedia.org/wiki/Texas_hold_%27em" target="_blank">Texas Hold&apos;em</a> rules for ranking the cards. </li>
<li>There is no ranking for the suits.</li>
<li>An ace can either rank high or rank low in a straight or straight flush. Example of a straight with a low ace:<br>
`&quot;5C 4D 3C 2S AS&quot;`</li>
</ul>




<br>

### Solution