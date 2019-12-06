### Problem:
<h2 id="screen-locking-patterns">Screen Locking Patterns</h2>
<p>You might already be familiar with many smartphones that allow you to use a geometric pattern as a security measure. To unlock the device, you need to connect a sequence of dots/points in a grid by swiping your finger without lifting it as you trace the pattern through the screen.
The image below has an example pattern of 7 dots/points: [A, B, I, E, D, G, C].</p>
<p><img src="https://i.imgur.com/zmPNYdv.png" alt="lock_example.png"></p>
<p>For this kata, your job is to implement the function <code>countPatternsFrom(firstPoint, length)</code>; where <code>firstPoint</code> is a single-character string corresponding to the point in the grid (i.e.: <code>&apos;A&apos;</code>) and <code>length</code> is an integer indicating the length of the pattern. The function must return <strong>the number of combinations starting from the given point, that have the given length</strong>.</p>
<p>Take into account that dots can only be connected with straight directed lines either:</p>
<ul>
<li><strong>horizontally</strong> (like A to B) </li>
<li><strong>vertically</strong> (like D to G), </li>
<li><strong>diagonally</strong> (like I and E, <em>as well as</em> B and I), or </li>
<li><strong>passing over a point that has already been &apos;used&apos;</strong> like (G and C passing over E). </li>
</ul>
<p>The sample tests have some examples of the number of combinations for some cases to help you check your code.</p>
<p><strong>Optional Extra:</strong></p>
<p>Out of curiosity, in case you&apos;re wondering, for the Android lock screen, valid patterns must have between 4 and 9 dots, and there are 389112 possible valid combinations in total.</p>
<p><strong>Haskell Note:</strong>
A data type <code>Vertex</code> is provided in place of the single-character strings. See the solution setup code for more details.</p>

### Solution