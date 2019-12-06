### Problem:
<p>There are several difficulty of sudoku games, we can estimate the difficulty of a sudoku game based on how many cells are given of the 81 cells of the game.</p>
<ul>
<li>Easy sudoku generally have over 32 givens</li>
<li>Medium sudoku have around 30&#x2013;32 givens</li>
<li>Hard sudoku have around 28&#x2013;30 givens</li>
<li>Very Hard sudoku have less than 28 givens</li>
</ul>
<p>Note: The minimum of givens required to create a unique (with no multiple solutions) sudoku game is 17.</p>
<p>A hard sudoku game means that at start no cell will have a single candidates and thus require guessing and trial and error. A very hard will have several layers of multiple candidates for any empty cell.</p>
<h1 id="task">Task:</h1>
<p>Write a function that solves sudoku puzzles of any difficulty.
The function will take a sudoku grid and it should return a 9x9 array with the proper answer for the puzzle.</p>
<p>Or it should raise an error in cases of: invalid grid (not 9x9, cell with values not in the range 1~9); multiple solutions for the same puzzle or the puzzle is unsolvable</p>
<p><strong><em>Python users:</em></strong> python 2 has been disabled.</p>

### Solution