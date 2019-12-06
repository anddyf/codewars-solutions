### Problem:
<h1 id="introduction">Introduction</h1>
<p>There is a war and nobody knows - the alphabet war!<br>There are two groups of hostile letters. The tension between left side letters and right side letters was too high and the war began. The letters have discovered a new unit - a priest with Wo lo looooooo power.</p>
<img src="https://i.imgur.com/AUaPiip.jpg">

<h1 id="task">Task</h1>
<p>Write a function that accepts <code>fight</code> string consists of only small letters and return who wins the fight. When the left side wins return <code>Left side wins!</code>, when the right side wins return <code>Right side wins!</code>, in other case return <code>Let&apos;s fight again!</code>.</p>
<p>The left side letters and their power:</p>
<pre><code> w - 4
 p - 3 
 b - 2
 s - 1
 t - 0 (but it&apos;s priest with Wo lo loooooooo power)</code></pre><p>The right side letters and their power:</p>
<pre><code> m - 4
 q - 3 
 d - 2
 z - 1
 j - 0 (but it&apos;s priest with Wo lo loooooooo power)</code></pre><p>The other letters don&apos;t have power and are only victims.<br>The priest units <code>t</code> and <code>j</code> change the adjacent letters from hostile letters to friendly letters with the same power.  </p>
<pre><code>mtq =&gt; wtp
wjs =&gt; mjz</code></pre><p>A letter with adjacent letters <code>j</code> and <code>t</code> is not converted i.e.:</p>
<pre><code>tmj =&gt; tmj
jzt =&gt; jzt</code></pre><p>The priests (<code>j</code> and <code>t</code>) do not convert the other priests ( <code>jt =&gt; jt</code>).</p>
<h1 id="example">Example</h1>
<pre style="display: none;"><code class="language-csharp">AlphabetWar(<span class="hljs-string">&quot;z&quot;</span>)         <span class="hljs-comment">//=&gt;  &quot;z&quot;  =&gt; &quot;Right side wins!&quot;</span>
AlphabetWar(<span class="hljs-string">&quot;tz&quot;</span>)        <span class="hljs-comment">//=&gt;  &quot;ts&quot; =&gt; &quot;Left side wins!&quot; </span>
AlphabetWar(<span class="hljs-string">&quot;jz&quot;</span>)        <span class="hljs-comment">//=&gt;  &quot;jz&quot; =&gt; &quot;Right side wins!&quot; </span>
AlphabetWar(<span class="hljs-string">&quot;zt&quot;</span>)        <span class="hljs-comment">//=&gt;  &quot;st&quot; =&gt; &quot;Left side wins!&quot; </span>
AlphabetWar(<span class="hljs-string">&quot;azt&quot;</span>)       <span class="hljs-comment">//=&gt; &quot;ast&quot; =&gt; &quot;Left side wins!&quot;</span>
AlphabetWar(<span class="hljs-string">&quot;tzj&quot;</span>)       <span class="hljs-comment">//=&gt; &quot;tzj&quot; =&gt; &quot;Right side wins!&quot; </span></code></pre>
<pre><code class="language-javascript">alphabetWar(<span class="hljs-string">&quot;z&quot;</span>)         <span class="hljs-comment">//=&gt;  &quot;z&quot;  =&gt; &quot;Right side wins!&quot;</span>
alphabetWar(<span class="hljs-string">&quot;tz&quot;</span>)        <span class="hljs-comment">//=&gt;  &quot;ts&quot; =&gt; &quot;Left side wins!&quot; </span>
alphabetWar(<span class="hljs-string">&quot;jz&quot;</span>)        <span class="hljs-comment">//=&gt;  &quot;jz&quot; =&gt; &quot;Right side wins!&quot; </span>
alphabetWar(<span class="hljs-string">&quot;zt&quot;</span>)        <span class="hljs-comment">//=&gt;  &quot;st&quot; =&gt; &quot;Left side wins!&quot; </span>
alphabetWar(<span class="hljs-string">&quot;azt&quot;</span>)       <span class="hljs-comment">//=&gt; &quot;ast&quot; =&gt; &quot;Left side wins!&quot;</span>
alphabetWar(<span class="hljs-string">&quot;tzj&quot;</span>)       <span class="hljs-comment">//=&gt; &quot;tzj&quot; =&gt; &quot;Right side wins!&quot; </span></code></pre>
<pre style="display: none;"><code class="language-python">alphabet_war(<span class="hljs-string">&quot;z&quot;</span>)         <span class="hljs-comment">#=&gt;  &quot;z&quot;  =&gt; &quot;Right side wins!&quot;</span>
alphabet_war(<span class="hljs-string">&quot;tz&quot;</span>)        <span class="hljs-comment">#=&gt;  &quot;ts&quot; =&gt; &quot;Left side wins!&quot; </span>
alphabet_war(<span class="hljs-string">&quot;jz&quot;</span>)        <span class="hljs-comment">#=&gt;  &quot;jz&quot; =&gt; &quot;Right side wins!&quot; </span>
alphabet_war(<span class="hljs-string">&quot;zt&quot;</span>)        <span class="hljs-comment">#=&gt;  &quot;st&quot; =&gt; &quot;Left side wins!&quot; </span>
alphabet_war(<span class="hljs-string">&quot;azt&quot;</span>)       <span class="hljs-comment">#=&gt; &quot;ast&quot; =&gt; &quot;Left side wins!&quot;</span>
alphabet_war(<span class="hljs-string">&quot;tzj&quot;</span>)       <span class="hljs-comment">#=&gt; &quot;tzj&quot; =&gt; &quot;Right side wins!&quot; </span></code></pre>
<pre style="display: none;"><code class="language-java">AlphabetWars.woLoLoooooo(<span class="hljs-string">&quot;z&quot;</span>)         <span class="hljs-comment">//=&gt;  &quot;z&quot;  =&gt; &quot;Right side wins!&quot;</span>
AlphabetWars.woLoLoooooo(<span class="hljs-string">&quot;tz&quot;</span>)        <span class="hljs-comment">//=&gt;  &quot;ts&quot; =&gt; &quot;Left side wins!&quot; </span>
AlphabetWars.woLoLoooooo(<span class="hljs-string">&quot;jz&quot;</span>)        <span class="hljs-comment">//=&gt;  &quot;jz&quot; =&gt; &quot;Right side wins!&quot; </span>
AlphabetWars.woLoLoooooo(<span class="hljs-string">&quot;zt&quot;</span>)        <span class="hljs-comment">//=&gt;  &quot;st&quot; =&gt; &quot;Left side wins!&quot; </span>
AlphabetWars.woLoLoooooo(<span class="hljs-string">&quot;azt&quot;</span>)       <span class="hljs-comment">//=&gt; &quot;ast&quot; =&gt; &quot;Left side wins!&quot;</span>
AlphabetWars.woLoLoooooo(<span class="hljs-string">&quot;tzj&quot;</span>)       <span class="hljs-comment">//=&gt; &quot;tzj&quot; =&gt; &quot;Right side wins!&quot; </span></code></pre>
<h1 id="alphabet-war-collection">Alphabet war Collection</h1>
<table border="0" cellpadding="0" cellspacing="0">
<tbody><tr>
<td><a href="https://www.codewars.com/kata/59377c53e66267c8f6000027" target="_blank">Alphabet war </a></td>
</tr>
<tr>
<td><a href="https://www.codewars.com/kata/5938f5b606c3033f4700015a" target="_blank">Alphabet war - airstrike - letters massacre</a></td>
</tr>
<tr>
<td><a href="https://www.codewars.com/kata/alphabet-wars-reinforces-massacre" target="_blank">Alphabet wars - reinforces massacre</a></td>
</tr>
<tr>
<td><a href="https://www.codewars.com/kata/59437bd7d8c9438fb5000004" target="_blank">Alphabet wars - nuclear strike</a></td>
</tr>
<tr>
<td><a href="https://www.codewars.com/kata/59473c0a952ac9b463000064" target="_blank">Alphabet war - Wo lo loooooo priests join the war</a></td>
</tr>
</tbody></table>


### Solution