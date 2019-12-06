### Problem:
<h1 id="connect-four">Connect Four</h1>
<p>Take a look at wiki description of Connect Four game:</p>
<p><a href="https://en.wikipedia.org/wiki/Connect_Four" target="_blank">Wiki Connect Four</a></p>
<p>The grid is 6 row by 7 columns, those being named from A to G.</p>
<p>You will receive a list of strings showing the order of the pieces which dropped in columns:</p>
<p><img src="http://crowd-multilogue.com/Images/Codewars/KataConnectFourWinner.jpg" alt="alt text"></p>
<pre style="display: none;"><code class="language-cpp"><span class="hljs-built_in">std</span>::<span class="hljs-built_in">vector</span>&lt;<span class="hljs-built_in">std</span>::<span class="hljs-built_in">string</span>&gt; pieces_position_list
{
  <span class="hljs-string">&quot;A_Red&quot;</span>,
  <span class="hljs-string">&quot;B_Yellow&quot;</span>,
  <span class="hljs-string">&quot;A_Red&quot;</span>,
  <span class="hljs-string">&quot;B_Yellow&quot;</span>,
  <span class="hljs-string">&quot;A_Red&quot;</span>,
  <span class="hljs-string">&quot;B_Yellow&quot;</span>,
  <span class="hljs-string">&quot;G_Red&quot;</span>,
  <span class="hljs-string">&quot;B_Yellow&quot;</span>
}</code></pre>
<pre><code class="language-csharp">            List&lt;<span class="hljs-keyword">string</span>&gt; myList = <span class="hljs-keyword">new</span> List&lt;<span class="hljs-keyword">string</span>&gt;()
            {
                <span class="hljs-string">&quot;A_Red&quot;</span>,
                <span class="hljs-string">&quot;B_Yellow&quot;</span>,
                <span class="hljs-string">&quot;A_Red&quot;</span>,
                <span class="hljs-string">&quot;B_Yellow&quot;</span>,
                <span class="hljs-string">&quot;A_Red&quot;</span>,
                <span class="hljs-string">&quot;B_Yellow&quot;</span>,
                <span class="hljs-string">&quot;G_Red&quot;</span>,
                <span class="hljs-string">&quot;B_Yellow&quot;</span>
            };</code></pre>
<pre style="display: none;"><code class="language-javascript">  piecesPositionList = [<span class="hljs-string">&quot;A_Red&quot;</span>,
                        <span class="hljs-string">&quot;B_Yellow&quot;</span>,
                        <span class="hljs-string">&quot;A_Red&quot;</span>,
                        <span class="hljs-string">&quot;B_Yellow&quot;</span>,
                        <span class="hljs-string">&quot;A_Red&quot;</span>,
                        <span class="hljs-string">&quot;B_Yellow&quot;</span>,
                        <span class="hljs-string">&quot;G_Red&quot;</span>,
                        <span class="hljs-string">&quot;B_Yellow&quot;</span>]</code></pre>
<pre style="display: none;"><code class="language-ruby">  pieces_position_list = [<span class="hljs-string">&quot;A_Red&quot;</span>,
                          <span class="hljs-string">&quot;B_Yellow&quot;</span>,
                          <span class="hljs-string">&quot;A_Red&quot;</span>,
                          <span class="hljs-string">&quot;B_Yellow&quot;</span>,
                          <span class="hljs-string">&quot;A_Red&quot;</span>,
                          <span class="hljs-string">&quot;B_Yellow&quot;</span>,
                          <span class="hljs-string">&quot;G_Red&quot;</span>,
                          <span class="hljs-string">&quot;B_Yellow&quot;</span>]</code></pre>
<pre style="display: none;"><code class="language-python">  pieces_position_list = [<span class="hljs-string">&quot;A_Red&quot;</span>,
                          <span class="hljs-string">&quot;B_Yellow&quot;</span>,
                          <span class="hljs-string">&quot;A_Red&quot;</span>,
                          <span class="hljs-string">&quot;B_Yellow&quot;</span>,
                          <span class="hljs-string">&quot;A_Red&quot;</span>,
                          <span class="hljs-string">&quot;B_Yellow&quot;</span>,
                          <span class="hljs-string">&quot;G_Red&quot;</span>,
                          <span class="hljs-string">&quot;B_Yellow&quot;</span>]</code></pre>
<pre style="display: none;"><code class="language-php">  $piecesPositionList  = [<span class="hljs-string">&quot;A_Red&quot;</span>,
                          <span class="hljs-string">&quot;B_Yellow&quot;</span>,
                          <span class="hljs-string">&quot;A_Red&quot;</span>,
                          <span class="hljs-string">&quot;B_Yellow&quot;</span>,
                          <span class="hljs-string">&quot;A_Red&quot;</span>,
                          <span class="hljs-string">&quot;B_Yellow&quot;</span>,
                          <span class="hljs-string">&quot;G_Red&quot;</span>,
                          <span class="hljs-string">&quot;B_Yellow&quot;</span>];</code></pre>
<p>The list may contain up to 42 moves and shows the order the players are playing.</p>
<p>The first player who connects four items of the same color is the winner.</p>
<p>You should return &quot;Yellow&quot;, &quot;Red&quot; or &quot;Draw&quot; accordingly.</p>

### Solution