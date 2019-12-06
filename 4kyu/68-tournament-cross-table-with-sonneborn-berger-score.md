### Problem:
<p>Print an ordered cross table of a round robin tournament that looks like this:</p>
<pre><code> #  Player            1  2  3  4  5  6  7  8  9 10 11 12 13 14  Pts   SB
==========================================================================
 1  Nash King            1  0  =  1  0  =  1  1  0  1  1  1  0  8.0  52.25
 2  Karsyn Marks      0     1  1  =  1  =  =  1  0  0  1  1  0  7.5  49.75
 3  Yandel Briggs     1  0     =  0  =  1  1  1  =  0  1  0  1  7.5  47.25
    Luka Harrell      =  0  =     1  1  1  =  0  0  1  1  0  1  7.5  47.25
    Pierre Medina     0  =  1  0     =  1  =  1  1  =  0  1  =  7.5  47.25
 6  Carlos Koch       1  0  =  0  =     =  =  1  1  =  0  =  1  7.0  43.50
 7  Tristan Pitts     =  =  0  0  0  =     1  0  1  =  1  1  1  7.0  40.75
    Luke Schaefer     0  =  0  =  =  =  0     1  =  =  1  1  1  7.0  40.75
 9  Tanner Dunn       0  0  0  1  0  0  1  0     1  1  =  1  1  6.5  37.25
10  Haylee Bryan      1  1  =  1  0  0  0  =  0     1  0  0  1  6.0  39.25
11  Dylan Turner      0  1  1  0  =  =  =  =  0  0     1  =  =  6.0  38.75
12  Adyson Griffith   0  0  0  0  1  1  0  0  =  1  0     1  1  5.5  31.75
13  Dwayne Shaw       0  0  1  1  0  =  0  0  0  1  =  0     1  5.0  30.50
14  Kadin Rice        1  1  0  0  =  0  0  0  0  0  =  0  0     3.0  22.25</code></pre><p>The <code>#</code> column contains the rank. Ranks may be tied.<br>A colum with index numbers <code>i</code> contains the match against the player on line <code>i</code>. <code>1</code> / <code>=</code> / <code>0</code> means win / draw / loss.<br>The <code>Pts</code> column contains the score, 1 for each win, 0.5 for each draw.<br>The <code>SB</code> column contains the Sonneborn-Berger score (see below).  </p>
<p>The rank is determined by the score, the Sonneborn-Berger score is used to break ties.
Players with the same score and the same SB score share the same rank.
In the cross table those tied players are ordered by their surenames.</p>
<h1 id="sonneborn-berger-score">Sonneborn-Berger score</h1>
<p>The Sonneborn-Berger score (<code>SB</code>) (sometimes also called Neustadtl Sonneborn&#x2013;Berger or Neustadtl score) is a system to break ties in tournaments.
This score is based on the observation that it is usually harder to score against higher ranked than against lower ranked opponents.
The score is the sum of the points of opponents this player has defeated plus the half the sum of the points of opponents this player has drawn against.
For examples, see the table above.</p>
<h1 id="task">Task</h1>
<p>Write a function <code>crosstable(players, results)</code>.</p>
<p>Input:</p>
<ul>
<li><code>players</code>: a list of names (<code>[&quot;Forename Surename&quot;, ...]</code>)</li>
<li><code>results</code>: a list of lists of results, where result may be <code>1</code>, <code>0.5</code>, <code>0</code> or <code>None</code>.</li>
</ul>
<p>Output:</p>
<ul>
<li>The cross table as a string.<br>There is no whitespace at the end of the lines.<br>The columns are separated by two spaces.<br>The column headers for the rank (<code>#</code>) and for the rounds are right adjusted, <code>Players</code> is left-adjusted, <code>Pts</code> and <code>SB</code> are centered.<br>The separator line consisting of <code>=</code> is just as long as the longest line in the output.</li>
</ul>
<h1 id="examples">Examples</h1>
<pre><code class="language-python">d, _ = <span class="hljs-number">0.5</span>, <span class="hljs-literal">None</span>

crosstable([
    <span class="hljs-string">&apos;Emmett Frost&apos;</span>, <span class="hljs-string">&apos;Cruz Sullivan&apos;</span>, <span class="hljs-string">&apos;Deandre Bullock&apos;</span>, <span class="hljs-string">&apos;George Bautista&apos;</span>, <span class="hljs-string">&apos;Norah Underwood&apos;</span>, <span class="hljs-string">&apos;Renee Preston&apos;</span>], [
    [_, <span class="hljs-number">1</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, d, <span class="hljs-number">0</span>],
    [<span class="hljs-number">0</span>, _, d, <span class="hljs-number">1</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>],
    [<span class="hljs-number">1</span>, d, _, d, d, d],
    [<span class="hljs-number">1</span>, <span class="hljs-number">0</span>, d, _, d, d],
    [d, <span class="hljs-number">1</span>, d, d, _, d],
    [<span class="hljs-number">1</span>, <span class="hljs-number">1</span>, d, d, d, _]])

<span class="hljs-comment"># returns</span>
<span class="hljs-string">&apos;&apos;&apos;\
#  Player           1 2 3 4 5 6  Pts   SB
==========================================
1  Renee Preston      = = = 1 1  3.5  7.25
2  Deandre Bullock  =   = = = 1  3.0  6.75
   Norah Underwood  = =   = 1 =  3.0  6.75
4  George Bautista  = = =   0 1  2.5  6.25
5  Cruz Sullivan    0 = 0 1   0  1.5  4.00
6  Emmett Frost     0 0 = 0 1    1.5  3.00&apos;&apos;&apos;</span>

crosstable([
    <span class="hljs-string">&apos;Luke Schaefer&apos;</span>, <span class="hljs-string">&apos;Adyson Griffith&apos;</span>, <span class="hljs-string">&apos;Dylan Turner&apos;</span>, <span class="hljs-string">&apos;Carlos Koch&apos;</span>, <span class="hljs-string">&apos;Luka Harrell&apos;</span>, <span class="hljs-string">&apos;Karsyn Marks&apos;</span>, <span class="hljs-string">&apos;Haylee Bryan&apos;</span>,
    <span class="hljs-string">&apos;Dwayne Shaw&apos;</span>, <span class="hljs-string">&apos;Pierre Medina&apos;</span>, <span class="hljs-string">&apos;Nash King&apos;</span>, <span class="hljs-string">&apos;Kadin Rice&apos;</span>, <span class="hljs-string">&apos;Tristan Pitts&apos;</span>, <span class="hljs-string">&apos;Tanner Dunn&apos;</span>, <span class="hljs-string">&apos;Yandel Briggs&apos;</span>], [
    [_, <span class="hljs-number">1</span>, d, d, d, d, d, <span class="hljs-number">1</span>, d, <span class="hljs-number">0</span>, <span class="hljs-number">1</span>, <span class="hljs-number">0</span>, <span class="hljs-number">1</span>, <span class="hljs-number">0</span>],
    [<span class="hljs-number">0</span>, _, <span class="hljs-number">0</span>, <span class="hljs-number">1</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">0</span>, <span class="hljs-number">1</span>, <span class="hljs-number">0</span>, d, <span class="hljs-number">0</span>],
    [d, <span class="hljs-number">1</span>, _, d, <span class="hljs-number">0</span>, <span class="hljs-number">1</span>, <span class="hljs-number">0</span>, d, d, <span class="hljs-number">0</span>, d, d, <span class="hljs-number">0</span>, <span class="hljs-number">1</span>],
    [d, <span class="hljs-number">0</span>, d, _, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">1</span>, d, d, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, d, <span class="hljs-number">1</span>, d],
    [d, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, _, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">1</span>, d, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">0</span>, d],
    [d, <span class="hljs-number">1</span>, <span class="hljs-number">0</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, _, <span class="hljs-number">0</span>, <span class="hljs-number">1</span>, d, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, d, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>],
    [d, <span class="hljs-number">0</span>, <span class="hljs-number">1</span>, <span class="hljs-number">0</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, _, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, d],
    [<span class="hljs-number">0</span>, <span class="hljs-number">0</span>, d, d, <span class="hljs-number">1</span>, <span class="hljs-number">0</span>, <span class="hljs-number">1</span>, _, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">1</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">1</span>],
    [d, <span class="hljs-number">0</span>, d, d, <span class="hljs-number">0</span>, d, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, _, <span class="hljs-number">0</span>, d, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>],
    [<span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">0</span>, d, <span class="hljs-number">1</span>, <span class="hljs-number">0</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, _, <span class="hljs-number">0</span>, d, <span class="hljs-number">1</span>, <span class="hljs-number">0</span>],
    [<span class="hljs-number">0</span>, <span class="hljs-number">0</span>, d, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">1</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, d, <span class="hljs-number">1</span>, _, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>],
    [<span class="hljs-number">1</span>, <span class="hljs-number">1</span>, d, d, <span class="hljs-number">0</span>, d, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">0</span>, d, <span class="hljs-number">1</span>, _, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>],
    [<span class="hljs-number">0</span>, d, <span class="hljs-number">1</span>, <span class="hljs-number">0</span>, <span class="hljs-number">1</span>, <span class="hljs-number">0</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, _, <span class="hljs-number">0</span>],
    [<span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">0</span>, d, d, <span class="hljs-number">0</span>, d, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, _]])

<span class="hljs-comment"># returns</span>
<span class="hljs-string">&apos;&apos;&apos;\
 #  Player            1  2  3  4  5  6  7  8  9 10 11 12 13 14  Pts   SB
==========================================================================
 1  Nash King            1  0  =  1  0  =  1  1  0  1  1  1  0  8.0  52.25
 2  Karsyn Marks      0     1  1  =  1  =  =  1  0  0  1  1  0  7.5  49.75
 3  Yandel Briggs     1  0     =  0  =  1  1  1  =  0  1  0  1  7.5  47.25
    Luka Harrell      =  0  =     1  1  1  =  0  0  1  1  0  1  7.5  47.25
    Pierre Medina     0  =  1  0     =  1  =  1  1  =  0  1  =  7.5  47.25
 6  Carlos Koch       1  0  =  0  =     =  =  1  1  =  0  =  1  7.0  43.50
 7  Tristan Pitts     =  =  0  0  0  =     1  0  1  =  1  1  1  7.0  40.75
    Luke Schaefer     0  =  0  =  =  =  0     1  =  =  1  1  1  7.0  40.75
 9  Tanner Dunn       0  0  0  1  0  0  1  0     1  1  =  1  1  6.5  37.25
10  Haylee Bryan      1  1  =  1  0  0  0  =  0     1  0  0  1  6.0  39.25
11  Dylan Turner      0  1  1  0  =  =  =  =  0  0     1  =  =  6.0  38.75
12  Adyson Griffith   0  0  0  0  1  1  0  0  =  1  0     1  1  5.5  31.75
13  Dwayne Shaw       0  0  1  1  0  =  0  0  0  1  =  0     1  5.0  30.50
14  Kadin Rice        1  1  0  0  =  0  0  0  0  0  =  0  0     3.0  22.25&apos;&apos;&apos;</span>

crosstable([
    <span class="hljs-string">&apos;Mikaela Orozco&apos;</span>, <span class="hljs-string">&apos;Mekhi Mayer&apos;</span>, <span class="hljs-string">&apos;Marcus Galvan&apos;</span>, <span class="hljs-string">&apos;Leroy Wilkins&apos;</span>, <span class="hljs-string">&apos;Gregory Bates&apos;</span>, <span class="hljs-string">&apos;Jayda Lynn&apos;</span>, <span class="hljs-string">&apos;Makena Galloway&apos;</span>,
    <span class="hljs-string">&apos;Adriel Brock&apos;</span>, <span class="hljs-string">&apos;Morgan Gillespie&apos;</span>, <span class="hljs-string">&apos;Darwin Mack&apos;</span>, <span class="hljs-string">&apos;Clayton Terrell&apos;</span>, <span class="hljs-string">&apos;Bo Schmidt&apos;</span>, <span class="hljs-string">&apos;Xzavier Clements&apos;</span>, <span class="hljs-string">&apos;Rex Cummings&apos;</span>,
    <span class="hljs-string">&apos;Aldo Jackson&apos;</span>, <span class="hljs-string">&apos;Justus Sloan&apos;</span>, <span class="hljs-string">&apos;Rudy Herrera&apos;</span>, <span class="hljs-string">&apos;Leonard Ponce&apos;</span>, <span class="hljs-string">&apos;Kaden Harding&apos;</span>, <span class="hljs-string">&apos;Anastasia Dodson&apos;</span>], [
    [_, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">0</span>, <span class="hljs-number">1</span>, d, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">0</span>, <span class="hljs-number">1</span>, <span class="hljs-number">0</span>, d, <span class="hljs-number">0</span>, d, d, <span class="hljs-number">0</span>, d, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, d],
    [<span class="hljs-number">0</span>, _, <span class="hljs-number">0</span>, d, d, <span class="hljs-number">0</span>, d, <span class="hljs-number">1</span>, d, d, <span class="hljs-number">0</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, d, d, d, d, <span class="hljs-number">1</span>, d, <span class="hljs-number">0</span>],
    [<span class="hljs-number">0</span>, <span class="hljs-number">1</span>, _, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, d, <span class="hljs-number">1</span>, d, <span class="hljs-number">0</span>, d, <span class="hljs-number">0</span>, d, <span class="hljs-number">0</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>],
    [<span class="hljs-number">1</span>, d, <span class="hljs-number">1</span>, _, d, <span class="hljs-number">0</span>, d, <span class="hljs-number">0</span>, d, <span class="hljs-number">0</span>, <span class="hljs-number">1</span>, d, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">1</span>, <span class="hljs-number">0</span>, d, <span class="hljs-number">1</span>, d, <span class="hljs-number">1</span>],
    [<span class="hljs-number">0</span>, d, <span class="hljs-number">1</span>, d, _, <span class="hljs-number">1</span>, d, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, d, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, d, <span class="hljs-number">0</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, d, d],
    [d, <span class="hljs-number">1</span>, d, <span class="hljs-number">1</span>, <span class="hljs-number">0</span>, _, <span class="hljs-number">0</span>, d, d, <span class="hljs-number">1</span>, d, <span class="hljs-number">0</span>, d, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">1</span>, d, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>],
    [<span class="hljs-number">0</span>, d, <span class="hljs-number">0</span>, d, d, <span class="hljs-number">1</span>, _, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">0</span>, d, <span class="hljs-number">0</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, d, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">0</span>],
    [<span class="hljs-number">0</span>, <span class="hljs-number">0</span>, d, <span class="hljs-number">1</span>, <span class="hljs-number">0</span>, d, <span class="hljs-number">0</span>, _, <span class="hljs-number">1</span>, d, <span class="hljs-number">0</span>, d, <span class="hljs-number">1</span>, d, d, <span class="hljs-number">1</span>, d, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>],
    [<span class="hljs-number">1</span>, d, <span class="hljs-number">1</span>, d, <span class="hljs-number">0</span>, d, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, _, <span class="hljs-number">0</span>, <span class="hljs-number">1</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, d, d, <span class="hljs-number">1</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>],
    [<span class="hljs-number">0</span>, d, d, <span class="hljs-number">1</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, d, <span class="hljs-number">1</span>, _, d, d, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, d, <span class="hljs-number">0</span>, <span class="hljs-number">1</span>, d, <span class="hljs-number">1</span>, d],
    [<span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">0</span>, d, d, <span class="hljs-number">0</span>, <span class="hljs-number">1</span>, <span class="hljs-number">0</span>, d, _, <span class="hljs-number">1</span>, d, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, d, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, d, d],
    [d, <span class="hljs-number">0</span>, d, d, <span class="hljs-number">0</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, d, <span class="hljs-number">1</span>, d, <span class="hljs-number">0</span>, _, <span class="hljs-number">1</span>, d, d, <span class="hljs-number">0</span>, <span class="hljs-number">1</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>],
    [<span class="hljs-number">1</span>, <span class="hljs-number">0</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">0</span>, d, d, <span class="hljs-number">0</span>, <span class="hljs-number">1</span>, <span class="hljs-number">0</span>, d, <span class="hljs-number">0</span>, _, <span class="hljs-number">1</span>, d, d, <span class="hljs-number">0</span>, <span class="hljs-number">1</span>, d, d],
    [d, d, <span class="hljs-number">0</span>, <span class="hljs-number">1</span>, d, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, d, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">1</span>, d, <span class="hljs-number">0</span>, _, d, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>],
    [d, d, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">0</span>, d, <span class="hljs-number">0</span>, d, <span class="hljs-number">1</span>, d, d, d, _, d, <span class="hljs-number">1</span>, <span class="hljs-number">0</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>],
    [<span class="hljs-number">1</span>, d, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">0</span>, <span class="hljs-number">1</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, d, <span class="hljs-number">1</span>, d, <span class="hljs-number">1</span>, d, <span class="hljs-number">1</span>, d, _, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">0</span>, d],
    [d, d, <span class="hljs-number">1</span>, d, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, d, d, d, <span class="hljs-number">0</span>, <span class="hljs-number">1</span>, <span class="hljs-number">0</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, _, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">1</span>],
    [<span class="hljs-number">1</span>, <span class="hljs-number">0</span>, <span class="hljs-number">1</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, d, <span class="hljs-number">0</span>, <span class="hljs-number">1</span>, <span class="hljs-number">0</span>, d, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">0</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">0</span>, <span class="hljs-number">1</span>, _, d, d],
    [<span class="hljs-number">1</span>, d, <span class="hljs-number">0</span>, d, d, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">0</span>, d, <span class="hljs-number">1</span>, d, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, d, _, <span class="hljs-number">0</span>],
    [d, <span class="hljs-number">1</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, d, <span class="hljs-number">0</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, d, d, <span class="hljs-number">1</span>, d, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, d, <span class="hljs-number">0</span>, d, <span class="hljs-number">1</span>, _]])

<span class="hljs-comment"># returns</span>
<span class="hljs-string">&apos;&apos;&apos;\
 #  Player             1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20  Pts     SB
===============================================================================================
 1  Gregory Bates         1  =  0  1  1  =  1  =  1  0  =  =  =  1  1  =  1  1  1  13.5  124.50
 2  Justus Sloan       0     0  =  1  1  =  =  1  1  1  1  =  0  =  1  =  1  1  0  12.0  109.00
 3  Makena Galloway    =  1     1  1  1  0  =  =  1  0  0  =  1  1  0  1  0  =  1  11.5  109.75
 4  Aldo Jackson       1  =  0     =  0  1  =  0  1  =  =  =  1  0  =  1  0  1  =  10.0   95.25
 5  Darwin Mack        0  0  0  =     =  =  1  1  0  0  1  =  1  1  =  =  =  1  =  10.0   89.00
 6  Leonard Ponce      0  0  0  1  =     =  0  0  =  1  1  0  =  0  1  1  1  1  1  10.0   87.50
 7  Anastasia Dodson   =  =  1  0  =  =     =  0  0  =  0  1  1  1  1  =  0  0  1   9.5   90.25
 8  Xzavier Clements   0  =  =  =  0  1  =     1  =  1  1  0  =  1  0  =  1  0  0   9.5   89.00
    Leroy Wilkins      =  0  =  1  0  1  1  0     0  1  0  =  =  =  =  1  1  =  0   9.5   89.00
10  Jayda Lynn         0  0  0  0  1  =  1  =  1     =  0  1  1  =  0  =  =  1  =   9.5   85.50
11  Mikaela Orozco     1  0  1  =  1  0  =  0  0  =     =  1  0  0  =  0  1  =  1   9.0   86.75
12  Rex Cummings       =  0  1  =  0  0  1  0  1  1  =     =  1  0  =  1  0  0  =   9.0   86.25
13  Mekhi Mayer        =  =  =  =  =  1  0  1  =  0  0  =     =  =  1  0  0  =  1   9.0   86.00
14  Kaden Harding      =  1  0  0  0  =  0  =  =  0  1  0  =     1  1  =  0  1  1   9.0   83.50
15  Morgan Gillespie   0  =  0  1  0  1  0  0  =  =  1  1  =  0     0  1  1  =  0   8.5   78.50
    Bo Schmidt         0  0  1  =  =  0  0  1  =  1  =  =  0  0  1     0  =  1  =   8.5   78.50
    Clayton Terrell    =  =  0  0  =  0  =  =  0  =  1  0  1  =  0  1     1  0  1   8.5   78.50
18  Marcus Galvan      0  0  1  1  =  0  1  0  0  =  0  1  1  1  0  =  0     0  =   8.0   75.75
19  Rudy Herrera       0  0  =  0  0  0  1  1  =  0  =  1  =  0  =  0  1  1     =   8.0   72.00
20  Adriel Brock       0  1  0  =  =  0  0  1  1  =  0  =  0  0  1  =  0  =  =      7.5   71.00&apos;&apos;&apos;</span></code></pre>
<pre style="display: none;"><code class="language-javascript"><span class="hljs-keyword">const</span> d = <span class="hljs-number">0.5</span>, _ = <span class="hljs-literal">null</span>;

crosstable([
    <span class="hljs-string">&apos;Emmett Frost&apos;</span>, <span class="hljs-string">&apos;Cruz Sullivan&apos;</span>, <span class="hljs-string">&apos;Deandre Bullock&apos;</span>, <span class="hljs-string">&apos;George Bautista&apos;</span>, <span class="hljs-string">&apos;Norah Underwood&apos;</span>, <span class="hljs-string">&apos;Renee Preston&apos;</span>], [
    [_, <span class="hljs-number">1</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, d, <span class="hljs-number">0</span>],
    [<span class="hljs-number">0</span>, _, d, <span class="hljs-number">1</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>],
    [<span class="hljs-number">1</span>, d, _, d, d, d],
    [<span class="hljs-number">1</span>, <span class="hljs-number">0</span>, d, _, d, d],
    [d, <span class="hljs-number">1</span>, d, d, _, d],
    [<span class="hljs-number">1</span>, <span class="hljs-number">1</span>, d, d, d, _]])

<span class="hljs-comment">// returns</span>
<span class="hljs-string">&apos;#  Player           1 2 3 4 5 6  Pts   SB\n&apos;</span> +
<span class="hljs-string">&apos;==========================================\n&apos;</span> +
<span class="hljs-string">&apos;1  Renee Preston      = = = 1 1  3.5  7.25\n&apos;</span> +
<span class="hljs-string">&apos;2  Deandre Bullock  =   = = = 1  3.0  6.75\n&apos;</span> +
<span class="hljs-string">&apos;   Norah Underwood  = =   = 1 =  3.0  6.75\n&apos;</span> +
<span class="hljs-string">&apos;4  George Bautista  = = =   0 1  2.5  6.25\n&apos;</span> +
<span class="hljs-string">&apos;5  Cruz Sullivan    0 = 0 1   0  1.5  4.00\n&apos;</span> +
<span class="hljs-string">&apos;6  Emmett Frost     0 0 = 0 1    1.5  3.00&apos;</span>

crosstable([
    <span class="hljs-string">&apos;Luke Schaefer&apos;</span>, <span class="hljs-string">&apos;Adyson Griffith&apos;</span>, <span class="hljs-string">&apos;Dylan Turner&apos;</span>, <span class="hljs-string">&apos;Carlos Koch&apos;</span>, <span class="hljs-string">&apos;Luka Harrell&apos;</span>, <span class="hljs-string">&apos;Karsyn Marks&apos;</span>, <span class="hljs-string">&apos;Haylee Bryan&apos;</span>,
    <span class="hljs-string">&apos;Dwayne Shaw&apos;</span>, <span class="hljs-string">&apos;Pierre Medina&apos;</span>, <span class="hljs-string">&apos;Nash King&apos;</span>, <span class="hljs-string">&apos;Kadin Rice&apos;</span>, <span class="hljs-string">&apos;Tristan Pitts&apos;</span>, <span class="hljs-string">&apos;Tanner Dunn&apos;</span>, <span class="hljs-string">&apos;Yandel Briggs&apos;</span>], [
    [_, <span class="hljs-number">1</span>, d, d, d, d, d, <span class="hljs-number">1</span>, d, <span class="hljs-number">0</span>, <span class="hljs-number">1</span>, <span class="hljs-number">0</span>, <span class="hljs-number">1</span>, <span class="hljs-number">0</span>],
    [<span class="hljs-number">0</span>, _, <span class="hljs-number">0</span>, <span class="hljs-number">1</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">0</span>, <span class="hljs-number">1</span>, <span class="hljs-number">0</span>, d, <span class="hljs-number">0</span>],
    [d, <span class="hljs-number">1</span>, _, d, <span class="hljs-number">0</span>, <span class="hljs-number">1</span>, <span class="hljs-number">0</span>, d, d, <span class="hljs-number">0</span>, d, d, <span class="hljs-number">0</span>, <span class="hljs-number">1</span>],
    [d, <span class="hljs-number">0</span>, d, _, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">1</span>, d, d, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, d, <span class="hljs-number">1</span>, d],
    [d, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, _, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">1</span>, d, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">0</span>, d],
    [d, <span class="hljs-number">1</span>, <span class="hljs-number">0</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, _, <span class="hljs-number">0</span>, <span class="hljs-number">1</span>, d, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, d, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>],
    [d, <span class="hljs-number">0</span>, <span class="hljs-number">1</span>, <span class="hljs-number">0</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, _, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, d],
    [<span class="hljs-number">0</span>, <span class="hljs-number">0</span>, d, d, <span class="hljs-number">1</span>, <span class="hljs-number">0</span>, <span class="hljs-number">1</span>, _, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">1</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">1</span>],
    [d, <span class="hljs-number">0</span>, d, d, <span class="hljs-number">0</span>, d, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, _, <span class="hljs-number">0</span>, d, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>],
    [<span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">0</span>, d, <span class="hljs-number">1</span>, <span class="hljs-number">0</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, _, <span class="hljs-number">0</span>, d, <span class="hljs-number">1</span>, <span class="hljs-number">0</span>],
    [<span class="hljs-number">0</span>, <span class="hljs-number">0</span>, d, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">1</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, d, <span class="hljs-number">1</span>, _, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>],
    [<span class="hljs-number">1</span>, <span class="hljs-number">1</span>, d, d, <span class="hljs-number">0</span>, d, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">0</span>, d, <span class="hljs-number">1</span>, _, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>],
    [<span class="hljs-number">0</span>, d, <span class="hljs-number">1</span>, <span class="hljs-number">0</span>, <span class="hljs-number">1</span>, <span class="hljs-number">0</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, _, <span class="hljs-number">0</span>],
    [<span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">0</span>, d, d, <span class="hljs-number">0</span>, d, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, _]])

<span class="hljs-comment">// returns</span>
<span class="hljs-string">&apos; #  Player            1  2  3  4  5  6  7  8  9 10 11 12 13 14  Pts   SB\n&apos;</span> +
<span class="hljs-string">&apos;==========================================================================\n&apos;</span> +
<span class="hljs-string">&apos; 1  Nash King            1  0  =  1  0  =  1  1  0  1  1  1  0  8.0  52.25\n&apos;</span> +
<span class="hljs-string">&apos; 2  Karsyn Marks      0     1  1  =  1  =  =  1  0  0  1  1  0  7.5  49.75\n&apos;</span> +
<span class="hljs-string">&apos; 3  Yandel Briggs     1  0     =  0  =  1  1  1  =  0  1  0  1  7.5  47.25\n&apos;</span> +
<span class="hljs-string">&apos;    Luka Harrell      =  0  =     1  1  1  =  0  0  1  1  0  1  7.5  47.25\n&apos;</span> +
<span class="hljs-string">&apos;    Pierre Medina     0  =  1  0     =  1  =  1  1  =  0  1  =  7.5  47.25\n&apos;</span> +
<span class="hljs-string">&apos; 6  Carlos Koch       1  0  =  0  =     =  =  1  1  =  0  =  1  7.0  43.50\n&apos;</span> +
<span class="hljs-string">&apos; 7  Tristan Pitts     =  =  0  0  0  =     1  0  1  =  1  1  1  7.0  40.75\n&apos;</span> +
<span class="hljs-string">&apos;    Luke Schaefer     0  =  0  =  =  =  0     1  =  =  1  1  1  7.0  40.75\n&apos;</span> +
<span class="hljs-string">&apos; 9  Tanner Dunn       0  0  0  1  0  0  1  0     1  1  =  1  1  6.5  37.25\n&apos;</span> +
<span class="hljs-string">&apos;10  Haylee Bryan      1  1  =  1  0  0  0  =  0     1  0  0  1  6.0  39.25\n&apos;</span> +
<span class="hljs-string">&apos;11  Dylan Turner      0  1  1  0  =  =  =  =  0  0     1  =  =  6.0  38.75\n&apos;</span> +
<span class="hljs-string">&apos;12  Adyson Griffith   0  0  0  0  1  1  0  0  =  1  0     1  1  5.5  31.75\n&apos;</span> +
<span class="hljs-string">&apos;13  Dwayne Shaw       0  0  1  1  0  =  0  0  0  1  =  0     1  5.0  30.50\n&apos;</span> +
<span class="hljs-string">&apos;14  Kadin Rice        1  1  0  0  =  0  0  0  0  0  =  0  0     3.0  22.25&apos;</span>

crosstable([
    <span class="hljs-string">&apos;Mikaela Orozco&apos;</span>, <span class="hljs-string">&apos;Mekhi Mayer&apos;</span>, <span class="hljs-string">&apos;Marcus Galvan&apos;</span>, <span class="hljs-string">&apos;Leroy Wilkins&apos;</span>, <span class="hljs-string">&apos;Gregory Bates&apos;</span>, <span class="hljs-string">&apos;Jayda Lynn&apos;</span>, <span class="hljs-string">&apos;Makena Galloway&apos;</span>,
    <span class="hljs-string">&apos;Adriel Brock&apos;</span>, <span class="hljs-string">&apos;Morgan Gillespie&apos;</span>, <span class="hljs-string">&apos;Darwin Mack&apos;</span>, <span class="hljs-string">&apos;Clayton Terrell&apos;</span>, <span class="hljs-string">&apos;Bo Schmidt&apos;</span>, <span class="hljs-string">&apos;Xzavier Clements&apos;</span>, <span class="hljs-string">&apos;Rex Cummings&apos;</span>,
    <span class="hljs-string">&apos;Aldo Jackson&apos;</span>, <span class="hljs-string">&apos;Justus Sloan&apos;</span>, <span class="hljs-string">&apos;Rudy Herrera&apos;</span>, <span class="hljs-string">&apos;Leonard Ponce&apos;</span>, <span class="hljs-string">&apos;Kaden Harding&apos;</span>, <span class="hljs-string">&apos;Anastasia Dodson&apos;</span>], [
    [_, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">0</span>, <span class="hljs-number">1</span>, d, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">0</span>, <span class="hljs-number">1</span>, <span class="hljs-number">0</span>, d, <span class="hljs-number">0</span>, d, d, <span class="hljs-number">0</span>, d, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, d],
    [<span class="hljs-number">0</span>, _, <span class="hljs-number">0</span>, d, d, <span class="hljs-number">0</span>, d, <span class="hljs-number">1</span>, d, d, <span class="hljs-number">0</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, d, d, d, d, <span class="hljs-number">1</span>, d, <span class="hljs-number">0</span>],
    [<span class="hljs-number">0</span>, <span class="hljs-number">1</span>, _, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, d, <span class="hljs-number">1</span>, d, <span class="hljs-number">0</span>, d, <span class="hljs-number">0</span>, d, <span class="hljs-number">0</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>],
    [<span class="hljs-number">1</span>, d, <span class="hljs-number">1</span>, _, d, <span class="hljs-number">0</span>, d, <span class="hljs-number">0</span>, d, <span class="hljs-number">0</span>, <span class="hljs-number">1</span>, d, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">1</span>, <span class="hljs-number">0</span>, d, <span class="hljs-number">1</span>, d, <span class="hljs-number">1</span>],
    [<span class="hljs-number">0</span>, d, <span class="hljs-number">1</span>, d, _, <span class="hljs-number">1</span>, d, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, d, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, d, <span class="hljs-number">0</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, d, d],
    [d, <span class="hljs-number">1</span>, d, <span class="hljs-number">1</span>, <span class="hljs-number">0</span>, _, <span class="hljs-number">0</span>, d, d, <span class="hljs-number">1</span>, d, <span class="hljs-number">0</span>, d, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">1</span>, d, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>],
    [<span class="hljs-number">0</span>, d, <span class="hljs-number">0</span>, d, d, <span class="hljs-number">1</span>, _, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">0</span>, d, <span class="hljs-number">0</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, d, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">0</span>],
    [<span class="hljs-number">0</span>, <span class="hljs-number">0</span>, d, <span class="hljs-number">1</span>, <span class="hljs-number">0</span>, d, <span class="hljs-number">0</span>, _, <span class="hljs-number">1</span>, d, <span class="hljs-number">0</span>, d, <span class="hljs-number">1</span>, d, d, <span class="hljs-number">1</span>, d, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>],
    [<span class="hljs-number">1</span>, d, <span class="hljs-number">1</span>, d, <span class="hljs-number">0</span>, d, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, _, <span class="hljs-number">0</span>, <span class="hljs-number">1</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, d, d, <span class="hljs-number">1</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>],
    [<span class="hljs-number">0</span>, d, d, <span class="hljs-number">1</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, d, <span class="hljs-number">1</span>, _, d, d, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, d, <span class="hljs-number">0</span>, <span class="hljs-number">1</span>, d, <span class="hljs-number">1</span>, d],
    [<span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">0</span>, d, d, <span class="hljs-number">0</span>, <span class="hljs-number">1</span>, <span class="hljs-number">0</span>, d, _, <span class="hljs-number">1</span>, d, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, d, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, d, d],
    [d, <span class="hljs-number">0</span>, d, d, <span class="hljs-number">0</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, d, <span class="hljs-number">1</span>, d, <span class="hljs-number">0</span>, _, <span class="hljs-number">1</span>, d, d, <span class="hljs-number">0</span>, <span class="hljs-number">1</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>],
    [<span class="hljs-number">1</span>, <span class="hljs-number">0</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">0</span>, d, d, <span class="hljs-number">0</span>, <span class="hljs-number">1</span>, <span class="hljs-number">0</span>, d, <span class="hljs-number">0</span>, _, <span class="hljs-number">1</span>, d, d, <span class="hljs-number">0</span>, <span class="hljs-number">1</span>, d, d],
    [d, d, <span class="hljs-number">0</span>, <span class="hljs-number">1</span>, d, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, d, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">1</span>, d, <span class="hljs-number">0</span>, _, d, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>],
    [d, d, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">0</span>, d, <span class="hljs-number">0</span>, d, <span class="hljs-number">1</span>, d, d, d, _, d, <span class="hljs-number">1</span>, <span class="hljs-number">0</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>],
    [<span class="hljs-number">1</span>, d, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">0</span>, <span class="hljs-number">1</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, d, <span class="hljs-number">1</span>, d, <span class="hljs-number">1</span>, d, <span class="hljs-number">1</span>, d, _, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">0</span>, d],
    [d, d, <span class="hljs-number">1</span>, d, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, d, d, d, <span class="hljs-number">0</span>, <span class="hljs-number">1</span>, <span class="hljs-number">0</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, _, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">1</span>],
    [<span class="hljs-number">1</span>, <span class="hljs-number">0</span>, <span class="hljs-number">1</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, d, <span class="hljs-number">0</span>, <span class="hljs-number">1</span>, <span class="hljs-number">0</span>, d, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">0</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">0</span>, <span class="hljs-number">1</span>, _, d, d],
    [<span class="hljs-number">1</span>, d, <span class="hljs-number">0</span>, d, d, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">0</span>, d, <span class="hljs-number">1</span>, d, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, d, _, <span class="hljs-number">0</span>],
    [d, <span class="hljs-number">1</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, d, <span class="hljs-number">0</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, d, d, <span class="hljs-number">1</span>, d, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, d, <span class="hljs-number">0</span>, d, <span class="hljs-number">1</span>, _]])

<span class="hljs-comment">// returns</span>
<span class="hljs-string">&apos; #  Player             1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20  Pts     SB\n&apos;</span> +
<span class="hljs-string">&apos;===============================================================================================\n&apos;</span> +
<span class="hljs-string">&apos; 1  Gregory Bates         1  =  0  1  1  =  1  =  1  0  =  =  =  1  1  =  1  1  1  13.5  124.50\n&apos;</span> +
<span class="hljs-string">&apos; 2  Justus Sloan       0     0  =  1  1  =  =  1  1  1  1  =  0  =  1  =  1  1  0  12.0  109.00\n&apos;</span> +
<span class="hljs-string">&apos; 3  Makena Galloway    =  1     1  1  1  0  =  =  1  0  0  =  1  1  0  1  0  =  1  11.5  109.75\n&apos;</span> +
<span class="hljs-string">&apos; 4  Aldo Jackson       1  =  0     =  0  1  =  0  1  =  =  =  1  0  =  1  0  1  =  10.0   95.25\n&apos;</span> +
<span class="hljs-string">&apos; 5  Darwin Mack        0  0  0  =     =  =  1  1  0  0  1  =  1  1  =  =  =  1  =  10.0   89.00\n&apos;</span> +
<span class="hljs-string">&apos; 6  Leonard Ponce      0  0  0  1  =     =  0  0  =  1  1  0  =  0  1  1  1  1  1  10.0   87.50\n&apos;</span> +
<span class="hljs-string">&apos; 7  Anastasia Dodson   =  =  1  0  =  =     =  0  0  =  0  1  1  1  1  =  0  0  1   9.5   90.25\n&apos;</span> +
<span class="hljs-string">&apos; 8  Xzavier Clements   0  =  =  =  0  1  =     1  =  1  1  0  =  1  0  =  1  0  0   9.5   89.00\n&apos;</span> +
<span class="hljs-string">&apos;    Leroy Wilkins      =  0  =  1  0  1  1  0     0  1  0  =  =  =  =  1  1  =  0   9.5   89.00\n&apos;</span> +
<span class="hljs-string">&apos;10  Jayda Lynn         0  0  0  0  1  =  1  =  1     =  0  1  1  =  0  =  =  1  =   9.5   85.50\n&apos;</span> +
<span class="hljs-string">&apos;11  Mikaela Orozco     1  0  1  =  1  0  =  0  0  =     =  1  0  0  =  0  1  =  1   9.0   86.75\n&apos;</span> +
<span class="hljs-string">&apos;12  Rex Cummings       =  0  1  =  0  0  1  0  1  1  =     =  1  0  =  1  0  0  =   9.0   86.25\n&apos;</span> +
<span class="hljs-string">&apos;13  Mekhi Mayer        =  =  =  =  =  1  0  1  =  0  0  =     =  =  1  0  0  =  1   9.0   86.00\n&apos;</span> +
<span class="hljs-string">&apos;14  Kaden Harding      =  1  0  0  0  =  0  =  =  0  1  0  =     1  1  =  0  1  1   9.0   83.50\n&apos;</span> +
<span class="hljs-string">&apos;15  Morgan Gillespie   0  =  0  1  0  1  0  0  =  =  1  1  =  0     0  1  1  =  0   8.5   78.50\n&apos;</span> +
<span class="hljs-string">&apos;    Bo Schmidt         0  0  1  =  =  0  0  1  =  1  =  =  0  0  1     0  =  1  =   8.5   78.50\n&apos;</span> +
<span class="hljs-string">&apos;    Clayton Terrell    =  =  0  0  =  0  =  =  0  =  1  0  1  =  0  1     1  0  1   8.5   78.50\n&apos;</span> +
<span class="hljs-string">&apos;18  Marcus Galvan      0  0  1  1  =  0  1  0  0  =  0  1  1  1  0  =  0     0  =   8.0   75.75\n&apos;</span> +
<span class="hljs-string">&apos;19  Rudy Herrera       0  0  =  0  0  0  1  1  =  0  =  1  =  0  =  0  1  1     =   8.0   72.00\n&apos;</span> +
<span class="hljs-string">&apos;20  Adriel Brock       0  1  0  =  =  0  0  1  1  =  0  =  0  0  1  =  0  =  =      7.5   71.00&apos;</span></code></pre>

### Solution