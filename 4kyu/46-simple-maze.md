### Problem:
<p>Kate constantly finds herself in some kind of a maze. Help her to find a way out!.</p>
<p>For a given maze and Kate&apos;s position find if there is a way out. Your function should return True or False.</p>
<p>Each maze is defined as a list of strings, where each char stays for a single maze &quot;cell&quot;. &apos; &apos; (space) can be stepped on, &apos;#&apos; means wall and &apos;k&apos; stays for Kate&apos;s starting position. Note that the maze may not always be square or even rectangular.</p>
<p>Kate can move left, up, right or down only.</p>
<p>There should be only one Kate in a maze. In any other case you have to throw an exception.</p>
<h1 id="example-input">Example input</h1>
<pre><code>[&apos;# ##&apos;,
 &apos;# k#&apos;,
 &apos;####&apos;]</code></pre><h1 id="example-output">Example output</h1>
<p>True</p>
<h1 id="example-input-1">Example input</h1>
<pre><code>[&apos;####&apos;.
 &apos;# k#&apos;,
 &apos;####&apos;]</code></pre><h1 id="example-output-1">Example output</h1>
<p>False</p>

### Solution