### Problem:
<h1 id="ten-pin-bowling">Ten-Pin Bowling</h1>
<p>In the game of ten-pin bowling, a player rolls a bowling ball down a lane to knock over pins. There are ten pins set at the end of the bowling lane. Each player has 10 frames to roll a bowling ball down a lane and knock over as many pins as possible. The first nine frames are ended after two rolls or when the player knocks down all the pins. The last frame a player will receive an extra roll every time they knock down all ten pins; up to a maximum of three total rolls. </p>
<h2 id="the-challenge">The Challenge</h2>
<p>In this challenge you will be given a string representing a player&apos;s ten frames. It will look something like this: <code>&apos;X X 9/ 80 X X 90 8/ 7/ 44&apos;</code> (in Java: <code>&quot;X X 9/ 80 X X 90 8/ 7/ 44&quot;</code>), where each frame is space-delimited, <code>&apos;X&apos;</code> represents strikes, and <code>&apos;/&apos;</code> represents spares. Your goal is take in this string of frames into a function called <code>bowlingScore</code> and return the players total score.</p>
<h2 id="scoring">Scoring</h2>
<p>The scoring for ten-pin bowling can be difficult to understand, and if you&apos;re like most people, easily forgotten if you don&apos;t play often. Here is a quick breakdown:</p>
<h3 id="frames">Frames</h3>
<p>In Ten-Pin Bowling there are ten frames per game. Frames are the players turn to bowl, which can be multiple rolls. The first 9 frames you get 2 rolls maximum to try to get all 10 pins down. <strong>On the 10th or last frame a player will receive an extra roll each time they get all ten pins down to a maximum of three total rolls. Also on the last frame bonuses are not awarded for strikes and spares moving forward.</strong></p>
<p>In this challenge, three frames might be represented like this: <code>54 72 44</code>. In this case, the player has had three frames. On their first frame they scored 9 points (5 + 4), on their second frame they scored 9 points (7 + 2) and on their third frame they scored 8 points (4 + 4). This is a very simple example of bowling scoring. It gets more complicated when we introduce strikes and spares.</p>
<h3 id="strikes">Strikes</h3>
<p>Represented in this challenge as <code>&apos;X&apos;</code></p>
<p>A strike is scored when a player knocks all ten pins down in one roll. In the first 9 frames this will conclude the players turn and it will be scored as 10 points plus the points received from the next two rolls. So if a player were to have two frames <code>X 54</code>, the total score of those two frames would be 28. The first frame would be worth 19 (10 + 5 + 4) and the second frame would be worth 9 (5 + 4).</p>
<p>A perfect game in bowling is 12 strikes in a row and would be represented like this <code>&apos;X X X X X X X X X XXX&apos;</code> (in Java: <code>&quot;X X X X X X X X X XXX&quot;</code>). This adds up to a total score of 300.</p>
<h3 id="spares">Spares</h3>
<p>Represented in this challenge as <code>&apos;/&apos;</code></p>
<p>A spare is scored when a player knocks down all ten pins in two rolls. In the first 9 frames this will be scored as 10 points plus the next roll. So if a player were to have two frames <code>9/ 54</code>, the total score of the two frames would be 24. The first frame would be worth 15 (10 + 5) and the second frame would be worth 9 (5 + 4).</p>
<p>For a more detailed explanation see Wikipedia: </p>
<p><a href="http://en.wikipedia.org/wiki/Ten-pin_bowling#Scoring" target="_blank">http://en.wikipedia.org/wiki/Ten-pin_bowling#Scoring</a></p>

### Solution