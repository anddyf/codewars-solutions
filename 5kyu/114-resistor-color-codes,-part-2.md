### Problem:
<h2 id="overview">Overview</h2>
<p><a href="https://en.wikipedia.org/wiki/Resistor" target="_blank">Resistors</a> are electrical components marked with colorful stripes/bands to indicate both their resistance value in ohms and how tight a tolerance that value has. If you did my <a href="https://www.codewars.com/kata/57cf3dad05c186ba22000348" target="_blank">Resistor Color Codes</a> kata, you wrote a function which took a string containing a resistor&apos;s band colors, and returned a string identifying the resistor&apos;s ohms and tolerance values.</p>
<p>Well, now you need that in reverse: The previous owner of your &quot;Beyond-Ultimate <a href="https://en.wikipedia.org/wiki/Raspberry_Pi" target="_blank">Raspberry Pi</a> Starter Kit&quot; (as featured in my <a href="https://www.codewars.com/kata/58485a43d750d23bad0000e6" target="_blank">Fizz Buzz Cuckoo Clock</a> kata) had emptied all the tiny labeled zip-lock bags of components into the box, so that for each resistor you need for a project, instead of looking for text on a label, you need to find one with the sequence of band colors that matches the ohms value you need.</p>
<h2 id="the-resistor-color-codes">The resistor color codes</h2>
<p>You can see <a href="https://en.wikipedia.org/wiki/Electronic_color_code#Resistor_color-coding" target="_blank">this Wikipedia page</a> for a colorful chart, but the basic resistor color codes are:</p>
<p>0: black, 1: brown, 2: red, 3: orange, 4: yellow, 5: green, 6: blue, 7: violet, 8: gray, 9: white</p>
<p>All resistors have at least three bands, with the first and second bands indicating the first two digits of the ohms value, and the third indicating the power of ten to multiply them by, for example a resistor with a value of 47 ohms, which equals 47 * 10^0 ohms, would have the three bands &quot;yellow violet black&quot;.</p>
<p>Most resistors also have a fourth band indicating tolerance -- in an electronics kit like yours, the tolerance will always be 5%, which is indicated by a gold band. So in your kit, the 47-ohm resistor in the above paragraph would have the four bands &quot;yellow violet black gold&quot;.</p>
<h2 id="your-mission">Your mission</h2>
<p>Your function will receive a string containing the ohms value you need, followed by a space and the word &quot;ohms&quot; (to avoid Codewars unicode headaches I&apos;m just using the word instead of the ohms unicode symbol). The way an ohms value is formatted depends on the magnitude of the value:</p>
<ul>
<li><p>For resistors less than 1000 ohms, the ohms value is just formatted as the plain number. For example, with the 47-ohm resistor above, your function would receive the string <code>&quot;47 ohms&quot;</code>, and return the string `&quot;yellow violet black gold&quot;.</p>
</li>
<li><p>For resistors greater than or equal to 1000 ohms, but less than 1000000 ohms, the ohms value is divided by 1000, and has a lower-case &quot;k&quot; after it. For example, if your function received the string <code>&quot;4.7k ohms&quot;</code>, it would need to return the string <code>&quot;yellow violet red gold&quot;</code>.</p>
</li>
<li><p>For resistors of 1000000 ohms or greater, the ohms value is divided by 1000000, and has an upper-case &quot;M&quot; after it. For example, if your function received the string <code>&quot;1M ohms&quot;</code>, it would need to return the string <code>&quot;brown black green gold&quot;</code>. </p>
</li>
</ul>
<p>Test case resistor values will all be between 10 ohms and 990M ohms.</p>
<h2 id="more-examples-featuring-some-common-resistor-values-from-your-kit">More examples, featuring some common resistor values from your kit</h2>
<pre><code>&quot;10 ohms&quot;        &quot;brown black black gold&quot;
&quot;100 ohms&quot;       &quot;brown black brown gold&quot;
&quot;220 ohms&quot;       &quot;red red brown gold&quot;
&quot;330 ohms&quot;       &quot;orange orange brown gold&quot;
&quot;470 ohms&quot;       &quot;yellow violet brown gold&quot;
&quot;680 ohms&quot;       &quot;blue gray brown gold&quot;
&quot;1k ohms&quot;        &quot;brown black red gold&quot;
&quot;10k ohms&quot;       &quot;brown black orange gold&quot;
&quot;22k ohms&quot;       &quot;red red orange gold&quot;
&quot;47k ohms&quot;       &quot;yellow violet orange gold&quot;
&quot;100k ohms&quot;      &quot;brown black yellow gold&quot;
&quot;330k ohms&quot;      &quot;orange orange yellow gold&quot;
&quot;2M ohms&quot;        &quot;red black green gold&quot;</code></pre><p>Have fun!</p>

### Solution