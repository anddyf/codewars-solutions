### Problem:
<p>Create two functions to encode and then decode a string using the Rail Fence Cipher. This cipher is used to encode a string by placing each character successively in a diagonal along a set of &quot;rails&quot;. First start off moving diagonally and down. When you reach the bottom, reverse direction and move diagonally and up until you reach the top rail. Continue until you reach the end of the string. Each &quot;rail&quot; is then read left to right to derive the encoded string.</p>
<p>For example, the string <code>&quot;WEAREDISCOVEREDFLEEATONCE&quot;</code> could be represented in a three rail system as follows:</p>
<pre><code>W       E       C       R       L       T       E
  E   R   D   S   O   E   E   F   E   A   O   C  
    A       I       V       D       E       N    </code></pre><p>The encoded string would be:</p>
<pre><code>WECRLTEERDSOEEFEAOCAIVDEN</code></pre><p>Write a function/method that takes 2 arguments, a string and the number of rails, and returns the ENCODED string. </p>
<p>Write a second function/method that takes 2 arguments, an encoded string and the number of rails, and returns the DECODED string.</p>
<p>For both encoding and decoding, assume number of rails &gt;= 2 and that passing an empty string will return an empty string.</p>
<p>Note that the example above excludes the punctuation and spaces just for simplicity. There are, however, tests that include punctuation. Don&apos;t filter out punctuation as they are a part of the string.</p>

### Solution