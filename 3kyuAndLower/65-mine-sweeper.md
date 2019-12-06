### Problem:
<h1 id="description">Description:</h1>
<p><img src="https://upload.wikimedia.org/wikipedia/en/3/31/Minesweeper_XP.png" align="right">Have you ever played <a href="https://en.wikipedia.org/wiki/Microsoft_Minesweeper" target="_blank">Minesweeper</a>? It&apos;s a WINDOWS own game, It mainly tests the player&apos;s ability to think logically.</p>
<p> Here is some rules of game, maybe helpful to someone who haven&apos;t played Minesweeper:</p>
<p> <code>The goal of the game is to uncover all the squares that do not contain mines without being &quot;blown up&quot; by clicking on a square with a mine underneath. The location of the mines is discovered by a process of logic. Clicking on the game board will reveal what is hidden underneath the chosen square or squares (a large number of blank squares may be revealed in one go if they are adjacent to each other). Some squares are blank but some contain numbers (1 to 8), each number being the number of mines adjacent to the uncovered square. To help avoid hitting a mine, the location of a suspected mine can be marked by flagging it with the right mouse button. The game is won once all blank squares have been uncovered without hitting a mine, any remaining mines not identified by flags being automatically flagged by the computer. However, in the event that a game is lost and the player mistakenly flags a safe square, that square will either appear with a red X covering the mine (denoting it as safe), or just a red X (also denoting it as safe).</code></p>
<h1 id="task">Task</h1>
<p>In this kata, I&apos;ll give you a string <code>map</code> as a game map, and a number <code>n</code> means the total number of mines. like this:</p>
<pre><code>map =
? ? ? ? ? ?
? ? ? ? ? ?
? ? ? 0 ? ?
? ? ? ? ? ?
? ? ? ? ? ?
0 0 0 ? ? ?

n = 6</code></pre><p>Yes, you always get a matrix with some question marks, except for some 0(because I think you need a place to start your logical reasoning.). </p>
<p>Digit 0 means that no mine around here, so you can safely <code>open</code> the grids around 0. How to open the grid? I&apos;ve preload a method <code>open</code>, usage is <code>open(row,column)</code> (for Java users: <code>Game.open(int row, int column)</code>). It will return a number that is how many mines around this grid. If there is an error in your logical reasoning, when you use the open method to open a grid, but there is a mine hidden in this grid, then the test will fail. Please note, method <code>open</code> only return a number, but did not modify the <code>map</code>, you should modify the <code>map</code> by yourself.</p>
<p>You opening more and more grids.. Until all safe grids are opened and all mines grids are marked by <code>&apos;x&apos;</code>. then return the result like this:</p>
<pre><code>1 x 1 1 x 1
2 2 2 1 2 2
2 x 2 0 1 x
2 x 2 1 2 2
1 1 1 1 x 1
0 0 0 1 1 1</code></pre><p> If the game can not got a valid result, should return <code>&quot;?&quot;</code>. See following:</p>
<pre><code> map =
 0 ? ?
 0 ? ?
 n = 1

 First you open two middle grids(get them using method 
 `open(0,1)` and `open(1,1)`), then got:

 map =
 0 1 ?
 0 1 ?

 Now, there is only one mine left, but there are two `?` left.
 The mine can be hidden in any of them. 

 So you should return &quot;?&quot; as the result.
</code></pre>
### Solution