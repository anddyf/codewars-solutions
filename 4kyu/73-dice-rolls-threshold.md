### Problem:
<p>Stacey is a big <a href="https://en.wikipedia.org/wiki/Dungeons_%26_Dragons" target="_blank">AD&amp;D</a> games nerd. Moreover, she&apos;s a munchkin. Not a <a href="https://en.wikipedia.org/wiki/Munchkin_cat" target="_blank">cat breed</a>, but a person who likes to get maximum efficiency of their character.</p>
<p>As you might know, many aspects of such games are modelled by rolling dice and checking it against a threshold value determined by various aspects.
Stacey wants to always control the situation and know whether she can beat the foe with certain special ability or not. Unfortunately she doesn&apos;t know probabilty theory well enough. Help Stacey by providing a calculating utility for her.</p>
<p>P.S.: Stacey says that she has tried to implement a calculator by Monte-Carlo modelling: calling rand() in a loop, but she hasn&apos;t been satisfied with precision of this method.</p>
<h3 id="examples">Examples</h3>
<p><code>P(1d6 &gt;= 4)</code> means the chance of getting 4 points or higher on a regular cubic die. Obviously the chance is <code>3/6</code> cause there&apos;re 6 possibilities in total (1, 2, 3, 4, 5, 6) and only three of them are &gt;= 4: (4, 5, 6)</p>
<p><code>P(2d6 &gt;= 3)</code> gives us <code>35/36</code>, cause the only possibility to get &lt; 3 is rolling exactly 1+1.
Exactly 2 as sum of two dice appears only if both have 1. While total amount of different outcomes is 6*6 = 36. Hence resulting probability is 1-1/36, which is 35/36</p>
<h3 id="your-task">Your task</h3>
<p>is to write a function, which will calculate the probability of that a die with <code>N</code> sides rolled <code>M</code> times (<code>MdN</code> in AD&amp;D notation) will get at least <code>T</code> points. We don&apos;t add modifiers cause they are already incorporated into the threshold.</p>
<p>Input arguments will be valid integers with the following limits:</p>
<ul>
<li><code>rolls</code> 1..20</li>
<li><code>sides</code> 2..100</li>
<li><code>threshold</code> 1..2000</li>
</ul>

### Solution