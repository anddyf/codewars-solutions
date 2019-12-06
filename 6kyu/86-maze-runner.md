### Problem:
<h1 id="introduction">Introduction</h1>
<table width="100%" border="0" cellspacing="0" cellpadding="0">
  <tbody><tr>
    <td width="10" bgcolor="#181818">&#xA0;
    </td>
    <td bgcolor="#181818">
Welcome Adventurer. Your aim is to navigate the maze and reach the finish point without touching any walls. Doing so will kill you instantly!
    </td>
  </tr>
</tbody></table>

<table width="100%" border="0" cellspacing="0" cellpadding="0">
  <tbody><tr>
    <td>&#xA0;</td>
  </tr>
</tbody></table>

<center><img src="https://raw.githubusercontent.com/adrianeyre/codewars/master/Ruby/Authored/mazerunner.jpg" alt="Maze Runner"></center>

<h1 id="task">Task</h1>
<table width="100%" border="0" cellspacing="0" cellpadding="0">
  <tbody><tr>
    <td width="10" bgcolor="#181818">&#xA0;
    </td>
    <td bgcolor="#181818">
You will be given a 2D array of the maze and an array of directions. Your task is to follow the directions given. If you reach the end point before all your moves have gone, you should return <font color="#A1A85E">Finish</font>. If you hit any walls or go outside the maze border, you should return <font color="#A1A85E">Dead</font>. If you find yourself still in the maze after using all the moves, you should return <font color="#A1A85E">Lost</font>.
    </td>
  </tr>
</tbody></table>

<table width="100%" border="0" cellspacing="0" cellpadding="0">
  <tbody><tr>
    <td>&#xA0;</td>
  </tr>
</tbody></table>

<p>The Maze array will look like</p>
<pre><code class="language-c">maze = [[<span class="hljs-number">1</span>,<span class="hljs-number">1</span>,<span class="hljs-number">1</span>,<span class="hljs-number">1</span>,<span class="hljs-number">1</span>,<span class="hljs-number">1</span>,<span class="hljs-number">1</span>],
        [<span class="hljs-number">1</span>,<span class="hljs-number">0</span>,<span class="hljs-number">0</span>,<span class="hljs-number">0</span>,<span class="hljs-number">0</span>,<span class="hljs-number">0</span>,<span class="hljs-number">3</span>],
        [<span class="hljs-number">1</span>,<span class="hljs-number">0</span>,<span class="hljs-number">1</span>,<span class="hljs-number">0</span>,<span class="hljs-number">1</span>,<span class="hljs-number">0</span>,<span class="hljs-number">1</span>],
        [<span class="hljs-number">0</span>,<span class="hljs-number">0</span>,<span class="hljs-number">1</span>,<span class="hljs-number">0</span>,<span class="hljs-number">0</span>,<span class="hljs-number">0</span>,<span class="hljs-number">1</span>],
        [<span class="hljs-number">1</span>,<span class="hljs-number">0</span>,<span class="hljs-number">1</span>,<span class="hljs-number">0</span>,<span class="hljs-number">1</span>,<span class="hljs-number">0</span>,<span class="hljs-number">1</span>],
        [<span class="hljs-number">1</span>,<span class="hljs-number">0</span>,<span class="hljs-number">0</span>,<span class="hljs-number">0</span>,<span class="hljs-number">0</span>,<span class="hljs-number">0</span>,<span class="hljs-number">1</span>],
        [<span class="hljs-number">1</span>,<span class="hljs-number">2</span>,<span class="hljs-number">1</span>,<span class="hljs-number">0</span>,<span class="hljs-number">1</span>,<span class="hljs-number">0</span>,<span class="hljs-number">1</span>]]</code></pre>
<p>..with the following key</p>
<table width="100%" border="0" cellspacing="0" cellpadding="0">
  <tbody><tr>
    <td width="10" bgcolor="#181818">&#xA0;
    </td>
    <td bgcolor="#181818">
      0 = Safe place to walk<br>
      1 = Wall<br>
      2 = Start Point<br>
      3 = Finish Point<br>
    </td>
  </tr>
</tbody></table>

<table width="100%" border="0" cellspacing="0" cellpadding="0">
  <tbody><tr>
    <td>&#xA0;</td>
  </tr>
</tbody></table>

<pre><code class="language-ruby">  direction = [<span class="hljs-string">&quot;N&quot;</span>,<span class="hljs-string">&quot;N&quot;</span>,<span class="hljs-string">&quot;N&quot;</span>,<span class="hljs-string">&quot;N&quot;</span>,<span class="hljs-string">&quot;N&quot;</span>,<span class="hljs-string">&quot;E&quot;</span>,<span class="hljs-string">&quot;E&quot;</span>,<span class="hljs-string">&quot;E&quot;</span>,<span class="hljs-string">&quot;E&quot;</span>,<span class="hljs-string">&quot;E&quot;</span>] == <span class="hljs-string">&quot;Finish&quot;</span></code></pre>
<pre style="display: none;"><code class="language-python">  direction = [<span class="hljs-string">&quot;N&quot;</span>,<span class="hljs-string">&quot;N&quot;</span>,<span class="hljs-string">&quot;N&quot;</span>,<span class="hljs-string">&quot;N&quot;</span>,<span class="hljs-string">&quot;N&quot;</span>,<span class="hljs-string">&quot;E&quot;</span>,<span class="hljs-string">&quot;E&quot;</span>,<span class="hljs-string">&quot;E&quot;</span>,<span class="hljs-string">&quot;E&quot;</span>,<span class="hljs-string">&quot;E&quot;</span>] == <span class="hljs-string">&quot;Finish&quot;</span></code></pre>
<pre style="display: none;"><code class="language-javascript">  direction = [<span class="hljs-string">&quot;N&quot;</span>,<span class="hljs-string">&quot;N&quot;</span>,<span class="hljs-string">&quot;N&quot;</span>,<span class="hljs-string">&quot;N&quot;</span>,<span class="hljs-string">&quot;N&quot;</span>,<span class="hljs-string">&quot;E&quot;</span>,<span class="hljs-string">&quot;E&quot;</span>,<span class="hljs-string">&quot;E&quot;</span>,<span class="hljs-string">&quot;E&quot;</span>,<span class="hljs-string">&quot;E&quot;</span>] == <span class="hljs-string">&quot;Finish&quot;</span></code></pre>
<pre style="display: none;"><code class="language-php">  direction = [<span class="hljs-string">&quot;N&quot;</span>,<span class="hljs-string">&quot;N&quot;</span>,<span class="hljs-string">&quot;N&quot;</span>,<span class="hljs-string">&quot;N&quot;</span>,<span class="hljs-string">&quot;N&quot;</span>,<span class="hljs-string">&quot;E&quot;</span>,<span class="hljs-string">&quot;E&quot;</span>,<span class="hljs-string">&quot;E&quot;</span>,<span class="hljs-string">&quot;E&quot;</span>,<span class="hljs-string">&quot;E&quot;</span>] == <span class="hljs-string">&quot;Finish&quot;</span></code></pre>
<pre style="display: none;"><code class="language-csharp">  direction = [<span class="hljs-string">&quot;N&quot;</span>,<span class="hljs-string">&quot;N&quot;</span>,<span class="hljs-string">&quot;N&quot;</span>,<span class="hljs-string">&quot;N&quot;</span>,<span class="hljs-string">&quot;N&quot;</span>,<span class="hljs-string">&quot;E&quot;</span>,<span class="hljs-string">&quot;E&quot;</span>,<span class="hljs-string">&quot;E&quot;</span>,<span class="hljs-string">&quot;E&quot;</span>,<span class="hljs-string">&quot;E&quot;</span>] == <span class="hljs-string">&quot;Finish&quot;</span></code></pre>
<pre style="display: none;"><code class="language-haskell">  direction = [<span class="hljs-string">&quot;N&quot;</span>,<span class="hljs-string">&quot;N&quot;</span>,<span class="hljs-string">&quot;N&quot;</span>,<span class="hljs-string">&quot;N&quot;</span>,<span class="hljs-string">&quot;N&quot;</span>,<span class="hljs-string">&quot;E&quot;</span>,<span class="hljs-string">&quot;E&quot;</span>,<span class="hljs-string">&quot;E&quot;</span>,<span class="hljs-string">&quot;E&quot;</span>,<span class="hljs-string">&quot;E&quot;</span>] == <span class="hljs-string">&quot;Finish&quot;</span></code></pre>
<h1 id="rules">Rules</h1>
<table width="100%" border="0" cellspacing="0" cellpadding="0">
  <tbody><tr>
    <td width="10" bgcolor="#181818">&#xA0;
    </td>
    <td bgcolor="#181818">
1. The Maze array will always be square i.e. <font color="#A1A85E">N x N</font> but its size and content will alter from test to test.<br>
2. The <font color="#A1A85E">start</font> and <font color="#A1A85E">finish</font> positions will change for the final tests.<br>
3. The directions array will always be in upper case and will be in the format of <font color="#A1A85E">N = North, E = East, W = West and S = South</font>.<br>

<pre><code>&lt;/td&gt;</code></pre>  </td></tr>
</tbody></table>

<table width="100%" border="0" cellspacing="0" cellpadding="0">
  <tbody><tr>
    <td>&#xA0;</td>
  </tr>
</tbody></table>

<p>Good luck, and stay safe!</p>
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