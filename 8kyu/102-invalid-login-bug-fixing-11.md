### Problem:
<h1 id="invalid-login---bug-fixing-11">Invalid Login - Bug Fixing #11</h1>
<p>Oh NO! Timmy has moved divisions... but now he&apos;s in the field of security. Timmy, being the top coder he is, has allowed some bad code through. You must help Timmy and filter out any injected code!</p>
<h2 id="task">Task</h2>
<p>Your task is simple, search the password string for any injected code (Injected code is any thing that would be used to exploit flaws in the current code, so basically anything that contains <code>||</code> or <code>//</code>) if you find any you must return <code>&quot;Wrong username or password!&quot;</code> because no one likes someone trying to cheat their way in!</p>
<h2 id="preloaded">Preloaded</h2>
<p>You will be given a preloaded class called <code>Database</code> with a method <code>login</code> this takes two parameters <code>username</code> and <code>password</code>. This is a generic login function which will check the database for the user it will return either <code>&apos;Successfully Logged in!&apos;</code> if it passes the test or <code>&apos;Wrong username or password!&apos;</code> if either the password is wrong or username does not exist.</p>
<h2 id="usage">Usage</h2>
<pre><code class="language-javascript"><span class="hljs-keyword">var</span> database = <span class="hljs-keyword">new</span> Database();
database.login(<span class="hljs-string">&apos;Timmy&apos;</span>, <span class="hljs-string">&apos;password&apos;</span>);</code></pre>
<pre style="display: none;"><code class="language-python">database = Database()
database.login(<span class="hljs-string">&apos;Timmy&apos;</span>, <span class="hljs-string">&apos;password&apos;</span>)</code></pre>
<pre style="display: none;"><code class="language-ruby">database = Database.new;
database.login(<span class="hljs-string">&apos;Timmy&apos;</span>, <span class="hljs-string">&apos;password&apos;</span>)</code></pre>

### Solution