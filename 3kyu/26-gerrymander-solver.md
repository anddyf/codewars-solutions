### Problem:
<!--Gerrymander Solver-->
<img src="https://i.imgur.com/8UQHI9E.jpg">
<p><span style="color:#8df"><b><a href="https://en.wikipedia.org/wiki/Gerrymandering" style="color:#9f9;text-decoration:none" target="_blank">gerrymander</a></b></span> &#x2014; <i>noun.</i> the dividing of a state, county, etc., into election districts so as to give one political party a majority in many districts while concentrating the voting strength of the other party into as few districts as possible.</p>

<h2 style="color:#f88">Objective</h2>
<p>Given a <code>5 x 5</code> region populated by <code>25</code> citizens, your task is to write a function that divides the region into <code>5</code> districts given the following conditions:</p>
<ul>
    <li><code>10</code> citizens will vote for your candidate, while the other <code>15</code> will vote for the opponent</li>
    <li>Your candidate must win the popular vote for <code>3</code> of the <code>5</code> districts</li>
    <li>Each district must have an equal number of voters</li>
    <li>Each district must be one contiguous cluster of voters (i.e. each voter has one or more orthogonally adjacent neighbors from the same district)</li>
</ul>

<h2 style="color:#f88">Concept Overview</h2>
<img src="https://i.imgur.com/FxmmO8y.png">
<p><code>A</code>: You&apos;re given a <code>5 x 5</code> square matrix representing the layout of the region occupied by eligible voters. The following panels show different ways to set boundaries for <code>5</code> districts.</p>
<ul>
    <li><code>B</code>: Proportionate outcome &#x2014; blue and red win in proportion to their voting</li>
    <li><code>C</code>: Disproportionate outcome &#x2014; blue wins all</li>
    <li><code>D</code>: <span style="background:#600">Disproportionate outcome &#x2014; red wins majority despite having fewer total supporters</span></li>
</ul>
<p>Your function must solve the challenge presented in panel <code>D</code></p>

<h2 style="color:#f88">Input</h2>
<p>Your function will receive a newline-separated string consisting of <code>X</code> and <code>O</code> characters. The <code>O</code>s represent the voters in support of your candidate, and the <code>X</code>s represent those in support of the opponent.</p>

<h2 style="color:#f88">Output</h2>
<p>Your function should return a <code>5x5</code> newline-separated string comprised of the digits <code>1</code> through <code>5</code> where each group of identical digits represents its own unique district.</p>
<p>If a solution does not exist, return <code>null</code>, <code>None</code>, or <code>nil</code></p>

<h2 style="color:#f88">Test Example</h2>
<img src="https://i.imgur.com/EFzVwB7.png">

<pre><code class="language-javascript"><span class="hljs-keyword">let</span> region = [
    <span class="hljs-string">&apos;OOXXX&apos;</span>,
    <span class="hljs-string">&apos;OOXXX&apos;</span>,
    <span class="hljs-string">&apos;OOXXX&apos;</span>,
    <span class="hljs-string">&apos;OOXXX&apos;</span>,
    <span class="hljs-string">&apos;OOXXX&apos;</span>
].join(<span class="hljs-string">&apos;\n&apos;</span>);

<span class="hljs-comment">// one possible solution where regions 1,2, and 3 are won</span>
gerrymander(region); <span class="hljs-comment">// &apos;11114\n12244\n22244\n35555\n33335&apos;</span></code></pre>
<pre style="display: none;"><code class="language-python">region = [
    <span class="hljs-string">&apos;OOXXX&apos;</span>,
    <span class="hljs-string">&apos;OOXXX&apos;</span>,
    <span class="hljs-string">&apos;OOXXX&apos;</span>,
    <span class="hljs-string">&apos;OOXXX&apos;</span>,
    <span class="hljs-string">&apos;OOXXX&apos;</span>
]

<span class="hljs-comment"># one possible solution where regions 1,2, and 3 are won</span>
gerrymander(<span class="hljs-string">&apos;\n&apos;</span>.join(region)) <span class="hljs-comment"># &apos;11114\n12244\n22244\n35555\n33335&apos;</span></code></pre>
<pre style="display: none;"><code class="language-java">String region = String.join(<span class="hljs-string">&quot;\n&quot;</span>,
    <span class="hljs-string">&quot;OOXXX&quot;</span>,
    <span class="hljs-string">&quot;OOXXX&quot;</span>,
    <span class="hljs-string">&quot;OOXXX&quot;</span>,
    <span class="hljs-string">&quot;OOXXX&quot;</span>,
    <span class="hljs-string">&quot;OOXXX&quot;</span>
);

<span class="hljs-comment">// one possible solution where regions 1,2, and 3 are won</span>
gerrymander(region);
<span class="hljs-comment">// &quot;11114\n12244\n22244\n35555\n33335&quot;</span></code></pre>
<h2 style="color:#f88">Testing Constraints</h2>

<ul>
<li>Full Test Suite: <code>10</code> fixed tests and <code>50</code> randomly-generated tests</li>
</ul>
<ul>
<li>Zero or more valid solutions will exist for each test</li>
<li>Inputs will always be valid</li>
</ul>
<p>If you enjoyed this kata, be sure to check out <a href="https://www.codewars.com/users/docgunthrop/authored" style="color:#9f9;text-decoration:none" target="_blank">my other katas</a></p>
### Solution