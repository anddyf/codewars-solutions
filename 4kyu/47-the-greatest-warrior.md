### Problem:
<p><img src="https://2.bp.blogspot.com/-DNNiOXduuvQ/Vh-FR-qbKXI/AAAAAAAAEOA/HT0IzJ36zW4/s1600/voz.jpg" alt="alt text"></p>
<p>Create a class called <code>Warrior</code> which calculates and keeps track of their level and skills, and ranks them as the warrior they&apos;ve proven to be.</p>
<p><b><font color="#00BFFF">Business Rules:</font></b></p>
<ul>
<li>A warrior starts at level <font color="#FFFF00">1</font> and can progress all the way to <font color="#FFFF00">100</font>.</li>
<li>A warrior starts at rank <code>&quot;Pushover&quot;</code> and can progress all the way to <code>&quot;Greatest&quot;</code>.</li>
<li>The only acceptable range of rank values is <code>&quot;Pushover&quot;, &quot;Novice&quot;, &quot;Fighter&quot;, &quot;Warrior&quot;, &quot;Veteran&quot;, &quot;Sage&quot;, &quot;Elite&quot;, &quot;Conqueror&quot;, &quot;Champion&quot;, &quot;Master&quot;, &quot;Greatest&quot;</code>.</li>
<li>Warriors will compete in battles. Battles will always accept an enemy level to match against your own.</li>
<li>With each battle successfully finished, your warrior&apos;s experience is updated based on the enemy&apos;s level.</li>
<li>The experience earned from the battle is relative to what the warrior&apos;s current level is compared to the level of the enemy.</li>
<li>A warrior&apos;s experience starts from <font color="#FFFF00">100</font>. Each time the warrior&apos;s experience increases by another <font color="#FFFF00">100</font>, the warrior&apos;s level rises to the next level.</li>
<li>A warrior&apos;s experience is <font color="#FFFF00">cumulative</font>, and does not reset with each rise of level. The only exception is when the warrior reaches level <font color="#FFFF00">100</font>, with which the experience stops at <font color="#FFFF00">10000</font></li>
<li>At every <font color="#FFFF00">10</font> levels, your warrior will reach a new rank tier. (ex. levels <font color="#FFFF00">1-9</font> falls within <code>&quot;Pushover&quot;</code> tier, levels <font color="#FFFF00">80-89</font> fall within <code>&quot;Champion&quot;</code> tier, etc.)</li>
<li>A warrior cannot progress beyond level <font color="#FFFF00">100</font> and rank <code>&quot;Greatest&quot;</code>.</li>
</ul>
<p><b><font color="#00BFFF">Battle Progress Rules &amp; Calculations:</font></b></p>
<ul>
<li>If an enemy level does not fall in the range of 1 to 100, the battle cannot happen and should return <code>&quot;Invalid level&quot;</code>.</li>
<li>Completing a battle against an enemy with the same level as your warrior will be worth <font color="#FFFF00">10</font> experience points.</li>
<li>Completing a battle against an enemy who is one level lower than your warrior will be worth <font color="#FFFF00">5</font> experience points.</li>
<li>Completing a battle against an enemy who is two levels lower or more than your warrior will give <font color="#FFFF00">0</font> experience points.</li>
<li>Completing a battle against an enemy who is one level higher or more than your warrior will accelarate your experience gaining. The greater the difference between levels, the more experinece your warrior will gain. The formula is <code>20 * diff * diff</code> where <code>diff</code> equals the difference in levels between the enemy and your warrior.</li>
<li>However, if your warrior is at least one rank lower than your enemy, and at least 5 levels lower, your warrior cannot fight against an enemy that strong and must instead return <code>&quot;You&apos;ve been defeated&quot;</code>.</li>
<li>Every successful battle will also return one of three responses: <code>&quot;Easy fight&quot;, &quot;A good fight&quot;, &quot;An intense fight&quot;</code>. Return <code>&quot;Easy fight&quot;</code> if your warrior is 2 or more levels higher than your enemy&apos;s level. Return <code>&quot;A good fight&quot;</code> if your warrior is either 1 level higher or equal to your enemy&apos;s level. Return <code>&quot;An intense fight&quot;</code> if your warrior&apos;s level is lower than the enemy&apos;s level.</li>
</ul>
<p><b><font color="#00BFFF">Logic Examples:</font></b></p>
<ul>
<li>If a warrior level <font color="#FFFF00">1</font> fights an enemy level <font color="#FFFF00">1</font>, they will receive <font color="#FFFF00">10</font> experience points.</li>
<li>If a warrior level <font color="#FFFF00">1</font> fights an enemy level <font color="#FFFF00">3</font>, they will receive <font color="#FFFF00">80</font> experience points.</li>
<li>If a warrior level <font color="#FFFF00">5</font> fights an enemy level <font color="#FFFF00">4</font>, they will receive <font color="#FFFF00">5</font> experience points.</li>
<li>If a warrior level <font color="#FFFF00">3</font> fights an enemy level <font color="#FFFF00">9</font>, they will receive <font color="#FFFF00">720</font> experience points, resulting in the warrior rising up by at least <font color="#FFFF00">7</font> levels.</li>
<li>If a warrior level <font color="#FFFF00">8</font> fights an enemy level <font color="#FFFF00">13</font>, they will receive <font color="#FFFF00">0</font> experience points and return <code>&quot;You&apos;ve been defeated&quot;</code>. (Remember, difference in rank &amp; enemy level being <font color="#FFFF00">5</font> levels higher or more must be established for this.)</li>
<li>If a warrior level <font color="#FFFF00">6</font> fights an enemy level <font color="#FFFF00">2</font>, they will receive <font color="#FFFF00">0</font> experience points.</li>
</ul>
<p><b><font color="#00BFFF"> Training Rules &amp; Calculations:</font></b></p>
<ul>
<li>In addition to earning experience point from battles, warriors can also gain experience points from training.</li>
<li>Training will accept an array of three elements (except in java where you&apos;ll get 3 separated arguments): the description, the experience points your warrior earns, and the minimum level requirement.</li>
<li>If the warrior&apos;s level meets the minimum level requirement, the warrior will receive the experience points from it and store the description of the training. It should end up returning that description as well.</li>
<li>If the warrior&apos;s level does not meet the minimum level requirement, the warrior doesn not receive the experience points and description and instead returns <code>&quot;Not strong enough&quot;</code>, without any archiving of the result.</li>
</ul>
<p><b><font color="#00BFFF"> Code Examples:</font></b></p>
<pre><code class="language-js"><span class="hljs-keyword">var</span> bruce_lee = <span class="hljs-keyword">new</span> Warrior();
bruce_lee.level();        <span class="hljs-comment">// =&gt; 1</span>
bruce_lee.experience();   <span class="hljs-comment">// =&gt; 100</span>
bruce_lee.rank();         <span class="hljs-comment">// =&gt; &quot;Pushover&quot;</span>
bruce_lee.achievements(); <span class="hljs-comment">// =&gt; []</span>
bruce_lee.training([<span class="hljs-string">&quot;Defeated Chuck Norris&quot;</span>, <span class="hljs-number">9000</span>, <span class="hljs-number">1</span>]); <span class="hljs-comment">// =&gt; &quot;Defeated Chuck Norris&quot;</span>
bruce_lee.experience();   <span class="hljs-comment">// =&gt; 9100</span>
bruce_lee.level();        <span class="hljs-comment">// =&gt; 91</span>
bruce_lee.rank();         <span class="hljs-comment">// =&gt; &quot;Master&quot;</span>
bruce_lee.battle(<span class="hljs-number">90</span>);     <span class="hljs-comment">// =&gt; &quot;A good fight&quot;</span>
bruce_lee.experience();   <span class="hljs-comment">// =&gt; 9105</span>
bruce_lee.achievements(); <span class="hljs-comment">// =&gt; [&quot;Defeated Chuck Norris&quot;]</span></code></pre>
<pre style="display: none;"><code class="language-ruby">bruce_lee = Warrior.new
bruce_lee.level         <span class="hljs-comment"># =&gt; 1</span>
bruce_lee.experience    <span class="hljs-comment"># =&gt; 100</span>
bruce_lee.rank          <span class="hljs-comment"># =&gt; &quot;Pushover&quot;</span>
bruce_lee.achievements  <span class="hljs-comment"># =&gt; []</span>
bruce_lee.training([<span class="hljs-string">&quot;Defeated Chuck Norris&quot;</span>, <span class="hljs-number">9000</span>, <span class="hljs-number">1</span>]) <span class="hljs-comment"># =&gt; &quot;Defeated Chuck Norris&quot;</span>
bruce_lee.experience    <span class="hljs-comment"># =&gt; 9100</span>
bruce_lee.level         <span class="hljs-comment"># =&gt; 91</span>
bruce_lee.rank          <span class="hljs-comment"># =&gt; &quot;Master&quot;</span>
bruce_lee.battle(<span class="hljs-number">90</span>)    <span class="hljs-comment"># =&gt; &quot;A good fight&quot;</span>
bruce_lee.experience    <span class="hljs-comment"># =&gt; 9105</span>
bruce_lee.achievements  <span class="hljs-comment"># =&gt; [&quot;Defeated Chuck Norris&quot;]</span></code></pre>
<pre style="display: none;"><code class="language-python">bruce_lee = Warrior()
bruce_lee.level         <span class="hljs-comment"># =&gt; 1</span>
bruce_lee.experience    <span class="hljs-comment"># =&gt; 100</span>
bruce_lee.rank          <span class="hljs-comment"># =&gt; &quot;Pushover&quot;</span>
bruce_lee.achievements  <span class="hljs-comment"># =&gt; []</span>
bruce_lee.training([<span class="hljs-string">&quot;Defeated Chuck Norris&quot;</span>, <span class="hljs-number">9000</span>, <span class="hljs-number">1</span>]) <span class="hljs-comment"># =&gt; &quot;Defeated Chuck Norris&quot;</span>
bruce_lee.experience    <span class="hljs-comment"># =&gt; 9100</span>
bruce_lee.level         <span class="hljs-comment"># =&gt; 91</span>
bruce_lee.rank          <span class="hljs-comment"># =&gt; &quot;Master&quot;</span>
bruce_lee.battle(<span class="hljs-number">90</span>)    <span class="hljs-comment"># =&gt; &quot;A good fight&quot;</span>
bruce_lee.experience    <span class="hljs-comment"># =&gt; 9105</span>
bruce_lee.achievements  <span class="hljs-comment"># =&gt; [&quot;Defeated Chuck Norris&quot;]</span></code></pre>
<pre style="display: none;"><code class="language-java"><span class="hljs-comment">// Note: all numeric values are integers.</span>

Warrior bruce_lee = <span class="hljs-keyword">new</span> Warrior();
bruce_lee.level();        <span class="hljs-comment">// =&gt; 1</span>
bruce_lee.experience();   <span class="hljs-comment">// =&gt; 100</span>
bruce_lee.rank();         <span class="hljs-comment">// =&gt; &quot;Pushover&quot;</span>
bruce_lee.achievements(); <span class="hljs-comment">// =&gt; []  (as List&lt;String&gt;)</span>
bruce_lee.training(<span class="hljs-string">&quot;Defeated Chuck Norris&quot;</span>, <span class="hljs-number">9000</span>, <span class="hljs-number">1</span>); <span class="hljs-comment">// =&gt; &quot;Defeated Chuck Norris&quot;</span>
bruce_lee.experience();   <span class="hljs-comment">// =&gt; 9100</span>
bruce_lee.level();        <span class="hljs-comment">// =&gt; 91</span>
bruce_lee.rank();         <span class="hljs-comment">// =&gt; &quot;Master&quot;</span>
bruce_lee.battle(<span class="hljs-number">90</span>);     <span class="hljs-comment">// =&gt; &quot;A good fight&quot;</span>
bruce_lee.experience();   <span class="hljs-comment">// =&gt; 9105</span>
bruce_lee.achievements(); <span class="hljs-comment">// =&gt; [&quot;Defeated Chuck Norris&quot;]  (as List&lt;String&gt;)</span></code></pre>

### Solution