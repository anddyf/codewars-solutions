### Problem:
<p><b>You are to write a function to transpose a <a href="https://en.wikipedia.org/wiki/Tablature#Guitar_tablature" target="_blank">guitar tab</a> up or down a number of semitones.</b> The <i>amount</i> to transpose is a number, positive or negative. The <i>tab</i> is given as an array, with six elements for each guitar string (fittingly passed as strings). Output your tab in a similar form.</p>
<p>Guitar tablature (or &apos;tab&apos;) is an alternative to sheet music, where notes are replaced by fret numbers and the five lines of the staff are replaced by six lines to represent each of the guitar&apos;s strings. It is still read from left to right like sheet music, and notes written directly above each other are played at the same time.</p>
<p>For example, Led Zeppelin&apos;s <i>Stairway to Heaven</i> begins:</p>
<pre><code>e|-------5-7-----7-|-8-----8-2-----2-|-0---------0-----|-----------------|
B|-----5-----5-----|---5-------3-----|---1---1-----1---|-0-1-1-----------|
G|---5---------5---|-----5-------2---|-----2---------2-|-0-2-2-----------|
D|-7-------6-------|-5-------4-------|-3---------------|-----------------|
A|-----------------|-----------------|-----------------|-2-0-0---0--/8-7-|
E|-----------------|-----------------|-----------------|-----------------|</code></pre><p>Transposed up two semitones, it would look like this:</p>
<pre><code>e|-------7-9-----9-|-10-----10-4-----4-|-2---------2-----|------------------|
B|-----7-----7-----|----7--------5-----|---3---3-----3---|-2-3-3------------|
G|---7---------7---|------7--------4---|-----4---------4-|-2-4-4------------|
D|-9-------8-------|-7---------6-------|-5---------------|------------------|
A|-----------------|-------------------|-----------------|-4-2-2---2--/10-9-|
E|-----------------|-------------------|-----------------|------------------|</code></pre><p>Note how when the 8th fret note on the top string in bar 2 gets transposed to the 10th fret, extra &apos;-&apos; are added on the other strings below so as to retain the single &apos;-&apos; that originally separated that beat (i.e. column) from the following note &#x2013; fret 7 on the B string.</p>
<p>Each beat must retain at least one &apos;-&apos; separator before the next, to keep the tab legible. The inputted test tabs all obey this convention.</p>
<p>Electric guitars usually have 22 frets, with the 0th fret being an open string. If your fret numbers transpose to either negative values or values over 22, you should return &apos;<b>Out of frets!</b>&apos; (and probably detune your guitar).</p>
<p>Tests include some randomly generated guitar tabs, which come with no guarantee of musical quality and/or playability...!</p>

### Solution