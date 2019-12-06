### Problem:
<p>You have a group chat application, but who is online!?</p>
<p>You want to show your users which of their friends are online and available to chat!</p>
<p>Given an input of an array of objects containing usernames, status and time since last activity (in mins), create a function to work out who is <code>online</code>, <code>offline</code> and <code>away</code>.</p>
<p>If someone is <code>online</code> but their <code>lastActivity</code> was more than 10 minutes ago they are to be considered <code>away</code>.</p>
<p>The input data has the following structure: </p>
<pre><code class="language-js">[{
  <span class="hljs-attr">username</span>: <span class="hljs-string">&apos;David&apos;</span>,
  <span class="hljs-attr">status</span>: <span class="hljs-string">&apos;online&apos;</span>,
  <span class="hljs-attr">lastActivity</span>: <span class="hljs-number">10</span>
}, {
  <span class="hljs-attr">username</span>: <span class="hljs-string">&apos;Lucy&apos;</span>, 
  <span class="hljs-attr">status</span>: <span class="hljs-string">&apos;offline&apos;</span>,
  <span class="hljs-attr">lastActivity</span>: <span class="hljs-number">22</span>
}, {
  <span class="hljs-attr">username</span>: <span class="hljs-string">&apos;Bob&apos;</span>, 
  <span class="hljs-attr">status</span>: <span class="hljs-string">&apos;online&apos;</span>,
  <span class="hljs-attr">lastActivity</span>: <span class="hljs-number">104</span>
}]</code></pre>
<pre style="display: none;"><code class="language-csharp"><span class="hljs-comment">// Example input:</span>
<span class="hljs-keyword">new</span> User[] 
{
  <span class="hljs-keyword">new</span> User(<span class="hljs-string">&quot;David&quot;</span>, UserStatus.Online, <span class="hljs-number">10</span>),
  <span class="hljs-keyword">new</span> User(<span class="hljs-string">&quot;Lucy&quot;</span>, UserStatus.Offline, <span class="hljs-number">22</span>),
  <span class="hljs-keyword">new</span> User(<span class="hljs-string">&quot;Bob&quot;</span>, UserStatus.Online, <span class="hljs-number">104</span>)
};

<span class="hljs-comment">// Reference:</span>
<span class="hljs-keyword">public</span> <span class="hljs-keyword">enum</span> UserStatus
{
  Online,
  Offline,
  Away
}

<span class="hljs-keyword">public</span> <span class="hljs-keyword">class</span> <span class="hljs-title">User</span>
{
  <span class="hljs-keyword">public</span> <span class="hljs-keyword">string</span> Username;
  <span class="hljs-keyword">public</span> UserStatus Status;
  <span class="hljs-keyword">public</span> <span class="hljs-keyword">int</span> LastActivity;
  <span class="hljs-function"><span class="hljs-keyword">public</span> <span class="hljs-title">User</span>(<span class="hljs-params"><span class="hljs-keyword">string</span> username, UserStatus status, <span class="hljs-keyword">int</span> lastActivity</span>)</span>
  {
    Username = username;
    Status = status;
    LastActivity = lastActivity;
  }
}</code></pre>
<p>The corresponding output should look as follows:</p>
<pre><code class="language-js">{
  <span class="hljs-attr">online</span>: [<span class="hljs-string">&apos;David&apos;</span>],
  <span class="hljs-attr">offline</span>: [<span class="hljs-string">&apos;Lucy&apos;</span>],
  <span class="hljs-attr">away</span>: [<span class="hljs-string">&apos;Bob&apos;</span>]
}</code></pre>
<pre style="display: none;"><code class="language-csharp">Dictionary&lt;UserStatus, IEnumerable&lt;<span class="hljs-keyword">string</span>&gt;&gt;
{
  {UserStatus.Online, <span class="hljs-keyword">new</span>[] {<span class="hljs-string">&quot;David&quot;</span>}},
  {UserStatus.Offline, <span class="hljs-keyword">new</span>[] {<span class="hljs-string">&quot;Lucy&quot;</span>}},
  {UserStatus.Away, <span class="hljs-keyword">new</span>[] {<span class="hljs-string">&quot;Bob&quot;</span>}}
};</code></pre>
<p>If for example, no users are <code>online</code> the output should look as follows: </p>
<pre><code class="language-js">{
  <span class="hljs-attr">offline</span>: [<span class="hljs-string">&apos;Lucy&apos;</span>],
  <span class="hljs-attr">away</span>: [<span class="hljs-string">&apos;Bob&apos;</span>]
}</code></pre>
<pre style="display: none;"><code class="language-csharp"><span class="hljs-keyword">new</span> Dictionary&lt;UserStatus, IEnumerable&lt;<span class="hljs-keyword">string</span>&gt;&gt;
{
  {UserStatus.Offline, <span class="hljs-keyword">new</span>[] {<span class="hljs-string">&quot;Lucy&quot;</span>}},
  {UserStatus.Away, <span class="hljs-keyword">new</span>[] {<span class="hljs-string">&quot;Bob&quot;</span>}}
};</code></pre>
<p>username will always be a <code>string</code>, status will always be either <code>&apos;online&apos;</code> or <code>&apos;offline&apos;</code> (UserStatus enum in C#) and lastActivity will always be <code>number &gt;= 0</code>.</p>
<p>Finally, if you have no friends in your chat application, the input will be an empty array <code>[]</code>.  In this case you should return an empty object <code>{}</code> (empty Dictionary in C#).</p>

### Solution