### Problem:
<h2 id="story">Story</h2>
<p>You have a list of domain names from a log file, indicating the number of times the computer accessed those sites. However, the list shows subdomains too, but you want to see only the main sites and the total number of accesses. For example <code>6.clients-channel.google.com</code> and <code>apis.google.com</code> should be counted together as <code>google.com</code>.</p>
<h2 id="task">Task</h2>
<p>Write a function <code>count_domains()</code> that takes two arguments: </p>
<ul>
<li><code>domains</code> is a list of domain names, showing the number of access requests to each domain, as you copied it from the logs</li>
<li>and the optional <code>min_hits</code> which defines what is the minimum number of accesses in order to appear on the output list. If this is not given, consider it <code>0</code>.</li>
</ul>
<p>Return a string ready to be printed, showing the sites with the total number of accesses, in a decreasing order.</p>
<p><em>Output requirements:</em></p>
<ul>
<li>the output should show the sites with the total number of accesses in parentheses,</li>
<li>sites should have only 2 levels (e.g. <code>ebay.com</code>), except for <code>.co.xx</code> and <code>.com.xx</code> type domains, which should have 3 levels (e.g. <code>amazon.co.jp</code>),</li>
<li>the list should be sorted in decreasing order of access,</li>
<li>if two sites have the same number of accesses, sort them alphabetically,</li>
<li>entries should be separated by newlines (<code>\n</code>)</li>
</ul>
<h2 id="example">Example</h2>
<pre><code class="language-python">domains_list = <span class="hljs-string">&apos;&apos;&apos;\
*.amazon.co.uk    89
*.doubleclick.net    139
*.fbcdn.net    212
*.in-addr.arpa    384
*.l.google.com    317
1.client-channel.google.com    110
6.client-channel.google.com    45
a.root-servers.net    1059
apis.google.com    43
clients4.google.com    71
clients6.google.com    81
connect.facebook.net    68
edge-mqtt.facebook.com    56
graph.facebook.com    150
mail.google.com    128
mqtt-mini.facebook.com    47
ssl.google-analytics.com    398
star-mini.c10r.facebook.com    46
staticxx.facebook.com    48
www.facebook.com    178
www.google.com    162
www.google-analytics.com    127
www.googleapis.com    87&apos;&apos;&apos;</span>

count_domains(domains_list, <span class="hljs-number">500</span>) = <span class="hljs-string">&apos;&apos;&apos;\
root-servers.net (1059)
google.com (957)
facebook.com (525)
google-analytics.com (525)&apos;&apos;&apos;</span></code></pre>
<hr>
<h2 id="my-other-katas">My other katas</h2>
<p>If you enjoyed this kata then please try <a href="https://www.codewars.com/collections/katas-created-by-anter69" target="_blank">my other katas</a>! :-)</p>
<h4 id="translations-are-welcome"><em>Translations are welcome!</em></h4>

### Solution