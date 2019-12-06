### Problem:
<p>With your birthday coming up soon, your eccentric friend sent you a message to say &quot;happy birthday&quot;:</p>
<pre><code>hhhappyyyy biirrrrrthddaaaayyyyyyy to youuuu
hhapppyyyy biirtttthdaaay too youuu
happy birrrthdayy to youuu
happpyyyy birrtthdaaay tooooo youu</code></pre><p>At first it looks like a song, but upon closer investigation, you realize that your friend hid the phrase &quot;happy birthday&quot; thousands of times inside his message. In fact, it contains it more than 2 million times! To thank him, you&apos;d like to reply with exactly how many times it occurs.</p>
<p>To count all the occurences, the procedure is as follows: look through the paragraph and find a <code>&apos;h&apos;</code>; then find an <code>&apos;a&apos;</code> later in the paragraph; then find an <code>&apos;p&apos;</code> after that, and so on. Now count the number of ways in which you can choose letters in this way to make the full phrase.</p>
<p>More precisely, given a text string, you are to determine how many times the search string appears as a sub-sequence of that string.</p>
<p>Write a function called <code>countSubsequences</code> that takes two arguments: <code>needle</code>, the string to be search for and <code>haystack</code>, the string to search in. In our example, <code>&quot;happy birthday&quot;</code> is the needle and the birthday message is the haystack. The function should return the number of times <code>needle</code> occurs as a sub-sequence of <code>haystack</code>.  Spaces are also considered part of the needle.</p>
<p>Since the answers can be very large, return only the last 8 digits of the answer in case it exceeds 8 digits. The answers to the test cases will all be shorter than 8 digits.</p>

### Solution