### Problem:
<h1 id="introduction">Introduction</h1>
<table width="100%" border="0" cellspacing="0" cellpadding="0">
  <tbody><tr>
    <td width="10" bgcolor="#181818">&#xA0;
    </td>
    <td bgcolor="#181818">
Mastermind or Master Mind is a code-breaking game for two players. The modern game with pegs was invented in 1970 by Mordecai Meirowitz, an Israeli postmaster and telecommunications expert. It resembles an earlier pencil and paper game called Bulls and Cows that may date back a century or more. (Source <a href="https://en.wikipedia.org/wiki/Mastermind_(board_game)" target="_blank">Wikipedia</a>)
    </td>
  </tr>
</tbody></table>

<table width="100%" border="0" cellspacing="0" cellpadding="0">
  <tbody><tr>
    <td>&#xA0;</td>
  </tr>
</tbody></table>

<center><img src="https://raw.githubusercontent.com/adrianeyre/codewars/master/Ruby/Authored/mastermind.jpg"></center>

<h1 id="rules">Rules</h1>
<table width="100%" border="0" cellspacing="0" cellpadding="0">
  <tbody><tr>
    <td width="10" bgcolor="#181818">&#xA0;
    </td>
    <td bgcolor="#181818">
1. The Mastermind (computer) will select 4 colours. The colours are randomly selected from <font color="#A1A85E">[&quot;Red&quot;, &quot;Blue&quot;, &quot;Green&quot;, &quot;Orange&quot;, &quot;Purple&quot;, &quot;Yellow&quot;]</font>. Colours can be duplicated but there will always be exactly <font color="#A1A85E">4</font>.<br>

<ol start="2">
<li><p>The Mastermind will return an array back to you. For every correctly positioned colour in the array an element of <font color="#A1A85E">&#x201C;Black&#x201D;</font> is returned. For every correct colour but in the wrong position an element of <font color="#A1A85E">&#x201C;White&#x201D;</font> will be returned.<br></p>
</li>
<li><p>Passing the correct array will pass the Kata test and return <font color="#A1A85E">&quot;WON!&quot;</font>.<br></p>
</li>
<li><p>Passing an invalid colour will fail the test with the error <font color="#A1A85E">&quot;Error: you have given an invalid colour!&quot;</font><br></p>
</li>
<li><p>Passing an invalid array length will fail the test with the error <font color="#A1A85E">&quot;Error: you must pass 4 colours!&quot;</font><br></p>
</li>
<li><p>Guessing more than 60 times will fail the test with the error <font color="#A1A85E">&quot;Error: you have had more than 60 tries!&quot;</font><br></p>
</li>
<li><p>All colours are capitalised<br></p>
</li>
<li><p>The return array will be shuffled!</p>
 </li></ol></td>
</tr>
</tbody></table>



<h1 id="task">Task</h1>
<table width="100%" border="0" cellspacing="0" cellpadding="0">
  <tbody><tr>
    <td width="10" bgcolor="#181818">&#xA0;
    </td>
    <td bgcolor="#181818">
Your task is to create a method called <font color="#A1A85E">mastermind()</font> that will take an object called <font color="#A1A85E"> game</font>. The object has already been preloaded so you do not need to worry about it.<br>
Within your method you must pass an array into the game object method <font color="#A1A85E">.check()</font>. This will evoke the object to check your array to see if it is correct.
    </td>
  </tr>
</tbody></table>

<h1 id="example">Example</h1>
<p>If the Mastermind selected the following colours<br>
<img src="https://raw.githubusercontent.com/adrianeyre/codewars/master/Ruby/Authored/mastermind1.png"><br>
Then the array you are trying to solve is <code>[&quot;Red&quot;, &quot;Blue&quot;, &quot;Green&quot;, &quot;Yellow&quot;]</code><br><br>
So you guess with <br>
<img src="https://raw.githubusercontent.com/adrianeyre/codewars/master/Ruby/Authored/mastermind2.png"><br>
<code>[&quot;Red&quot;, &quot;Orange&quot;, &quot;Yellow&quot;, &quot;Orange&quot;]</code></p>
<p>Your method would look like this.</p>
<pre><code class="language-ruby"><span class="hljs-function"><span class="hljs-keyword">def</span> <span class="hljs-title">mastermind</span><span class="hljs-params">(game)</span></span>
  answer = game.check([<span class="hljs-string">&quot;Red&quot;</span>, <span class="hljs-string">&quot;Orange&quot;</span>, <span class="hljs-string">&quot;Yellow&quot;</span>, <span class="hljs-string">&quot;Orange&quot;</span>])
<span class="hljs-keyword">end</span></code></pre>
<pre style="display: none;"><code class="language-python"><span class="hljs-function"><span class="hljs-keyword">def</span> <span class="hljs-title">mastermind</span><span class="hljs-params">(game)</span>:</span>
  answer = game.check([<span class="hljs-string">&quot;Red&quot;</span>, <span class="hljs-string">&quot;Orange&quot;</span>, <span class="hljs-string">&quot;Yellow&quot;</span>, <span class="hljs-string">&quot;Orange&quot;</span>])</code></pre>
<pre style="display: none;"><code class="language-javascript"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">mastermind</span>(<span class="hljs-params">game</span>)</span>{
  answer = game.check([<span class="hljs-string">&quot;Red&quot;</span>, <span class="hljs-string">&quot;Orange&quot;</span>, <span class="hljs-string">&quot;Yellow&quot;</span>, <span class="hljs-string">&quot;Orange&quot;</span>]);
}</code></pre>
<p>The element <code>0 =&gt; Red</code> is at the correct index so <code>Black</code> is added to the return array. Element <code>2 =&gt; Yellow</code> is in the array but at the wrong index possition so <code>White</code> is added to the return array.</p>
<p>The Mastermind would then return <code>[&quot;Black&quot;, &quot;White&quot;]</code> (But not necessarily in that order as the return array is shuffled my the Mastermind).</p>
<p>Keep guessing until you pass the correct solution which will pass the Kata.</p>
<h1 id="check-result">Check result</h1>
<p>To check the Masterminds return value</p>
<pre><code class="language-ruby">  answer = game.check([<span class="hljs-string">&quot;Red&quot;</span>, <span class="hljs-string">&quot;Orange&quot;</span>, <span class="hljs-string">&quot;Yellow&quot;</span>, <span class="hljs-string">&quot;Orange&quot;</span>])
  p answer</code></pre>
<pre style="display: none;"><code class="language-python">  answer = game.check([<span class="hljs-string">&quot;Red&quot;</span>, <span class="hljs-string">&quot;Orange&quot;</span>, <span class="hljs-string">&quot;Yellow&quot;</span>, <span class="hljs-string">&quot;Orange&quot;</span>])
  <span class="hljs-keyword">print</span> (answer)</code></pre>
<pre style="display: none;"><code class="language-javascript">  answer = game.check([<span class="hljs-string">&quot;Red&quot;</span>, <span class="hljs-string">&quot;Orange&quot;</span>, <span class="hljs-string">&quot;Yellow&quot;</span>, <span class="hljs-string">&quot;Orange&quot;</span>]);
  <span class="hljs-built_in">console</span>.log(answer);</code></pre>
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