### Problem:
<h1 id="description">Description</h1>
<p>&quot;It&apos;s the end of trick-or-treating and we have a list/array representing how much candy each child in our group has made out with. We don&apos;t want the kids to start arguing, and using our parental intuition we know trouble is brewing as many of the children in the group have received different amounts of candy from each home. </p>
<p>So we want each child to have the same amount of candies, only we can&apos;t exactly take any candy away from the kids, that would be even worse. Instead we decide to give each child extra candy until they all have the same amount.</p>
<h1 id="task">Task</h1>
<p>Your job is to find out how much candy each child has, and give them each additional candy until they too have as much as the child(ren) with the most candy. You also want to keep a total of how much candy you&apos;ve handed out because reasons.&quot;</p>
<p>Your job is to give all the kids the same amount of candies as the kid with the most candies and then return the total number candies that have been given out. If there are no kids, or only one, return -1. </p>
<p>In the first case (look below) the most candies are given to second kid (i.e second place in list/array), 8. Because of that we will give the first kid 3 so he can have 8 and the third kid 2 and the fourth kid 4, so all kids will have 8 candies.So we end up handing out 3 + 2 + 4 = 9.</p>
<pre><code class="language-python">candies ([<span class="hljs-number">5</span>,<span class="hljs-number">8</span>,<span class="hljs-number">6</span>,<span class="hljs-number">4</span>]) <span class="hljs-comment"># return 9</span>

candies ([<span class="hljs-number">1</span>,<span class="hljs-number">2</span>,<span class="hljs-number">4</span>,<span class="hljs-number">6</span>]) <span class="hljs-comment"># return 11</span>

candies ([<span class="hljs-number">1</span>,<span class="hljs-number">6</span>]) <span class="hljs-comment"># return 5</span>

candies ([]) <span class="hljs-comment"># return -1</span>

candies ([<span class="hljs-number">6</span>]) <span class="hljs-comment"># return -1 (because only one kid)</span></code></pre>
<pre style="display: none;"><code class="language-ruby">candies ([<span class="hljs-number">5</span>,<span class="hljs-number">8</span>,<span class="hljs-number">6</span>,<span class="hljs-number">4</span>]) <span class="hljs-comment"># return 9</span>

candies ([<span class="hljs-number">1</span>,<span class="hljs-number">2</span>,<span class="hljs-number">4</span>,<span class="hljs-number">6</span>]) <span class="hljs-comment"># return 11</span>

candies ([]) <span class="hljs-comment"># return -1</span>

candies ([<span class="hljs-number">1</span>,<span class="hljs-number">6</span>]) <span class="hljs-comment"># return 5</span></code></pre>
<pre style="display: none;"><code class="language-javascript">candies ([<span class="hljs-number">5</span>,<span class="hljs-number">8</span>,<span class="hljs-number">6</span>,<span class="hljs-number">4</span>]) <span class="hljs-comment">// return 9</span>

candies ([<span class="hljs-number">1</span>,<span class="hljs-number">2</span>,<span class="hljs-number">4</span>,<span class="hljs-number">6</span>]) <span class="hljs-comment">// return 11</span>

candies ([]) <span class="hljs-comment">// return -1</span>

candies ([<span class="hljs-number">1</span>,<span class="hljs-number">6</span>]) <span class="hljs-comment">// return 5</span></code></pre>
<pre style="display: none;"><code class="language-cs">CandyProblem.GetMissingCandies(<span class="hljs-keyword">new</span> [] {<span class="hljs-number">5</span>, <span class="hljs-number">6</span>, <span class="hljs-number">8</span>, <span class="hljs-number">4</span>}) <span class="hljs-comment">// return 9</span>

CandyProblem.GetMissingCandies(<span class="hljs-keyword">new</span> [] {<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">4</span>, <span class="hljs-number">6</span>}) <span class="hljs-comment">// return 11</span>

CandyProblem.GetMissingCandies(<span class="hljs-keyword">new</span> [] { }) <span class="hljs-comment">// return -1</span>

CandyProblem.GetMissingCandies(<span class="hljs-keyword">new</span> [] {<span class="hljs-number">1</span>, <span class="hljs-number">6</span>}) <span class="hljs-comment">// return 5</span>
</code></pre>
<pre style="display: none;"><code class="language-haskell"><span class="hljs-title">candies</span> [<span class="hljs-number">5</span>,<span class="hljs-number">8</span>,<span class="hljs-number">6</span>,<span class="hljs-number">4</span>] <span class="hljs-comment">-- return 9</span>

<span class="hljs-title">candies</span> [<span class="hljs-number">1</span>,<span class="hljs-number">2</span>,<span class="hljs-number">4</span>,<span class="hljs-number">6</span>] <span class="hljs-comment">-- return 11</span>

<span class="hljs-title">candies</span> [] <span class="hljs-comment">-- return -1</span>

<span class="hljs-title">candies</span> [<span class="hljs-number">1</span>,<span class="hljs-number">6</span>] <span class="hljs-comment">-- return 5</span></code></pre>

### Solution