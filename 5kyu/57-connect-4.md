### Problem:
<h1 id="introduction">Introduction</h1>
<table width="100%" border="0" cellspacing="0" cellpadding="0">
  <tbody><tr>
    <td width="10" bgcolor="#181818">&#xA0;
    </td>
    <td bgcolor="#181818">
We all love to play games especially as children. I have fond memories playing Connect 4 with my brother so decided to create this Kata based on the classic game. Connect 4 is known as several names such as &#x201C;Four in a Row&#x201D; and &#x201C;Captain&#x2019;s Mistress&quot; but was made popular by Hasbro MB Games
    </td>
  </tr>
</tbody></table>

<table width="100%" border="0" cellspacing="0" cellpadding="0">
  <tbody><tr>
    <td>&#xA0;</td>
  </tr>
</tbody></table>

<center><img src="https://raw.githubusercontent.com/adrianeyre/codewars/master/Ruby/Authored/connect4.jpg" alt="Connect 4"></center>

<h1 id="task">Task</h1>
<p></p><table width="100%" border="0" cellspacing="0" cellpadding="0">
  <tbody><tr>
    <td width="10" bgcolor="#181818">&#xA0;
    </td>
    <td bgcolor="#181818">
The game consists of a grid (7 columns and 6 rows) and two players that take turns to drop their discs. The pieces fall straight down, occupying the next available space within the column. The objective of the game is to be the first to form a horizontal, vertical, or diagonal line of four of one&apos;s own discs.

<p>Your task is to create a Class called <font color="#A1A85E">Connect4</font> that has a method called <font color="#A1A85E">play</font> which takes one argument for the column where the player is going to place their disc.
    </p></td>
  </tr>
</tbody></table>

<table width="100%" border="0" cellspacing="0" cellpadding="0">
  <tbody><tr>
    <td>&#xA0;</td>
  </tr>
</tbody></table>

<h1 id="rules">Rules</h1>
<table width="100%" border="0" cellspacing="0" cellpadding="0">
  <tbody><tr>
    <td width="10" bgcolor="#181818">&#xA0;
    </td>
    <td bgcolor="#181818">
        If a player successfully has 4 discs horizontally, vertically or diagonally then you should return &quot;<font color="#A1A85E">Player n wins!</font>&#x201D; where n is the current player either 1 or 2.<br><br>
        If a player attempts to place a disc in a column that is full then you should return &#x201D;<font color="#A1A85E">Column full!</font>&#x201D; and the next move must be taken by the same player.<br><br>
        If the game has been won by a player, any following moves should return &#x201D;<font color="#A1A85E">Game has finished!</font>&#x201D;.<br><br>
        Any other move should return &#x201D;<font color="#A1A85E">Player n has a turn</font>&#x201D; where n is the current player either 1 or 2.<br><br>
        Player 1 starts the game every time and alternates with player 2.<br><br>
        The columns are numbered <font color="#A1A85E">0-6</font> left to right.<br>
    </td>
  </tr>
</tbody></table>

<table width="100%" border="0" cellspacing="0" cellpadding="0">
  <tbody><tr>
    <td>&#xA0;</td>
  </tr>
</tbody></table>

<p>Good luck and enjoy!</p>
<h1 id="kata-series">Kata Series</h1>
<p>If you enjoyed this, then please try one of my other Katas. Any feedback, translations and grading of beta Katas are greatly appreciated. Thank you.</p>
<table width="100%" border="0" cellpadding="0" cellspacing="0">
  <tbody><tr>
    <td width="600"><table width="600" border="1" cellpadding="0" cellspacing="0">
      <tbody><tr>
        <td width="240"><b>Title</b></td>
        <td width="380"><b>Languages</b></td>
        <td width="66"><b>Rank</b></td>
      </tr>
      <tr>
        <td width="240"><a href="https://www.codewars.com/kata/58663693b359c4a6560001d6" target="_blank">Maze Runner</a></td>
        <td width="380"><a href="https://www.codewars.com/kata/58663693b359c4a6560001d6/ruby" target="_blank"><img src="https://raw.githubusercontent.com/adrianeyre/codewars/master/Ruby/Authored/ruby.png" width="30" height="30" alt="Rank"></a><a href="https://www.codewars.com/kata/58663693b359c4a6560001d6/python" target="_blank"><img src="https://raw.githubusercontent.com/adrianeyre/codewars/master/Ruby/Authored/python.png" width="30" height="30" alt="Rank"></a><a href="https://www.codewars.com/kata/58663693b359c4a6560001d6/javascript" target="_blank"><img src="https://raw.githubusercontent.com/adrianeyre/codewars/master/Ruby/Authored/javascript.png" width="30" height="30" alt="Rank"></a><a href="https://www.codewars.com/kata/58663693b359c4a6560001d6/php" target="_blank"><img src="https://raw.githubusercontent.com/adrianeyre/codewars/master/Ruby/Authored/php.png" width="30" height="30" alt="Rank"></a><a href="https://www.codewars.com/kata/58663693b359c4a6560001d6/typescript" target="_blank"><img src="https://raw.githubusercontent.com/adrianeyre/codewars/master/Ruby/Authored/typescript.png" width="30" height="30" alt="Rank"></a><a href="https://www.codewars.com/kata/58663693b359c4a6560001d6/csharp" target="_blank"><img src="https://raw.githubusercontent.com/adrianeyre/codewars/master/Ruby/Authored/csharp.png" width="30" height="30" alt="Rank"></a><a href="https://www.codewars.com/kata/58663693b359c4a6560001d6/typescript" target="_blank"><img src="https://raw.githubusercontent.com/adrianeyre/codewars/master/Ruby/Authored/haskell.png" width="30" height="30" alt="Rank"></a></td>
        <td width="66"><img src="https://raw.githubusercontent.com/adrianeyre/codewars/master/Ruby/Authored/6KYU.png" width="51" height="26" alt="Rank"></td>
      </tr>
      <tr>
        <td width="240"><a href="https://www.codewars.com/kata/58693bbfd7da144164000d05" target="_blank">Scooby Doo Puzzle</a></td>
        <td width="380"><a href="https://www.codewars.com/kata/58693bbfd7da144164000d05/ruby" target="_blank"><img src="https://raw.githubusercontent.com/adrianeyre/codewars/master/Ruby/Authored/ruby.png" width="30" height="30" alt="Rank"></a><a href="https://www.codewars.com/kata/58693bbfd7da144164000d05/python" target="_blank"><img src="https://raw.githubusercontent.com/adrianeyre/codewars/master/Ruby/Authored/python.png" width="30" height="30" alt="Rank"></a><a href="https://www.codewars.com/kata/58693bbfd7da144164000d05/javascript" target="_blank"><img src="https://raw.githubusercontent.com/adrianeyre/codewars/master/Ruby/Authored/javascript.png" width="30" height="30" alt="Rank"></a></td>
        <td width="66"><img src="https://raw.githubusercontent.com/adrianeyre/codewars/master/Ruby/Authored/6KYU.png" width="51" height="26" alt="Rank"></td>
      </tr>
      <tr>
        <td width="240"><a href="https://www.codewars.com/kata/586a1af1c66d18ad81000134" target="_blank">Driving License</a></td>
        <td width="380"><a href="https://www.codewars.com/kata/586a1af1c66d18ad81000134/ruby" target="_blank"><img src="https://raw.githubusercontent.com/adrianeyre/codewars/master/Ruby/Authored/ruby.png" width="30" height="30" alt="Rank"></a><a href="https://www.codewars.com/kata/586a1af1c66d18ad81000134/python" target="_blank"><img src="https://raw.githubusercontent.com/adrianeyre/codewars/master/Ruby/Authored/python.png" width="30" height="30" alt="Rank"></a><a href="https://www.codewars.com/kata/586a1af1c66d18ad81000134/javascript" target="_blank"><img src="https://raw.githubusercontent.com/adrianeyre/codewars/master/Ruby/Authored/javascript.png" width="30" height="30" alt="Rank"></a><a href="https://www.codewars.com/kata/586a1af1c66d18ad81000134/php" target="_blank"><img src="https://raw.githubusercontent.com/adrianeyre/codewars/master/Ruby/Authored/php.png" width="30" height="30" alt="Rank"></a><a href="https://www.codewars.com/kata/586a1af1c66d18ad81000134/c" target="_blank"><img src="https://raw.githubusercontent.com/adrianeyre/codewars/master/Ruby/Authored/typescript.png" width="30" height="30" alt="Rank"><img src="https://raw.githubusercontent.com/adrianeyre/codewars/master/Ruby/Authored/c.png" width="30" height="30" alt="Rank"><img src="https://raw.githubusercontent.com/adrianeyre/codewars/master/Ruby/Authored/cpp.png" width="30" height="30" alt="Rank"></a><a href="https://www.codewars.com/kata/586a1af1c66d18ad81000134/csharp" target="_blank"><img src="https://raw.githubusercontent.com/adrianeyre/codewars/master/Ruby/Authored/csharp.png" width="30" height="30" alt="Rank"></a><a href="https://www.codewars.com/kata/586a1af1c66d18ad81000134/java" target="_blank"><img src="https://raw.githubusercontent.com/adrianeyre/codewars/master/Ruby/Authored/java.png" width="30" height="30" alt="Rank"></a></td>
        <td width="66"><img src="https://raw.githubusercontent.com/adrianeyre/codewars/master/Ruby/Authored/7KYU.png" width="51" height="26" alt="Rank"></td>
      </tr>
      <tr>
        <td width="240"><a href="https://www.codewars.com/kata/586c0909c1923fdb89002031" target="_blank">Connect 4</a></td>
        <td width="380"><a href="https://www.codewars.com/kata/586c0909c1923fdb89002031/ruby" target="_blank"><img src="https://raw.githubusercontent.com/adrianeyre/codewars/master/Ruby/Authored/ruby.png" width="30" height="30" alt="Rank"></a><a href="https://www.codewars.com/kata/586c0909c1923fdb89002031/python" target="_blank"><img src="https://raw.githubusercontent.com/adrianeyre/codewars/master/Ruby/Authored/python.png" width="30" height="30" alt="Rank"></a><a href="https://www.codewars.com/kata/586c0909c1923fdb89002031/javascript" target="_blank"><img src="https://raw.githubusercontent.com/adrianeyre/codewars/master/Ruby/Authored/javascript.png" width="30" height="30" alt="Rank"></a><a href="https://www.codewars.com/kata/586c0909c1923fdb89002031/php" target="_blank"><img src="https://raw.githubusercontent.com/adrianeyre/codewars/master/Ruby/Authored/php.png" width="30" height="30" alt="Rank"></a><a href="https://www.codewars.com/kata/586c0909c1923fdb89002031/typescript" target="_blank"><img src="https://raw.githubusercontent.com/adrianeyre/codewars/master/Ruby/Authored/typescript.png" width="30" height="30" alt="Rank"></a><a href="https://www.codewars.com/kata/586c0909c1923fdb89002031/csharp" target="_blank"><img src="https://raw.githubusercontent.com/adrianeyre/codewars/master/Ruby/Authored/csharp.png" width="30" height="30" alt="Rank"></a></td>
        <td width="66"><img src="https://raw.githubusercontent.com/adrianeyre/codewars/master/Ruby/Authored/5KYU.png" width="51" height="26" alt="Rank"></td>
      </tr>
      <tr>
        <td width="240"><a href="https://www.codewars.com/kata/586e6d4cb98de09e3800014f" target="_blank">Vending Machine</a></td>
        <td width="380"><a href="https://www.codewars.com/kata/586e6d4cb98de09e3800014f/ruby" target="_blank"><img src="https://raw.githubusercontent.com/adrianeyre/codewars/master/Ruby/Authored/ruby.png" width="30" height="30" alt="Rank"></a><a href="https://www.codewars.com/kata/586e6d4cb98de09e3800014f/python" target="_blank"><img src="https://raw.githubusercontent.com/adrianeyre/codewars/master/Ruby/Authored/python.png" width="30" height="30" alt="Rank"></a><a href="https://www.codewars.com/kata/586e6d4cb98de09e3800014f/javascript" target="_blank"><img src="https://raw.githubusercontent.com/adrianeyre/codewars/master/Ruby/Authored/javascript.png" width="30" height="30" alt="Rank"></a></td>
        <td width="66"><img src="https://raw.githubusercontent.com/adrianeyre/codewars/master/Ruby/Authored/6KYU.png" width="51" height="26" alt="Rank"></td>
      </tr>
      <tr>
        <td width="240"><a href="https://www.codewars.com/kata/587136ba2eefcb92a9000027" target="_blank">Snakes and Ladders</a></td>
        <td width="380"><a href="https://www.codewars.com/kata/587136ba2eefcb92a9000027/ruby" target="_blank"><img src="https://raw.githubusercontent.com/adrianeyre/codewars/master/Ruby/Authored/ruby.png" width="30" height="30" alt="Rank"></a><a href="https://www.codewars.com/kata/587136ba2eefcb92a9000027/python" target="_blank"><img src="https://raw.githubusercontent.com/adrianeyre/codewars/master/Ruby/Authored/python.png" width="30" height="30" alt="Rank"></a><a href="https://www.codewars.com/kata/587136ba2eefcb92a9000027/javascript" target="_blank"><img src="https://raw.githubusercontent.com/adrianeyre/codewars/master/Ruby/Authored/javascript.png" width="30" height="30" alt="Rank"></a><a href="https://www.codewars.com/kata/587136ba2eefcb92a9000027/php" target="_blank"><img src="https://raw.githubusercontent.com/adrianeyre/codewars/master/Ruby/Authored/php.png" width="30" height="30" alt="Rank"></a><a href="https://www.codewars.com/kata/587136ba2eefcb92a9000027/typescript" target="_blank"><img src="https://raw.githubusercontent.com/adrianeyre/codewars/master/Ruby/Authored/typescript.png" width="30" height="30" alt="Rank"></a><a href="https://www.codewars.com/kata/587136ba2eefcb92a9000027/cpp" target="_blank"><img src="https://raw.githubusercontent.com/adrianeyre/codewars/master/Ruby/Authored/cpp.png" width="30" height="30" alt="Rank"></a><a href="https://www.codewars.com/kata/587136ba2eefcb92a9000027/csharp" target="_blank"><img src="https://raw.githubusercontent.com/adrianeyre/codewars/master/Ruby/Authored/csharp.png" width="30" height="30" alt="Rank"></a></td>
        <td width="66"><img src="https://raw.githubusercontent.com/adrianeyre/codewars/master/Ruby/Authored/5KYU.png" width="51" height="26" alt="Rank"></td>
      </tr>
      <tr>
        <td width="240"><a href="https://www.codewars.com/kata/58a848258a6909dd35000003" target="_blank">Mastermind</a></td>
        <td width="380"><a href="https://www.codewars.com/kata/58a848258a6909dd35000003/ruby" target="_blank"><img src="https://raw.githubusercontent.com/adrianeyre/codewars/master/Ruby/Authored/ruby.png" width="30" height="30" alt="Rank"></a><a href="https://www.codewars.com/kata/58a848258a6909dd35000003/python" target="_blank"><img src="https://raw.githubusercontent.com/adrianeyre/codewars/master/Ruby/Authored/python.png" width="30" height="30" alt="Rank"></a><a href="https://www.codewars.com/kata/58a848258a6909dd35000003/javascript" target="_blank"><img src="https://raw.githubusercontent.com/adrianeyre/codewars/master/Ruby/Authored/javascript.png" width="30" height="30" alt="Rank"></a></td>
        <td width="66"><img src="https://raw.githubusercontent.com/adrianeyre/codewars/master/Ruby/Authored/5KYU.png" width="51" height="26" alt="Rank"></td>
      </tr>
      <tr>
        <td width="240"><a href="https://www.codewars.com/kata/58b2c5de4cf8b90723000051" target="_blank">Guess Who?</a></td>
        <td width="380"><a href="https://www.codewars.com/kata/58b2c5de4cf8b90723000051/ruby" target="_blank"><img src="https://raw.githubusercontent.com/adrianeyre/codewars/master/Ruby/Authored/ruby.png" width="30" height="30" alt="Rank"></a><a href="https://www.codewars.com/kata/58b2c5de4cf8b90723000051/python" target="_blank"><img src="https://raw.githubusercontent.com/adrianeyre/codewars/master/Ruby/Authored/python.png" width="30" height="30" alt="Rank"></a><a href="https://www.codewars.com/kata/58b2c5de4cf8b90723000051/javascript" target="_blank"><img src="https://raw.githubusercontent.com/adrianeyre/codewars/master/Ruby/Authored/javascript.png" width="30" height="30" alt="Rank"></a></td>
        <td width="66"><img src="https://raw.githubusercontent.com/adrianeyre/codewars/master/Ruby/Authored/6KYU.png" width="51" height="26" alt="Rank"></td>
      </tr>
      <tr>
        <td width="240"><a href="https://www.codewars.com/kata/58ce88427e6c3f41c2000087" target="_blank">Am I safe to drive?</a></td>
        <td width="380"><a href="https://www.codewars.com/kata/58ce88427e6c3f41c2000087/ruby" target="_blank"><img src="https://raw.githubusercontent.com/adrianeyre/codewars/master/Ruby/Authored/ruby.png" width="30" height="30" alt="Rank"></a><a href="https://www.codewars.com/kata/58ce88427e6c3f41c2000087/python" target="_blank"><img src="https://raw.githubusercontent.com/adrianeyre/codewars/master/Ruby/Authored/python.png" width="30" height="30" alt="Rank"></a><a href="https://www.codewars.com/kata/58ce88427e6c3f41c2000087/javascript" target="_blank"><img src="https://raw.githubusercontent.com/adrianeyre/codewars/master/Ruby/Authored/javascript.png" width="30" height="30" alt="Rank"></a><a href="https://www.codewars.com/kata/58ce88427e6c3f41c2000087/csharp" target="_blank"><img src="https://raw.githubusercontent.com/adrianeyre/codewars/master/Ruby/Authored/csharp.png" width="30" height="30" alt="Rank"></a></td>
        <td width="66"><img src="https://raw.githubusercontent.com/adrianeyre/codewars/master/Ruby/Authored/6KYU.png" width="51" height="26" alt="Rank"></td>
      </tr>
      <tr>
        <td width="240"><a href="https://www.codewars.com/kata/58f5c63f1e26ecda7e000029" target="_blank">Mexican Wave</a></td>
        <td width="380"><a href="https://www.codewars.com/kata/58f5c63f1e26ecda7e000029/ruby" target="_blank"><img src="https://raw.githubusercontent.com/adrianeyre/codewars/master/Ruby/Authored/ruby.png" width="30" height="30" alt="Rank"></a><a href="https://www.codewars.com/kata/58f5c63f1e26ecda7e000029/python" target="_blank"><img src="https://raw.githubusercontent.com/adrianeyre/codewars/master/Ruby/Authored/python.png" width="30" height="30" alt="Rank"></a><a href="https://www.codewars.com/kata/58f5c63f1e26ecda7e000029/javascript" target="_blank"><img src="https://raw.githubusercontent.com/adrianeyre/codewars/master/Ruby/Authored/javascript.png" width="30" height="30" alt="Rank"></a><a href="https://www.codewars.com/kata/58f5c63f1e26ecda7e000029/php" target="_blank"><img src="https://raw.githubusercontent.com/adrianeyre/codewars/master/Ruby/Authored/php.png" width="30" height="30" alt="Rank"></a><a href="https://www.codewars.com/kata/58f5c63f1e26ecda7e000029/typescript" target="_blank"><img src="https://raw.githubusercontent.com/adrianeyre/codewars/master/Ruby/Authored/typescript.png" width="30" height="30" alt="Rank"></a><a href="https://www.codewars.com/kata/58f5c63f1e26ecda7e000029/csharp" target="_blank"><img src="https://raw.githubusercontent.com/adrianeyre/codewars/master/Ruby/Authored/csharp.png" width="30" height="30" alt="Rank"></a><a href="https://www.codewars.com/kata/58f5c63f1e26ecda7e000029/crystal" target="_blank"><img src="https://raw.githubusercontent.com/adrianeyre/codewars/master/Ruby/Authored/crystal.png" width="30" height="30" alt="Rank"></a></td>
        <td width="66"><img src="https://raw.githubusercontent.com/adrianeyre/codewars/master/Ruby/Authored/6KYU.png" width="51" height="26" alt="Rank"></td>
      </tr>
      <tr>
        <td width="240"><a href="https://www.codewars.com/kata/58fdcc51b4f81a0b1e00003e" target="_blank">Pigs in a Pen</a></td>
        <td width="380"><a href="https://www.codewars.com/kata/58fdcc51b4f81a0b1e00003e/ruby" target="_blank"><img src="https://raw.githubusercontent.com/adrianeyre/codewars/master/Ruby/Authored/ruby.png" width="30" height="30" alt="Rank"></a><a href="https://www.codewars.com/kata/58fdcc51b4f81a0b1e00003e/python" target="_blank"><img src="https://raw.githubusercontent.com/adrianeyre/codewars/master/Ruby/Authored/python.png" width="30" height="30" alt="Rank"></a><a href="https://www.codewars.com/kata/58fdcc51b4f81a0b1e00003e/javascript" target="_blank"><img src="https://raw.githubusercontent.com/adrianeyre/codewars/master/Ruby/Authored/javascript.png" width="30" height="30" alt="Rank"></a><a href="https://www.codewars.com/kata/58fdcc51b4f81a0b1e00003e/php" target="_blank"><img src="https://raw.githubusercontent.com/adrianeyre/codewars/master/Ruby/Authored/php.png" width="30" height="30" alt="Rank"></a><a href="https://www.codewars.com/kata/58fdcc51b4f81a0b1e00003e/typescript" target="_blank"><img src="https://raw.githubusercontent.com/adrianeyre/codewars/master/Ruby/Authored/typescript.png" width="30" height="30" alt="Rank"></a><a href="https://www.codewars.com/kata/58fdcc51b4f81a0b1e00003e/csharp" target="_blank"><img src="https://raw.githubusercontent.com/adrianeyre/codewars/master/Ruby/Authored/csharp.png" width="30" height="30" alt="Rank"></a></td>
        <td width="66"><img src="https://raw.githubusercontent.com/adrianeyre/codewars/master/Ruby/Authored/5KYU.png" width="51" height="26" alt="Rank"></td>
      </tr>
      <tr>
        <td width="240"><a href="https://www.codewars.com/kata/590300eb378a9282ba000095" target="_blank">Hungry Hippos</a></td>
        <td width="380"><a href="https://www.codewars.com/kata/590300eb378a9282ba000095/ruby" target="_blank"><img src="https://raw.githubusercontent.com/adrianeyre/codewars/master/Ruby/Authored/ruby.png" width="30" height="30" alt="Rank"></a><a href="https://www.codewars.com/kata/590300eb378a9282ba000095/python" target="_blank"><img src="https://raw.githubusercontent.com/adrianeyre/codewars/master/Ruby/Authored/python.png" width="30" height="30" alt="Rank"></a><a href="https://www.codewars.com/kata/590300eb378a9282ba000095/javascript" target="_blank"><img src="https://raw.githubusercontent.com/adrianeyre/codewars/master/Ruby/Authored/javascript.png" width="30" height="30" alt="Rank"></a><a href="https://www.codewars.com/kata/590300eb378a9282ba000095/php" target="_blank"><img src="https://raw.githubusercontent.com/adrianeyre/codewars/master/Ruby/Authored/php.png" width="30" height="30" alt="Rank"></a><a href="https://www.codewars.com/kata/590300eb378a9282ba000095/typescript" target="_blank"><img src="https://raw.githubusercontent.com/adrianeyre/codewars/master/Ruby/Authored/typescript.png" width="30" height="30" alt="Rank"></a><a href="https://www.codewars.com/kata/590300eb378a9282ba000095/csharp" target="_blank"><img src="https://raw.githubusercontent.com/adrianeyre/codewars/master/Ruby/Authored/csharp.png" width="30" height="30" alt="Rank"></a></td>
        <td width="66"><img src="https://raw.githubusercontent.com/adrianeyre/codewars/master/Ruby/Authored/5KYU.png" width="51" height="26" alt="Rank"></td>
      </tr>
      <tr>
        <td width="240"><a href="https://www.codewars.com/kata/5904be220881cb68be00007d" target="_blank">Plenty of Fish in the Pond</a></td>
        <td width="380"><a href="https://www.codewars.com/kata/5904be220881cb68be00007d/ruby" target="_blank"><img src="https://raw.githubusercontent.com/adrianeyre/codewars/master/Ruby/Authored/ruby.png" width="30" height="30" alt="Rank"></a><a href="https://www.codewars.com/kata/5904be220881cb68be00007d/python" target="_blank"><img src="https://raw.githubusercontent.com/adrianeyre/codewars/master/Ruby/Authored/python.png" width="30" height="30" alt="Rank"></a><a href="https://www.codewars.com/kata/5904be220881cb68be00007d/javascript" target="_blank"><img src="https://raw.githubusercontent.com/adrianeyre/codewars/master/Ruby/Authored/javascript.png" width="30" height="30" alt="Rank"></a><a href="https://www.codewars.com/kata/5904be220881cb68be00007d/php" target="_blank"><img src="https://raw.githubusercontent.com/adrianeyre/codewars/master/Ruby/Authored/php.png" width="30" height="30" alt="Rank"></a><a href="https://www.codewars.com/kata/5904be220881cb68be00007d/typescript" target="_blank"><img src="https://raw.githubusercontent.com/adrianeyre/codewars/master/Ruby/Authored/typescript.png" width="30" height="30" alt="Rank"></a><a href="https://www.codewars.com/kata/5904be220881cb68be00007d/c" target="_blank"><img src="https://raw.githubusercontent.com/adrianeyre/codewars/master/Ruby/Authored/c.png" width="30" height="30" alt="Rank"><img src="https://raw.githubusercontent.com/adrianeyre/codewars/master/Ruby/Authored/cpp.png" width="30" height="30" alt="Rank"></a><a href="https://www.codewars.com/kata/5904be220881cb68be00007d/csharp" target="_blank"><img src="https://raw.githubusercontent.com/adrianeyre/codewars/master/Ruby/Authored/csharp.png" width="30" height="30" alt="Rank"></a></td>
        <td width="66"><img src="https://raw.githubusercontent.com/adrianeyre/codewars/master/Ruby/Authored/6KYU.png" width="51" height="26" alt="Rank"></td>
      </tr>
      <tr>
        <td width="240"><a href="https://www.codewars.com/kata/590adadea658017d90000039" target="_blank">Fruit Machine</a></td>
        <td width="380"><a href="https://www.codewars.com/kata/590adadea658017d90000039/ruby" target="_blank"><img src="https://raw.githubusercontent.com/adrianeyre/codewars/master/Ruby/Authored/ruby.png" width="30" height="30" alt="Rank"></a><a href="https://www.codewars.com/kata/590adadea658017d90000039/python" target="_blank"><img src="https://raw.githubusercontent.com/adrianeyre/codewars/master/Ruby/Authored/python.png" width="30" height="30" alt="Rank"></a><a href="https://www.codewars.com/kata/590adadea658017d90000039/javascript" target="_blank"><img src="https://raw.githubusercontent.com/adrianeyre/codewars/master/Ruby/Authored/javascript.png" width="30" height="30" alt="Rank"></a><a href="https://www.codewars.com/kata/590adadea658017d90000039/csharp" target="_blank"><img src="https://raw.githubusercontent.com/adrianeyre/codewars/master/Ruby/Authored/csharp.png" width="30" height="30" alt="Rank"></a><a href="https://www.codewars.com/kata/590adadea658017d90000039/haskell" target="_blank"><img src="https://raw.githubusercontent.com/adrianeyre/codewars/master/Ruby/Authored/haskell.png" width="30" height="30" alt="Rank"></a><a href="https://www.codewars.com/kata/590adadea658017d90000039/crystal" target="_blank"><img src="https://raw.githubusercontent.com/adrianeyre/codewars/master/Ruby/Authored/crystal.png" width="30" height="30" alt="Rank"></a></td>
        <td width="66"><img src="https://raw.githubusercontent.com/adrianeyre/codewars/master/Ruby/Authored/6KYU.png" width="51" height="26" alt="Rank"></td>
      </tr>
      <tr>
        <td width="240"><a href="https://www.codewars.com/kata/591eab1d192fe0435e000014" target="_blank">Car Park Escape</a></td>
        <td width="380"><a href="https://www.codewars.com/kata/591eab1d192fe0435e000014/ruby" target="_blank"><img src="https://raw.githubusercontent.com/adrianeyre/codewars/master/Ruby/Authored/ruby.png" width="30" height="30" alt="Rank"></a><a href="https://www.codewars.com/kata/591eab1d192fe0435e000014/python" target="_blank"><img src="https://raw.githubusercontent.com/adrianeyre/codewars/master/Ruby/Authored/python.png" width="30" height="30" alt="Rank"></a><a href="https://www.codewars.com/kata/591eab1d192fe0435e000014/javascript" target="_blank"><img src="https://raw.githubusercontent.com/adrianeyre/codewars/master/Ruby/Authored/javascript.png" width="30" height="30" alt="Rank"></a><a href="https://www.codewars.com/kata/591eab1d192fe0435e000014/php" target="_blank"><img src="https://raw.githubusercontent.com/adrianeyre/codewars/master/Ruby/Authored/php.png" width="30" height="30" alt="Rank"></a><a href="https://www.codewars.com/kata/591eab1d192fe0435e000014/typescript" target="_blank"><img src="https://raw.githubusercontent.com/adrianeyre/codewars/master/Ruby/Authored/typescript.png" width="30" height="30" alt="Rank"></a><a href="https://www.codewars.com/kata/591eab1d192fe0435e000014/crystal" target="_blank"></a><a href="https://www.codewars.com/kata/591eab1d192fe0435e000014/csharp" target="_blank"><img src="https://raw.githubusercontent.com/adrianeyre/codewars/master/Ruby/Authored/csharp.png" width="30" height="30" alt="Rank"></a><a href="https://www.codewars.com/kata/591eab1d192fe0435e000014/fsharp" target="_blank"><img src="https://raw.githubusercontent.com/adrianeyre/codewars/master/Ruby/Authored/fsharp.png" width="30" height="30" alt="Rank"></a></td>
        <td width="66"><img src="https://raw.githubusercontent.com/adrianeyre/codewars/master/Ruby/Authored/5KYU.png" width="51" height="26" alt="Rank"></td>
      </tr>
    </tbody></table></td>
    <td>&#xA0;</td>
  </tr>
</tbody></table>

### Solution