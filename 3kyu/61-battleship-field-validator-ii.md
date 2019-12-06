### Problem:
<p>Description:</p>
<p>Write a method that takes a field for well-known board game &quot;Battleship&quot; as an argument and returns true if it has a valid disposition of ships, false otherwise. Argument is guaranteed to be 10*10 two-dimension array. Elements in the array are numbers, 0 if the cell is free and 1 if occupied by ship.</p>
<p>Battleship (also Battleships or Sea Battle) is a guessing game for two players. Each player has a 10x10 grid containing several &quot;ships&quot; and objective is to destroy enemy&apos;s forces by targetting individual cells on his field. The ship occupies one or more cells in the grid. Size and number of ships may differ from version to version. In this kata we will use Soviet/Russian version of the game.</p>
<p>Before the game begins, players set up the board and place the ships accordingly to the following rules:</p>
<ul>
<li>There must be single battleship (size of 4 cells), 2 cruisers (size 3), 3 destroyers (size 2) and 4 submarines (size 1). Any additional ships are not allowed, as well as missing ships.</li>
<li>Each ship must be a straight line, except for submarines, which are just single cell.</li>
<li>The ship cannot overlap, but can be contact with any other ship.</li>
</ul>
<p>The description likes <a href="http://www.codewars.com/kata/battleship-field-validator" target="_blank">Battleship field validator Kata</a>, the only difference is the rule 3.</p>
<p>This is all you need to solve this kata. If you&apos;re interested in more information about the game, visit <a href="https://en.wikipedia.org/wiki/Battleship_(game)" target="_blank">this link</a>.</p>

### Solution