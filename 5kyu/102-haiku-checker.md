### Problem:
<p><a href="https://en.wikipedia.org/wiki/Haiku_in_English" target="_blank">Haikus</a> are short poems in a three-line format, with 17 syllables arranged in a 5&#x2013;7&#x2013;5 pattern. Your task is to check if the supplied text is a haiku or not.</p>
<h3 id="about-syllables">About syllables</h3>
<p><a href="https://en.wikipedia.org/wiki/Syllable" target="_blank">Syllables</a> are the phonological building blocks of words. <em>In this kata</em>, a syllable is a part of a word including a vowel (&quot;a-e-i-o-u-y&quot;) or a group of vowels (e.g. &quot;ou&quot;, &quot;ee&quot;, &quot;ay&quot;). A few examples: &quot;tea&quot;, &quot;can&quot;, &quot;to&#xB7;day&quot;, &quot;week&#xB7;end&quot;, &quot;el&#xB7;e&#xB7;phant&quot;.</p>
<p><strong>However</strong>, silent &quot;E&quot;s <strong>do not</strong> create syllables. <em>In this kata</em>, an &quot;E&quot; is considered silent if it&apos;s alone at the end of the word, preceded by one (or more) consonant(s) and there is at least one other syllable in the word. Examples: &quot;age&quot;, &quot;ar&#xB7;range&quot;, &quot;con&#xB7;crete&quot;; but not in &quot;she&quot;, &quot;blue&quot;, &quot;de&#xB7;gree&quot;.</p>
<p>Some more examples:</p>
<ul>
<li>one syllable words: &quot;cat&quot;, &quot;cool&quot;, &quot;sprout&quot;, &quot;like&quot;, &quot;eye&quot;, &quot;squeeze&quot;</li>
<li>two syllables words: &quot;ac&#xB7;count&quot;, &quot;hon&#xB7;est&quot;, &quot;beau&#xB7;ty&quot;, &quot;a&#xB7;live&quot;, &quot;be&#xB7;cause&quot;, &quot;re&#xB7;store&quot;</li>
</ul>
<h2 id="examples">Examples</h2>
<pre><code>An old silent pond...
A frog jumps into the pond,
splash! Silence again.</code></pre><p>...should return <code>True</code>, as this is a valid 5&#x2013;7&#x2013;5 haiku:</p>
<pre><code>An old si&#xB7;lent pond...            # 5 syllables
A frog jumps in&#xB7;to the pond,      # 7
splash! Si&#xB7;lence a&#xB7;gain.          # 5</code></pre><p>Another example:</p>
<pre><code>Autumn moonlight -
a worm digs silently
into the chestnut.</code></pre><p>...should return <code>False</code>, because the number of syllables per line is not correct:</p>
<pre><code>Au&#xB7;tumn moon&#xB7;light -          # 4 syllables
a worm digs si&#xB7;lent&#xB7;ly        # 6
in&#xB7;to the chest&#xB7;nut.          # 5</code></pre><hr>
<h2 id="my-other-katas">My other katas</h2>
<p>If you enjoyed this kata then please try <a href="https://www.codewars.com/collections/katas-created-by-anter69" target="_blank">my other katas</a>! :-)</p>

### Solution